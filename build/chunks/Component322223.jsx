/** Chunk was on web.js **/
/** chunk id: 322223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk134413 = require("./134413.js"),
  Chunk221950 = require("./221950.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk954571 = require("./954571.js"),
  Chunk585510 = require("./585510.js"),
  Chunk834409 = require("./834409.js"),
  Chunk903093 = require("./903093.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk858411 = require("./858411.js");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  var t, O;
  let {
    onDismiss: A
  } = e, S = (0, a.bG)([f.A], () => f.A.getGuildId()), T = (0, a.bG)([d.A], () => null != S ? d.A.getChannelId(S) : null, [S]), C = null != S ? S : null, N = (0, a.bG)([u.A], () => null != C ? u.A.getGuild(C) : null, [C]), {
    shouldShowIncidentActions: R,
    incidentData: w,
    isUnderLockdown: P
  } = (0, _.Li)(C), D = (0, l.fw)(null != (t = null == N ? true : N.id) ? t : g.dJq), x = i.useCallback(() => null != N && (0, c.aZ)(N.id), [N]);
  if (null == N || null == w || !R) return null;
  let L = e => {
      e && D && T !== E.VV.MEMBER_SAFETY && x() ? p.default.track(g.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: g.kqX.GUILD_RAID_NOTIFICATION,
        guild_id: N.id
      }) : (0, s.mMO)(async () => {
        let e = {
            source: h.Eo.NAGBAR,
            alertType: (0, m.$5)(w)
          },
          {
            default: t
          } = await n.e("43233").then(n.bind(n, 671576));
        return n => (0, r.jsx)(t, I(v({}, n), {
          guildId: N.id,
          analyticsData: e
        }))
      })
    },
    j = (0, r.jsx)(o.A, {
      className: b.$f,
      guild: N,
      size: o.A.Sizes.MINI
    }),
    M = (0, m.ql)(w, N.name);
  if (null != (null != (O = w.dmsDisabledUntil) ? O : w.invitesDisabledUntil) && P) return (0, r.jsxs)(s.$Td, {
    className: b.lm,
    color: s.Hv$.NEUTRAL,
    children: [(0, r.jsx)(s.PMB, {
      onClick: A,
      noticeType: g.kqX.GUILD_RAID_NOTIFICATION
    }), j, M, (0, r.jsx)(s.zr9, {
      className: b.hP,
      onClick: () => L(false),
      children: (0, r.jsxs)("div", {
        className: b.rx,
        children: [(0, r.jsx)(s.XAi, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          children: y.intl.string(y.t["c+7oa7"])
        })]
      })
    })]
  });
  let k = (0, m.P$)(w) ? y.intl.formatToPlainString(y.t.tZTx2E, {
      guildName: N.name
    }) : (0, m.Qm)(w) ? y.intl.formatToPlainString(y.t["1bSmxr"], {
      guildName: N.name
    }) : y.intl.formatToPlainString(y.t.W87xDE, {
      guildName: N.name
    }),
    U = D && T === E.VV.MEMBER_SAFETY;
  return (0, r.jsxs)(s.$Td, {
    className: b.lm,
    color: s.Hv$.WARNING,
    children: [(0, r.jsx)(s.PMB, {
      onClick: A,
      noticeType: g.kqX.GUILD_RAID_NOTIFICATION
    }), j, k, !U && (0, r.jsx)(s.zr9, {
      className: b.hP,
      onClick: () => L(true),
      children: (0, r.jsx)("div", {
        className: b.rx,
        children: (0, r.jsx)("span", {
          children: y.intl.string(y.t.zDJDhr)
        })
      })
    })]
  })
}