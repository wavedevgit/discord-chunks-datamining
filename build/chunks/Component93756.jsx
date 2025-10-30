/** Chunk was on 13111 **/
/** chunk id: 93756, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk174767 = require("./174767.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607582 = require("./607582.js");

function o(t) {
  let {
    transitionState: n,
    onClose: e,
    onDelete: o
  } = t;
  async function d() {
    await (0, r.TG)(), o()
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
        children: [(0, i.jsx)(a.Heading, {
          className: l.__invalid_title,
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: s.intl.string(s.t.P8nDIN)
        }), (0, i.jsx)(a.olH, {
          onClick: e
        })]
      }), (0, i.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-default",
        className: l.__invalid_body,
        children: s.intl.string(s.t.fwFcj5)
      })]
    }), (0, i.jsx)(a.mzw, {
      children: (0, i.jsxs)(a.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(a.Button, {
          variant: "critical-primary",
          text: s.intl.string(s.t["5I4fSm"]),
          onClick: d
        }), (0, i.jsx)(a.Button, {
          variant: "secondary",
          text: s.intl.string(s.t["ETE/oC"]),
          onClick: e
        })]
      })
    })]
  })
}