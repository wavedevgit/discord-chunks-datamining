/** Chunk was on 8106 **/
/** chunk id: 254925, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk580685 = require("./580685.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk266454 = require("./266454.js"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk731722 = require("./731722.js"),
  Chunk441536 = require("./441536.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk70086 = require("./70086.jsx"),
  Chunk835887 = require("./835887.jsx"),
  Chunk388661 = require("./388661.jsx"),
  Chunk500230 = require("./500230.jsx"),
  Chunk58909 = require("./58909.jsx"),
  Chunk742409 = require("./742409.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk131085 = require("./131085.js"),
  Chunk899926 = require("./899926.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk616397 = require("./616397.js");
let w = function() {
  var e, t, n, w;
  (0, Chunk388032.useSyncMessages)(Chunk899926.messagesLoader);
  let R = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    Z = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    {
      fetchGuildProfile: D,
      fetchStatus: A
    } = (0, Chunk65361.u)(null == R ? true : R.id);
  if (Chunk647438.useEffect(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, {
        dismissAction: Chunk921944.L.AUTO
      })
    }, []), Chunk647438.useEffect(() => {
      A === Chunk314852.a.NOT_FETCHED && D()
    }, [D, A]), A !== Chunk314852.a.FETCHED) return (0, Chunk951288.jsx)("div", {
    className: Chunk616397.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  if (null == R || null == Z) return null;
  let L = Chunk580685.Y.VISIBLE.has(Z.visibility),
    k = (0, Chunk731722.up)(R),
    M = !k || (null == Z ? true : Z.tag) == null,
    G = null != (e = Z.badge) ? module : Chunk131085.QV["0"],
    U = null != (t = Z.badgeColorPrimary) ? exports : Chunk131085.Ek["0"].primary,
    B = null != (n = Z.badgeColorSecondary) ? require : Chunk131085.Ek["0"].secondary,
    F = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk388661.Z, {
        className: Chunk616397.section,
        guildId: R.id,
        isDisabled: M,
        tag: null != (w = Z.tag) ? w : "",
        badge: G,
        primaryColor: U,
        secondaryColor: B
      }), (0, Chunk951288.jsx)(Chunk835887.Z, {
        className: Chunk616397.section,
        selectedBadge: G,
        guildId: R.id
      }), (0, Chunk951288.jsx)(Chunk500230.Z, {
        className: Chunk616397.section,
        guildId: R.id,
        badge: G,
        primaryColor: U,
        secondaryColor: B
      })]
    });
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      className: Chunk616397.title,
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk899926.default.mf2OwM)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk616397.container,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk616397.leftContent,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk616397.descriptionContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: Chunk388032.intl.format(Chunk899926.default["655Un5"], {
              onClickServerProfile: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE)
              },
              onClickApplyToJoin: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.ACCESS)
              }
            })
          }), !L && (0, Chunk951288.jsx)(Chunk494620.Z, {
            className: Chunk616397.privateProfileWarning,
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-xs/medium",
              children: Chunk388032.intl.format(Chunk899926.default.CRbkIy, {
                onClickEditSetting: () => Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE, Chunk981631.KsC.PROFILE_VISIBILITY)
              })
            })
          })]
        }), k ? (0, Chunk951288.jsxs)("div", {
          className: Chunk616397.enableSwitchContainer,
          children: [(0, Chunk951288.jsx)("label", {
            htmlFor: "enable-server-tag",
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: Chunk388032.intl.string(Chunk899926.default["1zams7"])
            })
          }), (0, Chunk951288.jsx)(Chunk755721.T2, {
            id: "enable-server-tag",
            checked: !M,
            onChange: () => {
              if (M) {
                var e;
                Chunk434404.Z.updateGuildProfile(R.id, {
                  tag: null != (e = Z.tag) ? module : "",
                  badge: G,
                  badgeColorPrimary: U,
                  badgeColorSecondary: B
                })
              } else Chunk434404.Z.updateGuildProfile(R.id, {
                tag: null
              })
            }
          })]
        }) : (0, Chunk951288.jsx)("div", {
          className: Chunk616397.boostingLinkContainer,
          children: (0, Chunk951288.jsx)(Chunk70086.P, {
            onClick: () => {
              (0, Chunk441536.Z)(R.id, Chunk100527.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), Chunk434404.Z.close()
            }
          })
        }), M ? (0, Chunk951288.jsx)(Chunk481060.nuw, {
          children: (0, Chunk951288.jsx)("div", {
            className: Chunk616397.disabledForm,
            children: F
          })
        }) : F]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk616397.sidebarContainer,
        children: [(0, Chunk951288.jsx)(Chunk742409.Z, {
          guildId: R.id,
          tag: Z.tag,
          badge: G,
          primaryColor: U,
          secondaryColor: B
        }), !M && (0, Chunk951288.jsx)(Chunk58909.Z, {
          guildId: R.id
        })]
      })]
    })]
  })
}