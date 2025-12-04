/** Chunk was on 34061 **/
/** chunk id: 420186, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  R: () => h
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
let h = () => {
  var e;
  let l = Chunk695346.G6.useSetting(),
    {
      nickname: n,
      dmsAllowed: h,
      showActivity: j,
      setNickname: p,
      setDmsAllowed: v,
      setShowActivity: N,
      guildId: f,
      inviteCode: E
    } = (0, Chunk978986.XW)(),
    _ = null == (e = Chunk590965.Z.getProps().invite) ? true : module.is_nickname_changeable,
    Z = Chunk473749.useCallback(() => {
      Chunk626135.default.track(Chunk981631.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
        guild_id: f,
        invite_code: E
      })
    }, [f, E]);
  return (0, Chunk54381.jsxs)(Chunk590149.Z, {
    icon: (0, Chunk54381.jsx)(Chunk481060.ewm, {
      size: "md"
    }),
    title: Chunk388032.intl.string(Chunk388032.t["A5wHQ/"]),
    subtitle: Chunk388032.intl.string(Chunk388032.t.UKCSEd),
    onOpen: Z,
    maxHeight: _ ? 220 : 130,
    children: [_ && (0, Chunk54381.jsxs)("div", {
      className: Chunk181174.serverNickname,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: Chunk388032.intl.string(Chunk388032.t.me1lRk)
      }), (0, Chunk54381.jsx)(Chunk481060.oil, {
        placeholder: Chunk388032.intl.string(Chunk388032.t["09Q8yp"]),
        maxLength: Chunk981631.l$U,
        value: require,
        onChange: p
      })]
    }), (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t["/2ed37"]),
      value: h,
      onChange: v
    }), exports && (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t.bN4m1G),
      value: j,
      onChange: N
    })]
  })
}