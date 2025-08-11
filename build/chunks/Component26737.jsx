/** Chunk was on web.js **/
/** chunk id: 26737, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t) {
  return o.isPlatformEmbedded && (null == e ? true : e.length) !== 0 ? (0, r.jsx)(i.sNh, {
    id: "copy",
    label: s.intl.string(s.t.OpuAlJ),
    hint: (0, o.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => {
      a.ZP.copy(e), null == t || t.focus()
    }
  }) : null
}