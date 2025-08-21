/** Chunk was on 46653 **/
/** chunk id: 443877, original params: e,t,i (module,exports,require) **/
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
  var t, i;
  let p = null == e ? true : e.guild_id,
    g = (0, n.e7)([d.Z], () => null == p || d.Z.canChatInGuild(p), [p]),
    m = (0, n.e7)([o.Z], () => null != p && o.Z.isLurking(p), [p]),
    f = (0, n.e7)([a.ZP], () => null != p && a.ZP.isCurrentUserGuest(p), [p]),
    v = (0, n.e7)([c.Z], () => g && c.Z.can(h.Plq.ADD_REACTIONS, e), [g, e]),
    O = (0, r.ux)(p),
    [, b] = (0, s.AB)(p),
    S = (0, l.$R)(e);
  return null == e ? {
    disableReactionReads: true,
    disableReactionCreates: true,
    disableReactionUpdates: true,
    isLurking: false,
    isGuest: false,
    isPendingMember: false
  } : (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(i);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = i[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, (0, u.Z)({
    channel: e,
    canChat: g,
    renderReactions: true,
    canAddNewReactions: v,
    isLurking: m,
    isGuest: f,
    communicationDisabled: b,
    isActiveChannelOrUnarchivableThread: S,
    isAutomodQuarantined: O
  })), i = i = {
    isLurking: m,
    isGuest: f,
    isPendingMember: false
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
  }), t)
}