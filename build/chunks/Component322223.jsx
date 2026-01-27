/** Chunk was on 93140 **/
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
  } = e, y = (0, l.bG)([d.A], () => d.A.getGuildId()), f = (0, l.bG)([E.A], () => null != y ? E.A.getChannelId(y) : null, [y]), C = null != y ? y : null, m = (0, l.bG)([u.A], () => null != C ? u.A.getGuild(C) : null, [C]), {
    shouldShowIncidentActions: D,
    incidentData: g,
    isUnderLockdown: h
  } = (0, A.Li)(C), b = (0, s.fw)(null != (t = null == m ? true : m.id) ? t : O.dJq), U = i.useCallback(() => null != m && (0, c.aZ)(m.id), [m]);
  if (null == m || null == g || !D) return null;
  let M = e => {
      e && b && f !== N.VV.MEMBER_SAFETY && U() ? _.default.track(O.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: O.kqX.GUILD_RAID_NOTIFICATION,
        guild_id: m.id
      }) : (0, o.mMO)(async () => {
        let e = {
            source: T.Eo.NAGBAR,
            alertType: (0, I.$5)(g)
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
            guildId: m.id,
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
      guild: m,
      size: a.A.Sizes.MINI
    }),
    k = (0, I.ql)(g, m.name);
  if (null != (null != (S = g.dmsDisabledUntil) ? S : g.invitesDisabledUntil) && h) return (0, r.jsxs)(o.$Td, {
    className: R.lm,
    color: o.Hv$.NEUTRAL,
    children: [(0, r.jsx)(o.PMB, {
      onClick: P,
      noticeType: O.kqX.GUILD_RAID_NOTIFICATION
    }), j, k, (0, r.jsx)(o.zr9, {
      className: R.hP,
      onClick: () => M(false),
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
  let v = (0, I.P$)(g) ? p.intl.formatToPlainString(p.t.tZTx2E, {
      guildName: m.name
    }) : (0, I.Qm)(g) ? p.intl.formatToPlainString(p.t["1bSmxr"], {
      guildName: m.name
    }) : p.intl.formatToPlainString(p.t.W87xDE, {
      guildName: m.name
    }),
    L = b && f === N.VV.MEMBER_SAFETY;
  return (0, r.jsxs)(o.$Td, {
    className: R.lm,
    color: o.Hv$.WARNING,
    children: [(0, r.jsx)(o.PMB, {
      onClick: P,
      noticeType: O.kqX.GUILD_RAID_NOTIFICATION
    }), j, v, !L && (0, r.jsx)(o.zr9, {
      className: R.hP,
      onClick: () => M(true),
      children: (0, r.jsx)("div", {
        className: R.rx,
        children: (0, r.jsx)("span", {
          children: p.intl.string(p.t.zDJDhr)
        })
      })
    })]
  })
}