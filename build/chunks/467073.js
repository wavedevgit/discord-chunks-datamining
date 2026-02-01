/** Chunk was on 12907 **/
/** chunk id: 467073, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk229527 = require("./229527.js"),
  Chunk870136 = require("./870136.js"),
  Chunk857071 = require("./857071.js"),
  Chunk406704 = require("./406704.js"),
  Chunk696451 = require("./696451.js"),
  Chunk834942 = require("./834942.js"),
  Chunk576705 = require("./576705.js"),
  Chunk707985 = require("./707985.js"),
  Chunk652215 = require("./652215.js");

function f(e) {
  var t, n;
  let f = null == e ? true : e.guild_id,
    b = (0, i.bG)([c.A], () => null == f || c.A.canChatInGuild(f), [f]),
    O = (0, i.bG)([o.A], () => null != f && o.A.isLurking(f), [f]),
    h = (0, i.bG)([a.Ay], () => null != f && a.Ay.isCurrentUserGuest(f), [f]),
    m = (0, i.bG)([u.A], () => b && u.A.can(p.xBc.ADD_REACTIONS, e), [b, e]),
    g = (0, r.ix)(f),
    [, y] = (0, l.c)(f),
    A = (0, s.Id)(e);
  return null == e ? {
    disableReactionReads: true,
    disableReactionCreates: true,
    disableReactionUpdates: true,
    isLurking: false,
    isGuest: false,
    isPendingMember: false
  } : (t = function(e) {
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
  }({}, (0, d.A)({
    channel: e,
    canChat: b,
    renderReactions: true,
    canAddNewReactions: m,
    isLurking: O,
    communicationDisabled: y,
    isActiveChannelOrUnarchivableThread: A,
    isAutomodQuarantined: g
  })), n = n = {
    isLurking: O,
    isGuest: h,
    isPendingMember: false
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t)
}