/** Chunk was on web.js **/
/** chunk id: 100023, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk273083 = require("./273083.js"),
  Chunk661567 = require("./661567.js"),
  Chunk720620 = require("./720620.js"),
  Chunk581079 = require("./581079.js"),
  Chunk465135 = require("./465135.js"),
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
    var _ = null;
    return {
      key: _ = null != d ? d : l(i(c(a))),
      offset: 0
    }
  }
  var p = a.childNodes[n - 1],
    h = null,
    m = null;
  if (i(p)) {
    var g = u(p);
    h = l(i(g)), m = f(g)
  } else h = l(d), m = f(p);
  return {
    key: h,
    offset: m
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
    _ = null,
    p = true;
  return c ? (f = {
    key: l(r(n)),
    offset: i
  }, _ = d(t, o, s)) : u ? (_ = {
    key: l(r(o)),
    offset: s
  }, f = d(t, n, i)) : (f = d(t, n, i), _ = d(t, o, s), n === o && i === s && (p = !!n.firstChild && "BR" !== n.firstChild.nodeName)), {
    selectionState: a(e, f.key, f.offset, _.key, _.offset),
    needsRecovery: p
  }
}