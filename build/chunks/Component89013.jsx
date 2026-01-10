/** Chunk was on 76676 **/
/** chunk id: 89013, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let t = l.useCallback(() => {
    r()(null != e, "text cannot be null"), o.default.track(c.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
  }, [e]);
  return u.isPlatformEmbedded && null != e && (null == e ? true : e.length) !== 0 ? [(0, i.jsx)(a.sNh, {
    id: "search-google",
    label: d.intl.string(d.t["Rd/Mko"]),
    action: t
  }, "search-google")] : null
}