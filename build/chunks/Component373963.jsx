/** Chunk was on 6502 **/
/** chunk id: 373963, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t) {
  return s.isPlatformEmbedded && (null == e ? true : e.length) !== 0 ? (0, i.jsx)(l.Drp, {
    id: "copy",
    label: a.intl.string(a.t.OpuAlK),
    shortcut: (0, s.isMac)() ? "⌘C" : "Ctrl+C",
    leadingAccessory: {
      type: "icon",
      icon: l.TdU
    },
    action: () => {
      r.Ay.copy(e), null == t || t.focus()
    }
  }) : null
}