/** Chunk was on 65347 **/
/** chunk id: 704088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => j
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk663042 = require("./663042.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk720553 = require("./720553.jsx"),
  Chunk535664 = require("./535664.js"),
  Chunk5900 = require("./5900.js"),
  Chunk953865 = require("./953865.jsx"),
  Chunk299886 = require("./299886.js"),
  Chunk848984 = require("./848984.js"),
  Chunk29594 = require("./29594.jsx"),
  Chunk868802 = require("./868802.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk246992 = require("./246992.js"),
  Chunk474936 = require("./474936.js");
let j = () => {
  let [e, t] = Chunk473749.useState(false), [n, j] = Chunk473749.useState(false), [_, y] = Chunk473749.useState(false), [C, S] = Chunk473749.useState(5e3), [E, N] = Chunk473749.useState(false), T = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), O = (0, Chunk848984.u)(), P = async () => (R(Chunk5900.Ij.INITIALIZING), exports(setTimeout(() => {
    R(Chunk5900.Ij.CONNECTED)
  }, 1e3)), true), I = (0, Chunk473749.useRef)((0, Chunk953865.o8)({
    connect: P,
    finishSetup: async () => true,
    perkAvailableToUser: O
  })).current, {
    installationStatus: w,
    setInstallationStatus: k,
    connectionStatus: A,
    setConnectionStatus: R,
    setDisconnect: Z,
    setInstall: D,
    setIsWeb: L,
    setIsSupportedPrivateBrowsingPerkPlatform: M,
    isWeb: U,
    isSupportedPrivateBrowsingPerkPlatform: B,
    setGetWarpInstallationStatus: F,
    perkAvailableToUser: G,
    setPerkAvailableToUser: z
  } = (0, Chunk663042.o)(I), H = (0, Chunk473749.useCallback)(async () => Chunk5900._n.INSTALLING, []);
  (0, Chunk473749.useEffect)(() => {
    z(O)
  }, [O, z]), (0, Chunk473749.useEffect)(() => {
    F(H)
  }, [F, H]);
  let V = (0, Chunk473749.useCallback)(async () => (clearTimeout(module), R(Chunk5900.Ij.DISCONNECTED), true), [module, R]),
    W = (0, Chunk473749.useCallback)(() => new Promise((e, t) => {
      k(u._n.INSTALLING), j(setTimeout(() => {
        if (_) return void t(Error("Installation failed"));
        e()
      }, C))
    }), [_, C, k, j]);
  (0, Chunk473749.useEffect)(() => {
    U && w !== Chunk5900._n.UNKNOWN && k(Chunk5900._n.UNKNOWN)
  }, [U, k, w]), (0, Chunk473749.useEffect)(() => {
    Z(V)
  }, [V, Z]), (0, Chunk473749.useEffect)(() => {
    D(W)
  }, [W, D]), (0, Chunk473749.useEffect)(() => {
    w !== Chunk5900._n.INSTALLING && clearTimeout(require)
  }, [require, w]), (0, Chunk473749.useEffect)(() => {
    if (w !== Chunk5900._n.INSTALLED && A !== Chunk5900.Ij.INITIALIZING) return void R(Chunk5900.Ij.INITIALIZING)
  }, [w, A, R]);
  let {
    enabled: K
  } = Chunk299886.H.useConfig({
    location: "private_browsing_perk_settings_page"
  });
  return K ? (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
      variant: "heading-xl/semibold",
      style: {
        marginTop: "16px"
      },
      children: "Private Browsing Perk Components"
    }), (0, Chunk54381.jsxs)(Chunk29594.$0, {
      children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
        variant: "heading-lg/semibold",
        children: "Configure Private Browsing Perk State"
      }), (0, Chunk54381.jsxs)(Chunk29594.pg, {
        children: [(0, Chunk54381.jsxs)(Chunk29594.BZ, {
          children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
            variant: "text-md/semibold",
            children: "Is Nitro"
          }), (0, Chunk54381.jsx)("div", {
            style: {
              width: "45px"
            },
            children: (0, Chunk54381.jsx)(Chunk159691.rsf, {
              onChange: () => {
                G ? (0, Chunk535664.C)(null, T) : (0, Chunk535664.C)(Chunk474936.F_, T)
              },
              checked: G
            })
          })]
        }), (0, Chunk54381.jsxs)(Chunk29594.BZ, {
          children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
            variant: "text-md/semibold",
            children: "Is Web"
          }), (0, Chunk54381.jsx)("div", {
            style: {
              width: "45px"
            },
            children: (0, Chunk54381.jsx)(Chunk159691.rsf, {
              onChange: () => L(!U),
              checked: U
            })
          })]
        }), (0, Chunk54381.jsxs)(Chunk29594.BZ, {
          children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
            variant: "text-md/semibold",
            children: "Is Supported Platform"
          }), (0, Chunk54381.jsx)("div", {
            style: {
              width: "45px"
            },
            children: (0, Chunk54381.jsx)(Chunk159691.rsf, {
              onChange: () => M(!B),
              checked: B
            })
          })]
        }), (0, Chunk54381.jsxs)(Chunk29594.BZ, {
          children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
            variant: "text-md/semibold",
            children: "Installation Status"
          }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
            select: e => k(e),
            isSelected: e => e === w,
            serialize: e => "".concat(e),
            disabled: U,
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
        }), w === Chunk5900._n.INSTALLED && (0, Chunk54381.jsxs)(Chunk29594.BZ, {
          children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
            variant: "text-md/semibold",
            children: "Connection Status"
          }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
            select: e => R(e),
            isSelected: e => e === A,
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
      }), w === Chunk5900._n.NOT_INSTALLED && (0, Chunk54381.jsxs)(Chunk29594.pg, {
        children: [(0, Chunk54381.jsxs)(Chunk29594.BZ, {
          children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
            variant: "text-md/semibold",
            children: "Install with error"
          }), (0, Chunk54381.jsx)("div", {
            style: {
              width: "45px"
            },
            children: (0, Chunk54381.jsx)(Chunk159691.rsf, {
              onChange: () => y(!_),
              checked: _
            })
          })]
        }), (0, Chunk54381.jsxs)(Chunk29594.BZ, {
          children: [(0, Chunk54381.jsx)(Chunk159691.xvT, {
            variant: "text-md/semibold",
            children: "Install time"
          }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
            select: e => S(e),
            isSelected: e => e === C,
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
    }), (0, Chunk54381.jsxs)(Chunk953865.xz.Provider, {
      value: I,
      children: [(0, Chunk54381.jsxs)(Chunk29594.$0, {
        children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
          variant: "heading-lg/medium",
          children: "Private Browsing Perk Settings Component"
        }), (0, Chunk54381.jsx)(Chunk868802.M, {})]
      }), (0, Chunk54381.jsxs)(Chunk29594.$0, {
        children: [(0, Chunk54381.jsx)(Chunk159691.X6q, {
          variant: "heading-lg/medium",
          children: "Private Browsing Perk Exit Modal Upsell"
        }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
          text: "Show exit modal",
          onClick: () => {
            N(true)
          }
        }), E && (0, Chunk54381.jsx)(Chunk720553.default, {
          url: "https://www.discord.com",
          trustUrl: () => false,
          onCancel: () => N(false),
          isProtocol: false,
          onConfirm: () => {},
          onClose: async () => {
            N(false)
          },
          transitionState: Chunk481060.Dvm.ENTERED
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