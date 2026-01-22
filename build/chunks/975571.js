/** Chunk was on web.js **/
/** chunk id: 975571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  C: () => o
});
var Chunk472501 = require("./472501.js"),
  Chunk773669 = require("./773669.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js");
let o = "https://".concat(Chunk652215.XlF),
  l = "https://".concat(Chunk652215.hCb),
  c = "https://creator-support.discord.com",
  u = "https://support-apps.discord.com";

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o;
  return t + e
}

function f() {
  return i.default.locale.toLowerCase()
}
let p = {
  getArticleURL: e => d("/hc/".concat(f(), "/articles/").concat(e)),
  getDevArticleURL: e => d("/hc/".concat(f(), "/articles/").concat(e), l),
  getCreatorSupportArticleURL: e => d("/hc/".concat(f(), "/articles/").concat(e), c),
  getTwitterURL: () => (0, r.A)(s.Pq7.TWITTER),
  getCommunityURL: () => d("/hc/".concat(f())),
  getSubmitRequestURL(e) {
    let t = d("/hc/".concat(f(), "/requests/new?platform=").concat(encodeURIComponent((0, a.getPlatformName)())));
    return null != e && (t += "&device_info=".concat(encodeURIComponent(e))), t
  },
  getSearchURL(e) {
    let t = encodeURIComponent(e);
    return d("/hc/".concat(f(), "/search?utf8=%E2%9C%93&query=").concat(t, "&commit=Search"))
  },
  getFeaturedArticlesJsonURL: () => d("/api/v2/help_center/en-us/articles.json?label_names=featured"),
  getAppsSupportURL: e => d("/hc/".concat(f(), "/articles/").concat(e), u)
}