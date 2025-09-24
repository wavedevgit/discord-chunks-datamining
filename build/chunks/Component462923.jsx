/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842788 = require("./842788.js");

function h(e) {
  let {
    guildId: n,
    instance: t
  } = e, h = (0, g.Z)(t), y = "Portkey", [O, C] = (0, c.US)([o.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), N = O !== o.z.GAME_SERVER_HOSTING_PORTKEY_TOS, P = (0, i.e7)([d.Z], () => d.Z.getDetectableGame(t.gameId)), I = r.useCallback(() => {
    N ? (0, f.Z)(t) : (0, x.Z)({
      provider: y,
      onAccept: () => {
        C(p.L.TAKE_ACTION), (0, f.Z)(t)
      }
    })
  }, [t, N, C]), w = r.useCallback(() => {
    (0, u.JG)(h), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t["+5kSoa"]), s.ToastType.SUCCESS))
  }, [h]), S = (0, b.Z)(n);
  return (0, a.jsxs)("div", {
    className: _.card,
    children: [(0, a.jsxs)("div", {
      className: _.serverHeader,
      children: [(0, a.jsx)("img", {
        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
        alt: "",
        className: _.gameImage
      }), (0, a.jsxs)("div", {
        className: _.serverInfo,
        children: [(0, a.jsx)(s.X6q, {
          variant: "heading-sm/medium",
          children: t.name
        }), (0, a.jsxs)(s.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: [null != P ? "".concat(P.name, " • ") : "", t.planName]
        })]
      })]
    }), (0, a.jsx)("div", {
      className: _.serverDetails,
      children: (0, a.jsxs)("div", {
        className: _.detailsGrid,
        children: [(0, a.jsxs)("div", {
          className: _.detailItem,
          children: [(0, a.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: v.intl.string(j.default.X0IaiI)
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: "".concat(t.onlineConnectionsCount, " / ").concat(t.maxConnectionsCount)
          })]
        }), (0, a.jsxs)("div", {
          className: _.detailItem,
          children: [(0, a.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: v.intl.string(j.default["9pw/yM"])
          }), (0, a.jsx)("div", {
            className: _.serverIpContainer,
            children: N ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(s.Text, {
                variant: "text-sm/medium",
                children: h
              }), (0, a.jsx)(s.P3F, {
                className: _.copyButton,
                "aria-label": v.intl.string(v.t.OpuAlJ),
                onClick: w,
                children: (0, a.jsx)(s.TIy, {
                  size: "sm"
                })
              })]
            }) : (0, a.jsx)(l.Z, {
              onClick: () => {
                (0, x.Z)({
                  provider: y,
                  onAccept: () => {
                    C(p.L.TAKE_ACTION), (0, f.Z)(t)
                  }
                })
              },
              children: v.intl.string(j.default.UwXK29)
            })
          })]
        }), (0, a.jsxs)("div", {
          className: _.detailItem,
          children: [(0, a.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: v.intl.string(j.default.MQQIu7)
          }), (0, a.jsxs)("div", {
            className: _.statusContainer,
            children: [(0, a.jsx)("span", {
              className: _.statusIndicator
            }), (0, a.jsx)(s.Text, {
              variant: "text-sm/medium",
              children: t.status
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: _.detailItem,
          children: [(0, a.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: v.intl.string(j.default.fqrxlJ)
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: t.regionName
          })]
        })]
      })
    }), (0, a.jsxs)("div", {
      className: _.serverActions,
      children: [(0, a.jsx)(s.zxk, {
        fullWidth: true,
        text: v.intl.string(j.default["0TMXHh"]),
        onClick: I,
        variant: "primary"
      }), S && null != t.gameServerPanelUrl && (0, a.jsx)(s.zxk, {
        fullWidth: true,
        text: v.intl.string(j.default["jO3u+/"]),
        onClick: () => {
          window.open(t.gameServerPanelUrl, "_blank")
        },
        variant: "secondary"
      })]
    }), (0, a.jsx)("div", {
      className: _.overflowMenu,
      children: (0, a.jsx)(m.Z, {
        guildId: n,
        instance: t
      })
    })]
  })
}