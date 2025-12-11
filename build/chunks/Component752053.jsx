/** Chunk was on web.js **/
/** chunk id: 752053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _,
  i: () => p
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk904118 = require("./904118.js"),
  Chunk982240 = require("./982240.js"),
  Chunk533854 = require("./533854.js"),
  p = function(e) {
    return e[e.SHOP_PAGE = 0] = "SHOP_PAGE", e[e.GIFT_MODAL = 1] = "GIFT_MODAL", e
  }({});
let _ = e => {
  let {
    onRetry: t,
    errorOrigin: n,
    errorMessage: p
  } = e, _ = (0, s.ZP)(), m = (0, i.e7)([l.default], () => {
    let e = l.default.getCurrentUser();
    return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
  }), h = 1 === n ? u.giftModalContainer : u.shopPageContainer, g = 1 === n ? c.intl.string(c.t["+2QBZX"]) : c.intl.string(c.t.LuhKs2);
  return (0, r.jsxs)("div", {
    className: h,
    children: [(0, r.jsx)("img", {
      className: u.__invalid_loadIssueImg,
      src: (0, a.wj)(_) ? d : f,
      alt: ""
    }), (0, r.jsx)(o.Heading, {
      className: u.heading1,
      variant: "heading-xl/semibold",
      children: c.intl.string(c.t.i5SQ74)
    }), (0, r.jsx)(o.Text, {
      className: u.description,
      variant: "text-md/normal",
      children: g
    }), m && null != p && (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: "staff-only debug: " + p
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: u.reload,
      children: (0, r.jsx)(o.Button, {
        variant: "primary",
        text: c.intl.string(c.t["+hivLW"]),
        onClick: t
      })
    })]
  })
}