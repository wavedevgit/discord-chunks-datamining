/** Chunk was on 86142 **/
/** chunk id: 58013, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk585541 = require("./585541.jsx"),
  Chunk163698 = require("./163698.jsx"),
  Chunk528685 = require("./528685.jsx"),
  Chunk524832 = require("./524832.js");

function d(e) {
  let {
    transitionTo: t,
    token: n,
    width: d
  } = e, [h, f] = i.useState(u.k.START), [p, g] = i.useState(null), [m, A] = i.useState(""), x = {
    impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW
  };
  return (0, r.jsx)("div", {
    style: {
      margin: "8px"
    },
    children: (0, r.jsxs)(l.tN_, {
      activeSlide: h,
      width: d,
      onSlideReady: g,
      children: [(0, r.jsx)(l.q7S, {
        id: u.k.START,
        impressionProperties: x,
        impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
        children: (0, r.jsx)(o.A, {
          setSlide: f,
          transitionTo: t
        })
      }), (0, r.jsx)(l.q7S, {
        id: u.k.PASSWORD,
        impressionProperties: x,
        impressionName: s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
        children: (0, r.jsx)(a.A, {
          setOriginalEmail: A,
          setSlide: f,
          transitionTo: t,
          ready: p === u.k.PASSWORD,
          token: n
        })
      }), (0, r.jsx)(l.q7S, {
        id: u.k.SUCCESS,
        impressionProperties: x,
        impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
        children: (0, r.jsx)(c.A, {
          email: m
        })
      })]
    })
  })
}