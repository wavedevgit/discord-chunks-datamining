/** Chunk was on 86357 **/
/** chunk id: 137591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var t, n;
  if (!(0, a.Xb)(e) || e.type !== o.d4z.PRIVATE_THREAD) return null;
  let c = null == (n = null == (t = e.threadMetadata) ? true : t.invitable) || n;
  return (0, r.jsx)(i.S89, {
    id: "toggle-thread-invitable",
    label: s.intl.string(s.t.s2rpNT),
    checked: c,
    action: () => l.Z.setInvitable(e, !c)
  })
}