/** Chunk was on 93382 **/
l.d(t, {
  Z: () => u
});
var r = l(200651);
l(192379);
var i = l(442837),
  s = l(780384),
  n = l(481060),
  a = l(210887),
  c = l(475595),
  o = l(231338),
  d = l(388032),
  f = l(731605);
let u = function(e) {
  let {
    quest: t
  } = e, l = (0, i.e7)([a.Z], () => a.Z.getState().theme), u = (0, s.wj)(l) ? o.BR.DARK : o.BR.LIGHT;
  return (0, r.jsx)("div", {
    className: f.wrapper,
    children: (0, r.jsxs)("div", {
      className: f.content,
      children: [(0, r.jsx)("img", {
        src: (0, c.fh)(t, c.eC.GAME_TILE, u).url,
        alt: "",
        className: f.gameTile
      }), (0, r.jsxs)("div", {
        className: f.copy,
        children: [(0, r.jsx)(n.X6q, {
          color: "always-white",
          variant: "text-sm/medium",
          children: d.NW.format(d.t["5nMfBQ"], {
            gameTitle: t.config.messages.gameTitle
          })
        }), (0, r.jsx)(n.Text, {
          className: f.subheading,
          color: "always-white",
          variant: "text-xs/medium",
          children: d.NW.string(d.t.mjbPtb)
        })]
      })]
    })
  })
}