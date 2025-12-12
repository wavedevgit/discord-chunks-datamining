/** Chunk was on web.js **/
/** chunk id: 298606, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk466312 = require("./466312.js"),
  Chunk279636 = require("./279636.js"),
  Chunk738719 = require("./738719.js"),
  Chunk581079 = require("./581079.js"),
  Chunk108993 = require("./108993.js"),
  Chunk467159 = require("./467159.js");

function c(e) {
  for (; e.firstChild && (s(e.firstChild) && "true" === e.firstChild.getAttribute("data-blocks") || i(e.firstChild));) e = e.firstChild;
  return e
}

function u(e) {
  for (; e.lastChild && (s(e.lastChild) && "true" === e.lastChild.getAttribute("data-blocks") || i(e.lastChild));) e = e.lastChild;
  return e
}

function d(e, t, n) {
  var o = t,
    d = r(o);
  if (null != d || e && (e === o || e.firstChild === o) || a(false), e === o && (s(o = o.firstChild) || a(false), "true" !== o.getAttribute("data-contents") && a(false), n > 0 && (n = o.childNodes.length)), 0 === n) {
    var p = null;
    return {
      key: p = null != d ? d : l(i(c(o))),
      offset: 0
    }
  }
  var _ = o.childNodes[n - 1],
    m = null,
    h = null;
  if (i(_)) {
    var g = u(_);
    m = l(i(g)), h = f(g)
  } else m = l(d), h = f(_);
  return {
    key: m,
    offset: h
  }
}

function f(e) {
  var t = e.textContent;
  return "\n" === t ? 0 : t.length
}
module.exports = function(e, t, n, i, a, s) {
  var c = n.nodeType === Node.TEXT_NODE,
    u = a.nodeType === Node.TEXT_NODE;
  if (c && u) return {
    selectionState: o(e, l(r(n)), i, l(r(a)), s),
    needsRecovery: false
  };
  var f = null,
    p = null,
    _ = true;
  return c ? (f = {
    key: l(r(n)),
    offset: i
  }, p = d(t, a, s)) : u ? (p = {
    key: l(r(a)),
    offset: s
  }, f = d(t, n, i)) : (f = d(t, n, i), p = d(t, a, s), n === a && i === s && (_ = !!n.firstChild && "BR" !== n.firstChild.nodeName)), {
    selectionState: o(e, f.key, f.offset, p.key, p.offset),
    needsRecovery: _
  }
}