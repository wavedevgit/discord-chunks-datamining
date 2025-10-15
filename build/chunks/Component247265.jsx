/** Chunk was on 69015 **/
/** chunk id: 247265, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk660886 = require("./660886.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk490839 = require("./490839.js");
let f = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: i,
    onClose: f
  } = e, [h, j] = o.useState(false), y = o.useCallback(() => {
    j(true)
  }, []), m = o.useCallback(() => {
    f()
  }, [f]), g = (0, l.Z)(), {
    cancelLinkRequest: x,
    isCancelLoading: O
  } = (0, s.G)({
    onError: y,
    onSuccess: m
  });
  return c()(g, "FamilyCenterDeclineLinkModal should only be rendered for parents."), (0, n.jsx)(d.Z, {
    transitionState: i,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        j(false), e.preventDefault(), x(r.id)
      },
      children: [h && (0, n.jsx)(a.M14, {
        type: "critical",
        children: b.intl.string(u.default["6gyAQZ"])
      }), (0, n.jsx)(a.hzk, {
        "data-migration-pending": true,
        children: (0, n.jsx)(d.Z.Header, {
          currentUser: t,
          otherUser: r,
          header: b.intl.string(u.default.HynllX),
          icon: (0, n.jsx)(a.Dio, {
            size: "md",
            color: "currentColor",
            className: p.closeIcon
          })
        })
      }), (0, n.jsx)(a.mzw, {
        "data-migration-pending": true,
        children: (0, n.jsx)(d.Z.ButtonFooter, {
          children: (0, n.jsxs)(a.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, n.jsx)(a.Button, {
              variant: "secondary",
              size: "sm",
              text: b.intl.string(u.default.czincX),
              type: "button",
              disabled: O,
              onClick: f
            }), (0, n.jsx)(a.Button, {
              variant: "critical-primary",
              size: "sm",
              text: b.intl.string(u.default.mK40bk),
              type: "submit",
              disabled: O || h,
              loading: O
            })]
          })
        })
      })]
    })
  })
}