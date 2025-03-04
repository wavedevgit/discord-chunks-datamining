/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => a
}), n(47120), n(653041);
var r = n(192379),
  i = n(442837),
  o = n(905128);

function a(e) {
  let t = (0, i.e7)([o.Z], () => {
    var t;
    return null === (t = o.Z.getStateForGuild(e)) || void 0 === t ? void 0 : t.powerups
  });
  return r.useMemo(() => (null != t ? t : new Map).values().reduce((e, t) => (e.has(t.type) || e.set(t.type, []), e.get(t.type).push(t), e), new Map), [t])
}