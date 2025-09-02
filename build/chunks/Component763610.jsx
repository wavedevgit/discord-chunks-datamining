/** Chunk was on web.js **/
/** chunk id: 763610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk74655 = require("./74655.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk557441 = require("./557441.js");

function d(e) {
  let {
    filename: t,
    className: n,
    filters: a,
    buttonText: d,
    placeholder: f,
    onFileSelect: _
  } = e, p = i.useRef(null), h = i.useRef(null), m = e => {
    var t;
    _(null == (t = e.currentTarget.files) ? true : t[0])
  }, g = "" !== t ? "text-default" : "text-muted";
  return (0, r.jsx)(l.tEY, {
    ringTarget: p,
    within: true,
    children: (0, r.jsxs)(s.U, {
      ref: p,
      className: o()(n, u.fileUpload),
      children: [(0, r.jsx)(l.rG2, {
        size: "sm"
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: g,
        lineClamp: 1,
        children: "" !== t ? t : f
      }), (0, r.jsx)(l.zxk, {
        "aria-hidden": true,
        variant: "secondary",
        size: "sm",
        text: d,
        tabIndex: false
      }), (0, r.jsx)(c.Z, {
        ref: h,
        onChange: m,
        multiple: false,
        filters: a
      })]
    })
  })
}