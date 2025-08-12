/** Chunk was on 93626 **/
/** chunk id: 763610, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk604956 = require("./604956.js");

function c(e) {
  let {
    filename: t,
    className: l,
    filters: s,
    buttonText: c,
    placeholder: d,
    onFileSelect: m
  } = e, f = i.useRef(null);
  return (0, n.jsxs)("div", {
    className: r()(l, u.fileUpload),
    children: [(0, n.jsx)("input", {
      className: u.fileUploadInput,
      tabIndex: false,
      readOnly: true,
      placeholder: d,
      type: "text",
      value: t
    }), (0, n.jsxs)(a.zx, {
      size: a.zx.Sizes.MIN,
      className: u.fileUploadButton,
      children: [c, (0, n.jsx)(o.Z, {
        ref: f,
        tabIndex: false,
        onChange: e => {
          var t;
          m(null == (t = e.currentTarget.files) ? true : t[0])
        },
        multiple: false,
        filters: s
      })]
    })]
  })
}