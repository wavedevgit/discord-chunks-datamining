/** Chunk was on web.js **/
/** chunk id: 408557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk442433 = require("./442433.js"),
  Chunk927057 = require("./927057.jsx"),
  Chunk721768 = require("./721768.js");
require("./827669.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk947941 = require("./947941.js");

function f(e, t, n) {
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
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  var t;
  let a, f, _, {
      className: m,
      activeCommand: g,
      activeOption: E,
      optionStates: y,
      channelId: b
    } = e,
    O = i.useCallback(e => {
      var t;
      let i = null == g || null == (t = g.rootCommand) ? true : t.id;
      null == i ? e.preventDefault() : (0, s.L3)(e, async () => {
        let {
          default: e
        } = await n.e("15687").then(n.bind(n, 646938));
        return t => (0, r.jsx)(e, h(p({}, t), {
          id: i,
          label: u.intl.string(u.t.oJ1Muw)
        }))
      })
    }, [null == g || null == (t = g.rootCommand) ? true : t.id]),
    v = i.useCallback(() => {
      c.Gf({
        channelId: b,
        command: null,
        section: null
      })
    }, [b]);
  if (null == g) return null;
  if (null != E) {
    let e = y[E.name].lastValidationResult;
    a = E.displayName, f = E.displayDescription, _ = (null == e ? true : e.success) ? null : null == e ? true : e.error
  } else a = "".concat("/").concat(g.displayName), f = g.displayDescription, _ = null;
  return (0, r.jsxs)("div", {
    className: o()(m, d.M0),
    onContextMenu: O,
    children: [(0, r.jsxs)("div", {
      className: d.iz,
      children: [(0, r.jsx)("span", {
        className: d.UU,
        children: a
      }), null != _ ? (0, r.jsx)("span", {
        className: d.z3,
        children: _
      }) : (0, r.jsx)("span", {
        className: d.h_,
        children: f
      })]
    }), (0, r.jsx)("div", {
      className: d.o1,
      children: (0, r.jsx)(l.x, {
        onClick: v
      })
    })]
  })
}