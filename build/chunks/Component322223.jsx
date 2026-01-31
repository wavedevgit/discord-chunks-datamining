/** Chunk was on 61222 **/
/** chunk id: 322223, original params: e,t,n (module,exports,require) **/
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

function S(e) {
  var t, S;
  let {
    onDismiss: P
  } = e, y = (0, l.bG)([d.A], () => d.A.getGuildId()), C = (0, l.bG)([E.A], () => null != y ? E.A.getChannelId(y) : null, [y]), f = null != y ? y : null, D = (0, l.bG)([u.A], () => null != f ? u.A.getGuild(f) : null, [f]), {
    shouldShowIncidentActions: g,
    incidentData: m,
    isUnderLockdown: h
  } = (0, A.Li)(f), U = (0, s.fw)(null != (t = null == D ? true : D.id) ? t : O.dJq), M = i.useCallback(() => null != D && (0, c.aZ)(D.id), [D]);
  if (null == D || null == m || !g) return null;
  let b = e => {
      e && U && C !== N.VV.MEMBER_SAFETY && M() ? _.default.track(O.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: O.kqX.GUILD_RAID_NOTIFICATION,
        guild_id: D.id
      }) : (0, o.mMO)(async () => {
        let e = {
            source: T.Eo.NAGBAR,
            alertType: (0, I.$5)(m)
          },
          {
            default: t
          } = await n.e("43233").then(n.bind(n, 671576));
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
            guildId: D.id,
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
    j = (0, r.jsx)(a.A, {
      className: R.$f,
      guild: D,
      size: a.A.Sizes.MINI
    }),
    k = (0, I.ql)(m, D.name);
  if (null != (null != (S = m.dmsDisabledUntil) ? S : m.invitesDisabledUntil) && h) return (0, r.jsxs)(o.$Td, {
    className: R.lm,
    color: o.Hv$.NEUTRAL,
    children: [(0, r.jsx)(o.PMB, {
      onClick: P,
      noticeType: O.kqX.GUILD_RAID_NOTIFICATION
    }), j, k, (0, r.jsx)(o.zr9, {
      className: R.hP,
      onClick: () => b(false),
      children: (0, r.jsxs)("div", {
        className: R.rx,
        children: [(0, r.jsx)(o.XAi, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          children: p.intl.string(p.t["c+7oa7"])
        })]
      })
    })]
  });
  let L = (0, I.P$)(m) ? p.intl.formatToPlainString(p.t.tZTx2E, {
      guildName: D.name
    }) : (0, I.Qm)(m) ? p.intl.formatToPlainString(p.t["1bSmxr"], {
      guildName: D.name
    }) : p.intl.formatToPlainString(p.t.W87xDE, {
      guildName: D.name
    }),
    v = U && C === N.VV.MEMBER_SAFETY;
  return (0, r.jsxs)(o.$Td, {
    className: R.lm,
    color: o.Hv$.WARNING,
    children: [(0, r.jsx)(o.PMB, {
      onClick: P,
      noticeType: O.kqX.GUILD_RAID_NOTIFICATION
    }), j, L, !v && (0, r.jsx)(o.zr9, {
      className: R.hP,
      onClick: () => b(true),
      children: (0, r.jsx)("div", {
        className: R.rx,
        children: (0, r.jsx)("span", {
          children: p.intl.string(p.t.zDJDhr)
        })
      })
    })]
  })
}