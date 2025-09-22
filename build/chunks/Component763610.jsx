/** Chunk was on 93626 **/
/** chunk id: 763610, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk74655 = require("./74655.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk557441 = require("./557441.js");

function d(e) {
  let {
    filename: t,
    className: l,
    filters: r,
    buttonText: d,
    placeholder: m,
    onFileSelect: f
  } = e, g = i.useRef(null), p = i.useRef(null);
  return (0, n.jsx)(o.tEY, {
    ringTarget: g,
    within: true,
    children: (0, n.jsxs)(a.U, {
      ref: g,
      className: s()(l, c.fileUpload),
      children: [(0, n.jsx)(o.rG2, {
        size: "sm"
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "" !== t ? "text-default" : "text-muted",
        lineClamp: 1,
        children: "" !== t ? t : m
      }), (0, n.jsx)(o.zxk, {
        "aria-hidden": true,
        variant: "secondary",
        size: "sm",
        text: d,
        tabIndex: false
      }), (0, n.jsx)(u.Z, {
        ref: p,
        onChange: e => {
          var t;
          f(null == (t = e.currentTarget.files) ? true : t[0])
        },
        multiple: false,
        filters: r
      })]
    })
  })
}