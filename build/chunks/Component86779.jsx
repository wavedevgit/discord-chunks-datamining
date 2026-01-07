/** Chunk was on 27978 **/
/** chunk id: 86779, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  Chunk646030 = require("./646030.js");
let b = "mweb_handoff_nonce",
  j = "mweb_handoff_nonce_expiration",
  I = +Chunk70956.Z.Millis.MINUTE,
  N = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  y = new Set(["deep_link_failed"]),
  S = () => {
    c.K.remove(b), c.K.remove(j)
  },
  C = () => {
    let e = (0, l.e7)([g.default], () => g.default.getFingerprint()),
      {
        fingerprint: t,
        handoff_token: n
      } = (0, s.parse)(window.location.search),
      p = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
      C = null != p ? p : null !== e ? e : true;
    i.useEffect(() => {
      null !== p && e !== p && h.Z.dispatch({
        type: "FINGERPRINT",
        fingerprint: p
      })
    }, [p, e]);
    let [O, T] = i.useState(null), A = i.useCallback(e => {
      T(e), m.default.track(_.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
        reason: e,
        fingerprint: (0, a.K)(C)
      }, {
        fingerprint: C
      })
    }, [T, C]), Z = c.K.get(b);
    if ("null" === n && null === O && A("deep_link_failed"), null != n && "null" !== n && null == Z && null === O && A("nonce_missing"), i.useEffect(() => {
        if (null != Z) {
          let e = c.K.get(j);
          (null == e || Date.now() >= e) && (A("nonce_expired"), S())
        }
      }, [Z, A]), i.useEffect(() => {
        null != n && "null" !== n && null != Z && null == O && o.tn.post({
          url: _.ANM.HANDOFF_EXCHANGE,
          body: {
            key: Z,
            handoff_token: n
          },
          rejectWithError: true
        }).then(e => f.Z.loginToken(e.body.token, false)).then(() => {
          m.default.track(_.rMx.LOGIN_SUCCESSFUL, {
            source: _.uRl.MOBILE_WEB_HANDOFF,
            is_new_user: false,
            fingerprint: (0, a.K)(C)
          });
          let e = new URL(window.location.href),
            t = new URLSearchParams(e.search);
          t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
        }).catch(() => {
          A("handoff_exchange")
        }).finally(() => {
          S()
        })
      }, [n, Z, O, C, A]), null == C) return null;
    let P = null == O ? (0, r.jsxs)(r.Fragment, {
      children: [E.intl.string(E.t.uJ1JsY), (0, r.jsx)("br", {}), E.intl.string(E.t.GHVWAs)]
    }) : y.has(O) ? E.intl.string(E.t.EPt55r) : N.has(O) ? E.intl.string(E.t.g87kTp) : true;
    return null != O && y.has(O) ? (0, r.jsx)("div", {
      className: v.errorContainer,
      children: (0, r.jsx)(d.Text, {
        color: "interactive-text-default",
        variant: "text-sm/semibold",
        children: P
      })
    }) : (0, r.jsxs)("div", {
      className: v.container,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-sm/semibold",
        children: P
      }), (0, r.jsx)(u.zx, {
        color: u.zx.Colors.BRAND_INVERTED,
        onClick: () => {
          let e = x.Z.generateNonce();
          c.K.set(b, e), c.K.set(j, Date.now() + I);
          let t = new URL(_.x0X),
            n = new URLSearchParams(window.location.search);
          n.delete("fingerprint"), n.delete("handoff_token");
          let r = new URLSearchParams;
          r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), r.set("key", e), r.set("fingerprint", C), t.search = r.toString(), m.default.track(_.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(C),
            source: "mobile_web_handoff",
            destination: _.x0X
          }, {
            fingerprint: C,
            flush: true
          }), window.location.href = t.toString()
        },
        children: (0, r.jsx)(d.Text, {
          className: v.buttonText,
          variant: "text-sm/semibold",
          children: E.intl.string(E.t.NcC759)
        })
      })]
    })
  }