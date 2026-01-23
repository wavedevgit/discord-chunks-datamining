/** Chunk was on web.js **/
/** chunk id: 166862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk58149 = require("./58149.js"),
  Chunk723702 = require("./723702.js"),
  Chunk861382 = require("./861382.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Map,
  p = new Map,
  _ = new Map;

function h(e) {
  if (!p.has(e)) {
    var t;
    p.set(e, {
      commandId: null == (t = c.A.getActiveCommand(e)) ? true : t.id,
      optionName: c.A.getActiveOptionName(e),
      optionNameToAutocompleteQueries: new Map,
      optionNameToLastResults: new Map,
      optionNameToNonce: new Map,
      optionNameToLastQuery: new Map,
      lastErrored: false,
      lastResponseNonce: true
    })
  }
  return p.get(e)
}

function m() {
  return f.clear(), p.clear(), true
}

function g(e) {
  var t;
  let {
    nonce: n,
    channelId: r,
    query: i,
    name: a
  } = e, s = h(r);
  if (s.optionNameToLastQuery.get(a) === i) returnfalse;
  s.optionNameToLastQuery.set(a, i);
  let o = null == (t = s.optionNameToAutocompleteQueries.get(a)) ? true : t.get(i);
  if (null != o) return s.lastErrored = false, s.optionNameToLastResults.set(a, o), true;
  let l = s.optionNameToNonce.get(a);
  if (null != l && f.delete(l), f.set(n, {
      channelId: r,
      query: i,
      name: a
    }), _.set(n, new Date), s.optionNameToNonce.set(a, n), s.lastErrored) return s.lastErrored = false, true
}
let E = (0, Chunk723702.isDesktop)();

function y(e) {
  var t, n, r;
  let {
    choices: i,
    nonce: a
  } = e, l = f.get(a);
  if (null == l) returnfalse;
  f.delete(a);
  let d = h(l.channelId);
  null == d.optionNameToAutocompleteQueries.get(l.name) && d.optionNameToAutocompleteQueries.set(l.name, new Map);
  let p = E && (null == (n = c.A.getActiveOption(l.channelId)) ? true : n.type) === s.n4.INTEGER,
    m = null != (t = null == i ? true : i.map(e => {
      let {
        value: t,
        name_localized: n,
        name: r
      } = e;
      return {
        displayName: null != n ? n : r,
        name: r,
        value: t = p ? Number(t) : t
      }
    })) ? t : [],
    g = _.get(a),
    y = null != g ? new Date().getTime() - g.getTime() : 0;
  return (0, o.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
    duration_ms: y,
    error: false,
    num_options: m.length
  }), _.delete(a), null == (r = d.optionNameToAutocompleteQueries.get(l.name)) || r.set(l.query, m), d.optionNameToLastQuery.get(l.name) === l.query && (d.lastErrored = false, d.optionNameToLastResults.set(l.name, m)), d.lastResponseNonce = a, true
}

function b(e) {
  let {
    nonce: t
  } = e;
  if (null == t) returnfalse;
  let n = f.get(t);
  if (null == n) returnfalse;
  f.delete(t);
  let r = _.get(t),
    i = null != r ? new Date().getTime() - r.getTime() : 0;
  return (0, o.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
    duration_ms: i,
    error: true
  }), _.delete(t), h(n.channelId).lastErrored = true, true
}

function O(e) {
  let {
    channelId: t,
    command: n
  } = e;
  A(t, null == n ? true : n.id)
}

function v(e) {
  let {
    channelId: t,
    command: n
  } = e;
  A(t, null == n ? true : n.id)
}

function A(e, t) {
  let n = c.A.getActiveOptionName(e),
    r = p.get(e);
  return null != r && (t !== r.commandId || n !== r.optionName) && (null != t && t !== r.commandId && (r.optionNameToLastResults.clear(), r.optionNameToNonce.clear(), r.optionNameToLastQuery.clear(), r.optionNameToAutocompleteQueries.clear()), r.lastErrored = false, r.commandId = t, r.optionName = n, true)
}
class I extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A)
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
d(I, "displayName", "ApplicationCommandAutocompleteStore");
let S = new I(Chunk73153.h, {
  CONNECTION_OPEN: m,
  LOGOUT: m,
  CHANNEL_SELECT: m,
  APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: g,
  APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: y,
  INTERACTION_FAILURE: b,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: O,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: O,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: v
})