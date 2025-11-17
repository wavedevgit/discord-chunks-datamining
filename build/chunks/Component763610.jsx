/** Chunk was on 93626 **/
/** chunk id: 763610, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk557441 = require("./557441.js");

function d(e) {
  let {
    filename: t,
    className: l,
    filters: r,
    buttonText: d,
    placeholder: c,
    onFileSelect: m
  } = e, g = i.useRef(null), f = i.useRef(null);
  return (0, n.jsx)(s.tEY, {
    ringTarget: g,
    within: true,
    children: (0, n.jsxs)(s.UPk, {
      ref: g,
      className: a()(l, u.fileUpload),
      children: [(0, n.jsx)(s.rG2, {
        size: "sm"
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "" !== t ? "text-default" : "text-muted",
        lineClamp: 1,
        children: "" !== t ? t : c
      }), (0, n.jsx)(s.Button, {
        "aria-hidden": true,
        variant: "secondary",
        size: "sm",
        text: d,
        tabIndex: false
      }), (0, n.jsx)(o.Z, {
        ref: f,
        onChange: e => {
          var t;
          m(null == (t = e.currentTarget.files) ? true : t[0])
        },
        multiple: false,
        filters: r
      })]
    })
  })
}