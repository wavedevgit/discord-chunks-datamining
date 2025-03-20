/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(392711),
  s = n(442837),
  a = n(481060),
  l = n(230711),
  o = n(496675),
  A = n(594174),
  c = n(434404),
  d = n(449226),
  u = n(981631),
  g = n(388032),
  f = n(713401);

function m(e) {
  let t, {
      guild: n
    } = e,
    m = n.mfaLevel,
    p = (0, s.e7)([o.Z], () => null != n && o.Z.can(u.Plq.MANAGE_GUILD, n), [n]),
    h = (0, s.e7)([A.default], () => A.default.getCurrentUser()),
    C = n.isOwner(h),
    b = null == h ? void 0 : h.mfaEnabled,
    v = m === u.BpS.ELEVATED,
    x = C && b,
    N = (0, i.throttle)(async e => {
      x && await c.Z.updateMFALevel({
        guildId: n.id,
        level: e ? u.BpS.ELEVATED : u.BpS.NONE,
        isEnabled: !e
      })
    }, 1e3);
  if (!p) return null;
  x || (t = C ? g.NW.format(g.t.nFwNyc, {
    settingsHook: () => l.Z.open(u.oAB.ACCOUNT)
  }) : g.NW.string(g.t["9Ghu4+"]));
  let j = n.hasFeature(u.oNc.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: f.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: f.itemContent,
      children: [(0, r.jsx)(a.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: g.NW.string(g.t.lbBfER)
      }), (0, r.jsxs)(a.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [g.NW.string(g.t["a/93Jy"]), " ", t]
      })]
    }), !x || v && j ? (0, r.jsx)(a.ua7, {
      text: j ? g.NW.string(g.t["KG1V/P"]) : C ? g.NW.string(g.t.NmsheX) : g.NW.string(g.t.LieBtb),
      children: e => (0, r.jsx)(d.Z, {
        checked: v,
        disabled: !0,
        onChange: N,
        className: f.bringToFront,
        tooltipProps: e
      })
    }) : (0, r.jsx)(d.Z, {
      checked: v,
      onChange: N,
      className: f.bringToFront
    })]
  })
}