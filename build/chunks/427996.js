/** Chunk was on 75101 **/
n.d(t, {
  W: () => p
});
var i = n(200651);
n(192379);
var r = n(120356),
  l = n.n(r),
  o = n(399606),
  a = n(481060),
  c = n(337682),
  u = n(115130),
  d = n(388032),
  s = n(506791);

function p(e) {
  let {
    hideSearch: t,
    className: n
  } = e, {
    activityUrlOverride: r,
    useActivityUrlOverride: p,
    filter: f
  } = (0, o.cj)([u.Z], () => ({
    activityUrlOverride: u.Z.getActivityUrlOverride(),
    useActivityUrlOverride: u.Z.getUseActivityUrlOverride(),
    filter: u.Z.getFilter()
  }), []);
  return (0, i.jsxs)("div", {
    className: l()(s.container, n),
    children: [(0, i.jsx)(a.XZJ, {
      type: a.XZJ.Types.INVERTED,
      value: p,
      onClick: c.Y$,
      children: (0, i.jsx)(a.Text, {
        variant: "text-md/semibold",
        children: d.NW.string(d.t["3TSGuL"])
      })
    }), p ? (0, i.jsx)(a.xJW, {
      title: d.NW.string(d.t["9rnmen"]),
      children: (0, i.jsx)(a.oil, {
        disabled: !p,
        value: null != r ? r : void 0,
        onChange: c.jS,
        placeholder: "https://localhost:3000"
      })
    }) : null, !0 === t ? null : (0, i.jsx)("div", {
      children: (0, i.jsx)(a.E1j, {
        className: s.searchBar,
        query: f,
        onChange: c.a8,
        onClear: function() {
          c.a8("")
        }
      })
    })]
  })
}