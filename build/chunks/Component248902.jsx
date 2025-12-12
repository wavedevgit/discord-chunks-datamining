/** Chunk was on 52030 **/
/** chunk id: 248902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk48550 = require("./48550.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk802371 = require("./802371.js");

function c(e) {
  let {
    mfaChallenge: t,
    setSlide: n,
    onClose: c,
    headerAlignStart: u
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Z.SlideHeader, {
      subtitle: a.intl.string(a.t["XQaT+8"]),
      onClose: c,
      headerAlignStart: u
    }), (0, r.jsx)(i.Z.SlideContent, {
      children: t.methods.map(e => (0, r.jsxs)(l.P3F, {
        className: o.listItemContainer,
        onClick: () => {
          n(e.type)
        },
        children: [(0, r.jsx)(l.Text, {
          className: o.listItemText,
          variant: "text-md/semibold",
          children: s.P[e.type]
        }), (0, r.jsx)(l.Fbu, {
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