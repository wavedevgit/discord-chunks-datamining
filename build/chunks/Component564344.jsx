/** Chunk was on 30202 **/
/** chunk id: 564344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk254901 = require("./254901.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk851894 = require("./851894.jsx"),
  Chunk484459 = require("./484459.js"),
  Chunk216045 = require("./216045.jsx"),
  Chunk839469 = require("./839469.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk16703 = require("./16703.js"),
  Chunk785145 = require("./785145.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk455734 = require("./455734.js");

function S() {
  Chunk254901.Z.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getGuild()),
    t = (0, Chunk16703.Z)(),
    n = (0, Chunk442837.e7)([Chunk778825.Z, Chunk25990.Z], () => Chunk778825.Z.showNotice() || Chunk25990.Z.showNotice()),
    S = null != module ? module : exports,
    T = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    {
      subsection: I,
      setSubsection: N
    } = (0, Chunk785145.Z)(),
    {
      hasSearchResults: y,
      searchResults: A
    } = (0, Chunk839469.E)();

  function P(t) {
    if (I !== t) {
      if (n) {
        b.S.dispatch(j.CkL.SHAKE_APP, {
          duration: 300,
          intensity: l.$x
        }), b.S.dispatch(j.CkL.EMPHASIZE_NOTICE);
        return
      }
      t === E.NB.GUILD && null == e && null != S && (0, c.Fq)(S), N(t)
    }
  }
  Chunk73800.useEffect(() => {
    null != T && (0, Chunk484459.Z)(T.id, T.getAvatarURL(null == S ? true : S.id, 80), {
      guildId: null == S ? true : S.id
    })
  }, [null == S ? true : S.id, T]);
  let R = true,
    D = true;
  return y && 1 === A.length && (A.includes(Chunk726985.s6.PROFILE_SERVER_PROFILES) ? (P(Chunk526761.NB.GUILD), D = false) : A.includes(Chunk726985.s6.PROFILE_USER_PROFILE) && (P(Chunk526761.NB.USER_PROFILE), R = false)), (0, Chunk255367.jsxs)(Chunk481060.y5t, {
    component: (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk388032.t["vi7f+v"])
    }),
    children: [(0, Chunk255367.jsxs)(Chunk481060.njP, {
      className: Chunk455734.tabBar,
      type: "top",
      look: "brand",
      selectedItem: I,
      onItemSelect: P,
      children: [D ? (0, Chunk255367.jsx)(Chunk481060.njP.Item, {
        className: Chunk455734.tabBarItem,
        id: Chunk526761.NB.USER_PROFILE,
        children: Chunk388032.intl.string(Chunk388032.t["2p07FR"])
      }, Chunk526761.NB.USER_PROFILE) : null, R ? (0, Chunk255367.jsx)(Chunk481060.njP.Item, {
        className: Chunk455734.tabBarItem,
        id: Chunk526761.NB.GUILD,
        children: Chunk388032.intl.string(Chunk388032.t.kPHroa)
      }, Chunk526761.NB.GUILD) : null]
    }), I === Chunk526761.NB.GUILD ? (0, Chunk255367.jsx)(Chunk851894.Z, {
      selectedGuild: S
    }) : (0, Chunk255367.jsx)(Chunk216045.Z, {})]
  })
}