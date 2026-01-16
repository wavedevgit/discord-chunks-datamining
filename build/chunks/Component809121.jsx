/** Chunk was on 62934 **/
/** chunk id: 809121, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => W
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk404577 = require("./404577.js"),
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
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk243115 = require("./243115.js");

function k(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(n) {
      var a;
      a = t[n], n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = a
    })
  }
  return e
}

function G(e) {
  let {
    guildId: n,
    instance: t
  } = e, [i, l] = r.useState(false), s = r.useCallback(() => {
    l(true), (0, p.WX)(n, t.id).finally(() => {
      l(false)
    })
  }, [n, t.id]);
  return (0, a.jsx)(u.Button, {
    fullWidth: true,
    text: Z.intl.string(w.default.TMzy7d),
    variant: "secondary",
    loading: i,
    onClick: s
  })
}

function A(e) {
  return (0, a.jsx)(u.Button, k({
    fullWidth: true,
    text: Z.intl.string(w.default.tkbVdf),
    variant: "secondary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function D(e) {
  return (0, a.jsx)(u.Button, k({
    fullWidth: true,
    text: Z.intl.string(w.default["fQCcM/"]),
    variant: "primary"
  }, e))
}

function M(e) {
  return (0, a.jsx)(u.Button, k({
    fullWidth: true,
    text: Z.intl.string(w.default.gWMqnI),
    variant: "primary",
    icon: u.Gr1,
    iconPosition: "end"
  }, e))
}

function V(e) {
  let {
    guildId: n
  } = e, [t, i] = r.useState(false), l = r.useCallback(() => {
    i(true), (0, p.mF)(n).finally(() => {
      i(false)
    })
  }, [n]);
  return (0, a.jsx)(u.Button, {
    fullWidth: true,
    text: Z.intl.string(w.default.BLEx3k),
    variant: "secondary",
    loading: t,
    onClick: l
  })
}

function B(e) {
  let {
    instance: n
  } = e, t = (0, S.Z)(n.providerType, n.gameServerPanelUrl);
  return (0, a.jsx)(u.Button, {
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
  } = e, i = (0, N.Z)(t), [p, k] = (0, g.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), W = p !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, L = (0, o.e7)([b.Z], () => b.Z.getDetectableGame(t.gameId)), U = (0, S.Z)(t.providerType, t.gameServerPanelUrl), z = r.useCallback(() => {
    var e;
    (0, h.wz)(n, t.gameId, null != (e = null == L ? true : L.name) ? e : "", t.id), W || null == t.providerType ? (0, P.Z)(n, t) : (0, E.Z)({
      provider: t.providerType,
      onAccept: () => {
        k(T.L.TAKE_ACTION), (0, P.Z)(n, t)
      }
    })
  }, [t, W, k, n, null == L ? true : L.name]), {
    handleCopyServerIp: F,
    animateCopyIcon: K
  } = (0, _.Z)(n, t.id, m.Z.GAME_SERVER_GAME, null != i ? i : ""), X = (0, I.Z)(t.gameId, "cover"), q = (0, j.Z)(n), H = r.useCallback(() => {
    var e;
    (0, h.$M)(n, t.id), (0, v.q)({
      href: null != (e = t.gameServerPanelUrl) ? e : ""
    })
  }, [t.gameServerPanelUrl, n, t.id]), Y = r.useMemo(() => {
    switch (t.status) {
      case s.V.SLEEPING:
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(G, {
            guildId: n,
            instance: t
          }), q && (0, a.jsx)(A, {
            onClick: H,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.OFFLINE:
      case s.V.ONLINE:
      case s.V.STARTING:
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(D, {
            onClick: z
          }), q && (0, a.jsx)(A, {
            onClick: H,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.STARTUP_FAILED:
      case s.V.MISSING_STOCK:
        return q ? (0, a.jsx)(M, {
          onClick: H
        }) : (0, a.jsx)(D, {
          onClick: z,
          disabled: true
        });
      case s.V.DELETED:
        return q ? (0, a.jsx)(A, {
          onClick: H,
          disabled: null == t.gameServerPanelUrl
        }) : (0, a.jsx)(D, {
          onClick: z,
          disabled: true
        });
      case s.V.PROVIDER_ERRORED:
        return (0, a.jsxs)(a.Fragment, {
          children: [q && null != U ? (0, a.jsx)(B, {
            guildId: n,
            instance: t
          }) : (0, a.jsx)(D, {
            onClick: z,
            disabled: true
          }), (0, a.jsx)(V, {
            guildId: n,
            instance: t
          })]
        });
      default:
        return null
    }
  }, [t, z, q, H, n, U]), J = r.useMemo(() => {
    if (null == t.gameConfig) return null;
    let e = [t.gameConfig.type, t.gameConfig.version].filter(x.lm).join(" ");
    return "" === e ? null : e
  }, [t.gameConfig]), $ = r.useMemo(() => {
    switch (t.status) {
      case s.V.STARTING:
        if (null == t.gameServerPanelUrl) return Z.intl.string(w.default["1A3US2"]);
        return null;
      case s.V.STARTUP_FAILED:
        return Z.intl.string(q ? w.default.Mdoc98 : w.default.osZiRl);
      case s.V.MISSING_STOCK:
        return Z.intl.string(q ? w.default.YCakvM : w.default.osZiRl);
      case s.V.PROVIDER_ERRORED:
        return Z.intl.string(q ? w.default.NRyCeY : w.default.osZiRl);
      default:
        return null
    }
  }, [t.status, t.gameServerPanelUrl, q]);
  return (0, a.jsxs)(y.Z, {
    actions: Y,
    children: [(0, a.jsxs)("div", {
      className: R.serverDetailsContainer,
      children: [(0, a.jsxs)("div", {
        className: R.serverHeader,
        children: [(0, a.jsx)("img", {
          src: null != X ? X : "",
          alt: "",
          className: R.gameImage
        }), (0, a.jsxs)("div", {
          className: R.serverInfo,
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: t.name
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: [null == L ? true : L.name, J].filter(x.lm).join(" • ")
          })]
        })]
      }), (0, a.jsx)("div", {
        children: (0, a.jsxs)("div", {
          className: R.detailsGrid,
          children: [(0, a.jsxs)("div", {
            className: R.detailItem,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: Z.intl.string(w.default.bDdi7n)
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != t.onlineConnectionsCount && t.onlineConnectionsCount >= 0 ? t.onlineConnectionsCount : "—", " / ").concat(null != t.maxConnectionsCount && t.maxConnectionsCount >= 0 ? t.maxConnectionsCount : "—")
            })]
          }), (0, a.jsxs)("div", {
            className: R.detailItem,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: Z.intl.string(w.default["7phwMG"])
            }), (0, a.jsx)("div", {
              className: R.serverIpContainer,
              children: null == i ? (0, a.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: "—"
              }) : W ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  children: i
                }), (0, a.jsx)(u.P3F, {
                  className: R.copyButton,
                  "aria-label": Z.intl.string(Z.t.OpuAlK),
                  onClick: F,
                  children: K ? (0, a.jsx)(u.dz2, {
                    size: "sm"
                  }) : (0, a.jsx)(u.TIy, {
                    size: "sm"
                  })
                })]
              }) : null != t.providerType && (0, a.jsx)(f.Z, {
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
          }), (0, a.jsxs)("div", {
            className: R.detailItem,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: Z.intl.string(w.default["n+ZX7y"])
            }), (0, a.jsxs)("div", {
              className: R.statusContainer,
              children: [t.status === s.V.STARTING ? (0, a.jsx)(u.$jN, {
                type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                className: R.statusLoading
              }) : (0, a.jsx)("span", {
                className: l()(R.statusIndicator, null != t.status && R[t.status])
              }), (0, a.jsx)(u.Text, {
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
              }), null != $ && (0, a.jsx)(d.u, {
                position: "top",
                text: $,
                children: (0, a.jsx)(u.idN, {
                  className: R.statusTooltipIcon,
                  size: "xs"
                })
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: R.detailItem,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: Z.intl.string(w.default.mJlz3T)
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: null != t.regionName ? t.regionName : "—"
            })]
          })]
        })
      })]
    }), q && (0, a.jsx)("div", {
      className: R.overflowMenu,
      children: (0, a.jsx)(O.Z, {
        guildId: n,
        instance: t
      })
    }), (0, a.jsx)("div", {
      className: R.imageBackground,
      children: (0, a.jsx)(C.b, {
        imageUrl: null != X ? X : ""
      })
    })]
  })
}