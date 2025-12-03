/** Chunk was on 61 **/
/** chunk id: 545165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  SU: () => a,
  sR: () => s
}), require("./388685.js"), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js");
require("./427679.js");
var Chunk984933 = require("./984933.js");

function a(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [i.ZP];
  if (null == t) return [];
  let l = n.getChannels(e)[i.Zb],
    a = [];
  for (let {
      channel: e
    }
    of l) {
    let {
      canCreateGuildEvent: n,
      canManageAllEvents: l
    } = (0, r.Gw)(e), i = n || l;
    e.type === t && (e.isGuildVoice() && i ? a.push(e) : e.isGuildStageVoice() && i && a.push(e))
  }
  return a
}

function s(e, t) {
  return (0, l.Wu)([i.ZP], () => a(e, t, [i.ZP]), [e, t])
}
require("./496675.js"), require("./85243.js")