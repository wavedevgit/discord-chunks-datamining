/** Chunk was on web.js **/
/** chunk id: 564344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk851894 = require("./851894.jsx"),
  Chunk484459 = require("./484459.js"),
  Chunk526665 = require("./526665.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk216045 = require("./216045.jsx"),
  Chunk839469 = require("./839469.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk88658 = require("./88658.js"),
  Chunk16703 = require("./16703.js"),
  Chunk785145 = require("./785145.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37149 = require("./37149.js");

function R() {
  let e = (0, Chunk526665.gN)("ProfileCustomizationSettingsPage"),
    t = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getGuild()),
    n = (0, Chunk16703.Z)(),
    a = (0, Chunk442837.e7)([Chunk778825.Z, Chunk25990.Z], () => Chunk778825.Z.showNotice() || Chunk25990.Z.showNotice()),
    R = null != exports ? exports : require,
    w = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    {
      subsection: D,
      setSubsection: x
    } = (0, Chunk785145.Z)(),
    L = Chunk839469.R.useField("hasSearchResults"),
    j = Chunk839469.R.useField("searchResults");

  function M(e) {
    if (D !== e) {
      if (a) {
        (0, O.Aj)({
          duration: 300,
          intensity: c.$x
        }), y.S.dispatch(I.CkL.EMPHASIZE_NOTICE);
        return
      }
      e === C.NB.GUILD && null == t && null != R && (0, u.Fq)(R), x(e)
    }
  }
  Chunk473749.useEffect(() => {
    null != w && (null == R ? true : R.id) !== Chunk647086._ && (0, Chunk484459.Z)(w.id, w.getAvatarURL(null == R ? true : R.id, 80), {
      guildId: null == R ? true : R.id
    })
  }, [null == R ? true : R.id, w]);
  let k = true,
    U = true;
  return L && 1 === j.length && (j.includes(Chunk726985.s6.PROFILE_SERVER_PROFILES) ? (M(Chunk526761.NB.GUILD), U = false) : j.includes(Chunk726985.s6.PROFILE_USER_PROFILE) && (M(Chunk526761.NB.USER_PROFILE), k = false)), (0, Chunk54381.jsxs)(Chunk10298.N, {
    header: Chunk388032.intl.string(Chunk388032.t["vi7f+q"]),
    children: [(0, Chunk54381.jsxs)(Chunk481060.njP, {
      className: Chunk37149.tabBar,
      type: "top",
      look: "brand",
      selectedItem: D,
      onItemSelect: M,
      children: [U || module ? (0, Chunk54381.jsx)(Chunk481060.njP.Item, {
        className: Chunk37149.tabBarItem,
        id: Chunk526761.NB.USER_PROFILE,
        children: Chunk388032.intl.string(Chunk388032.t["2p07FR"])
      }, Chunk526761.NB.USER_PROFILE) : null, k || module ? (0, Chunk54381.jsx)(Chunk481060.njP.Item, {
        className: o()(Chunk37149.tabBarItem, Chunk37149.guildTabBarItem),
        "aria-label": Chunk388032.intl.string(Chunk388032.t.kPHroX),
        id: Chunk526761.NB.GUILD,
        children: Chunk388032.intl.string(Chunk388032.t.kPHroX)
      }, Chunk526761.NB.GUILD) : null]
    }), D === Chunk526761.NB.GUILD ? (0, Chunk54381.jsx)(Chunk851894.Z, {
      selectedGuild: R
    }) : (0, Chunk54381.jsx)(Chunk216045.Z, {})]
  })
}