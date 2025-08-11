/** Chunk was on 67376 **/
/** chunk id: 259674, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  lW: () => a,
  tK: () => s
});
var c, Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  s = ((c = {}).DESCRIPTION = "description", c.CATEGORIES = "categories", c.TAGS = "tags", c.AGREE_TO_RULES = "agree_to_rules", c);
let a = e => {
  let {
    articleId: t,
    guildId: n,
    modalStep: c = null,
    pageView: s = null
  } = e;
  open(l.Z.getArticleURL(t)), r.default.track(o.rMx.DISCOVERY_SETUP_CTA_CLICKED, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        c = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), c.forEach(function(t) {
        var c;
        c = n[t], t in e ? Object.defineProperty(e, t, {
          value: c,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = c
      })
    }
    return e
  }({
    cta_name: o.b8q,
    discovery_settings_view: s,
    help_center_article_id: t,
    modal_step: c
  }, (0, i.hH)(n)))
}