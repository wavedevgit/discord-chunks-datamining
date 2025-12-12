/** Chunk was on web.js **/
/** chunk id: 506357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  var t, O;
  let {
    onDismiss: S
  } = e, T = (0, o.e7)([f.Z], () => f.Z.getGuildId()), C = (0, o.e7)([d.Z], () => null != T ? d.Z.getChannelId(T) : null, [T]), A = null != T ? T : null, N = (0, o.e7)([u.Z], () => null != A ? u.Z.getGuild(A) : null, [A]), {
    shouldShowIncidentActions: P,
    incidentData: R,
    isUnderLockdown: w
  } = (0, _.mI)(A), D = (0, l.n2)(null != (t = null == N ? true : N.id) ? t : g.lds), x = i.useCallback(() => null != N && (0, c._X)(N.id), [N]);
  if (null == N || null == R || !P) return null;
  let L = e => {
      if (e && D && C !== E.oC.MEMBER_SAFETY && x()) return void p.default.track(g.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: g.kVF.GUILD_RAID_NOTIFICATION,
        guild_id: N.id
      });
      (0, a.ZDy)(async () => {
        let e = {
            source: m.Zu.NAGBAR,
            alertType: (0, h.T1)(R)
          },
          {
            default: t
          } = await n.e("58175").then(n.bind(n, 664452));
        return n => (0, r.jsx)(t, I(v({}, n), {
          guildId: N.id,
          analyticsData: e
        }))
      })
    },
    j = (0, r.jsx)(s.Z, {
      className: y.guildIcon,
      guild: N,
      size: s.Z.Sizes.MINI
    }),
    M = (0, h.OY)(R, N.name);
  if (null != (null != (O = R.dmsDisabledUntil) ? O : R.invitesDisabledUntil) && w) return (0, r.jsxs)(a.qXd, {
    className: y.notice,
    color: a.DM8.NEUTRAL,
    children: [(0, r.jsx)(a.RyX, {
      onClick: S,
      noticeType: g.kVF.GUILD_RAID_NOTIFICATION
    }), j, M, (0, r.jsx)(a.EyT, {
      className: y.actionButton,
      onClick: () => L(false),
      children: (0, r.jsxs)("div", {
        className: y.actionButtonInner,
        children: [(0, r.jsx)(a.mBM, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          children: b.intl.string(b.t["c+7oa7"])
        })]
      })
    })]
  });
  let k = (0, h.CG)(R) ? b.intl.formatToPlainString(b.t.tZTx2E, {
      guildName: N.name
    }) : (0, h.kk)(R) ? b.intl.formatToPlainString(b.t["1bSmxr"], {
      guildName: N.name
    }) : b.intl.formatToPlainString(b.t.W87xDE, {
      guildName: N.name
    }),
    U = D && C === E.oC.MEMBER_SAFETY;
  return (0, r.jsxs)(a.qXd, {
    className: y.notice,
    color: a.DM8.WARNING,
    children: [(0, r.jsx)(a.RyX, {
      onClick: S,
      noticeType: g.kVF.GUILD_RAID_NOTIFICATION
    }), j, k, !U && (0, r.jsx)(a.EyT, {
      className: y.actionButton,
      onClick: () => L(true),
      children: (0, r.jsx)("div", {
        className: y.actionButtonInner,
        children: (0, r.jsx)("span", {
          children: b.intl.string(b.t.zDJDhr)
        })
      })
    })]
  })
}