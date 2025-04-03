/** Chunk was on 10451 **/
n.d(t, {
  Z: () => l
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(283029),
  o = n(682263);
let l = function(e) {
  let {
    className: t,
    hasCooldown: i,
    isCanceled: l,
    useReducedMotion: c
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(o.boostIconContainer, t),
    children: [l ? (0, r.jsx)("img", {
      className: s()(o.boostIcon, o.boostIconCanceled),
      src: n(457026),
      alt: ""
    }) : (0, r.jsx)(a.Z, {
      className: o.boostIcon,
      boostInCooldown: i,
      useReducedMotion: c
    }), !l && i && (0, r.jsx)("img", {
      className: o.snowflake,
      src: n(765028),
      alt: ""
    })]
  })
}