/** Chunk was on 95546 **/
/** chunk id: 443877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk715903 = require("./715903.js"),
  Chunk71619 = require("./71619.js"),
  Chunk41776 = require("./41776.js"),
  Chunk665906 = require("./665906.js"),
  Chunk271383 = require("./271383.js"),
  Chunk607744 = require("./607744.js"),
  Chunk496675 = require("./496675.js"),
  Chunk432376 = require("./432376.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  var t, n;
  let f = null == e ? true : e.guild_id,
    O = (0, r.e7)([a.Z], () => null == f || a.Z.canChatInGuild(f), [f]),
    b = (0, r.e7)([l.Z], () => null != f && l.Z.isLurking(f), [f]),
    y = (0, r.e7)([c.ZP], () => null != f && c.ZP.isCurrentUserGuest(f), [f]),
    g = (0, r.e7)([u.Z], () => O && u.Z.can(p.Plq.ADD_REACTIONS, e), [O, e]),
    h = (0, i.ux)(f),
    [, m] = (0, o.AB)(f),
    v = (0, s.$R)(e);
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
  }({}, (0, d.Z)({
    channel: e,
    canChat: O,
    renderReactions: true,
    canAddNewReactions: g,
    isLurking: b,
    isGuest: y,
    communicationDisabled: m,
    isActiveChannelOrUnarchivableThread: v,
    isAutomodQuarantined: h
  })), n = n = {
    isLurking: b,
    isGuest: y,
    isPendingMember: false
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t)
}