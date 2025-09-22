/** Chunk was on 27978 **/
/** chunk id: 80206, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk294707 = require("./294707.js");

function c(e) {
  let {
    title: t,
    subtitle: n,
    buttonText: c,
    image: u,
    onButtonClick: d,
    loading: h
  } = e;
  return (0, r.jsx)(o.ZP, {
    className: a.container,
    children: (0, r.jsxs)(i.Kqy, {
      align: "center",
      justify: "center",
      gap: 24,
      children: [(0, r.jsxs)(i.Kqy, {
        gap: 8,
        align: "center",
        children: [(0, r.jsxs)(i.Kqy, {
          gap: 24,
          align: "center",
          children: [null != u && (0, r.jsx)(i.Kqy, {
            align: "center",
            justify: "center",
            className: a.image,
            children: u
          }), h && (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE
          }), (0, r.jsx)(i.X6q, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            children: t
          })]
        }), null != n && "" !== n && (0, r.jsx)(i.xvT, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: a.subtitle,
          children: n
        })]
      }), !h && (0, r.jsx)(l.zxk, {
        onClick: d,
        text: c,
        variant: "overlay-primary"
      })]
    })
  })
}