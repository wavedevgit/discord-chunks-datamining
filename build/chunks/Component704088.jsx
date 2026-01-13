/** Chunk was on 22979 **/
/** chunk id: 704088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => S
}), require("./388685.js"), require("./49124.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk663042 = require("./663042.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk720553 = require("./720553.jsx"),
  Chunk535664 = require("./535664.js"),
  Chunk5900 = require("./5900.js"),
  Chunk299886 = require("./299886.js"),
  Chunk848984 = require("./848984.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk261538 = require("./261538.jsx"),
  Chunk868802 = require("./868802.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk246992 = require("./246992.js"),
  Chunk474936 = require("./474936.js");
let C = Chunk473749.forwardRef((e, t) => {
  let [n, i] = r.useState(null), [l, o] = r.useState(null), [d, u] = r.useState(false), m = r.useCallback(async () => {
    u(true), o(null), i(null);
    try {
      let e = await s.tn.get({
        url: "/users/@me/debug/warp/license",
        rejectWithError: true
      });
      i(e.body)
    } catch (r) {
      var e, t;
      let n = (null == r || null == (e = r.body) ? true : e.message) || (null == r ? true : r.message) || "Unknown error occurred",
        a = (null == r ? true : r.status) || (null == r || null == (t = r.body) ? true : t.code);
      o("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n))
    } finally {
      u(false)
    }
  }, []);
  return r.useImperativeHandle(t, () => ({
    refresh: m
  })), (0, a.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    },
    children: [(0, a.jsx)(c.zxk, {
      text: d ? "Loading..." : "Fetch WARP License Info",
      onClick: m,
      disabled: d
    }), null != l && (0, a.jsx)("div", {
      style: {
        padding: "12px",
        backgroundColor: "#ed4245",
        borderRadius: "4px",
        color: "white",
        fontFamily: "monospace",
        fontSize: "12px"
      },
      children: l
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
C.displayName = "DebugWarpLicenseInfo";
let _ = e => {
    let {
      onSuccess: t
    } = e, [n, i] = r.useState(false), [l, o] = r.useState(0), [d, u] = r.useState(null);
    r.useEffect(() => {
      if (l > 0) {
        let e = setTimeout(() => {
          o(l - 1), 1 === l && t()
        }, 1e3);
        return () => clearTimeout(e)
      }
    }, [l, t]);
    let m = async () => {
      i(true), u(null);
      try {
        await s.tn.post({
          url: "/users/@me/debug/warp/license/extension-task",
          rejectWithError: true
        }), o(5)
      } catch (r) {
        var e, t;
        let n = (null == r || null == (e = r.body) ? true : e.message) || (null == r ? true : r.message) || "Unknown error occurred",
          a = (null == r ? true : r.status) || (null == r || null == (t = r.body) ? true : t.code);
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
      children: [(0, a.jsx)(c.zxk, {
        text: n ? "Triggering Task..." : l > 0 ? "Refreshing in ".concat(l, "s...") : "Trigger License Extension Task",
        onClick: m,
        disabled: n || l > 0
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
  S = () => {
    let [e, t] = r.useState(false), [n, s] = r.useState(false), [S, E] = r.useState(false), [T, O] = r.useState(5e3), [N, P] = r.useState(false), w = r.useRef(null), I = (0, l.e7)([v.default], () => v.default.getCurrentUser()), k = (0, f.u)(), [R] = r.useState(() => (0, x.o8)({
      finishSetup: async () => true,
      perkAvailableToUser: k
    })), {
      installationStatus: A,
      setInstallationStatus: Z,
      connectionStatus: D,
      setConnectionStatus: L,
      setConnect: M,
      setDisconnect: U,
      setInstall: B,
      setIsWeb: F,
      setIsSupportedPrivateBrowsingPerkPlatform: G,
      isWeb: V,
      isSupportedPrivateBrowsingPerkPlatform: z,
      setGetWarpInstallationStatus: H,
      perkAvailableToUser: W,
      setPerkAvailableToUser: K
    } = (0, i.o)(R), q = r.useCallback(async () => (L(p.Ij.INITIALIZING), t(setTimeout(() => {
      L(p.Ij.CONNECTED)
    }, 1e3)), true), [L, t]);
    r.useEffect(() => {
      M(q)
    }, [q, M]);
    let Y = r.useCallback(async () => p._n.INSTALLING, []);
    r.useEffect(() => {
      K(k)
    }, [k, K]), r.useEffect(() => {
      H(Y)
    }, [H, Y]);
    let Q = r.useCallback(async () => (clearTimeout(e), L(p.Ij.DISCONNECTED), true), [e, L]),
      X = r.useCallback(() => new Promise((e, t) => {
        Z(p._n.INSTALLING), s(setTimeout(() => {
          if (S) return void t(Error("Installation failed"));
          e()
        }, T))
      }), [S, T, Z, s]);
    r.useEffect(() => {
      V && A !== p._n.UNKNOWN && Z(p._n.UNKNOWN)
    }, [V, Z, A]), r.useEffect(() => {
      U(Q)
    }, [Q, U]), r.useEffect(() => {
      B(X)
    }, [X, B]), r.useEffect(() => {
      A !== p._n.INSTALLING && clearTimeout(n)
    }, [n, A]), r.useEffect(() => {
      if (A !== p._n.INSTALLED && D !== p.Ij.INITIALIZING) return void L(p.Ij.INITIALIZING)
    }, [A, D, L]);
    let {
      enabled: J
    } = h.H.useConfig({
      location: "private_browsing_perk_settings_page"
    });
    return J ? (0, a.jsxs)("div", {
      children: [(0, a.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        style: {
          marginTop: "16px"
        },
        children: "Private Browsing Perk Components"
      }), (0, a.jsxs)(b.$0, {
        children: [(0, a.jsx)(c.X6q, {
          variant: "heading-lg/semibold",
          children: "Configure Private Browsing Perk State"
        }), (0, a.jsxs)(b.pg, {
          children: [(0, a.jsxs)(b.BZ, {
            children: [(0, a.jsx)(c.xvT, {
              variant: "text-md/semibold",
              children: "Is Nitro"
            }), (0, a.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, a.jsx)(c.rsf, {
                onChange: () => {
                  W ? (0, m.C)(null, I) : (0, m.C)(y.F_, I)
                },
                checked: W
              })
            })]
          }), (0, a.jsxs)(b.BZ, {
            children: [(0, a.jsx)(c.xvT, {
              variant: "text-md/semibold",
              children: "Is Web"
            }), (0, a.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, a.jsx)(c.rsf, {
                onChange: () => F(!V),
                checked: V
              })
            })]
          }), (0, a.jsxs)(b.BZ, {
            children: [(0, a.jsx)(c.xvT, {
              variant: "text-md/semibold",
              children: "Is Supported Platform"
            }), (0, a.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, a.jsx)(c.rsf, {
                onChange: () => G(!z),
                checked: z
              })
            })]
          }), (0, a.jsxs)(b.BZ, {
            children: [(0, a.jsx)(c.xvT, {
              variant: "text-md/semibold",
              children: "Installation Status"
            }), (0, a.jsx)(o.B6, {
              select: e => Z(e),
              isSelected: e => e === A,
              serialize: e => "".concat(e),
              disabled: V,
              options: [{
                label: "Unknown",
                value: p._n.UNKNOWN
              }, {
                label: "Not Installed",
                value: p._n.NOT_INSTALLED
              }, {
                label: "Installed",
                value: p._n.INSTALLED
              }, {
                label: "Installing",
                value: p._n.INSTALLING
              }, {
                label: "Accept Terms",
                value: p._n.WAITING_FOR_TERMS
              }, {
                label: "Existing Installation",
                value: p._n.EXISTING_INSTALLATION
              }, {
                label: "Unsupported (ZeroTrust)",
                value: p._n.ZERO_TRUST
              }, {
                label: "Installing Timeout",
                value: p._n.INSTALLING_TIMEOUT
              }, {
                label: "Error",
                value: p._n.ERROR
              }],
              popoutLayerContext: j.O$
            })]
          }), A === p._n.INSTALLED && (0, a.jsxs)(b.BZ, {
            children: [(0, a.jsx)(c.xvT, {
              variant: "text-md/semibold",
              children: "Connection Status"
            }), (0, a.jsx)(o.B6, {
              select: e => L(e),
              isSelected: e => e === D,
              serialize: e => "".concat(e),
              options: [{
                label: "Initializing",
                value: p.Ij.INITIALIZING
              }, {
                label: "Connected",
                value: p.Ij.CONNECTED
              }, {
                label: "Disconnected",
                value: p.Ij.DISCONNECTED
              }, {
                label: "Error",
                value: p.Ij.ERROR
              }],
              popoutLayerContext: j.O$
            })]
          })]
        }), A === p._n.NOT_INSTALLED && (0, a.jsxs)(b.pg, {
          children: [(0, a.jsxs)(b.BZ, {
            children: [(0, a.jsx)(c.xvT, {
              variant: "text-md/semibold",
              children: "Install with error"
            }), (0, a.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, a.jsx)(c.rsf, {
                onChange: () => E(!S),
                checked: S
              })
            })]
          }), (0, a.jsxs)(b.BZ, {
            children: [(0, a.jsx)(c.xvT, {
              variant: "text-md/semibold",
              children: "Install time"
            }), (0, a.jsx)(o.B6, {
              select: e => O(e),
              isSelected: e => e === T,
              serialize: e => "".concat(e),
              options: [{
                label: "1 second",
                value: 1e3
              }, {
                label: "5 seconds",
                value: 5e3
              }, {
                label: "10 seconds",
                value: 1e4
              }, {
                label: "1 minute",
                value: 6e4
              }, {
                label: "5 minutes",
                value: 3e5
              }, {
                label: "10 minutes",
                value: 6e5
              }],
              popoutLayerContext: j.O$
            })]
          })]
        })]
      }), (0, a.jsxs)(x.xz.Provider, {
        value: R,
        children: [(0, a.jsxs)(b.$0, {
          children: [(0, a.jsx)(c.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk Settings Component"
          }), (0, a.jsx)(g.M, {})]
        }), (0, a.jsxs)(b.$0, {
          children: [(0, a.jsx)(c.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk Exit Modal Upsell"
          }), (0, a.jsx)(c.zxk, {
            text: "Show exit modal",
            onClick: () => {
              P(true)
            }
          }), N && (0, a.jsx)(u.default, {
            url: "https://www.discord.com",
            trustUrl: () => false,
            onCancel: () => P(false),
            isProtocol: false,
            onConfirm: () => {},
            onClose: async () => {
              P(false)
            },
            transitionState: d.Dvm.ENTERED
          })]
        }), (0, a.jsxs)(b.$0, {
          children: [(0, a.jsx)(c.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk License Extension Task"
          }), (0, a.jsx)(_, {
            onSuccess: () => {
              var e;
              null == (e = w.current) || e.refresh()
            }
          })]
        }), (0, a.jsxs)(b.$0, {
          children: [(0, a.jsx)(c.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk WARP License Info"
          }), (0, a.jsx)(C, {
            ref: w
          })]
        })]
      })]
    }) : (0, a.jsx)("div", {
      children: (0, a.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        style: {
          marginTop: "16px"
        },
        children: "Private Browsing Perk Experiment Not Enabled"
      })
    })
  }