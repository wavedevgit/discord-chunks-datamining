/** Chunk was on 38342 **/
/** chunk id: 26737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t) {
  return r.isPlatformEmbedded && (null == e ? true : e.length) !== 0 ? (0, i.jsx)(l.sNh, {
    id: "copy",
    label: a.intl.string(a.t.OpuAlJ),
    hint: (0, r.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => {
      s.ZP.copy(e), null == t || t.focus()
    }
  }) : null
}