/** Chunk was on 3408 **/
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
  Chunk511760 = require("./511760.js");
let p = function(e) {
  var t, n;
  let {
    expandedContentRef: p,
    expansionSpring: m,
    isExpanded: g,
    isExpansionAnimationComplete: f,
    onCtxMenuOpened: h,
    onCtxMenuClosed: x,
    onCtxMenuSelection: _,
    quest: b,
    useReducedMotion: v,
    collapsedHeight: j,
    onGameSheetOpened: C,
    onGameSheetClosed: y
  } = e, E = (null == (t = b.userStatus) ? true : t.completedAt) != null, O = s.useRef(null), S = s.useRef(null), T = (null == (n = b.userStatus) ? true : n.enrolledAt) != null, w = (0, o.Rf)(b);
  return (0, r.jsxs)(i.p, {
    expandedContentRef: p,
    collapsedContentRef: O,
    expansionSpring: m,
    children: [(0, r.jsx)(l.Z, {
      ref: O,
      className: u.content,
      expansionSpring: m,
      isExpanded: g,
      isExpansionAnimationComplete: f,
      quest: b,
      useReducedMotion: v,
      taskDetails: w,
      onCtxMenuOpen: h,
      onCtxMenuClose: x,
      onCtxMenuSelect: _,
      overlayRef: S
    }, E ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, r.jsx)(c.Z, {
      expansionSpring: m,
      className: u.content,
      collapsedHeight: j,
      onCtxMenuOpen: h,
      onCtxMenuClose: x,
      onCtxMenuSelect: _,
      onGameSheetOpened: C,
      onGameSheetClosed: y,
      overlayRef: S,
      isExpanded: g,
      isExpansionAnimationComplete: f,
      quest: b,
      useReducedMotion: v,
      ref: p,
      taskDetails: w,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.Z, {
          expansionSpring: m,
          isExpanded: g
        }), !T && (0, r.jsx)(a.Z, {
          quest: b,
          expansionSpring: m,
          useReducedMotion: v,
          isExpanded: g,
          isExpansionAnimationComplete: f,
          onCtxMenuOpen: h,
          onCtxMenuClose: x,
          onCtxMenuSelect: _
        })]
      })
    }), (0, r.jsx)("div", {
      ref: S,
      className: u.overlay
    })]
  })
}