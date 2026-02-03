/** Chunk was on 44669 **/
/** chunk id: 119762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Af: () => E,
  Ay: () => C,
  Ob: () => _,
  jH: () => x
}), require("./228524.js"), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function x() {
  return (0, r.jsx)(o.Text, {
    variant: "text-sm/normal",
    className: j.h_,
    children: O.intl.string(O.t.zZp618)
  })
}

function _() {
  let {
    currentSession: e
  } = (0, d.r)();
  return null == e ? (0, r.jsx)("div", {
    className: j.Lq,
    children: (0, r.jsx)(o.y$y, {})
  }) : (0, r.jsx)(o.nVY, {
    label: O.intl.string(O.t.LLS19o),
    children: (0, r.jsx)(S, {
      session: e,
      current: true
    })
  })
}

function v(e) {
  let {
    checked: t,
    otherSessions: n
  } = e;
  return (0, r.jsx)(o.D0$, {
    label: t.size > 0 ? O.intl.string(O.t.mMEmRO) : O.intl.string(O.t.Vij32M),
    description: O.intl.string(O.t.OTXyaf),
    children: (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: j.Cn,
      children: (0, r.jsx)(o.Button, {
        variant: "critical-secondary",
        size: "sm",
        text: t.size > 0 ? O.intl.formatToPlainString(O.t["83CPLj"], {
          count: t.size
        }) : O.intl.string(O.t.cLmmeY),
        onClick: () => {
          t.size > 0 ? (0, u.U0)(Array.from(t)) : (0, u.U0)(n.map(e => e.id_hash))
        }
      })
    })
  })
}

function E() {
  let e = (0, m.dk)("OtherSessionsSetting"),
    {
      currentSession: t,
      otherSessions: n
    } = (0, d.r)(),
    i = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
    [s, c] = l.useState(new Set);
  return null == t && 0 === n.length || 0 === n.length && (null == i ? true : i.mfaEnabled) || !(n.length > 0) && (null == i ? true : i.mfaEnabled) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.nVY, {
      label: O.intl.string(O.t.xx1MWc),
      children: [n.map(e => (0, r.jsx)(S, {
        session: e,
        useChecks: s.size > 0,
        checked: s.has(e.id_hash),
        setChecked: t => {
          let n = new Set(s);
          t ? n.add(e.id_hash) : n.delete(e.id_hash), c(n)
        }
      }, e.id_hash)), (null == i ? true : i.mfaEnabled) ? null : (0, r.jsx)(I, {})]
    }), n.length > 0 && (e ? (0, r.jsx)("div", {
      className: j.hI,
      children: (0, r.jsx)(v, {
        checked: s,
        otherSessions: n
      })
    }) : (0, r.jsx)(v, {
      checked: s,
      otherSessions: n
    }))]
  })
}

function C() {
  return l.useEffect(() => ((0, u.GY)(), () => {
    (0, u.ZQ)()
  }), []), (0, r.jsxs)(b.R, {
    header: O.intl.string(O.t["+1h0k/"]),
    children: [(0, r.jsx)(x, {}), (0, r.jsxs)(o.BJc, {
      gap: 24,
      className: j.Mf,
      children: [(0, r.jsx)(_, {}), (0, r.jsx)(E, {})]
    })]
  })
}

function S(e) {
  var t, n, l, i, a;
  let {
    session: c,
    current: p,
    setChecked: h,
    checked: f,
    useChecks: m
  } = e, b = null != (t = null == (n = c.client_info) ? true : n.location) ? t : null == (l = c.client_info) ? true : l.ip, A = null == (i = c.client_info) ? true : i.platform, {
    text: y,
    icon: x
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
  }(null == (a = c.client_info) ? true : a.os), _ = p ? null : (0, d.Y)(c.approx_last_used_time), v = [y, A].filter(g.Vq), E = [b, _].filter(g.Vq);
  return (0, r.jsxs)("div", {
    className: s()(j.dZ, {
      [j.gg]: p
    }),
    children: [(0, r.jsxs)("div", {
      className: j.OC,
      children: [(0, r.jsx)("div", {
        className: j.km,
        children: (0, r.jsx)(x, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: j.F3,
        children: [(0, r.jsxs)(o.Text, {
          variant: "eyebrow",
          className: j.nT,
          children: [(0, r.jsx)("span", {
            children: v[0]
          }), v.length > 1 && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("span", {
              children: "\xb7"
            }), (0, r.jsx)("span", {
              children: v[1]
            })]
          })]
        }), (0, r.jsxs)(o.Text, {
          variant: "text-sm/medium",
          className: j.nT,
          children: [(0, r.jsx)("span", {
            children: E[0]
          }), E.length > 1 && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("span", {
              children: "\xb7"
            }), (0, r.jsx)("span", {
              children: E[1]
            })]
          })]
        })]
      }), p ? null : m ? (0, r.jsx)("div", {
        className: j.GR,
        children: (0, r.jsx)(o.JuY, {
          onChange: e => {
            null == h || h(e)
          },
          checked: f
        })
      }) : (0, r.jsx)(o.DUT, {
        className: j.ux,
        onClick: e => {
          e.shiftKey ? null == h || h(true) : (0, u.U0)(c.id_hash)
        },
        "aria-label": O.intl.string(O.t.E4MJNt),
        children: (0, r.jsx)(o.PGe, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), !p && (0, r.jsx)(o.cGx, {
      className: j.O9
    })]
  }, c.id_hash)
}

function I() {
  return (0, r.jsxs)("div", {
    className: s()(j.dZ, j.EC),
    children: [(0, r.jsxs)("div", {
      className: j.OC,
      children: [(0, r.jsx)("div", {
        className: j.km,
        children: (0, r.jsx)(h.A, {
          width: "32",
          height: "32"
        })
      }), (0, r.jsxs)("div", {
        className: j.F3,
        children: [(0, r.jsx)(o.Text, {
          variant: "eyebrow",
          className: j.nT,
          color: "text-muted",
          children: (0, r.jsx)("span", {
            children: O.intl.string(O.t.iUa0sn)
          })
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          className: j.nT,
          color: "text-muted",
          children: (0, r.jsx)("span", {
            children: O.intl.format(O.t["044+8i"], {
              onClick: () => (0, A.openUserSettings)(f.X.ACCOUNT_PANEL, {
                section: y.nc_.ACCOUNT,
                analyticsLocations: [c.A.USER_SETTINGS_SESSIONS]
              })
            })
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: j.O9
    })]
  })
}