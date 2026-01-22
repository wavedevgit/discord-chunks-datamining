/** Chunk was on 91699 **/
/** chunk id: 561406, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk748112 = require("./748112.js"),
  Chunk997509 = require("./997509.js"),
  Chunk179690 = require("./179690.jsx"),
  Chunk167084 = require("./167084.jsx"),
  Chunk584508 = require("./584508.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    eligibility: t,
    eligibilityLoading: r,
    eligibilityError: l,
    guildId: p,
    onEligibilityBecameStale: h
  } = e, f = i.useMemo(() => ({
    onEligibilityBecameStale: h,
    sortedByIneligible: true,
    actions: {
      onEnableMFAClick: s.Ay.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, c.OoC)(u.m), a.A.open(p, b.BEX.SAFETY, true, b.nd0.SAFETY_PERMISSIONS)
      }
    }
  }), [p, h]), y = (0, o.A)(t, f);
  return null != l ? (0, n.jsx)("div", {
    children: (0, n.jsx)(c.wx6, {
      type: "critical",
      children: l.message
    })
  }) : null == y || r ? (0, n.jsx)("div", {
    children: (0, n.jsx)(c.y$y, {})
  }) : (0, n.jsx)("div", {
    children: y.map((e, t) => (0, n.jsxs)(i.Fragment, {
      children: [(0, n.jsx)(d.e, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), t < y.length - 1 ? (0, n.jsx)(c.cGx, {}) : null]
    }, e.checkedLabel))
  })
}

function f(e) {
  let {
    eligibility: t,
    eligibilityLoading: r,
    eligibilityError: i,
    refreshEligibility: o,
    guildId: a,
    transitionState: s
  } = e;
  return (0, n.jsx)(l.Modal, {
    transitionState: s,
    title: p.intl.string(p.t["3s47iN"]),
    actions: [],
    onClose: async () => {
      await (0, c.OoC)(u.m)
    },
    children: (0, n.jsx)(h, {
      eligibility: t,
      eligibilityLoading: r,
      eligibilityError: i,
      guildId: a,
      onEligibilityBecameStale: o
    })
  })
}