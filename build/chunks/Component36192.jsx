/** Chunk was on web.js **/
/** chunk id: 36192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => S,
  Vy: () => T,
  ZP: () => C,
  kC: () => v
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
  Chunk526665 = require("./526665.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk713791 = require("./713791.js");

function v() {
  return (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: O.description,
    children: y.intl.string(y.t.zZp618)
  })
}

function S() {
  let {
    currentSession: e
  } = (0, d.h)();
  return null == e ? (0, r.jsx)("div", {
    className: O.loading,
    children: (0, r.jsx)(l.$jN, {})
  }) : (0, r.jsx)(l.C3N, {
    label: y.intl.string(y.t.LLS19o),
    children: (0, r.jsx)(A, {
      session: e,
      current: true
    })
  })
}

function I(e) {
  let {
    checked: t,
    otherSessions: n
  } = e;
  return (0, r.jsx)(l.gNt, {
    label: t.size > 0 ? y.intl.string(y.t.mMEmRO) : y.intl.string(y.t.Vij32M),
    description: y.intl.string(y.t.OTXyaf),
    children: (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: O.logOutAllButton,
      children: (0, r.jsx)(l.Button, {
        variant: "critical-secondary",
        size: "sm",
        text: t.size > 0 ? y.intl.formatToPlainString(y.t["83CPLj"], {
          count: t.size
        }) : y.intl.string(y.t.cLmmeY),
        onClick: () => {
          t.size > 0 ? (0, u.L$)(Array.from(t)) : (0, u.L$)(n.map(e => e.id_hash))
        }
      })
    })
  })
}

function T() {
  let e = (0, m.gN)("OtherSessionsSetting"),
    {
      currentSession: t,
      otherSessions: n
    } = (0, d.h)(),
    a = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
    [o, c] = i.useState(new Set);
  return null == t && 0 === n.length || 0 === n.length && (null == a ? true : a.mfaEnabled) || !(n.length > 0) && (null == a ? true : a.mfaEnabled) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.C3N, {
      label: y.intl.string(y.t.xx1MWc),
      children: [n.map(e => (0, r.jsx)(A, {
        session: e,
        useChecks: o.size > 0,
        checked: o.has(e.id_hash),
        setChecked: t => {
          let n = new Set(o);
          t ? n.add(e.id_hash) : n.delete(e.id_hash), c(n)
        }
      }, e.id_hash)), (null == a ? true : a.mfaEnabled) ? null : (0, r.jsx)(N, {})]
    }), n.length > 0 && (e ? (0, r.jsx)("div", {
      className: O.logOutAllButtonRedesign,
      children: (0, r.jsx)(I, {
        checked: o,
        otherSessions: n
      })
    }) : (0, r.jsx)(I, {
      checked: o,
      otherSessions: n
    }))]
  })
}

function C() {
  return i.useEffect(() => ((0, u.fw)(), () => {
    (0, u.$Z)()
  }), []), (0, r.jsxs)(g.N, {
    header: y.intl.string(y.t["+1h0k/"]),
    children: [(0, r.jsx)(v, {}), (0, r.jsxs)(l.Kqy, {
      gap: 24,
      className: O.sessions,
      children: [(0, r.jsx)(S, {}), (0, r.jsx)(T, {})]
    })]
  })
}

function A(e) {
  var t, n, i, a, s;
  let {
    session: c,
    current: f,
    setChecked: p,
    checked: h,
    useChecks: m
  } = e, g = null != (s = null == (t = c.client_info) ? true : t.location) ? s : null == (n = c.client_info) ? true : n.ip, E = null == (i = c.client_info) ? true : i.platform, {
    text: b,
    icon: v
  } = P(null == (a = c.client_info) ? true : a.os), S = f ? null : (0, d.p)(c.approx_last_used_time), I = [b, E].filter(_.lm), T = [g, S].filter(_.lm);
  return (0, r.jsxs)("div", {
    className: o()(O.session, {
      [O.currentSession]: f
    }),
    children: [(0, r.jsxs)("div", {
      className: O.sessionContent,
      children: [(0, r.jsx)("div", {
        className: O.sessionIcon,
        children: (0, r.jsx)(v, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: O.sessionInfo,
        children: [(0, r.jsxs)(l.Text, {
          variant: "eyebrow",
          className: O.sessionInfoRow,
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
          className: O.sessionInfoRow,
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
      }), f ? null : m ? (0, r.jsx)("div", {
        className: O.sessionCheckbox,
        children: (0, r.jsx)(l.Cnq, {
          onChange: e => {
            null == p || p(e)
          },
          checked: h
        })
      }) : (0, r.jsx)(l.P3F, {
        className: O.sessionMoreButton,
        onClick: e => {
          e.shiftKey ? null == p || p(true) : (0, u.L$)(c.id_hash)
        },
        "aria-label": y.intl.string(y.t.E4MJNt),
        children: (0, r.jsx)(l.Dio, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), !f && (0, r.jsx)(l.izJ, {
      className: O.sessionSeparator
    })]
  }, c.id_hash)
}

function N() {
  return (0, r.jsxs)("div", {
    className: o()(O.session, O.legacySession),
    children: [(0, r.jsxs)("div", {
      className: O.sessionContent,
      children: [(0, r.jsx)("div", {
        className: O.sessionIcon,
        children: (0, r.jsx)(p.Z, {
          width: "32",
          height: "32"
        })
      }), (0, r.jsxs)("div", {
        className: O.sessionInfo,
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          className: O.sessionInfoRow,
          color: "text-muted",
          children: (0, r.jsx)("span", {
            children: y.intl.string(y.t.iUa0sn)
          })
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          className: O.sessionInfoRow,
          color: "text-muted",
          children: (0, r.jsx)("span", {
            children: y.intl.format(y.t["044+8i"], {
              onClick: () => (0, E.openUserSettings)(h.n.ACCOUNT_PANEL, {
                section: b.oAB.ACCOUNT,
                analyticsLocations: [c.Z.USER_SETTINGS_SESSIONS]
              })
            })
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: O.sessionSeparator
    })]
  })
}

function P(e) {
  switch (null == e ? true : e.toLowerCase().trim()) {
    case null:
    case true:
    case "":
      return {
        text: y.intl.string(y.t.cDHCNY), icon: l.pzj
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