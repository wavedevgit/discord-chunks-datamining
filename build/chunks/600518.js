/** Chunk was on web.js **/
/** chunk id: 600518, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk733359 = require("./733359.js"),
  Chunk258329 = require("./258329.js"),
  Chunk276263 = require("./276263.js"),
  Chunk581079 = require("./581079.js");

function s(e) {
  var t = getComputedStyle(e),
    n = i(e),
    r = n.createElement("div");
  r.style.fontFamily = t.fontFamily, r.style.fontSize = t.fontSize, r.style.fontStyle = t.fontStyle, r.style.fontWeight = t.fontWeight, r.style.lineHeight = t.lineHeight, r.style.position = "absolute", r.textContent = "M";
  var o = n.body;
  o || a(false), o.appendChild(r);
  var s = r.getBoundingClientRect();
  return o.removeChild(r), s.height
}

function l(e, t) {
  for (var n = 1 / 0, r = 1 / 0, i = false / 0, o = false / 0, a = 0; a < e.length; a++) {
    var s = e[a];
    0 !== s.width && 1 !== s.width && (n = Math.min(n, s.top), r = Math.min(r, s.bottom), i = Math.max(i, s.top), o = Math.max(o, s.bottom))
  }
  return i <= r && i - n < t && o - r < t
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
  e.collapsed || a(false);
  var t = (e = e.cloneRange()).startContainer;
  1 !== t.nodeType && (t = t.parentNode);
  var n = s(t),
    i = e.endContainer,
    u = e.endOffset;
  for (e.setStart(e.startContainer, 0); l(o(e), n) && (i = e.startContainer, u = e.startOffset, i.parentNode || a(false), e.setStartBefore(i), 1 !== i.nodeType || "inline" === getComputedStyle(i).display););
  for (var d = i, f = u - 1;;) {
    for (var p = d.nodeValue, _ = f; _ >= 0; _--)
      if (!(null != p && _ > 0 && r.isSurrogatePair(p, _ - 1)))
        if (e.setStart(d, _), l(o(e), n)) i = d, u = _;
        else break;
    if (false === _ || 0 === d.childNodes.length) break;
    f = c(d = d.childNodes[_])
  }
  return e.setStart(i, u), e
}