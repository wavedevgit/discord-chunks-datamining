/** Chunk was on 63757 **/
/** chunk id: 309690, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk458725 = require("./458725.js"),
  Chunk386146 = require("./386146.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk142292 = require("./142292.js");

function c(t) {
  var e;
  let {
    onClose: r,
    transitionState: c
  } = t, {
    avErrorUIEnabled: u
  } = (0, l.JN)({
    location: "StreamWarning"
  }), x = null == (e = (0, i.hp)(i.u.STREAM_FULL)) ? true : e.errorCode, m = o.intl.formatToPlainString(o.t["ejOT9/"], {
    errorCode: x
  });
  return (0, s.jsxs)(n.Y0X, {
    size: n.CgR.SMALL,
    transitionState: c,
    parentComponent: "StreamFullModal",
    children: [(0, s.jsxs)(n.xBx, {
      justify: a.Z.Justify.BETWEEN,
      children: [(0, s.jsx)(n.vwX, {
        tag: "h2",
        className: d.header,
        children: o.intl.string(o.t.GzjdOz)
      }), (0, s.jsx)(n.olH, {
        onClick: r,
        className: d.modalCloseButton
      })]
    }), (0, s.jsxs)(n.hzk, {
      children: [(0, s.jsx)(n.Text, {
        variant: "text-md/medium",
        children: o.intl.string(o.t.VVZDBA)
      }), u && (0, s.jsx)(n.Text, {
        variant: "text-md/medium",
        selectable: true,
        color: "text-muted",
        className: d.errorCode,
        children: m
      }), (0, s.jsx)("div", {
        className: d.fullArt
      })]
    }), (0, s.jsx)(n.mzw, {
      children: (0, s.jsx)(n.zxk, {
        variant: "primary",
        text: o.intl.string(o.t.BddRzc),
        onClick: r
      })
    })]
  })
}