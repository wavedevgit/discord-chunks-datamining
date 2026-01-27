/** Chunk was on web.js **/
/** chunk id: 101611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Lr: () => d,
  j4: () => u,
  jY: () => f
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk417597 = require("./417597.js"),
  Chunk696451 = require("./696451.js"),
  Chunk701785 = require("./701785.js"),
  Chunk65995 = require("./65995.js"),
  Chunk978165 = require("./978165.js"),
  Chunk340837 = require("./340837.js");

function u(e, t) {
  var n;
  let r = (0, l.A)(e),
    a = (0, i.bG)([o.h], () => o.h.getNewMemberActions(e), [e]),
    c = (0, i.bG)([s.A], () => s.A.getCompletedActions(e));
  if (!r) return {};
  let u = null != (n = null == a ? true : a.findIndex(e => e.channelId === t.id)) ? n : 0,
    d = u >= 0 && null != a ? a[u] : null,
    f = null != d && (null == c ? true : c[d.channelId]) === true;
  return {
    channelAction: d,
    completed: f
  }
}

function d(e, t) {
  let n = (0, i.bG)([o.h], () => o.h.getNewMemberActions(e)),
    r = (0, i.bG)([s.A], () => s.A.getCompletedActions(e));
  return null == n ? true : n.find(e => (null == r ? true : r[e.channelId]) !== true && e.channelId !== t)
}

function f(e) {
  var t;
  let n = (0, i.bG)([a.Ay], () => a.Ay.getSelfMember(e));
  return (0, r.Lt)(null != (t = null == n ? true : n.flags) ? t : 0, c.D.COMPLETED_HOME_ACTIONS)
}