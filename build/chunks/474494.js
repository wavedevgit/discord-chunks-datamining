/** Chunk was on 51724 **/
n.d(t, {
  Z: () => Z
}), n(47120);
var r = n(200651);
n(192379);
var i = n(319147),
  s = n(306276),
  a = n(510236),
  l = n(133398),
  o = n(722283),
  c = n(298274),
  d = n(569620),
  u = n(16503),
  m = n(64268),
  p = n(697720),
  g = n(578325),
  h = n(56790),
  f = n(90718),
  x = n(897482),
  b = n(4515),
  N = n(474472),
  _ = n(156129),
  E = n(799303),
  C = n(245630),
  j = n(842272),
  O = n(486731),
  v = n(346943),
  S = n(55826),
  T = n(218776),
  I = n(414653),
  y = n(297141),
  A = n(26517),
  P = n(93125),
  R = n(278583);
let D = new Map([
  ["BG", a],
  ["CZ", c],
  ["HU", x],
  ["RO", A],
  ["SE", P],
  ["CY", o],
  ["EE", u],
  ["IS", N],
  ["IE", b],
  ["LV", O],
  ["LI", E],
  ["LT", C],
  ["LU", j],
  ["MT", v],
  ["SK", n(814437)],
  ["SI", R],
  ["GR", h],
  ["FI", p],
  ["PT", y],
  ["NO", T],
  ["BE", s],
  ["AT", i],
  ["CH", l],
  ["FR", g],
  ["DE", d],
  ["ES", m],
  ["IT", _],
  ["NL", S],
  ["PL", I],
  ["HR", f]
]);

function Z(e) {
  let {
    className: t,
    countryCode: n
  } = e;
  if (null == n || !D.has(n)) return null;
  let i = D.get(n);
  return (0, r.jsx)("img", {
    className: t,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: i
  })
}