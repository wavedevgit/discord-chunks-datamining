/** Chunk was on 8381 **/
/** chunk id: 979162, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk630685 = require("./630685.js"),
  Chunk295864 = require("./295864.js"),
  Chunk534978 = require("./534978.js"),
  Chunk581079 = require("./581079.js"),
  Chunk613078 = require("./613078.js"),
  Chunk467159 = require("./467159.js");

function c(t, e, r) {
  var o = e,
    c = n(o);
  if (null != c || t && (t === o || t.firstChild === o) || a(false), t === o && (u(o = o.firstChild) || a(false), "true" !== o.getAttribute("data-contents") && a(false), r > 0 && (r = o.childNodes.length)), 0 === r) {
    var f = null;
    if (null != c) f = c;
    else {
      var p = function(t) {
        for (; t.firstChild && (u(t.firstChild) && "true" === t.firstChild.getAttribute("data-blocks") || i(t.firstChild));) t = t.firstChild;
        return t
      }(o);
      f = s(i(p))
    }
    return {
      key: f,
      offset: 0
    }
  }
  var h = o.childNodes[r - 1],
    d = null,
    g = null;
  if (i(h)) {
    var y = function(t) {
      for (; t.lastChild && (u(t.lastChild) && "true" === t.lastChild.getAttribute("data-blocks") || i(t.lastChild));) t = t.lastChild;
      return t
    }(h);
    d = s(i(y)), g = l(y)
  } else d = s(c), g = l(h);
  return {
    key: d,
    offset: g
  }
}

function l(t) {
  var e = t.textContent;
  return "\n" === e ? 0 : e.length
}
module.exports = function(t, e, r, i, a, u) {
  var l = r.nodeType === Node.TEXT_NODE,
    f = a.nodeType === Node.TEXT_NODE;
  if (l && f) return {
    selectionState: o(t, s(n(r)), i, s(n(a)), u),
    needsRecovery: false
  };
  var p = null,
    h = null,
    d = true;
  return l ? (p = {
    key: s(n(r)),
    offset: i
  }, h = c(e, a, u)) : f ? (h = {
    key: s(n(a)),
    offset: u
  }, p = c(e, r, i)) : (p = c(e, r, i), h = c(e, a, u), r === a && i === u && (d = !!r.firstChild && "BR" !== r.firstChild.nodeName)), {
    selectionState: o(t, p.key, p.offset, h.key, h.offset),
    needsRecovery: d
  }
}