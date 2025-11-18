/** Chunk was on web.js **/
/** chunk id: 684256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk895924 = require("./895924.js"),
  Chunk827498 = require("./827498.js"),
  Chunk106066 = require("./106066.js"),
  Chunk98880 = require("./98880.jsx"),
  Chunk772606 = require("./772606.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk653796 = require("./653796.js");

function h(e) {
  let {
    context: t,
    entrypoint: n,
    title: a,
    look: h,
    items: m,
    sectionName: g,
    sectionOverallPosition: E
  } = e, b = (0, u.s)(), y = i.useMemo(() => n === c._b.TEXT ? d.kA : d.qR, [n]);
  return (0, r.jsxs)("section", {
    className: p.container,
    "aria-label": _.intl.formatToPlainString(_.t.iobNIB, {
      sectionTitle: a
    }),
    children: [(0, r.jsxs)("div", {
      className: p.header,
      children: [(0, r.jsx)(f.Z, {
        className: p.backButton
      }), (0, r.jsx)(s.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: a
      })]
    }), (0, r.jsx)(s.Ttm, {
      children: (0, r.jsx)("div", {
        className: o()({
          [p.appGrid]: h !== d.U4.ROW,
          [p.rows]: h === d.U4.ROW
        }),
        children: m.map((e, n) => {
          let {
            application: i,
            installOnDemand: a,
            showsPromoted: o
          } = e;
          return (0, r.jsx)(y, {
            context: t,
            application: i,
            look: h,
            sectionName: g,
            resultsPosition: n,
            location: l.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
            installOnDemand: a,
            isOneClickCTA: b,
            sectionOverallPosition: E,
            showsPromoted: o
          }, i.id)
        })
      })
    })]
  })
}