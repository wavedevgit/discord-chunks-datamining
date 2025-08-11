/** Chunk was on 37082 **/
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
  Chunk62753 = require("./62753.js");
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
    useReducedMotion: _,
    collapsedHeight: b
  } = e, v = s.useRef(null), C = s.useRef(null), y = (null == (t = j.userStatus) ? true : t.enrolledAt) != null, O = (0, o.Rf)(j);
  return <i.p expandedContentRef={n} collapsedContentRef={v} expansionSpring={p}>{<l.Z ref={v} className={d.content} expansionSpring={p} isExpanded={m} isExpansionAnimationComplete={g} quest={j} useReducedMotion={_} taskDetails={O} />}{<c.Z expansionSpring={p} className={d.content} collapsedHeight={b} onCtxMenuOpen={f} onCtxMenuClose={x} onCtxMenuSelect={h} overlayRef={C} isExpanded={m} isExpansionAnimationComplete={g} quest={j} useReducedMotion={_} ref={n} taskDetails={O}><r.Fragment>{<u.Z expansionSpring={p} isExpanded={m} />}{!y && <a.Z quest={j} expansionSpring={p} useReducedMotion={_} isExpanded={m} isExpansionAnimationComplete={g} onCtxMenuOpen={f} onCtxMenuClose={x} onCtxMenuSelect={h} />}</r.Fragment></c.Z>}{<div ref={C} className={d.overlay} />}</i.p>
}