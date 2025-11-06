/** Chunk was on 88742 **/
/** chunk id: 758677, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  j: () => l,
  t: () => r
}), require("./997841.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk812206 = require("./812206.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");

function l(t) {
  var n, e, i, l, r;
  if (null == t) return null;
  if ((0, s.yE)(null != (n = t.flags) ? n : 0, o.udG.SOCIAL_LAYER_INTEGRATION) || (0, s.yE)(null != (e = t.flags) ? e : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return t;
  for (let n of null != (i = t.linkedGames) ? i : []) {
    let t = a.Z.getApplication(n.id);
    if (null != t && ((0, s.yE)(null != (l = t.flags) ? l : 0, o.udG.SOCIAL_LAYER_INTEGRATION) || (0, s.yE)(null != (r = t.flags) ? r : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return t
  }
  return null
}

function r(t) {
  return i.useMemo(() => l(t), [t])
}