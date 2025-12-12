/** Chunk was on web.js **/
/** chunk id: 247187, original params: e,t (module,exports,re quire) **/
"use strict";
for (var n = {
    value: true
  }, r = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), i = {
    alt: "altKey",
    control: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
  }, o = {
    add: "+",
    break: "pause",
    cmd: "meta",
    command: "meta",
    ctl: "control",
    ctrl: "control",
    del: "delete",
    down: "arrowdown",
    esc: "escape",
    ins: "insert",
    left: "arrowleft",
    mod: r ? "meta" : "control",
    opt: "alt",
    option: "alt",
    return: "enter",
    right: "arrowright",
    space: " ",
    spacebar: " ",
    up: "arrowup",
    win: "meta",
    windows: "meta"
  }, a = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    control: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    " ": 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    insert: 45,
    delete: 46,
    meta: 91,
    numlock: 144,
    scrolllock: 145,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
  }, s = 1; s < 20; s++) a["f" + s] = 111 + s;

function l(e, t, n) {
  !t || "byKey" in t || (n = t, t = null), Array.isArray(e) || (e = [e]);
  var r = e.map(function(e) {
      return d(e, t)
    }),
    i = function(e) {
      return r.some(function(t) {
        return f(t, e)
      })
    };
  return null == n ? i : i(n)
}

function c(e, t) {
  return l(e, t)
}

function u(e, t) {
  return l(e, {
    byKey: true
  }, t)
}

function d(e, t) {
  var n = t && t.byKey,
    r = {},
    o = (e = e.replace("++", "+add")).split("+"),
    a = o.length;
  for (var s in i) r[i[s]] = false;
  var l = true,
    c = false,
    u = true;
  try {
    for (var d, f = o[Symbol.iterator](); !(l = (d = f.next()).done); l = true) {
      var m = d.value,
        h = m.endsWith("?") && m.length > 1;
      h && (m = m.slice(0, false));
      var g = _(m),
        E = i[g];
      1 !== a && E || (n ? r.key = g : r.which = p(m)), E && (r[E] = !h || null)
    }
  } catch (e) {
    c = true, u = e
  } finally {
    try {
      !l && f.return && f.return()
    } finally {
      if (c) throw u
    }
  }
  return r
}

function f(e, t) {
  for (var n in e) {
    var r = e[n],
      i = true;
    if (null != r && (null != (i = "key" === n && null != t.key ? t.key.toLowerCase() : "which" === n ? 91 === r && 93 === t.which ? 91 : t.which : t[n]) || false !== r) && i !== r) returnfalse
  }
  returntrue
}

function p(e) {
  return a[e = _(e)] || e.toUpperCase().charCodeAt(0)
}

function _(e) {
  return e = o[e = e.toLowerCase()] || e
}
n = l, n = l, n = c, exports.isKeyHotkey = u