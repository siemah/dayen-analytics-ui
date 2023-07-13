import { apiGraphqlEndpoint } from "@/config/constants";
import { GraphQlBody, GraphQlPaginationVariables } from "@/graphql/types";
import graphqlFetch from "@/utils/http";

/**
 * Fetch popular referrers visited within the website
 * 
 * @param variables filter data of the global stats
 * @returns technologies stats details
 */
export default async function getPopularReferrers(variables?: GraphQlPaginationVariables) {
  try {
    const query = `
      query {
        popularReferrers {
          name
          total
        }
      }
    `;
    let queryBody: GraphQlBody = {
      query
    };
    const data = await graphqlFetch(queryBody);
    
    return data;
  } catch (error) {
    return [];
  }
}