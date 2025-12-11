/** Chunk was on 67376 **/
/** chunk id: 905693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  lW: () => s,
  tK: () => a
});
var i, Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  a = ((i = {}).DESCRIPTION = "description", i.CATEGORIES = "categories", i.TAGS = "tags", i.AGREE_TO_RULES = "agree_to_rules", i);
let s = e => {
  let {
    articleId: t,
    guildId: n,
    modalStep: i = null,
    pageView: a = null
  } = e;
  open(r.Z.getArticleURL(t)), l.default.track(o.rMx.DISCOVERY_SETUP_CTA_CLICKED, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({
    cta_name: o.b8q,
    discovery_settings_view: a,
    help_center_article_id: t,
    modal_step: i
  }, (0, c.hH)(n)))
}