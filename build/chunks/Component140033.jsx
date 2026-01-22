/** Chunk was on 19750 **/
/** chunk id: 140033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => V
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk390544 = require("./390544.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk95035 = require("./95035.jsx"),
  Chunk760751 = require("./760751.js"),
  Chunk403362 = require("./403362.js"),
  Chunk307600 = require("./307600.js"),
  Chunk363487 = require("./363487.js"),
  Chunk665171 = require("./665171.js"),
  Chunk397400 = require("./397400.js"),
  Chunk165655 = require("./165655.jsx"),
  Chunk496587 = require("./496587.jsx"),
  Chunk684610 = require("./684610.jsx"),
  Chunk500897 = require("./500897.js"),
  Chunk225180 = require("./225180.js"),
  Chunk117265 = require("./117265.js"),
  Chunk365003 = require("./365003.js"),
  Chunk680127 = require("./680127.jsx"),
  Chunk858192 = require("./858192.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk748137 = require("./748137.js");

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function k(e) {
  let {
    guildId: t,
    instance: n
  } = e, [l, i] = a.useState(false), s = a.useCallback(() => {
    i(true), (0, p.as)(t, n.id).finally(() => {
      i(false)
    })
  }, [t, n.id]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: R.intl.string(C.default.TMzy7d),
    variant: "secondary",
    loading: l,
    onClick: s
  })
}

function G(e) {
  return (0, r.jsx)(u.Button, w({
    fullWidth: true,
    text: R.intl.string(C.default.tkbVdf),
    variant: "secondary",
    icon: u.I9m,
    iconPosition: "end"
  }, e))
}

function D(e) {
  return (0, r.jsx)(u.Button, w({
    fullWidth: true,
    text: R.intl.string(C.default["fQCcM/"]),
    variant: "primary"
  }, e))
}

function L(e) {
  return (0, r.jsx)(u.Button, w({
    fullWidth: true,
    text: R.intl.string(C.default.gWMqnI),
    variant: "primary",
    icon: u.I9m,
    iconPosition: "end"
  }, e))
}

function U(e) {
  let {
    guildId: t
  } = e, [n, l] = a.useState(false), i = a.useCallback(() => {
    l(true), (0, p.cq)(t).finally(() => {
      l(false)
    })
  }, [t]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: R.intl.string(C.default.BLEx3k),
    variant: "secondary",
    loading: n,
    onClick: i
  })
}

function B(e) {
  let {
    instance: t
  } = e, n = (0, E.A)(t.providerType, t.gameServerPanelUrl);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: R.intl.string(C.default.bBkeMs),
    variant: "secondary",
    onClick: () => {
      null != n && (0, v.h)({
        href: n
      })
    }
  })
}

function V(e) {
  let {
    guildId: t,
    instance: n
  } = e, l = (0, A.A)(n), [p, w] = (0, b.kn)([o.M.GAME_SERVER_HOSTING_PORTKEY_TOS]), V = p !== o.M.GAME_SERVER_HOSTING_PORTKEY_TOS, F = (0, c.bG)([x.A], () => x.A.getDetectableGame(n.gameId)), q = (0, E.A)(n.providerType, n.gameServerPanelUrl), W = a.useCallback(() => {
    var e;
    (0, h.Ai)(t, n.gameId, null != (e = null == F ? true : F.name) ? e : "", n.id), V || null == n.providerType ? (0, I.A)(t, n) : (0, T.A)({
      provider: n.providerType,
      onAccept: () => {
        w(P.i.TAKE_ACTION), (0, I.A)(t, n)
      }
    })
  }, [n, V, w, t, null == F ? true : F.name]), {
    handleCopyServerIp: z,
    animateCopyIcon: H
  } = (0, _.A)(t, n.id, f.A.GAME_SERVER_GAME, null != l ? l : ""), K = (0, N.A)(n.gameId, "cover"), Y = (0, g.A)(t), Z = a.useCallback(() => {
    var e;
    (0, h.f7)(t, n.id), (0, v.h)({
      href: null != (e = n.gameServerPanelUrl) ? e : ""
    })
  }, [n.gameServerPanelUrl, t, n.id]), Q = a.useMemo(() => {
    switch (n.status) {
      case s.M.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(k, {
            guildId: t,
            instance: n
          }), Y && (0, r.jsx)(G, {
            onClick: Z,
            disabled: null == n.gameServerPanelUrl
          })]
        });
      case s.M.OFFLINE:
      case s.M.ONLINE:
      case s.M.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(D, {
            onClick: W
          }), Y && (0, r.jsx)(G, {
            onClick: Z,
            disabled: null == n.gameServerPanelUrl
          })]
        });
      case s.M.STARTUP_FAILED:
      case s.M.MISSING_STOCK:
        return Y ? (0, r.jsx)(L, {
          onClick: Z
        }) : (0, r.jsx)(D, {
          onClick: W,
          disabled: true
        });
      case s.M.DELETED:
        return Y ? (0, r.jsx)(G, {
          onClick: Z,
          disabled: null == n.gameServerPanelUrl
        }) : (0, r.jsx)(D, {
          onClick: W,
          disabled: true
        });
      case s.M.PROVIDER_ERRORED:
        return (0, r.jsxs)(r.Fragment, {
          children: [Y && null != q ? (0, r.jsx)(B, {
            guildId: t,
            instance: n
          }) : (0, r.jsx)(D, {
            onClick: W,
            disabled: true
          }), (0, r.jsx)(U, {
            guildId: t,
            instance: n
          })]
        });
      default:
        return null
    }
  }, [n, W, Y, Z, t, q]), $ = a.useMemo(() => {
    if (null == n.gameConfig) return null;
    let e = [n.gameConfig.type, n.gameConfig.version].filter(j.Vq).join(" ");
    return "" === e ? null : e
  }, [n.gameConfig]), X = a.useMemo(() => {
    switch (n.status) {
      case s.M.STARTING:
        if (null == n.gameServerPanelUrl) return R.intl.string(C.default["1A3US2"]);
        return null;
      case s.M.STARTUP_FAILED:
        return R.intl.string(Y ? C.default.Mdoc98 : C.default.osZiRl);
      case s.M.MISSING_STOCK:
        return R.intl.string(Y ? C.default.YCakvM : C.default.osZiRl);
      case s.M.PROVIDER_ERRORED:
        return R.intl.string(Y ? C.default.NRyCeY : C.default.osZiRl);
      default:
        return null
    }
  }, [n.status, n.gameServerPanelUrl, Y]);
  return (0, r.jsxs)(O.A, {
    actions: Q,
    children: [(0, r.jsxs)("div", {
      className: M.serverDetailsContainer,
      children: [(0, r.jsxs)("div", {
        className: M.serverHeader,
        children: [(0, r.jsx)("img", {
          src: null != K ? K : "",
          alt: "",
          className: M.gameImage
        }), (0, r.jsxs)("div", {
          className: M.serverInfo,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: n.name
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: [null == F ? true : F.name, $].filter(j.Vq).join(" • ")
          })]
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
          className: M.detailsGrid,
          children: [(0, r.jsxs)("div", {
            className: M.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.intl.string(C.default.bDdi7n)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0 ? n.onlineConnectionsCount : "—", " / ").concat(null != n.maxConnectionsCount && n.maxConnectionsCount >= 0 ? n.maxConnectionsCount : "—")
            })]
          }), (0, r.jsxs)("div", {
            className: M.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.intl.string(C.default["7phwMG"])
            }), (0, r.jsx)("div", {
              className: M.serverIpContainer,
              children: null == l ? (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: "—"
              }) : V ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  children: l
                }), (0, r.jsx)(u.DUT, {
                  className: M.copyButton,
                  "aria-label": R.intl.string(R.t.OpuAlK),
                  onClick: z,
                  children: H ? (0, r.jsx)(u.A9s, {
                    size: "sm"
                  }) : (0, r.jsx)(u.TdU, {
                    size: "sm"
                  })
                })]
              }) : null != n.providerType && (0, r.jsx)(m.A, {
                onClick: () => {
                  (0, T.A)({
                    provider: n.providerType,
                    onAccept: () => {
                      w(P.i.TAKE_ACTION), z()
                    }
                  })
                },
                children: R.intl.string(C.default["f+F7H3"])
              })
            })]
          }), (0, r.jsxs)("div", {
            className: M.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.intl.string(C.default["n+ZX7y"])
            }), (0, r.jsxs)("div", {
              className: M.statusContainer,
              children: [n.status === s.M.STARTING ? (0, r.jsx)(u.y$y, {
                type: u.tVU.SPINNING_CIRCLE_SIMPLE,
                className: M.statusLoading
              }) : (0, r.jsx)("span", {
                className: i()(M.statusIndicator, null != n.status && M[n.status])
              }), (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: function(e) {
                  switch (e) {
                    case s.M.STARTING:
                      return R.intl.string(C.default.SgjaXI);
                    case s.M.STARTUP_FAILED:
                      return R.intl.string(C.default["7C9Z3s"]);
                    case s.M.OFFLINE:
                      return R.intl.string(C.default["Ys/RrB"]);
                    case s.M.ONLINE:
                      return R.intl.string(C.default["60kAzo"]);
                    case s.M.DELETED:
                      return R.intl.string(C.default.Z1NZwX);
                    case s.M.MISSING_STOCK:
                      return R.intl.string(C.default["+a5G2l"]);
                    case s.M.SLEEPING:
                      return R.intl.string(C.default.y0z8ZO);
                    case s.M.PROVIDER_ERRORED:
                      return R.intl.string(C.default["6g/oji"]);
                    default:
                      return "—"
                  }
                }(n.status)
              }), null != X && (0, r.jsx)(d.m_, {
                position: "top",
                text: X,
                children: (0, r.jsx)(u.cBN, {
                  className: M.statusTooltipIcon,
                  size: "xs"
                })
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: M.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.intl.string(C.default.mJlz3T)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: null != n.regionName ? n.regionName : "—"
            })]
          })]
        })
      })]
    }), Y && (0, r.jsx)("div", {
      className: M.overflowMenu,
      children: (0, r.jsx)(S.A, {
        guildId: t,
        instance: n
      })
    }), (0, r.jsx)("div", {
      className: M.imageBackground,
      children: (0, r.jsx)(y.T, {
        imageUrl: null != K ? K : ""
      })
    })]
  })
}