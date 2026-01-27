/** Chunk was on web.js **/
/** chunk id: 198016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk392054 = require("./392054.js"),
  Chunk500049 = require("./500049.js"),
  Chunk933840 = require("./933840.js"),
  Chunk169909 = require("./169909.jsx"),
  Chunk278597 = require("./278597.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk920178 = require("./920178.js");

function h(e) {
  let {
    context: t,
    entrypoint: n,
    title: a,
    look: h,
    items: m,
    sectionName: g,
    sectionOverallPosition: E
  } = e, y = (0, u.f)(), b = i.useMemo(() => n === c.s4.TEXT ? d.Gt : d.wW, [n]);
  return (0, r.jsxs)("section", {
    className: _.kL,
    "aria-label": p.intl.formatToPlainString(p.t.iobNIB, {
      sectionTitle: a
    }),
    children: [(0, r.jsxs)("div", {
      className: _.wx,
      children: [(0, r.jsx)(f.A, {
        className: _.Gv
      }), (0, r.jsx)(s.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        children: a
      })]
    }), (0, r.jsx)(s.HOs, {
      children: (0, r.jsx)("div", {
        className: o()({
          [_.wf]: h !== d.r0.ROW,
          [_.Ge]: h === d.r0.ROW
        }),
        children: m.map((e, n) => {
          let {
            application: i,
            installOnDemand: a,
            showsPromoted: o
          } = e;
          return (0, r.jsx)(b, {
            context: t,
            application: i,
            look: h,
            sectionName: g,
            resultsPosition: n,
            location: l.Oh.APP_LAUNCHER_LIST_VIEW_ALL,
            installOnDemand: a,
            isOneClickCTA: y,
            sectionOverallPosition: E,
            showsPromoted: o
          }, i.id)
        })
      })
    })]
  })
}