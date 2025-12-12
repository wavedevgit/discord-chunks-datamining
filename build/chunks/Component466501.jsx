/** Chunk was on 21863 **/
/** chunk id: 466501, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk651711 = require("./651711.js"),
  Chunk434404 = require("./434404.js"),
  Chunk202858 = require("./202858.jsx"),
  Chunk400842 = require("./400842.jsx"),
  Chunk271267 = require("./271267.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    eligibility: t,
    eligibilityLoading: i,
    eligibilityError: r,
    guildId: b,
    onEligibilityBecameStale: p
  } = e, f = c.useMemo(() => ({
    onEligibilityBecameStale: p,
    sortedByIneligible: true,
    actions: {
      onEnableMFAClick: a.ZP.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, l.Mr3)(h.Q), s.Z.open(b, u.pNK.SAFETY, true, u.KsC.SAFETY_PERMISSIONS)
      }
    }
  }), [b, p]), j = (0, o.Z)(t, f);
  return null != r ? (0, n.jsx)("div", {
    children: (0, n.jsx)(l.M14, {
      type: "critical",
      children: r.message
    })
  }) : null == j || i ? (0, n.jsx)("div", {
    children: (0, n.jsx)(l.$jN, {})
  }) : (0, n.jsx)("div", {
    children: j.map((e, t) => (0, n.jsxs)(c.Fragment, {
      children: [(0, n.jsx)(d.d, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), t < j.length - 1 ? (0, n.jsx)(l.izJ, {}) : null]
    }, e.checkedLabel))
  })
}

function f(e) {
  let {
    eligibility: t,
    eligibilityLoading: i,
    eligibilityError: c,
    refreshEligibility: o,
    guildId: s,
    transitionState: a
  } = e;
  return (0, n.jsx)(r.Modal, {
    transitionState: a,
    title: b.intl.string(b.t["3s47iN"]),
    actions: [],
    onClose: async () => {
      await (0, l.Mr3)(h.Q)
    },
    children: (0, n.jsx)(p, {
      eligibility: t,
      eligibilityLoading: i,
      eligibilityError: c,
      guildId: s,
      onEligibilityBecameStale: o
    })
  })
}