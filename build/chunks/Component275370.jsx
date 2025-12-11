/** Chunk was on 59716 **/
/** chunk id: 275370, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk985002 = require("./985002.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk130310 = require("./130310.jsx"),
  Chunk372807 = require("./372807.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk823118 = require("./823118.js");
let j = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: j
  } = e, h = i.useCallback(() => {
    j()
  }, [j]), x = t.nsfwAllowed, [m, g] = i.useState(false), y = i.useCallback(() => {
    g(true)
  }, []), {
    acceptLinkRequest: O,
    isAcceptLoading: v
  } = (0, s.G)({
    onError: y,
    onSuccess: h
  });
  return l()(!x, "FamilyCenterAcceptLinkModal should only be rendered for teens."), (0, n.jsxs)(a.IX, {
    transitionState: o,
    onClose: j,
    "aria-label": b.intl.string(f.default.rlNJwZ),
    children: [m && (0, n.jsx)(a.M14, {
      type: "critical",
      children: b.intl.string(f.default.pegSM5)
    }), (0, n.jsxs)(a.fef, {
      children: [(0, n.jsx)(d.Z.Header, {
        currentUser: t,
        otherUser: r,
        header: b.intl.string(f.default.rlNJwZ),
        icon: (0, n.jsx)(a.xPt, {
          size: "md",
          color: "currentColor",
          className: p.linkIcon
        })
      }), (0, n.jsxs)(d.Z.Content, {
        children: [(0, n.jsx)(u.Z, {
          inModal: true
        }), (0, n.jsx)(a.Text, {
          className: p.disclaimer,
          variant: "text-xs/normal",
          color: "text-default",
          children: b.intl.format(f.default.snlFqR, {
            username: c.ZP.getName(r)
          })
        })]
      })]
    }), (0, n.jsx)(a.Go$, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: b.intl.string(b.t["ETE/oC"]),
        onClick: j,
        disabled: v
      }, {
        variant: "primary",
        text: b.intl.string(f.default["wI/jo3"]),
        onClick: () => {
          g(false), O(r.id)
        },
        disabled: v,
        loading: v
      }]
    })]
  })
}