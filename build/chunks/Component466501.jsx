/** Chunk was on 21863 **/
/** chunk id: 466501, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk651711 = require("./651711.js"),
  Chunk434404 = require("./434404.js"),
  Chunk202858 = require("./202858.jsx"),
  Chunk587431 = require("./587431.jsx"),
  Chunk400842 = require("./400842.jsx"),
  Chunk271267 = require("./271267.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function j(e) {
  let {
    eligibility: t,
    eligibilityLoading: i,
    eligibilityError: c,
    guildId: p,
    onEligibilityBecameStale: j
  } = e, f = r.useMemo(() => ({
    onEligibilityBecameStale: j,
    sortedByIneligible: true,
    actions: {
      onEnableMFAClick: a.ZP.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, l.Mr3)(u.Q), s.Z.open(p, b.pNK.SAFETY, true, b.KsC.SAFETY_PERMISSIONS)
      }
    }
  }), [p, j]), g = (0, o.Z)(t, f);
  return null != c ? (0, n.jsx)("div", {
    children: (0, n.jsx)(d.Z, {
      children: c.message
    })
  }) : null == g || i ? (0, n.jsx)("div", {
    children: (0, n.jsx)(l.$jN, {})
  }) : (0, n.jsx)("div", {
    children: g.map((e, t) => (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(h.d, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), t < g.length - 1 ? (0, n.jsx)(l.izJ, {}) : null]
    }, e.checkedLabel))
  })
}

function f(e) {
  let {
    eligibility: t,
    eligibilityLoading: i,
    eligibilityError: r,
    refreshEligibility: o,
    guildId: s,
    transitionState: a
  } = e;
  return (0, n.jsx)(c.Modal, {
    transitionState: a,
    title: p.intl.string(p.t["3s47iI"]),
    actions: [],
    onClose: async () => {
      await (0, l.Mr3)(u.Q)
    },
    children: (0, n.jsx)(j, {
      eligibility: t,
      eligibilityLoading: i,
      eligibilityError: r,
      guildId: s,
      onEligibilityBecameStale: o
    })
  })
}