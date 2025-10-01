/** Chunk was on 29679 **/
/** chunk id: 261317, original params: e,t,n (module,exports,require) **/
"use strict";
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
  Chunk585961 = require("./585961.jsx"),
  Chunk910494 = require("./910494.jsx"),
  Chunk196902 = require("./196902.jsx"),
  Chunk423087 = require("./423087.jsx"),
  Chunk582066 = require("./582066.jsx"),
  Chunk978088 = require("./978088.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk131085 = require("./131085.js"),
  Chunk755032 = require("./755032.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk565744 = require("./565744.js");
let w = function() {
  var e, t, n, w;
  (0, Chunk388032.useSyncMessages)(Chunk755032.messagesLoader);
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
    className: Chunk565744.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  if (null == R || null == Z) return null;
  let L = Chunk580685.Y.VISIBLE.has(Z.visibility),
    k = (0, Chunk731722.up)(R),
    G = !k || (null == Z ? true : Z.tag) == null,
    M = null != (e = Z.badge) ? module : Chunk131085.QV["0"],
    U = null != (t = Z.badgeColorPrimary) ? exports : Chunk131085.Ek["0"].primary,
    B = null != (n = Z.badgeColorSecondary) ? require : Chunk131085.Ek["0"].secondary,
    F = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk196902.Z, {
        className: Chunk565744.section,
        guildId: R.id,
        isDisabled: G,
        tag: null != (w = Z.tag) ? w : "",
        badge: M,
        primaryColor: U,
        secondaryColor: B
      }), (0, Chunk951288.jsx)(Chunk910494.Z, {
        className: Chunk565744.section,
        selectedBadge: M,
        guildId: R.id
      }), (0, Chunk951288.jsx)(Chunk423087.Z, {
        className: Chunk565744.section,
        guildId: R.id,
        badge: M,
        primaryColor: U,
        secondaryColor: B
      })]
    });
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      className: Chunk565744.title,
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk755032.default.mf2OwM)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk565744.container,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk565744.leftContent,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk565744.descriptionContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: Chunk388032.intl.format(Chunk755032.default["655Un5"], {
              onClickServerProfile: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE)
              },
              onClickApplyToJoin: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.ACCESS)
              }
            })
          }), !L && (0, Chunk951288.jsx)(Chunk494620.Z, {
            className: Chunk565744.privateProfileWarning,
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-xs/medium",
              children: Chunk388032.intl.format(Chunk755032.default.CRbkIy, {
                onClickEditSetting: () => Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE, Chunk981631.KsC.PROFILE_VISIBILITY)
              })
            })
          })]
        }), k ? (0, Chunk951288.jsxs)("div", {
          className: Chunk565744.enableSwitchContainer,
          children: [(0, Chunk951288.jsx)("label", {
            htmlFor: "enable-server-tag",
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: Chunk388032.intl.string(Chunk755032.default["1zams7"])
            })
          }), (0, Chunk951288.jsx)(Chunk755721.T2, {
            id: "enable-server-tag",
            checked: !G,
            onChange: () => {
              if (G) {
                var e;
                Chunk434404.Z.updateGuildProfile(R.id, {
                  tag: null != (e = Z.tag) ? module : "",
                  badge: M,
                  badgeColorPrimary: U,
                  badgeColorSecondary: B
                })
              } else Chunk434404.Z.updateGuildProfile(R.id, {
                tag: null
              })
            }
          })]
        }) : (0, Chunk951288.jsx)("div", {
          className: Chunk565744.boostingLinkContainer,
          children: (0, Chunk951288.jsx)(Chunk585961.P, {
            onClick: () => {
              (0, Chunk441536.Z)(R.id, Chunk100527.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), Chunk434404.Z.close()
            }
          })
        }), G ? (0, Chunk951288.jsx)(Chunk481060.nuw, {
          children: (0, Chunk951288.jsx)("div", {
            className: Chunk565744.disabledForm,
            children: F
          })
        }) : F]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk565744.sidebarContainer,
        children: [(0, Chunk951288.jsx)(Chunk978088.Z, {
          guildId: R.id,
          tag: Z.tag,
          badge: M,
          primaryColor: U,
          secondaryColor: B
        }), !G && (0, Chunk951288.jsx)(Chunk582066.Z, {
          guildId: R.id
        })]
      })]
    })]
  })
}