/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(544891),
  i = n(626135),
  l = n(186901),
  o = n(981631);
let a = {
  [o.Etm.GET_NETWORKING_CONFIG]: {
    scope: l.lH,
    handler: () => Promise.all([r.tn.get({
      url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
      retries: 3,
      rejectWithError: !1
    }).then(e => {
      let {
        body: {
          address: t
        }
      } = e;
      return t
    }), r.tn.post({
      url: o.ANM.NETWORKING_TOKEN,
      retries: 3,
      oldFormErrors: !0,
      rejectWithError: !1
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return t
    })]).then(e => {
      let [t, n] = e;
      return {
        address: t,
        token: n
      }
    })
  },
  [o.Etm.NETWORKING_SYSTEM_METRICS]: {
    scope: l.lH,
    handler(e) {
      let {
        socket: t,
        args: n
      } = e;
      n.application_id = t.application.id, i.default.track(o.rMx.NETWORKING_SYSTEM_METRICS, n)
    }
  },
  [o.Etm.NETWORKING_PEER_METRICS]: {
    scope: l.lH,
    handler(e) {
      let {
        socket: t,
        args: n
      } = e;
      n.application_id = t.application.id, i.default.track(o.rMx.NETWORKING_PEER_METRICS, n)
    }
  },
  [o.Etm.NETWORKING_CREATE_TOKEN]: {
    scope: l.lH,
    handler: () => r.tn.post({
      url: o.ANM.NETWORKING_TOKEN,
      retries: 1,
      oldFormErrors: !0,
      rejectWithError: !1
    }).then(e => e.body)
  }
}