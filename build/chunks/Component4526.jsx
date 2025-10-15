/** Chunk was on 958 **/
/** chunk id: 4526, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
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
  Chunk544723 = require("./544723.js");
let p = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: p
  } = e, [h, j] = i.useState(false), y = i.useCallback(() => {
    j(true)
  }, []), m = i.useCallback(() => {
    p()
  }, [p]), x = (0, l.Z)(), {
    declineLinkRequest: g,
    isDeclineLoading: O
  } = (0, a.G)({
    onError: y,
    onSuccess: m
  });
  return c()(!x, "FamilyCenterDeclineLinkModal should only be rendered for teens."), (0, n.jsx)(d.Z, {
    transitionState: o,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        j(false), e.preventDefault(), g(r.id)
      },
      children: [h && (0, n.jsx)(s.M14, {
        type: "critical",
        children: b.intl.string(u.default.tJAUyn)
      }), (0, n.jsxs)(s.hzk, {
        "data-migration-pending": true,
        children: [(0, n.jsx)(d.Z.Header, {
          currentUser: t,
          otherUser: r,
          header: b.intl.string(u.default.teIRCR),
          icon: (0, n.jsx)(s.Dio, {
            size: "md",
            color: "currentColor",
            className: f.closeIcon
          })
        }), (0, n.jsx)(d.Z.Content, {
          children: (0, n.jsx)(d.Z.Notice, {
            notice: b.intl.string(u.default.LcM8BS)
          })
        })]
      }), (0, n.jsx)(s.mzw, {
        "data-migration-pending": true,
        children: (0, n.jsx)(d.Z.ButtonFooter, {
          children: (0, n.jsxs)(s.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, n.jsx)(s.Button, {
              variant: "secondary",
              size: "sm",
              text: b.intl.string(b.t["ETE/oC"]),
              type: "button",
              disabled: O,
              onClick: p
            }), (0, n.jsx)(s.Button, {
              variant: "critical-primary",
              size: "sm",
              text: b.intl.string(u.default.dKxFcn),
              type: "submit",
              disabled: O,
              loading: O
            })]
          })
        })
      })]
    })
  })
}