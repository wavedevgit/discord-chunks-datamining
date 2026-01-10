/** Chunk was on web.js **/
/** chunk id: 36192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => v,
  Vy: () => S,
  ZP: () => I,
  kC: () => O
}), require("./953529.js"), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk43015 = require("./43015.js"),
  Chunk136097 = require("./136097.js"),
  Chunk594174 = require("./594174.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk313789 = require("./313789.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk713791 = require("./713791.js");

function O() {
  return (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: y.description,
    children: b.intl.string(b.t.zZp618)
  })
}

function v() {
  let {
    currentSession: e
  } = (0, d.h)();
  return null == e ? (0, r.jsx)("div", {
    className: y.loading,
    children: (0, r.jsx)(l.$jN, {})
  }) : (0, r.jsx)(l.C3N, {
    label: b.intl.string(b.t.LLS19o),
    children: (0, r.jsx)(T, {
      session: e,
      current: true
    })
  })
}

function S() {
  let {
    currentSession: e,
    otherSessions: t
  } = (0, d.h)(), n = (0, s.e7)([f.default], () => f.default.getCurrentUser()), [a, o] = i.useState(new Set);
  return null == e && 0 === t.length || 0 === t.length && (null == n ? true : n.mfaEnabled) || !(t.length > 0) && (null == n ? true : n.mfaEnabled) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.C3N, {
      label: b.intl.string(b.t.xx1MWc),
      children: [t.map(e => (0, r.jsx)(T, {
        session: e,
        useChecks: a.size > 0,
        checked: a.has(e.id_hash),
        setChecked: t => {
          let n = new Set(a);
          t ? n.add(e.id_hash) : n.delete(e.id_hash), o(n)
        }
      }, e.id_hash)), (null == n ? true : n.mfaEnabled) ? null : (0, r.jsx)(C, {})]
    }), t.length > 0 ? (0, r.jsx)(l.gNt, {
      label: a.size > 0 ? b.intl.string(b.t.mMEmRO) : b.intl.string(b.t.Vij32M),
      description: b.intl.string(b.t.OTXyaf),
      children: (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: y.logOutAllButton,
        children: (0, r.jsx)(l.Button, {
          variant: "critical-secondary",
          size: "sm",
          text: a.size > 0 ? b.intl.formatToPlainString(b.t["83CPLj"], {
            count: a.size
          }) : b.intl.string(b.t.cLmmeY),
          onClick: () => {
            a.size > 0 ? (0, u.L$)(Array.from(a)) : (0, u.L$)(t.map(e => e.id_hash))
          }
        })
      })
    }) : null]
  })
}

function I() {
  return i.useEffect(() => ((0, u.fw)(), () => {
    (0, u.$Z)()
  }), []), (0, r.jsxs)(h.N, {
    header: b.intl.string(b.t["+1h0k/"]),
    children: [(0, r.jsx)(O, {}), (0, r.jsxs)(l.Kqy, {
      gap: 24,
      className: y.sessions,
      children: [(0, r.jsx)(v, {}), (0, r.jsx)(S, {})]
    })]
  })
}

function T(e) {
  var t, n, i, a, s;
  let {
    session: c,
    current: f,
    setChecked: p,
    checked: m,
    useChecks: h
  } = e, g = null != (s = null == (t = c.client_info) ? true : t.location) ? s : null == (n = c.client_info) ? true : n.ip, E = null == (i = c.client_info) ? true : i.platform, {
    text: O,
    icon: v
  } = A(null == (a = c.client_info) ? true : a.os), S = f ? null : (0, d.p)(c.approx_last_used_time), I = [O, E].filter(_.lm), T = [g, S].filter(_.lm);
  return (0, r.jsxs)("div", {
    className: o()(y.session, f ? y.currentSession : null),
    children: [(0, r.jsx)("div", {
      className: y.sessionIcon,
      children: (0, r.jsx)(v, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: y.sessionInfo,
      children: [(0, r.jsxs)(l.Text, {
        variant: "eyebrow",
        className: y.sessionInfoRow,
        children: [(0, r.jsx)("span", {
          children: I[0]
        }), I.length > 1 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            children: "\xb7"
          }), (0, r.jsx)("span", {
            children: I[1]
          })]
        })]
      }), (0, r.jsxs)(l.Text, {
        variant: "text-sm/medium",
        className: y.sessionInfoRow,
        children: [(0, r.jsx)("span", {
          children: T[0]
        }), T.length > 1 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            children: "\xb7"
          }), (0, r.jsx)("span", {
            children: T[1]
          })]
        })]
      })]
    }), f ? null : h ? (0, r.jsx)("div", {
      className: y.sessionCheckbox,
      children: (0, r.jsx)(l.Cnq, {
        onChange: e => {
          null == p || p(e)
        },
        checked: m
      })
    }) : (0, r.jsx)(l.P3F, {
      className: y.sessionMoreButton,
      onClick: e => {
        e.shiftKey ? null == p || p(true) : (0, u.L$)(c.id_hash)
      },
      "aria-label": b.intl.string(b.t.E4MJNt),
      children: (0, r.jsx)(l.Dio, {
        size: "md",
        color: "currentColor"
      })
    })]
  }, c.id_hash)
}

function C() {
  return (0, r.jsxs)("div", {
    className: o()(y.session, y.legacySession),
    children: [(0, r.jsx)("div", {
      className: y.sessionIcon,
      children: (0, r.jsx)(p.Z, {
        width: "32",
        height: "32"
      })
    }), (0, r.jsxs)("div", {
      className: y.sessionInfo,
      children: [(0, r.jsx)(l.Text, {
        variant: "eyebrow",
        className: y.sessionInfoRow,
        color: "text-muted",
        children: (0, r.jsx)("span", {
          children: b.intl.string(b.t.iUa0sn)
        })
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        className: y.sessionInfoRow,
        color: "text-muted",
        children: (0, r.jsx)("span", {
          children: b.intl.format(b.t["044+8i"], {
            onClick: () => (0, g.openUserSettings)(m.n.ACCOUNT_PANEL, {
              section: E.oAB.ACCOUNT,
              analyticsLocations: [c.Z.USER_SETTINGS_SESSIONS]
            })
          })
        })
      })]
    })]
  })
}

function A(e) {
  switch (null == e ? true : e.toLowerCase().trim()) {
    case null:
    case true:
    case "":
      return {
        text: b.intl.string(b.t.cDHCNY), icon: l.pzj
      };
    case "ios":
    case "android":
      return {
        text: e, icon: l.AtH
      };
    case "horizon os":
      return {
        text: e, icon: l.Pb9
      };
    default:
      return {
        text: e, icon: l.pzj
      }
  }
}