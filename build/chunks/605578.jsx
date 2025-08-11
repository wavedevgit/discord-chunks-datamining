/** Chunk was on web.js **/
/** chunk id: 605578, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk204857 = require("./204857.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = Chunk73800.forwardRef(function(e, t) {
  let {
    tag: n = "div",
    children: s,
    className: c,
    style: d,
    focusProps: f,
    onClick: _,
    onDoubleClick: p,
    onContextMenu: h,
    onKeyDown: m,
    onFocus: g,
    onBlur: E,
    onMouseOver: b,
    onMouseDown: y,
    onMouseLeave: O,
    buttonProps: v,
    "aria-label": I
  } = e, T = i.useRef(null);
  return i.useImperativeHandle(t, () => T.current), <n ref={T} className={c} style={d} onClick={_} onMouseOver={b} onMouseLeave={O} onDoubleClick={p} onMouseDown={y} onContextMenu={h}>{<o.P{...u(l({}, v), {
      focusProps: l({
        ringTarget: T
      }, f),
      className: a.focusTarget,
      "aria-label": I,
      onClick: e => {
        e.stopPropagation(), null == _ || _(e)
      },
      onKeyDown: m,
      onFocus: g,
      onBlur: E,
      onMouseDown: y
    })} />}{s}</n>
})