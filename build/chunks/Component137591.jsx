/** Chunk was on 89250 **/
/** chunk id: 137591, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  var n, e;
  if (!(0, r.Xb)(t) || t.type !== s.d4z.PRIVATE_THREAD) return null;
  let d = null == (e = null == (n = t.threadMetadata) ? true : n.invitable) || e;
  return (0, i.jsx)(l.S89, {
    id: "toggle-thread-invitable",
    label: o.intl.string(o.t.s2rpNf),
    checked: d,
    action: () => a.Z.setInvitable(t, !d)
  })
}