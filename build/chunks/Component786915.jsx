/** Chunk was on 34740 **/
/** chunk id: 786915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk293273 = require("./293273.js"),
  Chunk496675 = require("./496675.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function C(e) {
  var {
    applicationId: t,
    stream: r,
    channel: C,
    exitFullScreen: v,
    appContext: _,
    analyticsLocation: O,
    guildScheduledEvent: x,
    shouldPrioritizeGroupPlusIcon: E = false,
    isRichPresenceInvite: j = false,
    iconClassName: S,
    look: P,
    size: I,
    buttonText: Z,
    color: T
  } = e, N = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["applicationId", "stream", "channel", "exitFullScreen", "appContext", "analyticsLocation", "guildScheduledEvent", "shouldPrioritizeGroupPlusIcon", "isRichPresenceInvite", "iconClassName", "look", "size", "buttonText", "color"]);
  let A = (0, d.bp)(),
    {
      parentAnalyticsLocation: w
    } = (0, c.ZP)(),
    M = null == C ? true : C.getGuildId(),
    R = (0, a.e7)([p.Z], () => null != M ? p.Z.getGuild(M) : null, [M]),
    L = (0, a.e7)([h.Z], () => null != t ? h.Z.getApplicationActivity(t) : true),
    D = null == t || E ? o.ejJ : o.gQj,
    k = null != t ? b.intl.string(b.t["OzOM/q"]) : b.intl.string(b.t["6F9ivu"]);
  return null != L && j ? (0, i.jsx)(m.Z, {
    onClick: () => {
      null != w && (0, u.v)(w, u.d.INVITE), s.h7(L, false, A)
    },
    iconComponent: D,
    label: k,
    iconClassName: S,
    look: P,
    size: I,
    buttonText: Z,
    color: null != T ? T : true
  }) : null != R && null != C && f.Z.can(g.Plq.CREATE_INSTANT_INVITE, C) ? (0, i.jsx)(m.Z, y({
    onClick: () => {
      l()(null != R, "guild cannot be null"), l()(null != C, "channel cannot be null"), null != w && (0, u.v)(w, u.d.INVITE),
        function(e) {
          let {
            guild: t,
            channel: r,
            streamUserId: l,
            applicationId: a,
            appContext: s,
            exitFullScreen: c,
            analyticsLocation: u,
            guildScheduledEvent: d
          } = e;
          null == c || c(), (0, o.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("49049"), n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
            return n => {
              var o, s;
              return (0, i.jsx)(e, (o = y({}, n), s = s = {
                guild: t,
                channel: r,
                streamUserId: l,
                applicationId: a,
                analyticsLocation: u,
                source: r.isGuildStageVoice() ? g.t4x.STAGE_CHANNEL : g.t4x.STREAM_INVITE,
                guildScheduledEvent: d
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, i)
                }
                return n
              })(Object(s)).forEach(function(e) {
                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
              }), o))
            }
          }, {
            modalKey: "stream-invite-modal",
            contextKey: s === g.IlC.POPOUT ? o.u1M : o.z1l
          })
        }({
          guild: R,
          channel: C,
          streamUserId: null == r ? true : r.ownerId,
          applicationId: t,
          appContext: null != _ ? _ : A,
          exitFullScreen: v,
          analyticsLocation: O,
          guildScheduledEvent: x
        })
    },
    iconComponent: D,
    label: k,
    iconClassName: S,
    look: P,
    size: I,
    color: T,
    buttonText: Z
  }, N)) : null
}