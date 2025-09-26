/** Chunk was on 35755 **/
/** chunk id: 684256, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk895924 = require("./895924.js"),
  Chunk827498 = require("./827498.js"),
  Chunk106066 = require("./106066.js"),
  Chunk98880 = require("./98880.jsx"),
  Chunk772606 = require("./772606.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk493891 = require("./493891.js");

function h(e) {
  let {
    context: t,
    entrypoint: n,
    title: r,
    look: h,
    items: v,
    sectionName: y,
    sectionOverallPosition: x
  } = e, b = (0, u.s)(), g = i.useMemo(() => n === c._b.TEXT ? d.kA : d.qR, [n]);
  return (0, l.jsxs)("section", {
    className: f.container,
    "aria-label": m.intl.formatToPlainString(m.t.iobNIC, {
      sectionTitle: r
    }),
    children: [(0, l.jsxs)("div", {
      className: f.header,
      children: [(0, l.jsx)(p.Z, {
        className: f.backButton
      }), (0, l.jsx)(o.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: r
      })]
    }), (0, l.jsx)(o.Ttm, {
      children: (0, l.jsx)("div", {
        className: a()({
          [f.appGrid]: h !== d.U4.ROW,
          [f.rows]: h === d.U4.ROW
        }),
        children: v.map((e, n) => {
          let {
            application: i,
            installOnDemand: r,
            showsPromoted: a
          } = e;
          return (0, l.jsx)(g, {
            context: t,
            application: i,
            look: h,
            sectionName: y,
            resultsPosition: n,
            location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
            installOnDemand: r,
            isOneClickCTA: b,
            sectionOverallPosition: x,
            showsPromoted: a
          }, i.id)
        })
      })
    })]
  })
}