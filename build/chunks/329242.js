/** Chunk was on 624 (6327fcf0ec798877.js) **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(51144),
  o = n(426368);
let c = e => {
  let {
    user: t,
    fill: n
  } = e, i = "\xa0(@".concat(l.ZP.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, r.jsxs)(a.Text, {
    className: s()([{
      [o.fill]: n
    }]),
    variant: "text-md/medium",
    children: [(0, r.jsx)("span", {
      className: o.username,
      children: l.ZP.getName(t)
    }), (0, r.jsx)("span", {
      className: o.discriminator,
      children: i
    })]
  })
}