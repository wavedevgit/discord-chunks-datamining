/** Chunk was on web.js **/
/** chunk id: 89013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let t = i.useCallback(() => {
    a()(null != e, "text cannot be null"), l.default.track(u.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
  }, [e]);
  return c.isPlatformEmbedded && null != e && (null == e ? true : e.length) !== 0 ? [(0, r.jsx)(s.sNh, {
    id: "search-google",
    label: d.intl.string(d.t["Rd/Mkp"]),
    action: t
  }, "search-google")] : null
}