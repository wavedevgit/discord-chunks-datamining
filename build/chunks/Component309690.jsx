/** Chunk was on 63757 **/
/** chunk id: 309690, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk458725 = require("./458725.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk959862 = require("./959862.js");

function o(t) {
  var e;
  let {
    onClose: r,
    transitionState: o
  } = t, u = null == (e = (0, a.hp)(a.u.STREAM_FULL)) ? true : e.errorCode, c = s.intl.formatToPlainString(s.t.ejOT95, {
    errorCode: u
  });
  return (0, i.jsxs)(n.Y0X, {
    size: n.CgR.SMALL,
    transitionState: o,
    parentComponent: "StreamFullModal",
    children: [(0, i.jsxs)(n.xBx, {
      justify: l.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        className: d.header,
        children: s.intl.string(s.t.GzjdO5)
      }), (0, i.jsx)(n.olH, {
        onClick: r,
        className: d.modalCloseButton
      })]
    }), (0, i.jsxs)(n.hzk, {
      children: [(0, i.jsx)(n.Text, {
        variant: "text-md/medium",
        children: s.intl.string(s.t.VVZDBL)
      }), (0, i.jsx)(n.Text, {
        variant: "text-md/medium",
        selectable: true,
        color: "text-muted",
        className: d.errorCode,
        children: c
      }), (0, i.jsx)("div", {
        className: d.fullArt
      })]
    }), (0, i.jsx)(n.mzw, {
      children: (0, i.jsx)(n.Button, {
        variant: "primary",
        text: s.intl.string(s.t.BddRzS),
        onClick: r
      })
    })]
  })
}