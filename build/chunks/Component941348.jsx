/** Chunk was on 56184 **/
/** chunk id: 941348, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk113434 = require("./113434.js"),
  Chunk308069 = require("./308069.jsx"),
  Chunk613087 = require("./613087.jsx"),
  Chunk457153 = require("./457153.jsx"),
  Chunk495722 = require("./495722.jsx"),
  Chunk321025 = require("./321025.jsx"),
  Chunk946603 = require("./946603.js");
let p = function(e) {
  var t;
  let {
    expandedContentRef: n,
    expansionSpring: p,
    isExpanded: m,
    isExpansionAnimationComplete: g,
    onCtxMenuOpened: f,
    onCtxMenuClosed: x,
    onCtxMenuSelection: h,
    quest: j,
    useReducedMotion: b,
    collapsedHeight: _,
    shouldShowRewardsCTAWhenCollapsed: v
  } = e, C = s.useRef(null), y = s.useRef(null), O = (null == (t = j.userStatus) ? true : t.enrolledAt) != null, E = (0, o.Rf)(j);
  return (0, r.jsxs)(i.p, {
    expandedContentRef: n,
    collapsedContentRef: C,
    expansionSpring: p,
    children: [(0, r.jsx)(l.Z, {
      ref: C,
      className: d.content,
      expansionSpring: p,
      isExpanded: m,
      isExpansionAnimationComplete: g,
      quest: j,
      useReducedMotion: b,
      taskDetails: E,
      onCtxMenuOpen: f,
      onCtxMenuClose: x,
      onCtxMenuSelect: h,
      overlayRef: y,
      shouldShowRewardsCTAWhenCollapsed: v
    }, v ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, r.jsx)(c.Z, {
      expansionSpring: p,
      className: d.content,
      collapsedHeight: _,
      onCtxMenuOpen: f,
      onCtxMenuClose: x,
      onCtxMenuSelect: h,
      overlayRef: y,
      isExpanded: m,
      isExpansionAnimationComplete: g,
      quest: j,
      useReducedMotion: b,
      ref: n,
      taskDetails: E,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Z, {
          expansionSpring: p,
          isExpanded: m
        }), !O && (0, r.jsx)(a.Z, {
          quest: j,
          expansionSpring: p,
          useReducedMotion: b,
          isExpanded: m,
          isExpansionAnimationComplete: g,
          onCtxMenuOpen: f,
          onCtxMenuClose: x,
          onCtxMenuSelect: h
        })]
      })
    }), (0, r.jsx)("div", {
      ref: y,
      className: d.overlay
    })]
  })
}