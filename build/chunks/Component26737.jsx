/** Chunk was on 76676 **/
/** chunk id: 26737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t) {
  return s.isPlatformEmbedded && (null == e ? true : e.length) !== 0 ? (0, i.jsx)(l.sNh, {
    id: "copy",
    label: a.intl.string(a.t.OpuAlK),
    hint: (0, s.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => {
      r.ZP.copy(e), null == t || t.focus()
    }
  }) : null
}