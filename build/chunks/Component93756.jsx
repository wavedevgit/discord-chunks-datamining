/** Chunk was on 13111 **/
/** chunk id: 93756, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk174767 = require("./174767.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk33108 = require("./33108.js");

function d(t) {
  let {
    transitionState: n,
    onClose: e,
    onDelete: d
  } = t;
  async function o() {
    await (0, s.TG)(), d()
  }
  return (0, i.jsxs)(a.Y0X, {
    size: a.CgR.SMALL,
    transitionState: n,
    className: l.__invalid_modal,
    parentComponent: "GameInvitesDeleteModal",
    children: [(0, i.jsxs)(a.hzk, {
      className: l.modalContent,
      children: [(0, i.jsxs)("div", {
        className: l.header,
        children: [(0, i.jsx)(a.X6q, {
          className: l.__invalid_title,
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: r.intl.string(r.t.P8nDIC)
        }), (0, i.jsx)(a.olH, {
          onClick: e
        })]
      }), (0, i.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-default",
        className: l.__invalid_body,
        children: r.intl.string(r.t.fwFcj4)
      })]
    }), (0, i.jsx)(a.mzw, {
      children: (0, i.jsxs)(a.hE2, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(a.zxk, {
          variant: "critical-primary",
          text: r.intl.string(r.t["5I4fSk"]),
          onClick: o
        }), (0, i.jsx)(a.zxk, {
          variant: "secondary",
          text: r.intl.string(r.t["ETE/oK"]),
          onClick: e
        })]
      })
    })]
  })
}