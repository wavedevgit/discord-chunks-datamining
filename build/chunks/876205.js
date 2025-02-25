/** Chunk was on 48799 **/
n.d(t, {
  Z: () => p
});
var i = n(200651);
n(192379);
var r = n(120356),
  o = n.n(r),
  s = n(442837),
  l = n(481060),
  a = n(556296),
  c = n(13140),
  d = n(981631),
  u = n(329112);
let h = {
  [d.kg4.TOGGLE_MUTE]: {
    legacy: {
      slash: l.nRN,
      default: l.S6n
    },
    new: {
      slash: l.nRN,
      default: l.S6n
    }
  }
};

function p(e) {
  let {
    value: t,
    action: n,
    shouldShow: r
  } = e, d = (0, s.e7)([a.ZP], () => a.ZP.getKeybindForAction(n, !1, !0)), p = (0, l.bWb)().enabled;
  if (null == d || !r) return null;
  let f = c.BB(d.shortcut),
    g = p ? h[n].new : h[n].legacy,
    m = t ? g.slash : g.default;
  return (0, i.jsxs)("div", {
    className: u.keybindIndicator,
    children: [(0, i.jsx)(m, {
      className: u.keybindIcon,
      size: "xs",
      color: "currentColor"
    }), (0, i.jsx)(l.Text, {
      variant: "text-xxs/semibold",
      className: o()(u.keybindIndicatorText),
      children: f
    })]
  })
}