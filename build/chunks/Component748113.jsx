/** Chunk was on 58652 **/
/** chunk id: 748113, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk248065 = require("./248065.js");
let d = e => {
  var t;
  let {
    entry: n
  } = e, {
    id: d,
    icon: c,
    name: u
  } = n, m = null != (t = a.Ay.getGuildIconURL({
    id: d,
    icon: c,
    size: 32
  })) ? t : true;
  return (0, l.jsxs)("div", {
    className: o.kL,
    children: [(0, l.jsx)(r.Heading, {
      className: o.wx,
      variant: "heading-sm/semibold",
      children: s.intl.string(s.t.nTe4HC)
    }), (0, l.jsx)("div", {
      className: o.bo,
      children: (0, l.jsxs)("div", {
        className: o.OA,
        children: [(0, l.jsx)(i.Ay, {
          mask: i.Ay.Masks.SQUIRCLE,
          width: 32,
          height: 32,
          className: o.$d,
          children: (0, l.jsx)("img", {
            src: m,
            alt: "",
            className: o.$f
          })
        }), (0, l.jsx)(r.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: u
        })]
      })
    })]
  })
}