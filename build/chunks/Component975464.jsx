/** Chunk was on 8106 **/
/** chunk id: 975464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => v,
  Z: () => _
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
  Chunk169400 = require("./169400.js");

function v(e) {
  let {
    onboardingMarketing: t,
    onboardingMarketingError: n
  } = e, i = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.$i$, {
        className: j.sectionDivider
      }), t]
    })
  }, l = (0, r.jsx)(i, {
    children: (0, r.jsx)(f.Z, {})
  }, x.q.HOW_IT_WORKS), s = (0, r.jsx)(i, {
    children: (0, r.jsx)(p.Z, {})
  }, x.q.BENEFITS);
  return null != n || (null == t ? true : t.sections) == null ? (0, r.jsxs)(r.Fragment, {
    children: [l, s]
  }) : (0, r.jsx)(r.Fragment, {
    children: t.sections.map(e => {
      switch (e.type) {
        case x.q.HOW_IT_WORKS:
          return l;
        case x.q.BENEFITS:
          return s;
        case x.q.OTHER_CREATORS:
          return (0, r.jsx)(i, {
            children: (0, r.jsx)(h.Z, {
              highlightedCreators: e.creators
            })
          }, x.q.OTHER_CREATORS)
      }
    })
  })
}

function _(e) {
  let {
    guild: t
  } = e, n = (0, u.Z)(t), {
    eligibilityLoading: p,
    eligibilityError: h,
    eligibility: f
  } = n, x = (0, c.j)(f), {
    isLoading: _,
    error: O,
    creatorMonetizationOnboardingMarketing: y
  } = (0, d.Z)(t.id);
  return (i.useEffect(() => {
    (0, o.k)(t.id)
  }, [t.id]), (0, s.Z)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
    properties: {
      guild_id: t.id,
      is_owner: n.isGuildOwner,
      is_eligible: n.eligibleForMonetization,
      ineligible_reasons: x
    }
  }, {
    disableTrack: null == t.id || null == f
  }), p || null == f || _) ? (0, r.jsx)(a.$jN, {}) : f.actionRequired ? (0, r.jsx)(b.Z, {
    guild: t
  }) : null != h ? (0, r.jsx)(m.Z, {
    children: h.message
  }) : (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsx)(g.Z, {
      guild: t,
      monetizationEligibility: n
    }), (0, r.jsx)(v, {
      onboardingMarketing: y,
      onboardingMarketingError: O
    })]
  })
}