/** Chunk was on 86872 **/
/** chunk id: 420186, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  R: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk590965 = require("./590965.js"),
  Chunk590149 = require("./590149.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk51331 = require("./51331.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk978986 = require("./978986.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk181174 = require("./181174.js");
let x = () => {
  var e;
  let n = Chunk695346.G6.useSetting(),
    {
      nickname: t,
      dmsAllowed: x,
      showActivity: g,
      setNickname: f,
      setDmsAllowed: N,
      setShowActivity: h,
      guildId: v,
      inviteCode: E
    } = (0, Chunk978986.XW)(),
    I = null == (e = Chunk590965.Z.getProps().invite) ? true : module.is_nickname_changeable,
    j = Chunk473749.useCallback(() => {
      Chunk626135.default.track(Chunk981631.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
        guild_id: v,
        invite_code: E
      })
    }, [v, E]);
  return (0, Chunk54381.jsxs)(Chunk590149.Z, {
    className: Chunk181174.accordion,
    icon: (0, Chunk54381.jsx)(Chunk481060.ewm, {
      size: "md"
    }),
    title: Chunk388032.intl.string(Chunk388032.t["A5wHQ/"]),
    subtitle: Chunk388032.intl.string(Chunk388032.t.UKCSEd),
    onOpen: j,
    maxHeight: I ? 220 : 130,
    children: [I && (0, Chunk54381.jsxs)("div", {
      className: Chunk181174.serverNickname,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.me1lRk)
      }), (0, Chunk54381.jsx)(Chunk481060.oil, {
        placeholder: Chunk388032.intl.string(Chunk388032.t["09Q8yp"]),
        maxLength: Chunk981631.l$U,
        value: require,
        onChange: f
      })]
    }), (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t["/2ed37"]),
      value: x,
      onChange: N
    }), exports && (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t.bN4m1G),
      value: g,
      onChange: h
    })]
  })
}