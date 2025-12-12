/** Chunk was on web.js **/
/** chunk id: 13140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Al: () => Z,
  BB: () => U,
  C$: () => A,
  H9: () => C,
  Kd: () => k,
  UR: () => v,
  d2: () => M,
  dU: () => I,
  m3: () => G
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./415506.js"), require("./539854.js"), require("./781311.js");
var Chunk921738 = require("./921738.js"),
  i = require.n(Chunk921738),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk714338 = require("./714338.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk378799 = require("./378799.js"),
  Chunk295907 = require("./295907.js");

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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = __OVERLAY__ ? Chunk295907.iC : (0, Chunk358085.isLinux)() ? Chunk295907.Hs : (0, Chunk358085.isMac)() ? Chunk295907.RE : (0, Chunk358085.isWindows)() ? Chunk295907.iC : {},
  g = a().invert(Chunk295907.Hs);
g["223"] = "`", Object.freeze(g);
let E = Object.freeze(a().invert(Chunk295907.RE)),
  b = a().invert(Chunk295907.iC);
b["223"] = "`", Object.freeze(b);
let y = a().invert(null != h ? h : {});

function O(e) {
  return "+" === e ? "plus" : e
}

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : I();
  return t === d.Cg.BROWSER ? i()(e) : h[e]
}

function S(e, t, n) {
  if (null != n && n !== d.Cg.WINDOWS || !u.Dz.has(e)) return t;
  let r = (0, u.pz)().get("Backquote");
  if (t === r) return O(t);
  let i = {
      key: r,
      code: "Backquote",
      keyCode: e
    },
    o = (0, u.jd)(i);
  return "\\" === t && "`" === r ? t : null == o ? O(null != r ? r : t) : O(o.key)
}

function I() {
  return (0, Chunk358085.isLinux)() ? Chunk295907.Cg.LINUX : (0, Chunk358085.isMac)() ? Chunk295907.Cg.MACOS : (0, Chunk358085.isWindows)() ? Chunk295907.Cg.WINDOWS : __OVERLAY__ ? Chunk295907.Cg.WINDOWS : Chunk295907.Cg.BROWSER
}

function T(e) {
  let t, [, n, r] = e;
  switch (r) {
    case d.Cg.LINUX:
      t = g["" + n];
      break;
    case d.Cg.MACOS:
      t = E["" + n];
      break;
    case d.Cg.WINDOWS:
      t = b["" + n];
      break;
    case d.Cg.BROWSER: {
      let e = i()(n);
      if (null == e) return null;
      t = N(e);
      break
    }
    default:
      t = y["" + n]
  }
  return null != t ? t : null
}

function C(e) {
  let [, t, n] = e, r = T(e);
  if (null != r) return S(t, r, n);
  let i = (0, u._v)(t);
  return null != i ? S(i.keyCode, i.key, n) : null
}

function A(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : I(),
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.Mo.KEYBOARD_KEY,
    r = P(e, t, n);
  if (null != r) return r;
  let i = (0, u.T_)(e);
  return null != i ? i.keyCode : null
}

function N(e) {
  let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
  return "pause" === t || "break" === t ? "pause/break" : t
}

function P(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : I(),
    r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.Mo.KEYBOARD_KEY;
  if (null == e) return null;
  let o = r === d.Mo.KEYBOARD_KEY || r === d.Mo.KEYBOARD_MODIFIER_KEY;
  switch (true) {
    case o && n === d.Cg.LINUX:
      t = d.Hs[e];
      break;
    case o && n === d.Cg.MACOS:
      t = d.RE[e];
      break;
    case o && n === d.Cg.WINDOWS:
      t = "+" === e ? d.iC.plus : d.iC[e];
      break;
    case o && n === d.Cg.BROWSER:
      t = i()(N(e));
      break;
    case o:
      t = h[e];
      break;
    case r === d.Mo.MOUSE_BUTTON:
      t = parseInt(e.replace("MOUSE", ""), 10);
      break;
    case r === d.Mo.GAMEPAD_BUTTON:
      t = parseInt(e.replace("GAMEPAD", ""), 10);
      break;
    default:
      throw Error("Unrecognized DeviceType ".concat(r, "."))
  }
  return null != t ? t : null
}(0, Chunk358085.isMac)() || (y["223"] = "`"), Object.freeze(y);
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
  w = e => {
    for (let [t, n] of R)
      if (t === e.toUpperCase()) return n;
    return e
  },
  D = e => {
    for (let [t, n] of R)
      if (n === e.toUpperCase()) return t.toLowerCase();
    return e
  },
  x = /shift|meta|ctrl|alt$/;

function L(e) {
  return "meta" === e || "shift" === e || "alt" === e || "ctrl" === e
}

function j(e) {
  return e + "Key"
}

function M(e) {
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
    let r = C(n),
      i = p({}, t);
    if (null == r) return e.push(m(p({}, i), {
      combo: n
    })), e;
    if (x.test(r) && L(r)) return t[j(r)] = true, e.map(e => (e[j(r)] = true, e));
    {
      let t = A(r, d.Cg.BROWSER);
      return null != t && (i.keyCode = t), e.push(i), e
    }
  }, [])
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : I(),
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.Mo.KEYBOARD_KEY;
  return e.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, s.Z.modKey).split("+").map(e => e.trim().replace("plus", "+")).reduce((e, r) => {
    let i = A(D(r), t, n);
    return null != i && e.push([n, i, t]), e
  }, [])
}

function U(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    r = e.map(e => {
      let [t, n, r] = e, i = "number" == typeof r ? r : I();
      if (t === d.Mo.KEYBOARD_KEY || t === d.Mo.KEYBOARD_MODIFIER_KEY) {
        var o;
        return null != (o = C(null != i ? [t, n, i] : [t, n])) ? o : "UNK".concat(n)
      }
      return t === d.Mo.MOUSE_BUTTON ? "mouse".concat(n) : t === d.Mo.GAMEPAD_BUTTON ? "gamepad".concat(n) : "dev".concat(t, ",").concat(n)
    }).filter(l.lm);
  return t ? (false !== n.g.navigator.appVersion.indexOf("Mac OS X") ? r.map(w) : r).join(" + ").toUpperCase() : r.join("+")
}

function G(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return e.length === t.length && e.every((e, r) => {
    let [i, o, a] = e, [s, l, c] = t[r];
    return i === s && o === l && (!n || a === c)
  })
}

function Z(e) {
  return null != e && "object" == typeof e && "nativeEvent" in e && 0 === e.nativeEvent.clientX && 0 === e.nativeEvent.clientY
}