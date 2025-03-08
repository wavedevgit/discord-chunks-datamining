/** Chunk was on 74329 **/
n.d(t, {
  SI: () => c,
  hZ: () => d
});
var r = n(913527),
  i = n.n(r),
  o = n(835913),
  l = n(675478),
  a = n(581883),
  s = n(905567);
let c = e => {
    var t;
    if (!u(e)) return !1;
    let n = null === (t = a.Z.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
      r = null != n ? o.E.toDate(n) : void 0,
      l = null != r ? i()().diff(r, "days") : null;
    if (null != n && !(null != l && l > 30)) return !1;
    let {
      isEligible: c
    } = s.C.getCurrentConfig({
      location: "657a81_1"
    }, {
      autoTrackExposure: !0
    });
    return c
  },
  u = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
  d = () => {
    let e = o.E.now();
    l.hW.updateAsync("userContent", t => {
      t.safetyUserSentimentNoticeDismissedAt = e
    }, l.fy.INFREQUENT_USER_ACTION)
  }