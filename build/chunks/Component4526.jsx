/** Chunk was on 958 **/
/** chunk id: 4526, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk435757 = require("./435757.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk544723 = require("./544723.js");
let b = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: i,
    onClose: b
  } = e, [p, h] = o.useState(false), j = o.useCallback(() => {
    h(true)
  }, []), y = o.useCallback(() => {
    b()
  }, [b]), x = t.nsfwAllowed, {
    declineLinkRequest: g,
    isDeclineLoading: O
  } = (0, s.G)({
    onError: j,
    onSuccess: y
  });
  return c()(!x, "FamilyCenterDeclineLinkModal should only be rendered for teens."), (0, n.jsxs)(l.IX, {
    transitionState: i,
    onClose: b,
    children: [p && (0, n.jsx)(l.M14, {
      type: "critical",
      children: u.intl.string(d.default.tJAUyn)
    }), (0, n.jsxs)(l.fef, {
      children: [(0, n.jsx)(a.Z.Header, {
        currentUser: t,
        otherUser: r,
        header: u.intl.string(d.default.teIRCR),
        icon: (0, n.jsx)(l.Dio, {
          size: "md",
          color: "currentColor",
          className: f.closeIcon
        })
      }), (0, n.jsx)(a.Z.Content, {
        children: (0, n.jsx)(a.Z.Notice, {
          notice: u.intl.string(d.default.LcM8BS)
        })
      })]
    }), (0, n.jsx)(l.Go$, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: u.intl.string(u.t["ETE/oC"]),
        onClick: b,
        disabled: O
      }, {
        variant: "critical-primary",
        text: u.intl.string(d.default.dKxFcn),
        onClick: () => {
          h(false), g(r.id)
        },
        disabled: O,
        loading: O
      }]
    })]
  })
}