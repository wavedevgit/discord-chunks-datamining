/** Chunk was on 27978 **/
/** chunk id: 86779, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk78224 = require("./78224.js");
let b = "mweb_handoff_nonce",
  j = "mweb_handoff_nonce_expiration",
  I = +Chunk70956.Z.Millis.MINUTE,
  y = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  S = new Set(["deep_link_failed"]),
  O = () => {
    Chunk433517.K.remove(b), Chunk433517.K.remove(j)
  },
  N = () => {
    let e = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getFingerprint()),
      {
        fingerprint: t,
        handoff_token: n
      } = (0, Chunk593473.parse)(window.location.search),
      f = Array.isArray(exports) ? exports.length > 1 ? exports[0] : null : exports,
      N = null != Chunk70956 ? Chunk70956 : null !== module ? module : true;
    Chunk473749.useEffect(() => {
      null !== Chunk70956 && module !== Chunk70956 && Chunk570140.Z.dispatch({
        type: "FINGERPRINT",
        fingerprint: Chunk70956
      })
    }, [Chunk70956, module]);
    let [C, T] = Chunk473749.useState(null), A = Chunk473749.useCallback(e => {
      T(e), m.default.track(x.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
        reason: e,
        fingerprint: (0, l.K)(N)
      }, {
        fingerprint: N
      })
    }, [T, N]), Z = Chunk433517.K.get(b);
    if ("null" === require && null === C && A("deep_link_failed"), null != require && "null" !== require && null == Z && null === C && A("nonce_missing"), Chunk473749.useEffect(() => {
        if (null != Z) {
          let e = Chunk433517.K.get(j);
          (null == module || Date.now() >= module) && (A("nonce_expired"), O())
        }
      }, [Z, A]), Chunk473749.useEffect(() => {
        null != require && "null" !== require && null != Z && null == C && Chunk544891.tn.post({
          url: Chunk981631.ANM.HANDOFF_EXCHANGE,
          body: {
            key: Z,
            handoff_token: require
          },
          rejectWithError: true
        }).then(e => g.Z.loginToken(e.body.token, false)).then(() => {
          Chunk626135.default.track(Chunk981631.rMx.LOGIN_SUCCESSFUL, {
            source: Chunk981631.uRl.MOBILE_WEB_HANDOFF,
            is_new_user: false,
            fingerprint: (0, Chunk756647.K)(N)
          });
          let e = new URL(window.location.href),
            t = new URLSearchParams(module.search);
          exports.delete("handoff_token"), exports.delete("fingerprint"), module.search = exports.toString(), window.history.pushState(null, "", module)
        }).catch(() => {
          A("handoff_exchange")
        }).finally(() => {
          O()
        })
      }, [require, Z, C, N, A]), null == N) return null;
    let P = null == C ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [Chunk388032.intl.string(Chunk388032.t.uJ1JsY), (0, Chunk54381.jsx)("br", {}), Chunk388032.intl.string(Chunk388032.t.GHVWAs)]
    }) : S.has(C) ? Chunk388032.intl.string(Chunk388032.t.EPt55r) : y.has(C) ? Chunk388032.intl.string(Chunk388032.t.g87kTp) : true;
    return null != C && S.has(C) ? (0, Chunk54381.jsx)("div", {
      className: Chunk78224.errorContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        color: "interactive-normal",
        variant: "text-sm/semibold",
        children: P
      })
    }) : (0, Chunk54381.jsxs)("div", {
      className: Chunk78224.container,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/semibold",
        children: P
      }), (0, Chunk54381.jsx)(Chunk755721.zx, {
        color: Chunk755721.zx.Colors.BRAND_INVERTED,
        onClick: () => {
          let e = Chunk970648.Z.generateNonce();
          Chunk433517.K.set(b, module), Chunk433517.K.set(j, Date.now() + I);
          let t = new URL(Chunk981631.x0X),
            n = new URLSearchParams(window.location.search);
          require.delete("fingerprint"), require.delete("handoff_token");
          let r = new URLSearchParams;
          Chunk54381.set("redirect", encodeURIComponent(window.location.pathname + require.toString())), Chunk54381.set("key", module), Chunk54381.set("fingerprint", N), exports.search = Chunk54381.toString(), Chunk626135.default.track(Chunk981631.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, Chunk756647.K)(N),
            source: "mobile_web_handoff",
            destination: Chunk981631.x0X
          }, {
            fingerprint: N,
            flush: true
          }), window.location.href = exports.toString()
        },
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk78224.buttonText,
          variant: "text-sm/semibold",
          children: Chunk388032.intl.string(Chunk388032.t.NcC759)
        })
      })]
    })
  }