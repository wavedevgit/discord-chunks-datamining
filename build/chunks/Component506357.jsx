/** Chunk was on 31253 **/
/** chunk id: 506357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk241559 = require("./241559.js"),
  Chunk527379 = require("./527379.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk528011 = require("./528011.js"),
  Chunk666657 = require("./666657.js"),
  Chunk533244 = require("./533244.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk752338 = require("./752338.js");

function f(e) {
  var t, f;
  let {
    onDismiss: A
  } = e, C = (0, l.e7)([d.Z], () => d.Z.getGuildId()), m = (0, l.e7)([_.Z], () => null != C ? _.Z.getChannelId(C) : null, [C]), g = null != C ? C : null, P = (0, l.e7)([u.Z], () => null != g ? u.Z.getGuild(g) : null, [g]), {
    shouldShowIncidentActions: D,
    incidentData: b,
    isUnderLockdown: y
  } = (0, I.mI)(g), h = (0, c.n2)(null != (t = null == P ? true : P.id) ? t : N.lds), U = i.useCallback(() => null != P && (0, s._X)(P.id), [P]);
  if (null == P || null == b || !D) return null;
  let M = e => {
      if (e && h && m !== S.oC.MEMBER_SAFETY && U()) return void E.default.track(N.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: N.kVF.GUILD_RAID_NOTIFICATION,
        guild_id: P.id
      });
      (0, o.ZDy)(async () => {
        let e = {
            source: T.Zu.NAGBAR,
            alertType: (0, O.T1)(b)
          },
          {
            default: t
          } = await Promise.all([n.e("58175"), n.e("54255")]).then(n.bind(n, 664452));
        return n => {
          var i, l;
          return (0, r.jsx)(t, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, n), l = l = {
            guildId: P.id,
            analyticsData: e
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    },
    k = (0, r.jsx)(a.Z, {
      className: R.guildIcon,
      guild: P,
      size: a.Z.Sizes.MINI
    }),
    L = (0, O.OY)(b, P.name);
  if (null != (null != (f = b.dmsDisabledUntil) ? f : b.invitesDisabledUntil) && y) return (0, r.jsxs)(o.qXd, {
    className: R.notice,
    color: o.DM8.NEUTRAL,
    children: [(0, r.jsx)(o.RyX, {
      onClick: A,
      noticeType: N.kVF.GUILD_RAID_NOTIFICATION
    }), k, L, (0, r.jsx)(o.EyT, {
      className: R.actionButton,
      onClick: () => M(false),
      children: (0, r.jsxs)("div", {
        className: R.actionButtonInner,
        children: [(0, r.jsx)(o.mBM, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          children: p.intl.string(p.t["c+7oa2"])
        })]
      })
    })]
  });
  let Z = (0, O.CG)(b) ? p.intl.formatToPlainString(p.t.tZTx2N, {
      guildName: P.name
    }) : (0, O.kk)(b) ? p.intl.formatToPlainString(p.t["1bSmxs"], {
      guildName: P.name
    }) : p.intl.formatToPlainString(p.t.W87xDA, {
      guildName: P.name
    }),
    j = h && m === S.oC.MEMBER_SAFETY;
  return (0, r.jsxs)(o.qXd, {
    className: R.notice,
    color: o.DM8.WARNING,
    children: [(0, r.jsx)(o.RyX, {
      onClick: A,
      noticeType: N.kVF.GUILD_RAID_NOTIFICATION
    }), k, Z, !j && (0, r.jsx)(o.EyT, {
      className: R.actionButton,
      onClick: () => M(true),
      children: (0, r.jsx)("div", {
        className: R.actionButtonInner,
        children: (0, r.jsx)("span", {
          children: p.intl.string(p.t.zDJDho)
        })
      })
    })]
  })
}