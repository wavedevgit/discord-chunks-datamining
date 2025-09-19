/** Chunk was on 28934 **/
/** chunk id: 826011, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk304789 = require("./304789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk998964 = require("./998964.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk927607 = require("./927607.js");

function p(e) {
  let {
    instance: t,
    onClose: s,
    transitionState: p
  } = e, x = (0, o.Z)(t), h = r.useCallback(() => {
    (0, c.JG)(x), (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["+5kSoa"]), i.ToastType.SUCCESS))
  }, [x]);
  return (0, a.jsxs)(i.Y0X, {
    className: m.modal,
    size: i.CgR.MEDIUM,
    transitionState: p,
    parentComponent: "PortkeyInstructionsModal",
    children: [(0, a.jsx)(i.olH, {
      onClick: s,
      className: m.closeButton
    }), (0, a.jsx)(n.$, {
      children: (0, a.jsxs)(i.hzk, {
        className: m.content,
        children: [(0, a.jsx)("img", {
          src: "",
          alt: "",
          className: m.gameImage
        }), (0, a.jsxs)("div", {
          className: m.header,
          children: [(0, a.jsx)(i.X6q, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            children: t.name
          }), (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: t.planName
          })]
        }), (0, a.jsx)("div", {
          className: m.stepsContainer,
          children: t.instructions.map((e, t) => (0, a.jsxs)("div", {
            className: m.step,
            children: [(0, a.jsx)("div", {
              className: m.stepNumber,
              children: (0, a.jsx)(i.Text, {
                variant: "text-sm/semibold",
                color: "text-secondary",
                children: d.intl.formatToPlainString(l.default.e0RxEB, {
                  step: t + 1
                })
              })
            }), (0, a.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: e
            })]
          }, t))
        }), (0, a.jsxs)("div", {
          className: m.serverIpContainer,
          children: [(0, a.jsx)("div", {
            className: m.serverIpInput,
            children: (0, a.jsx)(i.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              children: x
            })
          }), (0, a.jsx)(i.zxk, {
            variant: "primary",
            text: d.intl.string(d.t.OpuAlJ),
            onClick: h,
            icon: i.TIy
          })]
        })]
      })
    })]
  })
}