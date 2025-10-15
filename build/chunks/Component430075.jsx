/** Chunk was on 75347 **/
/** chunk id: 430075, original params: n,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => R
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk236289 = require("./236289.js"),
  Chunk518560 = require("./518560.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk532223 = require("./532223.js");

function p() {
  return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    className: Chunk532223.nagbar,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: Chunk388032.intl.string(Chunk388032.t["MG+Bzb"])
    }), (0, Chunk951288.jsx)(Chunk481060.u3T, {
      href: Chunk800530.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: Chunk388032.intl.string(Chunk388032.t["9JceHN"])
      })
    })]
  })
}

function x(n) {
  let {} = n, e = (0, a.e7)([c.Z], () => c.Z.getAgeCheckStatus());
  return e === d.oE.NONE ? null : e === d.oE.SUCCESS ? (0, s.jsx)(r.Wn, {
    messageType: r.QYI.POSITIVE,
    children: g.intl.format(g.t.maZDL6, {
      login: "/login"
    })
  }) : e === d.oE.ERROR ? (0, s.jsx)(r.Wn, {
    messageType: r.QYI.ERROR,
    children: g.intl.string(g.t["4sILBU"])
  }) : e === d.oE.FAILURE ? (0, s.jsx)(r.Wn, {
    messageType: r.QYI.ERROR,
    children: g.intl.string(g.t["40R63o"])
  }) : (0, s.jsx)(r.Wn, {
    messageType: r.QYI.INFO,
    children: g.intl.string(g.t["nhhy/R"])
  })
}

function E() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk532223.pageContainer,
    children: [(0, Chunk951288.jsx)(x, {}), (0, Chunk951288.jsx)(Chunk518560.Z, {})]
  })
}

function R() {
  return null == (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getSuspendedUserToken()) && (0, Chunk703656.uL)(Chunk981631.Z5c.LOGIN, {
    source: "suspended_user_safety_hub_page"
  }), (0, Chunk951288.jsxs)("div", {
    className: Chunk532223.container,
    children: [(0, Chunk951288.jsx)(p, {}), (0, Chunk951288.jsx)(E, {})]
  })
}