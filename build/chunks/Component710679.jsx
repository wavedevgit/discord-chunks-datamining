/** Chunk was on 56236 **/
/** chunk id: 710679, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk41776 = require("./41776.js"),
  Chunk501655 = require("./501655.js"),
  Chunk427679 = require("./427679.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk951539 = require("./951539.js"),
  Chunk146768 = require("./146768.js"),
  Chunk236373 = require("./236373.js"),
  Chunk230900 = require("./230900.js"),
  Chunk854698 = require("./854698.js"),
  Chunk405613 = require("./405613.js"),
  Chunk460838 = require("./460838.jsx"),
  Chunk462179 = require("./462179.jsx"),
  Chunk981631 = require("./981631.js");

function Z(e) {
  var n, t, Z;
  let {
    guildEvent: O,
    truncate: k,
    onActionTaken: P,
    className: E,
    isNew: w
  } = e, {
    id: S,
    guild_id: I,
    channel_id: T,
    creator_id: D,
    name: _,
    description: G,
    entity_type: M,
    image: R,
    recurrence_rule: A
  } = O, L = (0, f.DK)(O), U = (0, i.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(S, L), [S, L]), J = (0, i.e7)([l.Z], () => l.Z.isLurking(I), [I]), B = (0, i.e7)([c.Z], () => c.Z.getStageInstanceByChannel(T), [T]), z = (0, i.e7)([s.Z], () => s.Z.getGuild(I), [I]), q = (0, i.e7)([o.Z], () => o.Z.getChannel(T), [T]), W = (0, i.e7)([g.default], () => g.default.getUser(D), [D]), {
    speakers: H
  } = (0, j.Z)({
    id: T,
    data: {
      guild: null,
      instance: B,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: I,
      instance: B
    }
  }), K = (0, i.e7)([d.Z], () => d.Z.getChannelId()), V = (0, h.xt)(O), F = K === T && null != K && V, Q = H.filter(e => e.type === a.Ui.VOICE), X = Q.length, Y = (0, i.e7)([u.Z], () => u.Z.can(N.Plq.CONNECT, q), [q]), $ = (0, p.ZP)(O), ee = null != z, en = (0, y.Z)({
    guild: z,
    channel: q,
    guildScheduledEvent: O,
    isActive: V,
    recurrenceId: L,
    onActionTaken: P
  }), et = J ? true : e => (0, m.bO)({
    eventId: S,
    recurrenceId: e
  });
  return (0, r.jsx)(C.Z, (t = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({
    guild: z,
    channel: q,
    creator: W,
    name: _,
    entityType: M,
    description: null != G ? G : true,
    location: null != (n = (0, v.cS)(O)) ? n : true,
    imageSource: null != R ? (0, b.Z)(O) : true,
    imageLocation: C.Q.THUMBNAIL,
    isActive: V,
    isUserLurking: J,
    isJoined: F,
    isMember: ee,
    speakers: Q,
    canConnect: Y,
    speakerCount: X,
    rsvped: U,
    canInvite: $
  }, en), Z = Z = {
    className: E,
    onClick: et,
    truncate: k,
    isNew: w,
    guildEvent: O,
    recurrenceRule: (0, x.KV)(A),
    recurrenceId: L
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(Z)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(Z)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(Z, e))
  }), t))
}