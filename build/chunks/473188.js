/** Chunk was on 97161 **/
n.d(t, {
  _: () => l
});
var o = n(200651);
n(192379);
var a = n(120356),
  r = n.n(a),
  i = n(481060),
  c = n(259173);

function l(e) {
  let {
    rank: t,
    hideInnerBorder: n = !1
  } = e;
  return (0, o.jsx)("div", {
    className: r()(c.rankContainer, {
      [c.goldBorder]: 1 === t,
      [c.silverBorder]: 2 === t,
      [c.bronzeBorder]: 3 === t,
      [c.defaultBorder]: t > 3
    }),
    children: (0, o.jsx)(i.Text, {
      tabularNumbers: !0,
      variant: t <= 3 ? "text-xs/semibold" : "text-xs/medium",
      className: r()(c.rank, {
        [c.rankWithBorder]: !n,
        [c.goldText]: 1 === t,
        [c.silverText]: 2 === t,
        [c.bronzeText]: 3 === t,
        [c.rankNoBorder]: n
      }),
      children: t
    })
  })
}