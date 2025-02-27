/** Chunk was on 49750 **/
n.d(t, {
  SI: () => c,
  hZ: () => d
});
var r = n(913527),
  i = n.n(r),
  l = n(835913),
  o = n(675478),
  s = n(581883),
  a = n(905567);
let c = e => {
    var t;
    if (!u(e)) return !1;
    let n = null === (t = s.Z.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
      r = null != n ? l.E.toDate(n) : void 0,
      o = null != r ? i()().diff(r, "days") : null;
    if (null != n && !(null != o && o > 30)) return !1;
    let {
      isEligible: c
    } = a.C.getCurrentConfig({
      location: "657a81_1"
    }, {
      autoTrackExposure: !0
    });
    return c
  },
  u = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
  d = () => {
    let e = l.E.now();
    o.hW.updateAsync("userContent", t => {
      t.safetyUserSentimentNoticeDismissedAt = e
    }, o.fy.INFREQUENT_USER_ACTION)
  }