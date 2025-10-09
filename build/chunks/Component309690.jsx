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
  } = t, c = null == (e = (0, s.hp)(s.u.STREAM_FULL)) ? true : e.errorCode, u = a.intl.formatToPlainString(a.t["ejOT9/"], {
    errorCode: c
  });
  return (0, i.jsxs)(l.Y0X, {
    size: l.CgR.SMALL,
    transitionState: o,
    parentComponent: "StreamFullModal",
    children: [(0, i.jsxs)(l.xBx, {
      justify: n.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(l.X6q, {
        variant: "heading-md/semibold",
        className: d.header,
        children: a.intl.string(a.t.GzjdOz)
      }), (0, i.jsx)(l.olH, {
        onClick: r,
        className: d.modalCloseButton
      })]
    }), (0, i.jsxs)(l.hzk, {
      children: [(0, i.jsx)(l.Text, {
        variant: "text-md/medium",
        children: a.intl.string(a.t.VVZDBA)
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/medium",
        selectable: true,
        color: "text-muted",
        className: d.errorCode,
        children: u
      }), (0, i.jsx)("div", {
        className: d.fullArt
      })]
    }), (0, i.jsx)(l.mzw, {
      children: (0, i.jsx)(l.zxk, {
        variant: "primary",
        text: a.intl.string(a.t.BddRzc),
        onClick: r
      })
    })]
  })
}