/** Chunk was on web.js **/
/** chunk id: 63063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p,
  w: () => s
});
var Chunk299379 = require("./299379.js"),
  Chunk706454 = require("./706454.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
let s = "https://".concat(Chunk981631.xr4),
  l = "https://".concat(Chunk981631.rxP),
  c = "https://creator-support.discord.com",
  u = "https://support-apps.discord.com";

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s;
  return t + e
}

function f() {
  return i.default.locale.toLowerCase()
}
let p = {
  getArticleURL: e => d("/hc/".concat(f(), "/articles/").concat(e)),
  getDevArticleURL: e => d("/hc/".concat(f(), "/articles/").concat(e), l),
  getCreatorSupportArticleURL: e => d("/hc/".concat(f(), "/articles/").concat(e), c),
  getTwitterURL: () => (0, r.Z)(o.RK.TWITTER),
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