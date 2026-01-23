/** Chunk was on web.js **/
/** chunk id: 842209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D3: () => S,
  DP: () => T,
  EW: () => E,
  cu: () => A,
  eW: () => I,
  j8: () => v,
  s$: () => b,
  v7: () => O
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk403362 = require("./403362.js"),
  Chunk827785 = require("./827785.js"),
  Chunk264322 = require("./264322.js"),
  Chunk210978 = require("./210978.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk73510 = require("./73510.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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

function m(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t, n) {
  var r, i, a, s;
  if (null == t) return {
    application: true,
    command: true
  };
  let o = l.Ay.getUserState(),
    c = l.Ay.getContextState(e),
    u = Object.values(null != (r = null == (a = o.result) ? true : a.sections) ? r : {}).concat(Object.values(null != (i = null == (s = c.result) ? true : s.sections) ? i : {}));
  if (null != n) {
    let e = u.find(e => {
      var t;
      return (null == (t = e.descriptor.application) ? true : t.id) === n
    });
    if (null != e) {
      let n = y(e, t);
      return {
        application: e.descriptor.application,
        command: n
      }
    }
  } else
    for (let e of u) {
      let n = y(e, t);
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

function y(e, t) {
  var n, r, i;
  if (null == t) return;
  if (null != e.commands[t]) return e.commands[t];
  let a = null == (r = Object.values(e.commands).find(e => {
    var n;
    return (null == (n = e.rootCommand) ? true : n.id) === t
  })) ? true : r.rootCommand;
  return null != a ? (0, d.Oe)({
    rootCommand: a,
    command: a,
    applicationId: null != (n = null == (i = e.descriptor.application) ? true : i.id) ? n : ""
  }) : true
}

function b(e, t, n) {
  var r, i, a, s, o, c, u, d;
  let f = l.Ay.getUserState(),
    p = l.Ay.getContextState(e),
    _ = l.Ay.getApplicationState(n),
    h = null != (r = null != (i = null == (s = f.result) || null == (a = s.sections) ? true : a[n]) ? i : null == (c = p.result) || null == (o = c.sections) ? true : o[n]) ? r : null == (d = _.result) || null == (u = d.sections) ? true : u[n];
  return null == h ? true : h.descriptor
}

function O(e, t, n) {
  let r = l.Ay.query(e, {
    commandTypes: [t],
    text: n
  }, {
    scoreMethod: c.M.COMMAND_OR_APPLICATION,
    allowFetch: false
  });
  return {
    commands: r.commands,
    sections: r.descriptors
  }
}

function v(e) {
  let t = l.Ay.getUserState(),
    n = l.Ay.getContextState(e);
  return [null == t ? true : t.result, null == n ? true : n.result]
}

function A(e) {
  let {
    context: t,
    filters: n,
    options: s,
    allowFetch: c
  } = e, u = "channel" === t.type ? t.channel.guild_id : null, d = (0, i.bG)([a.A], () => a.A.getGuild(u), [u]), {
    descriptors: _,
    commands: m,
    sectionedCommands: E,
    loading: y
  } = (0, l.XC)(t, d, n, g(h({}, s), {
    allowFetch: c
  })), [b, O] = r.useState(null), v = r.useMemo(() => {
    var e;
    return N(null != (e = s.placeholderCount) ? e : 0, n.commandTypes[0])
  }, [n.commandTypes, s.placeholderCount]);
  return r.useMemo(() => {
    let e = {
      loading: y,
      commands: m,
      activeSections: _,
      commandsByActiveSection: E,
      filteredSectionId: b,
      hasMoreAfter: false,
      placeholders: y ? v : [],
      sectionDescriptors: _,
      filterSection: e => {
        O(e)
      },
      scrollDown: p.tEg
    };
    if (null != b) {
      let t = E.find(e => e.section.id === b);
      e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
    }
    if (y) {
      let t = E[0];
      if (null != t) e.commandsByActiveSection = [{
        section: t.section,
        data: [...t.data, ...v]
      }, ...E.slice(1)];
      else {
        let t = o.gZ[f.Ik.BUILT_IN];
        e.activeSections = [t], e.commandsByActiveSection = [{
          section: t,
          data: v
        }]
      }
      e.commands = [...m, ...v]
    }
    return e
  }, [y, m, _, E, b, v])
}

function I(e, t, n) {
  var r;
  let {
    descriptors: i,
    commands: a,
    loading: s
  } = l.Ay.query(e, t, n), c = N(s && null != (r = n.placeholderCount) ? r : 0, t.commandTypes[0]);
  return {
    commands: s ? [...a, ...c] : a,
    sections: s && 0 === i.length ? [o.gZ[f.Ik.BUILT_IN]] : i
  }
}

function S(e, t) {
  let n = (0, l.A4)(true, true),
    i = (0, l.SD)(e, true, true);
  return r.useMemo(() => {
    if (null != t) {
      var e, r, a, s;
      for (let o of Object.values(null != (e = null == (a = n.result) ? true : a.sections) ? e : {}).concat(Object.values(null != (r = null == (s = i.result) ? true : s.sections) ? r : {}))) {
        let e = o.commands[t];
        if (null != e) return {
          command: e,
          application: o.descriptor.application
        }
      }
    }
    return {
      command: true,
      application: true
    }
  }, [i.result, n.result, t])
}

function T(e, t, n) {
  let i = (0, l.A4)(true, true),
    a = (0, l.SD)(e, true, true);
  return r.useMemo(() => {
    var e, r, o, l, c, u;
    let f = null != (e = null == (l = i.result) || null == (o = l.sections) ? true : o[t]) ? e : null == (c = a.result) ? true : c.sections[t],
      p = Object.values(null != (r = null == f ? true : f.commands) ? r : {}).map(e => null == e.rootCommand ? e : (0, d.Oe)({
        rootCommand: e.rootCommand,
        command: e.rootCommand,
        applicationId: e.applicationId
      })).reduce((e, t) => (e[t.id] = t, e), {});
    return {
      application: null == f || null == (u = f.descriptor) ? true : u.application,
      commands: n.map(e => p[e]).filter(s.Vq)
    }
  }, [null == i ? true : i.result, null == a ? true : a.result, t, n])
}
let C = {
  id: "placeholder-section",
  type: Chunk392054.Hf.APPLICATION,
  name: ""
};

function N(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(R(r, t));
  return n
}

function R(e, t) {
  return {
    type: t,
    inputType: u.y$.PLACEHOLDER,
    id: "placeholder-".concat(e),
    untranslatedName: "",
    displayName: "",
    untranslatedDescription: "",
    displayDescription: "",
    applicationId: "",
    section: C
  }
}