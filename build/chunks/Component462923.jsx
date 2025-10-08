/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk660815 = require("./660815.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk77498 = require("./77498.js"),
  Chunk572004 = require("./572004.js"),
  Chunk823379 = require("./823379.js"),
  Chunk49012 = require("./49012.js"),
  Chunk639777 = require("./639777.js"),
  Chunk744993 = require("./744993.js"),
  Chunk310978 = require("./310978.jsx"),
  Chunk450403 = require("./450403.jsx"),
  Chunk444083 = require("./444083.jsx"),
  Chunk943970 = require("./943970.js"),
  Chunk998964 = require("./998964.js"),
  Chunk340887 = require("./340887.jsx"),
  Chunk408629 = require("./408629.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842788 = require("./842788.js");

function w(e) {
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
  return (0, r.jsx)(d.zxk, w({
    fullWidth: true,
    text: S.intl.string(P.default.NHwQ0N),
    variant: "secondary"
  }, e))
}

function E(e) {
  return (0, r.jsx)(d.zxk, w({
    fullWidth: true,
    text: S.intl.string(P.default["jO3u+/"]),
    variant: "secondary",
    icon: d.Gr1,
    iconPosition: "end"
  }, e))
}

function Z(e) {
  return (0, r.jsx)(d.zxk, w({
    fullWidth: true,
    text: S.intl.string(P.default["0TMXHh"]),
    variant: "primary"
  }, e))
}

function G(e) {
  return (0, r.jsx)(d.zxk, w({
    fullWidth: true,
    text: S.intl.string(P.default.irvMjo),
    variant: "primary",
    icon: d.Gr1,
    iconPosition: "end"
  }, e))
}

function D(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, O.Z)(t), [w, D] = (0, u.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), R = w !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, A = (0, s.e7)([g.Z], () => g.Z.getDetectableGame(t.gameId)), V = a.useCallback(() => {
    R || null == t.providerType ? (0, C.Z)(n, t) : (0, I.Z)({
      provider: t.providerType,
      onAccept: () => {
        D(N.L.TAKE_ACTION), (0, C.Z)(n, t)
      }
    })
  }, [t, R, D, n]), B = a.useCallback(() => {
    (0, b.JG)(null != i ? i : ""), (0, d.showToast)((0, d.createToast)(S.intl.string(S.t["+5kSoa"]), d.ToastType.SUCCESS))
  }, [i]), W = (0, y.Z)(t.gameId, "cover"), L = (0, p.Z)(n), M = a.useCallback(() => {
    var e;
    (0, x.q)({
      href: null != (e = t.gameServerPanelUrl) ? e : ""
    })
  }, [t.gameServerPanelUrl]), z = a.useCallback(() => {
    (0, v.WX)(n, t.id)
  }, [n, t.id]), U = a.useMemo(() => {
    switch (t.status) {
      case l.V.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(k, {
            onClick: z
          }), L && (0, r.jsx)(E, {
            onClick: M,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case l.V.OFFLINE:
      case l.V.ONLINE:
      case l.V.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(Z, {
            onClick: V
          }), L && (0, r.jsx)(E, {
            onClick: M,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case l.V.MISSING_STOCK:
        return L ? (0, r.jsx)(G, {
          onClick: M
        }) : (0, r.jsx)(Z, {
          onClick: V,
          disabled: true
        });
      case l.V.DELETED:
      case l.V.STARTUP_FAILED:
        return L ? (0, r.jsx)(E, {
          onClick: M,
          disabled: null == t.gameServerPanelUrl
        }) : (0, r.jsx)(Z, {
          onClick: V,
          disabled: true
        });
      default:
        return null
    }
  }, [t, V, L, M, z]), F = a.useMemo(() => {
    if (null == t.gameConfig) return null;
    let e = [t.gameConfig.type, t.gameConfig.version].filter(f.lm).join(" ");
    return "" === e ? null : e
  }, [t.gameConfig]);
  return (0, r.jsxs)(_.Z, {
    actions: U,
    children: [(0, r.jsxs)("div", {
      className: T.serverDetailsContainer,
      children: [(0, r.jsxs)("div", {
        className: T.serverHeader,
        children: [(0, r.jsx)("img", {
          src: null != W ? W : "",
          alt: "",
          className: T.gameImage
        }), (0, r.jsxs)("div", {
          className: T.serverInfo,
          children: [(0, r.jsx)(d.X6q, {
            variant: "heading-sm/medium",
            children: t.name
          }), (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-tertiary",
            children: [null == A ? true : A.name, F].filter(f.lm).join(" • ")
          })]
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
          className: T.detailsGrid,
          children: [(0, r.jsxs)("div", {
            className: T.detailItem,
            children: [(0, r.jsx)(d.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: S.intl.string(P.default.X0IaiI)
            }), (0, r.jsx)(d.Text, {
              variant: "text-sm/medium",
              children: "".concat(null != t.onlineConnectionsCount ? t.onlineConnectionsCount : "—", " / ").concat(null != t.maxConnectionsCount ? t.maxConnectionsCount : "—")
            })]
          }), (0, r.jsxs)("div", {
            className: T.detailItem,
            children: [(0, r.jsx)(d.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: S.intl.string(P.default["9pw/yM"])
            }), (0, r.jsx)("div", {
              className: T.serverIpContainer,
              children: null == i ? (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: "—"
              }) : R ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  children: i
                }), (0, r.jsx)(d.P3F, {
                  className: T.copyButton,
                  "aria-label": S.intl.string(S.t.OpuAlJ),
                  onClick: B,
                  children: (0, r.jsx)(d.TIy, {
                    size: "sm"
                  })
                })]
              }) : null != t.providerType && (0, r.jsx)(m.Z, {
                onClick: () => {
                  (0, I.Z)({
                    provider: t.providerType,
                    onAccept: () => {
                      D(N.L.TAKE_ACTION), (0, C.Z)(n, t)
                    }
                  })
                },
                children: S.intl.string(P.default.UwXK29)
              })
            })]
          }), (0, r.jsxs)("div", {
            className: T.detailItem,
            children: [(0, r.jsx)(d.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: S.intl.string(P.default.MQQIu7)
            }), (0, r.jsxs)("div", {
              className: T.statusContainer,
              children: [(0, r.jsx)("span", {
                className: o()(T.statusIndicator, null != t.status && T[t.status])
              }), (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: function(e) {
                  switch (e) {
                    case l.V.STARTING:
                      return S.intl.string(P.default["7XF8pK"]);
                    case l.V.STARTUP_FAILED:
                      return S.intl.string(P.default["C/096+"]);
                    case l.V.OFFLINE:
                      return S.intl.string(P.default.Bz9gcH);
                    case l.V.ONLINE:
                      return S.intl.string(P.default["7q4iGR"]);
                    case l.V.DELETED:
                      return S.intl.string(P.default["UvP/1N"]);
                    case l.V.MISSING_STOCK:
                      return S.intl.string(P.default.ssC3cX);
                    case l.V.SLEEPING:
                      return S.intl.string(P.default.PS8AMT);
                    default:
                      return "—"
                  }
                }(t.status)
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: T.detailItem,
            children: [(0, r.jsx)(d.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: S.intl.string(P.default.fqrxlJ)
            }), (0, r.jsx)(d.Text, {
              variant: "text-sm/medium",
              children: null != t.regionName ? t.regionName : "—"
            })]
          })]
        })
      })]
    }), L && (0, r.jsx)("div", {
      className: T.overflowMenu,
      children: (0, r.jsx)(h.Z, {
        guildId: n,
        instance: t
      })
    }), (0, r.jsx)("div", {
      className: T.imageBackground,
      children: (0, r.jsx)(j.M, {
        imageUrl: null != W ? W : ""
      })
    })]
  })
}