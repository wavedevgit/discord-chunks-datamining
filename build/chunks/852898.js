/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => f
});
var r = n(200651),
  i = n(192379),
  s = n(951284),
  a = n(442837),
  l = n(139387),
  o = n(726542),
  c = n(690221),
  A = n(434404),
  d = n(999382),
  u = n(981631),
  g = n(388032);

function f(e) {
  let t = (0, a.e7)([d.Z], () => d.Z.getProps().integrations);
  return i.useMemo(() => (function(e, t) {
    var n, i, a, d;
    let f;
    if (!e.managed) return null;
    let m = null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id,
      p = null === (i = e.tags) || void 0 === i ? void 0 : i.integration_id,
      h = (null === (a = e.tags) || void 0 === a ? void 0 : a.premium_subscriber) !== void 0,
      C = (null === (d = e.tags) || void 0 === d ? void 0 : d.guild_connections) !== void 0;
    if (null != m ? f = null == t ? void 0 : t.find(e => {
        var t;
        let {
          application: n
        } = e;
        return (null == n ? void 0 : null === (t = n.bot) || void 0 === t ? void 0 : t.id) === m
      }) : null != p && (f = null == t ? void 0 : t.find(e => {
        let {
          id: t
        } = e;
        return t === p
      })), null != f && null != f.application && null != f.name) {
      let e = f.application.id,
        t = f.name;
      [s.b.TWITCH, s.b.YOUTUBE].includes(f.type) && (t = "".concat(o.Z.get(f.type).name, " - ").concat(t));
      let n = () => {
        A.Z.setSection(u.pNK.INTEGRATIONS), l.Z.setSection(u.b4C.APPLICATION, e)
      };
      return g.NW.format(g.t.FuXsWl, {
        name: t,
        integrationNameHook: (e, t) => (0, r.jsx)(c.Z, {
          onClick: n,
          children: e
        }, t)
      })
    }
    return h ? g.NW.string(g.t.oF6FYW) : C ? g.NW.string(g.t.ZQ37tL) : g.NW.string(g.t.k5d7DA)
  })(e, t), [e, t])
}