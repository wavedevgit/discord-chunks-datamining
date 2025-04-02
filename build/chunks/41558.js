/** Chunk was on 35755 **/
n.d(t, {
  Z: () => d
});
var i, r = n(200651),
  l = n(192379),
  o = n(481060),
  a = n(388032),
  c = n(942962),
  s = ((i = s || {})[i.VIEW_MORE = 0] = "VIEW_MORE", i[i.VIEW_LESS = 1] = "VIEW_LESS", i);

function d(e) {
  let {
    title: t,
    buttonType: n,
    onClickViewButton: i
  } = e;
  return (0, r.jsxs)("div", {
    className: c.header,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: t
    }), null != n && null != i && (0, r.jsx)(o.P3F, {
      className: c.viewMore,
      onClick: i,
      "aria-label": a.NW.formatToPlainString(a.t["bj/2kZ"], {
        title: t
      }),
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: 0 === n ? a.NW.format(a.t.gVw57u, {}) : a.NW.string(a.t.nPGLFR)
      })
    })]
  })
}
d.buttonTypes = s, d.Loading = function() {
  let e = l.useMemo(() => ({
    width: "".concat(10 + 20 * Math.random(), "%")
  }), []);
  return (0, r.jsx)("div", {
    className: c.loadingHeader,
    style: e,
    children: (0, r.jsx)(o.Text, {
      className: c.hidden,
      variant: "text-md/medium",
      color: "header-primary",
      children: "_"
    })
  })
}