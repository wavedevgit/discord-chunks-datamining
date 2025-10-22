/** Chunk was on 86872 **/
/** chunk id: 420186, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  R: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk590965 = require("./590965.js"),
  Chunk695346 = require("./695346.js"),
  Chunk51331 = require("./51331.jsx"),
  Chunk259580 = require("./259580.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk978986 = require("./978986.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk626090 = require("./626090.js");
let N = () => {
  var e;
  let [n, t] = Chunk647438.useState(false), a = Chunk695346.G6.useSetting(), {
    nickname: N,
    dmsAllowed: f,
    showActivity: h,
    setNickname: E,
    setDmsAllowed: I,
    setShowActivity: v,
    guildId: j,
    inviteCode: S
  } = (0, Chunk978986.XW)(), C = null == (e = Chunk590965.Z.getProps().invite) ? true : module.is_nickname_changeable;
  return (0, Chunk951288.jsxs)("div", {
    className: r()(Chunk626090.editProfileContainer, {
      [Chunk626090.opened]: exports
    }),
    children: [(0, Chunk951288.jsxs)(Chunk481060.P3F, {
      className: Chunk626090.header,
      onClick: () => {
        exports || Chunk626135.default.track(Chunk981631.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
          guild_id: j,
          invite_code: S
        }), require(!exports)
      },
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk626090.headerIconWrapper,
        children: (0, Chunk951288.jsx)(Chunk481060.ewm, {
          size: "md"
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk626090.title,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: Chunk388032.intl.string(Chunk388032.t["A5wHQ/"])
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: Chunk388032.intl.string(Chunk388032.t.UKCSEd)
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: r()(Chunk626090.caret, {
          [Chunk626090.opened]: exports
        }),
        children: (0, Chunk951288.jsx)(Chunk259580.Z, {
          width: 18,
          height: 18,
          direction: Chunk259580.Z.Directions.DOWN
        })
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: r()(Chunk626090.customizationSection, {
        [Chunk626090.opened]: exports
      }, C ? null : Chunk626090.condensed),
      children: [C && (0, Chunk951288.jsxs)("div", {
        className: Chunk626090.serverNickname,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: Chunk388032.intl.string(Chunk388032.t.me1lRk)
        }), (0, Chunk951288.jsx)(Chunk481060.oil, {
          placeholder: Chunk388032.intl.string(Chunk388032.t["09Q8yp"]),
          maxLength: Chunk981631.l$U,
          value: N,
          onChange: E
        })]
      }), (0, Chunk951288.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t["/2ed37"]),
        value: f,
        onChange: I
      }), Chunk120356 && (0, Chunk951288.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t.bN4m1G),
        value: h,
        onChange: v
      })]
    })]
  })
}