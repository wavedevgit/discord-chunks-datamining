/** Chunk was on 27978 **/
/** chunk id: 86779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk593473 = require("./593473.js"),
  Chunk756647 = require("./756647.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk970648 = require("./970648.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk498834 = require("./498834.js");
let v = "mweb_handoff_nonce",
  j = "mweb_handoff_nonce_expiration",
  I = +Chunk70956.Z.Millis.MINUTE,
  O = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  S = new Set(["deep_link_failed"]),
  N = () => {
    Chunk433517.K.remove(v), Chunk433517.K.remove(j)
  },
  y = () => {
    let e = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getFingerprint()),
      {
        fingerprint: t,
        handoff_token: n
      } = (0, Chunk593473.parse)(window.location.search),
      g = Array.isArray(exports) ? exports.length > 1 ? exports[0] : null : exports,
      y = null != Chunk70956 ? Chunk70956 : null !== module ? module : true;
    Chunk73800.useEffect(() => {
      null !== Chunk70956 && module !== Chunk70956 && Chunk570140.Z.dispatch({
        type: "FINGERPRINT",
        fingerprint: Chunk70956
      })
    }, [Chunk70956, module]);
    let [C, A] = Chunk73800.useState(null), T = Chunk73800.useCallback(e => {
      A(e), m.default.track(x.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
        reason: e,
        fingerprint: (0, o.K)(y)
      }, {
        fingerprint: y
      })
    }, [A, y]), Z = Chunk433517.K.get(v);
    if ("null" === require && null === C && T("deep_link_failed"), null != require && "null" !== require && null == Z && null === C && T("nonce_missing"), Chunk73800.useEffect(() => {
        if (null != Z) {
          let e = Chunk433517.K.get(j);
          (null == module || Date.now() >= module) && (T("nonce_expired"), N())
        }
      }, [Z, T]), Chunk73800.useEffect(() => {
        null != require && "null" !== require && null != Z && null == C && Chunk544891.tn.post({
          url: Chunk981631.ANM.HANDOFF_EXCHANGE,
          body: {
            key: Z,
            handoff_token: require
          },
          rejectWithError: true
        }).then(e => p.Z.loginToken(e.body.token, false)).then(() => {
          Chunk626135.default.track(Chunk981631.rMx.LOGIN_SUCCESSFUL, {
            source: Chunk981631.uRl.MOBILE_WEB_HANDOFF,
            is_new_user: false,
            fingerprint: (0, Chunk756647.K)(y)
          });
          let e = new URL(window.location.href),
            t = new URLSearchParams(module.search);
          exports.delete("handoff_token"), exports.delete("fingerprint"), module.search = exports.toString(), window.history.pushState(null, "", module)
        }).catch(() => {
          T("handoff_exchange")
        }).finally(() => {
          N()
        })
      }, [require, Z, C, y, T]), null == y) return null;
    let P = null == C ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [Chunk388032.intl.string(Chunk388032.t.uJ1Jsb), (0, Chunk255367.jsx)("br", {}), Chunk388032.intl.string(Chunk388032.t.GHVWAg)]
    }) : S.has(C) ? Chunk388032.intl.string(Chunk388032.t.EPt55u) : O.has(C) ? Chunk388032.intl.string(Chunk388032.t.g87kTk) : true;
    return null != C && S.has(C) ? (0, Chunk255367.jsx)("div", {
      className: Chunk498834.errorContainer,
      children: (0, Chunk255367.jsx)(Chunk481060.Text, {
        color: "interactive-normal",
        variant: "text-sm/semibold",
        children: P
      })
    }) : (0, Chunk255367.jsxs)("div", {
      className: Chunk498834.container,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/semibold",
        children: P
      }), (0, Chunk255367.jsx)(Chunk755721.zx, {
        color: Chunk755721.zx.Colors.BRAND_INVERTED,
        onClick: () => {
          let e = Chunk970648.Z.generateNonce();
          Chunk433517.K.set(v, module), Chunk433517.K.set(j, Date.now() + I);
          let t = new URL(Chunk981631.x0X),
            n = new URLSearchParams(window.location.search);
          require.delete("fingerprint"), require.delete("handoff_token");
          let r = new URLSearchParams;
          Chunk255367.set("redirect", encodeURIComponent(window.location.pathname + require.toString())), Chunk255367.set("key", module), Chunk255367.set("fingerprint", y), exports.search = Chunk255367.toString(), Chunk626135.default.track(Chunk981631.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, Chunk756647.K)(y),
            source: "mobile_web_handoff",
            destination: Chunk981631.x0X
          }, {
            fingerprint: y,
            flush: true
          }), window.location.href = exports.toString()
        },
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          className: Chunk498834.buttonText,
          variant: "text-sm/semibold",
          children: Chunk388032.intl.string(Chunk388032.t["NcC75+"])
        })
      })]
    })
  }