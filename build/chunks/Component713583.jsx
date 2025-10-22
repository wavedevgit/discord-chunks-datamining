/** Chunk was on web.js **/
/** chunk id: 713583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk239091 = require("./239091.js"),
  Chunk962293 = require("./962293.jsx"),
  Chunk555573 = require("./555573.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk873105 = require("./873105.js");

function _(e, t, n) {
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  var t;
  let a, _, h, {
      className: g,
      activeCommand: E,
      activeOption: b,
      optionStates: y,
      channelId: O
    } = e,
    v = i.useCallback(e => {
      var t;
      let i = null == E || null == (t = E.rootCommand) ? true : t.id;
      if (null == i) return void e.preventDefault();
      (0, s.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, r.jsx)(e, m(p({}, t), {
          id: i,
          label: d.intl.string(d.t.oJ1Muw)
        }))
      })
    }, [null == E || null == (t = E.rootCommand) ? true : t.id]),
    I = i.useCallback(() => {
      c.Po({
        channelId: O,
        command: null,
        section: null
      })
    }, [O]);
  if (null == E) return null;
  if (null != b) {
    let e = y[b.name].lastValidationResult;
    a = b.displayName, _ = b.displayDescription, h = (null == e ? true : e.success) ? null : null == e ? true : e.error
  } else a = "".concat(u.GI).concat(E.displayName), _ = E.displayDescription, h = null;
  return (0, r.jsxs)("div", {
    className: o()(g, f.bar),
    onContextMenu: v,
    children: [(0, r.jsxs)("div", {
      className: f.commandInfo,
      children: [(0, r.jsx)("span", {
        className: f.name,
        children: a
      }), null != h ? (0, r.jsx)("span", {
        className: f.error,
        children: h
      }) : (0, r.jsx)("span", {
        className: f.description,
        children: _
      })]
    }), (0, r.jsx)("div", {
      className: f.actions,
      children: (0, r.jsx)(l.B, {
        onClick: I
      })
    })]
  })
}