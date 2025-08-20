/** Chunk was on 99534 **/
/** chunk id: 137591, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  var n, i;
  if (!(0, a.Xb)(t) || t.type !== d.d4z.PRIVATE_THREAD) return null;
  let s = null == (i = null == (n = t.threadMetadata) ? true : n.invitable) || i;
  return (0, e.jsx)(l.S89, {
    id: "toggle-thread-invitable",
    label: o.intl.string(o.t.s2rpNT),
    checked: s,
    action: () => r.Z.setInvitable(t, !s)
  })
}