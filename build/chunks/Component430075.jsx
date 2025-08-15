/** Chunk was on 75347 **/
/** chunk id: 430075, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => L
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
  Chunk532223 = require("./532223.js");

function d() {
  return (0, Chunk255367.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    className: Chunk532223.nagbar,
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

function S(e) {
  let {} = e, t = (0, r.e7)([_.Z], () => _.Z.getAgeCheckStatus());
  return t === l.oE.NONE ? null : t === l.oE.SUCCESS ? (0, i.jsx)(a.Wn, {
    messageType: a.QYI.POSITIVE,
    children: I.intl.format(I.t.maZDLy, {
      login: "/login"
    })
  }) : t === l.oE.ERROR ? (0, i.jsx)(a.Wn, {
    messageType: a.QYI.ERROR,
    children: I.intl.string(I.t["4sILBQ"])
  }) : t === l.oE.FAILURE ? (0, i.jsx)(a.Wn, {
    messageType: a.QYI.ERROR,
    children: I.intl.string(I.t["40R63t"])
  }) : (0, i.jsx)(a.Wn, {
    messageType: a.QYI.INFO,
    children: I.intl.string(I.t["nhhy/f"])
  })
}

function N() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk532223.pageContainer,
    children: [(0, Chunk255367.jsx)(S, {}), (0, Chunk255367.jsx)(Chunk518560.Z, {})]
  })
}

function L() {
  return null == (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getSuspendedUserToken()) && (0, Chunk703656.uL)(Chunk981631.Z5c.LOGIN, {
    source: "suspended_user_safety_hub_page"
  }), (0, Chunk255367.jsxs)("div", {
    className: Chunk532223.container,
    children: [(0, Chunk255367.jsx)(d, {}), (0, Chunk255367.jsx)(N, {})]
  })
}