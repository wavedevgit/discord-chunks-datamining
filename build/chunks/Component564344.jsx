/** Chunk was on web.js **/
/** chunk id: 564344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk254901 = require("./254901.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk851894 = require("./851894.jsx"),
  Chunk484459 = require("./484459.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk216045 = require("./216045.jsx"),
  Chunk839469 = require("./839469.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk16703 = require("./16703.js"),
  Chunk785145 = require("./785145.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk455734 = require("./455734.js");

function R() {
  Chunk254901.Z.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getGuild()),
    t = (0, Chunk16703.Z)(),
    n = (0, Chunk442837.e7)([Chunk778825.Z, Chunk25990.Z], () => Chunk778825.Z.showNotice() || Chunk25990.Z.showNotice()),
    a = null != module ? module : exports,
    R = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    {
      subsection: P,
      setSubsection: w
    } = (0, Chunk785145.Z)(),
    D = Chunk839469.R.useField("hasSearchResults"),
    x = Chunk839469.R.useField("searchResults");

  function L(t) {
    if (P !== t) {
      if (n) {
        y.S.dispatch(I.CkL.SHAKE_APP, {
          duration: 300,
          intensity: c.$x
        }), y.S.dispatch(I.CkL.EMPHASIZE_NOTICE);
        return
      }
      t === T.NB.GUILD && null == e && null != a && (0, d.Fq)(a), w(t)
    }
  }
  Chunk647438.useEffect(() => {
    null != R && (null == Chunk120356 ? true : Chunk120356.id) !== Chunk647086._ && (0, Chunk484459.Z)(R.id, R.getAvatarURL(null == Chunk120356 ? true : Chunk120356.id, 80), {
      guildId: null == Chunk120356 ? true : Chunk120356.id
    })
  }, [null == Chunk120356 ? true : Chunk120356.id, R]);
  let M = true,
    j = true;
  return D && 1 === x.length && (x.includes(Chunk726985.s6.PROFILE_SERVER_PROFILES) ? (L(Chunk526761.NB.GUILD), j = false) : x.includes(Chunk726985.s6.PROFILE_USER_PROFILE) && (L(Chunk526761.NB.USER_PROFILE), M = false)), (0, Chunk951288.jsxs)(Chunk10298.N, {
    header: Chunk388032.intl.string(Chunk388032.t["vi7f+q"]),
    children: [(0, Chunk951288.jsxs)(Chunk481060.njP, {
      className: Chunk455734.tabBar,
      type: "top",
      look: "brand",
      selectedItem: P,
      onItemSelect: L,
      children: [j ? (0, Chunk951288.jsx)(Chunk481060.njP.Item, {
        className: Chunk455734.tabBarItem,
        id: Chunk526761.NB.USER_PROFILE,
        children: Chunk388032.intl.string(Chunk388032.t["2p07FR"])
      }, Chunk526761.NB.USER_PROFILE) : null, M ? (0, Chunk951288.jsx)(Chunk481060.njP.Item, {
        className: o()(Chunk455734.tabBarItem, Chunk455734.guildTabBarItem),
        "aria-label": Chunk388032.intl.string(Chunk388032.t.kPHroX),
        id: Chunk526761.NB.GUILD,
        children: Chunk388032.intl.string(Chunk388032.t.kPHroX)
      }, Chunk526761.NB.GUILD) : null]
    }), P === Chunk526761.NB.GUILD ? (0, Chunk951288.jsx)(Chunk851894.Z, {
      selectedGuild: Chunk120356
    }) : (0, Chunk951288.jsx)(Chunk216045.Z, {})]
  })
}