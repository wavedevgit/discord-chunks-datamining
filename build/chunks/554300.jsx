/** Chunk was on web.js **/
/** chunk id: 554300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk688642 = require("./688642.js"),
  Chunk481060 = require("./481060.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk241072 = require("./241072.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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

function p(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = function(e) {
  var t, {
      ref: n,
      avatar: o,
      name: f,
      nameplate: p,
      children: g,
      subText: E,
      decorators: b,
      onClick: y,
      hovered: O,
      selected: v,
      muted: I,
      to: T,
      avatarClassName: S,
      selectedClassName: A,
      innerClassName: N,
      wrapContent: C,
      highlighted: R,
      focusProps: P
    } = e,
    w = m(e, ["ref", "avatar", "name", "nameplate", "children", "subText", "decorators", "onClick", "hovered", "selected", "muted", "to", "avatarClassName", "selectedClassName", "innerClassName", "wrapContent", "highlighted", "focusProps"]);
  w.className = a()(w.className, d.container, {
    [d.selected]: v,
    [d.highlighted]: R,
    [null != A ? A : ""]: v,
    [d.clickable]: !v && (null != T || null != y)
  }), w["aria-selected"] = null != (t = w["aria-selected"]) ? t : v;
  let D = i.useRef(null),
    L = <div className={a()(d.childContainer, {
        [d.nameplated]: null != p
      })}>{<u.Z nameplate={p} hovered={O} selected={v} content={D} placement={c.i.MEMBER_LIST} />}{<div ref={D} className={a()(N, d.layout, {
          [d.muted]: !v && I,
          [d.wrappedLayout]: C
        })}>{<div className={a()(d.avatar, S)}>{o}</div>}{<div className={d.content}>{<div className={d.nameAndDecorators}>{<div className={a()(d.name, {
                [d.wrappedName]: C
              })}>{f}</div>}{b}</div>}{null != E ? <div className={d.subText}>{E}</div> : null}</div>}{null != g ? <div className={d.children}>{g}</div> : null}</div>}</div>;
  return null != T ? <l.tEY{...h(_({}, P), {
    children: (0, r.jsx)(s.rU, h(_({
      to: T,
      onClick: y
    }, w), {
      role: "listitem",
      ref: n,
      children: L
    }))
  })} /> : null != y ? <l.P3F{...h(_({
    onClick: y,
    focusProps: P
  }, w), {
    role: "listitem",
    innerRef: n,
    children: L
  })} /> : <l.tEY{...h(_({}, P), {
    children: (0, r.jsx)("div", h(_({}, w), {
      role: "listitem",
      ref: n,
      children: L
    }))
  })} />
}