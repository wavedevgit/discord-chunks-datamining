/** Chunk was on 41753 **/
/** chunk id: 13186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => p,
  Z: () => f
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk492211 = require("./492211.js"),
  p = ((r = {}).TOP = "top", r.BOTTOM = "bottom", r);
let f = Chunk73800.forwardRef(function(e, t) {
  let {
    body: n,
    header: r,
    artClassName: l,
    buttonText: o,
    onClose: p,
    art: f,
    align: g
  } = e;
  return (0, d.Z)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.CHAT_WALLPAPER_DM_LIST_COACHMARK
  }), (0, i.jsx)("div", {
    className: h.tooltip,
    ref: t,
    children: (0, i.jsxs)("div", {
      className: h.content,
      children: [(0, i.jsx)("div", {
        className: l,
        children: f
      }), (0, i.jsxs)("div", {
        className: h.body,
        children: [(0, i.jsx)(u.X6q, {
          className: h.header,
          variant: "heading-md/bold",
          color: "always-white",
          children: r
        }), null == n ? null : "string" == typeof n ? (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, i.jsx)("div", {
        className: h.buttonContainer,
        children: (0, i.jsx)(c.z, {
          variant: "primary",
          text: o,
          fullWidth: true,
          onClick: e => {
            null == p || p(e)
          }
        })
      }), (0, i.jsx)("div", {
        className: s()(h.pointer, {
          [h.pointerBottom]: "bottom" === g
        })
      })]
    })
  })
})