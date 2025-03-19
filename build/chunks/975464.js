/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  C: () => C,
  Z: () => b
});
var r = n(200651);
n(192379);
var i = n(990547),
  s = n(481060),
  a = n(213609),
  l = n(605288),
  o = n(787051),
  c = n(346163),
  A = n(587431),
  d = n(271267),
  u = n(320893),
  g = n(81509),
  f = n(662379),
  m = n(385910),
  p = n(581050),
  h = n(290534);

function C(e) {
  let {
    onboardingMarketing: t,
    onboardingMarketingError: n
  } = e, i = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.$i$, {
        className: h.sectionDivider
      }), t]
    })
  }, a = (0, r.jsx)(i, {
    children: (0, r.jsx)(f.Z, {})
  }, p.q.HOW_IT_WORKS), l = (0, r.jsx)(i, {
    children: (0, r.jsx)(u.Z, {})
  }, p.q.BENEFITS);
  return null != n || (null == t ? void 0 : t.sections) == null ? (0, r.jsxs)(r.Fragment, {
    children: [a, l]
  }) : (0, r.jsx)(r.Fragment, {
    children: t.sections.map(e => {
      switch (e.type) {
        case p.q.HOW_IT_WORKS:
          return a;
        case p.q.BENEFITS:
          return l;
        case p.q.OTHER_CREATORS:
          return (0, r.jsx)(i, {
            children: (0, r.jsx)(g.Z, {
              highlightedCreators: e.creators
            })
          }, p.q.OTHER_CREATORS)
      }
    })
  })
}

function b(e) {
  let {
    guild: t
  } = e, n = (0, c.Z)(t), {
    eligibilityLoading: u,
    eligibilityError: g,
    eligibility: f
  } = n, p = (0, l.j)(f), {
    isLoading: b,
    error: v,
    creatorMonetizationOnboardingMarketing: x
  } = (0, o.Z)(t.id);
  return ((0, a.Z)({
    type: i.ImpressionTypes.PANE,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
    properties: {
      guild_id: t.id,
      is_owner: n.isGuildOwner,
      is_eligible: n.eligibleForMonetization,
      ineligible_reasons: p
    }
  }, {
    disableTrack: null == t.id || null == f
  }), u || null == f || b) ? (0, r.jsx)(s.$jN, {}) : f.actionRequired ? (0, r.jsx)(m.Z, {
    guild: t
  }) : null != g ? (0, r.jsx)(A.Z, {
    children: g.message
  }) : (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(d.Z, {
      guild: t,
      monetizationEligibility: n
    }), (0, r.jsx)(C, {
      onboardingMarketing: x,
      onboardingMarketingError: v
    })]
  })
}