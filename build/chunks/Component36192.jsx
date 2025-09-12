/** Chunk was on web.js **/
/** chunk id: 36192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk43015 = require("./43015.js"),
  Chunk136097 = require("./136097.js"),
  Chunk266454 = require("./266454.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk844642 = require("./844642.js");

function A() {
  let e, {
      currentSession: t,
      otherSessions: n
    } = (0, Chunk136097.h)(),
    a = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    o = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [u, f] = Chunk647438.useState(false);
  Chunk647438.useEffect(() => {
    (0, Chunk266454.Q3)(Chunk704215.z.AUTH_SESSIONS_NEW, {
      dismissAction: Chunk921944.L.AUTO
    }), (0, Chunk43015.fw)();
    let e = setTimeout(() => Chunk230711(true), 500);
    return () => {
      clearTimeout(module), (0, Chunk43015.$Z)()
    }
  }, []);
  let p = () => {
      Chunk544891.tn.post({
        url: Chunk981631.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
        rejectWithError: true
      })
    },
    [y, O] = Chunk647438.useState(new Set);
  return Chunk120356 ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : (e = null == exports && 0 === require.length ? Chunk755721 ? (0, Chunk951288.jsx)("div", {
    className: Chunk844642.loading,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  }) : null : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk844642.sessions,
      children: [(0, Chunk951288.jsx)(Chunk481060.hjN, {
        title: Chunk388032.intl.string(Chunk388032.t.LLS19v),
        titleClassName: Chunk844642.groupTitle,
        children: null != exports ? (0, Chunk951288.jsx)(C, {
          session: exports,
          current: true
        }) : null
      }), !(require.length > 0) && (null == o ? true : o.mfaEnabled) ? null : (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        title: Chunk388032.intl.string(Chunk388032.t.xx1MWV),
        titleClassName: Chunk844642.groupTitle,
        className: Chunk844642.otherSessions,
        children: [require.map(e => (0, r.jsx)(C, {
          session: e,
          useChecks: y.size > 0,
          checked: y.has(e.id_hash),
          setChecked: t => {
            let n = new Set(y);
            t ? n.add(e.id_hash) : n.delete(e.id_hash), O(n)
          }
        }, e.id_hash)), (null == o ? true : o.mfaEnabled) ? null : (0, Chunk951288.jsx)(N, {})]
      })]
    }), require.length > 0 ? (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: Chunk460562.size > 0 ? Chunk388032.intl.string(Chunk388032.t.mMEmRE) : Chunk388032.intl.string(Chunk388032.t.Vij32N),
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        children: Chunk388032.intl.string(Chunk388032.t.OTXyaW)
      }), (0, Chunk951288.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk844642.logOutAllButton,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "critical-secondary",
          size: "sm",
          text: Chunk460562.size > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["83CPLi"], {
            count: Chunk460562.size
          }) : Chunk388032.intl.string(Chunk388032.t.cLmmeX),
          onClick: () => {
            Chunk460562.size > 0 ? (0, Chunk43015.L$)(Array.from(Chunk460562)) : (0, Chunk43015.L$)(require.map(e => e.id_hash))
          }
        })
      })]
    }) : null]
  }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    tag: Chunk481060.RB0.H1,
    title: Chunk388032.intl.string(Chunk388032.t["+1h0k5"]),
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      className: Chunk844642.description,
      children: Chunk388032.intl.string(Chunk388032.t.zZp619)
    }), (null == o ? true : o.isStaff()) ? (0, Chunk951288.jsxs)("div", {
      className: Chunk844642.tools,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk844642.toolsTitle,
        variant: "text-md/bold",
        children: "DEV TOOLS"
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk844642.toolsTitle,
        variant: "text-sm/normal",
        color: "text-danger",
        children: "These tools are only shown to staff users."
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        text: "Triggers mobile and email suspicious session notifications for the current user",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(d.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Trigger Suspicious Sessions Notification",
            onClick: p,
            onMouseEnter: t,
            onMouseLeave: n
          })
        }
      })]
    }) : null, module]
  }))
}

function C(e) {
  var t, n, i, a, s;
  let {
    session: l,
    current: c,
    setChecked: f,
    checked: _,
    useChecks: p
  } = e, g = null != (s = null == (t = l.client_info) ? true : t.location) ? s : null == (n = l.client_info) ? true : n.ip, E = null == (i = l.client_info) ? true : i.platform, {
    text: b,
    icon: y
  } = R(null == (a = l.client_info) ? true : a.os), v = c ? null : (0, m.p)(l.approx_last_used_time), I = [b, E].filter(O.lm), A = [g, v].filter(O.lm);
  return (0, r.jsxs)("div", {
    className: o()(S.session, c ? S.currentSession : null),
    children: [(0, r.jsx)("div", {
      className: S.sessionIcon,
      children: (0, r.jsx)(y, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: S.sessionInfo,
      children: [(0, r.jsxs)(d.Text, {
        variant: "eyebrow",
        className: S.sessionInfoRow,
        children: [(0, r.jsx)("span", {
          children: I[0]
        }), I.length > 1 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            children: "\xb7"
          }), (0, r.jsx)("span", {
            children: I[1]
          })]
        })]
      }), (0, r.jsxs)(d.Text, {
        variant: "text-sm/medium",
        className: S.sessionInfoRow,
        children: [(0, r.jsx)("span", {
          children: A[0]
        }), A.length > 1 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            children: "\xb7"
          }), (0, r.jsx)("span", {
            children: A[1]
          })]
        })]
      })]
    }), c ? null : p ? (0, r.jsx)("div", {
      className: S.sessionCheckbox,
      children: (0, r.jsx)(u.$q, {
        onChange: (e, t) => {
          null == f || f(t)
        },
        value: _
      })
    }) : (0, r.jsx)(d.P3F, {
      className: S.sessionMoreButton,
      onClick: e => {
        e.shiftKey ? null == f || f(true) : (0, h.L$)(l.id_hash)
      },
      "aria-label": T.intl.string(T.t.E4MJNj),
      children: (0, r.jsx)(d.Dio, {
        size: "md",
        color: "currentColor"
      })
    })]
  }, l.id_hash)
}

function N() {
  return (0, Chunk951288.jsxs)("div", {
    className: o()(Chunk844642.session, Chunk844642.legacySession),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk844642.sessionIcon,
      children: (0, Chunk951288.jsx)(Chunk460562.Z, {
        width: "32",
        height: "32"
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk844642.sessionInfo,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk844642.sessionInfoRow,
        color: "text-muted",
        children: (0, Chunk951288.jsx)("span", {
          children: Chunk388032.intl.string(Chunk388032.t.iUa0sr)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        className: Chunk844642.sessionInfoRow,
        color: "text-muted",
        children: (0, Chunk951288.jsx)("span", {
          children: Chunk388032.intl.format(Chunk388032.t["044+8v"], {
            onClick: () => Chunk230711.Z.setSection(Chunk981631.oAB.ACCOUNT, null, {
              analyticsLocations: [Chunk100527.Z.USER_SETTINGS_SESSIONS]
            })
          })
        })
      })]
    })]
  })
}

function R(e) {
  switch (null == e ? true : e.toLowerCase().trim()) {
    case null:
    case true:
    case "":
      return {
        text: T.intl.string(T.t.cDHCNT), icon: d.pzj
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