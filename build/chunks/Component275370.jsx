/** Chunk was on 59716 **/
/** chunk id: 275370, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk985002 = require("./985002.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk130310 = require("./130310.jsx"),
  Chunk597754 = require("./597754.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk986360 = require("./986360.js");
let h = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: h
  } = e, j = i.useCallback(() => {
    h()
  }, [h]), m = t.nsfwAllowed, [x, y] = i.useState(false), g = i.useCallback(() => {
    y(true)
  }, []), {
    acceptLinkRequest: O,
    isAcceptLoading: v
  } = (0, s.G)({
    onError: g,
    onSuccess: j
  });
  return a()(!m, "FamilyCenterAcceptLinkModal should only be rendered for teens."), (0, n.jsxs)(l.IX, {
    transitionState: o,
    onClose: h,
    "aria-label": b.intl.string(f.default.rlNJwZ),
    children: [x && (0, n.jsx)(l.M14, {
      type: "critical",
      children: b.intl.string(f.default.pegSM5)
    }), (0, n.jsxs)(l.fef, {
      children: [(0, n.jsx)(d.Z.Header, {
        currentUser: t,
        otherUser: r,
        header: b.intl.string(f.default.rlNJwZ),
        icon: (0, n.jsx)(l.xPt, {
          size: "md",
          color: "currentColor",
          className: p.linkIcon
        })
      }), (0, n.jsxs)(d.Z.Content, {
        children: [(0, n.jsx)(u.Z, {
          inModal: true
        }), (0, n.jsx)(l.Text, {
          className: p.disclaimer,
          variant: "text-xs/normal",
          color: "text-default",
          children: b.intl.format(f.default.snlFqR, {
            username: c.ZP.getName(r)
          })
        })]
      })]
    }), (0, n.jsx)(l.Go$, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: b.intl.string(b.t["ETE/oC"]),
        onClick: h,
        disabled: v
      }, {
        variant: "primary",
        text: b.intl.string(f.default["wI/jo3"]),
        onClick: () => {
          y(false), O(r.id)
        },
        disabled: v,
        loading: v
      }]
    })]
  })
}