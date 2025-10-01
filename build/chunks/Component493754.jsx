/** Chunk was on 49613 **/
/** chunk id: 493754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => _,
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk924301 = require("./924301.js"),
  Chunk786915 = require("./786915.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk759877 = require("./759877.js");

function y(e) {
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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    guild: t,
    channel: i,
    streamUserId: l,
    applicationId: a,
    appContext: o,
    exitFullScreen: s,
    analyticsLocation: c,
    guildScheduledEvent: d
  } = e;
  null == s || s(), (0, u.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("7654"), n.e("49049"), n.e("48731")]).then(n.bind(n, 560114));
    return n => (0, r.jsx)(e, C(y({}, n), {
      guild: t,
      channel: i,
      streamUserId: l,
      applicationId: a,
      analyticsLocation: c,
      source: i.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
      guildScheduledEvent: d
    }))
  }, {
    modalKey: "stream-invite-modal",
    contextKey: o === m.IlC.POPOUT ? u.u1M : u.z1l
  })
}

function v(e) {
  var t, {
      stream: n,
      applicationId: i,
      channel: a,
      exitFullScreen: u,
      appContext: v,
      analyticsLocation: x,
      className: O
    } = e,
    j = function(e, t) {
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
    }(e, ["stream", "applicationId", "channel", "exitFullScreen", "appContext", "analyticsLocation", "className"]);
  let E = null == a ? true : a.getGuildId(),
    S = null == a ? true : a.id,
    P = (0, s.e7)([h.Z], () => null != E ? h.Z.getGuild(E) : null, [E]),
    I = (0, s.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(S), [S]);
  if (!(null != P && null != a && f.Z.can(m.Plq.CREATE_INSTANT_INVITE, a))) return null;
  let Z = g.intl.string(g.t.VINpSE);
  return null != n ? Z = g.intl.string(g.t["6VQaqa"]) : null != i && (Z = g.intl.string(g.t["OzOM/v"])), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.zx, C(y({
      size: null != (t = j.size) ? t : c.zx.Sizes.SMALL,
      color: b.buttonColor,
      onClick: () => {
        o()(null != P, "guild cannot be null"), o()(null != a, "channel cannot be null"), _({
          guild: P,
          channel: a,
          streamUserId: null == n ? true : n.ownerId,
          applicationId: i,
          appContext: v,
          exitFullScreen: u,
          analyticsLocation: x,
          guildScheduledEvent: I
        })
      },
      className: l()(O, b.textButton)
    }, j), {
      children: Z
    })), (0, r.jsx)(p.Z, {
      channel: a,
      stream: n,
      appContext: v,
      className: l()(O, b.iconButton),
      exitFullScreen: u,
      analyticsLocation: x,
      guildScheduledEvent: I
    })]
  })
}