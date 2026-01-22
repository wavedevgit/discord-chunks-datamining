/** Chunk was on web.js **/
/** chunk id: 984516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk975571 = require("./975571.js"),
  Chunk500049 = require("./500049.js"),
  Chunk902527 = require("./902527.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk615074 = require("./615074.js");

function p(e) {
  let {
    padding: t = false
  } = e, n = i.useCallback(() => {
    (0, s.A)(o.A.getAppsSupportURL(u.MVz.APPS_LEARN_MORE))
  }, []), {
    trackSectionImpressionRef: p
  } = (0, c.A)({
    sectionName: l.yK.NEW_TO_APPS,
    numItems: 1,
    numVisibleItems: 1
  });
  return (0, r.jsx)("div", {
    className: t ? f.pK : true,
    children: (0, r.jsxs)("div", {
      ref: e => {
        p.current = e
      },
      className: f.kL,
      children: [(0, r.jsxs)("div", {
        className: f.rf,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/bold",
          color: "text-strong",
          children: d.intl.string(d.t["kw8/Ec"])
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: d.intl.string(d.t.GZoV1O)
        })]
      }), (0, r.jsx)(a.Button, {
        variant: "primary",
        text: d.intl.string(d.t.Ye51oT),
        "aria-label": d.intl.formatToPlainString(d.t.xx5Sug, {
          sectionTitle: d.intl.string(d.t["kw8/Ec"]),
          sectionBody: d.intl.string(d.t.GZoV1O)
        }),
        onClick: n
      })]
    })
  })
}