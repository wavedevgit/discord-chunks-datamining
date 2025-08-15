/** Chunk was on 30202 **/
/** chunk id: 36192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
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

function S() {
  let e, {
      currentSession: t,
      otherSessions: n
    } = (0, Chunk136097.h)(),
    s = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    a = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [u, p] = Chunk73800.useState(false);
  Chunk73800.useEffect(() => {
    (0, Chunk266454.Q3)(Chunk704215.z.AUTH_SESSIONS_NEW, {
      dismissAction: Chunk921944.L.AUTO
    }), (0, Chunk43015.fw)();
    let e = setTimeout(() => Chunk100527(true), 500);
    return () => {
      clearTimeout(module), (0, Chunk43015.$Z)()
    }
  }, []);
  let _ = () => {
      Chunk544891.tn.post({
        url: Chunk981631.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
        rejectWithError: true
      })
    },
    [j, S] = Chunk73800.useState(new Set);
  return Chunk120356 ? (0, Chunk255367.jsx)(Chunk497321.Z, {}) : (e = null == exports && 0 === require.length ? Chunk230711 ? (0, Chunk255367.jsx)("div", {
    className: Chunk844642.loading,
    children: (0, Chunk255367.jsx)(Chunk481060.$jN, {})
  }) : null : (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk844642.sessions,
      children: [(0, Chunk255367.jsx)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H5,
        title: Chunk388032.intl.string(Chunk388032.t.LLS19v),
        titleClassName: Chunk844642.groupTitle,
        children: null != exports ? (0, Chunk255367.jsx)(T, {
          session: exports,
          current: true
        }) : null
      }), !(require.length > 0) && (null == a ? true : a.mfaEnabled) ? null : (0, Chunk255367.jsxs)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H5,
        title: Chunk388032.intl.string(Chunk388032.t.xx1MWV),
        titleClassName: Chunk844642.groupTitle,
        className: Chunk844642.otherSessions,
        children: [require.map(e => (0, i.jsx)(T, {
          session: e,
          useChecks: j.size > 0,
          checked: j.has(e.id_hash),
          setChecked: t => {
            let n = new Set(j);
            t ? n.add(e.id_hash) : n.delete(e.id_hash), S(n)
          }
        }, e.id_hash)), (null == a ? true : a.mfaEnabled) ? null : (0, Chunk255367.jsx)(N, {})]
      })]
    }), require.length > 0 ? (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H5,
      title: Chunk823379.size > 0 ? Chunk388032.intl.string(Chunk388032.t.mMEmRE) : Chunk388032.intl.string(Chunk388032.t.Vij32N),
      children: [(0, Chunk255367.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        children: Chunk388032.intl.string(Chunk388032.t.OTXyaW)
      }), (0, Chunk255367.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk844642.logOutAllButton,
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "critical-secondary",
          size: "sm",
          text: Chunk823379.size > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["83CPLi"], {
            count: Chunk823379.size
          }) : Chunk388032.intl.string(Chunk388032.t.cLmmeX),
          onClick: () => {
            Chunk823379.size > 0 ? (0, Chunk43015.L$)(Array.from(Chunk823379)) : (0, Chunk43015.L$)(require.map(e => e.id_hash))
          }
        })
      })]
    }) : null]
  }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
    tag: Chunk481060.RB0.H1,
    title: Chunk388032.intl.string(Chunk388032.t["+1h0k5"]),
    children: [(0, Chunk255367.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      className: Chunk844642.description,
      children: Chunk388032.intl.string(Chunk388032.t.zZp619)
    }), (null == a ? true : a.isStaff()) ? (0, Chunk255367.jsxs)("div", {
      className: Chunk844642.tools,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        className: Chunk844642.toolsTitle,
        variant: "text-md/bold",
        children: "DEV TOOLS"
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        className: Chunk844642.toolsTitle,
        variant: "text-sm/normal",
        color: "text-danger",
        children: "These tools are only shown to staff users."
      }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
        text: "Triggers mobile and email suspicious session notifications for the current user",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, i.jsx)(d.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Trigger Suspicious Sessions Notification",
            onClick: _,
            onMouseEnter: t,
            onMouseLeave: n
          })
        }
      })]
    }) : null, module]
  }))
}

function T(e) {
  var t, n, r, s, l;
  let {
    session: o,
    current: c,
    setChecked: u,
    checked: m,
    useChecks: p
  } = e, f = null != (l = null == (t = o.client_info) ? true : t.location) ? l : null == (n = o.client_info) ? true : n.ip, b = null == (r = o.client_info) ? true : r.platform, {
    text: x,
    icon: _
  } = function(e) {
    switch (null == e ? true : e.toLowerCase().trim()) {
      case null:
      case true:
      case "":
        return {
          text: O.intl.string(O.t.cDHCNT), icon: d.pzj
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
  }(null == (s = o.client_info) ? true : s.os), E = c ? null : (0, h.p)(o.approx_last_used_time), C = [x, b].filter(j.lm), S = [f, E].filter(j.lm);
  return (0, i.jsxs)("div", {
    className: a()(v.session, c ? v.currentSession : null),
    children: [(0, i.jsx)("div", {
      className: v.sessionIcon,
      children: (0, i.jsx)(_, {
        size: "md",
        color: "currentColor"
      })
    }), (0, i.jsxs)("div", {
      className: v.sessionInfo,
      children: [(0, i.jsxs)(d.Text, {
        variant: "eyebrow",
        className: v.sessionInfoRow,
        children: [(0, i.jsx)("span", {
          children: C[0]
        }), C.length > 1 && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("span", {
            children: "\xb7"
          }), (0, i.jsx)("span", {
            children: C[1]
          })]
        })]
      }), (0, i.jsxs)(d.Text, {
        variant: "text-sm/medium",
        className: v.sessionInfoRow,
        children: [(0, i.jsx)("span", {
          children: S[0]
        }), S.length > 1 && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("span", {
            children: "\xb7"
          }), (0, i.jsx)("span", {
            children: S[1]
          })]
        })]
      })]
    }), c ? null : p ? (0, i.jsx)("div", {
      className: v.sessionCheckbox,
      children: (0, i.jsx)(d.XZJ, {
        onChange: (e, t) => {
          null == u || u(t)
        },
        value: m
      })
    }) : (0, i.jsx)(d.P3F, {
      className: v.sessionMoreButton,
      onClick: e => {
        e.shiftKey ? null == u || u(true) : (0, g.L$)(o.id_hash)
      },
      "aria-label": O.intl.string(O.t.E4MJNj),
      children: (0, i.jsx)(d.Dio, {
        size: "md",
        color: "currentColor"
      })
    })]
  }, o.id_hash)
}

function N() {
  return (0, Chunk255367.jsxs)("div", {
    className: a()(Chunk844642.session, Chunk844642.legacySession),
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk844642.sessionIcon,
      children: (0, Chunk255367.jsx)(Chunk460562.Z, {
        width: "32",
        height: "32"
      })
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk844642.sessionInfo,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk844642.sessionInfoRow,
        color: "text-muted",
        children: (0, Chunk255367.jsx)("span", {
          children: Chunk388032.intl.string(Chunk388032.t.iUa0sr)
        })
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        className: Chunk844642.sessionInfoRow,
        color: "text-muted",
        children: (0, Chunk255367.jsx)("span", {
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