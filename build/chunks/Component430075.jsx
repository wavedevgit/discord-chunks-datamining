/** Chunk was on 75347 **/
/** chunk id: 430075, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => R
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk236289 = require("./236289.js"),
  Chunk518560 = require("./518560.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk367337 = require("./367337.js");

function p() {
  return (0, a.jsxs)(r.qXd, {
    color: r.DM8.DANGER,
    className: h.nagbar,
    children: [(0, a.jsx)(r.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: g.intl.string(g.t["MG+Bzb"])
    }), (0, a.jsx)(r.u3T, {
      noticeType: u.kVF.SAFETY_SUSPENDED_USER_WARNING,
      href: o.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: g.intl.string(g.t["9JceHN"])
      })
    })]
  })
}

function E(e) {
  let {} = e, n = (0, s.e7)([l.Z], () => l.Z.getAgeCheckStatus());
  return n === o.oE.NONE ? null : n === o.oE.SUCCESS ? (0, a.jsx)(r.Wn, {
    messageType: r.QYI.POSITIVE,
    children: g.intl.format(g.t.maZDL6, {
      login: "/login"
    })
  }) : n === o.oE.ERROR ? (0, a.jsx)(r.Wn, {
    messageType: r.QYI.ERROR,
    children: g.intl.string(g.t["4sILBU"])
  }) : n === o.oE.FAILURE ? (0, a.jsx)(r.Wn, {
    messageType: r.QYI.ERROR,
    children: g.intl.string(g.t["40R63o"])
  }) : (0, a.jsx)(r.Wn, {
    messageType: r.QYI.INFO,
    children: g.intl.string(g.t["nhhy/R"])
  })
}

function x() {
  return (0, a.jsxs)("div", {
    className: h.pageContainer,
    children: [(0, a.jsx)(E, {}), (0, a.jsx)(c.Z, {})]
  })
}

function R() {
  return null == (0, s.e7)([d.default], () => d.default.getSuspendedUserToken()) && (0, i.uL)(u.Z5c.LOGIN, {
    source: "suspended_user_safety_hub_page"
  }), (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)(p, {}), (0, a.jsx)(x, {})]
  })
}