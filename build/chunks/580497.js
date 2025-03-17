/** Chunk was on 27978 **/
n.d(t, {
  Z: () => _
});
var r = n(512722),
  i = n.n(r),
  o = n(525654),
  a = n.n(o),
  s = n(39612),
  l = n(271579),
  c = n(756647),
  u = n(703656),
  d = n(314897),
  p = n(896797),
  h = n(626135),
  g = n(954824),
  m = n(981631);

function _(e) {
  let t = function(e) {
      var t;
      let n = null === (t = a().os) || void 0 === t ? void 0 : t.family;
      if ("Android" === n || "iOS" === n) {
        let t = d.default.getFingerprint(),
          n = (0, l.WS)();
        return i()(null != e, "generateAppPath: guildId cannot be null"), (0, l.ZP)((0, s.z0)(e), {
          utmSource: "verify_hub_email",
          fingerprint: t,
          attemptId: n
        })
      }
      return "discord://"
    }(e),
    n = (0, l.zS)(t);
  null != n && h.default.track(m.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, c.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), g.Z.launch(t, e => {
    e || (0, u.dL)(p.Z.fallbackRoute)
  })
}