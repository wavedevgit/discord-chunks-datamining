/** Chunk was on web.js **/
/** chunk id: 600406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => E,
  k: () => y
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk756715 = require("./756715.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk51251 = require("./51251.js"),
  Chunk159691 = require("./159691.js"),
  Chunk37234 = require("./37234.js"),
  Chunk594174 = require("./594174.js"),
  Chunk997612 = require("./997612.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk120983 = require("./120983.js");
let g = RegExp("^dev://mana(/([-\\w._0-9]+))?$", "i");

function E(e) {
  return g.test(e)
}

function b(e) {
  let t = e.match(g);
  return null == t || t.length < 2 ? null : t[2]
}

function y(e) {
  var t;
  let n = (0, s.e7)([_.default], () => {
      let e = _.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    g = i.useMemo(() => {
      let t = b(e.url);
      for (let e of u.g.collections) {
        let n = e.groups.find(e => e.stories.some(e => e.id === t));
        if (null != n) return n.stories.find(e => e.id === t)
      }
    }, [e.url]),
    E = null != (t = null == g ? true : g.name) ? t : "Mana Playground",
    y = null != g && null != g.docs ? (0, r.jsx)(l.Anchor, {
      href: g.docs,
      children: "Documentation"
    }) : "Explore the Mana Design System",
    O = i.useCallback(() => {
      if (null != g) {
        for (let e of u.g.collections)
          if (e.groups.some(e => e.stories.some(e => e.id === g.id))) {
            p.$.setState({
              selectedCollection: e.id,
              selectedStory: g.id
            });
            break
          }
      }(0, f.jN)(h.S9g.MANA_PLAYGROUND)
    }, [g]);
  return n ? (0, r.jsx)("div", {
    className: m.root,
    "data-has-story": null != g,
    children: (0, r.jsxs)(o.Kqy, {
      direction: null == g ? "vertical" : "horizontal",
      align: null == g ? "start" : "center",
      gap: 12,
      justify: null == g ? "end" : "space-between",
      children: [(0, r.jsx)("div", {
        className: m.header,
        children: (0, r.jsxs)(o.Kqy, {
          direction: "horizontal",
          align: "start",
          gap: 8,
          children: [(0, r.jsx)(a.hh5, {
            size: "lg"
          }), (0, r.jsxs)(o.Kqy, {
            direction: "vertical",
            gap: 0,
            children: [(0, r.jsx)(c.x, {
              variant: "text-md/semibold",
              children: E
            }), (0, r.jsx)(c.x, {
              variant: "text-sm/normal",
              children: y
            })]
          })]
        })
      }), (0, r.jsx)(d.zxk, {
        size: "sm",
        onClick: O,
        text: "Open Playground",
        fullWidth: null == g
      })]
    })
  }) : null
}