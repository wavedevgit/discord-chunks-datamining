/** Chunk was on web.js **/
/** chunk id: 443877, original params: e,t,n (module,exports,re quire) **/
"use strict";
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

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let t = null == e ? true : e.guild_id,
    n = (0, r.e7)([c.Z], () => null == t || c.Z.canChatInGuild(t), [t]),
    _ = (0, r.e7)([a.Z], () => null != t && a.Z.isLurking(t), [t]),
    h = (0, r.e7)([l.ZP], () => null != t && l.ZP.isCurrentUserGuest(t), [t]),
    g = (0, r.e7)([u.Z], () => n && u.Z.can(f.Plq.ADD_REACTIONS, e), [n, e]),
    E = (0, i.ux)(t),
    [, b] = (0, o.AB)(t),
    y = (0, s.$R)(e);
  if (null == e) return {
    disableReactionReads: true,
    disableReactionCreates: true,
    disableReactionUpdates: true,
    isLurking: false,
    isGuest: false,
    isPendingMember: false
  };
  let O = (0, d.Z)({
    channel: e,
    canChat: n,
    renderReactions: true,
    canAddNewReactions: g,
    isLurking: _,
    isGuest: h,
    communicationDisabled: b,
    isActiveChannelOrUnarchivableThread: y,
    isAutomodQuarantined: E
  });
  return m(p({}, O), {
    isLurking: _,
    isGuest: h,
    isPendingMember: false
  })
}