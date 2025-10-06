/** Chunk was on 29679 **/
/** chunk id: 975464, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  C: () => _,
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk17079 = require("./17079.js"),
  Chunk605288 = require("./605288.js"),
  Chunk787051 = require("./787051.js"),
  Chunk346163 = require("./346163.js"),
  Chunk587431 = require("./587431.jsx"),
  Chunk271267 = require("./271267.jsx"),
  Chunk320893 = require("./320893.jsx"),
  Chunk81509 = require("./81509.jsx"),
  Chunk662379 = require("./662379.jsx"),
  Chunk60533 = require("./60533.jsx"),
  Chunk581050 = require("./581050.js"),
  Chunk322001 = require("./322001.js");

function _(e) {
  let {
    onboardingMarketing: t,
    onboardingMarketingError: n
  } = e, i = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.izJ, {
        className: j.sectionDivider
      }), t]
    })
  }, l = (0, r.jsx)(i, {
    children: (0, r.jsx)(h.Z, {})
  }, b.q.HOW_IT_WORKS), a = (0, r.jsx)(i, {
    children: (0, r.jsx)(p.Z, {})
  }, b.q.BENEFITS);
  return null != n || (null == t ? true : t.sections) == null ? (0, r.jsxs)(r.Fragment, {
    children: [l, a]
  }) : (0, r.jsx)(r.Fragment, {
    children: t.sections.map(e => {
      switch (e.type) {
        case b.q.HOW_IT_WORKS:
          return l;
        case b.q.BENEFITS:
          return a;
        case b.q.OTHER_CREATORS:
          return (0, r.jsx)(i, {
            children: (0, r.jsx)(f.Z, {
              highlightedCreators: e.creators
            })
          }, b.q.OTHER_CREATORS)
      }
    })
  })
}

function v(e) {
  let {
    guild: t
  } = e, n = (0, u.Z)(t), {
    eligibilityLoading: p,
    eligibilityError: f,
    eligibility: h
  } = n, b = (0, c.j)(h), {
    isLoading: v,
    error: C,
    creatorMonetizationOnboardingMarketing: O
  } = (0, d.Z)(t.id);
  return (i.useEffect(() => {
    (0, o.k)(t.id)
  }, [t.id]), (0, a.Z)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
    properties: {
      guild_id: t.id,
      is_owner: n.isGuildOwner,
      is_eligible: n.eligibleForMonetization,
      ineligible_reasons: b
    }
  }, {
    disableTrack: null == t.id || null == h
  }), p || null == h || v) ? (0, r.jsx)(s.$jN, {}) : h.actionRequired ? (0, r.jsx)(x.Z, {
    guild: t
  }) : null != f ? (0, r.jsx)(m.Z, {
    children: f.message
  }) : (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsx)(g.Z, {
      guild: t,
      monetizationEligibility: n
    }), (0, r.jsx)(_, {
      onboardingMarketing: O,
      onboardingMarketingError: C
    })]
  })
}