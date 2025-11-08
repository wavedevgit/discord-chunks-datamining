/** Chunk was on 62934 **/
/** chunk id: 809121, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => W
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
  Chunk100527 = require("./100527.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk77498 = require("./77498.js"),
  Chunk823379 = require("./823379.js"),
  Chunk49012 = require("./49012.js"),
  Chunk639777 = require("./639777.js"),
  Chunk905551 = require("./905551.js"),
  Chunk578756 = require("./578756.js"),
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
  Chunk269794 = require("./269794.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500104 = require("./500104.js");

function Z(e) {
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

function G(e) {
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
    text: R.intl.string(w.default.TMzy7d),
    variant: "secondary",
    loading: i,
    onClick: s
  })
}

function A(e) {
  return (0, r.jsx)(u.Button, Z({
    fullWidth: true,
    text: R.intl.string(w.default.tkbVdf),
    variant: "secondary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function D(e) {
  return (0, r.jsx)(u.Button, Z({
    fullWidth: true,
    text: R.intl.string(w.default["fQCcM/"]),
    variant: "primary"
  }, e))
}

function B(e) {
  return (0, r.jsx)(u.Button, Z({
    fullWidth: true,
    text: R.intl.string(w.default.gWMqnI),
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
    text: R.intl.string(w.default.BLEx3k),
    variant: "secondary",
    loading: t,
    onClick: l
  })
}

function M(e) {
  let {
    instance: n
  } = e;
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: R.intl.string(w.default.bBkeMs),
    variant: "secondary",
    onClick: () => {
      (0, v.q)({
        href: E.uz[n.providerType]
      })
    }
  })
}

function W(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, N.Z)(t), [j, E] = (0, g.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), Z = j !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, W = (0, o.e7)([x.Z], () => x.Z.getDetectableGame(t.gameId)), L = a.useCallback(() => {
    var e;
    (0, p.wz)(n, t.gameId, null != (e = null == W ? true : W.name) ? e : "", t.id), Z || null == t.providerType ? (0, S.Z)(n, t) : (0, P.Z)({
      provider: t.providerType,
      onAccept: () => {
        E(T.L.TAKE_ACTION), (0, S.Z)(n, t)
      }
    })
  }, [t, Z, E, n, null == W ? true : W.name]), {
    handleCopyServerIp: z,
    animateCopyIcon: U
  } = (0, O.Z)(n, t.id, m.Z.GAME_SERVER_GAME, null != i ? i : ""), F = (0, I.Z)(t.gameId, "cover"), K = (0, b.Z)(n), q = a.useCallback(() => {
    var e;
    (0, p.$M)(n, t.id), (0, v.q)({
      href: null != (e = t.gameServerPanelUrl) ? e : ""
    })
  }, [t.gameServerPanelUrl, n, t.id]), H = a.useMemo(() => {
    switch (t.status) {
      case s.V.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(G, {
            guildId: n,
            instance: t
          }), K && (0, r.jsx)(A, {
            onClick: q,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.OFFLINE:
      case s.V.ONLINE:
      case s.V.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(D, {
            onClick: L
          }), K && (0, r.jsx)(A, {
            onClick: q,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.STARTUP_FAILED:
      case s.V.MISSING_STOCK:
        return K ? (0, r.jsx)(B, {
          onClick: q
        }) : (0, r.jsx)(D, {
          onClick: L,
          disabled: true
        });
      case s.V.DELETED:
        return K ? (0, r.jsx)(A, {
          onClick: q,
          disabled: null == t.gameServerPanelUrl
        }) : (0, r.jsx)(D, {
          onClick: L,
          disabled: true
        });
      case s.V.PROVIDER_ERRORED:
        return (0, r.jsxs)(r.Fragment, {
          children: [K ? (0, r.jsx)(M, {
            guildId: n,
            instance: t
          }) : (0, r.jsx)(D, {
            onClick: L,
            disabled: true
          }), (0, r.jsx)(V, {
            guildId: n,
            instance: t
          })]
        });
      default:
        return null
    }
  }, [t, L, K, q, n]), X = a.useMemo(() => {
    if (null == t.gameConfig) return null;
    let e = [t.gameConfig.type, t.gameConfig.version].filter(_.lm).join(" ");
    return "" === e ? null : e
  }, [t.gameConfig]), Y = a.useMemo(() => {
    switch (t.status) {
      case s.V.STARTING:
        if (null == t.gameServerPanelUrl) return R.intl.string(w.default["1A3US2"]);
        return null;
      case s.V.STARTUP_FAILED:
        return R.intl.string(K ? w.default.Mdoc98 : w.default.osZiRl);
      case s.V.MISSING_STOCK:
        return R.intl.string(K ? w.default.YCakvM : w.default.osZiRl);
      case s.V.PROVIDER_ERRORED:
        return R.intl.string(K ? w.default.NRyCeY : w.default.osZiRl);
      default:
        return null
    }
  }, [t.status, t.gameServerPanelUrl, K]);
  return (0, r.jsxs)(y.Z, {
    actions: H,
    children: [(0, r.jsxs)("div", {
      className: k.serverDetailsContainer,
      children: [(0, r.jsxs)("div", {
        className: k.serverHeader,
        children: [(0, r.jsx)("img", {
          src: null != F ? F : "",
          alt: "",
          className: k.gameImage
        }), (0, r.jsxs)("div", {
          className: k.serverInfo,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: t.name
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-tertiary",
            children: [null == W ? true : W.name, X].filter(_.lm).join(" • ")
          })]
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
          className: k.detailsGrid,
          children: [(0, r.jsxs)("div", {
            className: k.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.intl.string(w.default.bDdi7n)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != t.onlineConnectionsCount && t.onlineConnectionsCount >= 0 ? t.onlineConnectionsCount : "—", " / ").concat(null != t.maxConnectionsCount && t.maxConnectionsCount >= 0 ? t.maxConnectionsCount : "—")
            })]
          }), (0, r.jsxs)("div", {
            className: k.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.intl.string(w.default["7phwMG"])
            }), (0, r.jsx)("div", {
              className: k.serverIpContainer,
              children: null == i ? (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: "—"
              }) : Z ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  children: i
                }), (0, r.jsx)(u.P3F, {
                  className: k.copyButton,
                  "aria-label": R.intl.string(R.t.OpuAlK),
                  onClick: z,
                  children: U ? (0, r.jsx)(u.dz2, {
                    size: "sm"
                  }) : (0, r.jsx)(u.TIy, {
                    size: "sm"
                  })
                })]
              }) : null != t.providerType && (0, r.jsx)(f.Z, {
                onClick: () => {
                  (0, P.Z)({
                    provider: t.providerType,
                    onAccept: () => {
                      E(T.L.TAKE_ACTION), z()
                    }
                  })
                },
                children: R.intl.string(w.default["f+F7H3"])
              })
            })]
          }), (0, r.jsxs)("div", {
            className: k.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.intl.string(w.default["n+ZX7y"])
            }), (0, r.jsxs)("div", {
              className: k.statusContainer,
              children: [t.status === s.V.STARTING ? (0, r.jsx)(u.$jN, {
                type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                className: k.statusLoading
              }) : (0, r.jsx)("span", {
                className: l()(k.statusIndicator, null != t.status && k[t.status])
              }), (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: function(e) {
                  switch (e) {
                    case s.V.STARTING:
                      return R.intl.string(w.default.SgjaXI);
                    case s.V.STARTUP_FAILED:
                      return R.intl.string(w.default["7C9Z3s"]);
                    case s.V.OFFLINE:
                      return R.intl.string(w.default["Ys/RrB"]);
                    case s.V.ONLINE:
                      return R.intl.string(w.default["60kAzo"]);
                    case s.V.DELETED:
                      return R.intl.string(w.default.Z1NZwX);
                    case s.V.MISSING_STOCK:
                      return R.intl.string(w.default["+a5G2l"]);
                    case s.V.SLEEPING:
                      return R.intl.string(w.default.y0z8ZO);
                    case s.V.PROVIDER_ERRORED:
                      return R.intl.string(w.default["6g/oji"]);
                    default:
                      return "—"
                  }
                }(t.status)
              }), null != Y && (0, r.jsx)(d.u, {
                position: "top",
                text: Y,
                children: (0, r.jsx)(u.idN, {
                  className: k.statusTooltipIcon,
                  size: "xs"
                })
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: k.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.intl.string(w.default.mJlz3T)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: null != t.regionName ? t.regionName : "—"
            })]
          })]
        })
      })]
    }), K && (0, r.jsx)("div", {
      className: k.overflowMenu,
      children: (0, r.jsx)(C.Z, {
        guildId: n,
        instance: t
      })
    }), (0, r.jsx)("div", {
      className: k.imageBackground,
      children: (0, r.jsx)(h.b, {
        imageUrl: null != F ? F : ""
      })
    })]
  })
}