/** Chunk was on 72593 **/
n.d(t, {
  Z: () => v
});
var r = n(200651);
n(192379);
var i = n(512722),
  l = n.n(i),
  o = n(115911),
  a = n(442837),
  s = n(481060),
  c = n(24124),
  u = n(40851),
  d = n(906732),
  p = n(522651),
  h = n(430824),
  f = n(293273),
  m = n(496675),
  g = n(871499),
  b = n(981631),
  _ = n(388032);

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function v(e) {
  var {
    applicationId: t,
    stream: i,
    channel: v,
    exitFullScreen: y,
    appContext: x,
    analyticsLocation: j,
    guildScheduledEvent: O,
    shouldPrioritizeGroupPlusIcon: E = !1,
    embeddedActivity: N
  } = e, I = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["applicationId", "stream", "channel", "exitFullScreen", "appContext", "analyticsLocation", "guildScheduledEvent", "shouldPrioritizeGroupPlusIcon", "embeddedActivity"]);
  let P = (0, u.bp)(),
    {
      parentAnalyticsLocation: S
    } = (0, d.ZP)(),
    Z = null == v ? void 0 : v.getGuildId(),
    T = (0, a.e7)([h.Z], () => null != Z ? h.Z.getGuild(Z) : null, [Z]),
    A = (0, a.e7)([f.Z], () => null != t ? f.Z.getApplicationActivity(t) : void 0);
  return null != A && (null == N ? void 0 : N.location.kind) === o.X.CONTEXTLESS ? (0, r.jsx)(g.Z, {
    onClick: () => {
      null != S && (0, p.v)(S, p.d.INVITE), c.h7(A, !1, P)
    },
    iconComponent: null == t || E ? s.ejJ : s.gQj,
    label: null != t ? _.NW.string(_.t["OzOM/v"]) : _.NW.string(_.t["6F9ivr"])
  }) : null != T && null != v && m.Z.can(b.Plq.CREATE_INSTANT_INVITE, v) ? (0, r.jsx)(g.Z, C({
    onClick: () => {
      l()(null != T, "guild cannot be null"), l()(null != v, "channel cannot be null"), null != S && (0, p.v)(S, p.d.INVITE),
        function(e) {
          let {
            guild: t,
            channel: i,
            streamUserId: l,
            applicationId: o,
            appContext: a,
            exitFullScreen: c,
            analyticsLocation: u,
            guildScheduledEvent: d
          } = e;
          null == c || c(), (0, s.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("7654"), n.e("6680")]).then(n.bind(n, 560114));
            return n => {
              var a, s;
              return (0, r.jsx)(e, (a = C({}, n), s = s = {
                guild: t,
                channel: i,
                streamUserId: l,
                applicationId: o,
                analyticsLocation: u,
                source: i.isGuildStageVoice() ? b.t4x.STAGE_CHANNEL : b.t4x.STREAM_INVITE,
                guildScheduledEvent: d
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(s)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e))
              }), a))
            }
          }, {
            modalKey: "stream-invite-modal",
            contextKey: a === b.IlC.POPOUT ? s.u1M : s.z1l
          })
        }({
          guild: T,
          channel: v,
          streamUserId: null == i ? void 0 : i.ownerId,
          applicationId: t,
          appContext: null != x ? x : P,
          exitFullScreen: y,
          analyticsLocation: j,
          guildScheduledEvent: O
        })
    },
    iconComponent: null == t || E ? s.ejJ : s.gQj,
    label: null != t ? _.NW.string(_.t["OzOM/v"]) : _.NW.string(_.t["6F9ivr"])
  }, I)) : null
}