/** Chunk was on 61494 **/
t.d(n, {
  Z: () => d
});
var l = t(255367),
  i = t(73800),
  r = t(481060),
  o = t(725436),
  c = t(11868),
  s = t(217804),
  a = t(765305),
  u = t(244231);

function d(e) {
  let {
    guildScheduledEvent: n,
    channel: t,
    onClose: d
  } = e, _ = n.entity_type === a.WX.EXTERNAL, f = i.useCallback(e => (0, c.Qt)(n, d)(e), [n, d]), h = (0, s.u)(n, t);
  if (null == h) return null;
  let {
    IconComponent: g,
    locationName: m
  } = h, v = (0, l.jsxs)(l.Fragment, {
    children: [null != g && (0, l.jsx)(g, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.channelIcon
    }), (0, l.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: u.locationText,
      children: (0, o.m)(m, !0)
    })]
  });
  return (0, l.jsx)("div", {
    className: u.row,
    children: null != f ? (0, l.jsx)(r.P3F, {
      className: _ ? u.externalLocation : u.channelLocation,
      onClick: f,
      children: v
    }) : v
  })
}