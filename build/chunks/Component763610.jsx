/** Chunk was on web.js **/
/** chunk id: 763610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk557441 = require("./557441.js");

function u(e) {
  let {
    filename: t,
    className: n,
    filters: o,
    buttonText: u,
    placeholder: d,
    onFileSelect: f
  } = e, _ = i.useRef(null), p = e => {
    var t;
    f(null == (t = e.currentTarget.files) ? true : t[0])
  };
  return (0, r.jsxs)("div", {
    className: a()(n, c.fileUpload),
    children: [(0, r.jsx)("input", {
      className: c.fileUploadInput,
      tabIndex: false,
      readOnly: true,
      placeholder: d,
      type: "text",
      value: t
    }), (0, r.jsxs)(s.zx, {
      size: s.zx.Sizes.MIN,
      className: c.fileUploadButton,
      children: [u, (0, r.jsx)(l.Z, {
        ref: _,
        tabIndex: false,
        onChange: p,
        multiple: false,
        filters: o
      })]
    })]
  })
}