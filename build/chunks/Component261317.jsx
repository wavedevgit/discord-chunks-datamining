/** Chunk was on 49236 **/
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
  Chunk70086 = require("./70086.jsx"),
  Chunk910494 = require("./910494.jsx"),
  Chunk196902 = require("./196902.jsx"),
  Chunk423087 = require("./423087.jsx"),
  Chunk582066 = require("./582066.jsx"),
  Chunk978088 = require("./978088.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk131085 = require("./131085.js"),
  Chunk659854 = require("./659854.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764009 = require("./764009.js");
let w = function() {
  var e, t, n, w;
  (0, Chunk388032.useSyncMessages)(Chunk659854.messagesLoader);
  let R = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    D = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    {
      fetchGuildProfile: Z,
      fetchStatus: A
    } = (0, Chunk65361.u)(null == R ? true : R.id);
  if (Chunk647438.useEffect(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, {
        dismissAction: Chunk921944.L.AUTO
      })
    }, []), Chunk647438.useEffect(() => {
      A === Chunk314852.a.NOT_FETCHED && Z()
    }, [Z, A]), A !== Chunk314852.a.FETCHED) return (0, Chunk951288.jsx)("div", {
    className: Chunk764009.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  if (null == R || null == D) return null;
  let L = Chunk580685.Y.VISIBLE.has(D.visibility),
    k = (0, Chunk731722.up)(R),
    G = !k || (null == D ? true : D.tag) == null,
    M = null != (e = D.badge) ? module : Chunk131085.QV["0"],
    U = null != (t = D.badgeColorPrimary) ? exports : Chunk131085.Ek["0"].primary,
    B = null != (n = D.badgeColorSecondary) ? require : Chunk131085.Ek["0"].secondary,
    F = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk196902.Z, {
        className: Chunk764009.section,
        guildId: R.id,
        isDisabled: G,
        tag: null != (w = D.tag) ? w : "",
        badge: M,
        primaryColor: U,
        secondaryColor: B
      }), (0, Chunk951288.jsx)(Chunk910494.Z, {
        className: Chunk764009.section,
        selectedBadge: M,
        guildId: R.id
      }), (0, Chunk951288.jsx)(Chunk423087.Z, {
        className: Chunk764009.section,
        guildId: R.id,
        badge: M,
        primaryColor: U,
        secondaryColor: B
      })]
    });
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      className: Chunk764009.title,
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk659854.default.mf2OwM)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk764009.container,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk764009.leftContent,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk764009.descriptionContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: Chunk388032.intl.format(Chunk659854.default["655Un5"], {
              onClickServerProfile: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE)
              },
              onClickApplyToJoin: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.ACCESS)
              }
            })
          }), !L && (0, Chunk951288.jsx)(Chunk494620.Z, {
            className: Chunk764009.privateProfileWarning,
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-xs/medium",
              children: Chunk388032.intl.format(Chunk659854.default.CRbkIy, {
                onClickEditSetting: () => Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE, Chunk981631.KsC.PROFILE_VISIBILITY)
              })
            })
          })]
        }), k ? (0, Chunk951288.jsxs)("div", {
          className: Chunk764009.enableSwitchContainer,
          children: [(0, Chunk951288.jsx)("label", {
            htmlFor: "enable-server-tag",
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: Chunk388032.intl.string(Chunk659854.default["1zams7"])
            })
          }), (0, Chunk951288.jsx)(Chunk755721.T2, {
            id: "enable-server-tag",
            checked: !G,
            onChange: () => {
              if (G) {
                var e;
                Chunk434404.Z.updateGuildProfile(R.id, {
                  tag: null != (e = D.tag) ? module : "",
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
          className: Chunk764009.boostingLinkContainer,
          children: (0, Chunk951288.jsx)(Chunk70086.P, {
            onClick: () => {
              (0, Chunk441536.Z)(R.id, Chunk100527.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), Chunk434404.Z.close()
            }
          })
        }), G ? (0, Chunk951288.jsx)(Chunk481060.nuw, {
          children: (0, Chunk951288.jsx)("div", {
            className: Chunk764009.disabledForm,
            children: F
          })
        }) : F]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk764009.sidebarContainer,
        children: [(0, Chunk951288.jsx)(Chunk978088.Z, {
          guildId: R.id,
          tag: D.tag,
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