/** Chunk was on 59716 **/
/** chunk id: 275370, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk130310 = require("./130310.jsx"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk13625 = require("./13625.js");
let h = e => {
  let {
    currentUser: r,
    otherUser: t,
    transitionState: i,
    onClose: h
  } = e, j = o.useCallback(() => {
    h()
  }, [h]), x = (0, d.Z)(), [g, y] = o.useState(false), O = o.useCallback(() => {
    y(true)
  }, []), {
    acceptLinkRequest: v,
    isAcceptLoading: _
  } = (0, c.G)({
    onError: O,
    onSuccess: j
  });
  return a()(!x, "FamilyCenterAcceptLinkModal should only be rendered for teens."), (0, n.jsxs)(u.Z, {
    transitionState: i,
    "aria-label": m.intl.string(b.default.rlNJwc),
    className: p.root,
    children: [(0, n.jsx)(u.Z.Error, {
      error: g ? m.intl.string(b.default.pegSMz) : true
    }), (0, n.jsxs)(s.hzk, {
      "data-migration-pending": true,
      children: [(0, n.jsx)(u.Z.Header, {
        currentUser: r,
        otherUser: t,
        header: m.intl.string(b.default.rlNJwc),
        icon: (0, n.jsx)(s.xPt, {
          size: "md",
          color: "currentColor",
          className: p.linkIcon
        })
      }), (0, n.jsxs)(u.Z.Content, {
        children: [(0, n.jsx)(f.Z, {
          inModal: true
        }), (0, n.jsx)(s.Text, {
          className: p.disclaimer,
          variant: "text-xs/normal",
          color: "text-default",
          children: m.intl.format(b.default.snlFqa, {
            username: l.ZP.getName(t)
          })
        })]
      })]
    }), (0, n.jsx)(s.mzw, {
      "data-migration-pending": true,
      children: (0, n.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), v(t)
        },
        children: (0, n.jsx)(u.Z.ButtonFooter, {
          children: (0, n.jsxs)(s.hE2, {
            direction: "horizontal-reverse",
            children: [(0, n.jsx)(s.zxk, {
              variant: "secondary",
              size: "sm",
              text: m.intl.string(m.t["ETE/oK"]),
              type: "button",
              disabled: _,
              onClick: h
            }), (0, n.jsx)(s.zxk, {
              variant: "primary",
              size: "sm",
              text: m.intl.string(b.default["wI/jo6"]),
              type: "submit",
              disabled: _,
              loading: _
            })]
          })
        })
      })
    })]
  })
}