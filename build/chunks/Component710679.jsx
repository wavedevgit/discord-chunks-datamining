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
    guildEvent: N,
    truncate: P,
    onActionTaken: k,
    className: E,
    isNew: w
  } = e, {
    id: I,
    guild_id: S,
    channel_id: D,
    creator_id: L,
    name: T,
    description: M,
    entity_type: G,
    image: _,
    recurrence_rule: R
  } = N, A = (0, x.DK)(N), B = (0, i.e7)([m.ZP], () => m.ZP.isInterestedInEventRecurrence(I, A), [I, A]), U = (0, i.e7)([l.Z], () => l.Z.isLurking(S), [S]), z = (0, i.e7)([c.Z], () => c.Z.getStageInstanceByChannel(D), [D]), J = (0, i.e7)([s.Z], () => s.Z.getGuild(S), [S]), q = (0, i.e7)([o.Z], () => o.Z.getChannel(D), [D]), H = (0, i.e7)([g.default], () => g.default.getUser(L), [L]), {
    speakers: K
  } = (0, v.Z)({
    id: D,
    data: {
      guild: null,
      instance: z,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: S,
      instance: z
    }
  }), W = (0, i.e7)([d.Z], () => d.Z.getChannelId()), F = (0, m.xt)(N), V = W === D && null != W && F, Q = K.filter(e => e.type === a.Ui.VOICE), X = Q.length, Y = (0, i.e7)([u.Z], () => u.Z.can(C.Plq.CONNECT, q), [q]), $ = (0, h.ZP)(N), ee = null != J, en = (0, y.Z)({
    guild: J,
    channel: q,
    guildScheduledEvent: N,
    isActive: F,
    recurrenceId: A,
    onActionTaken: k
  }), et = U ? true : e => (0, p.bO)({
    eventId: I,
    recurrenceId: e
  });
  return (0, r.jsx)(O.Z, (t = function(e) {
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
    guild: J,
    channel: q,
    creator: H,
    name: T,
    entityType: G,
    description: null != M ? M : true,
    location: null != (n = (0, f.cS)(N)) ? n : true,
    imageSource: null != _ ? (0, b.Z)(N) : true,
    imageLocation: O.Q.THUMBNAIL,
    isActive: F,
    isUserLurking: U,
    isJoined: V,
    isMember: ee,
    speakers: Q,
    canConnect: Y,
    speakerCount: X,
    rsvped: B,
    canInvite: $
  }, en), Z = Z = {
    className: E,
    onClick: et,
    truncate: P,
    isNew: w,
    guildEvent: N,
    recurrenceRule: (0, j.KV)(R),
    recurrenceId: A
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