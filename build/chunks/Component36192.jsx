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
  return (0, Chunk54381.jsx)(Chunk481060.Text, {
    variant: "text-sm/normal",
    className: Chunk713791.description,
    children: Chunk388032.intl.string(Chunk388032.t.zZp618)
  })
}

function v() {
  let {
    currentSession: e
  } = (0, Chunk136097.h)();
  return null == module ? (0, Chunk54381.jsx)("div", {
    className: Chunk713791.loading,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  }) : (0, Chunk54381.jsx)(Chunk481060.C3N, {
    label: Chunk388032.intl.string(Chunk388032.t.LLS19o),
    children: (0, Chunk54381.jsx)(T, {
      session: module,
      current: true
    })
  })
}

function S() {
  let {
    currentSession: e,
    otherSessions: t
  } = (0, Chunk136097.h)(), n = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [a, o] = Chunk473749.useState(new Set);
  return null == module && 0 === exports.length || 0 === exports.length && (null == require ? true : require.mfaEnabled) || !(exports.length > 0) && (null == require ? true : require.mfaEnabled) ? null : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.xx1MWc),
      children: [exports.map(e => (0, r.jsx)(T, {
        session: e,
        useChecks: a.size > 0,
        checked: a.has(e.id_hash),
        setChecked: t => {
          let n = new Set(a);
          t ? n.add(e.id_hash) : n.delete(e.id_hash), o(n)
        }
      }, e.id_hash)), (null == require ? true : require.mfaEnabled) ? null : (0, Chunk54381.jsx)(C, {})]
    }), exports.length > 0 ? (0, Chunk54381.jsx)(Chunk481060.gNt, {
      label: Chunk120356.size > 0 ? Chunk388032.intl.string(Chunk388032.t.mMEmRO) : Chunk388032.intl.string(Chunk388032.t.Vij32M),
      description: Chunk388032.intl.string(Chunk388032.t.OTXyaf),
      children: (0, Chunk54381.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk713791.logOutAllButton,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "critical-secondary",
          size: "sm",
          text: Chunk120356.size > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["83CPLj"], {
            count: Chunk120356.size
          }) : Chunk388032.intl.string(Chunk388032.t.cLmmeY),
          onClick: () => {
            Chunk120356.size > 0 ? (0, Chunk43015.L$)(Array.from(Chunk120356)) : (0, Chunk43015.L$)(exports.map(e => e.id_hash))
          }
        })
      })
    }) : null]
  })
}

function I() {
  return Chunk473749.useEffect(() => ((0, Chunk43015.fw)(), () => {
    (0, Chunk43015.$Z)()
  }), []), (0, Chunk54381.jsxs)(Chunk10298.N, {
    header: Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    children: [(0, Chunk54381.jsx)(O, {}), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      className: Chunk713791.sessions,
      children: [(0, Chunk54381.jsx)(v, {}), (0, Chunk54381.jsx)(S, {})]
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
  return (0, Chunk54381.jsxs)("div", {
    className: o()(Chunk713791.session, Chunk713791.legacySession),
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk713791.sessionIcon,
      children: (0, Chunk54381.jsx)(Chunk460562.Z, {
        width: "32",
        height: "32"
      })
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk713791.sessionInfo,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk713791.sessionInfoRow,
        color: "text-muted",
        children: (0, Chunk54381.jsx)("span", {
          children: Chunk388032.intl.string(Chunk388032.t.iUa0sn)
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        className: Chunk713791.sessionInfoRow,
        color: "text-muted",
        children: (0, Chunk54381.jsx)("span", {
          children: Chunk388032.intl.format(Chunk388032.t["044+8i"], {
            onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.ACCOUNT_PANEL, {
              section: Chunk981631.oAB.ACCOUNT,
              analyticsLocations: [Chunk100527.Z.USER_SETTINGS_SESSIONS]
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
    default:
      return {
        text: e, icon: l.pzj
      }
  }
}