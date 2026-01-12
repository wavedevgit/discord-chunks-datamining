/** Chunk was on 9536 **/
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
  Chunk551199 = require("./551199.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk331867 = require("./331867.js");
let P = function() {
  var e, t, n, P;
  (0, _.useSyncMessages)(S.messagesLoader);
  let w = (0, a.e7)([h.Z], () => h.Z.getGuild()),
    Z = (0, a.e7)([h.Z], () => h.Z.getGuildProfile()),
    {
      fetchGuildProfile: R,
      fetchStatus: D
    } = (0, g.u)(null == w ? true : w.id);
  if (i.useEffect(() => {
      (0, d.Q3)(s.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, {
        dismissAction: E.L.AUTO
      })
    }, []), i.useEffect(() => {
      D === u.a.NOT_FETCHED && R()
    }, [R, D]), D !== u.a.FETCHED) return (0, r.jsx)("div", {
    className: T.spinnerContainer,
    children: (0, r.jsx)(o.$jN, {})
  });
  if (null == w || null == Z) return null;
  let A = l.Y.VISIBLE.has(Z.visibility),
    L = (0, m.up)(w),
    k = !L || (null == Z ? true : Z.tag) == null,
    G = null != (e = Z.badge) ? e : I.QV["0"],
    M = null != (t = Z.badgeColorPrimary) ? t : I.Ek["0"].primary,
    U = null != (n = Z.badgeColorSecondary) ? n : I.Ek["0"].secondary,
    B = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(v.Z, {
        className: T.section,
        guildId: w.id,
        isDisabled: k,
        tag: null != (P = Z.tag) ? P : "",
        badge: G,
        primaryColor: M,
        secondaryColor: U
      }), (0, r.jsx)(j.Z, {
        className: T.section,
        selectedBadge: G,
        guildId: w.id
      }), (0, r.jsx)(O.Z, {
        className: T.section,
        guildId: w.id,
        badge: G,
        primaryColor: M,
        secondaryColor: U
      })]
    });
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Heading, {
      className: T.title,
      variant: "heading-lg/semibold",
      children: _.intl.string(S.default.mf2OwH)
    }), (0, r.jsxs)("div", {
      className: T.container,
      children: [(0, r.jsxs)("div", {
        className: T.leftContent,
        children: [(0, r.jsxs)("div", {
          className: T.descriptionContainer,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: _.intl.format(S.default["655Uny"], {
              onClickServerProfile: () => {
                p.Z.setSection(N.pNK.PROFILE)
              },
              onClickApplyToJoin: () => {
                p.Z.setSection(N.pNK.ACCESS)
              }
            })
          }), !A && (0, r.jsx)(b.Z, {
            className: T.privateProfileWarning,
            children: (0, r.jsx)(o.Text, {
              variant: "text-xs/medium",
              children: _.intl.format(S.default.CRbkIz, {
                onClickEditSetting: () => p.Z.setSection(N.pNK.PROFILE, N.KsC.PROFILE_VISIBILITY)
              })
            })
          })]
        }), L ? (0, r.jsxs)("div", {
          className: T.enableSwitchContainer,
          children: [(0, r.jsx)("label", {
            htmlFor: "enable-server-tag",
            children: (0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              color: "text-strong",
              children: _.intl.string(S.default["1zams8"])
            })
          }), (0, r.jsx)(o.rsf, {
            id: "enable-server-tag",
            checked: !k,
            onChange: () => {
              if (k) {
                var e;
                p.Z.updateGuildProfile(w.id, {
                  tag: null != (e = Z.tag) ? e : "",
                  badge: G,
                  badgeColorPrimary: M,
                  badgeColorSecondary: U
                })
              } else p.Z.updateGuildProfile(w.id, {
                tag: null
              })
            }
          })]
        }) : (0, r.jsx)("div", {
          className: T.boostingLinkContainer,
          children: (0, r.jsx)(x.v, {
            onClick: () => {
              (0, f.Z)(w.id, c.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), p.Z.close()
            }
          })
        }), k ? (0, r.jsx)(o.nuw, {
          children: (0, r.jsx)("div", {
            className: T.disabledForm,
            children: B
          })
        }) : B]
      }), (0, r.jsxs)("div", {
        className: T.sidebarContainer,
        children: [(0, r.jsx)(C.Z, {
          guildId: w.id,
          tag: Z.tag,
          badge: G,
          primaryColor: M,
          secondaryColor: U
        }), !k && (0, r.jsx)(y.Z, {
          guildId: w.id
        })]
      })]
    })]
  })
}