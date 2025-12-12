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
  var a = t,
    d = r(a);
  if (null != d || e && (e === a || e.firstChild === a) || o(false), e === a && (s(a = a.firstChild) || o(false), "true" !== a.getAttribute("data-contents") && o(false), n > 0 && (n = a.childNodes.length)), 0 === n) {
    var p = null;
    return {
      key: p = null != d ? d : l(i(c(a))),
      offset: 0
    }
  }
  var _ = a.childNodes[n - 1],
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
module.exports = function(e, t, n, i, o, s) {
  var c = n.nodeType === Node.TEXT_NODE,
    u = o.nodeType === Node.TEXT_NODE;
  if (c && u) return {
    selectionState: a(e, l(r(n)), i, l(r(o)), s),
    needsRecovery: false
  };
  var f = null,
    p = null,
    _ = true;
  return c ? (f = {
    key: l(r(n)),
    offset: i
  }, p = d(t, o, s)) : u ? (p = {
    key: l(r(o)),
    offset: s
  }, f = d(t, n, i)) : (f = d(t, n, i), p = d(t, o, s), n === o && i === s && (_ = !!n.firstChild && "BR" !== n.firstChild.nodeName)), {
    selectionState: a(e, f.key, f.offset, p.key, p.offset),
    needsRecovery: _
  }
}