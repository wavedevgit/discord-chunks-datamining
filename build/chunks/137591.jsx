/** Chunk was on 46154 **/
/** chunk id: 137591, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function d(t) {
  var n, e;
  if (!(0, r.Xb)(t) || t.type !== o.d4z.PRIVATE_THREAD) return null;
  let d = null == (e = null == (n = t.threadMetadata) ? true : n.invitable) || e;
  return <a.S89 id={"toggle-thread-invitable"} label={s.intl.string(s.t.s2rpNT)} checked={d} action={() => l.Z.setInvitable(t, !d)} />
}