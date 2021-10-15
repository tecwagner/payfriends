import { PageQuery, QueryBuilder } from "./pagination-entities";

export class PageRequest implements QueryBuilder {
  constructor(
    public pageQuery: PageQuery,
    public aditionalQuery: Map<string, string>
  ) {}

  buildQueryMap(): Map<string, string> {
    let buildQueryMap = new Map<string, string>([...this.buildPageQueryMap()]);

    if (this.aditionalQuery) {
      buildQueryMap = new Map<string, string>([
        ...buildQueryMap,
        ...this.aditionalQuery,
      ]);
    }
    return buildQueryMap;
  }
  buildQueryString(): string {
    return Array.from(this.buildQueryMap())
      .map((itemArray) => `${itemArray[0]}=${itemArray[1]}`)
      .join("&");
  }
  buildPageQueryMap(): Map<string, string> {
    let buildPageQueryMap = new Map<string, string>();

    buildPageQueryMap.set("_page", `${this.pageQuery.pageNumber + 1}`);
    buildPageQueryMap.set("_limit", `${this.pageQuery.pageSize + 1}`);

    return buildPageQueryMap;
  }
}

export class Page<T> {
  constructor(public content: T[], public totalElements: number) {}

  static fromResponse<T>(respopnse: any) {
    return new Page<T>(
      respopnse.body,
      parseInt(respopnse.headers.get("X-Total-Count"))
    );
  }
}
