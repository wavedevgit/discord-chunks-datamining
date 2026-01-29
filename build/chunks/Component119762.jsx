/** Chunk was on 32502 **/
/** chunk id: 119762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Af: () => v,
  Ay: () => y,
  Ob: () => f,
  jH: () => S
}), require("./228524.js"), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk200921 = require("./200921.js"),
  Chunk754333 = require("./754333.js"),
  Chunk287809 = require("./287809.js"),
  Chunk791606 = require("./791606.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk740625 = require("./740625.jsx"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928344 = require("./928344.js");

function S() {
  return (0, i.jsx)(o.Text, {
    variant: "text-sm/normal",
    className: E.h_,
    children: O.intl.string(O.t.zZp618)
  })
}

function f() {
  let {
    currentSession: e
  } = (0, u.r)();
  return null == e ? (0, i.jsx)("div", {
    className: E.Lq,
    children: (0, i.jsx)(o.y$y, {})
  }) : (0, i.jsx)(o.nVY, {
    label: O.intl.string(O.t.LLS19o),
    children: (0, i.jsx)(T, {
      session: e,
      current: true
    })
  })
}

function C(e) {
  let {
    checked: t,
    otherSessions: n
  } = e;
  return (0, i.jsx)(o.D0$, {
    label: t.size > 0 ? O.intl.string(O.t.mMEmRO) : O.intl.string(O.t.Vij32M),
    description: O.intl.string(O.t.OTXyaf),
    children: (0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: E.Cn,
      children: (0, i.jsx)(o.Button, {
        variant: "critical-secondary",
        size: "sm",
        text: t.size > 0 ? O.intl.formatToPlainString(O.t["83CPLj"], {
          count: t.size
        }) : O.intl.string(O.t.cLmmeY),
        onClick: () => {
          t.size > 0 ? (0, d.U0)(Array.from(t)) : (0, d.U0)(n.map(e => e.id_hash))
        }
      })
    })
  })
}

function v() {
  let e = (0, m.dk)("OtherSessionsSetting"),
    {
      currentSession: t,
      otherSessions: n
    } = (0, u.r)(),
    s = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
    [r, c] = l.useState(new Set);
  return null == t && 0 === n.length || 0 === n.length && (null == s ? true : s.mfaEnabled) || !(n.length > 0) && (null == s ? true : s.mfaEnabled) ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(o.nVY, {
      label: O.intl.string(O.t.xx1MWc),
      children: [n.map(e => (0, i.jsx)(T, {
        session: e,
        useChecks: r.size > 0,
        checked: r.has(e.id_hash),
        setChecked: t => {
          let n = new Set(r);
          t ? n.add(e.id_hash) : n.delete(e.id_hash), c(n)
        }
      }, e.id_hash)), (null == s ? true : s.mfaEnabled) ? null : (0, i.jsx)(_, {})]
    }), n.length > 0 && (e ? (0, i.jsx)("div", {
      className: E.hI,
      children: (0, i.jsx)(C, {
        checked: r,
        otherSessions: n
      })
    }) : (0, i.jsx)(C, {
      checked: r,
      otherSessions: n
    }))]
  })
}

function y() {
  return l.useEffect(() => ((0, d.GY)(), () => {
    (0, d.ZQ)()
  }), []), (0, i.jsxs)(A.R, {
    header: O.intl.string(O.t["+1h0k/"]),
    children: [(0, i.jsx)(S, {}), (0, i.jsxs)(o.BJc, {
      gap: 24,
      className: E.Mf,
      children: [(0, i.jsx)(f, {}), (0, i.jsx)(v, {})]
    })]
  })
}

function T(e) {
  var t, n, l, s, a;
  let {
    session: c,
    current: h,
    setChecked: g,
    checked: p,
    useChecks: m
  } = e, A = null != (t = null == (n = c.client_info) ? true : n.location) ? t : null == (l = c.client_info) ? true : l.ip, b = null == (s = c.client_info) ? true : s.platform, {
    text: j,
    icon: S
  } = function(e) {
    switch (null == e ? true : e.toLowerCase().trim()) {
      case null:
      case true:
      case "":
        return {
          text: O.intl.string(O.t.cDHCNY), icon: o.kN9
        };
      case "ios":
      case "android":
        return {
          text: e, icon: o.u6o
        };
      case "horizon os":
        return {
          text: e, icon: o.G47
        };
      default:
        return {
          text: e, icon: o.kN9
        }
    }
  }(null == (a = c.client_info) ? true : a.os), f = h ? null : (0, u.Y)(c.approx_last_used_time), C = [j, b].filter(x.Vq), v = [A, f].filter(x.Vq);
  return (0, i.jsxs)("div", {
    className: r()(E.dZ, {
      [E.gg]: h
    }),
    children: [(0, i.jsxs)("div", {
      className: E.OC,
      children: [(0, i.jsx)("div", {
        className: E.km,
        children: (0, i.jsx)(S, {
          size: "md",
          color: "currentColor"
        })
      }), (0, i.jsxs)("div", {
        className: E.F3,
        children: [(0, i.jsxs)(o.Text, {
          variant: "eyebrow",
          className: E.nT,
          children: [(0, i.jsx)("span", {
            children: C[0]
          }), C.length > 1 && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("span", {
              children: "\xb7"
            }), (0, i.jsx)("span", {
              children: C[1]
            })]
          })]
        }), (0, i.jsxs)(o.Text, {
          variant: "text-sm/medium",
          className: E.nT,
          children: [(0, i.jsx)("span", {
            children: v[0]
          }), v.length > 1 && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("span", {
              children: "\xb7"
            }), (0, i.jsx)("span", {
              children: v[1]
            })]
          })]
        })]
      }), h ? null : m ? (0, i.jsx)("div", {
        className: E.GR,
        children: (0, i.jsx)(o.JuY, {
          onChange: e => {
            null == g || g(e)
          },
          checked: p
        })
      }) : (0, i.jsx)(o.DUT, {
        className: E.ux,
        onClick: e => {
          e.shiftKey ? null == g || g(true) : (0, d.U0)(c.id_hash)
        },
        "aria-label": O.intl.string(O.t.E4MJNt),
        children: (0, i.jsx)(o.PGe, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), !h && (0, i.jsx)(o.cGx, {
      className: E.O9
    })]
  }, c.id_hash)
}

function _() {
  return (0, i.jsxs)("div", {
    className: r()(E.dZ, E.EC),
    children: [(0, i.jsxs)("div", {
      className: E.OC,
      children: [(0, i.jsx)("div", {
        className: E.km,
        children: (0, i.jsx)(g.A, {
          width: "32",
          height: "32"
        })
      }), (0, i.jsxs)("div", {
        className: E.F3,
        children: [(0, i.jsx)(o.Text, {
          variant: "eyebrow",
          className: E.nT,
          color: "text-muted",
          children: (0, i.jsx)("span", {
            children: O.intl.string(O.t.iUa0sn)
          })
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/medium",
          className: E.nT,
          color: "text-muted",
          children: (0, i.jsx)("span", {
            children: O.intl.format(O.t["044+8i"], {
              onClick: () => (0, b.openUserSettings)(p.X.ACCOUNT_PANEL, {
                section: j.nc_.ACCOUNT,
                analyticsLocations: [c.A.USER_SETTINGS_SESSIONS]
              })
            })
          })
        })]
      })]
    }), (0, i.jsx)("div", {
      className: E.O9
    })]
  })
}