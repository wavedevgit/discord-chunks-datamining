/** Chunk was on 42521 **/
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
  Chunk975888 = require("./975888.js");
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
      className: d.content,
      expansionSpring: p,
      isExpanded: m,
      isExpansionAnimationComplete: g,
      quest: b,
      useReducedMotion: _,
      taskDetails: O,
      onCtxMenuOpen: f,
      onCtxMenuClose: x,
      onCtxMenuSelect: h,
      overlayRef: y,
      shouldShowRewardsCTAWhenCollapsed: v
    }, v ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, r.jsx)(c.Z, {
      expansionSpring: p,
      className: d.content,
      collapsedHeight: j,
      onCtxMenuOpen: f,
      onCtxMenuClose: x,
      onCtxMenuSelect: h,
      overlayRef: y,
      isExpanded: m,
      isExpansionAnimationComplete: g,
      quest: b,
      useReducedMotion: _,
      ref: n,
      taskDetails: O,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Z, {
          expansionSpring: p,
          isExpanded: m
        }), !E && (0, r.jsx)(a.Z, {
          quest: b,
          expansionSpring: p,
          useReducedMotion: _,
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