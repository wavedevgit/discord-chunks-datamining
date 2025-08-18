/** Chunk was on 21046 **/
/** chunk id: 941348, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
let p = function(e) {
  var t;
  let {
    expandedContentRef: n,
    expansionSpring: p,
    isExpanded: m,
    isExpansionAnimationComplete: f,
    onCtxMenuOpened: g,
    onCtxMenuClosed: x,
    onCtxMenuSelection: h,
    quest: b,
    useReducedMotion: _,
    collapsedHeight: j,
    shouldShowRewardsCTAWhenCollapsed: v
  } = e, C = s.useRef(null), y = s.useRef(null), E = (null == (t = b.userStatus) ? true : t.enrolledAt) != null, O = (0, o.Rf)(b);
  return (0, r.jsxs)(i.p, {
    expandedContentRef: n,
    collapsedContentRef: C,
    expansionSpring: p,
    children: [(0, r.jsx)(l.Z, {
      ref: C,
      className: u.content,
      expansionSpring: p,
      isExpanded: m,
      isExpansionAnimationComplete: f,
      quest: b,
      useReducedMotion: _,
      taskDetails: O,
      onCtxMenuOpen: g,
      onCtxMenuClose: x,
      onCtxMenuSelect: h,
      overlayRef: y,
      shouldShowRewardsCTAWhenCollapsed: v
    }, v ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, r.jsx)(c.Z, {
      expansionSpring: p,
      className: u.content,
      collapsedHeight: j,
      onCtxMenuOpen: g,
      onCtxMenuClose: x,
      onCtxMenuSelect: h,
      overlayRef: y,
      isExpanded: m,
      isExpansionAnimationComplete: f,
      quest: b,
      useReducedMotion: _,
      ref: n,
      taskDetails: O,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.Z, {
          expansionSpring: p,
          isExpanded: m
        }), !E && (0, r.jsx)(a.Z, {
          quest: b,
          expansionSpring: p,
          useReducedMotion: _,
          isExpanded: m,
          isExpansionAnimationComplete: f,
          onCtxMenuOpen: g,
          onCtxMenuClose: x,
          onCtxMenuSelect: h
        })]
      })
    }), (0, r.jsx)("div", {
      ref: y,
      className: u.overlay
    })]
  })
}