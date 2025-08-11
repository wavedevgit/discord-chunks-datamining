/** Chunk was on 34779 **/
/** chunk id: 346356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk518121 = require("./518121.js"),
  Chunk931928 = require("./931928.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk49898 = require("./49898.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.js");
let P = e => {
    let {
      isIntroQuestUnclaimed: t
    } = (0, o.cj)([h.Z], () => {
      let e = 0 !== h.Z.lastFetchedCurrentQuests && !h.Z.isFetchingCurrentQuests,
        t = h.Z.getQuest(x.V6);
      return {
        isIntroQuestUnclaimed: e && null != t && "COMPLETED_CLAIMED" !== (0, d.uk)(t),
        currentQuestsUpdated: e
      }
    }), {
      user: n
    } = (0, o.cj)([g.default], () => ({
      user: g.default.getCurrentUser()
    })), r = O.Z.useExperiment(e);
    return null != n && r.enabled && !(0, m.EO)(n) && t
  },
  N = "orbs_discovery_reheat_coachmark",
  w = e => {
    let {
      onShowCoachmarkHandler: t,
      isVirtualCurrencyEnabled: n
    } = e, r = (0, _.F)({
      location: N
    }), [d, h] = i.useState(false), g = P({
      location: N
    }), m = (0, o.e7)([f.Z], () => f.Z.hasLayers()), O = (0, a.s9z)(a.JQI), y = n && g && !r && !(O || m), [C, v] = (0, c.US)(y ? [s.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK] : []), I = C === s.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK, w = i.useCallback(() => {
      v(E.L.TAKE_ACTION), (0, u.k5)({
        source: S.GlobalDiscoveryAnalyticsLocations.VIRTUAL_CURRENCY_REHEAT_COACHMARK
      }), (0, p.navigateToQuestHome)({
        fromContent: l.j.ORBS_REHEAT_COACHMARK_CTA,
        questId: x.V6
      })
    }, [v]), Z = i.useCallback(() => {
      v(E.L.USER_DISMISS)
    }, [v]), T = i.useCallback(() => {
      v(E.L.TAKE_ACTION), (0, b.Y)({
        pageType: j.ZY5.GUILD_LIST,
        sectionType: j.jXE.ORBS_DISCOVERY_REHEAT_COACHMARK,
        ctaObject: j.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
      })
    }, [v]);
    return i.useEffect(() => {
      n && I && !d && (h(true), t())
    }, [I, t, n, d]), {
      shouldShow: I,
      onCtaClick: w,
      onClose: Z,
      questId: x.V6,
      onDiscoveryButtonClick: T
    }
  },
  Z = e => {
    let {
      targetElementRef: t,
      renderDiscoveryButton: n,
      isGuildBarScrolling: l,
      shouldShow: o,
      questId: s,
      onClose: a,
      onCtaClick: c,
      onDiscoveryButtonClick: u
    } = e, d = i.useMemo(() => ({
      onClose: a,
      onCtaClick: c,
      titleText: I.intl.string(I.t.RAMiYW),
      descriptionText: I.intl.format(I.t.xk12LC, {
        quantity: 200
      }),
      ctaText: I.intl.string(I.t["cA+7mp"])
    }), [c, a]);
    return <C.G6 errorBoundarySource={"ORBS_DISCOVERY_REHEAT_COACHMARK"} targetElementRef={t} targetQuestId={s} renderDiscoveryButton={n} showingCoachmark={o} isGuildBarScrolling={l} onDiscoveryButtonClick={u} innerCoachmarkProps={d} />
  },
  T = e => {
    let {
      targetElementRef: t,
      scrollToBottom: n,
      renderDiscoveryButton: i,
      isGuildBarScrolling: l
    } = e, {
      enabled: o
    } = (0, y.WX)({
      location: "orbs_discovery_reheat_coachmark"
    }), s = w({
      isVirtualCurrencyEnabled: o,
      onShowCoachmarkHandler: (0, C.O5)({
        targetElementRef: t,
        scrollToBottom: n
      })
    }), {
      shouldShow: a
    } = s, c = function(e, t) {
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
    }(s, ["shouldShow"]);
    return a ? <Z{...function(e) {
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
      renderDiscoveryButton: i,
      isGuildBarScrolling: l,
      shouldShow: a
    }, c)} /> : <v.u targetElementRef={t} scrollToBottom={n} renderDiscoveryButton={i} isGuildBarScrolling={l} />
  }