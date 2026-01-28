/** Chunk was on 60449 **/
/** chunk id: 119762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Af: () => f,
  Ay: () => T,
  Ob: () => v,
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
    className: b.h_,
    children: E.intl.string(E.t.zZp618)
  })
}

function v() {
  let {
    currentSession: e
  } = (0, u.r)();
  return null == e ? (0, i.jsx)("div", {
    className: b.Lq,
    children: (0, i.jsx)(o.y$y, {})
  }) : (0, i.jsx)(o.nVY, {
    label: E.intl.string(E.t.LLS19o),
    children: (0, i.jsx)(N, {
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
    label: t.size > 0 ? E.intl.string(E.t.mMEmRO) : E.intl.string(E.t.Vij32M),
    description: E.intl.string(E.t.OTXyaf),
    children: (0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: b.Cn,
      children: (0, i.jsx)(o.Button, {
        variant: "critical-secondary",
        size: "sm",
        text: t.size > 0 ? E.intl.formatToPlainString(E.t["83CPLj"], {
          count: t.size
        }) : E.intl.string(E.t.cLmmeY),
        onClick: () => {
          t.size > 0 ? (0, d.U0)(Array.from(t)) : (0, d.U0)(n.map(e => e.id_hash))
        }
      })
    })
  })
}

function f() {
  let e = (0, p.dk)("OtherSessionsSetting"),
    {
      currentSession: t,
      otherSessions: n
    } = (0, u.r)(),
    l = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
    [r, c] = s.useState(new Set);
  return null == t && 0 === n.length || 0 === n.length && (null == l ? true : l.mfaEnabled) || !(n.length > 0) && (null == l ? true : l.mfaEnabled) ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(o.nVY, {
      label: E.intl.string(E.t.xx1MWc),
      children: [n.map(e => (0, i.jsx)(N, {
        session: e,
        useChecks: r.size > 0,
        checked: r.has(e.id_hash),
        setChecked: t => {
          let n = new Set(r);
          t ? n.add(e.id_hash) : n.delete(e.id_hash), c(n)
        }
      }, e.id_hash)), (null == l ? true : l.mfaEnabled) ? null : (0, i.jsx)(_, {})]
    }), n.length > 0 && (e ? (0, i.jsx)("div", {
      className: b.hI,
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

function T() {
  return s.useEffect(() => ((0, d.GY)(), () => {
    (0, d.ZQ)()
  }), []), (0, i.jsxs)(m.R, {
    header: E.intl.string(E.t["+1h0k/"]),
    children: [(0, i.jsx)(S, {}), (0, i.jsxs)(o.BJc, {
      gap: 24,
      className: b.Mf,
      children: [(0, i.jsx)(v, {}), (0, i.jsx)(f, {})]
    })]
  })
}

function N(e) {
  var t, n, s, l, a;
  let {
    session: c,
    current: g,
    setChecked: h,
    checked: A,
    useChecks: p
  } = e, m = null != (t = null == (n = c.client_info) ? true : n.location) ? t : null == (s = c.client_info) ? true : s.ip, j = null == (l = c.client_info) ? true : l.platform, {
    text: O,
    icon: S
  } = function(e) {
    switch (null == e ? true : e.toLowerCase().trim()) {
      case null:
      case true:
      case "":
        return {
          text: E.intl.string(E.t.cDHCNY), icon: o.kN9
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
  }(null == (a = c.client_info) ? true : a.os), v = g ? null : (0, u.Y)(c.approx_last_used_time), C = [O, j].filter(x.Vq), f = [m, v].filter(x.Vq);
  return (0, i.jsxs)("div", {
    className: r()(b.dZ, {
      [b.gg]: g
    }),
    children: [(0, i.jsxs)("div", {
      className: b.OC,
      children: [(0, i.jsx)("div", {
        className: b.km,
        children: (0, i.jsx)(S, {
          size: "md",
          color: "currentColor"
        })
      }), (0, i.jsxs)("div", {
        className: b.F3,
        children: [(0, i.jsxs)(o.Text, {
          variant: "eyebrow",
          className: b.nT,
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
          className: b.nT,
          children: [(0, i.jsx)("span", {
            children: f[0]
          }), f.length > 1 && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("span", {
              children: "\xb7"
            }), (0, i.jsx)("span", {
              children: f[1]
            })]
          })]
        })]
      }), g ? null : p ? (0, i.jsx)("div", {
        className: b.GR,
        children: (0, i.jsx)(o.JuY, {
          onChange: e => {
            null == h || h(e)
          },
          checked: A
        })
      }) : (0, i.jsx)(o.DUT, {
        className: b.ux,
        onClick: e => {
          e.shiftKey ? null == h || h(true) : (0, d.U0)(c.id_hash)
        },
        "aria-label": E.intl.string(E.t.E4MJNt),
        children: (0, i.jsx)(o.PGe, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), !g && (0, i.jsx)(o.cGx, {
      className: b.O9
    })]
  }, c.id_hash)
}

function _() {
  return (0, i.jsxs)("div", {
    className: r()(b.dZ, b.EC),
    children: [(0, i.jsxs)("div", {
      className: b.OC,
      children: [(0, i.jsx)("div", {
        className: b.km,
        children: (0, i.jsx)(h.A, {
          width: "32",
          height: "32"
        })
      }), (0, i.jsxs)("div", {
        className: b.F3,
        children: [(0, i.jsx)(o.Text, {
          variant: "eyebrow",
          className: b.nT,
          color: "text-muted",
          children: (0, i.jsx)("span", {
            children: E.intl.string(E.t.iUa0sn)
          })
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/medium",
          className: b.nT,
          color: "text-muted",
          children: (0, i.jsx)("span", {
            children: E.intl.format(E.t["044+8i"], {
              onClick: () => (0, j.openUserSettings)(A.X.ACCOUNT_PANEL, {
                section: O.nc_.ACCOUNT,
                analyticsLocations: [c.A.USER_SETTINGS_SESSIONS]
              })
            })
          })
        })]
      })]
    }), (0, i.jsx)("div", {
      className: b.O9
    })]
  })
}