/** Chunk was on 11424 **/
/** chunk id: 443877, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(t) {
  var e, i;
  let g = null == t ? true : t.guild_id,
    p = (0, n.e7)([d.Z], () => null == g || d.Z.canChatInGuild(g), [g]),
    f = (0, n.e7)([o.Z], () => null != g && o.Z.isLurking(g), [g]),
    m = (0, n.e7)([a.ZP], () => null != g && a.ZP.isCurrentUserGuest(g), [g]),
    v = (0, n.e7)([c.Z], () => p && c.Z.can(h.Plq.ADD_REACTIONS, t), [p, t]),
    O = (0, s.ux)(g),
    [, b] = (0, r.AB)(g),
    S = (0, l.$R)(t);
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
    canChat: p,
    renderReactions: true,
    canAddNewReactions: v,
    isLurking: f,
    isGuest: m,
    communicationDisabled: b,
    isActiveChannelOrUnarchivableThread: S,
    isAutomodQuarantined: O
  })), i = i = {
    isLurking: f,
    isGuest: m,
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