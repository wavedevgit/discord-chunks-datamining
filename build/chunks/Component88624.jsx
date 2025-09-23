/** Chunk was on web.js **/
/** chunk id: 88624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346951 = require("./346951.jsx"),
  Chunk644744 = require("./644744.jsx"),
  Chunk792423 = require("./792423.jsx"),
  Chunk674985 = require("./674985.js"),
  Chunk594174 = require("./594174.js"),
  Chunk843200 = require("./843200.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk367844 = require("./367844.js");

function m() {
  let {
    houseMembership: e,
    isClaimed: t,
    isVerified: n
  } = (0, Chunk442837.cj)([Chunk594174.default, Chunk674985.Z], () => {
    let e = Chunk594174.default.getCurrentUser();
    return a()(null != module, "UserSettingsHypeSquad: currentUser cannot be undefined"), {
      houseMembership: Chunk674985.Z.getHouseMembership(),
      isClaimed: module.isClaimed(),
      isVerified: module.verified
    }
  });

  function i() {
    return null == module ? Chunk388032.intl.string(Chunk388032.t.iZowCQ) : Chunk388032.intl.string(Chunk388032.t.e7fL7O)
  }
  return (0, Chunk951288.jsxs)(Chunk481060.y5t, {
    component: (0, Chunk951288.jsxs)("div", {
      className: Chunk367844.intro,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xxl/semibold",
        className: Chunk367844.introHeader,
        children: Chunk512722()
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-lg/normal",
        children: Chunk388032.intl.string(Chunk388032.t["6FaVFB"])
      })]
    }),
    children: [(0, Chunk951288.jsx)(Chunk843200.Z, {
      className: Chunk367844.verificationNotice,
      unclaimedNotice: Chunk388032.intl.string(Chunk388032.t.vZU8Ki),
      unverifiedNotice: Chunk388032.intl.string(Chunk388032.t.T7TYEB)
    }), (0, Chunk951288.jsx)(Chunk644744.Z, {
      houseMembership: module,
      isClaimed: exports,
      isVerified: require
    }), (0, Chunk951288.jsx)(Chunk346951.Z, {}), (0, Chunk951288.jsx)(Chunk792423.Z, {
      isHypeSquadOnlineMember: null != module
    })]
  })
}