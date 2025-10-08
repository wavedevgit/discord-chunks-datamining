/** Chunk was on 69015 **/
/** chunk id: 247265, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk490839 = require("./490839.js");
let p = e => {
  let {
    currentUser: r,
    otherUser: t,
    transitionState: i,
    onClose: p
  } = e, [h, j] = o.useState(false), m = o.useCallback(() => {
    j(true)
  }, []), y = o.useCallback(() => {
    j(false)
  }, []), x = o.useCallback(() => {
    p()
  }, [p]), g = (0, l.Z)(), {
    cancelLinkRequest: O,
    isCancelLoading: v
  } = (0, a.G)({
    onError: m,
    onSuccess: x
  });
  return s()(g, "FamilyCenterDeclineLinkModal should only be rendered for parents."), (0, n.jsx)(d.Z, {
    transitionState: i,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault(), O(t.id)
      },
      children: [(0, n.jsx)(d.Z.Error, {
        error: h ? b.intl.string(u.default["6gyAQU"]) : true,
        onDismiss: y
      }), (0, n.jsx)(c.hzk, {
        "data-migration-pending": true,
        children: (0, n.jsx)(d.Z.Header, {
          currentUser: r,
          otherUser: t,
          header: b.intl.string(u.default.HynllZ),
          icon: (0, n.jsx)(c.Dio, {
            size: "md",
            color: "currentColor",
            className: f.closeIcon
          })
        })
      }), (0, n.jsx)(c.mzw, {
        "data-migration-pending": true,
        children: (0, n.jsx)(d.Z.ButtonFooter, {
          children: (0, n.jsxs)(c.hE2, {
            direction: "horizontal-reverse",
            children: [(0, n.jsx)(c.zxk, {
              variant: "secondary",
              size: "sm",
              text: b.intl.string(u.default.czincX),
              type: "button",
              disabled: v,
              onClick: p
            }), (0, n.jsx)(c.zxk, {
              variant: "critical-primary",
              size: "sm",
              text: b.intl.string(u.default.mK40bm),
              type: "submit",
              disabled: v || h,
              loading: v
            })]
          })
        })
      })]
    })
  })
}