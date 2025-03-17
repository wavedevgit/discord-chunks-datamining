/** Chunk was on 27978 **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(481060),
  a = n(725436),
  s = n(11868),
  l = n(217804),
  c = n(765305),
  u = n(786414);

function d(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: d
  } = e, p = t.entity_type === c.WX.EXTERNAL, h = i.useCallback(e => (0, s.Qt)(t, d)(e), [t, d]), g = (0, l.u)(t, n);
  if (null == g) return null;
  let {
    IconComponent: m,
    locationName: _
  } = g, f = (0, r.jsxs)(r.Fragment, {
    children: [null != m && (0, r.jsx)(m, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.channelIcon
    }), (0, r.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: u.locationText,
      children: (0, a.m)(_, !0)
    })]
  });
  return (0, r.jsx)("div", {
    className: u.row,
    children: null != h ? (0, r.jsx)(o.P3F, {
      className: p ? u.externalLocation : u.channelLocation,
      onClick: h,
      children: f
    }) : f
  })
}