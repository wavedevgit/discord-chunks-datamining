/** Chunk was on 52030 **/
/** chunk id: 248902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk48550 = require("./48550.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk357507 = require("./357507.js");

function d(e) {
  let {
    mfaChallenge: t,
    setSlide: n,
    onClose: d,
    headerAlignStart: u
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(i.Z.SlideHeader, {
      subtitle: a.intl.string(a.t["XQaT+8"]),
      onClose: d,
      headerAlignStart: u
    }), (0, l.jsx)(i.Z.SlideContent, {
      children: t.methods.map(e => (0, l.jsxs)(r.P3F, {
        className: o.listItemContainer,
        onClick: () => {
          n(e.type)
        },
        children: [(0, l.jsx)(r.Text, {
          className: o.listItemText,
          variant: "text-md/semibold",
          children: s.P[e.type]
        }), (0, l.jsx)(r.Fbu, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: o.listItemArrow
        })]
      }, e.type))
    })]
  })
}