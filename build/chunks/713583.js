/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => g
}), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(239091),
  l = n(962293),
  c = n(555573),
  u = n(665692),
  d = n(388032),
  f = n(81923);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
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
  let o, p, h, {
      className: g,
      activeCommand: E,
      activeOption: v,
      optionStates: b,
      channelId: y
    } = e,
    O = i.useCallback(e => {
      var t;
      let i = null == E ? void 0 : null === (t = E.rootCommand) || void 0 === t ? void 0 : t.id;
      if (null == i) {
        e.preventDefault();
        return
      }(0, s.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, r.jsx)(e, m(_({}, t), {
          id: i,
          label: d.NW.string(d.t.oJ1Mu7)
        }))
      })
    }, [null == E ? void 0 : null === (t = E.rootCommand) || void 0 === t ? void 0 : t.id]),
    S = i.useCallback(() => {
      c.Po({
        channelId: y,
        command: null,
        section: null
      })
    }, [y]);
  if (null == E) return null;
  if (null != v) {
    let e = b[v.name].lastValidationResult;
    o = v.displayName, p = v.displayDescription, h = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error
  } else o = "".concat(u.GI).concat(E.displayName), p = E.displayDescription, h = null;
  return (0, r.jsxs)("div", {
    className: a()(g, f.bar),
    onContextMenu: O,
    children: [(0, r.jsxs)("div", {
      className: f.commandInfo,
      children: [(0, r.jsx)("span", {
        className: f.name,
        children: o
      }), null != h ? (0, r.jsx)("span", {
        className: f.error,
        children: h
      }) : (0, r.jsx)("span", {
        className: f.description,
        children: p
      })]
    }), (0, r.jsx)("div", {
      className: f.actions,
      children: (0, r.jsx)(l.B, {
        onClick: S
      })
    })]
  })
}