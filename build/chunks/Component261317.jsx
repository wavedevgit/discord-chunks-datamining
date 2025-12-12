/** Chunk was on 384 **/
/** chunk id: 261317, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk580685 = require("./580685.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
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
  Chunk465682 = require("./465682.jsx"),
  Chunk910494 = require("./910494.jsx"),
  Chunk196902 = require("./196902.jsx"),
  Chunk423087 = require("./423087.jsx"),
  Chunk582066 = require("./582066.jsx"),
  Chunk978088 = require("./978088.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk131085 = require("./131085.js"),
  Chunk159167 = require("./159167.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764009 = require("./764009.js");
let P = function() {
  var e, t, n, P;
  (0, Chunk388032.useSyncMessages)(Chunk159167.messagesLoader);
  let w = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    Z = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    {
      fetchGuildProfile: R,
      fetchStatus: D
    } = (0, Chunk65361.u)(null == w ? true : w.id);
  if (Chunk473749.useEffect(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, {
        dismissAction: Chunk921944.L.AUTO
      })
    }, []), Chunk473749.useEffect(() => {
      D === Chunk314852.a.NOT_FETCHED && R()
    }, [R, D]), D !== Chunk314852.a.FETCHED) return (0, Chunk54381.jsx)("div", {
    className: Chunk764009.spinnerContainer,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  });
  if (null == w || null == Z) return null;
  let A = Chunk580685.Y.VISIBLE.has(Z.visibility),
    L = (0, Chunk731722.up)(w),
    k = !L || (null == Z ? true : Z.tag) == null,
    G = null != (e = Z.badge) ? module : Chunk131085.QV["0"],
    M = null != (t = Z.badgeColorPrimary) ? exports : Chunk131085.Ek["0"].primary,
    U = null != (n = Z.badgeColorSecondary) ? require : Chunk131085.Ek["0"].secondary,
    B = (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk196902.Z, {
        className: Chunk764009.section,
        guildId: w.id,
        isDisabled: k,
        tag: null != (P = Z.tag) ? P : "",
        badge: G,
        primaryColor: M,
        secondaryColor: U
      }), (0, Chunk54381.jsx)(Chunk910494.Z, {
        className: Chunk764009.section,
        selectedBadge: G,
        guildId: w.id
      }), (0, Chunk54381.jsx)(Chunk423087.Z, {
        className: Chunk764009.section,
        guildId: w.id,
        badge: G,
        primaryColor: M,
        secondaryColor: U
      })]
    });
  return (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      className: Chunk764009.title,
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk159167.default.mf2OwH)
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk764009.container,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk764009.leftContent,
        children: [(0, Chunk54381.jsxs)("div", {
          className: Chunk764009.descriptionContainer,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: Chunk388032.intl.format(Chunk159167.default["655Uny"], {
              onClickServerProfile: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE)
              },
              onClickApplyToJoin: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.ACCESS)
              }
            })
          }), !A && (0, Chunk54381.jsx)(Chunk494620.Z, {
            className: Chunk764009.privateProfileWarning,
            children: (0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-xs/medium",
              children: Chunk388032.intl.format(Chunk159167.default.CRbkIz, {
                onClickEditSetting: () => Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE, Chunk981631.KsC.PROFILE_VISIBILITY)
              })
            })
          })]
        }), L ? (0, Chunk54381.jsxs)("div", {
          className: Chunk764009.enableSwitchContainer,
          children: [(0, Chunk54381.jsx)("label", {
            htmlFor: "enable-server-tag",
            children: (0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-md/semibold",
              color: "text-strong",
              children: Chunk388032.intl.string(Chunk159167.default["1zams8"])
            })
          }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
            id: "enable-server-tag",
            checked: !k,
            onChange: () => {
              if (k) {
                var e;
                Chunk434404.Z.updateGuildProfile(w.id, {
                  tag: null != (e = Z.tag) ? module : "",
                  badge: G,
                  badgeColorPrimary: M,
                  badgeColorSecondary: U
                })
              } else Chunk434404.Z.updateGuildProfile(w.id, {
                tag: null
              })
            }
          })]
        }) : (0, Chunk54381.jsx)("div", {
          className: Chunk764009.boostingLinkContainer,
          children: (0, Chunk54381.jsx)(Chunk465682.v, {
            onClick: () => {
              (0, Chunk441536.Z)(w.id, Chunk100527.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), Chunk434404.Z.close()
            }
          })
        }), k ? (0, Chunk54381.jsx)(Chunk481060.nuw, {
          children: (0, Chunk54381.jsx)("div", {
            className: Chunk764009.disabledForm,
            children: B
          })
        }) : B]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk764009.sidebarContainer,
        children: [(0, Chunk54381.jsx)(Chunk978088.Z, {
          guildId: w.id,
          tag: Z.tag,
          badge: G,
          primaryColor: M,
          secondaryColor: U
        }), !k && (0, Chunk54381.jsx)(Chunk582066.Z, {
          guildId: w.id
        })]
      })]
    })]
  })
}