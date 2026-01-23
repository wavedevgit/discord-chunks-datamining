/** Chunk was on 35125 **/
/** chunk id: 427562, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  iv: () => s,
  p3: () => a
});
var n, Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  s = ((n = {}).DESCRIPTION = "description", n.CATEGORIES = "categories", n.TAGS = "tags", n.AGREE_TO_RULES = "agree_to_rules", n);
let a = e => {
  let {
    articleId: t,
    guildId: i,
    modalStep: n = null,
    pageView: s = null
  } = e;
  open(r.A.getArticleURL(t)), c.default.track(o.HAw.DISCOVERY_SETUP_CTA_CLICKED, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(i);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = i[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    cta_name: o.Mmu,
    discovery_settings_view: s,
    help_center_article_id: t,
    modal_step: n
  }, (0, l.H$)(i)))
}