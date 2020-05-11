
export default class {
  constructor(rawData) {
    this.user_avatar_url = rawData.user.avatar_url;
    this.user_name = rawData.user.login;
    this.web_link = rawData.html_url;
    this.title = rawData.title;
    this.body = rawData.body;
    this.id = rawData.number;
    this.lables = ""
    rawData.labels.forEach(e => {
      this.lables += `${e.name} `
    });
  }

  get Template() {
    return `
TITLE:${this.title}\r\n
LABELS:${this.lables}\r\n
WEB_LINK:${this.web_link}\r\n
ID:${this.id}\r\n
USER_NAME:${this.user_name}\r\n
USER_AVATAR:${this.user_avatar_url}\r\n
BODY:${this.body}\r\n\
`
  }
}