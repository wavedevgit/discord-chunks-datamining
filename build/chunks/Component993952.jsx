/** Chunk was on 97492 **/
/** chunk id: 993952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  X: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk698441 = require("./698441.js"),
  Chunk520006 = require("./520006.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk669486 = require("./669486.js");

function m(e) {
  let {
    guild: t,
    channel: l,
    streamUserId: i,
    applicationId: a,
    appContext: s,
    exitFullScreen: o,
    analyticsLocation: u,
    guildScheduledEvent: d
  } = e;
  null == o || o(), (0, c.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42821")]).then(n.bind(n, 234355));
    return n => {
      var s, o;
      return (0, r.jsx)(e, (s = function(e) {
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
        applicationId: a,
        analyticsLocation: u,
        source: l.isGuildStageVoice() ? h.PE1.STAGE_CHANNEL : h.PE1.STREAM_INVITE,
        guildScheduledEvent: d
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e))
      }), s))
    }
  }, {
    modalKey: "stream-invite-modal",
    contextKey: s === h.BRT.POPOUT ? c.KX8 : c.SYi
  })
}

function A(e) {
  let {
    stream: t,
    applicationId: n,
    channel: l,
    exitFullScreen: a,
    appContext: A,
    analyticsLocation: y,
    className: O,
    size: j = "sm"
  } = e, v = null == l ? true : l.getGuildId(), x = null == l ? true : l.id, E = (0, o.bG)([f.A], () => null != v ? f.A.getGuild(v) : null, [v]), _ = (0, o.bG)([u.Ay], () => u.Ay.getActiveEventByChannel(x), [x]);
  if (!(null != E && null != l && p.A.can(h.xBc.CREATE_INSTANT_INVITE, l))) return null;
  let C = b.intl.string(b.t.VINpSK);
  return null != t ? C = b.intl.string(b.t["6VQaqd"]) : null != n && (C = b.intl.string(b.t["OzOM/q"])), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: i()(O, g.uX),
      children: (0, r.jsx)(c.Button, {
        size: j,
        variant: "secondary",
        text: C,
        onClick: () => {
          s()(null != E, "guild cannot be null"), s()(null != l, "channel cannot be null"), m({
            guild: E,
            channel: l,
            streamUserId: null == t ? true : t.ownerId,
            applicationId: n,
            appContext: A,
            exitFullScreen: a,
            analyticsLocation: y,
            guildScheduledEvent: _
          })
        }
      })
    }), (0, r.jsx)(d.A, {
      channel: l,
      stream: t,
      appContext: A,
      className: i()(O, g.gb),
      exitFullScreen: a,
      analyticsLocation: y,
      guildScheduledEvent: _
    })]
  })
}