/** Chunk was on 837 **/
/** chunk id: 704088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => C
}), require("./388685.js"), require("./49124.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk663042 = require("./663042.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
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
let _ = Chunk473749.forwardRef((e, t) => {
  let [n, i] = l.useState(null), [r, c] = l.useState(null), [d, u] = l.useState(false), m = l.useCallback(async () => {
    u(true), c(null), i(null);
    try {
      let e = await s.tn.get({
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
    children: [(0, a.jsx)(o.zxk, {
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
_.displayName = "DebugWarpLicenseInfo";
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
        await s.tn.post({
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
      children: [(0, a.jsx)(o.zxk, {
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
  C = () => {
    let [e, t] = Chunk473749.useState(false), [n, s] = Chunk473749.useState(false), [C, S] = Chunk473749.useState(false), [E, N] = Chunk473749.useState(5e3), [T, O] = Chunk473749.useState(false), P = Chunk473749.useRef(null), w = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), I = (0, Chunk848984.u)(), [k] = Chunk473749.useState(() => (0, Chunk773275.o8)({
      finishSetup: async () => true,
      perkAvailableToUser: I
    })), {
      installationStatus: R,
      setInstallationStatus: A,
      connectionStatus: Z,
      setConnectionStatus: D,
      setConnect: L,
      setDisconnect: M,
      setInstall: U,
      setIsWeb: F,
      setIsSupportedPrivateBrowsingPerkPlatform: B,
      isWeb: G,
      isSupportedPrivateBrowsingPerkPlatform: z,
      setGetWarpInstallationStatus: H,
      perkAvailableToUser: V,
      setPerkAvailableToUser: W
    } = (0, Chunk663042.o)(k), K = Chunk473749.useCallback(async () => (D(Chunk5900.Ij.INITIALIZING), exports(setTimeout(() => {
      D(Chunk5900.Ij.CONNECTED)
    }, 1e3)), true), [D, exports]);
    Chunk473749.useEffect(() => {
      L(K)
    }, [K, L]);
    let q = Chunk473749.useCallback(async () => Chunk5900._n.INSTALLING, []);
    Chunk473749.useEffect(() => {
      W(I)
    }, [I, W]), Chunk473749.useEffect(() => {
      H(q)
    }, [H, q]);
    let Y = Chunk473749.useCallback(async () => (clearTimeout(module), D(Chunk5900.Ij.DISCONNECTED), true), [module, D]),
      J = Chunk473749.useCallback(() => new Promise((e, t) => {
        A(m._n.INSTALLING), s(setTimeout(() => {
          if (C) return void t(Error("Installation failed"));
          e()
        }, E))
      }), [C, E, A, Chunk544891]);
    Chunk473749.useEffect(() => {
      G && R !== Chunk5900._n.UNKNOWN && A(Chunk5900._n.UNKNOWN)
    }, [G, A, R]), Chunk473749.useEffect(() => {
      M(Y)
    }, [Y, M]), Chunk473749.useEffect(() => {
      U(J)
    }, [J, U]), Chunk473749.useEffect(() => {
      R !== Chunk5900._n.INSTALLING && clearTimeout(require)
    }, [require, R]), Chunk473749.useEffect(() => {
      if (R !== Chunk5900._n.INSTALLED && Z !== Chunk5900.Ij.INITIALIZING) return void D(Chunk5900.Ij.INITIALIZING)
    }, [R, Z, D]);
    let {
      enabled: X
    } = Chunk299886.H.useConfig({
      location: "private_browsing_perk_settings_page"
    });
    return X ? (0, Chunk54381.jsxs)("div", {
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
                  V ? (0, Chunk535664.C)(null, w) : (0, Chunk535664.C)(Chunk474936.F_, w)
                },
                checked: V
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
                onChange: () => F(!G),
                checked: G
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
                onChange: () => B(!z),
                checked: z
              })
            })]
          }), (0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Installation Status"
            }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
              select: e => A(e),
              isSelected: e => e === R,
              serialize: e => "".concat(e),
              disabled: G,
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
                label: "Existing Installation",
                value: Chunk5900._n.EXISTING_INSTALLATION
              }, {
                label: "Unsupported (ZeroTrust)",
                value: Chunk5900._n.ZERO_TRUST
              }, {
                label: "Error",
                value: Chunk5900._n.ERROR
              }],
              popoutLayerContext: Chunk246992.O$
            })]
          }), R === Chunk5900._n.INSTALLED && (0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Connection Status"
            }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
              select: e => D(e),
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
        }), R === Chunk5900._n.NOT_INSTALLED && (0, Chunk54381.jsxs)(Chunk261538.pg, {
          children: [(0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Install with error"
            }), (0, Chunk54381.jsx)("div", {
              style: {
                width: "45px"
              },
              children: (0, Chunk54381.jsx)(Chunk159691.rsf, {
                onChange: () => S(!C),
                checked: C
              })
            })]
          }), (0, Chunk54381.jsxs)(Chunk261538.BZ, {
            children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
              variant: "text-md/semibold",
              children: "Install time"
            }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
              select: e => N(e),
              isSelected: e => e === E,
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
        value: k,
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
              O(true)
            }
          }), T && (0, Chunk54381.jsx)(Chunk720553.default, {
            url: "https://www.discord.com",
            trustUrl: () => false,
            onCancel: () => O(false),
            isProtocol: false,
            onConfirm: () => {},
            onClose: async () => {
              O(false)
            },
            transitionState: Chunk481060.Dvm.ENTERED
          })]
        }), (0, Chunk54381.jsxs)(Chunk261538.$0, {
          children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk License Extension Task"
          }), (0, Chunk54381.jsx)(y, {
            onSuccess: () => {
              var e;
              null == (e = P.current) || module.refresh()
            }
          })]
        }), (0, Chunk54381.jsxs)(Chunk261538.$0, {
          children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
            variant: "heading-lg/medium",
            children: "Private Browsing Perk WARP License Info"
          }), (0, Chunk54381.jsx)(_, {
            ref: P
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