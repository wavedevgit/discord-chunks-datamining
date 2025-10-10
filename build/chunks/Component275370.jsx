/** Chunk was on 59716 **/
/** chunk id: 275370, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk130310 = require("./130310.jsx"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk986360 = require("./986360.js");
let m = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: m
  } = e, j = i.useCallback(() => {
    m()
  }, [m]), x = (0, d.Z)(), [g, y] = i.useState(false), O = i.useCallback(() => {
    y(true)
  }, []), {
    acceptLinkRequest: v,
    isAcceptLoading: w
  } = (0, c.G)({
    onError: O,
    onSuccess: j
  });
  return a()(!x, "FamilyCenterAcceptLinkModal should only be rendered for teens."), (0, n.jsxs)(u.Z, {
    transitionState: o,
    "aria-label": b.intl.string(p.default.rlNJwc),
    className: h.root,
    children: [g && (0, n.jsx)(s.M14, {
      type: "critical",
      children: b.intl.string(p.default.pegSMz)
    }), (0, n.jsxs)(s.hzk, {
      "data-migration-pending": true,
      children: [(0, n.jsx)(u.Z.Header, {
        currentUser: t,
        otherUser: r,
        header: b.intl.string(p.default.rlNJwc),
        icon: (0, n.jsx)(s.xPt, {
          size: "md",
          color: "currentColor",
          className: h.linkIcon
        })
      }), (0, n.jsxs)(u.Z.Content, {
        children: [(0, n.jsx)(f.Z, {
          inModal: true
        }), (0, n.jsx)(s.Text, {
          className: h.disclaimer,
          variant: "text-xs/normal",
          color: "text-default",
          children: b.intl.format(p.default.snlFqa, {
            username: l.ZP.getName(r)
          })
        })]
      })]
    }), (0, n.jsx)(s.mzw, {
      "data-migration-pending": true,
      children: (0, n.jsx)("form", {
        onSubmit: e => {
          y(false), e.preventDefault(), v(r.id)
        },
        children: (0, n.jsx)(u.Z.ButtonFooter, {
          children: (0, n.jsxs)(s.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, n.jsx)(s.Button, {
              variant: "secondary",
              size: "sm",
              text: b.intl.string(b.t["ETE/oK"]),
              type: "button",
              disabled: w,
              onClick: m
            }), (0, n.jsx)(s.Button, {
              variant: "primary",
              size: "sm",
              text: b.intl.string(p.default["wI/jo6"]),
              type: "submit",
              disabled: w,
              loading: w
            })]
          })
        })
      })
    })]
  })
}