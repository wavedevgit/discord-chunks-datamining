/** Chunk was on 75347 **/
/** chunk id: 430075, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk236289 = require("./236289.js"),
  Chunk518560 = require("./518560.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk581422 = require("./581422.js");

function _() {
  return (0, Chunk255367.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    className: Chunk581422.nagbar,
    children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: Chunk388032.intl.string(Chunk388032.t["MG+Bzc"])
    }), (0, Chunk255367.jsx)(Chunk481060.u3T, {
      href: Chunk800530.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: Chunk388032.intl.string(Chunk388032.t["9JceHB"])
      })
    })]
  })
}

function m(e) {
  let {} = e, t = (0, i.e7)([d.Z], () => d.Z.getAgeCheckStatus());
  return t === u.oE.NONE ? null : t === u.oE.SUCCESS ? (0, a.jsx)(r.Wn, {
    messageType: r.QYI.POSITIVE,
    children: f.intl.format(f.t.maZDLy, {
      login: "/login"
    })
  }) : t === u.oE.ERROR ? (0, a.jsx)(r.Wn, {
    messageType: r.QYI.ERROR,
    children: f.intl.string(f.t["4sILBQ"])
  }) : t === u.oE.FAILURE ? (0, a.jsx)(r.Wn, {
    messageType: r.QYI.ERROR,
    children: f.intl.string(f.t["40R63t"])
  }) : (0, a.jsx)(r.Wn, {
    messageType: r.QYI.INFO,
    children: f.intl.string(f.t["nhhy/f"])
  })
}

function g() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk581422.pageContainer,
    children: [(0, Chunk255367.jsx)(m, {}), (0, Chunk255367.jsx)(Chunk518560.Z, {})]
  })
}

function h() {
  return null == (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getSuspendedUserToken()) && (0, Chunk703656.uL)(Chunk981631.Z5c.LOGIN, {
    source: "suspended_user_safety_hub_page"
  }), (0, Chunk255367.jsxs)("div", {
    className: Chunk581422.container,
    children: [(0, Chunk255367.jsx)(_, {}), (0, Chunk255367.jsx)(g, {})]
  })
}