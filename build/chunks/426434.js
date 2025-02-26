/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(392711),
  s = n(442837),
  a = n(481060),
  l = n(230711),
  o = n(496675),
  c = n(594174),
  d = n(434404),
  u = n(449226),
  m = n(981631),
  g = n(388032),
  p = n(412856);

function h(e) {
  let t, {
      guild: n
    } = e,
    h = n.mfaLevel,
    f = (0, s.e7)([o.Z], () => null != n && o.Z.can(m.Plq.MANAGE_GUILD, n), [n]),
    b = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
    x = n.isOwner(b),
    j = null == b ? void 0 : b.mfaEnabled,
    N = h === m.BpS.ELEVATED,
    v = x && j,
    _ = (0, i.throttle)(async e => {
      v && await d.Z.updateMFALevel({
        guildId: n.id,
        level: e ? m.BpS.ELEVATED : m.BpS.NONE,
        isEnabled: !e
      })
    }, 1e3);
  if (!f) return null;
  v || (t = x ? g.NW.format(g.t.nFwNyc, {
    settingsHook: () => l.Z.open(m.oAB.ACCOUNT)
  }) : g.NW.string(g.t["9Ghu4+"]));
  let O = n.hasFeature(m.oNc.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: p.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: p.itemContent,
      children: [(0, r.jsx)(a.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: g.NW.string(g.t.lbBfER)
      }), (0, r.jsxs)(a.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [g.NW.string(g.t["a/93Jy"]), " ", t]
      })]
    }), !v || N && O ? (0, r.jsx)(a.ua7, {
      text: O ? g.NW.string(g.t["KG1V/P"]) : x ? g.NW.string(g.t.NmsheX) : g.NW.string(g.t.LieBtb),
      children: e => (0, r.jsx)(u.Z, {
        checked: N,
        disabled: !0,
        onChange: _,
        className: p.bringToFront,
        tooltipProps: e
      })
    }) : (0, r.jsx)(u.Z, {
      checked: N,
      onChange: _,
      className: p.bringToFront
    })]
  })
}