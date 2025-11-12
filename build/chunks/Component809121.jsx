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
  Chunk47695 = require("./47695.js"),
  Chunk329871 = require("./329871.jsx"),
  Chunk110381 = require("./110381.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk269794 = require("./269794.js"),
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

function G(e) {
  let {
    guildId: n,
    instance: t
  } = e, [i, l] = a.useState(false), s = a.useCallback(() => {
    l(true), (0, p.WX)(n, t.id).finally(() => {
      l(false)
    })
  }, [n, t.id]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: Z.intl.string(w.default.TMzy7d),
    variant: "secondary",
    loading: i,
    onClick: s
  })
}

function A(e) {
  return (0, r.jsx)(u.Button, k({
    fullWidth: true,
    text: Z.intl.string(w.default.tkbVdf),
    variant: "secondary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function D(e) {
  return (0, r.jsx)(u.Button, k({
    fullWidth: true,
    text: Z.intl.string(w.default["fQCcM/"]),
    variant: "primary"
  }, e))
}

function M(e) {
  return (0, r.jsx)(u.Button, k({
    fullWidth: true,
    text: Z.intl.string(w.default.gWMqnI),
    variant: "primary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function B(e) {
  let {
    guildId: n
  } = e, [t, i] = a.useState(false), l = a.useCallback(() => {
    i(true), (0, p.mF)(n).finally(() => {
      i(false)
    })
  }, [n]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: Z.intl.string(w.default.BLEx3k),
    variant: "secondary",
    loading: t,
    onClick: l
  })
}

function V(e) {
  let {
    instance: n
  } = e, t = (0, N.Z)(n.providerType, n.gameServerPanelUrl);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: Z.intl.string(w.default.bBkeMs),
    variant: "secondary",
    onClick: () => {
      null != t && (0, v.q)({
        href: t
      })
    }
  })
}

function W(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, S.Z)(t), [p, k] = (0, g.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), W = p !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, L = (0, o.e7)([x.Z], () => x.Z.getDetectableGame(t.gameId)), U = (0, N.Z)(t.providerType, t.gameServerPanelUrl), z = a.useCallback(() => {
    var e;
    (0, j.wz)(n, t.gameId, null != (e = null == L ? true : L.name) ? e : "", t.id), W || null == t.providerType ? (0, P.Z)(n, t) : (0, E.Z)({
      provider: t.providerType,
      onAccept: () => {
        k(T.L.TAKE_ACTION), (0, P.Z)(n, t)
      }
    })
  }, [t, W, k, n, null == L ? true : L.name]), {
    handleCopyServerIp: F,
    animateCopyIcon: K
  } = (0, O.Z)(n, t.id, m.Z.GAME_SERVER_GAME, null != i ? i : ""), q = (0, I.Z)(t.gameId, "cover"), H = (0, b.Z)(n), X = a.useCallback(() => {
    var e;
    (0, j.$M)(n, t.id), (0, v.q)({
      href: null != (e = t.gameServerPanelUrl) ? e : ""
    })
  }, [t.gameServerPanelUrl, n, t.id]), Y = a.useMemo(() => {
    switch (t.status) {
      case s.V.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(G, {
            guildId: n,
            instance: t
          }), H && (0, r.jsx)(A, {
            onClick: X,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.OFFLINE:
      case s.V.ONLINE:
      case s.V.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(D, {
            onClick: z
          }), H && (0, r.jsx)(A, {
            onClick: X,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.STARTUP_FAILED:
      case s.V.MISSING_STOCK:
        return H ? (0, r.jsx)(M, {
          onClick: X
        }) : (0, r.jsx)(D, {
          onClick: z,
          disabled: true
        });
      case s.V.DELETED:
        return H ? (0, r.jsx)(A, {
          onClick: X,
          disabled: null == t.gameServerPanelUrl
        }) : (0, r.jsx)(D, {
          onClick: z,
          disabled: true
        });
      case s.V.PROVIDER_ERRORED:
        return (0, r.jsxs)(r.Fragment, {
          children: [H && null != U ? (0, r.jsx)(V, {
            guildId: n,
            instance: t
          }) : (0, r.jsx)(D, {
            onClick: z,
            disabled: true
          }), (0, r.jsx)(B, {
            guildId: n,
            instance: t
          })]
        });
      default:
        return null
    }
  }, [t, z, H, X, n, U]), J = a.useMemo(() => {
    if (null == t.gameConfig) return null;
    let e = [t.gameConfig.type, t.gameConfig.version].filter(_.lm).join(" ");
    return "" === e ? null : e
  }, [t.gameConfig]), Q = a.useMemo(() => {
    switch (t.status) {
      case s.V.STARTING:
        if (null == t.gameServerPanelUrl) return Z.intl.string(w.default["1A3US2"]);
        return null;
      case s.V.STARTUP_FAILED:
        return Z.intl.string(H ? w.default.Mdoc98 : w.default.osZiRl);
      case s.V.MISSING_STOCK:
        return Z.intl.string(H ? w.default.YCakvM : w.default.osZiRl);
      case s.V.PROVIDER_ERRORED:
        return Z.intl.string(H ? w.default.NRyCeY : w.default.osZiRl);
      default:
        return null
    }
  }, [t.status, t.gameServerPanelUrl, H]);
  return (0, r.jsxs)(C.Z, {
    actions: Y,
    children: [(0, r.jsxs)("div", {
      className: R.serverDetailsContainer,
      children: [(0, r.jsxs)("div", {
        className: R.serverHeader,
        children: [(0, r.jsx)("img", {
          src: null != q ? q : "",
          alt: "",
          className: R.gameImage
        }), (0, r.jsxs)("div", {
          className: R.serverInfo,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: t.name
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-tertiary",
            children: [null == L ? true : L.name, J].filter(_.lm).join(" • ")
          })]
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
          className: R.detailsGrid,
          children: [(0, r.jsxs)("div", {
            className: R.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: Z.intl.string(w.default.bDdi7n)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != t.onlineConnectionsCount && t.onlineConnectionsCount >= 0 ? t.onlineConnectionsCount : "—", " / ").concat(null != t.maxConnectionsCount && t.maxConnectionsCount >= 0 ? t.maxConnectionsCount : "—")
            })]
          }), (0, r.jsxs)("div", {
            className: R.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: Z.intl.string(w.default["7phwMG"])
            }), (0, r.jsx)("div", {
              className: R.serverIpContainer,
              children: null == i ? (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: "—"
              }) : W ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  children: i
                }), (0, r.jsx)(u.P3F, {
                  className: R.copyButton,
                  "aria-label": Z.intl.string(Z.t.OpuAlK),
                  onClick: F,
                  children: K ? (0, r.jsx)(u.dz2, {
                    size: "sm"
                  }) : (0, r.jsx)(u.TIy, {
                    size: "sm"
                  })
                })]
              }) : null != t.providerType && (0, r.jsx)(f.Z, {
                onClick: () => {
                  (0, E.Z)({
                    provider: t.providerType,
                    onAccept: () => {
                      k(T.L.TAKE_ACTION), F()
                    }
                  })
                },
                children: Z.intl.string(w.default["f+F7H3"])
              })
            })]
          }), (0, r.jsxs)("div", {
            className: R.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: Z.intl.string(w.default["n+ZX7y"])
            }), (0, r.jsxs)("div", {
              className: R.statusContainer,
              children: [t.status === s.V.STARTING ? (0, r.jsx)(u.$jN, {
                type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                className: R.statusLoading
              }) : (0, r.jsx)("span", {
                className: l()(R.statusIndicator, null != t.status && R[t.status])
              }), (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: function(e) {
                  switch (e) {
                    case s.V.STARTING:
                      return Z.intl.string(w.default.SgjaXI);
                    case s.V.STARTUP_FAILED:
                      return Z.intl.string(w.default["7C9Z3s"]);
                    case s.V.OFFLINE:
                      return Z.intl.string(w.default["Ys/RrB"]);
                    case s.V.ONLINE:
                      return Z.intl.string(w.default["60kAzo"]);
                    case s.V.DELETED:
                      return Z.intl.string(w.default.Z1NZwX);
                    case s.V.MISSING_STOCK:
                      return Z.intl.string(w.default["+a5G2l"]);
                    case s.V.SLEEPING:
                      return Z.intl.string(w.default.y0z8ZO);
                    case s.V.PROVIDER_ERRORED:
                      return Z.intl.string(w.default["6g/oji"]);
                    default:
                      return "—"
                  }
                }(t.status)
              }), null != Q && (0, r.jsx)(d.u, {
                position: "top",
                text: Q,
                children: (0, r.jsx)(u.idN, {
                  className: R.statusTooltipIcon,
                  size: "xs"
                })
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: R.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: Z.intl.string(w.default.mJlz3T)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: null != t.regionName ? t.regionName : "—"
            })]
          })]
        })
      })]
    }), H && (0, r.jsx)("div", {
      className: R.overflowMenu,
      children: (0, r.jsx)(y.Z, {
        guildId: n,
        instance: t
      })
    }), (0, r.jsx)("div", {
      className: R.imageBackground,
      children: (0, r.jsx)(h.b, {
        imageUrl: null != q ? q : ""
      })
    })]
  })
}