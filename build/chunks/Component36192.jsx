/** Chunk was on web.js **/
/** chunk id: 36192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk43015 = require("./43015.js"),
  Chunk136097 = require("./136097.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk313789 = require("./313789.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk844642 = require("./844642.js");

function T() {
  let e, {
      currentSession: t,
      otherSessions: n
    } = (0, Chunk136097.h)(),
    a = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    o = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [f, g] = Chunk473749.useState(false);
  Chunk473749.useEffect(() => {
    (0, Chunk43015.fw)();
    let e = setTimeout(() => Chunk460562(true), 500);
    return () => {
      clearTimeout(module), (0, Chunk43015.$Z)()
    }
  }, []);
  let E = () => {
      Chunk544891.tn.post({
        url: Chunk981631.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
        rejectWithError: true
      })
    },
    [b, O] = Chunk473749.useState(new Set);
  return Chunk120356 ? (0, Chunk54381.jsx)(Chunk497321.Z, {}) : (e = null == exports && 0 === require.length ? Chunk100527 ? (0, Chunk54381.jsx)("div", {
    className: Chunk844642.loading,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  }) : null : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      className: Chunk844642.sessions,
      children: [(0, Chunk54381.jsx)(Chunk481060.C3N, {
        label: Chunk388032.intl.string(Chunk388032.t.LLS19o),
        children: null != exports ? (0, Chunk54381.jsx)(C, {
          session: exports,
          current: true
        }) : null
      }), !(require.length > 0) && (null == o ? true : o.mfaEnabled) ? null : (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: Chunk388032.intl.string(Chunk388032.t.xx1MWc),
        children: [require.map(e => (0, r.jsx)(C, {
          session: e,
          useChecks: b.size > 0,
          checked: b.has(e.id_hash),
          setChecked: t => {
            let n = new Set(b);
            t ? n.add(e.id_hash) : n.delete(e.id_hash), O(n)
          }
        }, e.id_hash)), (null == o ? true : o.mfaEnabled) ? null : (0, Chunk54381.jsx)(A, {})]
      })]
    }), require.length > 0 ? (0, Chunk54381.jsx)(Chunk481060.gNt, {
      label: Chunk313789.size > 0 ? Chunk388032.intl.string(Chunk388032.t.mMEmRO) : Chunk388032.intl.string(Chunk388032.t.Vij32M),
      description: Chunk388032.intl.string(Chunk388032.t.OTXyaf),
      children: (0, Chunk54381.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk844642.logOutAllButton,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "critical-secondary",
          size: "sm",
          text: Chunk313789.size > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["83CPLj"], {
            count: Chunk313789.size
          }) : Chunk388032.intl.string(Chunk388032.t.cLmmeY),
          onClick: () => {
            Chunk313789.size > 0 ? (0, Chunk43015.L$)(Array.from(Chunk313789)) : (0, Chunk43015.L$)(require.map(e => e.id_hash))
          }
        })
      })
    }) : null]
  }), (0, Chunk54381.jsxs)(Chunk10298.N, {
    header: Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      className: Chunk844642.description,
      children: Chunk388032.intl.string(Chunk388032.t.zZp618)
    }), (null == o ? true : o.isStaff()) ? (0, Chunk54381.jsxs)("div", {
      className: Chunk844642.tools,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk844642.toolsTitle,
        variant: "text-md/bold",
        children: "DEV TOOLS"
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk844642.toolsTitle,
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "These tools are only shown to staff users."
      }), (0, Chunk54381.jsx)(Chunk28664.u, {
        text: "Triggers mobile and email suspicious session notifications for the current user",
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "secondary",
          size: "sm",
          text: "Trigger Suspicious Sessions Notification",
          onClick: Chunk823379
        })
      })]
    }) : null, module]
  }))
}

function C(e) {
  var t, n, i, a, s;
  let {
    session: l,
    current: c,
    setChecked: d,
    checked: f,
    useChecks: m
  } = e, h = null != (s = null == (t = l.client_info) ? true : t.location) ? s : null == (n = l.client_info) ? true : n.ip, g = null == (i = l.client_info) ? true : i.platform, {
    text: b,
    icon: y
  } = N(null == (a = l.client_info) ? true : a.os), O = c ? null : (0, _.p)(l.approx_last_used_time), v = [b, g].filter(E.lm), T = [h, O].filter(E.lm);
  return (0, r.jsxs)("div", {
    className: o()(I.session, c ? I.currentSession : null),
    children: [(0, r.jsx)("div", {
      className: I.sessionIcon,
      children: (0, r.jsx)(y, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: I.sessionInfo,
      children: [(0, r.jsxs)(u.Text, {
        variant: "eyebrow",
        className: I.sessionInfoRow,
        children: [(0, r.jsx)("span", {
          children: v[0]
        }), v.length > 1 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            children: "\xb7"
          }), (0, r.jsx)("span", {
            children: v[1]
          })]
        })]
      }), (0, r.jsxs)(u.Text, {
        variant: "text-sm/medium",
        className: I.sessionInfoRow,
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
    }), c ? null : m ? (0, r.jsx)("div", {
      className: I.sessionCheckbox,
      children: (0, r.jsx)(u.Cnq, {
        onChange: e => {
          null == d || d(e)
        },
        checked: f
      })
    }) : (0, r.jsx)(u.P3F, {
      className: I.sessionMoreButton,
      onClick: e => {
        e.shiftKey ? null == d || d(true) : (0, p.L$)(l.id_hash)
      },
      "aria-label": S.intl.string(S.t.E4MJNt),
      children: (0, r.jsx)(u.Dio, {
        size: "md",
        color: "currentColor"
      })
    })]
  }, l.id_hash)
}

function A() {
  return (0, Chunk54381.jsxs)("div", {
    className: o()(Chunk844642.session, Chunk844642.legacySession),
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk844642.sessionIcon,
      children: (0, Chunk54381.jsx)(Chunk460562.Z, {
        width: "32",
        height: "32"
      })
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk844642.sessionInfo,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk844642.sessionInfoRow,
        color: "text-muted",
        children: (0, Chunk54381.jsx)("span", {
          children: Chunk388032.intl.string(Chunk388032.t.iUa0sn)
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        className: Chunk844642.sessionInfoRow,
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

function N(e) {
  switch (null == e ? true : e.toLowerCase().trim()) {
    case null:
    case true:
    case "":
      return {
        text: S.intl.string(S.t.cDHCNY), icon: u.pzj
      };
    case "ios":
    case "android":
      return {
        text: e, icon: u.AtH
      };
    default:
      return {
        text: e, icon: u.pzj
      }
  }
}