/** Chunk was on web.js **/
/** chunk id: 350535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cy: () => C,
  OH: () => k,
  Qd: () => T,
  Xt: () => G,
  Z0: () => v,
  _$: () => I,
  dI: () => U,
  pi: () => j,
  sg: () => V
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./65821.js"), require("./321073.js"), require("./733351.js");
var Chunk695497 = require("./695497.js"),
  i = require.n(Chunk695497),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk775121 = require("./775121.js"),
  Chunk403362 = require("./403362.js"),
  Chunk723702 = require("./723702.js"),
  Chunk316501 = require("./316501.js"),
  Chunk650583 = require("./650583.js");

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
let m = __OVERLAY__ ? Chunk650583.Nu : (0, Chunk723702.isLinux)() ? Chunk650583.C8 : (0, Chunk723702.isMac)() ? Chunk650583.V8 : (0, Chunk723702.isWindows)() ? Chunk650583.Nu : {},
  g = o().invert(Chunk650583.C8);
g["223"] = "`", Object.freeze(g);
let E = Object.freeze(o().invert(Chunk650583.V8)),
  y = o().invert(Chunk650583.Nu);
y["223"] = "`", Object.freeze(y);
let b = o().invert(null != m ? m : {});

function O(e) {
  return "+" === e ? "plus" : e
}

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : I();
  return t === d.g$.BROWSER ? i()(e) : m[e]
}

function A(e, t, n) {
  if (null != n && n !== d.g$.WINDOWS || !u.Kh.has(e)) return t;
  let r = (0, u.Ze)().get("Backquote");
  if (t === r) return O(t);
  let i = {
      key: r,
      code: "Backquote",
      keyCode: e
    },
    a = (0, u.sv)(i);
  return "\\" === t && "`" === r ? t : null == a ? O(null != r ? r : t) : O(a.key)
}

function I() {
  return (0, c.isLinux)() ? d.g$.LINUX : (0, c.isMac)() ? d.g$.MACOS : (0, c.isWindows)() ? d.g$.WINDOWS : __OVERLAY__ ? d.g$.WINDOWS : d.g$.BROWSER
}

function S(e) {
  let t, [, n, r] = e;
  switch (r) {
    case d.g$.LINUX:
      t = g["" + n];
      break;
    case d.g$.MACOS:
      t = E["" + n];
      break;
    case d.g$.WINDOWS:
      t = y["" + n];
      break;
    case d.g$.BROWSER: {
      let e = i()(n);
      if (null == e) return null;
      t = N(e);
      break
    }
    default:
      t = b["" + n]
  }
  return null != t ? t : null
}

function T(e) {
  let [, t, n] = e, r = S(e);
  if (null != r) return A(t, r, n);
  let i = (0, u.Pk)(t);
  return null != i ? A(i.keyCode, i.key, n) : null
}

function C(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : I(),
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY,
    r = w(e, t, n);
  if (null != r) return r;
  let i = (0, u.Q_)(e);
  return null != i ? i.keyCode : null
}

function N(e) {
  let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
  return "pause" === t || "break" === t ? "pause/break" : t
}

function w(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : I(),
    r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY;
  if (null == e) return null;
  let a = r === d.zY.KEYBOARD_KEY || r === d.zY.KEYBOARD_MODIFIER_KEY;
  switch (true) {
    case a && n === d.g$.LINUX:
      t = d.C8[e];
      break;
    case a && n === d.g$.MACOS:
      t = d.V8[e];
      break;
    case a && n === d.g$.WINDOWS:
      t = "+" === e ? d.Nu.plus : d.Nu[e];
      break;
    case a && n === d.g$.BROWSER:
      t = i()(N(e));
      break;
    case a:
      t = m[e];
      break;
    case r === d.zY.MOUSE_BUTTON:
      t = parseInt(e.replace("MOUSE", ""), 10);
      break;
    case r === d.zY.GAMEPAD_BUTTON:
      t = parseInt(e.replace("GAMEPAD", ""), 10);
      break;
    default:
      throw Error("Unrecognized DeviceType ".concat(r, "."))
  }
  return null != t ? t : null
}(0, Chunk723702.isMac)() || (b["223"] = "`"), Object.freeze(b);
let R = [
    ["META", "⌘"],
    ["CMD", "⌘"],
    ["RIGHT META", "RIGHT ⌘"],
    ["RIGHT CMD", "RIGHT ⌘"],
    ["SHIFT", "⇧"],
    ["RIGHT SHIFT", "RIGHT ⇧"],
    ["ALT", "⌥"],
    ["RIGHT ALT", "RIGHT ⌥"],
    ["CTRL", "⌃"],
    ["RIGHT CTRL", "RIGHT ⌃"],
    ["ENTER", "↵"],
    ["BACKSPACE", "⌫"],
    ["DEL", "⌦"],
    ["ESC", "⎋"],
    ["PAGEUP", "⇞"],
    ["PAGEDOWN", "⇟"],
    ["UP", "↑"],
    ["DOWN", "↓"],
    ["LEFT", "←"],
    ["RIGHT", "→"],
    ["HOME", "↖"],
    ["END", "↘"],
    ["TAB", "⇥"],
    ["SPACE", "␣"]
  ],
  P = e => {
    for (let [t, n] of R)
      if (t === e.toUpperCase()) return n;
    return e
  },
  D = e => {
    for (let [t, n] of R)
      if (n === e.toUpperCase()) return t.toLowerCase();
    return e
  },
  L = /shift|meta|ctrl|alt$/;

function x(e) {
  return "meta" === e || "shift" === e || "alt" === e || "ctrl" === e
}

function M(e) {
  return e + "Key"
}

function j(e) {
  let t = {
    keyCode: 0,
    key: "",
    code: "",
    metaKey: false,
    shiftKey: false,
    altKey: false,
    ctrlKey: false
  };
  return null == e ? [] : e.reduce((e, n) => {
    let r = T(n),
      i = p({}, t);
    if (null == r) return e.push(h(p({}, i), {
      combo: n
    })), e;
    if (L.test(r) && x(r)) return t[M(r)] = true, e.map(e => (e[M(r)] = true, e));
    {
      let t = C(r, d.g$.BROWSER);
      return null != t && (i.keyCode = t), e.push(i), e
    }
  }, [])
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : I(),
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY;
  return e.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, s.A.modKey).split("+").map(e => e.trim().replace("plus", "+")).reduce((e, r) => {
    let i = C(D(r), t, n);
    return null != i && e.push([n, i, t]), e
  }, [])
}

function U(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    r = e.map(e => {
      let [t, n, r] = e, i = "number" == typeof r ? r : I();
      if (t === d.zY.KEYBOARD_KEY || t === d.zY.KEYBOARD_MODIFIER_KEY) {
        var a;
        return null != (a = T(null != i ? [t, n, i] : [t, n])) ? a : "UNK".concat(n)
      }
      return t === d.zY.MOUSE_BUTTON ? "mouse".concat(n) : t === d.zY.GAMEPAD_BUTTON ? "gamepad".concat(n) : "dev".concat(t, ",").concat(n)
    }).filter(l.Vq);
  return t ? (false !== n.g.navigator.appVersion.indexOf("Mac OS X") ? r.map(P) : r).join(" + ").toUpperCase() : r.join("+")
}

function G(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return e.length === t.length && e.every((e, r) => {
    let [i, a, o] = e, [s, l, c] = t[r];
    return i === s && a === l && (!n || o === c)
  })
}

function V(e) {
  return null != e && "object" == typeof e && "nativeEvent" in e && 0 === e.nativeEvent.clientX && 0 === e.nativeEvent.clientY
}