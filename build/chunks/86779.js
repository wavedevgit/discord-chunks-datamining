/** Chunk was on 27978 **/
n.d(t, {
  Z: () => C
}), n(47120), n(301563), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(773603);
var r = n(200651),
  i = n(192379),
  o = n(593473),
  a = n(756647),
  l = n(442837),
  s = n(544891),
  c = n(433517),
  u = n(481060),
  d = n(570140),
  h = n(893776),
  g = n(314897),
  p = n(626135),
  f = n(70956),
  m = n(970648),
  _ = n(981631),
  b = n(388032),
  N = n(130437);
let x = "mweb_handoff_nonce",
  v = "mweb_handoff_nonce_expiration",
  I = +f.Z.Millis.MINUTE,
  E = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  j = new Set(["deep_link_failed"]),
  O = () => {
    c.K.remove(x), c.K.remove(v)
  },
  C = () => {
    let e = (0, l.e7)([g.default], () => g.default.getFingerprint()),
      {
        fingerprint: t,
        handoff_token: n
      } = (0, o.parse)(window.location.search),
      f = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
      C = null != f ? f : null !== e ? e : void 0;
    i.useEffect(() => {
      null !== f && e !== f && d.Z.dispatch({
        type: "FINGERPRINT",
        fingerprint: f
      })
    }, [f, e]);
    let [S, y] = i.useState(null), T = i.useCallback(e => {
      y(e), p.default.track(_.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
        reason: e,
        fingerprint: (0, a.K)(C)
      }, {
        fingerprint: C
      })
    }, [y, C]), A = c.K.get(x);
    if ("null" === n && null === S && T("deep_link_failed"), null != n && "null" !== n && null == A && null === S && T("nonce_missing"), i.useEffect(() => {
        if (null != A) {
          let e = c.K.get(v);
          (null == e || Date.now() >= e) && (T("nonce_expired"), O())
        }
      }, [A, T]), i.useEffect(() => {
        null != n && "null" !== n && null != A && null == S && s.tn.post({
          url: _.ANM.HANDOFF_EXCHANGE,
          body: {
            key: A,
            handoff_token: n
          },
          rejectWithError: !0
        }).then(e => h.Z.loginToken(e.body.token, !1)).then(() => {
          p.default.track(_.rMx.LOGIN_SUCCESSFUL, {
            source: _.uRl.MOBILE_WEB_HANDOFF,
            is_new_user: !1,
            fingerprint: (0, a.K)(C)
          });
          let e = new URL(window.location.href),
            t = new URLSearchParams(e.search);
          t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
        }).catch(() => {
          T("handoff_exchange")
        }).finally(() => {
          O()
        })
      }, [n, A, S, C, T]), null == C) return null;
    let P = null == S ? (0, r.jsxs)(r.Fragment, {
      children: [b.NW.string(b.t.uJ1Jsb), (0, r.jsx)("br", {}), b.NW.string(b.t.GHVWAg)]
    }) : j.has(S) ? b.NW.string(b.t.EPt55u) : E.has(S) ? b.NW.string(b.t.g87kTk) : void 0;
    return null != S && j.has(S) ? (0, r.jsx)("div", {
      className: N.errorContainer,
      children: (0, r.jsx)(u.Text, {
        color: "interactive-normal",
        variant: "text-sm/semibold",
        children: P
      })
    }) : (0, r.jsxs)("div", {
      className: N.container,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-sm/semibold",
        children: P
      }), (0, r.jsx)(u.zxk, {
        color: u.zxk.Colors.BRAND_INVERTED,
        onClick: () => {
          let e = m.Z.generateNonce();
          c.K.set(x, e), c.K.set(v, Date.now() + I);
          let t = new URL(_.x0X),
            n = new URLSearchParams(window.location.search);
          n.delete("fingerprint"), n.delete("handoff_token");
          let r = new URLSearchParams;
          r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), r.set("key", e), r.set("fingerprint", C), t.search = r.toString(), p.default.track(_.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(C),
            source: "mobile_web_handoff",
            destination: _.x0X
          }, {
            fingerprint: C,
            flush: !0
          }), window.location.href = t.toString()
        },
        children: (0, r.jsx)(u.Text, {
          className: N.buttonText,
          variant: "text-sm/semibold",
          children: b.NW.string(b.t["NcC75+"])
        })
      })]
    })
  }