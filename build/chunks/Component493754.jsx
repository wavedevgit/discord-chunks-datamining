/** Chunk was on 73726 **/
/** chunk id: 493754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => b,
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk811130 = require("./811130.js");

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
    } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(n.bind(n, 560114));
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

function _(e) {
  let {
    stream: t,
    applicationId: n,
    channel: i,
    exitFullScreen: a,
    appContext: _,
    analyticsLocation: y,
    className: C,
    size: v = "sm"
  } = e, x = null == i ? true : i.getGuildId(), O = null == i ? true : i.id, E = (0, s.e7)([p.Z], () => null != x ? p.Z.getGuild(x) : null, [x]), j = (0, s.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(O), [O]);
  if (!(null != E && null != i && f.Z.can(h.Plq.CREATE_INSTANT_INVITE, i))) return null;
  let S = m.intl.string(m.t.VINpSK);
  return null != t ? S = m.intl.string(m.t["6VQaqd"]) : null != n && (S = m.intl.string(m.t["OzOM/q"])), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l()(C, g.textButton),
      children: (0, r.jsx)(c.Button, {
        size: v,
        variant: "secondary",
        text: S,
        onClick: () => {
          o()(null != E, "guild cannot be null"), o()(null != i, "channel cannot be null"), b({
            guild: E,
            channel: i,
            streamUserId: null == t ? true : t.ownerId,
            applicationId: n,
            appContext: _,
            exitFullScreen: a,
            analyticsLocation: y,
            guildScheduledEvent: j
          })
        }
      })
    }), (0, r.jsx)(d.Z, {
      channel: i,
      stream: t,
      appContext: _,
      className: l()(C, g.iconButton),
      exitFullScreen: a,
      analyticsLocation: y,
      guildScheduledEvent: j
    })]
  })
}