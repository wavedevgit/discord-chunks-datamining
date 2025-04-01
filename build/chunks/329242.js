/** Chunk was on 13323 **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  o = n(51144),
  l = n(898664);
let c = e => {
  let {
    user: t,
    fill: n
  } = e, i = "\xa0(@".concat(o.ZP.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, r.jsxs)(a.Text, {
    className: s()([{
      [l.fill]: n
    }]),
    variant: "text-md/medium",
    children: [(0, r.jsx)("span", {
      className: l.username,
      children: o.ZP.getName(t)
    }), (0, r.jsx)("span", {
      className: l.discriminator,
      children: i
    })]
  })
}