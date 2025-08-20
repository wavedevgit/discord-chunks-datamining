/** Chunk was on web.js **/
/** chunk id: 647365, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk453217 = require("./453217.jsx"),
  Chunk578080 = require("./578080.jsx"),
  Chunk443648 = require("./443648.js");
let s = function(e) {
  let {
    collapsedHeight: t,
    expandedContentRef: n,
    expansionSpring: s,
    isExpanded: l,
    isExpansionAnimationComplete: c,
    onCtxMenuOpened: u,
    onCtxMenuClosed: d,
    onCtxMenuSelection: f,
    quest: _,
    useReducedMotion: p
  } = e;
  return (0, r.jsx)(a.Z, {
    expansionSpring: s,
    className: o.content,
    collapsedHeight: t,
    onCtxMenuOpen: u,
    onCtxMenuClose: d,
    onCtxMenuSelect: f,
    isExpanded: l,
    isExpansionAnimationComplete: c,
    quest: _,
    useReducedMotion: p,
    ref: n,
    children: (0, r.jsx)(i.Z, {
      className: o.content,
      expansionSpring: s,
      isExpanded: l,
      isExpansionAnimationComplete: c,
      quest: _,
      useReducedMotion: p
    })
  })
}