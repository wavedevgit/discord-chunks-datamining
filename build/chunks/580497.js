/** Chunk was on 27978 **/
n.d(t, {
  Z: () => m
});
var r = n(512722),
  i = n.n(r),
  o = n(525654),
  a = n.n(o),
  l = n(39612),
  s = n(271579),
  c = n(756647),
  u = n(703656),
  d = n(314897),
  h = n(896797),
  p = n(626135),
  g = n(954824),
  _ = n(981631);

function m(e) {
  let t = function(e) {
      var t;
      let n = null === (t = a().os) || void 0 === t ? void 0 : t.family;
      if ("Android" === n || "iOS" === n) {
        let t = d.default.getFingerprint(),
          n = (0, s.WS)();
        return i()(null != e, "generateAppPath: guildId cannot be null"), (0, s.ZP)((0, l.z0)(e), {
          utmSource: "verify_hub_email",
          fingerprint: t,
          attemptId: n
        })
      }
      return "discord://"
    }(e),
    n = (0, s.zS)(t);
  null != n && p.default.track(_.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, c.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), g.Z.launch(t, e => {
    e || (0, u.dL)(h.Z.fallbackRoute)
  })
}