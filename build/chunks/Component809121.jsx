/** Chunk was on 62934 **/
/** chunk id: 809121, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => A
}), require("./388685.js"), require("./457542.js");
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
  Chunk948208 = require("./948208.js"),
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
  let {
    guildId: n,
    instance: t
  } = e, [i, s] = a.useState(false), o = a.useCallback(() => {
    s(true), (0, p.WX)(n, t.id).finally(() => {
      s(false)
    })
  }, [n, t.id]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: T.intl.string(P.default.TMzy7e),
    variant: "secondary",
    loading: i,
    onClick: o
  })
}

function Z(e) {
  return (0, r.jsx)(u.Button, E({
    fullWidth: true,
    text: T.intl.string(P.default.tkbVdX),
    variant: "secondary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function G(e) {
  return (0, r.jsx)(u.Button, E({
    fullWidth: true,
    text: T.intl.string(P.default.fQCcMz),
    variant: "primary"
  }, e))
}

function R(e) {
  return (0, r.jsx)(u.Button, E({
    fullWidth: true,
    text: T.intl.string(P.default.gWMqnJ),
    variant: "primary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function A(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, O.Z)(t), [p, E] = (0, m.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), A = p !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, D = (0, l.e7)([f.Z], () => f.Z.getDetectableGame(t.gameId)), V = a.useCallback(() => {
    A || null == t.providerType ? (0, I.Z)(n, t) : (0, N.Z)({
      provider: t.providerType,
      onAccept: () => {
        E(S.L.TAKE_ACTION), (0, I.Z)(n, t)
      }
    })
  }, [t, A, E, n]), B = a.useCallback(() => {
    (0, x.JG)(null != i ? i : ""), (0, u.showToast)((0, u.createToast)(T.intl.string(T.t["+5kSoa"]), u.ToastType.SUCCESS))
  }, [i]), L = (0, C.Z)(t.gameId, "cover"), M = (0, v.Z)(n), W = a.useCallback(() => {
    var e;
    (0, b.q)({
      href: null != (e = t.gameServerPanelUrl) ? e : ""
    })
  }, [t.gameServerPanelUrl]), z = a.useMemo(() => {
    switch (t.status) {
      case o.V.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(k, {
            guildId: n,
            instance: t
          }), M && (0, r.jsx)(Z, {
            onClick: W,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case o.V.OFFLINE:
      case o.V.ONLINE:
      case o.V.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(G, {
            onClick: V
          }), M && (0, r.jsx)(Z, {
            onClick: W,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case o.V.STARTUP_FAILED:
      case o.V.MISSING_STOCK:
        return M ? (0, r.jsx)(R, {
          onClick: W
        }) : (0, r.jsx)(G, {
          onClick: V,
          disabled: true
        });
      case o.V.DELETED:
        return M ? (0, r.jsx)(Z, {
          onClick: W,
          disabled: null == t.gameServerPanelUrl
        }) : (0, r.jsx)(G, {
          onClick: V,
          disabled: true
        });
      default:
        return null
    }
  }, [t, V, M, W, n]), U = a.useMemo(() => {
    if (null == t.gameConfig) return null;
    let e = [t.gameConfig.type, t.gameConfig.version].filter(_.lm).join(" ");
    return "" === e ? null : e
  }, [t.gameConfig]), F = a.useMemo(() => {
    switch (t.status) {
      case o.V.STARTING:
        if (null == t.gameServerPanelUrl) return T.intl.string(P.default["1A3US0"]);
        return null;
      case o.V.STARTUP_FAILED:
        return T.intl.string(M ? P.default["Mdoc9/"] : P.default.osZiRk);
      case o.V.MISSING_STOCK:
        return T.intl.string(M ? P.default.YCakvL : P.default.osZiRk);
      default:
        return null
    }
  }, [t.status, t.gameServerPanelUrl, M]);
  return (0, r.jsxs)(h.Z, {
    actions: z,
    children: [(0, r.jsxs)("div", {
      className: w.serverDetailsContainer,
      children: [(0, r.jsxs)("div", {
        className: w.serverHeader,
        children: [(0, r.jsx)("img", {
          src: null != L ? L : "",
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
            children: [null == D ? true : D.name, U].filter(_.lm).join(" • ")
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
              children: T.intl.string(P.default.bDdi7u)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != t.onlineConnectionsCount && t.onlineConnectionsCount >= 0 ? t.onlineConnectionsCount : "—", " / ").concat(null != t.maxConnectionsCount && t.maxConnectionsCount >= 0 ? t.maxConnectionsCount : "—")
            })]
          }), (0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: T.intl.string(P.default["7phwMD"])
            }), (0, r.jsx)("div", {
              className: w.serverIpContainer,
              children: null == i ? (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: "—"
              }) : A ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  children: i
                }), (0, r.jsx)(u.P3F, {
                  className: w.copyButton,
                  "aria-label": T.intl.string(T.t.OpuAlJ),
                  onClick: B,
                  children: (0, r.jsx)(u.TIy, {
                    size: "sm"
                  })
                })]
              }) : null != t.providerType && (0, r.jsx)(g.Z, {
                onClick: () => {
                  (0, N.Z)({
                    provider: t.providerType,
                    onAccept: () => {
                      E(S.L.TAKE_ACTION), B()
                    }
                  })
                },
                children: T.intl.string(P.default["f+F7Hx"])
              })
            })]
          }), (0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: T.intl.string(P.default["n+ZX7+"])
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
                      return T.intl.string(P.default.SgjaXF);
                    case o.V.STARTUP_FAILED:
                      return T.intl.string(P.default["7C9Z3t"]);
                    case o.V.OFFLINE:
                      return T.intl.string(P.default["Ys/RrK"]);
                    case o.V.ONLINE:
                      return T.intl.string(P.default["60kAzs"]);
                    case o.V.DELETED:
                      return T.intl.string(P.default.Z1NZwc);
                    case o.V.MISSING_STOCK:
                      return T.intl.string(P.default["+a5G2t"]);
                    case o.V.SLEEPING:
                      return T.intl.string(P.default.y0z8ZG);
                    default:
                      return "—"
                  }
                }(t.status)
              }), null != F && (0, r.jsx)(d.u, {
                position: "top",
                text: F,
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
              children: T.intl.string(P.default.mJlz3d)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: null != t.regionName ? t.regionName : "—"
            })]
          })]
        })
      })]
    }), M && (0, r.jsx)("div", {
      className: w.overflowMenu,
      children: (0, r.jsx)(y.Z, {
        guildId: n,
        instance: t
      })
    }), (0, r.jsx)("div", {
      className: w.imageBackground,
      children: (0, r.jsx)(j.b, {
        imageUrl: null != L ? L : ""
      })
    })]
  })
}