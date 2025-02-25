/** Chunk was on 93382 **/
l.d(t, {
  Z: () => o
});
var r = l(200651);
l(192379);
var i = l(120356),
  s = l.n(i),
  n = l(481060),
  a = l(600164),
  c = l(242891);

function o(e) {
  let {
    source: t,
    selectedSource: l
  } = e, {
    id: i,
    name: o,
    url: d
  } = t, f = (null == l ? void 0 : l.id) === i;
  return (0, r.jsxs)(a.Z, {
    direction: a.Z.Direction.VERTICAL,
    justify: a.Z.Justify.CENTER,
    align: a.Z.Align.CENTER,
    children: [(0, r.jsx)(a.Z, {
      justify: a.Z.Justify.CENTER,
      align: a.Z.Align.CENTER,
      children: (0, r.jsx)("div", {
        style: {
          backgroundImage: "url(".concat(d, ")")
        },
        className: s()(c.sourceThumbnail, {
          [c.selected]: f
        })
      })
    }), (0, r.jsx)(n.Text, {
      className: s()(c.sourceName, {
        [c.selected]: f
      }),
      variant: "text-sm/normal",
      children: o
    })]
  })
}