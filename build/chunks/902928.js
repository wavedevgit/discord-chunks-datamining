/** Chunk was on 69773 **/
n.d(t, {
  u: () => f
});
var r = n(200651),
  a = n(192379),
  o = n(159277),
  l = n(481060),
  i = n(713938),
  s = n(388032),
  c = n(86193),
  d = n(942605),
  u = n(534345);
let f = e => {
  let {
    onComplete: t,
    data: n
  } = e, f = (0, a.useId)(), p = null, h = null, x = n.scopes.some(e => (0, i.sg)(e));
  return n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID ? p = d.Z : x && (p = u.Z), null != n.twoWayLinkCode ? h = s.NW.string(s.t.QhATl5) : x && (h = s.NW.string(s.t.vBPvKy)), (0, r.jsxs)("div", {
    className: c.content,
    children: [null != p ? (0, r.jsx)("img", {
      src: p,
      className: c.artwork,
      alt: "",
      "aria-labelledby": f
    }) : null, (0, r.jsxs)("div", {
      className: c.innerContent,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-xl/extrabold",
        id: f,
        children: s.NW.string(s.t.qDtJmJ)
      }), null != h ? (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: h
      }) : null]
    }), (0, r.jsx)(l.zxk, {
      className: c.footerButton,
      color: l.zxk.Colors.BRAND,
      onClick: t,
      children: s.NW.string(s.t.i4jeWV)
    })]
  })
}