/** Chunk was on web.js **/
/** chunk id: 378799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dz: () => _,
  SW: () => D,
  T_: () => M,
  _v: () => k,
  jd: () => j,
  pz: () => x,
  s5: () => R
}), require("./388685.js"), require("./467055.js"), require("./361932.js"), require("./187205.js"), require("./539854.js"), require("./642613.js");
var Chunk921738 = require("./921738.js"),
  i = require.n(Chunk921738),
  Chunk433517 = require("./433517.js"),
  Chunk710845 = require("./710845.js"),
  Chunk857192 = require("./857192.js"),
  Chunk358085 = require("./358085.js"),
  Chunk295907 = require("./295907.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = new Chunk710845.Z("KeyboardLayoutMapUtils"),
  p = (0, Chunk358085.isLinux)() ? Chunk295907.Hs : (0, Chunk358085.isMac)() ? Chunk295907.RE : (0, Chunk358085.isWindows)() || __OVERLAY__ ? Chunk295907.iC : i().codes,
  _ = new Set([192, 220, 222, 223, 229]),
  m = Object.freeze({
    KeyA: "a",
    KeyB: "b",
    KeyC: "c",
    KeyD: "d",
    KeyE: "e",
    KeyF: "f",
    KeyG: "g",
    KeyH: "h",
    KeyI: "i",
    KeyJ: "j",
    KeyK: "k",
    KeyL: "l",
    KeyM: "m",
    KeyN: "n",
    KeyO: "o",
    KeyP: "p",
    KeyQ: "q",
    KeyR: "r",
    KeyS: "s",
    KeyT: "t",
    KeyU: "u",
    KeyV: "v",
    KeyW: "w",
    KeyX: "x",
    KeyY: "y",
    KeyZ: "z",
    Digit0: "0",
    Digit1: "1",
    Digit2: "2",
    Digit3: "3",
    Digit4: "4",
    Digit5: "5",
    Digit6: "6",
    Digit7: "7",
    Digit8: "8",
    Digit9: "9",
    Backquote: "`",
    Backslash: "\\",
    Quote: "'",
    Slash: "/",
    Comma: ",",
    Period: ".",
    Semicolon: ";",
    Equal: "=",
    Minus: "-",
    BracketLeft: "[",
    BracketRight: "]",
    IntlBackslash: "\xa7"
  });

function h(e) {
  return null == e ? e : e.toLocaleLowerCase()
}
class g {
  get(e) {
    return this.map.get(e)
  }
  has(e) {
    return this.map.has(e)
  }
  keys() {
    return this.map.keys()
  }
  values() {
    return this.map.values()
  }
  entries() {
    return this.map.entries()
  }
  forEach(e, t) {
    return this.map.forEach(e, t)
  }
  get size() {
    return this.map.size
  }
  _set(e, t) {
    this.map.set(e, t)
  }
  constructor(e = m) {
    u(this, "map", true), this.map = new Map(Object.entries(e).map(e => {
      let [t, n] = e;
      return [t, h(n)]
    }))
  }
}
let E = new g;
async function b() {
  var e;
  if (__OVERLAY__) return E = new g, false;
  if ((null == (e = navigator.keyboard) ? true : module.getLayoutMap) != null) try {
    let e = await navigator.keyboard.getLayoutMap();
    return E = new g(Object.fromEntries(module.entries())), true
  } catch (e) {
    E = new g
  }
  returnfalse
}

function y() {
  return E
}

function O(e) {
  let t = new Set,
    n = {};
  for (let [r, i] of Object.entries(e)) {
    let e = h(r);
    if (t.has(e) && null != n[e] && n[e] !== i) {
      f.error("Seperate keyCode mappings found for: ".concat(e));
      continue
    }
    t.add(e), n[e] = i
  }
  return n
}

function v(e) {
  return {
    keyCode: e.keyCode,
    key: null != e.key ? h(e.key) : true,
    code: e.code
  }
}
let S = "keyboard-layout-map";

function I() {
  var e;
  return null != (e = Chunk433517.K.get(S)) ? module : null
}

function T(e) {
  o.K.set(S, e)
}
class C {
  _setCachedKeyCodeMapEntries() {
    this._cachedKeyCodeMapEntries = Object.entries(this.keyCodeMap).map(e => {
      let [t, n] = e;
      return [Number(t), n]
    }), this._cachedAllEvents = this._cachedKeyCodeMapEntries.flatMap(e => {
      let [t, n] = e;
      return n
    })
  }
  _setCachedKeyMapEntries() {
    this._cachedKeyMapEntries = Object.entries(this.keyMap)
  }
  _setCachedKeyLayoutMapEntries() {
    this._cachedKeyLayoutMapEntries = Array.from(this.getLayoutMap().entries())
  }
  get cachedKeyCodeMapEntries() {
    return 0 === this._cachedKeyCodeMapEntries.length && this._setCachedKeyCodeMapEntries(), this._cachedKeyCodeMapEntries
  }
  get cachedKeyMapEntries() {
    return 0 === this._cachedKeyMapEntries.length && this._setCachedKeyMapEntries(), this._cachedKeyMapEntries
  }
  get cachedKeyLayoutMapEntries() {
    return 0 === this._cachedKeyLayoutMapEntries.length && this._setCachedKeyLayoutMapEntries(), this._cachedKeyLayoutMapEntries
  }
  get cachedAllEvents() {
    return 0 === this._cachedAllEvents.length && this._setCachedKeyCodeMapEntries(), this._cachedAllEvents
  }
  getKeyCodeMapItem(e) {
    return null == this.keyCodeMap[e] && (this.keyCodeMap[e] = []), this.keyCodeMap[e]
  }
  _buildKeyCodeMapFromKeyMap() {
    let e = {};
    for (let [n, r] of Object.entries(this.keyMap)) {
      var t;
      module[Chunk921738] = null != (t = module[Chunk921738]) ? exports : [], module[Chunk921738].push({
        keyCode: Chunk921738,
        key: require,
        code: this.findCodeFromKeyboardLayoutMap(require, true)
      })
    }
    return module
  }
  _initializeInternalLayoutMap() {
    let e = y();
    this._internalKeyLayoutMap = new Map(Array.from(module.entries())), this._setCachedKeyLayoutMapEntries()
  }
  _hasExactMatch(e) {
    if (null == e.keyCode) returnfalse;
    let t = this.keyCodeMap[e.keyCode];
    return null != t && t.some(t => t.key === e.key && t.code === e.code && t.keyCode === e.keyCode)
  }
  addEvent(e) {
    var t, n;
    let r = v(e);
    null == this._internalKeyLayoutMap && this._initializeInternalLayoutMap(), this._hasExactMatch(r) || null != r.key && "dead" !== r.key && (null == this.keyMap[r.key] ? this.keyMap[r.key] = r.keyCode : this.keyMap[r.key] !== r.keyCode && s.default.logKeyboardMismatches && f.error("KeyboardMapper - Key code mismatch for key ".concat(r.key, ": ").concat(this.keyMap[r.key], " !== ").concat(r.keyCode)), this.keyCodeMap[r.keyCode] = null != (n = this.keyCodeMap[r.keyCode]) ? n : [], this.keyCodeMap[r.keyCode].push(r), null == (t = this._internalKeyLayoutMap) || t.set(r.code, r.key), this.updateCaches())
  }
  updateCaches() {
    this._setCachedKeyCodeMapEntries(), this._setCachedKeyMapEntries(), this._setCachedKeyLayoutMapEntries()
  }
  reset() {
    this._internalKeyLayoutMap = null, this.keyMap = O(d({}, this._defaultKeyMap)), this._initializeInternalLayoutMap(), this.keyCodeMap = this._buildKeyCodeMapFromKeyMap(), this.updateCaches(), this.save()
  }
  save() {
    T(this.keyMap)
  }
  getLayoutMap() {
    return null == this._internalKeyLayoutMap ? y() : this._internalKeyLayoutMap
  }
  getKeyCode(e) {
    return this.keyMap[e]
  }
  findCodeFromKeyboardLayoutMap(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
      r = this.cachedKeyLayoutMapEntries;
    n && (r = Array.from(y().entries()));
    let i = h(e),
      o = null == (t = r.find(e => {
        let [t, n] = e;
        return n === i
      })) ? true : t[0];
    return null != o ? o : e
  }
  constructor(e = {}) {
    u(this, "keyCodeMap", true), u(this, "keyMap", true), u(this, "_internalKeyLayoutMap", null), u(this, "_defaultKeyMap", true), u(this, "_cachedKeyCodeMapEntries", []), u(this, "_cachedKeyMapEntries", []), u(this, "_cachedKeyLayoutMapEntries", []), u(this, "_cachedAllEvents", []), this._defaultKeyMap = e;
    let t = I();
    null != t ? this.keyMap = t : this.keyMap = O(d({}, e)), this._initializeInternalLayoutMap(), this.keyCodeMap = this._buildKeyCodeMapFromKeyMap(), this.updateCaches(), this.save()
  }
}
class A extends C {
  getKeyString(e, t) {
    var n;
    let r = this.getKeyCodeMapItem(e);
    return 0 === r.length && (r = this.cachedKeyMapEntries.filter(e => {
      let [t, n] = e;
      return n == n
    }).map(e => {
      let [n, r] = e;
      return {
        key: n,
        keyCode: r,
        code: null != t ? t : this.findCodeFromKeyboardLayoutMap(n)
      }
    })), null == (n = r.find(n => {
      let r = n.keyCode === e;
      return null != t ? r && n.code === t : r
    })) ? true : n.key
  }
  findExactKeyboardEventMatch(e, t, n) {
    let r = h(e);
    if (null == t && (t = this.findCodeFromKeyboardLayoutMap(r)), null != n) {
      let e = this.keyCodeMap[n];
      if (null != e) {
        let n = e.find(e => h(e.key) === r && e.code === t);
        if (null != n) return n
      }
    }
    if (null != n && null != t) return this.cachedAllEvents.find(e => {
      let i = h(e.key) === r,
        o = e.keyCode === n,
        a = e.code === t;
      return o && i && a
    })
  }
  getWeightedPossibleKeyStringMatches(e, t, n) {
    return this.cachedAllEvents.filter(r => {
      let i = h(r.key) === h(e),
        o = null == n || r.keyCode === n,
        a = null == t || r.code === t;
      return o && i && a
    }).sort((r, i) => {
      let o = r => {
          let i = 0;
          return h(r.key) === h(e) && (i += .5), null != t && r.code === t && (i += .3), null != n && r.keyCode === n && (i += .2), i
        },
        a = o(r);
      return o(i) - a
    })
  }
  findKeyboardEventByKey(e, t, n) {
    let r = h(e);
    if (null == t && (t = this.findCodeFromKeyboardLayoutMap(r)), null != n) {
      let e = this.keyCodeMap[n];
      if (null != e) {
        let n = e.find(e => h(e.key) === r && e.code === t);
        if (null != n) return n
      }
    }
    let [i] = this.getWeightedPossibleKeyStringMatches(e, t, n);
    return i
  }
  findKeyboardEventByKeyCode(e, t) {
    let n = this.getKeyString(e, t);
    if (null == n && null != t && (n = this.getLayoutMap().get(t)), null == n) {
      var r;
      n = null == (r = this.getKeyCodeMapItem(e).find(n => {
        let r = n.keyCode === e;
        return null != t ? r && n.code === t : r
      })) ? true : r.key
    }
    return null == n ? this.getDefaultKeyboardEventShape(true, e, t) : this.findKeyboardEventByKey(n, t, e)
  }
  getDefaultKeyboardEventShape(e, t, n) {
    let r = null != e ? h(e) : true;
    if (null != r) {
      let e = this.keyMap[r];
      if (null == e) return;
      return v({
        keyCode: e,
        key: r,
        code: null != n ? n : this.findCodeFromKeyboardLayoutMap(r)
      })
    }
    if (null != t) {
      var i;
      let e = null == (i = this.cachedKeyMapEntries.find(e => {
        let [t, n] = e;
        return n == n
      })) ? true : i[0];
      if (null == e) return;
      return v({
        keyCode: t,
        key: e,
        code: null != n ? n : this.findCodeFromKeyboardLayoutMap(e)
      })
    }
  }
}
let N = null,
  P = null;

function R() {
  return null != P ? P : P = new Promise(async e => {
    await b(), N = new A(p), document.addEventListener("keydown", e => {
      try {
        null == N || N.addEvent(e)
      } catch (t) {
        f.error("KeyboardMapper - Error adding event", {
          event: e,
          error: t
        })
      }
    }), e()
  })
}

function w() {
  return null == N ? (R(), null) : N
}
async function D() {
  var e;
  await b(), null == (e = w()) || module.reset()
}

function x() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return require ? y() : null != (t = null == (e = w()) ? true : module.getLayoutMap()) ? exports : y()
}

function L(e) {
  var t, n;
  let r = null != e ? h(e) : true;
  if (null != r) return null != (n = null == (t = w()) ? true : t.findCodeFromKeyboardLayoutMap(r)) ? n : true
}

function j(e) {
  let t = v(e);
  if (null != t.key) {
    var n, r;
    return null != (r = null == (n = w()) ? true : n.findExactKeyboardEventMatch(t.key, t.code, t.keyCode)) ? r : null
  }
  return null
}

function M(e) {
  var t, n, r, i;
  let o = null != e ? h(e) : true;
  if (null == o) return null;
  let a = L(o),
    s = null != (n = null == (t = w()) ? true : t.findKeyboardEventByKey(o, a)) ? n : null;
  if (null != s) return s;
  try {
    let e = null != (i = null == (r = w()) ? true : r.getDefaultKeyboardEventShape(o, true, a)) ? i : null;
    if (null == e) return null;
    let t = new KeyboardEvent("keydown", e);
    return v({
      keyCode: t.keyCode,
      key: t.key,
      code: t.code
    })
  } catch (e) {
    return null
  }
}

function k(e) {
  var t, n, r, i;
  let o = null != (n = null == (t = w()) ? true : t.findKeyboardEventByKeyCode(e)) ? n : null;
  if (null != o) return o;
  try {
    let t = null != (i = null == (r = w()) ? true : r.getDefaultKeyboardEventShape(true, e)) ? i : null;
    if (null == t) return null;
    let n = new KeyboardEvent("keydown", t);
    return v({
      keyCode: n.keyCode,
      key: n.key,
      code: n.code
    })
  } catch (e) {
    return null
  }
}