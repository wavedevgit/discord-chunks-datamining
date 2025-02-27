/** Chunk was on 70045 **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  o = n(481060),
  a = n(5192),
  s = n(829820),
  c = n(15428);

function u(e) {
  let {
    activity: t,
    user: n,
    channelId: l,
    guildId: u,
    source: d,
    size: f,
    look: p,
    color: m,
    className: g,
    onAction: y
  } = e, {
    tooltip: b,
    loading: O,
    disabled: h,
    onClick: v
  } = (0, s.Fe)(t, n, d, a.ZP.getNickname(u, l, n)), j = () => {
    null == y || y(), v()
  };
  return (0, r.jsx)(o.ua7, {
    text: b,
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: l
      } = e;
      return (0, r.jsx)(o.zxk, {
        size: f,
        className: i()(c.syncButton, g),
        innerClassName: c.syncButtonInner,
        look: p,
        color: m,
        onClick: j,
        onMouseEnter: n,
        onMouseLeave: l,
        disabled: h,
        submitting: O,
        "aria-label": null != b ? b : t.name,
        children: (0, r.jsx)(o.iOO, {
          size: "xs",
          color: "currentColor"
        })
      })
    }
  })
}