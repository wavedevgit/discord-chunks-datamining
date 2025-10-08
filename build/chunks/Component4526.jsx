/** Chunk was on 958 **/
/** chunk id: 4526, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk544723 = require("./544723.js");
let h = e => {
  let {
    currentUser: r,
    otherUser: t,
    transitionState: i,
    onClose: h
  } = e, [p, j] = o.useState(false), m = o.useCallback(() => {
    j(true)
  }, []), x = o.useCallback(() => {
    j(false)
  }, []), y = o.useCallback(() => {
    h()
  }, [h]), g = (0, a.Z)(), {
    declineLinkRequest: O,
    isDeclineLoading: v
  } = (0, l.G)({
    onError: m,
    onSuccess: y
  });
  return s()(!g, "FamilyCenterDeclineLinkModal should only be rendered for teens."), (0, n.jsx)(d.Z, {
    transitionState: i,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault(), O(t.id)
      },
      children: [(0, n.jsx)(d.Z.Error, {
        error: p ? b.intl.string(u.default.tJAUys) : true,
        onDismiss: x
      }), (0, n.jsxs)(c.hzk, {
        "data-migration-pending": true,
        children: [(0, n.jsx)(d.Z.Header, {
          currentUser: r,
          otherUser: t,
          header: b.intl.string(u.default.teIRCQ),
          icon: (0, n.jsx)(c.Dio, {
            size: "md",
            color: "currentColor",
            className: f.closeIcon
          })
        }), (0, n.jsx)(d.Z.Content, {
          children: (0, n.jsx)(d.Z.Notice, {
            notice: b.intl.string(u.default.LcM8BQ)
          })
        })]
      }), (0, n.jsx)(c.mzw, {
        "data-migration-pending": true,
        children: (0, n.jsx)(d.Z.ButtonFooter, {
          children: (0, n.jsxs)(c.hE2, {
            direction: "horizontal-reverse",
            children: [(0, n.jsx)(c.zxk, {
              variant: "secondary",
              size: "sm",
              text: b.intl.string(b.t["ETE/oK"]),
              type: "button",
              disabled: v,
              onClick: h
            }), (0, n.jsx)(c.zxk, {
              variant: "critical-primary",
              size: "sm",
              text: b.intl.string(u.default.dKxFcn),
              type: "submit",
              disabled: v,
              loading: v
            })]
          })
        })
      })]
    })
  })
}