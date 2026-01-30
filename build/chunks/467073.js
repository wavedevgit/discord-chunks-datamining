/** Chunk was on 48898 **/
/** chunk id: 467073, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  var t, n;
  let g = null == e ? true : e.guild_id,
    m = (0, i.bG)([c.A], () => null == g || c.A.canChatInGuild(g), [g]),
    p = (0, i.bG)([l.A], () => null != g && l.A.isLurking(g), [g]),
    f = (0, i.bG)([o.Ay], () => null != g && o.Ay.isCurrentUserGuest(g), [g]),
    v = (0, i.bG)([d.A], () => m && d.A.can(h.xBc.ADD_REACTIONS, e), [m, e]),
    b = (0, s.ix)(g),
    [, A] = (0, r.c)(g),
    O = (0, a.Id)(e);
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
  }({}, (0, u.A)({
    channel: e,
    canChat: m,
    renderReactions: true,
    canAddNewReactions: v,
    isLurking: p,
    communicationDisabled: A,
    isActiveChannelOrUnarchivableThread: O,
    isAutomodQuarantined: b
  })), n = n = {
    isLurking: p,
    isGuest: f,
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