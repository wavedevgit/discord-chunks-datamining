/** Chunk was on 37082 **/
/** chunk id: 457153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk113434 = require("./113434.js"),
  Chunk95985 = require("./95985.jsx"),
  Chunk667904 = require("./667904.js");
let d = Chunk73800.forwardRef(function(e, t) {
  var n;
  let {
    className: o,
    expansionSpring: d,
    isExpanded: p,
    isExpansionAnimationComplete: m,
    quest: g,
    taskDetails: f
  } = e, x = (0, l.Jf)(g), h = s.useRef(null), j = (null == (n = g.userStatus) ? true : n.enrolledAt) != null, _ = null != x ? x.percentComplete : f.percentComplete;
  return <i.animated.div ref={t} aria-hidden={p && m} className={a()(o, u.contentCollapsed, {
      [u.contentCollapsedExpanded]: p,
      [u.contentCollapsedAccepted]: j
    })} style={{
      opacity: d.to({
        range: [0, 1],
        output: [1, 0]
      })
    }}><div className={u.contentCollapsedWrapper}>{j ? (0, r.jsx)(c.Z, {
        contentLocation: "collapsed",
        quest: g,
        progressBarRef: h,
        isExpanded: false,
        percentComplete: _
      }) : null}</div></i.animated.div>
})