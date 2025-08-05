/** Chunk was on 82081 **/
r.d(t, {
  V: () => c
}), r(953529);
var n = r(255367);
r(73800);
var a = r(120356),
  o = r.n(a);
r(755721), r(481060), r(937860);
var i = r(973792);
let c = e => {
  let {
    invertTail: t,
    leftOffset: r,
    rightOffset: a,
    tailSpineClassName: c,
    tailTargetInnerClassName: s
  } = e;
  return (0, n.jsxs)("div", {
    className: o()(i.tail, t ? i.tailPositionInverted : i.tailPositionNormal),
    style: {
      left: r,
      right: a
    },
    children: [(0, n.jsx)("div", {
      className: o()(i.tailSpine, c)
    }), (0, n.jsx)("div", {
      className: o()(i.tailTargetOuter, t ? i.tailTargetPositionInverted : i.tailTargetPositionNormal),
      children: (0, n.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "8",
        height: "8",
        viewBox: "0 0 8 8",
        fill: "none",
        children: (0, n.jsx)("circle", {
          cx: "50%",
          cy: "50%",
          r: "3",
          className: o()(i.tailTargetInner, s)
        })
      })
    })]
  })
}