/** Chunk was on web.js **/
/** chunk id: 600406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => p,
  k: () => m
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk51251 = require("./51251.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk594174 = require("./594174.js"),
  Chunk997612 = require("./997612.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk567 = require("./567.js");
let _ = RegExp("^dev://mana(/([-\\w._0-9]+))?$", "i");

function p(e) {
  return _.test(e)
}

function h(e) {
  let t = e.match(_);
  return null == t || t.length < 2 ? null : t[2]
}

function m(e) {
  var t;
  let n = (0, a.e7)([c.default], () => {
      let e = c.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    _ = i.useMemo(() => {
      var t;
      let n = h(e.url);
      return null == (t = o.$.groups.find(e => e.stories.some(e => e.id === n))) ? true : t.stories.find(e => e.id === n)
    }, [e.url]),
    p = null != (t = null == _ ? true : _.name) ? t : "Mana Playground",
    m = null != _ && null != _.docs ? (0, r.jsx)(s.eee, {
      href: _.docs,
      children: "Documentation"
    }) : "Explore the Mana Design System",
    g = i.useCallback(() => {
      null != _ && u.$.setState({
        selected: _.id
      }), (0, l.jN)(d.S9g.MANA_PLAYGROUND)
    }, [_]);
  return n ? (0, r.jsx)("div", {
    className: f.root,
    "data-has-story": null != _,
    children: (0, r.jsxs)(s.Kqy, {
      direction: null == _ ? "vertical" : "horizontal",
      align: null == _ ? "start" : "center",
      gap: 12,
      justify: null == _ ? "end" : "space-between",
      children: [(0, r.jsx)("div", {
        className: f.header,
        children: (0, r.jsxs)(s.Kqy, {
          direction: "horizontal",
          align: "start",
          gap: 8,
          children: [(0, r.jsx)(s.hh5, {
            size: "lg"
          }), (0, r.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 0,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/semibold",
              children: p
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              children: m
            })]
          })]
        })
      }), (0, r.jsx)(s.zxk, {
        size: "sm",
        onClick: g,
        text: "Open Playground",
        fullWidth: null == _
      })]
    })
  }) : null
}