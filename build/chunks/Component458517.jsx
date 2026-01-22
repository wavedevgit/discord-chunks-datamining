/** Chunk was on web.js **/
/** chunk id: 458517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk403362 = require("./403362.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk102373 = require("./102373.js");
let h = function(e) {
  let {
    createdAt: t,
    participantIds: n,
    applicationId: i,
    title: h,
    guildId: m,
    className: g
  } = e, E = (0, c.h)(i), b = (0, s.yK)([u.default], () => {
    var e;
    return null != (e = n.map(e => u.default.getUser(e)).filter(f.Vq)) ? e : []
  }), y = null == E ? true : E.name, O = null != t ? (0, d.Fe)(new Date(t)) : null, A = null == E ? true : E.getIconURL(32);
  if (null == t) return null;
  let v = null == h || "" === h;
  return (0, r.jsxs)("div", {
    className: a()(g, _.kL),
    children: [(0, r.jsx)("div", {
      className: _.gS,
      "aria-hidden": "true",
      children: null != A ? (0, r.jsx)("img", {
        src: A,
        alt: "",
        className: _.NH
      }) : (0, r.jsx)(l.kN9, {
        size: "sm",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: _.i0,
      children: [(0, r.jsx)(l.Text, {
        className: _.NV,
        variant: "text-md/normal",
        color: v ? "text-subtle" : "text-default",
        children: v ? p.intl.string(p.t.Cyxddp) : h
      }), null != y && "" !== y && (0, r.jsx)(l.Text, {
        className: _.xD,
        color: "text-subtle",
        variant: "text-sm/medium",
        children: y
      }), (0, r.jsx)(l.Text, {
        className: _.xD,
        color: "text-subtle",
        variant: "text-sm/normal",
        children: O
      })]
    }), (0, r.jsx)("div", {
      className: _.jW,
      children: (0, r.jsx)(o.A, {
        maxUsers: 4,
        users: b,
        guildId: m,
        size: l._3J.SIZE_24,
        "aria-label": p.intl.string(p.t.WTozwe)
      })
    })]
  })
}