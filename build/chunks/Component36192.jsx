/** Chunk was on web.js **/
/** chunk id: 36192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk43015 = require("./43015.js"),
  Chunk136097 = require("./136097.js"),
  Chunk266454 = require("./266454.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk313789 = require("./313789.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk844642 = require("./844642.js");

function N() {
  let e, {
      currentSession: t,
      otherSessions: n
    } = (0, Chunk136097.h)(),
    a = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    o = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [p, b] = Chunk473749.useState(false);
  Chunk473749.useEffect(() => {
    (0, Chunk266454.Q3)(Chunk704215.z.AUTH_SESSIONS_NEW, {
      dismissAction: Chunk921944.L.AUTO
    }), (0, Chunk43015.fw)();
    let e = setTimeout(() => Chunk460562(true), 500);
    return () => {
      clearTimeout(module), (0, Chunk43015.$Z)()
    }
  }, []);
  let y = () => {
      Chunk544891.tn.post({
        url: Chunk981631.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
        rejectWithError: true
      })
    },
    [O, S] = Chunk473749.useState(new Set);
  return Chunk120356 ? (0, Chunk54381.jsx)(Chunk497321.Z, {}) : (e = null == exports && 0 === require.length ? Chunk100527 ? (0, Chunk54381.jsx)("div", {
    className: Chunk844642.loading,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  }) : null : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      className: Chunk844642.sessions,
      children: [(0, Chunk54381.jsx)(Chunk481060.C3N, {
        label: Chunk388032.intl.string(Chunk388032.t.LLS19o),
        children: null != exports ? (0, Chunk54381.jsx)(P, {
          session: exports,
          current: true
        }) : null
      }), !(require.length > 0) && (null == o ? true : o.mfaEnabled) ? null : (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: Chunk388032.intl.string(Chunk388032.t.xx1MWc),
        children: [require.map(e => (0, r.jsx)(P, {
          session: e,
          useChecks: O.size > 0,
          checked: O.has(e.id_hash),
          setChecked: t => {
            let n = new Set(O);
            t ? n.add(e.id_hash) : n.delete(e.id_hash), S(n)
          }
        }, e.id_hash)), (null == o ? true : o.mfaEnabled) ? null : (0, Chunk54381.jsx)(R, {})]
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

function P(e) {
  var t, n, i, a, s;
  let {
    session: l,
    current: c,
    setChecked: u,
    checked: f,
    useChecks: p
  } = e, h = null != (s = null == (t = l.client_info) ? true : t.location) ? s : null == (n = l.client_info) ? true : n.ip, g = null == (i = l.client_info) ? true : i.platform, {
    text: E,
    icon: b
  } = D(null == (a = l.client_info) ? true : a.os), O = c ? null : (0, m.p)(l.approx_last_used_time), v = [E, g].filter(y.lm), S = [h, O].filter(y.lm);
  return (0, r.jsxs)("div", {
    className: o()(C.session, c ? C.currentSession : null),
    children: [(0, r.jsx)("div", {
      className: C.sessionIcon,
      children: (0, r.jsx)(b, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: C.sessionInfo,
      children: [(0, r.jsxs)(d.Text, {
        variant: "eyebrow",
        className: C.sessionInfoRow,
        children: [(0, r.jsx)("span", {
          children: v[0]
        }), v.length > 1 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            children: "\xb7"
          }), (0, r.jsx)("span", {
            children: v[1]
          })]
        })]
      }), (0, r.jsxs)(d.Text, {
        variant: "text-sm/medium",
        className: C.sessionInfoRow,
        children: [(0, r.jsx)("span", {
          children: S[0]
        }), S.length > 1 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            children: "\xb7"
          }), (0, r.jsx)("span", {
            children: S[1]
          })]
        })]
      })]
    }), c ? null : p ? (0, r.jsx)("div", {
      className: C.sessionCheckbox,
      children: (0, r.jsx)(d.Cnq, {
        onChange: e => {
          null == u || u(e)
        },
        checked: f
      })
    }) : (0, r.jsx)(d.P3F, {
      className: C.sessionMoreButton,
      onClick: e => {
        e.shiftKey ? null == u || u(true) : (0, _.L$)(l.id_hash)
      },
      "aria-label": A.intl.string(A.t.E4MJNt),
      children: (0, r.jsx)(d.Dio, {
        size: "md",
        color: "currentColor"
      })
    })]
  }, l.id_hash)
}

function R() {
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

function D(e) {
  switch (null == e ? true : e.toLowerCase().trim()) {
    case null:
    case true:
    case "":
      return {
        text: A.intl.string(A.t.cDHCNY), icon: d.pzj
      };
    case "ios":
    case "android":
      return {
        text: e, icon: d.AtH
      };
    default:
      return {
        text: e, icon: d.pzj
      }
  }
}