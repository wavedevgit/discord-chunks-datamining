/** Chunk was on 47841 **/
/** chunk id: 400281, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => O,
  j: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk544199 = require("./544199.js"),
  Chunk614692 = require("./614692.js"),
  Chunk893148 = require("./893148.js"),
  Chunk739929 = require("./739929.js"),
  Chunk584508 = require("./584508.jsx"),
  Chunk196169 = require("./196169.jsx"),
  Chunk565447 = require("./565447.jsx"),
  Chunk346076 = require("./346076.jsx"),
  Chunk720281 = require("./720281.jsx"),
  Chunk853922 = require("./853922.js"),
  Chunk980197 = require("./980197.js");

function j(e) {
  let {
    onboardingMarketing: t,
    onboardingMarketingError: n
  } = e, i = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.cGx, {
        className: h.ts
      }), t]
    })
  }, l = (0, r.jsx)(i, {
    children: (0, r.jsx)(m.A, {})
  }, x.u.HOW_IT_WORKS), a = (0, r.jsx)(i, {
    children: (0, r.jsx)(g.A, {})
  }, x.u.BENEFITS);
  return null != n || (null == t ? true : t.sections) == null ? (0, r.jsxs)(r.Fragment, {
    children: [l, a]
  }) : (0, r.jsx)(r.Fragment, {
    children: t.sections.map(e => {
      switch (e.type) {
        case x.u.HOW_IT_WORKS:
          return l;
        case x.u.BENEFITS:
          return a;
        case x.u.OTHER_CREATORS:
          return (0, r.jsx)(i, {
            children: (0, r.jsx)(b.A, {
              highlightedCreators: e.creators
            })
          }, x.u.OTHER_CREATORS)
      }
    })
  })
}

function O(e) {
  let {
    guild: t
  } = e, n = (0, u.A)(t), {
    eligibilityLoading: g,
    eligibilityError: b,
    eligibility: m
  } = n, x = (0, o.s)(m), {
    isLoading: O,
    error: y,
    creatorMonetizationOnboardingMarketing: v
  } = (0, d.A)(t.id);
  return (i.useEffect(() => {
    (0, c.G)(t.id)
  }, [t.id]), (0, a.A)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
    properties: {
      guild_id: t.id,
      is_owner: n.isGuildOwner,
      is_eligible: n.eligibleForMonetization,
      ineligible_reasons: x
    }
  }, {
    disableTrack: null == t.id || null == m
  }), g || null == m || O) ? (0, r.jsx)(s.y$y, {}) : m.actionRequired ? (0, r.jsx)(p.A, {
    guild: t
  }) : null != b ? (0, r.jsx)(s.wx6, {
    type: "critical",
    children: b.message
  }) : (0, r.jsxs)("div", {
    className: h.kL,
    children: [(0, r.jsx)(f.A, {
      guild: t,
      monetizationEligibility: n
    }), (0, r.jsx)(j, {
      onboardingMarketing: v,
      onboardingMarketingError: y
    })]
  })
}