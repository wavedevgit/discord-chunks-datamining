/** Chunk was on 28934 **/
/** chunk id: 826011, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk998964 = require("./998964.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999852 = require("./999852.js");

function m(e) {
  let {
    instance: t,
    onClose: s,
    transitionState: m
  } = e, x = (0, o.Z)(t), h = n.useCallback(() => {
    (0, c.JG)(x), (0, i.showToast)((0, i.createToast)(p.intl.string(p.t["+5kSoa"]), i.ToastType.SUCCESS))
  }, [x]);
  return (0, r.jsx)(a.I, {
    graphic: {
      src: "https://placehold.co/110x150",
      type: "image"
    },
    title: t.name,
    subtitle: t.planName,
    size: "md",
    transitionState: m,
    onClose: s,
    children: (0, r.jsxs)("div", {
      className: d.content,
      children: [(0, r.jsx)("div", {
        className: d.stepsContainer,
        children: t.instructions.map((e, t) => (0, r.jsxs)("div", {
          className: d.step,
          children: [(0, r.jsx)("div", {
            className: d.stepNumber,
            children: (0, r.jsx)(i.Text, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              children: p.intl.formatToPlainString(l.default.e0RxEB, {
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
        className: d.serverIpContainer,
        children: [(0, r.jsx)("div", {
          className: d.serverIpInput,
          children: (0, r.jsx)(i.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: x
          })
        }), (0, r.jsx)(i.zxk, {
          variant: "primary",
          text: p.intl.string(p.t.OpuAlJ),
          onClick: h,
          icon: i.TIy
        })]
      })]
    })
  })
}