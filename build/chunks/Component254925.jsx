/** Chunk was on 5533 **/
/** chunk id: 254925, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk70086 = require("./70086.jsx"),
  Chunk835887 = require("./835887.jsx"),
  Chunk388661 = require("./388661.jsx"),
  Chunk500230 = require("./500230.jsx"),
  Chunk58909 = require("./58909.jsx"),
  Chunk742409 = require("./742409.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk131085 = require("./131085.js"),
  Chunk195196 = require("./195196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk8498 = require("./8498.js");
let P = function() {
  var e, t, n, P;
  (0, Chunk388032.useSyncMessages)(Chunk195196.messagesLoader);
  let w = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    R = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    {
      fetchGuildProfile: Z,
      fetchStatus: D
    } = (0, Chunk65361.u)(null == w ? true : w.id);
  if (Chunk73800.useEffect(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, {
        dismissAction: Chunk921944.L.AUTO
      })
    }, []), Chunk73800.useEffect(() => {
      D === Chunk314852.a.NOT_FETCHED && Z()
    }, [Z, D]), D !== Chunk314852.a.FETCHED) return (0, Chunk255367.jsx)("div", {
    className: Chunk8498.spinnerContainer,
    children: (0, Chunk255367.jsx)(Chunk481060.$jN, {})
  });
  if (null == w || null == R) return null;
  let A = Chunk580685.Y.VISIBLE.has(R.visibility),
    k = (0, Chunk731722.up)(w),
    L = !k || (null == R ? true : R.tag) == null,
    M = null != (e = R.badge) ? module : Chunk131085.QV["0"],
    G = null != (t = R.badgeColorPrimary) ? exports : Chunk131085.Ek["0"].primary,
    U = null != (n = R.badgeColorSecondary) ? require : Chunk131085.Ek["0"].secondary,
    B = (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk388661.Z, {
        className: Chunk8498.section,
        guildId: w.id,
        isDisabled: L,
        tag: null != (P = R.tag) ? P : "",
        badge: M,
        primaryColor: G,
        secondaryColor: U
      }), (0, Chunk255367.jsx)(Chunk835887.Z, {
        className: Chunk8498.section,
        selectedBadge: M,
        guildId: w.id
      }), (0, Chunk255367.jsx)(Chunk500230.Z, {
        className: Chunk8498.section,
        guildId: w.id,
        badge: M,
        primaryColor: G,
        secondaryColor: U
      })]
    });
  return (0, Chunk255367.jsxs)("div", {
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      className: Chunk8498.title,
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk195196.default.mf2OwM)
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk8498.container,
      children: [(0, Chunk255367.jsxs)("div", {
        className: Chunk8498.leftContent,
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk8498.descriptionContainer,
          children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: Chunk388032.intl.format(Chunk195196.default["655Un5"], {
              onClickServerProfile: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE)
              },
              onClickApplyToJoin: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.ACCESS)
              }
            })
          }), !A && (0, Chunk255367.jsx)(Chunk494620.Z, {
            className: Chunk8498.privateProfileWarning,
            children: (0, Chunk255367.jsx)(Chunk481060.Text, {
              variant: "text-xs/medium",
              children: Chunk388032.intl.format(Chunk195196.default.CRbkIy, {
                onClickEditSetting: () => Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE, Chunk981631.KsC.PROFILE_VISIBILITY)
              })
            })
          })]
        }), k ? (0, Chunk255367.jsxs)("div", {
          className: Chunk8498.enableSwitchContainer,
          children: [(0, Chunk255367.jsx)("label", {
            htmlFor: "enable-server-tag",
            children: (0, Chunk255367.jsx)(Chunk481060.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: Chunk388032.intl.string(Chunk195196.default["1zams7"])
            })
          }), (0, Chunk255367.jsx)(Chunk481060.rsf, {
            id: "enable-server-tag",
            checked: !L,
            onChange: () => {
              if (L) {
                var e;
                Chunk434404.Z.updateGuildProfile(w.id, {
                  tag: null != (e = R.tag) ? module : "",
                  badge: M,
                  badgeColorPrimary: G,
                  badgeColorSecondary: U
                })
              } else Chunk434404.Z.updateGuildProfile(w.id, {
                tag: null
              })
            }
          })]
        }) : (0, Chunk255367.jsx)("div", {
          className: Chunk8498.boostingLinkContainer,
          children: (0, Chunk255367.jsx)(Chunk70086.P, {
            onClick: () => {
              (0, Chunk441536.Z)(w.id, Chunk100527.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), Chunk434404.Z.close()
            }
          })
        }), L ? (0, Chunk255367.jsx)(Chunk481060.nuw, {
          children: (0, Chunk255367.jsx)("div", {
            className: Chunk8498.disabledForm,
            children: B
          })
        }) : B]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk8498.sidebarContainer,
        children: [(0, Chunk255367.jsx)(Chunk742409.Z, {
          guildId: w.id,
          tag: R.tag,
          badge: M,
          primaryColor: G,
          secondaryColor: U
        }), !L && (0, Chunk255367.jsx)(Chunk58909.Z, {
          guildId: w.id
        })]
      })]
    })]
  })
}