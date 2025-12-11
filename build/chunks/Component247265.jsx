/** Chunk was on 69015 **/
/** chunk id: 247265, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk435757 = require("./435757.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk490839 = require("./490839.js");
let b = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: c,
    onClose: b
  } = e, [p, h] = o.useState(false), j = o.useCallback(() => {
    h(true)
  }, []), y = o.useCallback(() => {
    b()
  }, [b]), g = t.nsfwAllowed, {
    cancelLinkRequest: O,
    isCancelLoading: m
  } = (0, a.G)({
    onError: j,
    onSuccess: y
  });
  return i()(g, "FamilyCenterDeclineLinkModal should only be rendered for parents."), (0, n.jsxs)(l.IX, {
    transitionState: c,
    onClose: b,
    children: [p && (0, n.jsx)(l.M14, {
      type: "critical",
      children: u.intl.string(d.default["6gyAQZ"])
    }), (0, n.jsx)(l.fef, {
      children: (0, n.jsx)(s.Z.Header, {
        currentUser: t,
        otherUser: r,
        header: u.intl.string(d.default.HynllX),
        icon: (0, n.jsx)(l.Dio, {
          size: "md",
          color: "currentColor",
          className: f.closeIcon
        })
      })
    }), (0, n.jsx)(l.Go$, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: u.intl.string(d.default.czincX),
        onClick: b,
        disabled: m
      }, {
        variant: "critical-primary",
        text: u.intl.string(d.default.mK40bk),
        onClick: () => {
          h(false), O(r.id)
        },
        disabled: m || p,
        loading: m
      }]
    })]
  })
}