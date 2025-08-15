/** Chunk was on 30202 **/
/** chunk id: 564344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk243778 = require("./243778.jsx"),
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
  Chunk921944 = require("./921944.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk455734 = require("./455734.js");

function A() {
  Chunk254901.Z.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getGuild()),
    t = (0, Chunk16703.Z)(),
    n = (0, Chunk442837.e7)([Chunk778825.Z, Chunk25990.Z], () => Chunk778825.Z.showNotice() || Chunk25990.Z.showNotice()),
    s = null != module ? module : exports,
    A = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    {
      subsection: P,
      setSubsection: R
    } = (0, Chunk785145.Z)(),
    {
      hasSearchResults: D,
      searchResults: Z
    } = (0, Chunk839469.E)();
  Chunk647438.useEffect(() => {
    null != A && (0, Chunk484459.Z)(A.id, A.getAvatarURL(null == Chunk120356 ? true : Chunk120356.id, 80), {
      guildId: null == Chunk120356 ? true : Chunk120356.id
    })
  }, [null == Chunk120356 ? true : Chunk120356.id, A]);
  let w = [Chunk704215.z.NAMEPLATE_GUILD_SETTINGS_TAB_NEW_BADGE],
    [k, L] = (0, Chunk243778.US)(w),
    B = k === Chunk704215.z.NAMEPLATE_GUILD_SETTINGS_TAB_NEW_BADGE;

  function M(t) {
    if (P !== t) {
      if (n) {
        E.S.dispatch(v.CkL.SHAKE_APP, {
          duration: 300,
          intensity: d.$x
        }), E.S.dispatch(v.CkL.EMPHASIZE_NOTICE);
        return
      }
      t === T.NB.GUILD && null == e && null != s && (0, p.Fq)(s), R(t)
    }
  }
  Chunk647438.useEffect(() => {
    P === Chunk526761.NB.GUILD && L(Chunk921944.L.TAKE_ACTION)
  }, [P, L]);
  let U = true,
    V = true;
  return D && 1 === Z.length && (Z.includes(Chunk726985.s6.PROFILE_SERVER_PROFILES) ? (M(Chunk526761.NB.GUILD), V = false) : Z.includes(Chunk726985.s6.PROFILE_USER_PROFILE) && (M(Chunk526761.NB.USER_PROFILE), U = false)), (0, Chunk951288.jsxs)(Chunk481060.y5t, {
    component: (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk388032.t["vi7f+v"])
    }),
    children: [(0, Chunk951288.jsxs)(Chunk481060.njP, {
      className: Chunk455734.tabBar,
      type: "top",
      look: "brand",
      selectedItem: P,
      onItemSelect: M,
      children: [V ? (0, Chunk951288.jsx)(Chunk481060.njP.Item, {
        className: Chunk455734.tabBarItem,
        id: Chunk526761.NB.USER_PROFILE,
        children: Chunk388032.intl.string(Chunk388032.t["2p07FR"])
      }, Chunk526761.NB.USER_PROFILE) : null, U ? (0, Chunk951288.jsxs)(Chunk481060.njP.Item, {
        className: a()(Chunk455734.tabBarItem, Chunk455734.guildTabBarItem),
        "aria-label": Chunk388032.intl.string(Chunk388032.t.kPHroa),
        id: Chunk526761.NB.GUILD,
        children: [Chunk388032.intl.string(Chunk388032.t.kPHroa), B && P !== Chunk526761.NB.GUILD && (0, Chunk951288.jsx)(Chunk481060.IGR, {
          text: Chunk388032.intl.string(Chunk388032.t.y2b7CA)
        })]
      }, Chunk526761.NB.GUILD) : null]
    }), P === Chunk526761.NB.GUILD ? (0, Chunk951288.jsx)(Chunk851894.Z, {
      selectedGuild: Chunk120356
    }) : (0, Chunk951288.jsx)(Chunk216045.Z, {})]
  })
}