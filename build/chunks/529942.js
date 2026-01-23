/** Chunk was on web.js **/
/** chunk id: 529942, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $u: () => C,
  IA: () => A,
  ID: () => N,
  Tk: () => v,
  Z$: () => R,
  rf: () => I
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk58149 = require("./58149.js"),
  Chunk976860 = require("./976860.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk954571 = require("./954571.js"),
  Chunk164956 = require("./164956.js"),
  Chunk209700 = require("./209700.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function b(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  p.default.track(m.HAw.VIEW_AS_ROLES_SELECTED, O(y({
    num_roles: Object.keys(t.roles).length
  }, (0, i.H$)(e)), {
    is_viewing_as_member: t.type === h._.NEW_MEMBER
  })), r.h.dispatch({
    type: "IMPERSONATE_UPDATE",
    guildId: e,
    data: t
  }), S(e)
}

function A(e, t) {
  let n = _.A.getData(e);
  null != n && n.type === t.type && (p.default.track(m.HAw.VIEW_AS_ROLES_SELECTED, O(y({
    num_roles: Object.keys(n.roles).length
  }, (0, i.H$)(e)), {
    is_viewing_as_member: n.type === h._.NEW_MEMBER
  })), r.h.dispatch({
    type: "IMPERSONATE_UPDATE",
    guildId: e,
    data: y({}, n, t)
  }), S(e))
}

function I(e) {
  r.h.dispatch({
    type: "IMPERSONATE_STOP",
    guildId: e
  })
}

function S(e) {
  let t = d.A.getChannelId(e),
    n = s.A.getChannel(t);
  if (!(null != t && (0, g.jq)(t)) && !u.A.can(m.xBc.VIEW_CHANNEL, n)) {
    let t = o.Ay.getDefaultChannel(e);
    null != t && (0, a.pX)(m.BVt.CHANNEL(e, t.id))
  }
}

function T(e, t) {
  let n = [...o.Ay.getSelectableChannelIds(e), ...o.Ay.getVocalChannelIds(e)],
    r = Array.from(t);
  o.Ay.addConditionalChangeListener(() => {
    let t = l.Ay.getSelfMember(e);
    if (null == t) returnfalse;
    if (r.some(e => !t.roles.includes(e))) returntrue;
    let i = [...o.Ay.getSelectableChannelIds(e), ...o.Ay.getVocalChannelIds(e)].filter(e => !n.includes(e));
    return i.length > 0 && C(e, i, []), false
  })
}

function C(e, t, n) {
  let r = new Set(f.Ay.getOptedInChannels(e));
  t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), A(e, {
    type: h._.NEW_MEMBER,
    optInChannels: r
  })
}

function N(e, t) {
  T(e, t);
  let n = {};
  for (let r of c.A.getManyRoles(e, t)) n[r.id] = r;
  A(e, {
    type: h._.NEW_MEMBER,
    roles: n
  })
}

function R(e, t) {
  A(e, y({
    type: h._.NEW_MEMBER
  }, t))
}