/** Chunk was on web.js **/
/** chunk id: 962086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Zm: () => S,
  aq: () => P,
  iD: () => v,
  mL: () => I,
  og: () => N,
  zS: () => A
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk626135 = require("./626135.js"),
  Chunk160404 = require("./160404.js"),
  Chunk225675 = require("./225675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  p.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, O(b({
    num_roles: Object.keys(t.roles).length
  }, (0, i.hH)(e)), {
    is_viewing_as_member: t.type === h.z.NEW_MEMBER
  })), r.Z.dispatch({
    type: "IMPERSONATE_UPDATE",
    guildId: e,
    data: t
  }), T(e)
}

function S(e, t) {
  let n = _.Z.getData(e);
  null != n && n.type === t.type && (p.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, O(b({
    num_roles: Object.keys(n.roles).length
  }, (0, i.hH)(e)), {
    is_viewing_as_member: n.type === h.z.NEW_MEMBER
  })), r.Z.dispatch({
    type: "IMPERSONATE_UPDATE",
    guildId: e,
    data: b({}, n, t)
  }), T(e))
}

function I(e) {
  r.Z.dispatch({
    type: "IMPERSONATE_STOP",
    guildId: e
  })
}

function T(e) {
  let t = d.Z.getChannelId(e),
    n = o.Z.getChannel(t);
  if (!(null != t && (0, g.AB)(t)) && !u.Z.can(m.Plq.VIEW_CHANNEL, n)) {
    let t = s.ZP.getDefaultChannel(e);
    null != t && (0, a.uL)(m.Z5c.CHANNEL(e, t.id))
  }
}

function C(e, t) {
  let n = [...s.ZP.getSelectableChannelIds(e), ...s.ZP.getVocalChannelIds(e)],
    r = Array.from(t);
  s.ZP.addConditionalChangeListener(() => {
    let t = l.ZP.getSelfMember(e);
    if (null == t) returnfalse;
    if (r.some(e => !t.roles.includes(e))) returntrue;
    let i = [...s.ZP.getSelectableChannelIds(e), ...s.ZP.getVocalChannelIds(e)].filter(e => !n.includes(e));
    return i.length > 0 && A(e, i, []), false
  })
}

function A(e, t, n) {
  let r = new Set(f.ZP.getOptedInChannels(e));
  t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), S(e, {
    type: h.z.NEW_MEMBER,
    optInChannels: r
  })
}

function N(e, t) {
  C(e, t);
  let n = {};
  for (let r of c.Z.getManyRoles(e, t)) n[r.id] = r;
  S(e, {
    type: h.z.NEW_MEMBER,
    roles: n
  })
}

function P(e, t) {
  S(e, b({
    type: h.z.NEW_MEMBER
  }, t))
}