/** Chunk was on 22988 **/
/** chunk id: 975464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => x,
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
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
  Chunk551131 = require("./551131.js");

function x(e) {
  let {
    onboardingMarketing: t,
    onboardingMarketingError: n
  } = e, i = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.$i$, {
        className: b.sectionDivider
      }), t]
    })
  }, a = (0, r.jsx)(i, {
    children: (0, r.jsx)(p.Z, {})
  }, f.q.HOW_IT_WORKS), s = (0, r.jsx)(i, {
    children: (0, r.jsx)(m.Z, {})
  }, f.q.BENEFITS);
  return null != n || (null == t ? true : t.sections) == null ? (0, r.jsxs)(r.Fragment, {
    children: [a, s]
  }) : (0, r.jsx)(r.Fragment, {
    children: t.sections.map(e => {
      switch (e.type) {
        case f.q.HOW_IT_WORKS:
          return a;
        case f.q.BENEFITS:
          return s;
        case f.q.OTHER_CREATORS:
          return (0, r.jsx)(i, {
            children: (0, r.jsx)(g.Z, {
              highlightedCreators: e.creators
            })
          }, f.q.OTHER_CREATORS)
      }
    })
  })
}

function j(e) {
  let {
    guild: t
  } = e, n = (0, c.Z)(t), {
    eligibilityLoading: m,
    eligibilityError: g,
    eligibility: p
  } = n, f = (0, s.j)(p), {
    isLoading: j,
    error: v,
    creatorMonetizationOnboardingMarketing: _
  } = (0, o.Z)(t.id);
  return ((0, a.Z)({
    type: i.ImpressionTypes.PANE,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
    properties: {
      guild_id: t.id,
      is_owner: n.isGuildOwner,
      is_eligible: n.eligibleForMonetization,
      ineligible_reasons: f
    }
  }, {
    disableTrack: null == t.id || null == p
  }), m || null == p || j) ? (0, r.jsx)(l.$jN, {}) : p.actionRequired ? (0, r.jsx)(h.Z, {
    guild: t
  }) : null != g ? (0, r.jsx)(d.Z, {
    children: g.message
  }) : (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(u.Z, {
      guild: t,
      monetizationEligibility: n
    }), (0, r.jsx)(x, {
      onboardingMarketing: _,
      onboardingMarketingError: v
    })]
  })
}