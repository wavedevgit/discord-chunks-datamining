/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk639777 = require("./639777.js"),
  Chunk444083 = require("./444083.jsx"),
  Chunk943970 = require("./943970.js"),
  Chunk998964 = require("./998964.js"),
  Chunk340887 = require("./340887.jsx"),
  Chunk408629 = require("./408629.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842788 = require("./842788.js");

function I(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, j.Z)(t), I = "Portkey", [N, P] = (0, u.US)([l.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), w = N !== l.z.GAME_SERVER_HOSTING_PORTKEY_TOS, S = (0, c.e7)([m.Z], () => m.Z.getDetectableGame(t.gameId)), T = r.useCallback(() => {
    w ? (0, v.Z)(n, t) : (0, _.Z)({
      provider: I,
      onAccept: () => {
        P(h.L.TAKE_ACTION), (0, v.Z)(n, t)
      }
    })
  }, [t, w, P, n]), E = r.useCallback(() => {
    (0, g.JG)(i), (0, d.showToast)((0, d.createToast)(y.intl.string(y.t["+5kSoa"]), d.ToastType.SUCCESS))
  }, [i]), k = (0, f.Z)(n), Z = (0, x.Z)(t.gameId, "cover");
  return (0, a.jsxs)("div", {
    className: C.card,
    children: [(0, a.jsxs)("div", {
      className: C.serverHeader,
      children: [(0, a.jsx)("img", {
        src: null != Z ? Z : "",
        alt: "",
        className: C.gameImage
      }), (0, a.jsxs)("div", {
        className: C.serverInfo,
        children: [(0, a.jsx)(d.X6q, {
          variant: "heading-sm/medium",
          children: t.name
        }), (0, a.jsxs)(d.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: [null != S ? "".concat(S.name, " • ") : "", t.planName]
        })]
      })]
    }), (0, a.jsx)("div", {
      className: C.serverDetails,
      children: (0, a.jsxs)("div", {
        className: C.detailsGrid,
        children: [(0, a.jsxs)("div", {
          className: C.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: y.intl.string(O.default.X0IaiI)
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: "".concat(t.onlineConnectionsCount, " / ").concat(t.maxConnectionsCount)
          })]
        }), (0, a.jsxs)("div", {
          className: C.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: y.intl.string(O.default["9pw/yM"])
          }), (0, a.jsx)("div", {
            className: C.serverIpContainer,
            children: w ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: i
              }), (0, a.jsx)(d.P3F, {
                className: C.copyButton,
                "aria-label": y.intl.string(y.t.OpuAlJ),
                onClick: E,
                children: (0, a.jsx)(d.TIy, {
                  size: "sm"
                })
              })]
            }) : (0, a.jsx)(b.Z, {
              onClick: () => {
                (0, _.Z)({
                  provider: I,
                  onAccept: () => {
                    P(h.L.TAKE_ACTION), (0, v.Z)(n, t)
                  }
                })
              },
              children: y.intl.string(O.default.UwXK29)
            })
          })]
        }), (0, a.jsxs)("div", {
          className: C.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: y.intl.string(O.default.MQQIu7)
          }), (0, a.jsxs)("div", {
            className: C.statusContainer,
            children: [(0, a.jsx)("span", {
              className: s()(C.statusIndicator, C[t.status])
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/medium",
              children: function(e) {
                switch (e) {
                  case o.V.STARTING:
                    return y.intl.string(O.default["7XF8pK"]);
                  case o.V.STARTUP_FAILED:
                    return y.intl.string(O.default["C/096+"]);
                  case o.V.OFFLINE:
                    return y.intl.string(O.default.Bz9gcH);
                  case o.V.ONLINE:
                    return y.intl.string(O.default["7q4iGR"]);
                  case o.V.DELETED:
                    return y.intl.string(O.default["UvP/1N"]);
                  case o.V.MISSING_STOCK:
                    return y.intl.string(O.default.ssC3cX);
                  case o.V.SLEEPING:
                    return y.intl.string(O.default.PS8AMT);
                  default:
                    return y.intl.string(O.default.Bz9gcH)
                }
              }(t.status)
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: C.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: y.intl.string(O.default.fqrxlJ)
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: t.regionName
          })]
        })]
      })
    }), (0, a.jsxs)("div", {
      className: C.serverActions,
      children: [(0, a.jsx)(d.zxk, {
        fullWidth: true,
        text: y.intl.string(O.default["0TMXHh"]),
        onClick: T,
        variant: "primary"
      }), k && null != t.gameServerPanelUrl && (0, a.jsx)(d.zxk, {
        fullWidth: true,
        text: y.intl.string(O.default["jO3u+/"]),
        onClick: () => {
          window.open(t.gameServerPanelUrl, "_blank")
        },
        variant: "secondary"
      })]
    }), (0, a.jsx)("div", {
      className: C.overflowMenu,
      children: (0, a.jsx)(p.Z, {
        guildId: n,
        instance: t
      })
    })]
  })
}