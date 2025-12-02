/** Chunk was on 27978 **/
/** chunk id: 559786, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk301938 = require("./301938.jsx"),
  Chunk806701 = require("./806701.jsx"),
  Chunk808993 = require("./808993.jsx"),
  Chunk720196 = require("./720196.js");

function d(e) {
  let {
    transitionTo: t,
    token: n,
    width: d
  } = e, [h, g] = i.useState(u.n.START), [p, m] = i.useState(null), [f, _] = i.useState(""), x = {
    impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW
  };
  return (0, r.jsx)("div", {
    style: {
      margin: "8px"
    },
    children: (0, r.jsxs)(l.MyZ, {
      activeSlide: h,
      width: d,
      onSlideReady: m,
      children: [(0, r.jsx)(l.Mi4, {
        id: u.n.START,
        impressionProperties: x,
        impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
        children: (0, r.jsx)(o.Z, {
          setSlide: g,
          transitionTo: t
        })
      }), (0, r.jsx)(l.Mi4, {
        id: u.n.PASSWORD,
        impressionProperties: x,
        impressionName: s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
        children: (0, r.jsx)(a.Z, {
          setOriginalEmail: _,
          setSlide: g,
          transitionTo: t,
          ready: p === u.n.PASSWORD,
          token: n
        })
      }), (0, r.jsx)(l.Mi4, {
        id: u.n.SUCCESS,
        impressionProperties: x,
        impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
        children: (0, r.jsx)(c.Z, {
          email: f
        })
      })]
    })
  })
}