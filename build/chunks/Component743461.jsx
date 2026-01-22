/** Chunk was on 35270 **/
/** chunk id: 743461, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk620715 = require("./620715.js"),
  Chunk870383 = require("./870383.js"),
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
let O = t => {
  let {
    channelId: e,
    messageId: O,
    transitionState: f,
    onClose: P
  } = t, h = (0, u.A)(), p = (0, c.yM)(), v = (0, R._R)(), {
    enabled: N
  } = _.Y.useConfig({
    location: "ExplicitMediaLearnMoreModal"
  }), S = (0, I.W)(g.intl.string(g.t.KPGVWl), g.intl.string(g.t["9KiIz6"])), b = i.useMemo(() => p && v, [p, v]), D = i.useCallback(t => {
    (0, R.hv)({
      action: t,
      channelId: e,
      messageId: O
    })
  }, [e, O]), m = i.useCallback(() => {
    P(), D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, o.mMO)(async () => {
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
        messageId: O
      }, n))
    })
  }, [e, O, P, D]);
  return i.useEffect(() => {
    (0, R.hv)({
      action: R.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId: e,
      messageId: O
    })
  }, [e, O]), (0, r.jsx)(l.Modal, {
    title: g.intl.string(g.t.sGW77l),
    subtitle: function() {
      if (b) return g.intl.format(N ? g.t.KEPOlE : g.t["1L0huf"], {
        handleOnHelpUrlHook: () => {
          E.A.openUrl(L.A.getArticleURL(M.MVz.TIGGER_PAWTECT_LEARN_MORE)), D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE)
        }
      });
      let t = g.intl.string(g.t.RUw0ZC),
        e = g.intl.string(g.t["E/oQYL"]);
      return h ? t : e
    }(),
    actions: [function() {
      if (!v && !b) return {
        text: g.intl.string(g.t.ZH7P2h),
        onClick: m,
        variant: "secondary"
      }
    }(), b ? {
      text: S,
      onClick: function() {
        P(), D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), E.A.showAgeVerificationGetStartedModal({
          entryPoint: s.q1.SENSITIVE_MEDIA_LEARN_MORE
        })
      }
    } : h ? {
      text: g.intl.string(g.t["9D+zGX"]),
      onClick: function() {
        D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
        let t = (0, d.WJ)("ExplicitMediaLearnMoreModal");
        (0, C.openUserSettings)(t ? A.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING : A.X.CONTENT_AND_SOCIAL_PANEL, {
          section: M.nc_.CONTENT_AND_SOCIAL,
          scrollPosition: t ? true : T.d1.EXPLICIT_MEDIA_REDACTION_V2
        }), P()
      }
    } : {
      text: g.intl.string(g.t.hvVgAZ),
      onClick: () => {
        (0, a.A)(L.A.getArticleURL(M.MVz.EXPLICIT_MEDIA_REDACTION))
      }
    }].filter(t => true !== t),
    onClose: () => (P(), D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
    transitionState: f
  })
}