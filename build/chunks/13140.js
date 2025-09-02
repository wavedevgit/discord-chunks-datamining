/** Chunk was on web.js **/
/** chunk id: 13140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BB: () => U,
  C$: () => C,
  H9: () => A,
  Kd: () => k,
  UR: () => v,
  d2: () => M,
  dU: () => S
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./415506.js"), require("./539854.js"), require("./781311.js");
var Chunk921738 = require("./921738.js"),
  i = require.n(Chunk921738),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk714338 = require("./714338.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk378799 = require("./378799.js"),
  Chunk981631 = require("./981631.js");

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
let m = __OVERLAY__ ? Chunk981631.iC$ : (0, Chunk358085.isLinux)() ? Chunk981631.HsE : (0, Chunk358085.isMac)() ? Chunk981631.REU : (0, Chunk358085.isWindows)() ? Chunk981631.iC$ : {},
  g = o().invert(Chunk981631.HsE);
g["223"] = "`", Object.freeze(g);
let E = Object.freeze(o().invert(Chunk981631.REU)),
  b = o().invert(Chunk981631.iC$);
b["223"] = "`", Object.freeze(b);
let y = o().invert(null != m ? m : {});

function O(e) {
  return "+" === e ? "plus" : e
}

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S();
  return t === d.CgE.BROWSER ? i()(e) : m[e]
}

function I(e, t, n) {
  if (null != n && n !== d.CgE.WINDOWS || !u.Dz.has(e)) return t;
  let r = (0, u.pz)().get("Backquote");
  if (t === r) return O(t);
  let i = {
      key: r,
      code: "Backquote",
      keyCode: e
    },
    a = (0, u.jd)(i);
  return "\\" === t && "`" === r ? t : null == a ? O(null != r ? r : t) : O(a.key)
}

function S() {
  return (0, Chunk358085.isLinux)() ? Chunk981631.CgE.LINUX : (0, Chunk358085.isMac)() ? Chunk981631.CgE.MACOS : (0, Chunk358085.isWindows)() ? Chunk981631.CgE.WINDOWS : __OVERLAY__ ? Chunk981631.CgE.WINDOWS : Chunk981631.CgE.BROWSER
}

function T(e) {
  let t, [, n, r] = e;
  switch (r) {
    case d.CgE.LINUX:
      t = g["" + n];
      break;
    case d.CgE.MACOS:
      t = E["" + n];
      break;
    case d.CgE.WINDOWS:
      t = b["" + n];
      break;
    case d.CgE.BROWSER: {
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

function A(e) {
  let [, t, n] = e, r = T(e);
  if (null != r) return I(t, r, n);
  let i = (0, u._v)(t);
  return null != i ? I(i.keyCode, i.key, n) : null
}

function C(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S(),
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.MoX.KEYBOARD_KEY,
    r = R(e, t, n);
  if (null != r) return r;
  let i = (0, u.T_)(e);
  return null != i ? i.keyCode : null
}

function N(e) {
  let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
  return "pause" === t || "break" === t ? "pause/break" : t
}

function R(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S(),
    r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.MoX.KEYBOARD_KEY;
  if (null == e) return null;
  let a = r === d.MoX.KEYBOARD_KEY || r === d.MoX.KEYBOARD_MODIFIER_KEY;
  switch (true) {
    case a && n === d.CgE.LINUX:
      t = d.HsE[e];
      break;
    case a && n === d.CgE.MACOS:
      t = d.REU[e];
      break;
    case a && n === d.CgE.WINDOWS:
      t = "+" === e ? d.iC$.plus : d.iC$[e];
      break;
    case a && n === d.CgE.BROWSER:
      t = i()(N(e));
      break;
    case a:
      t = m[e];
      break;
    case r === d.MoX.MOUSE_BUTTON:
      t = parseInt(e.replace("MOUSE", ""), 10);
      break;
    case r === d.MoX.GAMEPAD_BUTTON:
      t = parseInt(e.replace("GAMEPAD", ""), 10);
      break;
    default:
      throw Error("Unrecognized DeviceType ".concat(r, "."))
  }
  return null != t ? t : null
}(0, Chunk358085.isMac)() || (y["223"] = "`"), Object.freeze(y);
let P = [
    ["META", "⌘"],
    ["RIGHT META", "RIGHT ⌘"],
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
    for (let [t, n] of P)
      if (t === e.toUpperCase()) return n;
    return e
  },
  D = e => {
    for (let [t, n] of P)
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
    let r = A(n),
      i = _({}, t);
    if (null == r) return e.push(h(_({}, i), {
      combo: n
    })), e;
    if (x.test(r) && L(r)) return t[j(r)] = true, e.map(e => (e[j(r)] = true, e));
    {
      let t = C(r, d.CgE.BROWSER);
      return null != t && (i.keyCode = t), e.push(i), e
    }
  }, [])
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S(),
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.MoX.KEYBOARD_KEY;
  return e.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, s.Z.modKey).split("+").map(e => e.trim().replace("plus", "+")).reduce((e, r) => {
    let i = C(D(r), t, n);
    return null != i && e.push([n, i, t]), e
  }, [])
}

function U(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    r = e.map(e => {
      let [t, n, r] = e, i = "number" == typeof r ? r : S();
      if (t === d.MoX.KEYBOARD_KEY || t === d.MoX.KEYBOARD_MODIFIER_KEY) {
        var a;
        return null != (a = A(null != i ? [t, n, i] : [t, n])) ? a : "UNK".concat(n)
      }
      return t === d.MoX.MOUSE_BUTTON ? "mouse".concat(n) : t === d.MoX.GAMEPAD_BUTTON ? "gamepad".concat(n) : "dev".concat(t, ",").concat(n)
    }).filter(l.lm);
  return t ? (false !== n.g.navigator.appVersion.indexOf("Mac OS X") ? r.map(w) : r).join(" + ").toUpperCase() : r.join("+")
}