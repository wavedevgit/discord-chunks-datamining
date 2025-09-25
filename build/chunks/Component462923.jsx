/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk998964 = require("./998964.js"),
  Chunk340887 = require("./340887.jsx"),
  Chunk408629 = require("./408629.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk799427 = require("./799427.js");

function C(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, x.Z)(t), C = "Portkey", [N, I] = (0, u.US)([l.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), P = N !== l.z.GAME_SERVER_HOSTING_PORTKEY_TOS, w = (0, c.e7)([m.Z], () => m.Z.getDetectableGame(t.gameId)), S = r.useCallback(() => {
    P ? (0, j.Z)(t) : (0, v.Z)({
      provider: C,
      onAccept: () => {
        I(_.L.TAKE_ACTION), (0, j.Z)(t)
      }
    })
  }, [t, P, I]), T = r.useCallback(() => {
    (0, g.JG)(i), (0, d.showToast)((0, d.createToast)(O.intl.string(O.t["+5kSoa"]), d.ToastType.SUCCESS))
  }, [i]), E = (0, f.Z)(n);
  return (0, a.jsxs)("div", {
    className: y.card,
    children: [(0, a.jsxs)("div", {
      className: y.serverHeader,
      children: [(0, a.jsx)("img", {
        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
        alt: "",
        className: y.gameImage
      }), (0, a.jsxs)("div", {
        className: y.serverInfo,
        children: [(0, a.jsx)(d.X6q, {
          variant: "heading-sm/medium",
          children: t.name
        }), (0, a.jsxs)(d.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: [null != w ? "".concat(w.name, " • ") : "", t.planName]
        })]
      })]
    }), (0, a.jsx)("div", {
      className: y.serverDetails,
      children: (0, a.jsxs)("div", {
        className: y.detailsGrid,
        children: [(0, a.jsxs)("div", {
          className: y.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: O.intl.string(h.default.X0IaiI)
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: "".concat(t.onlineConnectionsCount, " / ").concat(t.maxConnectionsCount)
          })]
        }), (0, a.jsxs)("div", {
          className: y.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: O.intl.string(h.default["9pw/yM"])
          }), (0, a.jsx)("div", {
            className: y.serverIpContainer,
            children: P ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: i
              }), (0, a.jsx)(d.P3F, {
                className: y.copyButton,
                "aria-label": O.intl.string(O.t.OpuAlJ),
                onClick: T,
                children: (0, a.jsx)(d.TIy, {
                  size: "sm"
                })
              })]
            }) : (0, a.jsx)(b.Z, {
              onClick: () => {
                (0, v.Z)({
                  provider: C,
                  onAccept: () => {
                    I(_.L.TAKE_ACTION), (0, j.Z)(t)
                  }
                })
              },
              children: O.intl.string(h.default.UwXK29)
            })
          })]
        }), (0, a.jsxs)("div", {
          className: y.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: O.intl.string(h.default.MQQIu7)
          }), (0, a.jsxs)("div", {
            className: y.statusContainer,
            children: [(0, a.jsx)("span", {
              className: s()(y.statusIndicator, y[t.status])
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/medium",
              children: function(e) {
                switch (e) {
                  case o.V.STARTING:
                    return O.intl.string(h.default["7XF8pK"]);
                  case o.V.STARTUP_FAILED:
                    return O.intl.string(h.default["C/096+"]);
                  case o.V.OFFLINE:
                    return O.intl.string(h.default.Bz9gcH);
                  case o.V.ONLINE:
                    return O.intl.string(h.default["7q4iGR"]);
                  case o.V.DELETED:
                    return O.intl.string(h.default["UvP/1N"]);
                  case o.V.MISSING_STOCK:
                    return O.intl.string(h.default.ssC3cX);
                  case o.V.SLEEPING:
                    return O.intl.string(h.default.PS8AMT);
                  default:
                    return O.intl.string(h.default.Bz9gcH)
                }
              }(t.status)
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: y.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: O.intl.string(h.default.fqrxlJ)
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: t.regionName
          })]
        })]
      })
    }), (0, a.jsxs)("div", {
      className: y.serverActions,
      children: [(0, a.jsx)(d.zxk, {
        fullWidth: true,
        text: O.intl.string(h.default["0TMXHh"]),
        onClick: S,
        variant: "primary"
      }), E && null != t.gameServerPanelUrl && (0, a.jsx)(d.zxk, {
        fullWidth: true,
        text: O.intl.string(h.default["jO3u+/"]),
        onClick: () => {
          window.open(t.gameServerPanelUrl, "_blank")
        },
        variant: "secondary"
      })]
    }), (0, a.jsx)("div", {
      className: y.overflowMenu,
      children: (0, a.jsx)(p.Z, {
        guildId: n,
        instance: t
      })
    })]
  })
}