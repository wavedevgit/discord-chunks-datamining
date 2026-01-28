/** Chunk was on 78528 **/
/** chunk id: 993952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  X: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk698441 = require("./698441.js"),
  Chunk520006 = require("./520006.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk669486 = require("./669486.js");

function b(e) {
  let {
    guild: t,
    channel: l,
    streamUserId: i,
    applicationId: s,
    appContext: a,
    exitFullScreen: o,
    analyticsLocation: u,
    guildScheduledEvent: d
  } = e;
  null == o || o(), (0, c.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
    return n => {
      var a, o;
      return (0, r.jsx)(e, (a = function(e) {
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
      }({}, n), o = o = {
        guild: t,
        channel: l,
        streamUserId: i,
        applicationId: s,
        analyticsLocation: u,
        source: l.isGuildStageVoice() ? f.PE1.STAGE_CHANNEL : f.PE1.STREAM_INVITE,
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
    contextKey: a === f.BRT.POPOUT ? c.KX8 : c.SYi
  })
}

function A(e) {
  let {
    stream: t,
    applicationId: n,
    channel: l,
    exitFullScreen: s,
    appContext: A,
    analyticsLocation: y,
    className: _,
    size: O = "sm"
  } = e, j = null == l ? true : l.getGuildId(), v = null == l ? true : l.id, x = (0, o.bG)([p.A], () => null != j ? p.A.getGuild(j) : null, [j]), E = (0, o.bG)([u.Ay], () => u.Ay.getActiveEventByChannel(v), [v]);
  if (!(null != x && null != l && h.A.can(f.xBc.CREATE_INSTANT_INVITE, l))) return null;
  let C = g.intl.string(g.t.VINpSK);
  return null != t ? C = g.intl.string(g.t["6VQaqd"]) : null != n && (C = g.intl.string(g.t["OzOM/q"])), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: i()(_, m.uX),
      children: (0, r.jsx)(c.Button, {
        size: O,
        variant: "secondary",
        text: C,
        onClick: () => {
          a()(null != x, "guild cannot be null"), a()(null != l, "channel cannot be null"), b({
            guild: x,
            channel: l,
            streamUserId: null == t ? true : t.ownerId,
            applicationId: n,
            appContext: A,
            exitFullScreen: s,
            analyticsLocation: y,
            guildScheduledEvent: E
          })
        }
      })
    }), (0, r.jsx)(d.A, {
      channel: l,
      stream: t,
      appContext: A,
      className: i()(_, m.gb),
      exitFullScreen: s,
      analyticsLocation: y,
      guildScheduledEvent: E
    })]
  })
}