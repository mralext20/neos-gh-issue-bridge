import { BadRequest } from "../utils/Errors";
import { getJson } from "../utils/utils";
import Issue from "../models/Issue";


class IssuesService {

  async getIssues({ namespace, repo }) {
    let rawData = await getJson(`https://api.github.com/repos/${namespace}/${repo}/issues`)
    let data = rawData.map(issue => new Issue(issue))
    return data;
  }
}

export const issuesService = new IssuesService();