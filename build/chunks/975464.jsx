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
    return <r.Fragment>{<l.$i$ className={b.sectionDivider} />}{t}</r.Fragment>
  }, a = <i><p.Z /></i>, s = <i><m.Z /></i>;
  return null != n || (null == t ? true : t.sections) == null ? <r.Fragment>{a}{s}</r.Fragment> : <r.Fragment>{t.sections.map(e => {
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
    })}</r.Fragment>
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
  }), m || null == p || j) ? <l.$jN /> : p.actionRequired ? <h.Z guild={t} /> : null != g ? <d.Z>{g.message}</d.Z> : <div className={b.container}>{<u.Z guild={t} monetizationEligibility={n} />}{<x onboardingMarketing={_} onboardingMarketingError={v} />}</div>
}