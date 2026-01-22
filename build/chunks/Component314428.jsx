/** Chunk was on 88890 **/
/** chunk id: 314428, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk398450 = require("./398450.jsx"),
  Chunk611248 = require("./611248.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk288661 = require("./288661.js");

function d(e) {
  let {
    mfaChallenge: t,
    setSlide: n,
    onClose: d,
    headerAlignStart: c
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.A.SlideHeader, {
      subtitle: a.intl.string(a.t["XQaT+8"]),
      onClose: d,
      headerAlignStart: c
    }), (0, r.jsx)(i.A.SlideContent, {
      children: t.methods.map(e => (0, r.jsxs)(l.DUT, {
        className: o.Ry,
        onClick: () => {
          n(e.type)
        },
        children: [(0, r.jsx)(l.Text, {
          className: o.zx,
          variant: "text-md/semibold",
          children: s.e[e.type]
        }), (0, r.jsx)(l._BQ, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: o.td
        })]
      }, e.type))
    })]
  })
}