/** Chunk was on 26628 **/
/** chunk id: 931928, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk114858 = require("./114858.js"),
  Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk703656 = require("./703656.js"),
  Chunk507808 = require("./507808.js"),
  Chunk822857 = require("./822857.js"),
  Chunk518121 = require("./518121.jsx"),
  Chunk432792 = require("./432792.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk921944 = require("./921944.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");
let O = [Chunk981631.Z5c.ME, Chunk981631.Z5c.COLLECTIBLES_SHOP, Chunk981631.Z5c.NITRO_HOME],
  _ = e => {
    let {
      isVirtualCurrencyEnabled: t,
      onShowCoachmarkHandler: n
    } = e, r = (0, l.TH)().pathname, {
      shouldShow: u,
      closeCoachmarkIfOpen: d
    } = (0, h.M)({
      onboardingCoachmarkType: "discover",
      onShowCoachmarkHandler: n
    }), b = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "CLOSE";
      (0, s.Q3)(o.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
        dismissAction: g.L.INDIRECT_ACTION,
        groupName: g.R.VIRTUAL_CURRENCY_ONBOARDING
      }), d(e)
    }, [d]), _ = i.useCallback(() => {
      d("CTA_CLICK"), O.includes(r) || (0, a.uL)(p.Z5c.COLLECTIBLES_SHOP_WITH_TAB(f.AW.ORBS))
    }, [d, r]), y = i.useCallback(() => {
      b("CTA_CLICK"), (0, c.Y)({
        pageType: p.ZY5.GUILD_LIST,
        sectionType: p.jXE.ORBS_DISCOVERY_ONBOARDING_COACHMARK,
        ctaObject: p.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
      })
    }, [b]);
    return t ? {
      shouldShow: u,
      questId: m.V6,
      onClose: b,
      onCtaClick: _,
      onDiscoveryButtonClick: y
    } : {
      shouldShow: false,
      questId: true,
      onClose: p.dG4,
      onCtaClick: p.dG4,
      onDiscoveryButtonClick: p.dG4
    }
  },
  y = e => {
    let {
      targetElementRef: t,
      scrollToBottom: n,
      renderDiscoveryButton: l,
      isGuildBarScrolling: o
    } = e, {
      enabled: s
    } = (0, u.WX)({
      location: "orbs_discovery_onboarding_coachmark"
    }), {
      shouldShow: a,
      questId: c,
      onClose: h,
      onCtaClick: p,
      onDiscoveryButtonClick: f
    } = _({
      isVirtualCurrencyEnabled: s,
      onShowCoachmarkHandler: (0, d.O5)({
        targetElementRef: t,
        scrollToBottom: n
      })
    }), g = i.useMemo(() => ({
      onCtaClick: p,
      onClose: h,
      titleText: b.intl.string(b.t.KnWRQU),
      descriptionText: b.intl.format(b.t["xYx+WV"], {
        quantity: 200
      }),
      ctaText: b.intl.string(b.t.v4HbPz)
    }), [p, h]);
    return (0, r.jsx)(d.G6, {
      errorBoundarySource: "ORBS_DISCOVERY_ONBOARDING_COACHMARK",
      targetElementRef: t,
      targetQuestId: c,
      renderDiscoveryButton: l,
      showingCoachmark: a,
      isGuildBarScrolling: o,
      onDiscoveryButtonClick: f,
      innerCoachmarkProps: g
    })
  }