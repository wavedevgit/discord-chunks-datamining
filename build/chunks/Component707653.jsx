/** Chunk was on 78441 **/
/** chunk id: 707653, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  var e, n;
  if (!(0, a.H_)(t) || t.type !== o.rbe.PRIVATE_THREAD) return null;
  let d = null == (e = null == (n = t.threadMetadata) ? true : n.invitable) || e;
  return (0, i.jsx)(r.sLh, {
    id: "toggle-thread-invitable",
    label: s.intl.string(s.t.s2rpNf),
    checked: d,
    action: () => l.A.setInvitable(t, !d)
  })
}