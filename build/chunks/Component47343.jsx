/** Chunk was on 86872 **/
/** chunk id: 47343, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  R: () => h
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
  Chunk44609 = require("./44609.js"),
  Chunk731971 = require("./731971.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk152143 = require("./152143.js");
let h = () => {
  var e;
  let [n, t] = Chunk647438.useState(false), a = Chunk695346.G6.useSetting(), {
    nickname: h,
    dmsAllowed: E,
    showActivity: I,
    mutedServer: v,
    setNickname: f,
    setDmsAllowed: j,
    setShowActivity: S,
    setMutedServer: C,
    guildId: A,
    inviteCode: T
  } = (0, Chunk731971.XW)(), L = null == (e = Chunk590965.Z.getProps().invite) ? true : module.is_nickname_changeable, P = (0, Chunk44609.m4)({
    location: "InviteSettingsControls"
  });
  return (0, Chunk951288.jsxs)("div", {
    className: r()(Chunk152143.editProfileContainer, {
      [Chunk152143.opened]: exports
    }),
    children: [(0, Chunk951288.jsxs)(Chunk481060.P3F, {
      className: Chunk152143.header,
      onClick: () => {
        exports || Chunk626135.default.track(Chunk981631.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
          guild_id: A,
          invite_code: T
        }), require(!exports)
      },
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk152143.headerIconWrapper,
        children: (0, Chunk951288.jsx)(Chunk481060.ewm, {
          size: "md"
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk152143.title,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: Chunk388032.intl.string(Chunk388032.t.A5wHQ0)
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: Chunk388032.intl.string(Chunk388032.t.UKCSER)
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: r()(Chunk152143.caret, {
          [Chunk152143.opened]: exports
        }),
        children: (0, Chunk951288.jsx)(Chunk259580.Z, {
          width: 18,
          height: 18,
          direction: Chunk259580.Z.Directions.DOWN
        })
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: r()(Chunk152143.customizationSection, {
        [Chunk152143.opened]: exports
      }, L ? null : Chunk152143.condensed),
      children: [L && (0, Chunk951288.jsxs)("div", {
        className: Chunk152143.serverNickname,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: Chunk388032.intl.string(Chunk388032.t.me1lRk)
        }), (0, Chunk951288.jsx)(Chunk481060.oil, {
          placeholder: Chunk388032.intl.string(Chunk388032.t["09Q8ys"]),
          maxLength: Chunk981631.l$U,
          value: h,
          onChange: f
        })]
      }), (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["/2ed39"]),
        value: E,
        onChange: j
      }), Chunk120356 && (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.bN4m1N),
        value: I,
        onChange: S
      }), P && (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["0nZCqK"]),
        value: v,
        onChange: C
      })]
    })]
  })
}