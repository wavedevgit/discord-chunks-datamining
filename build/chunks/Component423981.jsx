/** Chunk was on 47841 **/
/** chunk id: 423981, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => I
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

function N(e) {
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
let _ = function(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      i = null;
    return null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (i = A.intl.string(A.t.xO2msf)) : i = A.intl.formatToPlainString(A.t.nskeMw, {
      percentage: (0, s.s)(Math.abs(t), n)
    }), {
      localizedNumber: null != e ? "".concat((0, s.s)(e, n)).concat(r ? "%" : "") : A.intl.string(A.t.jHpxwo),
      subtext: i,
      isTrendingUp: t > 0,
      isTrendingDown: t < 0
    }
  },
  S = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return t || e === y.t02.NOT_ENOUGH_GUILD_MEMBERS ? (0, r.jsx)("div", {
      className: E.NA,
      children: (0, r.jsx)(o.wx6, {
        type: "info",
        children: A.intl.string(A.t["FsgE/B"])
      })
    }) : null == e ? null : (0, r.jsx)(o.wx6, {
      type: "critical",
      children: A.intl.string(A.t.Iju63e)
    })
  },
  T = () => {
    let [e, t] = i.useState(false), n = (0, a.bG)([x.A], () => x.A.getGuildId());
    return (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: E.XU,
      children: (0, r.jsx)(o.Button, {
        variant: "primary",
        text: A.intl.string(A.t.Uskgxx),
        onClick: () => {
          let e, r;
          t(true), (p.default.track(y.HAw.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
            guild_id: n
          }), e = null == n ? y.dSh.DEVELOPER_PORTAL : y.dSh.DEVELOPER_PORTAL_GUILD_ANALYTICS(n), r = (0, l.A)(), c.Bo.post({
            url: y.Rsh.HANDOFF,
            body: {
              key: r
            },
            oldFormErrors: true,
            rejectWithError: true
          }).then(t => {
            let n = t.body.handoff_token;
            window.open(y.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(r, n, e))
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
  I = () => {
    let e = (0, a.bG)([x.A], () => x.A.getGuildId()),
      t = (0, a.bG)([g.A], () => g.A.getMemberCount(e)),
      n = (0, a.bG)([b.A], () => b.A.getGuild(e)),
      l = (0, a.bG)([f.default], () => f.default.locale),
      {
        analytics: s,
        errorCode: c
      } = (0, a.cf)([j.A], () => ({
        analytics: null != e ? j.A.getOverviewAnalytics(e) : null,
        errorCode: j.A.getError()
      })),
      p = (0, a.bG)([m.A], () => m.A.getSettings().enabled),
      I = null == t || null == n || null != t && t < 500 && null != n && !n.features.has(y.GuildFeatures.PARTNERED) && !n.features.has(y.GuildFeatures.VERIFIED);
    i.useEffect(() => {
      null == e || I || ((0, h.p9)(e), (0, h.fe)(e), (0, h._z)(e))
    }, [e, I]), i.useEffect(() => {
      (0, u.sF)(v._.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
    }, []);
    let C = null != s ? (0, r.jsx)("div", {
      className: E.__invalid_guildAnalyticsOverviewWrapper,
      children: (0, r.jsxs)("div", {
        className: E.SJ,
        children: [(0, r.jsx)(O.A, N({
          title: A.intl.string(A.t.i0NorT),
          tooltipText: A.intl.string(A.t.KiRbLJ)
        }, _(s.visitors, s.visitorsChange, l))), (0, r.jsx)(O.A, N({
          title: A.intl.string(A.t.DDAHdQ),
          tooltipText: A.intl.string(A.t.HxWUkU)
        }, _(s.communicators, s.communicatorsChange, l))), (0, r.jsx)(O.A, N({
          title: A.intl.string(A.t.hYeOqC)
        }, _(s.newMembers, s.newMembersChange, l))), (0, r.jsx)(O.A, N({
          title: A.intl.string(A.t.jj7OPw),
          tooltipText: A.intl.string(A.t.MQCslz)
        }, _(s.pctRetained, s.pctRetainedChange, l, true)))]
      })
    }) : null;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: A.intl.string(A.t["0wWfUG"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: A.intl.format(A.t.NIZ60a, {})
      }), S(c, I), (0, r.jsxs)("div", {
        className: E.Pg,
        children: [(0, r.jsx)("div", {
          className: E.jM
        }), (0, r.jsx)(o.Text, {
          className: E.WO,
          variant: "text-sm/normal",
          children: A.intl.string(A.t.A5vswv)
        }), (0, r.jsx)(T, {})]
      }), p ? (0, r.jsx)("div", {
        className: E.Rc,
        children: (0, r.jsx)(d.A, {})
      }) : C]
    })
  }