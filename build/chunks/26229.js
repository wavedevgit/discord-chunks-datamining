/** Chunk was on 76977 **/
n.d(t, {
  Z: () => r
});
var i = n(200651);
let r = n(192379).memo(function(e) {
  let {
    layout: t,
    layoutSize: n,
    className: r,
    renderWidget: o
  } = e;
  return null != t ? (0, i.jsx)("div", {
    className: r,
    style: {
      width: n.width,
      height: n.height
    },
    children: t.widgets.map(e => o(e, n))
  }) : null
})