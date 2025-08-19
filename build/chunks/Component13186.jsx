/** Chunk was on 49882 **/
/** chunk id: 13186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => f,
  Z: () => h
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk452956 = require("./452956.js"),
  f = ((r = {}).TOP = "top", r.BOTTOM = "bottom", r);
let h = Chunk647438.forwardRef(function(e, t) {
  let {
    body: n,
    header: r,
    artClassName: l,
    buttonText: o,
    onClose: f,
    art: h,
    align: g
  } = e;
  return (0, d.Z)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.CHAT_WALLPAPER_DM_LIST_COACHMARK
  }), (0, i.jsx)("div", {
    className: p.tooltip,
    ref: t,
    children: (0, i.jsxs)("div", {
      className: p.content,
      children: [(0, i.jsx)("div", {
        className: l,
        children: h
      }), (0, i.jsxs)("div", {
        className: p.body,
        children: [(0, i.jsx)(u.X6q, {
          className: p.header,
          variant: "heading-md/bold",
          color: "always-white",
          children: r
        }), null == n ? null : "string" == typeof n ? (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, i.jsx)("div", {
        className: p.buttonContainer,
        children: (0, i.jsx)(c.z, {
          variant: "primary",
          text: o,
          fullWidth: true,
          onClick: e => {
            null == f || f(e)
          }
        })
      }), (0, i.jsx)("div", {
        className: a()(p.pointer, {
          [p.pointerBottom]: "bottom" === g
        })
      })]
    })
  })
})