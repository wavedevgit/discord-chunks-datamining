/** Chunk was on 13323 **/
n.d(t, {
  Z: () => o
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(691627);
let o = function(e) {
  let {
    className: t,
    imageClassName: i,
    boostInCooldown: o,
    useReducedMotion: l
  } = e;
  return (0, r.jsx)("div", {
    className: s()(a.imageWrapper, t, {
      [a.cooldown]: o
    }),
    children: (0, r.jsx)("img", {
      className: s()(a.image, i, {
        [a.cooldownImage]: o
      }),
      src: o ? n(971149) : l ? n(908635) : n(83957),
      alt: ""
    })
  })
}