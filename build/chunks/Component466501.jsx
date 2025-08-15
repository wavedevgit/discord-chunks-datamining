/** Chunk was on 21863 **/
/** chunk id: 466501, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
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

function f(e) {
  let {
    eligibility: t,
    eligibilityLoading: n,
    eligibilityError: c,
    guildId: p,
    onEligibilityBecameStale: f
  } = e, y = i.useMemo(() => ({
    onEligibilityBecameStale: f,
    sortedByIneligible: true,
    actions: {
      onEnableMFAClick: a.ZP.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, l.Mr3)(d.Q), s.Z.open(p, h.pNK.SAFETY, true, h.KsC.SAFETY_PERMISSIONS)
      }
    }
  }), [p, f]), j = (0, o.Z)(t, y);
  return null != c ? (0, r.jsx)("div", {
    children: (0, r.jsx)(u.Z, {
      children: c.message
    })
  }) : null == j || n ? (0, r.jsx)("div", {
    children: (0, r.jsx)(l.$jN, {})
  }) : (0, r.jsx)("div", {
    children: j.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(b.d, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), t < j.length - 1 ? (0, r.jsx)(l.$i$, {}) : null]
    }, e.checkedLabel))
  })
}

function y(e) {
  let {
    eligibility: t,
    eligibilityLoading: n,
    eligibilityError: i,
    refreshEligibility: o,
    guildId: s,
    transitionState: a
  } = e;
  return (0, r.jsx)(c.Modal, {
    transitionState: a,
    title: p.intl.string(p.t["3s47iI"]),
    actions: [],
    onClose: async () => {
      await (0, l.Mr3)(d.Q)
    },
    children: (0, r.jsx)(f, {
      eligibility: t,
      eligibilityLoading: n,
      eligibilityError: i,
      guildId: s,
      onEligibilityBecameStale: o
    })
  })
}