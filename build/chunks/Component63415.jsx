/** Chunk was on 22477 **/
/** chunk id: 63415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => _
}), require("./896048.js"), require("./457529.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353640 = require("./353640.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk885293 = require("./885293.jsx"),
  Chunk10094 = require("./10094.js"),
  Chunk602450 = require("./602450.js"),
  Chunk967370 = require("./967370.js"),
  Chunk411683 = require("./411683.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk252561 = require("./252561.jsx"),
  Chunk459301 = require("./459301.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk788868 = require("./788868.js");
let j = Chunk64700.forwardRef((e, t) => {
  let [n, i] = l.useState(null), [r, c] = l.useState(null), [d, u] = l.useState(false), m = l.useCallback(async () => {
    u(true), c(null), i(null);
    try {
      let e = await s.Bo.get({
        url: "/users/@me/debug/warp/license",
        rejectWithError: true
      });
      i(e.body)
    } catch (l) {
      var e, t;
      let n = (null == l || null == (e = l.body) ? true : e.message) || (null == l ? true : l.message) || "Unknown error occurred",
        a = (null == l ? true : l.status) || (null == l || null == (t = l.body) ? true : t.code);
      c("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n))
    } finally {
      u(false)
    }
  }, []);
  return l.useImperativeHandle(t, () => ({
    refresh: m
  })), (0, a.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    },
    children: [(0, a.jsx)(o.$nd, {
      text: d ? "Loading..." : "Fetch WARP License Info",
      onClick: m,
      disabled: d
    }), null != r && (0, a.jsx)("div", {
      style: {
        padding: "12px",
        backgroundColor: "#ed4245",
        borderRadius: "4px",
        color: "white",
        fontFamily: "monospace",
        fontSize: "12px"
      },
      children: r
    }), null != n && (0, a.jsx)("pre", {
      style: {
        width: "100%",
        minHeight: "200px",
        fontFamily: "monospace",
        fontSize: "12px",
        padding: "12px",
        backgroundColor: "#2f3136",
        color: "#dcddde",
        border: "1px solid #202225",
        borderRadius: "4px",
        margin: 0,
        overflow: "auto",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: JSON.stringify(n, null, 2)
    })]
  })
});
j.displayName = "DebugWarpLicenseInfo";
let y = e => {
    let {
      onSuccess: t
    } = e, [n, i] = l.useState(false), [r, c] = l.useState(0), [d, u] = l.useState(null);
    l.useEffect(() => {
      if (r > 0) {
        let e = setTimeout(() => {
          c(r - 1), 1 === r && t()
        }, 1e3);
        return () => clearTimeout(e)
      }
    }, [r, t]);
    let m = async () => {
      i(true), u(null);
      try {
        await s.Bo.post({
          url: "/users/@me/debug/warp/license/extension-task",
          rejectWithError: true
        }), c(5)
      } catch (l) {
        var e, t;
        let n = (null == l || null == (e = l.body) ? true : e.message) || (null == l ? true : l.message) || "Unknown error occurred",
          a = (null == l ? true : l.status) || (null == l || null == (t = l.body) ? true : t.code);
        u("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n))
      } finally {
        i(false)
      }
    };
    return (0, a.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      },
      children: [(0, a.jsx)(o.$nd, {
        text: n ? "Triggering Task..." : r > 0 ? "Refreshing in ".concat(r, "s...") : "Trigger License Extension Task",
        onClick: m,
        disabled: n || r > 0
      }), null != d && (0, a.jsx)("div", {
        style: {
          padding: "12px",
          backgroundColor: "#ed4245",
          borderRadius: "4px",
          color: "white",
          fontFamily: "monospace",
          fontSize: "12px"
        },
        children: d
      })]
    })
  },
  _ = () => {
    let [e, t] = l.useState(false), [n, s] = l.useState(false), [_, A] = l.useState(false), [C, S] = l.useState(5e3), [O, E] = l.useState(false), N = l.useRef(null), T = (0, r.bG)([g.default], () => g.default.getCurrentUser()), I = (0, h.L)(), [w] = l.useState(() => (0, f.YQ)({
      finishSetup: async () => true,
      perkAvailableToUser: I
    })), {
      installationStatus: k,
      setInstallationStatus: P,
      connectionStatus: R,
      setConnectionStatus: D,
      setConnect: M,
      setDisconnect: L,
      setInstall: U,
      setIsWeb: B,
      setIsSupportedPrivateBrowsingPerkPlatform: G,
      isWeb: F,
      isSupportedPrivateBrowsingPerkPlatform: V,
      setGetWarpInstallationStatus: H,
      perkAvailableToUser: W,
      setPerkAvailableToUser: K
    } = (0, i.P)(w), z = l.useCallback(async () => (D(m.l7.INITIALIZING), t(setTimeout(() => {
      D(m.l7.CONNECTED)
    }, 1e3)), true), [D, t]);
    l.useEffect(() => {
      M(z)
    }, [z, M]);
    let q = l.useCallback(async () => m.Lk.INSTALLING, []);
    l.useEffect(() => {
      K(I)
    }, [I, K]), l.useEffect(() => {
      H(q)
    }, [H, q]);
    let Q = l.useCallback(async () => (clearTimeout(e), D(m.l7.DISCONNECTED), true), [e, D]),
      Y = l.useCallback(() => new Promise((e, t) => {
        P(m.Lk.INSTALLING), s(setTimeout(() => {
          _ ? t(Error("Installation failed")) : e()
        }, C))
      }), [_, C, P, s]);
    l.useEffect(() => {
      F && k !== m.Lk.UNKNOWN && P(m.Lk.UNKNOWN)
    }, [F, P, k]), l.useEffect(() => {
      L(Q)
    }, [Q, L]), l.useEffect(() => {
      U(Y)
    }, [Y, U]), l.useEffect(() => {
      k !== m.Lk.INSTALLING && clearTimeout(n)
    }, [n, k]), l.useEffect(() => {
      if (k !== m.Lk.INSTALLED && R !== m.l7.INITIALIZING) return void D(m.l7.INITIALIZING)
    }, [k, R, D]);
    let {
      enabled: J
    } = p.S.useConfig({
      location: "private_browsing_perk_settings_page"
    });
    return J ? (0, a.jsxs)("div", {
      children: [(0, a.jsx)(o.DZT, {
        variant: "heading-xl/semibold",
        style: {
          marginTop: "16px"
        },
        children: "Private Browsing Perk Components"
      }), (0, a.jsxs)(x.wn, {
        children: [(0, a.jsx)(o.DZT, {
          variant: "heading-lg/semibold",
          children: "Configure Private Browsing Perk State"
        }), (0, a.jsxs)(x.LB, {
          children: [(0, a.jsxs)(x.MG, {
            children: [(0, a.jsx)(o.EYj, {
              variant: "text-md/semibold",
              children: "Is Nitro"
            }), (0, a.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, a.jsx)(o.dOG, {
                onChange: () => {
                  W ? (0, u.O)(null, T) : (0, u.O)(v.$I, T)
                },
                checked: W
              })
            })]
          }), (0, a.jsxs)(x.MG, {
            children: [(0, a.jsx)(o.EYj, {
              variant: "text-md/semibold",
              children: "Is Web"
            }), (0, a.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, a.jsx)(o.dOG, {
                onChange: () => B(!F),
                checked: F
              })
            })]
          }), (0, a.jsxs)(x.MG, {
            children: [(0, a.jsx)(o.EYj, {
              variant: "text-md/semibold",
              children: "Is Supported Platform"
            }), (0, a.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, a.jsx)(o.dOG, {
                onChange: () => G(!V),
                checked: V
              })
            })]
          }), (0, a.jsx)(x.MG, {
            children: (0, a.jsx)(c.l6P, {
              label: "Installation Status",
              onSelectionChange: P,
              value: k,
              disabled: F,
              options: [{
                id: "unknown",
                label: "Unknown",
                value: m.Lk.UNKNOWN
              }, {
                id: "notInstalled",
                label: "Not Installed",
                value: m.Lk.NOT_INSTALLED
              }, {
                id: "installed",
                label: "Installed",
                value: m.Lk.INSTALLED
              }, {
                id: "installing",
                label: "Installing",
                value: m.Lk.INSTALLING
              }, {
                id: "waitingForTerms",
                label: "Accept Terms",
                value: m.Lk.WAITING_FOR_TERMS
              }, {
                id: "existingInstallation",
                label: "Existing Installation",
                value: m.Lk.EXISTING_INSTALLATION
              }, {
                id: "zeroTrust",
                label: "Unsupported (ZeroTrust)",
                value: m.Lk.ZERO_TRUST
              }, {
                id: "installingTimeout",
                label: "Installing Timeout",
                value: m.Lk.INSTALLING_TIMEOUT
              }, {
                id: "error",
                label: "Error",
                value: m.Lk.ERROR
              }],
              selectionMode: "single",
              fullWidth: true
            })
          }), k === m.Lk.INSTALLED && (0, a.jsx)(x.MG, {
            children: (0, a.jsx)(c.l6P, {
              label: "Connection Status",
              onSelectionChange: D,
              value: R,
              options: [{
                id: "initializing",
                label: "Initializing",
                value: m.l7.INITIALIZING
              }, {
                id: "connected",
                label: "Connected",
                value: m.l7.CONNECTED
              }, {
                id: "disconnected",
                label: "Disconnected",
                value: m.l7.DISCONNECTED
              }, {
                id: "error",
                label: "Error",
                value: m.l7.ERROR
              }],
              selectionMode: "single",
              fullWidth: true
            })
          })]
        }), k === m.Lk.NOT_INSTALLED && (0, a.jsxs)(x.LB, {
          children: [(0, a.jsxs)(x.MG, {
            children: [(0, a.jsx)(o.EYj, {
              variant: "text-md/semibold",
              children: "Install with error"
            }), (0, a.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, a.jsx)(o.dOG, {
                onChange: () => A(!_),
                checked: _
              })
            })]
          }), (0, a.jsx)(x.MG, {
            children: (0, a.jsx)(c.l6P, {
              label: "Install time",
              onSelectionChange: S,
              value: C,
              options: [{
                id: "1second",
                label: "1 second",
                value: 1e3
              }, {
                id: "5seconds",
                label: "5 seconds",
                value: 5e3
              }, {
                id: "10seconds",
                label: "10 seconds",
                value: 1e4
              }, {
                id: "1minute",
                label: "1 minute",
                value: 6e4
              }, {
                id: "5minutes",
                label: "5 minutes",
                value: 3e5
              }, {
                id: "10minutes",
                label: "10 minutes",
                value: 6e5
              }],
              selectionMode: "single",
              fullWidth: true
            })
          })]
        })]
      }), (0, a.jsxs)(f.y0.Provider, {
        value: w,
        children: [(0, a.jsxs)(x.wn, {
          children: [(0, a.jsx)(o.DZT, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk Settings Component"
          }), (0, a.jsx)(b.m, {})]
        }), (0, a.jsxs)(x.wn, {
          children: [(0, a.jsx)(o.DZT, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk Exit Modal Upsell"
          }), (0, a.jsx)(o.$nd, {
            text: "Show exit modal",
            onClick: () => {
              E(true)
            }
          }), O && (0, a.jsx)(d.default, {
            url: "https://www.discord.com",
            trustUrl: () => false,
            onCancel: () => E(false),
            isProtocol: false,
            onConfirm: () => {},
            onClose: async () => {
              E(false)
            },
            transitionState: c.ip4.ENTERED
          })]
        }), (0, a.jsxs)(x.wn, {
          children: [(0, a.jsx)(o.DZT, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk License Extension Task"
          }), (0, a.jsx)(y, {
            onSuccess: () => {
              var e;
              null == (e = N.current) || e.refresh()
            }
          })]
        }), (0, a.jsxs)(x.wn, {
          children: [(0, a.jsx)(o.DZT, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk WARP License Info"
          }), (0, a.jsx)(j, {
            ref: N
          })]
        })]
      })]
    }) : (0, a.jsx)("div", {
      children: (0, a.jsx)(o.DZT, {
        variant: "heading-xl/semibold",
        style: {
          marginTop: "16px"
        },
        children: "Private Browsing Perk Experiment Not Enabled"
      })
    })
  }