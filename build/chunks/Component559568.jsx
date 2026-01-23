/** Chunk was on 86142 **/
/** chunk id: 559568, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./747238.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk80703 = require("./80703.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk104798 = require("./104798.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk654626 = require("./654626.js");
let E = "mweb_handoff_nonce",
  v = "mweb_handoff_nonce_expiration",
  j = +Chunk927813.A.Millis.MINUTE,
  y = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  b = new Set(["deep_link_failed"]),
  S = () => {
    c.w.remove(E), c.w.remove(v)
  },
  I = () => {
    let e = (0, a.bG)([p.default], () => p.default.getFingerprint()),
      {
        fingerprint: t,
        handoff_token: n
      } = (0, s.parse)(window.location.search),
      m = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
      I = null != m ? m : null !== e ? e : true;
    i.useEffect(() => {
      null !== m && e !== m && d.h.dispatch({
        type: "FINGERPRINT",
        fingerprint: m
      })
    }, [m, e]);
    let [N, O] = i.useState(null), C = i.useCallback(e => {
      O(e), g.default.track(_.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
        reason: e,
        fingerprint: (0, l.v)(I)
      }, {
        fingerprint: I
      })
    }, [O, I]), T = c.w.get(E);
    if ("null" === n && null === N && C("deep_link_failed"), null != n && "null" !== n && null == T && null === N && C("nonce_missing"), i.useEffect(() => {
        if (null != T) {
          let e = c.w.get(v);
          (null == e || Date.now() >= e) && (C("nonce_expired"), S())
        }
      }, [T, C]), i.useEffect(() => {
        null != n && "null" !== n && null != T && null == N && o.Bo.post({
          url: _.Rsh.HANDOFF_EXCHANGE,
          body: {
            key: T,
            handoff_token: n
          },
          rejectWithError: true
        }).then(e => h.A.loginToken(e.body.token, false)).then(() => {
          g.default.track(_.HAw.LOGIN_SUCCESSFUL, {
            source: _.mdB.MOBILE_WEB_HANDOFF,
            is_new_user: false,
            fingerprint: (0, l.v)(I)
          });
          let e = new URL(window.location.href),
            t = new URLSearchParams(e.search);
          t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
        }).catch(() => {
          C("handoff_exchange")
        }).finally(() => {
          S()
        })
      }, [n, T, N, I, C]), null == I) return null;
    let R = null == N ? (0, r.jsxs)(r.Fragment, {
      children: [A.intl.string(A.t.uJ1JsY), (0, r.jsx)("br", {}), A.intl.string(A.t.GHVWAs)]
    }) : b.has(N) ? A.intl.string(A.t.EPt55r) : y.has(N) ? A.intl.string(A.t.g87kTp) : true;
    return null != N && b.has(N) ? (0, r.jsx)("div", {
      className: x.Un,
      children: (0, r.jsx)(u.Text, {
        color: "interactive-text-default",
        variant: "text-sm/semibold",
        children: R
      })
    }) : (0, r.jsxs)("div", {
      className: x.kL,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-sm/semibold",
        children: R
      }), (0, r.jsx)(u.Button, {
        variant: "overlay-primary",
        text: A.intl.string(A.t.NcC759),
        onClick: () => {
          let e = f.A.generateNonce();
          c.w.set(E, e), c.w.set(v, Date.now() + j);
          let t = new URL(_.J$u),
            n = new URLSearchParams(window.location.search);
          n.delete("fingerprint"), n.delete("handoff_token");
          let r = new URLSearchParams;
          r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), r.set("key", e), r.set("fingerprint", I), t.search = r.toString(), g.default.track(_.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(I),
            source: "mobile_web_handoff",
            destination: _.J$u
          }, {
            fingerprint: I,
            flush: true
          }), window.location.href = t.toString()
        }
      })]
    })
  }