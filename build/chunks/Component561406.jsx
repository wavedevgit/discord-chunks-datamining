/** Chunk was on 91699 **/
/** chunk id: 561406, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
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

function b(e) {
  let {
    eligibility: t,
    eligibilityLoading: r,
    eligibilityError: l,
    guildId: p,
    onEligibilityBecameStale: b
  } = e, y = n.useMemo(() => ({
    onEligibilityBecameStale: b,
    sortedByIneligible: true,
    actions: {
      onEnableMFAClick: a.Ay.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, c.OoC)(u.m), s.A.open(p, h.BEX.SAFETY, true, h.nd0.SAFETY_PERMISSIONS)
      }
    }
  }), [p, b]), f = (0, o.A)(t, y);
  return null != l ? (0, i.jsx)("div", {
    children: (0, i.jsx)(c.wx6, {
      type: "critical",
      children: l.message
    })
  }) : null == f || r ? (0, i.jsx)("div", {
    children: (0, i.jsx)(c.y$y, {})
  }) : (0, i.jsx)("div", {
    children: f.map((e, t) => (0, i.jsxs)(n.Fragment, {
      children: [(0, i.jsx)(d.e, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), t < f.length - 1 ? (0, i.jsx)(c.cGx, {}) : null]
    }, e.checkedLabel))
  })
}

function y(e) {
  let {
    eligibility: t,
    eligibilityLoading: r,
    eligibilityError: n,
    refreshEligibility: o,
    guildId: s,
    transitionState: a
  } = e;
  return (0, i.jsx)(l.Modal, {
    transitionState: a,
    title: p.intl.string(p.t["3s47iN"]),
    actions: [],
    onClose: async () => {
      await (0, c.OoC)(u.m)
    },
    children: (0, i.jsx)(b, {
      eligibility: t,
      eligibilityLoading: r,
      eligibilityError: n,
      guildId: s,
      onEligibilityBecameStale: o
    })
  })
}