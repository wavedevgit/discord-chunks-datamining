/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function P(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, _.Z)(t), P = null != t.serverIP && null != t.port, S = "Portkey", [w, T] = (0, u.US)([l.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), E = w !== l.z.GAME_SERVER_HOSTING_PORTKEY_TOS, k = (0, c.e7)([m.Z], () => m.Z.getDetectableGame(t.gameId)), Z = r.useCallback(() => {
    E ? (0, h.Z)(n, t) : (0, O.Z)({
      provider: S,
      onAccept: () => {
        T(y.L.TAKE_ACTION), (0, h.Z)(n, t)
      }
    })
  }, [t, E, T, n]), D = r.useCallback(() => {
    (0, g.JG)(i), (0, d.showToast)((0, d.createToast)(N.intl.string(N.t["+5kSoa"]), d.ToastType.SUCCESS))
  }, [i]), R = (0, x.Z)(n), G = (0, j.Z)(t.gameId, "cover");
  return (0, a.jsxs)("div", {
    className: I.card,
    children: [(0, a.jsxs)("div", {
      className: I.contentWrapper,
      children: [(0, a.jsxs)("div", {
        className: I.serverDetailsContainer,
        children: [(0, a.jsxs)("div", {
          className: I.serverHeader,
          children: [(0, a.jsx)("img", {
            src: null != G ? G : "",
            alt: "",
            className: I.gameImage
          }), (0, a.jsxs)("div", {
            className: I.serverInfo,
            children: [(0, a.jsx)(d.X6q, {
              variant: "heading-sm/medium",
              children: t.name
            }), (0, a.jsxs)(d.Text, {
              variant: "text-sm/medium",
              color: "text-tertiary",
              children: [null != k ? "".concat(k.name, " • ") : "", t.planName]
            })]
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsxs)("div", {
            className: I.detailsGrid,
            children: [(0, a.jsxs)("div", {
              className: I.detailItem,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-xs/semibold",
                children: N.intl.string(C.default.X0IaiI)
              }), (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: "".concat(null != t.onlineConnectionsCount ? t.onlineConnectionsCount : "———", " / ").concat(null != t.maxConnectionsCount ? t.maxConnectionsCount : "———")
              })]
            }), (0, a.jsxs)("div", {
              className: I.detailItem,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-xs/semibold",
                children: N.intl.string(C.default["9pw/yM"])
              }), (0, a.jsx)("div", {
                className: I.serverIpContainer,
                children: P ? E ? (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: i
                  }), (0, a.jsx)(d.P3F, {
                    className: I.copyButton,
                    "aria-label": N.intl.string(N.t.OpuAlJ),
                    onClick: D,
                    children: (0, a.jsx)(d.TIy, {
                      size: "sm"
                    })
                  })]
                }) : (0, a.jsx)(b.Z, {
                  onClick: () => {
                    (0, O.Z)({
                      provider: S,
                      onAccept: () => {
                        T(y.L.TAKE_ACTION), (0, h.Z)(n, t)
                      }
                    })
                  },
                  children: N.intl.string(C.default.UwXK29)
                }) : (0, a.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  children: "———"
                })
              })]
            }), (0, a.jsxs)("div", {
              className: I.detailItem,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-xs/semibold",
                children: N.intl.string(C.default.MQQIu7)
              }), (0, a.jsxs)("div", {
                className: I.statusContainer,
                children: [(0, a.jsx)("span", {
                  className: s()(I.statusIndicator, null != t.status && I[t.status])
                }), (0, a.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  children: function(e) {
                    switch (e) {
                      case o.V.STARTING:
                        return N.intl.string(C.default["7XF8pK"]);
                      case o.V.STARTUP_FAILED:
                        return N.intl.string(C.default["C/096+"]);
                      case o.V.OFFLINE:
                        return N.intl.string(C.default.Bz9gcH);
                      case o.V.ONLINE:
                        return N.intl.string(C.default["7q4iGR"]);
                      case o.V.DELETED:
                        return N.intl.string(C.default["UvP/1N"]);
                      case o.V.MISSING_STOCK:
                        return N.intl.string(C.default.ssC3cX);
                      case o.V.SLEEPING:
                        return N.intl.string(C.default.PS8AMT);
                      default:
                        return "———"
                    }
                  }(t.status)
                })]
              })]
            }), (0, a.jsxs)("div", {
              className: I.detailItem,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-xs/semibold",
                children: N.intl.string(C.default.fqrxlJ)
              }), (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: null != t.regionName ? t.regionName : "———"
              })]
            })]
          })
        })]
      }), (0, a.jsx)("div", {
        className: I.divider
      }), (0, a.jsxs)("div", {
        className: I.serverActions,
        children: [P && (0, a.jsx)(d.zxk, {
          fullWidth: true,
          text: N.intl.string(C.default["0TMXHh"]),
          onClick: Z,
          variant: "primary"
        }), R && null != t.gameServerPanelUrl && (0, a.jsx)(d.zxk, {
          fullWidth: true,
          text: N.intl.string(C.default["jO3u+/"]),
          onClick: () => {
            var e;
            (0, f.q)({
              href: null != (e = t.gameServerPanelUrl) ? e : ""
            })
          },
          variant: "secondary"
        })]
      })]
    }), (0, a.jsx)("div", {
      className: I.overflowMenu,
      children: (0, a.jsx)(v.Z, {
        guildId: n,
        instance: t
      })
    }), (0, a.jsx)("div", {
      className: I.imageBackground,
      children: (0, a.jsx)(p.M, {
        imageUrl: null != G ? G : ""
      })
    })]
  })
}