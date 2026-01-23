/** Chunk was on 47841 **/
/** chunk id: 423981, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk118751 = require("./118751.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk421838 = require("./421838.js"),
  Chunk773669 = require("./773669.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk351906 = require("./351906.js"),
  Chunk954571 = require("./954571.js"),
  Chunk555337 = require("./555337.js"),
  Chunk855537 = require("./855537.js"),
  Chunk907445 = require("./907445.js"),
  Chunk11725 = require("./11725.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk897513 = require("./897513.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk381929 = require("./381929.js");

function E(e) {
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
}
let N = function(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      i = null;
    return null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (i = y.intl.string(y.t.xO2msf)) : i = y.intl.formatToPlainString(y.t.nskeMw, {
      percentage: (0, s.s)(Math.abs(t), n)
    }), {
      localizedNumber: null != e ? "".concat((0, s.s)(e, n)).concat(r ? "%" : "") : y.intl.string(y.t.jHpxwo),
      subtext: i,
      isTrendingUp: t > 0,
      isTrendingDown: t < 0
    }
  },
  S = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return t || e === O.t02.NOT_ENOUGH_GUILD_MEMBERS ? (0, r.jsx)("div", {
      className: A.NA,
      children: (0, r.jsx)(c.wx6, {
        type: "info",
        children: y.intl.string(y.t["FsgE/B"])
      })
    }) : null == e ? null : (0, r.jsx)(c.wx6, {
      type: "critical",
      children: y.intl.string(y.t.Iju63e)
    })
  },
  I = () => {
    let [e, t] = i.useState(false), n = (0, a.bG)([h.A], () => h.A.getGuildId());
    return (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: A.XU,
      children: (0, r.jsx)(c.Button, {
        variant: "primary",
        text: y.intl.string(y.t.Uskgxx),
        onClick: () => {
          let e, r;
          t(true), (b.default.track(O.HAw.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
            guild_id: n
          }), e = null == n ? O.dSh.DEVELOPER_PORTAL : O.dSh.DEVELOPER_PORTAL_GUILD_ANALYTICS(n), r = (0, l.A)(), o.Bo.post({
            url: O.Rsh.HANDOFF,
            body: {
              key: r
            },
            oldFormErrors: true,
            rejectWithError: true
          }).then(t => {
            let n = t.body.handoff_token;
            window.open(O.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(r, n, e))
          }, () => {
            window.open(e)
          })).then(() => {
            t(false)
          })
        },
        loading: e
      })
    })
  },
  T = () => {
    let e = (0, a.bG)([h.A], () => h.A.getGuildId()),
      t = (0, a.bG)([m.A], () => m.A.getMemberCount(e)),
      n = (0, a.bG)([p.A], () => p.A.getGuild(e)),
      l = (0, a.bG)([g.default], () => g.default.locale),
      {
        analytics: s,
        errorCode: o
      } = (0, a.cf)([j.A], () => ({
        analytics: null != e ? j.A.getOverviewAnalytics(e) : null,
        errorCode: j.A.getError()
      })),
      b = (0, a.bG)([f.A], () => f.A.getSettings().enabled),
      T = null == t || null == n || null != t && t < 500 && null != n && !n.features.has(O.GuildFeatures.PARTNERED) && !n.features.has(O.GuildFeatures.VERIFIED);
    i.useEffect(() => {
      null == e || T || ((0, x.p9)(e), (0, x.fe)(e), (0, x._z)(e))
    }, [e, T]), i.useEffect(() => {
      (0, u.sF)(v._.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
    }, []);
    let C = null != s ? (0, r.jsx)("div", {
      className: A.__invalid_guildAnalyticsOverviewWrapper,
      children: (0, r.jsxs)("div", {
        className: A.SJ,
        children: [(0, r.jsx)(_.A, E({
          title: y.intl.string(y.t.i0NorT),
          tooltipText: y.intl.string(y.t.KiRbLJ)
        }, N(s.visitors, s.visitorsChange, l))), (0, r.jsx)(_.A, E({
          title: y.intl.string(y.t.DDAHdQ),
          tooltipText: y.intl.string(y.t.HxWUkU)
        }, N(s.communicators, s.communicatorsChange, l))), (0, r.jsx)(_.A, E({
          title: y.intl.string(y.t.hYeOqC)
        }, N(s.newMembers, s.newMembersChange, l))), (0, r.jsx)(_.A, E({
          title: y.intl.string(y.t.jj7OPw),
          tooltipText: y.intl.string(y.t.MQCslz)
        }, N(s.pctRetained, s.pctRetainedChange, l, true)))]
      })
    }) : null;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        children: y.intl.string(y.t["0wWfUG"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: y.intl.format(y.t.NIZ60a, {})
      }), S(o, T), (0, r.jsxs)("div", {
        className: A.Pg,
        children: [(0, r.jsx)("div", {
          className: A.jM
        }), (0, r.jsx)(c.Text, {
          className: A.WO,
          variant: "text-sm/normal",
          children: y.intl.string(y.t.A5vswv)
        }), (0, r.jsx)(I, {})]
      }), b ? (0, r.jsx)("div", {
        className: A.Rc,
        children: (0, r.jsx)(d.A, {})
      }) : C]
    })
  }