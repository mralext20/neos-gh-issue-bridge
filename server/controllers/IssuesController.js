import express from "express";
import BaseController from "../utils/BaseController";
import { issuesService } from "../services/IssueService";

export class IssuesController extends BaseController {
  constructor() {
    super("api/issues/");
    this.router
      .get("/:namespace/:repo", this.getByRepo)
  }
  async getByRepo(req, res, next) {
    try {
      let sentinal = "||||||||||\r\n"
      console.log(req.params);
      let issues = await issuesService.getIssues(req.params);

      let outputString = `SENTINAL:${sentinal}`;

      issues.forEach(issue => {
        outputString += issue.Template
        outputString += sentinal
      });
      res.setHeader('Content-Type', 'text/plain');
      return res.send(outputString);
    } catch (error) {
      next(error);
    }
  }
}
