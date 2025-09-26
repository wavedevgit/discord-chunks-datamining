/** Chunk was on 28934 **/
/** chunk id: 826011, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk943970 = require("./943970.js"),
  Chunk998964 = require("./998964.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999852 = require("./999852.js");

function x(e) {
  let {
    instance: t,
    onClose: s,
    transitionState: x
  } = e, u = (0, l.Z)(t), h = n.useCallback(() => {
    (0, c.JG)(u), (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["+5kSoa"]), i.ToastType.SUCCESS))
  }, [u]), v = (0, o.Z)(t.gameId, "cover");
  return (0, r.jsx)(a.I, {
    graphic: {
      src: v,
      type: "image"
    },
    title: t.name,
    subtitle: t.planName,
    size: "md",
    transitionState: x,
    onClose: s,
    children: (0, r.jsxs)("div", {
      className: m.content,
      children: [(0, r.jsx)("div", {
        className: m.stepsContainer,
        children: t.instructions.map((e, t) => (0, r.jsxs)("div", {
          className: m.step,
          children: [(0, r.jsx)("div", {
            className: m.stepNumber,
            children: (0, r.jsx)(i.Text, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              children: d.intl.formatToPlainString(p.default.e0RxEB, {
                step: t + 1
              })
            })
          }), (0, r.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "header-primary",
            children: e
          })]
        }, t))
      }), (0, r.jsxs)("div", {
        className: m.serverIpContainer,
        children: [(0, r.jsx)("div", {
          className: m.serverIpInput,
          children: (0, r.jsx)(i.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: u
          })
        }), (0, r.jsx)(i.zxk, {
          variant: "primary",
          text: d.intl.string(d.t.OpuAlJ),
          onClick: h,
          icon: i.TIy
        })]
      })]
    })
  })
}