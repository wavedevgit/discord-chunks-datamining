/** Chunk was on 40184 **/
/** chunk id: 493754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => b,
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk924301 = require("./924301.js"),
  Chunk786915 = require("./786915.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk83488 = require("./83488.js");

function b(e) {
  let {
    guild: t,
    channel: r,
    streamUserId: l,
    applicationId: a,
    appContext: o,
    exitFullScreen: s,
    analyticsLocation: u,
    guildScheduledEvent: d
  } = e;
  null == s || s(), (0, c.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49049"), n.e("7654"), n.e("97016")]).then(n.bind(n, 560114));
    return n => {
      var o, s;
      return (0, i.jsx)(e, (o = function(e) {
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
      }({}, n), s = s = {
        guild: t,
        channel: r,
        streamUserId: l,
        applicationId: a,
        analyticsLocation: u,
        source: r.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
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
    contextKey: o === h.IlC.POPOUT ? c.u1M : c.z1l
  })
}

function C(e) {
  let {
    stream: t,
    applicationId: n,
    channel: r,
    exitFullScreen: a,
    appContext: C,
    analyticsLocation: y,
    className: v,
    size: x = "sm"
  } = e, O = null == r ? true : r.getGuildId(), E = null == r ? true : r.id, j = (0, s.e7)([p.Z], () => null != O ? p.Z.getGuild(O) : null, [O]), S = (0, s.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(E), [E]);
  if (!(null != j && null != r && f.Z.can(h.Plq.CREATE_INSTANT_INVITE, r))) return null;
  let _ = m.intl.string(m.t.VINpSK);
  return null != t ? _ = m.intl.string(m.t["6VQaqd"]) : null != n && (_ = m.intl.string(m.t["OzOM/q"])), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: l()(v, g.textButton),
      children: (0, i.jsx)(c.Button, {
        size: x,
        variant: "secondary",
        text: _,
        onClick: () => {
          o()(null != j, "guild cannot be null"), o()(null != r, "channel cannot be null"), b({
            guild: j,
            channel: r,
            streamUserId: null == t ? true : t.ownerId,
            applicationId: n,
            appContext: C,
            exitFullScreen: a,
            analyticsLocation: y,
            guildScheduledEvent: S
          })
        }
      })
    }), (0, i.jsx)(d.Z, {
      channel: r,
      stream: t,
      appContext: C,
      className: l()(v, g.iconButton),
      exitFullScreen: a,
      analyticsLocation: y,
      guildScheduledEvent: S
    })]
  })
}