/** Chunk was on web.js **/
/** chunk id: 941348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk113434 = require("./113434.js"),
  Chunk308069 = require("./308069.jsx"),
  Chunk613087 = require("./613087.jsx"),
  Chunk457153 = require("./457153.jsx"),
  Chunk495722 = require("./495722.jsx"),
  Chunk321025 = require("./321025.jsx"),
  Chunk975888 = require("./975888.js");
let f = function(e) {
  var t, n;
  let {
    expandedContentRef: f,
    expansionSpring: _,
    isExpanded: p,
    isExpansionAnimationComplete: h,
    onCtxMenuOpened: m,
    onCtxMenuClosed: g,
    onCtxMenuSelection: E,
    quest: b,
    useReducedMotion: y,
    collapsedHeight: O
  } = e, v = (null == (t = b.userStatus) ? true : t.completedAt) != null, I = i.useRef(null), T = i.useRef(null), S = (null == (n = b.userStatus) ? true : n.enrolledAt) != null, A = (0, a.Rf)(b);
  return (0, r.jsxs)(s.p, {
    expandedContentRef: f,
    collapsedContentRef: I,
    expansionSpring: _,
    children: [(0, r.jsx)(l.Z, {
      ref: I,
      className: d.content,
      expansionSpring: _,
      isExpanded: p,
      isExpansionAnimationComplete: h,
      quest: b,
      useReducedMotion: y,
      taskDetails: A,
      onCtxMenuOpen: m,
      onCtxMenuClose: g,
      onCtxMenuSelect: E,
      overlayRef: T
    }, v ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, r.jsx)(c.Z, {
      expansionSpring: _,
      className: d.content,
      collapsedHeight: O,
      onCtxMenuOpen: m,
      onCtxMenuClose: g,
      onCtxMenuSelect: E,
      overlayRef: T,
      isExpanded: p,
      isExpansionAnimationComplete: h,
      quest: b,
      useReducedMotion: y,
      ref: f,
      taskDetails: A,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Z, {
          expansionSpring: _,
          isExpanded: p
        }), !S && (0, r.jsx)(o.Z, {
          quest: b,
          expansionSpring: _,
          useReducedMotion: y,
          isExpanded: p,
          isExpansionAnimationComplete: h,
          onCtxMenuOpen: m,
          onCtxMenuClose: g,
          onCtxMenuSelect: E
        })]
      })
    }), (0, r.jsx)("div", {
      ref: T,
      className: d.overlay
    })]
  })
}