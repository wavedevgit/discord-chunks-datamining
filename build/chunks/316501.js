/** Chunk was on web.js **/
/** chunk id: 316501, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AD: () => D,
  Kh: () => _,
  Pk: () => k,
  Q_: () => M,
  Ze: () => x,
  pF: () => w,
  sv: () => j
}), require("./896048.js"), require("./446912.js"), require("./114821.js"), require("./339614.js"), require("./321073.js"), require("./638769.js");
var Chunk695497 = require("./695497.js"),
  i = require.n(Chunk695497),
  Chunk506774 = require("./506774.js"),
  Chunk626584 = require("./626584.js"),
  Chunk111162 = require("./111162.js"),
  Chunk723702 = require("./723702.js"),
  Chunk650583 = require("./650583.js");

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
let f = new Chunk626584.A("KeyboardLayoutMapUtils"),
  p = (0, Chunk723702.isLinux)() ? Chunk650583.C8 : (0, Chunk723702.isMac)() ? Chunk650583.V8 : (0, Chunk723702.isWindows)() || __OVERLAY__ ? Chunk650583.Nu : i().codes,
  _ = new Set([192, 220, 222, 223, 229]),
  h = Object.freeze({
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

function m(e) {
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
  constructor(e = h) {
    u(this, "map", true), this.map = new Map(Object.entries(e).map(e => {
      let [t, n] = e;
      return [t, m(n)]
    }))
  }
}
let E = new g;
async function b() {
  var e;
  if (__OVERLAY__) return E = new g, false;
  if ((null == (e = navigator.keyboard) ? true : e.getLayoutMap) != null) try {
    let e = await navigator.keyboard.getLayoutMap();
    return E = new g(Object.fromEntries(e.entries())), true
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
    let e = m(r);
    if (t.has(e) && null != n[e] && n[e] !== i) {
      f.error("Seperate keyCode mappings found for: ".concat(e));
      continue
    }
    t.add(e), n[e] = i
  }
  return n
}

function A(e) {
  return {
    keyCode: e.keyCode,
    key: null != e.key ? m(e.key) : true,
    code: e.code
  }
}
let v = "keyboard-layout-map";

function S() {
  var e;
  return null != (e = a.w.get(v)) ? e : null
}

function I(e) {
  a.w.set(v, e)
}
class T {
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
      e[r] = null != (t = e[r]) ? t : [], e[r].push({
        keyCode: r,
        key: n,
        code: this.findCodeFromKeyboardLayoutMap(n, true)
      })
    }
    return e
  }
  _initializeInternalLayoutMap() {
    let e = y();
    this._internalKeyLayoutMap = new Map(Array.from(e.entries())), this._setCachedKeyLayoutMapEntries()
  }
  _hasExactMatch(e) {
    if (null == e.keyCode) returnfalse;
    let t = this.keyCodeMap[e.keyCode];
    return null != t && t.some(t => t.key === e.key && t.code === e.code && t.keyCode === e.keyCode)
  }
  addEvent(e) {
    var t, n;
    let r = A(e);
    null == this._internalKeyLayoutMap && this._initializeInternalLayoutMap(), this._hasExactMatch(r) || null != r.key && "dead" !== r.key && (null == this.keyMap[r.key] ? this.keyMap[r.key] = r.keyCode : this.keyMap[r.key] !== r.keyCode && o.default.logKeyboardMismatches && f.error("KeyboardMapper - Key code mismatch for key ".concat(r.key, ": ").concat(this.keyMap[r.key], " !== ").concat(r.keyCode)), this.keyCodeMap[r.keyCode] = null != (t = this.keyCodeMap[r.keyCode]) ? t : [], this.keyCodeMap[r.keyCode].push(r), null == (n = this._internalKeyLayoutMap) || n.set(r.code, r.key), this.updateCaches())
  }
  updateCaches() {
    this._setCachedKeyCodeMapEntries(), this._setCachedKeyMapEntries(), this._setCachedKeyLayoutMapEntries()
  }
  reset() {
    this._internalKeyLayoutMap = null, this.keyMap = O(d({}, this._defaultKeyMap)), this._initializeInternalLayoutMap(), this.keyCodeMap = this._buildKeyCodeMapFromKeyMap(), this.updateCaches(), this.save()
  }
  save() {
    I(this.keyMap)
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
    let i = m(e),
      a = null == (t = r.find(e => {
        let [t, n] = e;
        return n === i
      })) ? true : t[0];
    return null != a ? a : e
  }
  constructor(e = {}) {
    u(this, "keyCodeMap", true), u(this, "keyMap", true), u(this, "_internalKeyLayoutMap", null), u(this, "_defaultKeyMap", true), u(this, "_cachedKeyCodeMapEntries", []), u(this, "_cachedKeyMapEntries", []), u(this, "_cachedKeyLayoutMapEntries", []), u(this, "_cachedAllEvents", []), this._defaultKeyMap = e;
    const t = S();
    null != t ? this.keyMap = t : this.keyMap = O(d({}, e)), this._initializeInternalLayoutMap(), this.keyCodeMap = this._buildKeyCodeMapFromKeyMap(), this.updateCaches(), this.save()
  }
}
class C extends T {
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
    let r = m(e);
    if (null == t && (t = this.findCodeFromKeyboardLayoutMap(r)), null != n) {
      let e = this.keyCodeMap[n];
      if (null != e) {
        let n = e.find(e => m(e.key) === r && e.code === t);
        if (null != n) return n
      }
    }
    if (null != n && null != t) return this.cachedAllEvents.find(e => {
      let i = m(e.key) === r,
        a = e.keyCode === n,
        s = e.code === t;
      return a && i && s
    })
  }
  getWeightedPossibleKeyStringMatches(e, t, n) {
    return this.cachedAllEvents.filter(r => {
      let i = m(r.key) === m(e),
        a = null == n || r.keyCode === n,
        s = null == t || r.code === t;
      return a && i && s
    }).sort((r, i) => {
      let a = r => {
          let i = 0;
          return m(r.key) === m(e) && (i += .5), null != t && r.code === t && (i += .3), null != n && r.keyCode === n && (i += .2), i
        },
        s = a(r);
      return a(i) - s
    })
  }
  findKeyboardEventByKey(e, t, n) {
    let r = m(e);
    if (null == t && (t = this.findCodeFromKeyboardLayoutMap(r)), null != n) {
      let e = this.keyCodeMap[n];
      if (null != e) {
        let n = e.find(e => m(e.key) === r && e.code === t);
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
    let r = null != e ? m(e) : true;
    if (null != r) {
      let e = this.keyMap[r];
      if (null == e) return;
      return A({
        keyCode: e,
        key: r,
        code: null != n ? n : this.findCodeFromKeyboardLayoutMap(r)
      })
    }
    if (null != t) {
      var i;
      let e = null == (i = this.cachedKeyMapEntries.find(e => {
        let [n, r] = e;
        return r === t
      })) ? true : i[0];
      if (null == e) return;
      return A({
        keyCode: t,
        key: e,
        code: null != n ? n : this.findCodeFromKeyboardLayoutMap(e)
      })
    }
  }
}
let N = null,
  R = null;

function w() {
  return null != R ? R : R = new Promise(async e => {
    await b(), N = new C(p), document.addEventListener("keydown", e => {
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

function P() {
  return null == N ? (w(), null) : N
}
async function D() {
  var e;
  await b(), null == (e = P()) || e.reset()
}

function x() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return n ? y() : null != (e = null == (t = P()) ? true : t.getLayoutMap()) ? e : y()
}

function L(e) {
  var t, n;
  let r = null != e ? m(e) : true;
  if (null != r) return null != (t = null == (n = P()) ? true : n.findCodeFromKeyboardLayoutMap(r)) ? t : true
}

function j(e) {
  let t = A(e);
  if (null != t.key) {
    var n, r;
    return null != (n = null == (r = P()) ? true : r.findExactKeyboardEventMatch(t.key, t.code, t.keyCode)) ? n : null
  }
  return null
}

function M(e) {
  var t, n, r, i;
  let a = null != e ? m(e) : true;
  if (null == a) return null;
  let s = L(a),
    o = null != (t = null == (n = P()) ? true : n.findKeyboardEventByKey(a, s)) ? t : null;
  if (null != o) return o;
  try {
    let e = null != (r = null == (i = P()) ? true : i.getDefaultKeyboardEventShape(a, true, s)) ? r : null;
    if (null == e) return null;
    let t = new KeyboardEvent("keydown", e);
    return A({
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
  let a = null != (t = null == (n = P()) ? true : n.findKeyboardEventByKeyCode(e)) ? t : null;
  if (null != a) return a;
  try {
    let t = null != (r = null == (i = P()) ? true : i.getDefaultKeyboardEventShape(true, e)) ? r : null;
    if (null == t) return null;
    let n = new KeyboardEvent("keydown", t);
    return A({
      keyCode: n.keyCode,
      key: n.key,
      code: n.code
    })
  } catch (e) {
    return null
  }
}