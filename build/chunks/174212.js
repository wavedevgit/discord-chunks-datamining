/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120);
var r, i = n(442837),
  o = n(570140),
  a = n(367907),
  s = n(998698),
  l = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = new Map,
  _ = new Map,
  h = new Map;

function m(e) {
  if (!_.has(e)) {
    var t;
    _.set(e, {
      commandId: null === (t = s.Z.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
      optionName: s.Z.getActiveOptionName(e),
      optionNameToAutocompleteQueries: new Map,
      optionNameToLastResults: new Map,
      optionNameToNonce: new Map,
      optionNameToLastQuery: new Map,
      lastErrored: !1,
      lastResponseNonce: void 0
    })
  }
  return _.get(e)
}

function g() {
  return p.clear(), _.clear(), !0
}

function E(e) {
  var t;
  let {
    nonce: n,
    channelId: r,
    query: i,
    name: o
  } = e, a = m(r);
  if (a.optionNameToLastQuery.get(o) === i) return !1;
  a.optionNameToLastQuery.set(o, i);
  let s = null === (t = a.optionNameToAutocompleteQueries.get(o)) || void 0 === t ? void 0 : t.get(i);
  if (null != s) return a.lastErrored = !1, a.optionNameToLastResults.set(o, s), !0;
  let l = a.optionNameToNonce.get(o);
  if (null != l && p.delete(l), p.set(n, {
      channelId: r,
      query: i,
      name: o
    }), h.set(n, new Date), a.optionNameToNonce.set(o, n), a.lastErrored) return a.lastErrored = !1, !0
}

function v(e) {
  var t, n;
  let {
    choices: r,
    nonce: i
  } = e, o = p.get(i);
  if (null == o) return !1;
  p.delete(i);
  let s = null !== (n = null == r ? void 0 : r.map(e => {
      var t;
      return f(u({}, e), {
        displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
      })
    })) && void 0 !== n ? n : [],
    c = h.get(i),
    d = null != c ? new Date().getTime() - c.getTime() : 0;
  (0, a.yw)(l.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
    duration_ms: d,
    error: !1,
    num_options: s.length
  }), h.delete(i);
  let _ = m(o.channelId);
  return null == _.optionNameToAutocompleteQueries.get(o.name) && _.optionNameToAutocompleteQueries.set(o.name, new Map), null === (t = _.optionNameToAutocompleteQueries.get(o.name)) || void 0 === t || t.set(o.query, s), _.optionNameToLastQuery.get(o.name) === o.query && (_.lastErrored = !1, _.optionNameToLastResults.set(o.name, s)), _.lastResponseNonce = i, !0
}

function b(e) {
  let {
    nonce: t
  } = e;
  if (null == t) return !1;
  let n = p.get(t);
  if (null == n) return !1;
  p.delete(t);
  let r = h.get(t),
    i = null != r ? new Date().getTime() - r.getTime() : 0;
  return (0, a.yw)(l.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
    duration_ms: i,
    error: !0
  }), h.delete(t), m(n.channelId).lastErrored = !0, !0
}

function y(e) {
  let {
    channelId: t,
    command: n
  } = e;
  S(t, null == n ? void 0 : n.id)
}

function O(e) {
  let {
    channelId: t,
    command: n
  } = e;
  S(t, null == n ? void 0 : n.id)
}

function S(e, t) {
  let n = s.Z.getActiveOptionName(e),
    r = _.get(e);
  return null != r && (t !== r.commandId || n !== r.optionName) && (null != t && t !== r.commandId && (r.optionNameToLastResults.clear(), r.optionNameToNonce.clear(), r.optionNameToLastQuery.clear(), r.optionNameToAutocompleteQueries.clear()), r.lastErrored = !1, r.commandId = t, r.optionName = n, !0)
}
class I extends(r = i.ZP.Store) {
  initialize() {
    this.waitFor(s.Z)
  }
  getLastErrored(e) {
    return m(e).lastErrored
  }
  getAutocompleteChoices(e, t, n) {
    var r;
    return null === (r = m(e).optionNameToAutocompleteQueries.get(t)) || void 0 === r ? void 0 : r.get(n)
  }
  getAutocompleteLastChoices(e, t) {
    return m(e).optionNameToLastResults.get(t)
  }
  getLastResponseNonce(e) {
    return m(e).lastResponseNonce
  }
}
c(I, "displayName", "ApplicationCommandAutocompleteStore");
let T = new I(o.Z, {
  CONNECTION_OPEN: g,
  LOGOUT: g,
  CHANNEL_SELECT: g,
  APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: E,
  APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: v,
  INTERACTION_FAILURE: b,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: y,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: y,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: O
})