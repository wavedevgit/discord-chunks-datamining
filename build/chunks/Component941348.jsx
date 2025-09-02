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
  var t;
  let {
    expandedContentRef: n,
    expansionSpring: f,
    isExpanded: _,
    isExpansionAnimationComplete: p,
    onCtxMenuOpened: h,
    onCtxMenuClosed: m,
    onCtxMenuSelection: g,
    quest: E,
    useReducedMotion: b,
    collapsedHeight: y,
    shouldShowRewardsCTAWhenCollapsed: O
  } = e, v = i.useRef(null), I = i.useRef(null), S = (null == (t = E.userStatus) ? true : t.enrolledAt) != null, T = (0, a.Rf)(E);
  return (0, r.jsxs)(s.p, {
    expandedContentRef: n,
    collapsedContentRef: v,
    expansionSpring: f,
    children: [(0, r.jsx)(l.Z, {
      ref: v,
      className: d.content,
      expansionSpring: f,
      isExpanded: _,
      isExpansionAnimationComplete: p,
      quest: E,
      useReducedMotion: b,
      taskDetails: T,
      onCtxMenuOpen: h,
      onCtxMenuClose: m,
      onCtxMenuSelect: g,
      overlayRef: I,
      shouldShowRewardsCTAWhenCollapsed: O
    }, O ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, r.jsx)(c.Z, {
      expansionSpring: f,
      className: d.content,
      collapsedHeight: y,
      onCtxMenuOpen: h,
      onCtxMenuClose: m,
      onCtxMenuSelect: g,
      overlayRef: I,
      isExpanded: _,
      isExpansionAnimationComplete: p,
      quest: E,
      useReducedMotion: b,
      ref: n,
      taskDetails: T,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Z, {
          expansionSpring: f,
          isExpanded: _
        }), !S && (0, r.jsx)(o.Z, {
          quest: E,
          expansionSpring: f,
          useReducedMotion: b,
          isExpanded: _,
          isExpansionAnimationComplete: p,
          onCtxMenuOpen: h,
          onCtxMenuClose: m,
          onCtxMenuSelect: g
        })]
      })
    }), (0, r.jsx)("div", {
      ref: I,
      className: d.overlay
    })]
  })
}