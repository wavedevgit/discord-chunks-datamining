/** Chunk was on 63757 **/
/** chunk id: 309690, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk458725 = require("./458725.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209731 = require("./209731.js");

function d(t) {
  var e;
  let {
    onClose: r,
    transitionState: d
  } = t, c = null == (e = (0, n.hp)(n.u.STREAM_FULL)) ? true : e.errorCode, u = a.intl.formatToPlainString(a.t["ejOT9/"], {
    errorCode: c
  });
  return (0, l.jsxs)(s.Y0X, {
    size: s.CgR.SMALL,
    transitionState: d,
    parentComponent: "StreamFullModal",
    children: [(0, l.jsxs)(s.xBx, {
      justify: i.Z.Justify.BETWEEN,
      children: [(0, l.jsx)(s.vwX, {
        tag: "h2",
        className: o.header,
        children: a.intl.string(a.t.GzjdOz)
      }), (0, l.jsx)(s.olH, {
        onClick: r,
        className: o.modalCloseButton
      })]
    }), (0, l.jsxs)(s.hzk, {
      children: [(0, l.jsx)(s.Text, {
        variant: "text-md/medium",
        children: a.intl.string(a.t.VVZDBA)
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/medium",
        selectable: true,
        color: "text-muted",
        className: o.errorCode,
        children: u
      }), (0, l.jsx)("div", {
        className: o.fullArt
      })]
    }), (0, l.jsx)(s.mzw, {
      children: (0, l.jsx)(s.zxk, {
        variant: "primary",
        text: a.intl.string(a.t.BddRzc),
        onClick: r
      })
    })]
  })
}