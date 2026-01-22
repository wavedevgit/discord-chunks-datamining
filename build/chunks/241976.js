/** Chunk was on web.js **/
/** chunk id: 241976, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk587321 = require("./587321.js"),
  Chunk584606 = require("./584606.js"),
  Chunk692001 = require("./692001.js"),
  Chunk797686 = require("./797686.js"),
  Chunk494277 = require("./494277.js"),
  Chunk670200 = require("./670200.js");

function c(e) {
  for (; e.firstChild && (o(e.firstChild) && "true" === e.firstChild.getAttribute("data-blocks") || i(e.firstChild));) e = e.firstChild;
  return e
}

function u(e) {
  for (; e.lastChild && (o(e.lastChild) && "true" === e.lastChild.getAttribute("data-blocks") || i(e.lastChild));) e = e.lastChild;
  return e
}

function d(e, t, n) {
  var a = t,
    d = r(a);
  if (null != d || e && (e === a || e.firstChild === a) || s(false), e === a && (o(a = a.firstChild) || s(false), "true" !== a.getAttribute("data-contents") && s(false), n > 0 && (n = a.childNodes.length)), 0 === n) {
    var p = null;
    return {
      key: p = null != d ? d : l(i(c(a))),
      offset: 0
    }
  }
  var _ = a.childNodes[n - 1],
    h = null,
    m = null;
  if (i(_)) {
    var g = u(_);
    h = l(i(g)), m = f(g)
  } else h = l(d), m = f(_);
  return {
    key: h,
    offset: m
  }
}

function f(e) {
  var t = e.textContent;
  return "\n" === t ? 0 : t.length
}
module.exports = function(e, t, n, i, s, o) {
  var c = n.nodeType === Node.TEXT_NODE,
    u = s.nodeType === Node.TEXT_NODE;
  if (c && u) return {
    selectionState: a(e, l(r(n)), i, l(r(s)), o),
    needsRecovery: false
  };
  var f = null,
    p = null,
    _ = true;
  return c ? (f = {
    key: l(r(n)),
    offset: i
  }, p = d(t, s, o)) : u ? (p = {
    key: l(r(s)),
    offset: o
  }, f = d(t, n, i)) : (f = d(t, n, i), p = d(t, s, o), n === s && i === o && (_ = !!n.firstChild && "BR" !== n.firstChild.nodeName)), {
    selectionState: a(e, f.key, f.offset, p.key, p.offset),
    needsRecovery: _
  }
}