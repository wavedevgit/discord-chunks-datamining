/** Chunk was on web.js **/
/** chunk id: 174212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998698 = require("./998698.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Map,
  _ = new Map,
  p = new Map;

function h(e) {
  if (!_.has(e)) {
    var t;
    _.set(e, {
      commandId: null == (t = c.Z.getActiveCommand(e)) ? true : t.id,
      optionName: c.Z.getActiveOptionName(e),
      optionNameToAutocompleteQueries: new Map,
      optionNameToLastResults: new Map,
      optionNameToNonce: new Map,
      optionNameToLastQuery: new Map,
      lastErrored: false,
      lastResponseNonce: true
    })
  }
  return _.get(e)
}

function m() {
  return f.clear(), _.clear(), true
}

function g(e) {
  var t;
  let {
    nonce: n,
    channelId: r,
    query: i,
    name: o
  } = e, a = h(r);
  if (a.optionNameToLastQuery.get(o) === i) returnfalse;
  a.optionNameToLastQuery.set(o, i);
  let s = null == (t = a.optionNameToAutocompleteQueries.get(o)) ? true : t.get(i);
  if (null != s) return a.lastErrored = false, a.optionNameToLastResults.set(o, s), true;
  let l = a.optionNameToNonce.get(o);
  if (null != l && f.delete(l), f.set(n, {
      channelId: r,
      query: i,
      name: o
    }), p.set(n, new Date), a.optionNameToNonce.set(o, n), a.lastErrored) return a.lastErrored = false, true
}
let E = (0, Chunk358085.isDesktop)();

function b(e) {
  var t, n, r;
  let {
    choices: i,
    nonce: o
  } = e, l = f.get(o);
  if (null == l) returnfalse;
  f.delete(o);
  let d = h(l.channelId);
  null == d.optionNameToAutocompleteQueries.get(l.name) && d.optionNameToAutocompleteQueries.set(l.name, new Map);
  let _ = E && (null == (t = c.Z.getActiveOption(l.channelId)) ? true : t.type) === a.jw.INTEGER,
    m = null != (r = null == i ? true : i.map(e => {
      let {
        value: t,
        name_localized: n,
        name: r
      } = e;
      return {
        displayName: null != n ? n : r,
        name: r,
        value: t = _ ? Number(t) : t
      }
    })) ? r : [],
    g = p.get(o),
    b = null != g ? new Date().getTime() - g.getTime() : 0;
  return (0, s.yw)(u.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
    duration_ms: b,
    error: false,
    num_options: m.length
  }), p.delete(o), null == (n = d.optionNameToAutocompleteQueries.get(l.name)) || n.set(l.query, m), d.optionNameToLastQuery.get(l.name) === l.query && (d.lastErrored = false, d.optionNameToLastResults.set(l.name, m)), d.lastResponseNonce = o, true
}

function y(e) {
  let {
    nonce: t
  } = e;
  if (null == t) returnfalse;
  let n = f.get(t);
  if (null == n) returnfalse;
  f.delete(t);
  let r = p.get(t),
    i = null != r ? new Date().getTime() - r.getTime() : 0;
  return (0, s.yw)(u.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
    duration_ms: i,
    error: true
  }), p.delete(t), h(n.channelId).lastErrored = true, true
}

function O(e) {
  let {
    channelId: t,
    command: n
  } = e;
  I(t, null == n ? true : n.id)
}

function v(e) {
  let {
    channelId: t,
    command: n
  } = e;
  I(t, null == n ? true : n.id)
}

function I(e, t) {
  let n = c.Z.getActiveOptionName(e),
    r = _.get(e);
  return null != r && (t !== r.commandId || n !== r.optionName) && (null != t && t !== r.commandId && (r.optionNameToLastResults.clear(), r.optionNameToNonce.clear(), r.optionNameToLastQuery.clear(), r.optionNameToAutocompleteQueries.clear()), r.lastErrored = false, r.commandId = t, r.optionName = n, true)
}
class T extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk998698.Z)
  }
  getLastErrored(e) {
    return h(e).lastErrored
  }
  getAutocompleteChoices(e, t, n) {
    var r;
    return null == (r = h(e).optionNameToAutocompleteQueries.get(t)) ? true : r.get(n)
  }
  getAutocompleteLastChoices(e, t) {
    return h(e).optionNameToLastResults.get(t)
  }
  getLastResponseNonce(e) {
    return h(e).lastResponseNonce
  }
}
d(T, "displayName", "ApplicationCommandAutocompleteStore");
let S = new T(Chunk570140.Z, {
  CONNECTION_OPEN: m,
  LOGOUT: m,
  CHANNEL_SELECT: m,
  APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: g,
  APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: b,
  INTERACTION_FAILURE: y,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: O,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: O,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: v
})