/** Chunk was on 14021 **/
/** chunk id: 910673, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk880257 = require("./880257.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk247206 = require("./247206.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");
let T = t => {
  let {
    channelId: e,
    messageId: T,
    transitionState: g,
    onClose: O
  } = t, v = (0, I.Z)(), M = (0, _.Jm)(), N = (0, A.m8)(), P = r.useMemo(() => M && N, [M, N]), h = r.useCallback(t => {
    (0, A.aP)({
      action: t,
      channelId: e,
      messageId: T
    })
  }, [e, T]), p = r.useCallback(() => {
    O(), h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, o.ZDy)(async () => {
      let {
        default: t
      } = await n(788679);
      return n => (0, i.jsx)(t, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({
        channelId: e,
        messageId: T
      }, n))
    })
  }, [e, T, O, h]);
  return r.useEffect(() => {
    (0, A.aP)({
      action: A.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId: e,
      messageId: T
    })
  }, [e, T]), (0, i.jsx)(l.Modal, {
    title: f.intl.string(f.t.sGW77l),
    subtitle: function() {
      if (P) return f.intl.format(f.t["1L0huf"], {
        handleOnHelpUrlHook: () => {
          E.Z.openUrl(d.Z.getArticleURL(L.BhN.TIGGER_PAWTECT_LEARN_MORE)), h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE)
        }
      });
      let t = f.intl.string(f.t.RUw0ZC),
        e = f.intl.string(f.t["E/oQYL"]);
      return v ? t : e
    }(),
    actions: [function() {
      if (!N && !P) return {
        text: f.intl.string(f.t.ZH7P2h),
        onClick: p,
        variant: "secondary"
      }
    }(), P ? {
      text: f.intl.string(f.t.KPGVWl),
      onClick: function() {
        O(), h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), E.Z.showAgeVerificationGetStartedModal({
          entryPoint: s.cU.SENSITIVE_MEDIA_LEARN_MORE
        })
      }
    } : v ? {
      text: f.intl.string(f.t["9D+zGX"]),
      onClick: function() {
        h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
        let t = (0, u.Gl)("ExplicitMediaLearnMoreModal");
        (0, C.openUserSettings)(t ? c.n.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING : c.n.CONTENT_AND_SOCIAL_PANEL, {
          section: L.oAB.CONTENT_AND_SOCIAL,
          scrollPosition: t ? true : R.FY.EXPLICIT_MEDIA_REDACTION_V2
        }), O()
      }
    } : {
      text: f.intl.string(f.t.hvVgAZ),
      onClick: () => {
        (0, a.Z)(d.Z.getArticleURL(L.BhN.EXPLICIT_MEDIA_REDACTION))
      }
    }].filter(t => true !== t),
    onClose: () => (O(), h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
    transitionState: g
  })
}