/** Chunk was on 70045 **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var l = n(442837),
  i = n(231757),
  o = n(553795),
  a = n(915863),
  s = n(388032),
  c = n(769771);

function u(e) {
  let {
    platform: t,
    color: n,
    look: u,
    onAction: d,
    Icon: f
  } = e;
  if ((0, l.e7)([o.Z], () => o.Z.getAccounts().some(e => e.type === t.type))) return null;
  let p = null != f ? (0, r.jsx)(f, {
    className: c.platformIcon
  }) : (0, r.jsx)("img", {
    alt: "",
    className: c.platformIcon,
    src: t.icon.whiteSVG
  });
  return (0, r.jsx)(a.Z, {
    onClick: () => {
      null == d || d(), (0, i.Z)({
        platformType: t.type,
        location: "Activity Action"
      })
    },
    color: n,
    look: u,
    fullWidth: !0,
    children: (0, r.jsxs)("div", {
      className: c.flex,
      children: [p, s.NW.format(s.t.XWSHTU, {
        platform: t.name
      })]
    })
  }, "connect-platform-activity")
}