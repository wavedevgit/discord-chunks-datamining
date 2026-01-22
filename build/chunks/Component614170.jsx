/** Chunk was on 7453 **/
/** chunk id: 614170, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk857071 = require("./857071.js"),
  Chunk69407 = require("./69407.js"),
  Chunk446600 = require("./446600.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk707592 = require("./707592.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk485394 = require("./485394.js"),
  Chunk961022 = require("./961022.js"),
  Chunk794782 = require("./794782.js"),
  Chunk9448 = require("./9448.js"),
  Chunk974930 = require("./974930.js"),
  Chunk691012 = require("./691012.js"),
  Chunk895202 = require("./895202.jsx"),
  Chunk482857 = require("./482857.jsx"),
  Chunk652215 = require("./652215.js");

function C(e) {
  var n, t, C;
  let {
    guildEvent: E,
    truncate: N,
    onActionTaken: P,
    className: k,
    isNew: w
  } = e, {
    id: G,
    guild_id: _,
    channel_id: I,
    creator_id: S,
    name: T,
    description: D,
    entity_type: L,
    image: M,
    recurrence_rule: B
  } = E, U = (0, y.G3)(E), R = (0, r.bG)([m.Ay], () => m.Ay.isInterestedInEventRecurrence(G, U), [G, U]), V = (0, r.bG)([i.A], () => i.A.isLurking(_), [_]), K = (0, r.bG)([o.A], () => o.A.getStageInstanceByChannel(I), [I]), H = (0, r.bG)([s.A], () => s.A.getGuild(_), [_]), J = (0, r.bG)([c.A], () => c.A.getChannel(I), [I]), z = (0, r.bG)([g.default], () => g.default.getUser(S), [S]), {
    speakers: q
  } = (0, f.A)({
    id: I,
    data: {
      guild: null,
      instance: K,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: _,
      instance: K
    }
  }), F = (0, r.bG)([d.A], () => d.A.getChannelId()), X = (0, m.Fd)(E), W = F === I && null != F && X, Q = q.filter(e => e.type === a.wY.VOICE), Y = Q.length, Z = (0, r.bG)([u.A], () => u.A.can(O.xBc.CONNECT, J), [J]), $ = (0, v.Ay)(E), ee = null != H, en = (0, x.A)({
    guild: H,
    channel: J,
    guildScheduledEvent: E,
    isActive: X,
    recurrenceId: U,
    onActionTaken: P
  }), et = V ? true : e => (0, p.uR)({
    eventId: G,
    recurrenceId: e
  });
  return (0, l.jsx)(j.A, (t = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = t[n], n in e ? Object.defineProperty(e, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = l
      })
    }
    return e
  }({
    guild: H,
    channel: J,
    creator: z,
    name: T,
    entityType: L,
    description: null != D ? D : true,
    location: null != (n = (0, b.oF)(E)) ? n : true,
    imageSource: null != M ? (0, A.A)(E) : true,
    imageLocation: j.c.THUMBNAIL,
    isActive: X,
    isUserLurking: V,
    isJoined: W,
    isMember: ee,
    speakers: Q,
    canConnect: Z,
    speakerCount: Y,
    rsvped: R,
    canInvite: $
  }, en), C = C = {
    className: k,
    onClick: et,
    truncate: N,
    isNew: w,
    guildEvent: E,
    recurrenceRule: (0, h.Sn)(B),
    recurrenceId: U
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(C)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(C)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(C, e))
  }), t))
}