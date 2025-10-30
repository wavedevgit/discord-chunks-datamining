/** Chunk was on 13873 **/
/** chunk id: 786915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function y(e) {
  var {
    applicationId: t,
    stream: i,
    channel: y,
    exitFullScreen: C,
    appContext: v,
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
  }(e, ["applicationId", "stream", "channel", "exitFullScreen", "appContext", "analyticsLocation", "guildScheduledEvent", "shouldPrioritizeGroupPlusIcon", "isRichPresenceInvite", "iconClassName", "look", "size", "buttonText", "color"]);
  let A = (0, d.bp)(),
    {
      parentAnalyticsLocation: w
    } = (0, c.ZP)(),
    M = null == y ? true : y.getGuildId(),
    R = (0, a.e7)([p.Z], () => null != M ? p.Z.getGuild(M) : null, [M]),
    D = (0, a.e7)([f.Z], () => null != t ? f.Z.getApplicationActivity(t) : true),
    L = null == t || E ? o.ejJ : o.gQj,
    k = null != t ? b.intl.string(b.t["OzOM/q"]) : b.intl.string(b.t["6F9ivu"]);
  return null != D && j ? (0, r.jsx)(m.Z, {
    onClick: () => {
      null != w && (0, u.v)(w, u.d.INVITE), s.h7(D, false, A)
    },
    iconComponent: L,
    label: k,
    iconClassName: S,
    look: P,
    size: I,
    buttonText: Z,
    color: null != T ? T : true
  }) : null != R && null != y && h.Z.can(g.Plq.CREATE_INSTANT_INVITE, y) ? (0, r.jsx)(m.Z, _({
    onClick: () => {
      l()(null != R, "guild cannot be null"), l()(null != y, "channel cannot be null"), null != w && (0, u.v)(w, u.d.INVITE),
        function(e) {
          let {
            guild: t,
            channel: i,
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
            } = await Promise.all([n.e("49049"), n.e("7654"), n.e("89334")]).then(n.bind(n, 560114));
            return n => {
              var o, s;
              return (0, r.jsx)(e, (o = _({}, n), s = s = {
                guild: t,
                channel: i,
                streamUserId: l,
                applicationId: a,
                analyticsLocation: u,
                source: i.isGuildStageVoice() ? g.t4x.STAGE_CHANNEL : g.t4x.STREAM_INVITE,
                guildScheduledEvent: d
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
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
          channel: y,
          streamUserId: null == i ? true : i.ownerId,
          applicationId: t,
          appContext: null != v ? v : A,
          exitFullScreen: C,
          analyticsLocation: O,
          guildScheduledEvent: x
        })
    },
    iconComponent: L,
    label: k,
    iconClassName: S,
    look: P,
    size: I,
    color: T,
    buttonText: Z
  }, N)) : null
}