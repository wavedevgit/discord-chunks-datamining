/** Chunk was on 35894 **/
/** chunk id: 976715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk834409 = require("./834409.js"),
  Chunk903093 = require("./903093.js"),
  Chunk671576 = require("./671576.jsx"),
  Chunk449585 = require("./449585.jsx"),
  Chunk93474 = require("./93474.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk119619 = require("./119619.js");

function b(e) {
  var t;
  if (null == (null != (t = e.dmsDisabledUntil) ? t : e.invitesDisabledUntil)) return "";
  let n = null != e.dmsDisabledUntil,
    r = null != e.invitesDisabledUntil;
  switch (true) {
    case n && r:
      return p.intl.string(p.t.CEygF8);
    case n:
      return p.intl.string(p.t.Wmbjcz);
    case r:
      return p.intl.string(p.t.Q1QrAi);
    default:
      return ""
  }
}

function j(e) {
  var t;
  let {
    onHandleEnableLockdown: n,
    onHandleReportFalseAlarm: l,
    incidentData: o
  } = e, s = null != (t = o.raidDetectedAt) ? t : o.dmSpamDetectedAt;
  return (0, r.jsxs)("div", {
    className: f.hD,
    children: [(0, r.jsxs)("div", {
      className: f.iD,
      children: [(0, r.jsx)(a.lmn, {
        size: "md",
        className: f.F_,
        color: i.A.unsafe_rawColors.RED_345.css
      }), (0, r.jsxs)("div", {
        className: f.Tm,
        children: [(0, r.jsx)(a.Heading, {
          className: f.R_,
          variant: "heading-lg/semibold",
          color: "text-feedback-critical",
          children: (0, u.Qm)(o) ? p.intl.string(p.t.raRxxT) : p.intl.string(p.t["4nbAta"])
        }), (0, r.jsx)(a.Text, {
          className: f.Ng,
          variant: "text-sm/medium",
          children: p.intl.format(p.t["4QIIZl"], {
            dateTime: new Date(null != s ? s : "").toLocaleString(p.intl.currentLocale, u.yc)
          })
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: f.UD,
      children: [(0, r.jsx)(a.Button, {
        variant: "secondary",
        onClick: l,
        text: p.intl.string(p.t.ISiXba),
        size: "sm"
      }), (0, r.jsx)(a.Button, {
        variant: "critical-primary",
        onClick: n,
        size: "sm",
        text: p.intl.string(p.t.UgXhdn)
      })]
    })]
  })
}

function g(e) {
  let {
    onHandleEnableLockdown: t,
    incidentData: n,
    guildName: l
  } = e;
  return (0, r.jsxs)("div", {
    className: f.hD,
    children: [(0, r.jsxs)("div", {
      className: f.iD,
      children: [(0, r.jsx)(a.lmn, {
        size: "md",
        className: f.F_,
        color: i.A.unsafe_rawColors.BRAND_360.css
      }), (0, r.jsxs)("div", {
        className: f.Tm,
        children: [(0, r.jsx)(a.Heading, {
          className: f.R_,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: b(n)
        }), (0, r.jsx)(a.Text, {
          className: f.Ng,
          variant: "text-sm/medium",
          children: (0, u.ql)(n, l)
        })]
      })]
    }), (0, r.jsx)(a.Button, {
      color: o.$n.Colors.BRAND,
      onClick: t,
      text: p.intl.string(p.t.e1bMNf),
      size: "sm"
    })]
  })
}

function h(e) {
  let {
    onHandleEnableLockdown: t,
    onHandleReportFalseAlarm: n,
    incidentData: l,
    guildName: o
  } = e;
  return (0, r.jsxs)("div", {
    className: f.hD,
    children: [(0, r.jsxs)("div", {
      className: f.iD,
      children: [(0, r.jsx)(a.lmn, {
        size: "md",
        className: f.F_,
        color: i.A.unsafe_rawColors.BRAND_360.css
      }), (0, r.jsxs)("div", {
        className: f.Tm,
        children: [(0, r.jsx)(a.Heading, {
          className: f.R_,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: b(l)
        }), (0, r.jsx)(a.Text, {
          className: f.Ng,
          variant: "text-sm/medium",
          children: (0, u.ql)(l, o)
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: f.UD,
      children: [(0, r.jsx)(a.Button, {
        onClick: n,
        text: p.intl.string(p.t.ISiXba),
        variant: "secondary",
        size: "sm"
      }), (0, r.jsx)(a.Button, {
        onClick: t,
        text: p.intl.string(p.t.e1bMNf),
        size: "sm"
      })]
    })]
  })
}

function x(e) {
  let {
    guild: t,
    incidentData: n,
    isUnderLockdown: i,
    isRaidDetected: o
  } = e, p = l.useCallback(() => {
    (0, a.mMO)(async () => {
      let e = {
        source: c.Eo.MEMBER_SAFETY_PAGE,
        location: s.A.MEMBER_SAFETY_PAGE,
        alertType: (0, u.$5)(n)
      };
      return n => {
        var l, i;
        return (0, r.jsx)(d.default, (l = function(e) {
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
        }({}, n), i = i = {
          guildId: t.id,
          analyticsData: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    })
  }, [t.id, n]), f = l.useCallback(() => {
    let e = m.A.getLastIncidentAlertMessage(t.id);
    (0, C.is)(e, t.id)
  }, [t.id]), b = (() => {
    switch (true) {
      case o && i:
        return 3;
      case o:
        return 1;
      case i:
        return 2;
      default:
        return 0
    }
  })();
  if (null == t || null == n) return null;
  switch (b) {
    case 1:
      return (0, r.jsx)(j, {
        onHandleEnableLockdown: p,
        onHandleReportFalseAlarm: f,
        incidentData: n
      });
    case 2:
      return (0, r.jsx)(g, {
        onHandleEnableLockdown: p,
        incidentData: n,
        guildName: t.name
      });
    case 3:
      return (0, r.jsx)(h, {
        onHandleEnableLockdown: p,
        onHandleReportFalseAlarm: f,
        incidentData: n,
        guildName: t.name
      });
    default:
      return null
  }
}