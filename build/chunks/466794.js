/** Chunk was on 11814 (5d38d8f10d63a4b1.js) **/
n.d(t, {
  X: () => o
});
var r = n(200651);
n(192379);
var i = n(481060),
  a = n(106481);

function o(e) {
  let {
    tooltipText: t,
    textColor: n
  } = e;
  return (0, r.jsxs)("span", {
    className: a.tooltipTextContainer,
    children: [(0, r.jsx)(i.SrA, {
      size: "md",
      color: "currentColor",
      className: a.nitroWheel
    }), (0, r.jsx)(i.Text, {
      className: a.tooltipText,
      variant: "text-sm/medium",
      color: null != n ? n : "text-normal",
      children: t
    })]
  })
}