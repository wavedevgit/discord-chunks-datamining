/** Chunk was on web.js **/
/** chunk id: 10718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hf: () => v,
  JT: () => I,
  Nk: () => y,
  Qm: () => C,
  VB: () => O,
  Xq: () => E,
  YZ: () => T,
  wi: () => S
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk254711 = require("./254711.js"),
  Chunk213459 = require("./213459.js"),
  Chunk367790 = require("./367790.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk689079 = require("./689079.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t, n) {
  var r, i, a, o;
  if (null == t) return {
    application: true,
    command: true
  };
  let s = l.ZP.getUserState(),
    c = l.ZP.getContextState(e),
    u = Object.values(null != (a = null == (r = s.result) ? true : r.sections) ? a : {}).concat(Object.values(null != (o = null == (i = c.result) ? true : i.sections) ? o : {}));
  if (null != n) {
    let e = u.find(e => {
      var t;
      return (null == (t = e.descriptor.application) ? true : t.id) === n
    });
    if (null != e) {
      let n = b(e, t);
      return {
        application: e.descriptor.application,
        command: n
      }
    }
  } else
    for (let e of u) {
      let n = b(e, t);
      if (null != n) return {
        application: e.descriptor.application,
        command: n
      }
    }
  return {
    application: true,
    command: true
  }
}

function b(e, t) {
  var n, r, i;
  if (null == t) return;
  if (null != e.commands[t]) return e.commands[t];
  let a = null == (n = Object.values(e.commands).find(e => {
    var n;
    return (null == (n = e.rootCommand) ? true : n.id) === t
  })) ? true : n.rootCommand;
  return null != a ? (0, d.Z8)({
    rootCommand: a,
    command: a,
    applicationId: null != (i = null == (r = e.descriptor.application) ? true : r.id) ? i : ""
  }) : true
}

function y(e, t, n) {
  var r, i, a, o, s, c, u, d;
  let f = l.ZP.getUserState(),
    p = l.ZP.getContextState(e),
    _ = l.ZP.getApplicationState(n),
    m = null != (d = null != (u = null == (i = f.result) || null == (r = i.sections) ? true : r[n]) ? u : null == (o = p.result) || null == (a = o.sections) ? true : a[n]) ? d : null == (c = _.result) || null == (s = c.sections) ? true : s[n];
  return null == m ? true : m.descriptor
}

function O(e, t, n) {
  let r = l.ZP.query(e, {
    commandTypes: [t],
    text: n
  }, {
    scoreMethod: c.p.COMMAND_OR_APPLICATION,
    allowFetch: false
  });
  return {
    commands: r.commands,
    sections: r.descriptors
  }
}

function v(e) {
  let t = l.ZP.getUserState(),
    n = l.ZP.getContextState(e);
  return [null == t ? true : t.result, null == n ? true : n.result]
}

function S(e) {
  let {
    context: t,
    filters: n,
    options: o,
    allowFetch: c
  } = e, u = "channel" === t.type ? t.channel.guild_id : null, d = (0, i.e7)([a.Z], () => a.Z.getGuild(u), [u]), {
    descriptors: _,
    commands: h,
    sectionedCommands: E,
    loading: b
  } = (0, l.JK)(t, d, n, g(m({}, o), {
    allowFetch: c
  })), [y, O] = r.useState(null), v = r.useMemo(() => {
    var e;
    return N(null != (e = o.placeholderCount) ? e : 0, n.commandTypes[0])
  }, [n.commandTypes, o.placeholderCount]);
  return r.useMemo(() => {
    let e = {
      loading: b,
      commands: h,
      activeSections: _,
      commandsByActiveSection: E,
      filteredSectionId: y,
      hasMoreAfter: false,
      placeholders: b ? v : [],
      sectionDescriptors: _,
      filterSection: e => {
        O(e)
      },
      scrollDown: p.dG4
    };
    if (null != y) {
      let t = E.find(e => e.section.id === y);
      e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
    }
    if (b) {
      let t = E[0];
      if (null != t) e.commandsByActiveSection = [{
        section: t.section,
        data: [...t.data, ...v]
      }, ...E.slice(1)];
      else {
        let t = s.Tm[f.bi.BUILT_IN];
        e.activeSections = [t], e.commandsByActiveSection = [{
          section: t,
          data: v
        }]
      }
      e.commands = [...h, ...v]
    }
    return e
  }, [b, h, _, E, y, v])
}

function I(e, t, n) {
  var r;
  let {
    descriptors: i,
    commands: a,
    loading: o
  } = l.ZP.query(e, t, n), c = N(o && null != (r = n.placeholderCount) ? r : 0, t.commandTypes[0]);
  return {
    commands: o ? [...a, ...c] : a,
    sections: o && 0 === i.length ? [s.Tm[f.bi.BUILT_IN]] : i
  }
}

function T(e, t) {
  let n = (0, l.PL)(true, true),
    i = (0, l.em)(e, true, true);
  return r.useMemo(() => {
    if (null != t) {
      var e, r, a, o;
      for (let s of Object.values(null != (a = null == (e = n.result) ? true : e.sections) ? a : {}).concat(Object.values(null != (o = null == (r = i.result) ? true : r.sections) ? o : {}))) {
        let e = s.commands[t];
        if (null != e) return {
          command: e,
          application: s.descriptor.application
        }
      }
    }
    return {
      command: true,
      application: true
    }
  }, [i.result, n.result, t])
}

function C(e, t, n) {
  let i = (0, l.PL)(true, true),
    a = (0, l.em)(e, true, true);
  return r.useMemo(() => {
    var e, r, s, l, c, u;
    let f = null != (c = null == (r = i.result) || null == (e = r.sections) ? true : e[t]) ? c : null == (s = a.result) ? true : s.sections[t],
      p = Object.values(null != (u = null == f ? true : f.commands) ? u : {}).map(e => null == e.rootCommand ? e : (0, d.Z8)({
        rootCommand: e.rootCommand,
        command: e.rootCommand,
        applicationId: e.applicationId
      })).reduce((e, t) => (e[t.id] = t, e), {});
    return {
      application: null == f || null == (l = f.descriptor) ? true : l.application,
      commands: n.map(e => p[e]).filter(o.lm)
    }
  }, [null == i ? true : i.result, null == a ? true : a.result, t, n])
}
let A = {
  id: "placeholder-section",
  type: Chunk895924.Qi.APPLICATION,
  name: ""
};

function N(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(P(r, t));
  return n
}

function P(e, t) {
  return {
    type: t,
    inputType: u.iw.PLACEHOLDER,
    id: "placeholder-".concat(e),
    untranslatedName: "",
    displayName: "",
    untranslatedDescription: "",
    displayDescription: "",
    applicationId: "",
    section: A
  }
}