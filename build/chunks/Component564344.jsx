/** Chunk was on web.js **/
/** chunk id: 564344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
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

function w() {
  let e = (0, _.gN)("ProfileCustomizationSettingsPage"),
    t = (0, s.e7)([d.Z], () => d.Z.getGuild()),
    n = (0, v.Z)(),
    a = (0, s.e7)([d.Z, E.Z], () => d.Z.showNotice() || E.Z.showNotice()),
    w = null != t ? t : n,
    R = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
    {
      subsection: D,
      setSubsection: x
    } = (0, S.Z)(),
    L = g.R.useField("hasSearchResults"),
    j = g.R.useField("searchResults");

  function M(e) {
    if (D !== e) {
      if (a) {
        (0, O.Aj)({
          duration: 300,
          intensity: c.$x
        }), y.S.dispatch(I.CkL.EMPHASIZE_NOTICE);
        return
      }
      e === C.NB.GUILD && null == t && null != w && (0, u.Fq)(w), x(e)
    }
  }
  i.useEffect(() => {
    null != R && (null == w ? true : w.id) !== T._ && (0, p.Z)(R.id, R.getAvatarURL(null == w ? true : w.id, 80), {
      guildId: null == w ? true : w.id
    })
  }, [null == w ? true : w.id, R]);
  let k = true,
    U = true;
  return L && 1 === j.length && (j.includes(A.s6.PROFILE_SERVER_PROFILES) ? (M(C.NB.GUILD), U = false) : j.includes(A.s6.PROFILE_USER_PROFILE) && (M(C.NB.USER_PROFILE), k = false)), (0, r.jsxs)(h.N, {
    header: N.intl.string(N.t["vi7f+q"]),
    children: [(0, r.jsxs)(l.njP, {
      className: P.tabBar,
      type: "top",
      look: "brand",
      selectedItem: D,
      onItemSelect: M,
      children: [U || e ? (0, r.jsx)(l.njP.Item, {
        className: P.tabBarItem,
        id: C.NB.USER_PROFILE,
        children: N.intl.string(N.t["2p07FR"])
      }, C.NB.USER_PROFILE) : null, k || e ? (0, r.jsx)(l.njP.Item, {
        className: o()(P.tabBarItem, P.guildTabBarItem),
        "aria-label": N.intl.string(N.t.kPHroX),
        id: C.NB.GUILD,
        children: N.intl.string(N.t.kPHroX)
      }, C.NB.GUILD) : null]
    }), D === C.NB.GUILD ? (0, r.jsx)(f.Z, {
      selectedGuild: w
    }) : (0, r.jsx)(m.Z, {})]
  })
}