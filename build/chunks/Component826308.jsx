/** Chunk was on 84264 **/
/** chunk id: 826308, original params: l,n,t (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(l) {
  let n = o.useCallback(() => {
    r()(null != l, "text cannot be null"), i.default.track(d.HAw.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(l)), "_blank")
  }, [l]);
  return s.isPlatformEmbedded && null != l && (null == l ? true : l.length) !== 0 ? [(0, e.jsx)(c.Drp, {
    id: "search-google",
    label: u.intl.string(u.t["Rd/Mko"]),
    action: n
  }, "search-google")] : null
}