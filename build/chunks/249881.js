/** Chunk was on 13323 **/
n.d(t, {
  t: () => u
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(243778),
  o = n(921944),
  l = n(388032),
  c = n(529584);
let d = e => {
    let {
      markAsDismissed: t
    } = e;
    return i.useEffect(() => t(o.L.UNKNOWN), [t]), (0, r.jsx)(s.IGR, {
      className: c.newBadge,
      text: l.NW.string(l.t.y2b7CA)
    })
  },
  u = e => {
    let {
      title: t,
      body: n,
      img: i,
      newIndicatorDismissibleContent: o,
      onClick: u
    } = e;
    return (0, r.jsxs)("div", {
      className: c.container,
      children: [i, (0, r.jsxs)("div", {
        className: c.textContainer,
        children: [(0, r.jsxs)("div", {
          className: c.headerText,
          children: [(0, r.jsx)(a.ZP, {
            contentTypes: [o],
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              return t === o ? (0, r.jsx)(d, {
                markAsDismissed: n
              }) : null
            }
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/semibold",
            children: t
          })]
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, r.jsx)(s.zxk, {
        size: s.PhG.MEDIUM,
        onClick: u,
        className: c.reconnectButton,
        children: l.NW.string(l.t.vD60Pj)
      })]
    })
  }