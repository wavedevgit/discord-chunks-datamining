/** Chunk was on 46653 **/
/** chunk id: 443877, original params: t,e,i (module,exports,require) **/
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

function p(t) {
  var e, i;
  let p = null == t ? true : t.guild_id,
    g = (0, n.e7)([d.Z], () => null == p || d.Z.canChatInGuild(p), [p]),
    m = (0, n.e7)([o.Z], () => null != p && o.Z.isLurking(p), [p]),
    f = (0, n.e7)([a.ZP], () => null != p && a.ZP.isCurrentUserGuest(p), [p]),
    v = (0, n.e7)([c.Z], () => g && c.Z.can(h.Plq.ADD_REACTIONS, t), [g, t]),
    O = (0, r.ux)(p),
    [, b] = (0, s.AB)(p),
    y = (0, l.$R)(t);
  return null == t ? {
    disableReactionReads: true,
    disableReactionCreates: true,
    disableReactionUpdates: true,
    isLurking: false,
    isGuest: false,
    isPendingMember: false
  } : (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(i);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
        return Object.getOwnPropertyDescriptor(i, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = i[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({}, (0, u.Z)({
    channel: t,
    canChat: g,
    renderReactions: true,
    canAddNewReactions: v,
    isLurking: m,
    isGuest: f,
    communicationDisabled: b,
    isActiveChannelOrUnarchivableThread: y,
    isAutomodQuarantined: O
  })), i = i = {
    isLurking: m,
    isGuest: f,
    isPendingMember: false
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      i.push.apply(i, n)
    }
    return i
  })(Object(i)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
  }), e)
}