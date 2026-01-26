/** Chunk was on 84264 **/
/** chunk id: 826308, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(n) {
  let e = o.useCallback(() => {
    c()(null != n, "text cannot be null"), r.default.track(s.HAw.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(n)), "_blank")
  }, [n]);
  return d.isPlatformEmbedded && null != n && (null == n ? true : n.length) !== 0 ? [(0, l.jsx)(i.Drp, {
    id: "search-google",
    label: u.intl.string(u.t["Rd/Mko"]),
    leadingAccessory: {
      type: "icon",
      icon: i.$p$
    },
    action: e
  }, "search-google")] : null
}