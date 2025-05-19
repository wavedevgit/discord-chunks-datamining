/** Chunk was on 82081 **/
n.d(t, {
  V: () => c
}), n(953529);
var r = n(255367);
n(73800);
var a = n(120356),
  o = n.n(a);
n(481060), n(937860);
var i = n(973792);
let c = e => {
  let {
    invertTail: t,
    leftOffset: n,
    rightOffset: a,
    tailSpineClassName: c,
    tailTargetInnerClassName: s
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(i.tail, t ? i.tailPositionInverted : i.tailPositionNormal),
    style: {
      left: n,
      right: a
    },
    children: [(0, r.jsx)("div", {
      className: o()(i.tailSpine, c)
    }), (0, r.jsx)("div", {
      className: o()(i.tailTargetOuter, t ? i.tailTargetPositionInverted : i.tailTargetPositionNormal),
      children: (0, r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "8",
        height: "8",
        viewBox: "0 0 8 8",
        fill: "none",
        children: (0, r.jsx)("circle", {
          cx: "50%",
          cy: "50%",
          r: "3",
          className: o()(i.tailTargetInner, s)
        })
      })
    })]
  })
}