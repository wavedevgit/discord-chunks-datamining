/** Chunk was on 48923 **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  o = n(192379),
  s = n(120356),
  a = n.n(s),
  i = n(642128),
  l = n(95985),
  c = n(400264);
let d = o.forwardRef(function(e, t) {
  var n;
  let {
    className: s,
    expansionSpring: d,
    isExpanded: u,
    isExpansionAnimationComplete: p,
    quest: m,
    taskDetails: f
  } = e, g = o.useRef(null), x = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
  return (0, r.jsx)(i.animated.div, {
    ref: t,
    "aria-hidden": u && p,
    className: a()(s, c.contentCollapsed, {
      [c.contentCollapsedExpanded]: u,
      [c.contentCollapsedAccepted]: x
    }),
    style: {
      opacity: d.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: (0, r.jsx)("div", {
      className: c.contentCollapsedWrapper,
      children: x ? (0, r.jsx)(l.Z, {
        contentLocation: "collapsed",
        quest: m,
        progressBarRef: g,
        isExpanded: !1,
        taskDetails: f
      }) : null
    })
  })
})