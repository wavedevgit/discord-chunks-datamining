/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => P
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(772848),
  a = n(640358),
  l = n(442837),
  o = n(544891),
  c = n(481060),
  A = n(497321),
  d = n(841470),
  u = n(142497),
  g = n(706454),
  f = n(650774),
  m = n(430824),
  p = n(246946),
  h = n(626135),
  C = n(146596),
  b = n(559368),
  v = n(999382),
  x = n(981631),
  N = n(190378),
  j = n(388032),
  E = n(669312);

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let O = function(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = null;
    return null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (i = j.NW.string(j.t.xO2msb)) : i = j.NW.formatToPlainString(j.t.nskeMz, {
      percentage: (0, a.o)(Math.abs(t), n)
    }), {
      localizedNumber: null != e ? "".concat((0, a.o)(e, n)).concat(r ? "%" : "") : j.NW.string(j.t.jHpxws),
      subtext: i,
      isTrendingUp: t > 0,
      isTrendingDown: t < 0
    }
  },
  y = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t || e === x.evJ.NOT_ENOUGH_GUILD_MEMBERS ? (0, r.jsx)(c.kzN, {
      icon: c.d3s,
      className: E.notEnoughMembersError,
      backgroundColor: c.mTc.BACKGROUND_ACCENT,
      children: j.NW.string(j.t["FsgE/P"])
    }) : null == e ? null : (0, r.jsx)(c.kzN, {
      backgroundColor: c.mTc.BACKGROUND_ACCENT,
      children: j.NW.string(j.t.Iju63d)
    })
  },
  w = () => {
    let [e, t] = i.useState(!1), n = (0, l.e7)([v.Z], () => v.Z.getGuildId());
    return (0, r.jsx)(c.zxk, {
      className: E.developerPortalCta,
      onClick: () => {
        t(!0), (function(e) {
          h.default.track(x.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
            guild_id: e
          });
          let t = null == e ? x.E07.DEVELOPER_PORTAL : x.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
            n = (0, s.Z)();
          return o.tn.post({
            url: x.ANM.HANDOFF,
            body: {
              key: n
            },
            oldFormErrors: !0,
            rejectWithError: !0
          }).then(e => {
            let r = e.body.handoff_token;
            window.open(x.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, r, t))
          }, () => {
            window.open(t)
          })
        })(n).then(() => {
          t(!1)
        })
      },
      submitting: e,
      children: j.NW.string(j.t.Uskgx8)
    })
  },
  P = () => {
    let e = (0, l.e7)([v.Z], () => v.Z.getGuildId()),
      t = (0, l.e7)([f.Z], () => f.Z.getMemberCount(e)),
      n = (0, l.e7)([m.Z], () => m.Z.getGuild(e)),
      s = (0, l.e7)([g.default], () => g.default.locale),
      {
        analytics: a,
        errorCode: o
      } = (0, l.cj)([b.Z], () => ({
        analytics: null != e ? b.Z.getOverviewAnalytics(e) : null,
        errorCode: b.Z.getError()
      })),
      h = (0, l.e7)([p.Z], () => p.Z.getSettings().enabled),
      P = null == t || null == n || null != t && t < 500 && null != n && !n.hasFeature(x.oNc.PARTNERED) && !n.hasFeature(x.oNc.VERIFIED);
    i.useEffect(() => {
      null == e || P || ((0, C.Vk)(e), (0, C.SR)(e), (0, C.xl)(e))
    }, [e, P]), i.useEffect(() => {
      (0, u.Kw)(N.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
    }, []);
    let B = null != a ? (0, r.jsx)("div", {
      className: E.__invalid_guildAnalyticsOverviewWrapper,
      children: (0, r.jsxs)("div", {
        className: E.overviewData,
        children: [(0, r.jsx)(d.Z, I({
          title: j.NW.string(j.t.i0Nora),
          tooltipText: j.NW.string(j.t.KiRbLC)
        }, O(a.visitors, a.visitorsChange, s))), (0, r.jsx)(d.Z, I({
          title: j.NW.string(j.t.DDAHdX),
          tooltipText: j.NW.string(j.t.HxWUkZ)
        }, O(a.communicators, a.communicatorsChange, s))), (0, r.jsx)(d.Z, I({
          title: j.NW.string(j.t.hYeOqK)
        }, O(a.newMembers, a.newMembersChange, s))), (0, r.jsx)(d.Z, I({
          title: j.NW.string(j.t.jj7OPz),
          tooltipText: j.NW.string(j.t.MQCsl5)
        }, O(a.pctRetained, a.pctRetainedChange, s, !0)))]
      })
    }) : null;
    return (0, r.jsxs)(c.hjN, {
      tag: c.RB0.H1,
      title: j.NW.string(j.t["0wWfUF"]),
      children: [(0, r.jsx)(c.R94, {
        type: c.geA.DESCRIPTION,
        children: j.NW.format(j.t.NIZ60d, {})
      }), y(o, P), (0, r.jsxs)("div", {
        className: E.developerPortalCtaWrapper,
        children: [(0, r.jsx)("div", {
          className: E.placeholderImage
        }), (0, r.jsx)(c.Text, {
          className: E.developerPortalCtaText,
          variant: "text-sm/normal",
          children: j.NW.string(j.t.A5vsws)
        }), (0, r.jsx)(w, {})]
      }), h ? (0, r.jsx)("div", {
        className: E.streamerMode,
        children: (0, r.jsx)(A.Z, {})
      }) : B]
    })
  }