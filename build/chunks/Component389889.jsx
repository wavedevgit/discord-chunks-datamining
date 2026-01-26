/** Chunk was on 1636 **/
/** chunk id: 389889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk54570 = require("./54570.js"),
  Chunk8880 = require("./8880.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t) {
  let n = (0, i.bG)([o.A], () => o.A.isSpeakingMessage(t.id, e.id), [t, e]);
  return "" === e.content ? null : (0, r.jsx)(l.Drp, {
    id: "tts",
    label: n ? c.intl.string(c.t.CJ30BP) : c.intl.string(c.t.yGLjXF),
    leadingAccessory: {
      type: "icon",
      icon: l._Ft
    },
    icon: l._Ft,
    action: () => n ? (0, a.pr)() : (0, a.kP)(t, e)
  })
}