/** Chunk was on 19750 **/
/** chunk id: 140033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => W
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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

function M(e) {
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
  } = e, [i, l] = a.useState(false), s = a.useCallback(() => {
    l(true), (0, p.as)(t, n.id).finally(() => {
      l(false)
    })
  }, [t, n.id]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: w.intl.string(P.default.TMzy7d),
    variant: "secondary",
    loading: i,
    onClick: s
  })
}

function G(e) {
  return (0, r.jsx)(u.Button, M({
    fullWidth: true,
    text: w.intl.string(P.default.tkbVdf),
    variant: "secondary",
    icon: u.I9m,
    iconPosition: "end"
  }, e))
}

function D(e) {
  return (0, r.jsx)(u.Button, M({
    fullWidth: true,
    text: w.intl.string(P.default["fQCcM/"]),
    variant: "primary"
  }, e))
}

function L(e) {
  return (0, r.jsx)(u.Button, M({
    fullWidth: true,
    text: w.intl.string(P.default.gWMqnI),
    variant: "primary",
    icon: u.I9m,
    iconPosition: "end"
  }, e))
}

function U(e) {
  let {
    guildId: t
  } = e, [n, i] = a.useState(false), l = a.useCallback(() => {
    i(true), (0, p.cq)(t).finally(() => {
      i(false)
    })
  }, [t]);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: w.intl.string(P.default.BLEx3k),
    variant: "secondary",
    loading: n,
    onClick: l
  })
}

function B(e) {
  let {
    instance: t
  } = e, n = (0, I.A)(t.providerType, t.gameServerPanelUrl);
  return (0, r.jsx)(u.Button, {
    fullWidth: true,
    text: w.intl.string(P.default.bBkeMs),
    variant: "secondary",
    onClick: () => {
      null != n && (0, v.h)({
        href: n
      })
    }
  })
}

function W(e) {
  let {
    guildId: t,
    instance: n
  } = e, i = (0, A.A)(n), [p, M] = (0, g.kn)([c.M.GAME_SERVER_HOSTING_PORTKEY_TOS]), W = p !== c.M.GAME_SERVER_HOSTING_PORTKEY_TOS, V = (0, o.bG)([_.A], () => _.A.getDetectableGame(n.gameId)), F = (0, I.A)(n.providerType, n.gameServerPanelUrl), q = a.useCallback(() => {
    var e;
    (0, b.Ai)(t, n.gameId, null != (e = null == V ? true : V.name) ? e : "", n.id), W || null == n.providerType ? (0, C.A)(t, n) : (0, E.A)({
      provider: n.providerType,
      onAccept: () => {
        M(T.i.TAKE_ACTION), (0, C.A)(t, n)
      }
    })
  }, [n, W, M, t, null == V ? true : V.name]), {
    handleCopyServerIp: z,
    animateCopyIcon: H
  } = (0, S.A)(t, n.id, m.A.GAME_SERVER_GAME, null != i ? i : ""), K = (0, N.A)(n.gameId, "cover"), Z = (0, j.A)(t), Y = a.useCallback(() => {
    var e;
    (0, b.f7)(t, n.id), (0, v.h)({
      href: null != (e = n.gameServerPanelUrl) ? e : ""
    })
  }, [n.gameServerPanelUrl, t, n.id]), Q = a.useMemo(() => {
    switch (n.status) {
      case s.M.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(k, {
            guildId: t,
            instance: n
          }), Z && (0, r.jsx)(G, {
            onClick: Y,
            disabled: null == n.gameServerPanelUrl
          })]
        });
      case s.M.OFFLINE:
      case s.M.ONLINE:
      case s.M.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(D, {
            onClick: q
          }), Z && (0, r.jsx)(G, {
            onClick: Y,
            disabled: null == n.gameServerPanelUrl
          })]
        });
      case s.M.STARTUP_FAILED:
      case s.M.MISSING_STOCK:
        return Z ? (0, r.jsx)(L, {
          onClick: Y
        }) : (0, r.jsx)(D, {
          onClick: q,
          disabled: true
        });
      case s.M.DELETED:
        return Z ? (0, r.jsx)(G, {
          onClick: Y,
          disabled: null == n.gameServerPanelUrl
        }) : (0, r.jsx)(D, {
          onClick: q,
          disabled: true
        });
      case s.M.PROVIDER_ERRORED:
        return (0, r.jsxs)(r.Fragment, {
          children: [Z && null != F ? (0, r.jsx)(B, {
            guildId: t,
            instance: n
          }) : (0, r.jsx)(D, {
            onClick: q,
            disabled: true
          }), (0, r.jsx)(U, {
            guildId: t,
            instance: n
          })]
        });
      default:
        return null
    }
  }, [n, q, Z, Y, t, F]), $ = a.useMemo(() => {
    if (null == n.gameConfig) return null;
    let e = [n.gameConfig.type, n.gameConfig.version].filter(x.Vq).join(" ");
    return "" === e ? null : e
  }, [n.gameConfig]), X = a.useMemo(() => {
    switch (n.status) {
      case s.M.STARTING:
        if (null == n.gameServerPanelUrl) return w.intl.string(P.default["1A3US2"]);
        return null;
      case s.M.STARTUP_FAILED:
        return w.intl.string(Z ? P.default.Mdoc98 : P.default.osZiRl);
      case s.M.MISSING_STOCK:
        return w.intl.string(Z ? P.default.YCakvM : P.default.osZiRl);
      case s.M.PROVIDER_ERRORED:
        return w.intl.string(Z ? P.default.NRyCeY : P.default.osZiRl);
      default:
        return null
    }
  }, [n.status, n.gameServerPanelUrl, Z]);
  return (0, r.jsxs)(y.A, {
    actions: Q,
    children: [(0, r.jsxs)("div", {
      className: R.serverDetailsContainer,
      children: [(0, r.jsxs)("div", {
        className: R.serverHeader,
        children: [(0, r.jsx)("img", {
          src: null != K ? K : "",
          alt: "",
          className: R.gameImage
        }), (0, r.jsxs)("div", {
          className: R.serverInfo,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: n.name
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: [null == V ? true : V.name, $].filter(x.Vq).join(" • ")
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
              children: w.intl.string(P.default.bDdi7n)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0 ? n.onlineConnectionsCount : "—", " / ").concat(null != n.maxConnectionsCount && n.maxConnectionsCount >= 0 ? n.maxConnectionsCount : "—")
            })]
          }), (0, r.jsxs)("div", {
            className: R.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: w.intl.string(P.default["7phwMG"])
            }), (0, r.jsx)("div", {
              className: R.serverIpContainer,
              children: null == i ? (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: "—"
              }) : W ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  children: i
                }), (0, r.jsx)(u.DUT, {
                  className: R.copyButton,
                  "aria-label": w.intl.string(w.t.OpuAlK),
                  onClick: z,
                  children: H ? (0, r.jsx)(u.A9s, {
                    size: "sm"
                  }) : (0, r.jsx)(u.TdU, {
                    size: "sm"
                  })
                })]
              }) : null != n.providerType && (0, r.jsx)(f.A, {
                onClick: () => {
                  (0, E.A)({
                    provider: n.providerType,
                    onAccept: () => {
                      M(T.i.TAKE_ACTION), z()
                    }
                  })
                },
                children: w.intl.string(P.default["f+F7H3"])
              })
            })]
          }), (0, r.jsxs)("div", {
            className: R.detailItem,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: w.intl.string(P.default["n+ZX7y"])
            }), (0, r.jsxs)("div", {
              className: R.statusContainer,
              children: [n.status === s.M.STARTING ? (0, r.jsx)(u.y$y, {
                type: u.tVU.SPINNING_CIRCLE_SIMPLE,
                className: R.statusLoading
              }) : (0, r.jsx)("span", {
                className: l()(R.statusIndicator, null != n.status && R[n.status])
              }), (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: function(e) {
                  switch (e) {
                    case s.M.STARTING:
                      return w.intl.string(P.default.SgjaXI);
                    case s.M.STARTUP_FAILED:
                      return w.intl.string(P.default["7C9Z3s"]);
                    case s.M.OFFLINE:
                      return w.intl.string(P.default["Ys/RrB"]);
                    case s.M.ONLINE:
                      return w.intl.string(P.default["60kAzo"]);
                    case s.M.DELETED:
                      return w.intl.string(P.default.Z1NZwX);
                    case s.M.MISSING_STOCK:
                      return w.intl.string(P.default["+a5G2l"]);
                    case s.M.SLEEPING:
                      return w.intl.string(P.default.y0z8ZO);
                    case s.M.PROVIDER_ERRORED:
                      return w.intl.string(P.default["6g/oji"]);
                    default:
                      return "—"
                  }
                }(n.status)
              }), null != X && (0, r.jsx)(d.m_, {
                position: "top",
                text: X,
                children: (0, r.jsx)(u.cBN, {
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
              children: w.intl.string(P.default.mJlz3T)
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              children: null != n.regionName ? n.regionName : "—"
            })]
          })]
        })
      })]
    }), Z && (0, r.jsx)("div", {
      className: R.overflowMenu,
      children: (0, r.jsx)(O.A, {
        guildId: t,
        instance: n
      })
    }), (0, r.jsx)("div", {
      className: R.imageBackground,
      children: (0, r.jsx)(h.T, {
        imageUrl: null != K ? K : ""
      })
    })]
  })
}