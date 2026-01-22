/** Chunk was on 35270 **/
/** chunk id: 743461, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => M
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk36149 = require("./36149.js"),
  Chunk945276 = require("./945276.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk390248 = require("./390248.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");
let M = t => {
  let {
    channelId: e,
    messageId: M,
    transitionState: O,
    onClose: f
  } = t, g = (0, I.A)(), P = (0, _.yM)(), h = (0, d._R)(), v = i.useMemo(() => P && h, [P, h]), N = i.useCallback(t => {
    (0, d.hv)({
      action: t,
      channelId: e,
      messageId: M
    })
  }, [e, M]), p = i.useCallback(() => {
    f(), N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, o.mMO)(async () => {
      let {
        default: t
      } = await n(652442);
      return n => (0, r.jsx)(t, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), r.forEach(function(e) {
            var r;
            r = n[e], e in t ? Object.defineProperty(t, e, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = r
          })
        }
        return t
      }({
        channelId: e,
        messageId: M
      }, n))
    })
  }, [e, M, f, N]);
  return i.useEffect(() => {
    (0, d.hv)({
      action: d.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId: e,
      messageId: M
    })
  }, [e, M]), (0, r.jsx)(l.Modal, {
    title: T.intl.string(T.t.sGW77l),
    subtitle: function() {
      if (v) return T.intl.format(T.t["1L0huf"], {
        handleOnHelpUrlHook: () => {
          E.A.openUrl(C.A.getArticleURL(L.MVz.TIGGER_PAWTECT_LEARN_MORE)), N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE)
        }
      });
      let t = T.intl.string(T.t.RUw0ZC),
        e = T.intl.string(T.t["E/oQYL"]);
      return g ? t : e
    }(),
    actions: [function() {
      if (!h && !v) return {
        text: T.intl.string(T.t.ZH7P2h),
        onClick: p,
        variant: "secondary"
      }
    }(), v ? {
      text: T.intl.string(T.t.KPGVWl),
      onClick: function() {
        f(), N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), E.A.showAgeVerificationGetStartedModal({
          entryPoint: s.q1.SENSITIVE_MEDIA_LEARN_MORE
        })
      }
    } : g ? {
      text: T.intl.string(T.t["9D+zGX"]),
      onClick: function() {
        N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
        let t = (0, u.WJ)("ExplicitMediaLearnMoreModal");
        (0, A.openUserSettings)(t ? c.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING : c.X.CONTENT_AND_SOCIAL_PANEL, {
          section: L.nc_.CONTENT_AND_SOCIAL,
          scrollPosition: t ? true : R.d1.EXPLICIT_MEDIA_REDACTION_V2
        }), f()
      }
    } : {
      text: T.intl.string(T.t.hvVgAZ),
      onClick: () => {
        (0, a.A)(C.A.getArticleURL(L.MVz.EXPLICIT_MEDIA_REDACTION))
      }
    }].filter(t => true !== t),
    onClose: () => (f(), N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
    transitionState: O
  })
}