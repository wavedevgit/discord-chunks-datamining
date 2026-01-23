/** Chunk was on 47841 **/
/** chunk id: 400281, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _,
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
        className: x.ts
      }), t]
    })
  }, l = (0, r.jsx)(i, {
    children: (0, r.jsx)(f.A, {})
  }, h.u.HOW_IT_WORKS), a = (0, r.jsx)(i, {
    children: (0, r.jsx)(m.A, {})
  }, h.u.BENEFITS);
  return null != n || (null == t ? true : t.sections) == null ? (0, r.jsxs)(r.Fragment, {
    children: [l, a]
  }) : (0, r.jsx)(r.Fragment, {
    children: t.sections.map(e => {
      switch (e.type) {
        case h.u.HOW_IT_WORKS:
          return l;
        case h.u.BENEFITS:
          return a;
        case h.u.OTHER_CREATORS:
          return (0, r.jsx)(i, {
            children: (0, r.jsx)(p.A, {
              highlightedCreators: e.creators
            })
          }, h.u.OTHER_CREATORS)
      }
    })
  })
}

function _(e) {
  let {
    guild: t
  } = e, n = (0, u.A)(t), {
    eligibilityLoading: m,
    eligibilityError: p,
    eligibility: f
  } = n, h = (0, c.s)(f), {
    isLoading: _,
    error: O,
    creatorMonetizationOnboardingMarketing: v
  } = (0, d.A)(t.id);
  return (i.useEffect(() => {
    (0, o.G)(t.id)
  }, [t.id]), (0, a.A)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
    properties: {
      guild_id: t.id,
      is_owner: n.isGuildOwner,
      is_eligible: n.eligibleForMonetization,
      ineligible_reasons: h
    }
  }, {
    disableTrack: null == t.id || null == f
  }), m || null == f || _) ? (0, r.jsx)(s.y$y, {}) : f.actionRequired ? (0, r.jsx)(b.A, {
    guild: t
  }) : null != p ? (0, r.jsx)(s.wx6, {
    type: "critical",
    children: p.message
  }) : (0, r.jsxs)("div", {
    className: x.kL,
    children: [(0, r.jsx)(g.A, {
      guild: t,
      monetizationEligibility: n
    }), (0, r.jsx)(j, {
      onboardingMarketing: v,
      onboardingMarketingError: O
    })]
  })
}