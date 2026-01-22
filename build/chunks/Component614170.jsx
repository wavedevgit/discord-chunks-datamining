/** Chunk was on 7453 **/
/** chunk id: 614170, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => O
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

function O(e) {
  var n, t, O;
  let {
    guildEvent: N,
    truncate: k,
    onActionTaken: E,
    className: P,
    isNew: w
  } = e, {
    id: G,
    guild_id: T,
    channel_id: S,
    creator_id: I,
    name: M,
    description: _,
    entity_type: D,
    image: R,
    recurrence_rule: U
  } = N, B = (0, f.G3)(N), L = (0, l.bG)([h.Ay], () => h.Ay.isInterestedInEventRecurrence(G, B), [G, B]), z = (0, l.bG)([i.A], () => i.A.isLurking(T), [T]), V = (0, l.bG)([a.A], () => a.A.getStageInstanceByChannel(S), [S]), q = (0, l.bG)([o.A], () => o.A.getGuild(T), [T]), J = (0, l.bG)([c.A], () => c.A.getChannel(S), [S]), K = (0, l.bG)([m.default], () => m.default.getUser(I), [I]), {
    speakers: F
  } = (0, x.A)({
    id: S,
    data: {
      guild: null,
      instance: V,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: T,
      instance: V
    }
  }), H = (0, l.bG)([d.A], () => d.A.getChannelId()), W = (0, h.Fd)(N), X = H === S && null != H && W, Z = F.filter(e => e.type === s.wY.VOICE), Q = Z.length, Y = (0, l.bG)([u.A], () => u.A.can(C.xBc.CONNECT, J), [J]), $ = (0, j.Ay)(N), ee = null != q, en = (0, y.A)({
    guild: q,
    channel: J,
    guildScheduledEvent: N,
    isActive: W,
    recurrenceId: B,
    onActionTaken: E
  }), et = z ? true : e => (0, g.uR)({
    eventId: G,
    recurrenceId: e
  });
  return (0, r.jsx)(A.A, (t = function(e) {
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
    guild: q,
    channel: J,
    creator: K,
    name: M,
    entityType: D,
    description: null != _ ? _ : true,
    location: null != (n = (0, p.oF)(N)) ? n : true,
    imageSource: null != R ? (0, b.A)(N) : true,
    imageLocation: A.c.THUMBNAIL,
    isActive: W,
    isUserLurking: z,
    isJoined: X,
    isMember: ee,
    speakers: Z,
    canConnect: Y,
    speakerCount: Q,
    rsvped: L,
    canInvite: $
  }, en), O = O = {
    className: P,
    onClick: et,
    truncate: k,
    isNew: w,
    guildEvent: N,
    recurrenceRule: (0, v.Sn)(U),
    recurrenceId: B
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(O)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(O)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(O, e))
  }), t))
}