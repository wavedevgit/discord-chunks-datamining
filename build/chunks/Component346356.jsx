/** Chunk was on 49882 **/
/** chunk id: 346356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk636977 = require("./636977.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk571457 = require("./571457.js"),
  Chunk617136 = require("./617136.js"),
  Chunk569984 = require("./569984.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk507808 = require("./507808.js"),
  Chunk326272 = require("./326272.js"),
  Chunk804705 = require("./804705.js"),
  Chunk822857 = require("./822857.js"),
  Chunk518121 = require("./518121.jsx"),
  Chunk931928 = require("./931928.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk49898 = require("./49898.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");
let P = "orbs_discovery_reheat_coachmark",
  N = e => {
    let {
      targetElementRef: t,
      renderDiscoveryButton: n,
      isGuildBarScrolling: l,
      shouldShow: o,
      questId: a,
      onClose: s,
      onCtaClick: c,
      onDiscoveryButtonClick: u
    } = e, d = i.useMemo(() => ({
      onClose: s,
      onCtaClick: c,
      titleText: I.intl.string(I.t.RAMiYW),
      descriptionText: I.intl.format(I.t.xk12LC, {
        quantity: 200
      }),
      ctaText: I.intl.string(I.t["cA+7mp"])
    }), [c, s]);
    return (0, r.jsx)(v.G6, {
      errorBoundarySource: "ORBS_DISCOVERY_REHEAT_COACHMARK",
      targetElementRef: t,
      targetQuestId: a,
      renderDiscoveryButton: n,
      showingCoachmark: o,
      isGuildBarScrolling: l,
      onDiscoveryButtonClick: u,
      innerCoachmarkProps: d
    })
  },
  w = e => {
    let {
      targetElementRef: t,
      scrollToBottom: n,
      renderDiscoveryButton: I,
      isGuildBarScrolling: w
    } = e, {
      enabled: Z
    } = (0, y.WX)({
      location: "orbs_discovery_reheat_coachmark"
    }), T = (e => {
      let {
        onShowCoachmarkHandler: t,
        isVirtualCurrencyEnabled: n
      } = e, r = (0, O.F)({
        location: P
      }), [y, v] = i.useState(false), j = (e => {
        let {
          isIntroQuestUnclaimed: t
        } = (0, o.cj)([p.Z], () => {
          let e = 0 !== p.Z.lastFetchedCurrentQuests && !p.Z.isFetchingCurrentQuests,
            t = p.Z.getQuest(S.V6);
          return {
            isIntroQuestUnclaimed: e && null != t && "COMPLETED_CLAIMED" !== (0, d.uk)(t),
            currentQuestsUpdated: e
          }
        }), {
          user: n
        } = (0, o.cj)([g.default], () => ({
          user: g.default.getCurrentUser()
        })), r = _.Z.useExperiment(e);
        return null != n && r.enabled && !(0, m.EO)(n) && t
      })({
        location: P
      }), I = (0, o.e7)([h.Z], () => h.Z.hasLayers()), N = (0, s.s9z)(s.JQI), w = n && j && !r && !(N || I), [Z, T] = (0, c.US)(w ? [a.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK] : []), A = Z === a.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK, R = i.useCallback(() => {
        T(E.L.TAKE_ACTION), (0, u.k5)({
          source: x.GlobalDiscoveryAnalyticsLocations.VIRTUAL_CURRENCY_REHEAT_COACHMARK
        }), (0, f.navigateToQuestHome)({
          fromContent: l.j.ORBS_REHEAT_COACHMARK_CTA,
          questId: S.V6
        })
      }, [T]), D = i.useCallback(() => {
        T(E.L.USER_DISMISS)
      }, [T]), L = i.useCallback(() => {
        T(E.L.TAKE_ACTION), (0, b.Y)({
          pageType: C.ZY5.GUILD_LIST,
          sectionType: C.jXE.ORBS_DISCOVERY_REHEAT_COACHMARK,
          ctaObject: C.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
        })
      }, [T]);
      return i.useEffect(() => {
        n && A && !y && (v(true), t())
      }, [A, t, n, y]), {
        shouldShow: A,
        onCtaClick: R,
        onClose: D,
        questId: S.V6,
        onDiscoveryButtonClick: L
      }
    })({
      isVirtualCurrencyEnabled: Z,
      onShowCoachmarkHandler: (0, v.O5)({
        targetElementRef: t,
        scrollToBottom: n
      })
    }), {
      shouldShow: A
    } = T, R = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(T, ["shouldShow"]);
    return A ? (0, r.jsx)(N, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      targetElementRef: t,
      renderDiscoveryButton: I,
      isGuildBarScrolling: w,
      shouldShow: A
    }, R)) : (0, r.jsx)(j.u, {
      targetElementRef: t,
      scrollToBottom: n,
      renderDiscoveryButton: I,
      isGuildBarScrolling: w
    })
  }