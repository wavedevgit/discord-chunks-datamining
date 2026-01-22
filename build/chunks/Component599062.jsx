/** Chunk was on web.js **/
/** chunk id: 599062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  h: () => _
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk535280 = require("./535280.js"),
  Chunk626768 = require("./626768.js"),
  Chunk464896 = require("./464896.js"),
  p = function(e) {
    return e[e.SHOP_PAGE = 0] = "SHOP_PAGE", e[e.GIFT_MODAL = 1] = "GIFT_MODAL", e
  }({});
let _ = e => {
  let {
    onRetry: t,
    errorOrigin: n,
    errorMessage: p
  } = e, _ = (0, o.Ay)(), h = (0, i.bG)([l.default], () => {
    let e = l.default.getCurrentUser();
    return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
  }), m = 1 === n ? u.tV : u.Df, g = 1 === n ? c.intl.string(c.t["+2QBZX"]) : c.intl.string(c.t.LuhKs2);
  return (0, r.jsxs)("div", {
    className: m,
    children: [(0, r.jsx)("img", {
      className: u.__invalid_loadIssueImg,
      src: (0, a.Mw)(_) ? d : f,
      alt: ""
    }), (0, r.jsx)(s.Heading, {
      className: u.st,
      variant: "heading-xl/semibold",
      children: c.intl.string(c.t.i5SQ74)
    }), (0, r.jsx)(s.Text, {
      className: u.h_,
      variant: "text-md/normal",
      children: g
    }), h && null != p && (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: "staff-only debug: " + p
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: u.yQ,
      children: (0, r.jsx)(s.Button, {
        variant: "primary",
        text: c.intl.string(c.t["+hivLW"]),
        onClick: t
      })
    })]
  })
}