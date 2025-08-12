/** Chunk was on 15915 **/
/** chunk id: 799677, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk39604 = require("./39604.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167156 = require("./167156.js");

function o(t) {
  let {
    transitionState: e,
    onClose: i,
    onBeforeDelete: o,
    onAfterDelete: h,
    clip: m
  } = t;
  return (0, a.jsxs)(n.Y0X, {
    size: n.CgR.SMALL,
    transitionState: e,
    className: c.__invalid_modal,
    parentComponent: "ClipsDeleteModal",
    children: [(0, a.jsxs)(n.hzk, {
      className: c.modalContent,
      children: [(0, a.jsxs)("div", {
        className: c.header,
        children: [(0, a.jsx)(n.X6q, {
          className: c.__invalid_title,
          variant: "text-md/semibold",
          color: "header-primary",
          children: d.intl.string(d.t.Lzhui4)
        }), (0, a.jsx)(n.olH, {
          onClick: i
        })]
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        color: "text-default",
        className: c.__invalid_body,
        children: d.intl.string(d.t.yxCBqq)
      })]
    }), (0, a.jsx)(n.mzw, {
      children: (0, a.jsx)(n.zxk, {
        variant: "critical-primary",
        text: d.intl.string(d.t.VRWPDg),
        onClick: function() {
          null == o || o(), s.sS(m.filepath), h(), l.default.track(r.rMx.CLIP_DELETED)
        }
      })
    })]
  })
}