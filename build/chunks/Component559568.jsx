/** Chunk was on 86142 **/
/** chunk id: 559568, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./747238.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk80703 = require("./80703.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk506774 = require("./506774.js"),
  Chunk421380 = require("./421380.js"),
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
let b = "mweb_handoff_nonce",
  v = "mweb_handoff_nonce_expiration",
  j = +Chunk927813.A.Millis.MINUTE,
  y = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  S = new Set(["deep_link_failed"]),
  N = () => {
    c.w.remove(b), c.w.remove(v)
  },
  O = () => {
    let e = (0, a.bG)([p.default], () => p.default.getFingerprint()),
      {
        fingerprint: t,
        handoff_token: n
      } = (0, s.parse)(window.location.search),
      m = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
      O = null != m ? m : null !== e ? e : true;
    i.useEffect(() => {
      null !== m && e !== m && h.h.dispatch({
        type: "FINGERPRINT",
        fingerprint: m
      })
    }, [m, e]);
    let [I, T] = i.useState(null), C = i.useCallback(e => {
      T(e), g.default.track(x.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
        reason: e,
        fingerprint: (0, l.v)(O)
      }, {
        fingerprint: O
      })
    }, [T, O]), R = c.w.get(b);
    if ("null" === n && null === I && C("deep_link_failed"), null != n && "null" !== n && null == R && null === I && C("nonce_missing"), i.useEffect(() => {
        if (null != R) {
          let e = c.w.get(v);
          (null == e || Date.now() >= e) && (C("nonce_expired"), N())
        }
      }, [R, C]), i.useEffect(() => {
        null != n && "null" !== n && null != R && null == I && o.Bo.post({
          url: x.Rsh.HANDOFF_EXCHANGE,
          body: {
            key: R,
            handoff_token: n
          },
          rejectWithError: true
        }).then(e => f.A.loginToken(e.body.token, false)).then(() => {
          g.default.track(x.HAw.LOGIN_SUCCESSFUL, {
            source: x.mdB.MOBILE_WEB_HANDOFF,
            is_new_user: false,
            fingerprint: (0, l.v)(O)
          });
          let e = new URL(window.location.href),
            t = new URLSearchParams(e.search);
          t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
        }).catch(() => {
          C("handoff_exchange")
        }).finally(() => {
          N()
        })
      }, [n, R, I, O, C]), null == O) return null;
    let w = null == I ? (0, r.jsxs)(r.Fragment, {
      children: [_.intl.string(_.t.uJ1JsY), (0, r.jsx)("br", {}), _.intl.string(_.t.GHVWAs)]
    }) : S.has(I) ? _.intl.string(_.t.EPt55r) : y.has(I) ? _.intl.string(_.t.g87kTp) : true;
    return null != I && S.has(I) ? (0, r.jsx)("div", {
      className: E.Un,
      children: (0, r.jsx)(d.Text, {
        color: "interactive-text-default",
        variant: "text-sm/semibold",
        children: w
      })
    }) : (0, r.jsxs)("div", {
      className: E.kL,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-sm/semibold",
        children: w
      }), (0, r.jsx)(u.$n, {
        color: u.$n.Colors.BRAND_INVERTED,
        onClick: () => {
          let e = A.A.generateNonce();
          c.w.set(b, e), c.w.set(v, Date.now() + j);
          let t = new URL(x.J$u),
            n = new URLSearchParams(window.location.search);
          n.delete("fingerprint"), n.delete("handoff_token");
          let r = new URLSearchParams;
          r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), r.set("key", e), r.set("fingerprint", O), t.search = r.toString(), g.default.track(x.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(O),
            source: "mobile_web_handoff",
            destination: x.J$u
          }, {
            fingerprint: O,
            flush: true
          }), window.location.href = t.toString()
        },
        children: (0, r.jsx)(d.Text, {
          className: E._d,
          variant: "text-sm/semibold",
          children: _.intl.string(_.t.NcC759)
        })
      })]
    })
  }