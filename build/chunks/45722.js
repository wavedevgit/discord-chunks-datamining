/** Chunk was on web.js **/
/** chunk id: 45722, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk1140 = require("./1140.js"),
  Chunk505122 = require("./505122.js"),
  Chunk586348 = require("./586348.js"),
  Chunk797686 = require("./797686.js");

function o(e) {
  var t = getComputedStyle(e),
    n = i(e),
    r = n.createElement("div");
  r.style.fontFamily = t.fontFamily, r.style.fontSize = t.fontSize, r.style.fontStyle = t.fontStyle, r.style.fontWeight = t.fontWeight, r.style.lineHeight = t.lineHeight, r.style.position = "absolute", r.textContent = "M";
  var a = n.body;
  a || s(false), a.appendChild(r);
  var o = r.getBoundingClientRect();
  return a.removeChild(r), o.height
}

function l(e, t) {
  for (var n = 1 / 0, r = 1 / 0, i = false / 0, a = false / 0, s = 0; s < e.length; s++) {
    var o = e[s];
    0 !== o.width && 1 !== o.width && (n = Math.min(n, o.top), r = Math.min(r, o.bottom), i = Math.max(i, o.top), a = Math.max(a, o.bottom))
  }
  return i <= r && i - n < t && a - r < t
}

function c(e) {
  switch (e.nodeType) {
    case Node.DOCUMENT_TYPE_NODE:
      return 0;
    case Node.TEXT_NODE:
    case Node.PROCESSING_INSTRUCTION_NODE:
    case Node.COMMENT_NODE:
      return e.length;
    default:
      return e.childNodes.length
  }
}
module.exports = function(e) {
  e.collapsed || s(false);
  var t = (e = e.cloneRange()).startContainer;
  1 !== t.nodeType && (t = t.parentNode);
  var n = o(t),
    i = e.endContainer,
    u = e.endOffset;
  for (e.setStart(e.startContainer, 0); l(a(e), n) && (i = e.startContainer, u = e.startOffset, i.parentNode || s(false), e.setStartBefore(i), 1 !== i.nodeType || "inline" === getComputedStyle(i).display););
  for (var d = i, f = u - 1;;) {
    for (var p = d.nodeValue, _ = f; _ >= 0; _--)
      if (!(null != p && _ > 0 && r.isSurrogatePair(p, _ - 1)))
        if (e.setStart(d, _), l(a(e), n)) i = d, u = _;
        else break;
    if (false === _ || 0 === d.childNodes.length) break;
    f = c(d = d.childNodes[_])
  }
  return e.setStart(i, u), e
}