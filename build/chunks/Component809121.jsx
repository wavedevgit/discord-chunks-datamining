/** Chunk was on 62934 **/
/** chunk id: 809121, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => B
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk619733 = require("./619733.js"),
  Chunk921944 = require("./921944.js"),
  Chunk948208 = require("./948208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500104 = require("./500104.js");

function k(e) {
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

function R(e) {
  let {
    guildId: n,
    instance: t
  } = e, [i, l] = a.useState(false), s = a.useCallback(() => {
    l(true), (0, j.WX)(n, t.id).finally(() => {
      l(false)
    })
  }, [n, t.id]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: E.intl.string(T.default.TMzy7e),
    variant: "secondary",
    loading: i,
    onClick: s
  })
}

function Z(e) {
  return (0, r.jsx)(u.Button, k({
    fullWidth: true,
    text: E.intl.string(T.default.tkbVdX),
    variant: "secondary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function G(e) {
  return (0, r.jsx)(u.Button, k({
    fullWidth: true,
    text: E.intl.string(T.default.fQCcMz),
    variant: "primary"
  }, e))
}

function D(e) {
  return (0, r.jsx)(u.Button, k({
    fullWidth: true,
    text: E.intl.string(T.default.gWMqnJ),
    variant: "primary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function V(e) {
  let {
    guildId: n
  } = e, [t, i] = a.useState(false), l = a.useCallback(() => {
    i(true), (0, j.mF)(n).finally(() => {
      i(false)
    })
  }, [n]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: E.intl.string(T.default.BLEx3t),
    variant: "secondary",
    loading: t,
    onClick: l
  })
}

function A(e) {
  let {
    instance: n
  } = e;
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: E.intl.string(T.default.bBkeMj),
    variant: "secondary",
    onClick: () => {
      (0, b.q)({
        href: S.uz[n.providerType]
      })
    }
  })
}

function B(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, O.Z)(t), [j, S] = (0, m.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), k = j !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, B = (0, o.e7)([f.Z], () => f.Z.getDetectableGame(t.gameId)), W = a.useCallback(() => {
    k || null == t.providerType ? (0, I.Z)(n, t) : (0, N.Z)({
      provider: t.providerType,
      onAccept: () => {
        S(P.L.TAKE_ACTION), (0, I.Z)(n, t)
      }
    })
  }, [t, k, S, n]), L = a.useCallback(() => {
    (0, x.JG)(null != i ? i : ""), (0, u.showToast)((0, u.createToast)(E.intl.string(E.t["+5kSoa"]), u.ToastType.SUCCESS))
  }, [i]), M = (0, C.Z)(t.gameId, "cover"), z = (0, v.Z)(n), U = a.useCallback(() => {
    var e;
    (0, b.q)({
      href: null != (e = t.gameServerPanelUrl) ? e : ""
    })
  }, [t.gameServerPanelUrl]), F = a.useMemo(() => {
    switch (t.status) {
      case s.V.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(R, {
            guildId: n,
            instance: t
          }), z && (0, r.jsx)(Z, {
            onClick: U,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.OFFLINE:
      case s.V.ONLINE:
      case s.V.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(G, {
            onClick: W
          }), z && (0, r.jsx)(Z, {
            onClick: U,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.STARTUP_FAILED:
      case s.V.MISSING_STOCK:
        return z ? (0, r.jsx)(D, {
          onClick: U
        }) : (0, r.jsx)(G, {
          onClick: W,
          disabled: true
        });
      case s.V.DELETED:
        return z ? (0, r.jsx)(Z, {
          onClick: U,
          disabled: null == t.gameServerPanelUrl
        }) : (0, r.jsx)(G, {
          onClick: W,
          disabled: true
        });
      case s.V.PROVIDER_ERRORED:
        return (0, r.jsxs)(r.Fragment, {
          children: [z ? (0, r.jsx)(A, {
            guildId: n,
            instance: t
          }) : (0, r.jsx)(G, {
            onClick: W,
            disabled: true
          }), (0, r.jsx)(V, {
            guildId: n,
            instance: t
          })]
        });
      default:
        return null
    }
  }, [t, W, z, U, n]), K = a.useMemo(() => {
    if (null == t.gameConfig) return null;
    let e = [t.gameConfig.type, t.gameConfig.version].filter(_.lm).join(" ");
    return "" === e ? null : e
  }, [t.gameConfig]), q = a.useMemo(() => {
    switch (t.status) {
      case s.V.STARTING:
        if (null == t.gameServerPanelUrl) return E.intl.string(T.default["1A3US0"]);
        return null;
      case s.V.STARTUP_FAILED:
        return E.intl.string(z ? T.default["Mdoc9/"] : T.default.osZiRk);
      case s.V.MISSING_STOCK:
        return E.intl.string(z ? T.default.YCakvL : T.default.osZiRk);
      case s.V.PROVIDER_ERRORED:
        return E.intl.string(z ? T.default.NRyCeX : T.default.osZiRk);
      default:
        return null
    }
  }, [t.status, t.gameServerPanelUrl, z]);
  return (0, r.jsxs)(h.Z, {
    actions: F,
    children: [(0, r.jsxs)("div", {
      className: w.serverDetailsContainer,
      children: [(0, r.jsxs)("div", {
        className: w.serverHeader,
        children: [(0, r.jsx)("img", {
          src: null != M ? M : "",
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
            children: [null == B ? true : B.name, K].filter(_.lm).join(" • ")
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
              children: E.intl.string(T.default.bDdi7u)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != t.onlineConnectionsCount && t.onlineConnectionsCount >= 0 ? t.onlineConnectionsCount : "—", " / ").concat(null != t.maxConnectionsCount && t.maxConnectionsCount >= 0 ? t.maxConnectionsCount : "—")
            })]
          }), (0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: E.intl.string(T.default["7phwMD"])
            }), (0, r.jsx)("div", {
              className: w.serverIpContainer,
              children: null == i ? (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: "—"
              }) : k ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  children: i
                }), (0, r.jsx)(u.P3F, {
                  className: w.copyButton,
                  "aria-label": E.intl.string(E.t.OpuAlJ),
                  onClick: L,
                  children: (0, r.jsx)(u.TIy, {
                    size: "sm"
                  })
                })]
              }) : null != t.providerType && (0, r.jsx)(g.Z, {
                onClick: () => {
                  (0, N.Z)({
                    provider: t.providerType,
                    onAccept: () => {
                      S(P.L.TAKE_ACTION), L()
                    }
                  })
                },
                children: E.intl.string(T.default["f+F7Hx"])
              })
            })]
          }), (0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: E.intl.string(T.default["n+ZX7+"])
            }), (0, r.jsxs)("div", {
              className: w.statusContainer,
              children: [t.status === s.V.STARTING ? (0, r.jsx)(u.$jN, {
                type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                className: w.statusLoading
              }) : (0, r.jsx)("span", {
                className: l()(w.statusIndicator, null != t.status && w[t.status])
              }), (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: function(e) {
                  switch (e) {
                    case s.V.STARTING:
                      return E.intl.string(T.default.SgjaXF);
                    case s.V.STARTUP_FAILED:
                      return E.intl.string(T.default["7C9Z3t"]);
                    case s.V.OFFLINE:
                      return E.intl.string(T.default["Ys/RrK"]);
                    case s.V.ONLINE:
                      return E.intl.string(T.default["60kAzs"]);
                    case s.V.DELETED:
                      return E.intl.string(T.default.Z1NZwc);
                    case s.V.MISSING_STOCK:
                      return E.intl.string(T.default["+a5G2t"]);
                    case s.V.SLEEPING:
                      return E.intl.string(T.default.y0z8ZG);
                    case s.V.PROVIDER_ERRORED:
                      return E.intl.string(T.default["6g/ojo"]);
                    default:
                      return "—"
                  }
                }(t.status)
              }), null != q && (0, r.jsx)(d.u, {
                position: "top",
                text: q,
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
              children: E.intl.string(T.default.mJlz3d)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: null != t.regionName ? t.regionName : "—"
            })]
          })]
        })
      })]
    }), z && (0, r.jsx)("div", {
      className: w.overflowMenu,
      children: (0, r.jsx)(y.Z, {
        guildId: n,
        instance: t
      })
    }), (0, r.jsx)("div", {
      className: w.imageBackground,
      children: (0, r.jsx)(p.b, {
        imageUrl: null != M ? M : ""
      })
    })]
  })
}