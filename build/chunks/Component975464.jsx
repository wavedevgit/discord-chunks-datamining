/** Chunk was on 9536 **/
/** chunk id: 975464, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  C: () => j,
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk17079 = require("./17079.js"),
  Chunk605288 = require("./605288.js"),
  Chunk787051 = require("./787051.js"),
  Chunk346163 = require("./346163.js"),
  Chunk271267 = require("./271267.jsx"),
  Chunk320893 = require("./320893.jsx"),
  Chunk81509 = require("./81509.jsx"),
  Chunk662379 = require("./662379.jsx"),
  Chunk60533 = require("./60533.jsx"),
  Chunk581050 = require("./581050.js"),
  Chunk14562 = require("./14562.js");

function j(e) {
  let {
    onboardingMarketing: t,
    onboardingMarketingError: n
  } = e, i = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.izJ, {
        className: x.sectionDivider
      }), t]
    })
  }, l = (0, r.jsx)(i, {
    children: (0, r.jsx)(b.Z, {})
  }, h.q.HOW_IT_WORKS), s = (0, r.jsx)(i, {
    children: (0, r.jsx)(f.Z, {})
  }, h.q.BENEFITS);
  return null != n || (null == t ? true : t.sections) == null ? (0, r.jsxs)(r.Fragment, {
    children: [l, s]
  }) : (0, r.jsx)(r.Fragment, {
    children: t.sections.map(e => {
      switch (e.type) {
        case h.q.HOW_IT_WORKS:
          return l;
        case h.q.BENEFITS:
          return s;
        case h.q.OTHER_CREATORS:
          return (0, r.jsx)(i, {
            children: (0, r.jsx)(m.Z, {
              highlightedCreators: e.creators
            })
          }, h.q.OTHER_CREATORS)
      }
    })
  })
}

function v(e) {
  let {
    guild: t
  } = e, n = (0, u.Z)(t), {
    eligibilityLoading: f,
    eligibilityError: m,
    eligibility: b
  } = n, h = (0, c.j)(b), {
    isLoading: v,
    error: O,
    creatorMonetizationOnboardingMarketing: C
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
      ineligible_reasons: h
    }
  }, {
    disableTrack: null == t.id || null == b
  }), f || null == b || v) ? (0, r.jsx)(a.$jN, {}) : b.actionRequired ? (0, r.jsx)(p.Z, {
    guild: t
  }) : null != m ? (0, r.jsx)(a.M14, {
    type: "critical",
    children: m.message
  }) : (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(g.Z, {
      guild: t,
      monetizationEligibility: n
    }), (0, r.jsx)(j, {
      onboardingMarketing: C,
      onboardingMarketingError: O
    })]
  })
}