/** Chunk was on 92091 **/
/** chunk id: 137591, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  var n, i;
  if (!(0, a.Xb)(t) || t.type !== s.d4z.PRIVATE_THREAD) return null;
  let o = null == (i = null == (n = t.threadMetadata) ? true : n.invitable) || i;
  return (0, e.jsx)(l.S89, {
    id: "toggle-thread-invitable",
    label: d.intl.string(d.t.s2rpNf),
    checked: o,
    action: () => r.Z.setInvitable(t, !o)
  })
}