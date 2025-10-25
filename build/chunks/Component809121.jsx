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
  Chunk823379 = require("./823379.js"),
  Chunk49012 = require("./49012.js"),
  Chunk639777 = require("./639777.js"),
  Chunk905551 = require("./905551.js"),
  Chunk441494 = require("./441494.jsx"),
  Chunk775146 = require("./775146.jsx"),
  Chunk941762 = require("./941762.jsx"),
  Chunk587065 = require("./587065.js"),
  Chunk162190 = require("./162190.js"),
  Chunk986841 = require("./986841.js"),
  Chunk329871 = require("./329871.jsx"),
  Chunk110381 = require("./110381.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk921944 = require("./921944.js"),
  Chunk306238 = require("./306238.js"),
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
    l(true), (0, b.WX)(n, t.id).finally(() => {
      l(false)
    })
  }, [n, t.id]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: E.intl.string(T.default.TMzy7d),
    variant: "secondary",
    loading: i,
    onClick: s
  })
}

function Z(e) {
  return (0, r.jsx)(u.Button, k({
    fullWidth: true,
    text: E.intl.string(T.default.tkbVdf),
    variant: "secondary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function G(e) {
  return (0, r.jsx)(u.Button, k({
    fullWidth: true,
    text: E.intl.string(T.default["fQCcM/"]),
    variant: "primary"
  }, e))
}

function D(e) {
  return (0, r.jsx)(u.Button, k({
    fullWidth: true,
    text: E.intl.string(T.default.gWMqnI),
    variant: "primary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function A(e) {
  let {
    guildId: n
  } = e, [t, i] = a.useState(false), l = a.useCallback(() => {
    i(true), (0, b.mF)(n).finally(() => {
      i(false)
    })
  }, [n]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: E.intl.string(T.default.BLEx3k),
    variant: "secondary",
    loading: t,
    onClick: l
  })
}

function V(e) {
  let {
    instance: n
  } = e;
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: E.intl.string(T.default.bBkeMs),
    variant: "secondary",
    onClick: () => {
      (0, _.q)({
        href: S.uz[n.providerType]
      })
    }
  })
}

function B(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, O.Z)(t), [b, S] = (0, m.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), k = b !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, B = (0, o.e7)([f.Z], () => f.Z.getDetectableGame(t.gameId)), M = a.useCallback(() => {
    k || null == t.providerType ? (0, I.Z)(n, t) : (0, N.Z)({
      provider: t.providerType,
      onAccept: () => {
        S(P.L.TAKE_ACTION), (0, I.Z)(n, t)
      }
    })
  }, [t, k, S, n]), {
    handleCopyServerIp: W,
    animateCopyIcon: L
  } = (0, y.Z)(null != i ? i : ""), z = (0, C.Z)(t.gameId, "cover"), U = (0, v.Z)(n), F = a.useCallback(() => {
    var e;
    (0, _.q)({
      href: null != (e = t.gameServerPanelUrl) ? e : ""
    })
  }, [t.gameServerPanelUrl]), K = a.useMemo(() => {
    switch (t.status) {
      case s.V.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(R, {
            guildId: n,
            instance: t
          }), U && (0, r.jsx)(Z, {
            onClick: F,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.OFFLINE:
      case s.V.ONLINE:
      case s.V.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(G, {
            onClick: M
          }), U && (0, r.jsx)(Z, {
            onClick: F,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.STARTUP_FAILED:
      case s.V.MISSING_STOCK:
        return U ? (0, r.jsx)(D, {
          onClick: F
        }) : (0, r.jsx)(G, {
          onClick: M,
          disabled: true
        });
      case s.V.DELETED:
        return U ? (0, r.jsx)(Z, {
          onClick: F,
          disabled: null == t.gameServerPanelUrl
        }) : (0, r.jsx)(G, {
          onClick: M,
          disabled: true
        });
      case s.V.PROVIDER_ERRORED:
        return (0, r.jsxs)(r.Fragment, {
          children: [U ? (0, r.jsx)(V, {
            guildId: n,
            instance: t
          }) : (0, r.jsx)(G, {
            onClick: M,
            disabled: true
          }), (0, r.jsx)(A, {
            guildId: n,
            instance: t
          })]
        });
      default:
        return null
    }
  }, [t, M, U, F, n]), q = a.useMemo(() => {
    if (null == t.gameConfig) return null;
    let e = [t.gameConfig.type, t.gameConfig.version].filter(x.lm).join(" ");
    return "" === e ? null : e
  }, [t.gameConfig]), H = a.useMemo(() => {
    switch (t.status) {
      case s.V.STARTING:
        if (null == t.gameServerPanelUrl) return E.intl.string(T.default["1A3US2"]);
        return null;
      case s.V.STARTUP_FAILED:
        return E.intl.string(U ? T.default.Mdoc98 : T.default.osZiRl);
      case s.V.MISSING_STOCK:
        return E.intl.string(U ? T.default.YCakvM : T.default.osZiRl);
      case s.V.PROVIDER_ERRORED:
        return E.intl.string(U ? T.default.NRyCeY : T.default.osZiRl);
      default:
        return null
    }
  }, [t.status, t.gameServerPanelUrl, U]);
  return (0, r.jsxs)(j.Z, {
    actions: K,
    children: [(0, r.jsxs)("div", {
      className: w.serverDetailsContainer,
      children: [(0, r.jsxs)("div", {
        className: w.serverHeader,
        children: [(0, r.jsx)("img", {
          src: null != z ? z : "",
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
            children: [null == B ? true : B.name, q].filter(x.lm).join(" • ")
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
              children: E.intl.string(T.default.bDdi7n)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != t.onlineConnectionsCount && t.onlineConnectionsCount >= 0 ? t.onlineConnectionsCount : "—", " / ").concat(null != t.maxConnectionsCount && t.maxConnectionsCount >= 0 ? t.maxConnectionsCount : "—")
            })]
          }), (0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: E.intl.string(T.default["7phwMG"])
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
                  "aria-label": E.intl.string(E.t.OpuAlK),
                  onClick: W,
                  children: L ? (0, r.jsx)(u.dz2, {
                    size: "sm"
                  }) : (0, r.jsx)(u.TIy, {
                    size: "sm"
                  })
                })]
              }) : null != t.providerType && (0, r.jsx)(g.Z, {
                onClick: () => {
                  (0, N.Z)({
                    provider: t.providerType,
                    onAccept: () => {
                      S(P.L.TAKE_ACTION), W()
                    }
                  })
                },
                children: E.intl.string(T.default["f+F7H3"])
              })
            })]
          }), (0, r.jsxs)("div", {
            className: w.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: E.intl.string(T.default["n+ZX7y"])
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
                      return E.intl.string(T.default.SgjaXI);
                    case s.V.STARTUP_FAILED:
                      return E.intl.string(T.default["7C9Z3s"]);
                    case s.V.OFFLINE:
                      return E.intl.string(T.default["Ys/RrB"]);
                    case s.V.ONLINE:
                      return E.intl.string(T.default["60kAzo"]);
                    case s.V.DELETED:
                      return E.intl.string(T.default.Z1NZwX);
                    case s.V.MISSING_STOCK:
                      return E.intl.string(T.default["+a5G2l"]);
                    case s.V.SLEEPING:
                      return E.intl.string(T.default.y0z8ZO);
                    case s.V.PROVIDER_ERRORED:
                      return E.intl.string(T.default["6g/oji"]);
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
              children: E.intl.string(T.default.mJlz3T)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: null != t.regionName ? t.regionName : "—"
            })]
          })]
        })
      })]
    }), U && (0, r.jsx)("div", {
      className: w.overflowMenu,
      children: (0, r.jsx)(h.Z, {
        guildId: n,
        instance: t
      })
    }), (0, r.jsx)("div", {
      className: w.imageBackground,
      children: (0, r.jsx)(p.b, {
        imageUrl: null != z ? z : ""
      })
    })]
  })
}