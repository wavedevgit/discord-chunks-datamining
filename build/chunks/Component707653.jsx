/** Chunk was on 88974 **/
/** chunk id: 707653, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  var n, i;
  if (!(0, a.H_)(t) || t.type !== d.rbe.PRIVATE_THREAD) return null;
  let o = null == (n = null == (i = t.threadMetadata) ? true : i.invitable) || n;
  return (0, e.jsx)(r.sLh, {
    id: "toggle-thread-invitable",
    label: s.intl.string(s.t.s2rpNf),
    checked: o,
    action: () => l.A.setInvitable(t, !o)
  })
}