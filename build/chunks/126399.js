/** Chunk was on 27978 **/
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(544891),
  i = n(570140),
  o = n(893776),
  a = n(899742),
  s = n(743142),
  l = n(117240),
  c = n(626135),
  u = n(317770),
  d = n(981631);

function h(e, t) {
  c.default.track(d.rMx.BROWSER_HANDOFF_SUCCEEDED, {
    authenticated: e,
    handoff_source: t
  })
}
class p extends u.Z {
  _initialize() {
    i.Z.subscribe("BROWSER_HANDOFF_END", this.handleEnd), i.Z.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
  }
  _terminate() {
    i.Z.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd), i.Z.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
  }
  handleHandoff(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      fingerprint: i,
      handoffSource: l
    } = e;
    null != n ? r.tn.post({
      url: d.ANM.HANDOFF_EXCHANGE,
      body: {
        key: t,
        handoff_token: n
      },
      rejectWithError: !1
    }).then(e => {
      let {
        body: t
      } = e;
      (0, a.Vb)(t.user), o.Z.loginToken(t.token, !1), h(!0, l)
    }, e => {
      if (null != i && h(!1, l), o.Z.setFingerprint(i), (0, a.lx)(), l === s.F.ROLE_SUBSCRIPTION) {
        var t;
        c.default.track(d.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
          reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
          handoff_source: l
        })
      }
    }) : null != i ? (o.Z.setFingerprint(i), h(!1, l), (0, a.lx)()) : (o.Z.setFingerprint(i), (0, a.by)())
  }
  constructor(...e) {
    var t, n;
    super(...e), t = "handleEnd", n = e => {
      let {
        handoffToken: t,
        fingerprint: n
      } = e, r = l.Z.key;
      null != r && l.Z.isHandoffAvailable() ? this.handleHandoff({
        handoffKey: r,
        handoffToken: t,
        fingerprint: n,
        handoffSource: void 0
      }) : (o.Z.setFingerprint(null), (0, a.by)())
    }, t in this ? Object.defineProperty(this, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : this[t] = n
  }
}
let g = new p