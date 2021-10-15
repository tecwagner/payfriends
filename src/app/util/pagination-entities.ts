export interface PageQuery {
  pageNumber: number;
  pageSize: number;
}

export interface QueryBuilder {
  pageQuery: PageQuery;
  aditionalQuery: Map<string, string>;
  buildQueryMap(): Map<string, string>;
  buildQueryString(): string;
  buildPageQueryMap(): Map<string, string>;
}
