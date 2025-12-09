/** Chunk was on 75393 **/
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
let y = Chunk473749.forwardRef((e, t) => {
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
y.displayName = "DebugWarpLicenseInfo";
let C = e => {
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
    let [e, t] = Chunk473749.useState(false), [n, s] = Chunk473749.useState(false), [S, E] = Chunk473749.useState(false), [O, T] = Chunk473749.useState(5e3), [N, P] = Chunk473749.useState(false), w = Chunk473749.useRef(null), I = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), k = (0, Chunk848984.u)(), [R] = Chunk473749.useState(() => (0, Chunk773275.o8)({
      finishSetup: async () => true,
      perkAvailableToUser: k
    })), {
      installationStatus: A,
      setInstallationStatus: D,
      connectionStatus: Z,
      setConnectionStatus: L,
      setConnect: M,
      setDisconnect: U,
      setInstall: B,
      setIsWeb: F,
      setIsSupportedPrivateBrowsingPerkPlatform: G,
      isWeb: V,
      isSupportedPrivateBrowsingPerkPlatform: H,
      setGetWarpInstallationStatus: W,
      perkAvailableToUser: z,
      setPerkAvailableToUser: K
    } = (0, Chunk663042.o)(R), q = Chunk473749.useCallback(async () => (L(Chunk5900.Ij.INITIALIZING), exports(setTimeout(() => {
      L(Chunk5900.Ij.CONNECTED)
    }, 1e3)), true), [L, exports]);
    Chunk473749.useEffect(() => {
      M(q)
    }, [q, M]);
    let Q = Chunk473749.useCallback(async () => Chunk5900._n.INSTALLING, []);
    Chunk473749.useEffect(() => {
      K(k)
    }, [k, K]), Chunk473749.useEffect(() => {
      W(Q)
    }, [W, Q]);
    let Y = Chunk473749.useCallback(async () => (clearTimeout(module), L(Chunk5900.Ij.DISCONNECTED), true), [module, L]),
      X = Chunk473749.useCallback(() => new Promise((e, t) => {
        D(p._n.INSTALLING), s(setTimeout(() => {
          if (S) return void t(Error("Installation failed"));
          e()
        }, O))
      }), [S, O, D, Chunk544891]);
    Chunk473749.useEffect(() => {
      V && A !== Chunk5900._n.UNKNOWN && D(Chunk5900._n.UNKNOWN)
    }, [V, D, A]), Chunk473749.useEffect(() => {
      U(Y)
    }, [Y, U]), Chunk473749.useEffect(() => {
      B(X)
    }, [X, B]), Chunk473749.useEffect(() => {
      A !== Chunk5900._n.INSTALLING && clearTimeout(require)
    }, [require, A]), Chunk473749.useEffect(() => {
      if (A !== Chunk5900._n.INSTALLED && Z !== Chunk5900.Ij.INITIALIZING) return void L(Chunk5900.Ij.INITIALIZING)
    }, [A, Z, L]);
    let {
      enabled: J
    } = Chunk299886.H.useConfig({
      location: "private_browsing_perk_settings_page"
    });
    return J ? (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
        variant: "heading-xl/semibold",
        style: {
          marginTop: "16px"
        },
        children: "Private Browsing Perk Components"
      }), (0, Chunk54381.jsxs)(Chunk261538.$0, {
        children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
          variant: "heading-lg/semibold",
          children: "Configure Private Browsing Perk State"
        }), (0, Chunk54381.jsxs)(Chunk261538.pg, {
          children: [(0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Is Nitro"
            }), (0, Chunk54381.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, Chunk54381.jsx)(Chunk159691.rsf, {
                onChange: () => {
                  z ? (0, Chunk535664.C)(null, I) : (0, Chunk535664.C)(Chunk474936.F_, I)
                },
                checked: z
              })
            })]
          }), (0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Is Web"
            }), (0, Chunk54381.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, Chunk54381.jsx)(Chunk159691.rsf, {
                onChange: () => F(!V),
                checked: V
              })
            })]
          }), (0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Is Supported Platform"
            }), (0, Chunk54381.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, Chunk54381.jsx)(Chunk159691.rsf, {
                onChange: () => G(!H),
                checked: H
              })
            })]
          }), (0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Installation Status"
            }), (0, Chunk54381.jsx)(Chunk199849.B6, {
              select: e => D(e),
              isSelected: e => e === A,
              serialize: e => "".concat(e),
              disabled: V,
              options: [{
                label: "Unknown",
                value: Chunk5900._n.UNKNOWN
              }, {
                label: "Not Installed",
                value: Chunk5900._n.NOT_INSTALLED
              }, {
                label: "Installed",
                value: Chunk5900._n.INSTALLED
              }, {
                label: "Installing",
                value: Chunk5900._n.INSTALLING
              }, {
                label: "Accept Terms",
                value: Chunk5900._n.WAITING_FOR_TERMS
              }, {
                label: "Existing Installation",
                value: Chunk5900._n.EXISTING_INSTALLATION
              }, {
                label: "Unsupported (ZeroTrust)",
                value: Chunk5900._n.ZERO_TRUST
              }, {
                label: "Installing Timeout",
                value: Chunk5900._n.INSTALLING_TIMEOUT
              }, {
                label: "Error",
                value: Chunk5900._n.ERROR
              }],
              popoutLayerContext: Chunk246992.O$
            })]
          }), A === Chunk5900._n.INSTALLED && (0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Connection Status"
            }), (0, Chunk54381.jsx)(Chunk199849.B6, {
              select: e => L(e),
              isSelected: e => e === Z,
              serialize: e => "".concat(e),
              options: [{
                label: "Initializing",
                value: Chunk5900.Ij.INITIALIZING
              }, {
                label: "Connected",
                value: Chunk5900.Ij.CONNECTED
              }, {
                label: "Disconnected",
                value: Chunk5900.Ij.DISCONNECTED
              }, {
                label: "Error",
                value: Chunk5900.Ij.ERROR
              }],
              popoutLayerContext: Chunk246992.O$
            })]
          })]
        }), A === Chunk5900._n.NOT_INSTALLED && (0, Chunk54381.jsxs)(Chunk261538.pg, {
          children: [(0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Install with error"
            }), (0, Chunk54381.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, Chunk54381.jsx)(Chunk159691.rsf, {
                onChange: () => E(!S),
                checked: S
              })
            })]
          }), (0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Install time"
            }), (0, Chunk54381.jsx)(Chunk199849.B6, {
              select: e => T(e),
              isSelected: e => e === O,
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
              popoutLayerContext: Chunk246992.O$
            })]
          })]
        })]
      }), (0, Chunk54381.jsxs)(Chunk773275.xz.Provider, {
        value: R,
        children: [(0, Chunk54381.jsxs)(Chunk261538.$0, {
          children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk Settings Component"
          }), (0, Chunk54381.jsx)(Chunk868802.M, {})]
        }), (0, Chunk54381.jsxs)(Chunk261538.$0, {
          children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk Exit Modal Upsell"
          }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
            text: "Show exit modal",
            onClick: () => {
              P(true)
            }
          }), N && (0, Chunk54381.jsx)(Chunk720553.default, {
            url: "https://www.discord.com",
            trustUrl: () => false,
            onCancel: () => P(false),
            isProtocol: false,
            onConfirm: () => {},
            onClose: async () => {
              P(false)
            },
            transitionState: Chunk481060.Dvm.ENTERED
          })]
        }), (0, Chunk54381.jsxs)(Chunk261538.$0, {
          children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk License Extension Task"
          }), (0, Chunk54381.jsx)(C, {
            onSuccess: () => {
              var e;
              null == (e = w.current) || module.refresh()
            }
          })]
        }), (0, Chunk54381.jsxs)(Chunk261538.$0, {
          children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk WARP License Info"
          }), (0, Chunk54381.jsx)(y, {
            ref: w
          })]
        })]
      })]
    }) : (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)(Chunk159691.X6q, {
        variant: "heading-xl/semibold",
        style: {
          marginTop: "16px"
        },
        children: "Private Browsing Perk Experiment Not Enabled"
      })
    })
  }