/** Chunk was on 55697 **/
n.d(t, {
  Z: () => s
});
var r = n(200651),
  i = n(192379),
  l = n(70097),
  o = n(576645),
  a = n(451326);

function s(e) {
  let {
    baseTileRef: t,
    cleanup: n
  } = e, s = (0, o.bK)(), c = (0, i.useRef)(s);
  return null == t || 0 === t.offsetHeight || c.current ? null : (0, r.jsx)("div", {
    style: {
      width: 1.22 * t.offsetWidth,
      height: 1.22 * t.offsetHeight
    },
    className: a.demoEffectOverlay,
    children: (0, r.jsx)(l.Z, {
      autoPlay: !0,
      className: a.demoEffectImg,
      onEnded: n,
      children: (0, r.jsx)("source", {
        src: "https://cdn.discordapp.com/assets/content/165a5256895e59f96fdfae485b1a4fdc3810995ac694302ca4692aefa97d49dc.webm",
        type: "video/webm"
      })
    })
  })
}