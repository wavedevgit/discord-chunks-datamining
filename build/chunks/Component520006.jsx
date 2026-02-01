/** Chunk was on 42402 **/
/** chunk id: 520006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk298990 = require("./298990.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk375492 = require("./375492.js"),
  Chunk576705 = require("./576705.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function A(e) {
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
  let {
    applicationId: t,
    stream: l,
    channel: y,
    exitFullScreen: O,
    appContext: j,
    analyticsLocation: x,
    guildScheduledEvent: _,
    shouldPrioritizeGroupPlusIcon: v = false,
    isRichPresenceInvite: E = false,
    iconClassName: C,
    look: S,
    size: I,
    buttonText: N,
    color: T
  } = e, P = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["applicationId", "stream", "channel", "exitFullScreen", "appContext", "analyticsLocation", "guildScheduledEvent", "shouldPrioritizeGroupPlusIcon", "isRichPresenceInvite", "iconClassName", "look", "size", "buttonText", "color"]), w = (0, d.Us)(), {
    parentAnalyticsLocation: R
  } = (0, c.Ay)(), D = null == y ? true : y.getGuildId(), L = (0, s.bG)([p.A], () => null != D ? p.A.getGuild(D) : null, [D]), M = (0, s.bG)([h.A], () => null != t ? h.A.getApplicationActivity(t) : true), G = null == t || v ? a.DpX : a.dCJ, k = null != t ? b.intl.string(b.t["OzOM/q"]) : b.intl.string(b.t["6F9ivu"]);
  return null != M && E ? (0, r.jsx)(f.A, {
    onClick: () => {
      null != R && (0, u.X)(R, u.O.INVITE), o.qf(M, false, w)
    },
    iconComponent: G,
    label: k,
    iconClassName: C,
    look: S,
    size: I,
    buttonText: N,
    color: null != T ? T : true
  }) : null != L && null != y && g.A.can(m.xBc.CREATE_INSTANT_INVITE, y) ? (0, r.jsx)(f.A, A({
    onClick: () => {
      i()(null != L, "guild cannot be null"), i()(null != y, "channel cannot be null"), null != R && (0, u.X)(R, u.O.INVITE),
        function(e) {
          let {
            guild: t,
            channel: l,
            streamUserId: i,
            applicationId: s,
            appContext: o,
            exitFullScreen: c,
            analyticsLocation: u,
            guildScheduledEvent: d
          } = e;
          null == c || c(), (0, a.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
            return n => {
              var a, o;
              return (0, r.jsx)(e, (a = A({}, n), o = o = {
                guild: t,
                channel: l,
                streamUserId: i,
                applicationId: s,
                analyticsLocation: u,
                source: l.isGuildStageVoice() ? m.PE1.STAGE_CHANNEL : m.PE1.STREAM_INVITE,
                guildScheduledEvent: d
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(o)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
              }), a))
            }
          }, {
            modalKey: "stream-invite-modal",
            contextKey: o === m.BRT.POPOUT ? a.KX8 : a.SYi
          })
        }({
          guild: L,
          channel: y,
          streamUserId: null == l ? true : l.ownerId,
          applicationId: t,
          appContext: null != j ? j : w,
          exitFullScreen: O,
          analyticsLocation: x,
          guildScheduledEvent: _
        })
    },
    iconComponent: G,
    label: k,
    iconClassName: C,
    look: S,
    size: I,
    color: T,
    buttonText: N
  }, P)) : null
}