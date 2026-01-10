/** Chunk was on 81985 **/
/** chunk id: 493754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => b,
  Z: () => y
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
    channel: i,
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
    } = await Promise.all([n.e("7654"), n.e("49049"), n.e("97016")]).then(n.bind(n, 560114));
    return n => {
      var o, s;
      return (0, r.jsx)(e, (o = function(e) {
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
      }({}, n), s = s = {
        guild: t,
        channel: i,
        streamUserId: l,
        applicationId: a,
        analyticsLocation: u,
        source: i.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
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
    contextKey: o === h.IlC.POPOUT ? c.u1M : c.z1l
  })
}

function y(e) {
  let {
    stream: t,
    applicationId: n,
    channel: i,
    exitFullScreen: a,
    appContext: y,
    analyticsLocation: v,
    className: O,
    size: j = "sm"
  } = e, x = null == i ? true : i.getGuildId(), C = null == i ? true : i.id, E = (0, s.e7)([p.Z], () => null != x ? p.Z.getGuild(x) : null, [x]), S = (0, s.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(C), [C]);
  if (!(null != E && null != i && f.Z.can(h.Plq.CREATE_INSTANT_INVITE, i))) return null;
  let _ = g.intl.string(g.t.VINpSK);
  return null != t ? _ = g.intl.string(g.t["6VQaqd"]) : null != n && (_ = g.intl.string(g.t["OzOM/q"])), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l()(O, m.textButton),
      children: (0, r.jsx)(c.Button, {
        size: j,
        variant: "secondary",
        text: _,
        onClick: () => {
          o()(null != E, "guild cannot be null"), o()(null != i, "channel cannot be null"), b({
            guild: E,
            channel: i,
            streamUserId: null == t ? true : t.ownerId,
            applicationId: n,
            appContext: y,
            exitFullScreen: a,
            analyticsLocation: v,
            guildScheduledEvent: S
          })
        }
      })
    }), (0, r.jsx)(d.Z, {
      channel: i,
      stream: t,
      appContext: y,
      className: l()(O, m.iconButton),
      exitFullScreen: a,
      analyticsLocation: v,
      guildScheduledEvent: S
    })]
  })
}