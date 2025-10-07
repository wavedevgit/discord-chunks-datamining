/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => Z
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
  Chunk49012 = require("./49012.js"),
  Chunk639777 = require("./639777.js"),
  Chunk744993 = require("./744993.js"),
  Chunk310978 = require("./310978.jsx"),
  Chunk444083 = require("./444083.jsx"),
  Chunk943970 = require("./943970.js"),
  Chunk998964 = require("./998964.js"),
  Chunk340887 = require("./340887.jsx"),
  Chunk408629 = require("./408629.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842788 = require("./842788.js");

function S(e) {
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

function T(e) {
  return (0, r.jsx)(d.zxk, S({
    fullWidth: true,
    text: N.intl.string(I.default.NHwQ0N),
    variant: "secondary"
  }, e))
}

function w(e) {
  return (0, r.jsx)(d.zxk, S({
    fullWidth: true,
    text: N.intl.string(I.default["jO3u+/"]),
    variant: "secondary",
    icon: d.Gr1,
    iconPosition: "end"
  }, e))
}

function k(e) {
  return (0, r.jsx)(d.zxk, S({
    fullWidth: true,
    text: N.intl.string(I.default["0TMXHh"]),
    variant: "primary"
  }, e))
}

function E(e) {
  return (0, r.jsx)(d.zxk, S({
    fullWidth: true,
    text: N.intl.string(I.default.irvMjo),
    variant: "primary",
    icon: d.Gr1,
    iconPosition: "end"
  }, e))
}

function Z(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, y.Z)(t), [S, Z] = (0, u.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), D = S !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, G = (0, l.e7)([b.Z], () => b.Z.getDetectableGame(t.gameId)), R = a.useCallback(() => {
    D || null == t.providerType ? (0, O.Z)(n, t) : (0, h.Z)({
      provider: t.providerType,
      onAccept: () => {
        Z(C.L.TAKE_ACTION), (0, O.Z)(n, t)
      }
    })
  }, [t, D, Z, n]), A = a.useCallback(() => {
    (0, g.JG)(null != i ? i : ""), (0, d.showToast)((0, d.createToast)(N.intl.string(N.t["+5kSoa"]), d.ToastType.SUCCESS))
  }, [i]), V = (0, _.Z)(t.gameId, "cover"), B = (0, x.Z)(n), W = a.useCallback(() => {
    var e;
    (0, f.q)({
      href: null != (e = t.gameServerPanelUrl) ? e : ""
    })
  }, [t.gameServerPanelUrl]), L = a.useCallback(() => {
    (0, p.WX)(n, t.id)
  }, [n, t.id]), M = a.useMemo(() => {
    switch (t.status) {
      case s.V.SLEEPING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(T, {
            onClick: L
          }), B && (0, r.jsx)(w, {
            onClick: W,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.OFFLINE:
      case s.V.ONLINE:
      case s.V.STARTING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(k, {
            onClick: R
          }), B && (0, r.jsx)(w, {
            onClick: W,
            disabled: null == t.gameServerPanelUrl
          })]
        });
      case s.V.MISSING_STOCK:
        return B ? (0, r.jsx)(E, {
          onClick: W
        }) : (0, r.jsx)(k, {
          onClick: R,
          disabled: true
        });
      case s.V.DELETED:
      case s.V.STARTUP_FAILED:
        return B ? (0, r.jsx)(w, {
          onClick: W,
          disabled: null == t.gameServerPanelUrl
        }) : (0, r.jsx)(k, {
          onClick: R,
          disabled: true
        });
      default:
        return null
    }
  }, [t, R, B, W, L]);
  return (0, r.jsxs)("div", {
    className: P.card,
    children: [(0, r.jsxs)("div", {
      className: P.contentWrapper,
      children: [(0, r.jsxs)("div", {
        className: P.serverDetailsContainer,
        children: [(0, r.jsxs)("div", {
          className: P.serverHeader,
          children: [(0, r.jsx)("img", {
            src: null != V ? V : "",
            alt: "",
            className: P.gameImage
          }), (0, r.jsxs)("div", {
            className: P.serverInfo,
            children: [(0, r.jsx)(d.X6q, {
              variant: "heading-sm/medium",
              children: t.name
            }), (0, r.jsxs)(d.Text, {
              variant: "text-sm/medium",
              color: "text-tertiary",
              children: [null != G ? "".concat(G.name, " • ") : "", t.planName]
            })]
          })]
        }), (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className: P.detailsGrid,
            children: [(0, r.jsxs)("div", {
              className: P.detailItem,
              children: [(0, r.jsx)(d.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: N.intl.string(I.default.X0IaiI)
              }), (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: "".concat(null != t.onlineConnectionsCount ? t.onlineConnectionsCount : "—", " / ").concat(null != t.maxConnectionsCount ? t.maxConnectionsCount : "—")
              })]
            }), (0, r.jsxs)("div", {
              className: P.detailItem,
              children: [(0, r.jsx)(d.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: N.intl.string(I.default["9pw/yM"])
              }), (0, r.jsx)("div", {
                className: P.serverIpContainer,
                children: null == i ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  children: "—"
                }) : D ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: i
                  }), (0, r.jsx)(d.P3F, {
                    className: P.copyButton,
                    "aria-label": N.intl.string(N.t.OpuAlJ),
                    onClick: A,
                    children: (0, r.jsx)(d.TIy, {
                      size: "sm"
                    })
                  })]
                }) : null != t.providerType && (0, r.jsx)(m.Z, {
                  onClick: () => {
                    (0, h.Z)({
                      provider: t.providerType,
                      onAccept: () => {
                        Z(C.L.TAKE_ACTION), (0, O.Z)(n, t)
                      }
                    })
                  },
                  children: N.intl.string(I.default.UwXK29)
                })
              })]
            }), (0, r.jsxs)("div", {
              className: P.detailItem,
              children: [(0, r.jsx)(d.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: N.intl.string(I.default.MQQIu7)
              }), (0, r.jsxs)("div", {
                className: P.statusContainer,
                children: [(0, r.jsx)("span", {
                  className: o()(P.statusIndicator, null != t.status && P[t.status])
                }), (0, r.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  children: function(e) {
                    switch (e) {
                      case s.V.STARTING:
                        return N.intl.string(I.default["7XF8pK"]);
                      case s.V.STARTUP_FAILED:
                        return N.intl.string(I.default["C/096+"]);
                      case s.V.OFFLINE:
                        return N.intl.string(I.default.Bz9gcH);
                      case s.V.ONLINE:
                        return N.intl.string(I.default["7q4iGR"]);
                      case s.V.DELETED:
                        return N.intl.string(I.default["UvP/1N"]);
                      case s.V.MISSING_STOCK:
                        return N.intl.string(I.default.ssC3cX);
                      case s.V.SLEEPING:
                        return N.intl.string(I.default.PS8AMT);
                      default:
                        return "—"
                    }
                  }(t.status)
                })]
              })]
            }), (0, r.jsxs)("div", {
              className: P.detailItem,
              children: [(0, r.jsx)(d.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: N.intl.string(I.default.fqrxlJ)
              }), (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: null != t.regionName ? t.regionName : "—"
              })]
            })]
          })
        })]
      }), null != M && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: P.divider
        }), (0, r.jsx)("div", {
          className: P.serverActions,
          children: M
        })]
      }), B && (0, r.jsx)("div", {
        className: P.overflowMenu,
        children: (0, r.jsx)(j.Z, {
          guildId: n,
          instance: t
        })
      })]
    }), (0, r.jsx)("div", {
      className: P.imageBackground,
      children: (0, r.jsx)(v.M, {
        imageUrl: null != V ? V : ""
      })
    })]
  })
}