/** Chunk was on web.js **/
/** chunk id: 619895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => h,
  h: () => m
}), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk228458 = require("./228458.js"),
  Chunk442837 = require("./442837.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk823379 = require("./823379.js"),
  Chunk399654 = require("./399654.js"),
  Chunk844439 = require("./844439.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    contentType: t
  } = e;
  switch (t) {
    case "image/jpeg":
    case "image/jpg":
      return ".jpg";
    case "image/png":
    case "image/apng":
      return ".png";
    case "image/webp":
      return ".webp";
    default:
      return ""
  }
}

function m(e) {
  let {
    channelId: t
  } = e, {
    fetchState: n,
    recommendationsSections: i
  } = g({
    channelId: t
  });
  return {
    fetchState: n,
    imageRecCommandContexts: r.useMemo(() => {
      let e = i.length > 0 ? i[0].items : true;
      if (true === e) return [];
      let t = {};
      return e.forEach(e => {
        var n;
        let r = null != (n = e.command_metadata) ? n : {};
        Object.keys(r).forEach(e => {
          t[e] = r[e]
        })
      }), Object.keys(t).map(t => {
        var n, r, i, o, l, c, u, d, _, h, m, g;
        let E, b, y = e.find(e => {
          var n;
          return null != (E = null == (n = e.commands) ? true : n.find(e => e.id === t))
        });
        if (null == y) return null;
        let {
          application: O
        } = y;
        if (null == E) return null;
        let v = (0, s.Z8)({
            rootCommand: E,
            command: E,
            applicationId: O.id
          }),
          I = null == (i = y.command_metadata) || null == (r = i[t]) || null == (n = r.overrideSendCommandInfo) ? true : n.commandId;
        if (null != I) {
          let e = null != I ? null == (m = y.commands) ? true : m.find(e => e.id === I) : true;
          null != e && (b = (0, s.Z8)({
            rootCommand: e,
            command: e,
            applicationId: O.id
          }))
        }
        return {
          command: p(f({}, v), {
            displayName: v.displayName.split(/[_ ]/).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
          }),
          imageOption: null == (l = y.command_metadata) || null == (o = l[t]) ? true : o.imageOption,
          overrideSendCommand: b,
          overrideSendCommandInfo: null == (u = y.command_metadata) || null == (c = u[t]) ? true : c.overrideSendCommandInfo,
          onlyAllowEdit: null == (_ = y.command_metadata) || null == (d = _[t]) ? true : d.onlyAllowEdit,
          section: {
            type: a.Qi.APPLICATION,
            id: O.id,
            icon: O.icon,
            name: null != (g = null == O || null == (h = O.bot) ? true : h.username) ? g : O.name,
            application: O
          }
        }
      }).filter(l.lm)
    }, [i])
  }
}

function g(e) {
  let {
    channelId: t
  } = e, n = i.I.CONTEXTUAL_IMAGE, a = r.useMemo(() => ({
    channelId: t,
    location: n,
    withCommands: true
  }), [t, n]);
  r.useEffect(() => {
    (0, c.a)(a)
  }, [a]);
  let {
    fetchState: s,
    recommendationsSections: l
  } = (0, o.cj)([u.ZP], () => ({
    fetchState: u.ZP.getFetchState(a),
    recommendationsSections: u.ZP.getRecommendations(a)
  }));
  return {
    fetchState: s,
    recommendationsSections: l
  }
}