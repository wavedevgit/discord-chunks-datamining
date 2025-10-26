/** Chunk was on 64982 **/
/** chunk id: 261317, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk580685 = require("./580685.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk266454 = require("./266454.js"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk731722 = require("./731722.js"),
  Chunk892803 = require("./892803.js"),
  Chunk441536 = require("./441536.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk465682 = require("./465682.jsx"),
  Chunk585961 = require("./585961.jsx"),
  Chunk910494 = require("./910494.jsx"),
  Chunk196902 = require("./196902.jsx"),
  Chunk423087 = require("./423087.jsx"),
  Chunk582066 = require("./582066.jsx"),
  Chunk978088 = require("./978088.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk131085 = require("./131085.js"),
  Chunk562915 = require("./562915.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764009 = require("./764009.js");
let Z = function() {
  var e, t, n, Z;
  (0, Chunk388032.useSyncMessages)(Chunk562915.messagesLoader);
  let {
    enabled: R
  } = Chunk892803.Z.useConfig({
    location: "GuildSettingsTags"
  }), D = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()), A = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()), {
    fetchGuildProfile: L,
    fetchStatus: k
  } = (0, Chunk65361.u)(null == D ? true : D.id);
  if (Chunk647438.useEffect(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, {
        dismissAction: Chunk921944.L.AUTO
      })
    }, []), Chunk647438.useEffect(() => {
      k === Chunk314852.a.NOT_FETCHED && L()
    }, [L, k]), k !== Chunk314852.a.FETCHED) return (0, Chunk951288.jsx)("div", {
    className: Chunk764009.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  if (null == D || null == A) return null;
  let G = Chunk580685.Y.VISIBLE.has(A.visibility),
    M = (0, Chunk731722.up)(D),
    U = !M || (null == A ? true : A.tag) == null,
    B = null != (e = A.badge) ? module : Chunk131085.QV["0"],
    F = null != (t = A.badgeColorPrimary) ? exports : Chunk131085.Ek["0"].primary,
    H = null != (n = A.badgeColorSecondary) ? require : Chunk131085.Ek["0"].secondary,
    W = () => {
      (0, Chunk441536.Z)(D.id, Chunk100527.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), Chunk434404.Z.close()
    },
    z = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk196902.Z, {
        className: Chunk764009.section,
        guildId: D.id,
        isDisabled: U,
        tag: null != (Z = A.tag) ? Z : "",
        badge: B,
        primaryColor: F,
        secondaryColor: H
      }), (0, Chunk951288.jsx)(Chunk910494.Z, {
        className: Chunk764009.section,
        selectedBadge: B,
        guildId: D.id
      }), (0, Chunk951288.jsx)(Chunk423087.Z, {
        className: Chunk764009.section,
        guildId: D.id,
        badge: B,
        primaryColor: F,
        secondaryColor: H
      })]
    });
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      className: Chunk764009.title,
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk562915.default.mf2OwH)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk764009.container,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk764009.leftContent,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk764009.descriptionContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: Chunk388032.intl.format(Chunk562915.default["655Uny"], {
              onClickServerProfile: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE)
              },
              onClickApplyToJoin: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.ACCESS)
              }
            })
          }), !G && (0, Chunk951288.jsx)(Chunk494620.Z, {
            className: Chunk764009.privateProfileWarning,
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-xs/medium",
              children: Chunk388032.intl.format(Chunk562915.default.CRbkIz, {
                onClickEditSetting: () => Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE, Chunk981631.KsC.PROFILE_VISIBILITY)
              })
            })
          })]
        }), M ? (0, Chunk951288.jsxs)("div", {
          className: Chunk764009.enableSwitchContainer,
          children: [(0, Chunk951288.jsx)("label", {
            htmlFor: "enable-server-tag",
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: Chunk388032.intl.string(Chunk562915.default["1zams8"])
            })
          }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
            id: "enable-server-tag",
            checked: !U,
            onChange: () => {
              if (U) {
                var e;
                Chunk434404.Z.updateGuildProfile(D.id, {
                  tag: null != (e = A.tag) ? module : "",
                  badge: B,
                  badgeColorPrimary: F,
                  badgeColorSecondary: H
                })
              } else Chunk434404.Z.updateGuildProfile(D.id, {
                tag: null
              })
            }
          })]
        }) : (0, Chunk951288.jsx)("div", {
          className: Chunk764009.boostingLinkContainer,
          children: R ? (0, Chunk951288.jsx)(Chunk465682.v, {
            onClick: W
          }) : (0, Chunk951288.jsx)(Chunk585961.P, {
            onClick: W
          })
        }), U ? (0, Chunk951288.jsx)(Chunk481060.nuw, {
          children: (0, Chunk951288.jsx)("div", {
            className: Chunk764009.disabledForm,
            children: z
          })
        }) : z]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk764009.sidebarContainer,
        children: [(0, Chunk951288.jsx)(Chunk978088.Z, {
          guildId: D.id,
          tag: A.tag,
          badge: B,
          primaryColor: F,
          secondaryColor: H
        }), !U && (0, Chunk951288.jsx)(Chunk582066.Z, {
          guildId: D.id
        })]
      })]
    })]
  })
}