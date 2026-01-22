/** Chunk was on web.js **/
/** chunk id: 861382, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk761640 = require("./761640.js"),
  Chunk309010 = require("./309010.js"),
  Chunk168186 = require("./168186.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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
let d = {};

function f() {
  return d = {}, true
}

function p(e) {
  return e in d || (d[e] = {
    activeCommand: null,
    activeCommandSection: null,
    activeOptionName: null,
    preferredCommandId: null,
    optionStates: {},
    initialValues: {},
    commandOrigin: null
  }), d[e]
}

function _(e) {
  var t;
  let {
    channelId: n,
    command: r,
    section: i,
    initialValues: a,
    location: s,
    triggerSection: o,
    queryLength: c,
    sectionName: u,
    query: d,
    searchResultsPosition: f,
    source: _,
    commandOrigin: h
  } = e, m = p(n);
  if ((null == r ? true : r.id) === (null == (t = m.activeCommand) ? true : t.id)) returnfalse;
  m.activeCommand = r, m.activeCommandSection = i, m.activeOptionName = null, m.preferredCommandId = null, m.initialValues = null != a ? a : {}, m.commandOrigin = null != h ? h : null, m.source = _;
  let g = {};
  return (null == r ? true : r.options) != null && r.options.forEach(e => {
    g[e.name] = {
      isActive: false,
      hasValue: false,
      lastValidationResult: null,
      optionValue: null
    }
  }), m.optionStates = g, null != r && (0, l.my)({
    command: r,
    location: s,
    triggerSection: o,
    queryLength: c,
    sectionName: u,
    query: d,
    searchResultsPosition: f,
    source: _
  }), true
}

function h(e) {
  var t, n;
  let {
    channelId: r,
    commandId: i
  } = e, a = p(r);
  return i !== a.preferredCommandId && (null !== a.preferredCommandId || i !== (null != (t = null == (n = a.activeCommand) ? true : n.id) ? t : null)) && (a.activeCommand = null, a.activeOptionName = null, a.preferredCommandId = i, a.optionStates = {}, true)
}

function m(e) {
  let {
    channelId: t,
    changedOptionStates: n
  } = e, r = p(t), i = u({}, r.optionStates);
  for (let [e, t] of Object.entries(n)) {
    var a, s, o;
    if (!(e in r.optionStates)) continue;
    if (!(true !== t.hasValue ? t.hasValue : i[e].hasValue)) {
      i[e] = {
        hasValue: false,
        isActive: false,
        lastValidationResult: null,
        optionValue: null,
        location: true,
        length: true
      }, r.activeOptionName === e && (r.activeOptionName = null);
      continue
    }
    let n = i[e];
    i[e] = {
      hasValue: true,
      isActive: true !== t.isActive ? t.isActive : n.isActive,
      lastValidationResult: true !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
      optionValue: null != (a = t.optionValue) ? a : n.optionValue,
      location: null != (s = t.location) ? s : n.location,
      length: null != (o = t.length) ? o : n.length
    }, true !== t.isActive && (t.isActive ? (null != r.activeOptionName && r.activeOptionName !== e && (i[r.activeOptionName] = u({}, i[r.activeOptionName]), i[r.activeOptionName].isActive = false), r.activeOptionName = e) : e === r.activeOptionName && (r.activeOptionName = null))
  }
  return r.optionStates = i, true
}

function g(e) {
  let {
    channelId: t,
    preferredCommandId: n,
    command: r,
    section: i,
    location: a,
    changedOptionStates: s
  } = e, o = _({
    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
    channelId: t,
    command: r,
    section: i,
    location: a
  }), l = h({
    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
    channelId: t,
    commandId: n
  }), c = m({
    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
    channelId: t,
    changedOptionStates: s
  });
  return o || l || c
}
class E extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.Ay, o.A), s.Ay.addChangeListener(() => {
      let e = o.A.getChannelId();
      if (null == e) return d = {}, true;
      let t = s.Ay.getCurrentSidebarChannelId(e);
      if (null != t && t in d) returnfalse;
      d = e in d ? {
        [e]: d[e]
      } : {}
    })
  }
  getActiveCommand(e) {
    return p(e).activeCommand
  }
  getActiveCommandSection(e) {
    return p(e).activeCommandSection
  }
  getActiveOptionName(e) {
    return p(e).activeOptionName
  }
  getActiveOption(e) {
    var t, n, r;
    let i = p(e);
    return null != (t = null == (r = i.activeCommand) || null == (n = r.options) ? true : n.find(e => e.name === i.activeOptionName)) ? t : null
  }
  getPreferredCommandId(e) {
    return p(e).preferredCommandId
  }
  getOptionStates(e) {
    return p(e).optionStates
  }
  getOptionState(e, t) {
    return p(e).optionStates[t]
  }
  getCommandOrigin(e) {
    return p(e).commandOrigin
  }
  getSource(e) {
    return p(e).source
  }
  getOption(e, t) {
    var n, r;
    return null == (r = p(e).activeCommand) || null == (n = r.options) ? true : n.find(e => e.name === t)
  }
  getState(e) {
    return u({}, p(e))
  }
}
c(E, "displayName", "ApplicationCommandStore");
let b = new E(Chunk73153.h, {
  CONNECTION_OPEN: f,
  CHANNEL_SELECT: f,
  LOGOUT: f,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
  APPLICATION_COMMAND_SET_PREFERRED_COMMAND: h,
  APPLICATION_COMMAND_UPDATE_OPTIONS: m,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: g
})