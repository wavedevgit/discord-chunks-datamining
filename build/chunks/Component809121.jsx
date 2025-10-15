/** Chunk was on 62934 **/
/** chunk id: 809121, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk660815 = require("./660815.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk77498 = require("./77498.js"),
  Chunk572004 = require("./572004.js"),
  Chunk823379 = require("./823379.js"),
  Chunk49012 = require("./49012.js"),
  Chunk639777 = require("./639777.js"),
  Chunk905551 = require("./905551.js"),
  Chunk441494 = require("./441494.jsx"),
  Chunk775146 = require("./775146.jsx"),
  Chunk941762 = require("./941762.jsx"),
  Chunk162190 = require("./162190.js"),
  Chunk986841 = require("./986841.js"),
  Chunk329871 = require("./329871.jsx"),
  Chunk110381 = require("./110381.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk470658 = require("./470658.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500104 = require("./500104.js");

function E(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function k(e) {
  return (0, r.jsx)(u.Button, E({
    fullWidth: true,
    text: T.intl.string(P.default.TMzy7d),
    variant: "secondary"
  }, e))
}

function Z(e) {
  return (0, r.jsx)(u.Button, E({
    fullWidth: true,
    text: T.intl.string(P.default.tkbVdf),
    variant: "secondary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function G(e) {
  return (0, r.jsx)(u.Button, E({
    fullWidth: true,
    text: T.intl.string(P.default["fQCcM/"]),
    variant: "primary"
  }, e))
}

function R(e) {
  return (0, r.jsx)(u.Button, E({
    fullWidth: true,
    text: T.intl.string(P.default.gWMqnI),
    variant: "primary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function A(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, O.Z)(t), [E, A] = (0, m.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), D = E !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, V = (0, l.e7)([f.Z], () => f.Z.getDetectableGame(t.gameId)), B = a.useCallback(() => {
    D || null == t.providerType ? (0, I.Z)(n, t) : (0, N.Z)({
      provider: t.providerType,
      onAccept: () => {
        A(S.L.TAKE_ACTION), (0, I.Z)(n, t)
      }
    })
  }, [t, D, A, n]), M = a.useCallback(() => {
    (0, x.JG)(null != i ? i : ""), (0, u.showToast)((0, u.createToast)(T.intl.string(T.t["+5kSoW"]), u.ToastType.SUCCESS))
  }, [i]), W = (0, C.Z)(t.gameId, "cover"), L = (0, v.Z)(n), U = a.useCallback(() => {
    var e;
    (0, b.q)({
      href: null != (e = t.gameServerPanelUrl) ? e : ""
    })
  }, [t.gameServerPanelUrl]), z = a.useCallback(() => {
    (0, p.WX)(n, t.id)
  }, [n, t.id]), F = a.useMemo(() => {
    switch (t.status) {
      case o.V.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(k, {
            onClick: z
          }), L && (0, r.jsx)(Z, {
            onClick: U,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case o.V.OFFLINE:
      case o.V.ONLINE:
      case o.V.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(G, {
            onClick: B
          }), L && (0, r.jsx)(Z, {
            onClick: U,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case o.V.STARTUP_FAILED:
      case o.V.MISSING_STOCK:
        return L ? (0, r.jsx)(R, {
          onClick: U
        }) : (0, r.jsx)(G, {
          onClick: B,
          disabled: true
        });
      case o.V.DELETED:
        return L ? (0, r.jsx)(Z, {
          onClick: U,
          disabled: null == t.gameServerPanelUrl
        }) : (0, r.jsx)(G, {
          onClick: B,
          disabled: true
        });
      default:
        return null
    }
  }, [t, B, L, U, z]), K = a.useMemo(() => {
    if (null == t.gameConfig) return null;
    let e = [t.gameConfig.type, t.gameConfig.version].filter(_.lm).join(" ");
    return "" === e ? null : e
  }, [t.gameConfig]), H = a.useMemo(() => {
    switch (t.status) {
      case o.V.STARTING:
        if (null == t.gameServerPanelUrl) return T.intl.string(P.default["1A3US2"]);
        return null;
      case o.V.STARTUP_FAILED:
        return T.intl.string(L ? P.default.Mdoc98 : P.default.osZiRl);
      case o.V.MISSING_STOCK:
        return T.intl.string(L ? P.default.YCakvM : P.default.osZiRl);
      default:
        return null
    }
  }, [t.status, t.gameServerPanelUrl, L]);
  return (0, r.jsxs)(h.Z, {
    actions: F,
    children: [(0, r.jsxs)("div", {
      className: w.serverDetailsContainer,
      children: [(0, r.jsxs)("div", {
        className: w.serverHeader,
        children: [(0, r.jsx)("img", {
          src: null != W ? W : "",
          alt: "",
          className: w.gameImage
        }), (0, r.jsxs)("div", {
          className: w.serverInfo,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: t.name
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-tertiary",
            children: [null == V ? true : V.name, K].filter(_.lm).join(" • ")
          })]
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
          className: w.detailsGrid,
          children: [(0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: T.intl.string(P.default.bDdi7n)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != t.onlineConnectionsCount && t.onlineConnectionsCount >= 0 ? t.onlineConnectionsCount : "—", " / ").concat(null != t.maxConnectionsCount && t.maxConnectionsCount >= 0 ? t.maxConnectionsCount : "—")
            })]
          }), (0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: T.intl.string(P.default["7phwMG"])
            }), (0, r.jsx)("div", {
              className: w.serverIpContainer,
              children: null == i ? (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: "—"
              }) : D ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  children: i
                }), (0, r.jsx)(u.P3F, {
                  className: w.copyButton,
                  "aria-label": T.intl.string(T.t.OpuAlK),
                  onClick: M,
                  children: (0, r.jsx)(u.TIy, {
                    size: "sm"
                  })
                })]
              }) : null != t.providerType && (0, r.jsx)(g.Z, {
                onClick: () => {
                  (0, N.Z)({
                    provider: t.providerType,
                    onAccept: () => {
                      A(S.L.TAKE_ACTION), M()
                    }
                  })
                },
                children: T.intl.string(P.default["f+F7H3"])
              })
            })]
          }), (0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: T.intl.string(P.default["n+ZX7y"])
            }), (0, r.jsxs)("div", {
              className: w.statusContainer,
              children: [t.status === o.V.STARTING ? (0, r.jsx)(u.$jN, {
                type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                className: w.statusLoading
              }) : (0, r.jsx)("span", {
                className: s()(w.statusIndicator, null != t.status && w[t.status])
              }), (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: function(e) {
                  switch (e) {
                    case o.V.STARTING:
                      return T.intl.string(P.default.SgjaXI);
                    case o.V.STARTUP_FAILED:
                      return T.intl.string(P.default["7C9Z3s"]);
                    case o.V.OFFLINE:
                      return T.intl.string(P.default["Ys/RrB"]);
                    case o.V.ONLINE:
                      return T.intl.string(P.default["60kAzo"]);
                    case o.V.DELETED:
                      return T.intl.string(P.default.Z1NZwX);
                    case o.V.MISSING_STOCK:
                      return T.intl.string(P.default["+a5G2l"]);
                    case o.V.SLEEPING:
                      return T.intl.string(P.default.y0z8ZO);
                    default:
                      return "—"
                  }
                }(t.status)
              }), null != H && (0, r.jsx)(d.u, {
                position: "top",
                text: H,
                children: (0, r.jsx)(u.idN, {
                  className: w.statusTooltipIcon,
                  size: "xs"
                })
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: T.intl.string(P.default.mJlz3T)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: null != t.regionName ? t.regionName : "—"
            })]
          })]
        })
      })]
    }), L && (0, r.jsx)("div", {
      className: w.overflowMenu,
      children: (0, r.jsx)(y.Z, {
        guildId: n,
        instance: t
      })
    }), (0, r.jsx)("div", {
      className: w.imageBackground,
      children: (0, r.jsx)(j.b, {
        imageUrl: null != W ? W : ""
      })
    })]
  })
}