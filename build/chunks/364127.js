/** Chunk was on 68880 **/
"use strict";
var n = r(169774),
  i = r(230215),
  o = r(601743),
  a = r(856590),
  u = r(527652),
  s = r(213562),
  c = r(881080),
  l = r(44851),
  f = r(405133),
  p = r(373458),
  h = r(858186),
  d = r(389660),
  g = r(648336),
  y = n.isBrowser("Chrome") ? g : function(t) {};
t.exports = {
  onBeforeInput: i,
  onBlur: o,
  onCompositionStart: a,
  onCopy: u,
  onCut: s,
  onDragOver: c,
  onDragStart: l,
  onFocus: f,
  onInput: p,
  onKeyDown: h,
  onPaste: d,
  onSelect: g,
  onMouseUp: y,
  onKeyUp: y
}