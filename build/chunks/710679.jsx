/** Chunk was on 56236 **/
/** chunk id: 710679, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk724912 = require("./724912.js"),
  Chunk41776 = require("./41776.js"),
  Chunk501655 = require("./501655.js"),
  Chunk427679 = require("./427679.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk951539 = require("./951539.js"),
  Chunk146768 = require("./146768.js"),
  Chunk592126 = require("./592126.js"),
  Chunk236373 = require("./236373.js"),
  Chunk230900 = require("./230900.js"),
  Chunk854698 = require("./854698.js"),
  Chunk405613 = require("./405613.js"),
  Chunk460838 = require("./460838.jsx"),
  Chunk462179 = require("./462179.jsx"),
  Chunk981631 = require("./981631.js");

function P(e) {
  var n, t, P;
  let {
    guildEvent: E,
    guildId: k,
    truncate: N,
    onActionTaken: w,
    className: I,
    isNew: S
  } = e, {
    id: T,
    guild_id: _,
    channel_id: D,
    creator_id: G,
    name: L,
    description: R,
    entity_type: H,
    image: M,
    recurrence_rule: U
  } = E, z = (0, y.DK)(E), A = (0, r.e7)([f.ZP], () => f.ZP.isInterestedInEventRecurrence(T, z), [T, z]), J = (0, r.e7)([o.Z], () => o.Z.isLurking(_), [_]), B = (0, r.e7)([a.Z], () => a.Z.getStageInstanceByChannel(D), [D]), X = (0, r.e7)([s.Z], () => s.Z.getChannel(D), [D]), W = (0, r.e7)([g.default], () => g.default.getUser(G), [G]), {
    speakers: V
  } = (0, v.Z)({
    id: D,
    data: {
      guild: null,
      instance: B,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: _,
      instance: B
    }
  }), q = (0, r.e7)([d.Z], () => d.Z.getChannelId()), K = (0, f.xt)(E), Q = q === D && null != q && K, F = V.filter(e => e.type === c.Ui.VOICE), Y = F.length, $ = (0, r.e7)([u.Z], () => u.Z.can(C.Plq.CONNECT, X), [X]), ee = (0, h.ZP)(E), {
    isMember: en,
    guild: et
  } = (0, m.Z)(_, T), ei = (0, Z.Z)({
    guild: et,
    channel: X,
    guildScheduledEvent: E,
    isActive: K,
    recurrenceId: z,
    onActionTaken: w
  }), er = (0, l.Z)(k), el = J ? true : e => (0, p.bO)({
    eventId: T,
    parentGuildId: k,
    recurrenceId: e
  });
  return <O.Z{...t = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        i = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), i.forEach(function(n) {
        var i;
        i = t[n], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = i
      })
    }
    return e
  }({
    guild: et,
    channel: X,
    creator: W,
    name: L,
    entityType: H,
    description: null != R ? R : true,
    location: null != (n = (0, b.cS)(E)) ? n : true,
    imageSource: null != M ? (0, x.Z)(E) : true,
    imageLocation: O.Q.THUMBNAIL,
    isActive: K,
    isUserLurking: J,
    isJoined: Q,
    isMember: en,
    isHub: er,
    speakers: F,
    canConnect: $,
    speakerCount: Y,
    rsvped: A,
    canInvite: ee
  }, ei), P = P = {
    className: I,
    onClick: el,
    truncate: N,
    isNew: S,
    guildEvent: E,
    recurrenceRule: (0, j.KV)(U),
    recurrenceId: z
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(P)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(P, e))
  }), t} />
}