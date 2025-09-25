/** Chunk was on 95546 **/
/** chunk id: 443877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function p(e) {
  var t, n;
  let p = null == e ? true : e.guild_id,
    b = (0, r.e7)([a.Z], () => null == p || a.Z.canChatInGuild(p), [p]),
    O = (0, r.e7)([l.Z], () => null != p && l.Z.isLurking(p), [p]),
    m = (0, r.e7)([c.ZP], () => null != p && c.ZP.isCurrentUserGuest(p), [p]),
    g = (0, r.e7)([u.Z], () => b && u.Z.can(f.Plq.ADD_REACTIONS, e), [b, e]),
    v = (0, i.ux)(p),
    [, y] = (0, o.AB)(p),
    h = (0, s.$R)(e);
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
    canChat: b,
    renderReactions: true,
    canAddNewReactions: g,
    isLurking: O,
    isGuest: m,
    communicationDisabled: y,
    isActiveChannelOrUnarchivableThread: h,
    isAutomodQuarantined: v
  })), n = n = {
    isLurking: O,
    isGuest: m,
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