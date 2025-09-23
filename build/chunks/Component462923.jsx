/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk690221 = require("./690221.jsx"),
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

function v(e) {
  let {
    guildId: t,
    instance: n
  } = e, v = (0, m.Z)(n), O = "Portkey", [y, h] = (0, c.US)([i.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), _ = y !== i.z.GAME_SERVER_HOSTING_PORTKEY_TOS, C = a.useCallback(() => {
    _ ? (0, b.Z)(n) : (0, p.Z)({
      provider: O,
      onAccept: () => {
        h(f.L.TAKE_ACTION), (0, b.Z)(n)
      }
    })
  }, [n, _, h]), P = a.useCallback(() => {
    (0, l.JG)(v), (0, s.showToast)((0, s.createToast)(g.intl.string(g.t["+5kSoa"]), s.ToastType.SUCCESS))
  }, [v]), N = (0, d.Z)(t);
  return (0, r.jsxs)("div", {
    className: x.card,
    children: [(0, r.jsxs)("div", {
      className: x.serverHeader,
      children: [(0, r.jsx)("img", {
        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
        alt: "",
        className: x.gameImage
      }), (0, r.jsxs)("div", {
        className: x.serverInfo,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-sm/medium",
          children: n.name
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: n.planName
        })]
      })]
    }), (0, r.jsx)("div", {
      className: x.serverDetails,
      children: (0, r.jsxs)("div", {
        className: x.detailsGrid,
        children: [(0, r.jsxs)("div", {
          className: x.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: g.intl.string(j.default.X0IaiI)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: "".concat(n.onlineConnectionsCount, " / ").concat(n.maxConnectionsCount)
          })]
        }), (0, r.jsxs)("div", {
          className: x.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: g.intl.string(j.default["9pw/yM"])
          }), (0, r.jsx)("div", {
            className: x.serverIpContainer,
            children: _ ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                children: v
              }), (0, r.jsx)(s.P3F, {
                className: x.copyButton,
                "aria-label": g.intl.string(g.t.OpuAlJ),
                onClick: P,
                children: (0, r.jsx)(s.TIy, {
                  size: "sm"
                })
              })]
            }) : (0, r.jsx)(o.Z, {
              onClick: () => {
                (0, p.Z)({
                  provider: O,
                  onAccept: () => {
                    h(f.L.TAKE_ACTION), (0, b.Z)(n)
                  }
                })
              },
              children: g.intl.string(j.default.UwXK29)
            })
          })]
        }), (0, r.jsxs)("div", {
          className: x.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: g.intl.string(j.default.MQQIu7)
          }), (0, r.jsxs)("div", {
            className: x.statusContainer,
            children: [(0, r.jsx)("span", {
              className: x.statusIndicator
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/medium",
              children: n.status
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: x.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: g.intl.string(j.default.fqrxlJ)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: n.regionName
          })]
        })]
      })
    }), (0, r.jsxs)("div", {
      className: x.serverActions,
      children: [(0, r.jsx)(s.zxk, {
        fullWidth: true,
        text: g.intl.string(j.default["0TMXHh"]),
        onClick: C,
        variant: "primary"
      }), N && null != n.gameServerPanelUrl && (0, r.jsx)(s.zxk, {
        fullWidth: true,
        text: g.intl.string(j.default["jO3u+/"]),
        onClick: () => {
          window.open(n.gameServerPanelUrl, "_blank")
        },
        variant: "secondary"
      })]
    }), (0, r.jsx)("div", {
      className: x.overflowMenu,
      children: (0, r.jsx)(u.Z, {
        guildId: t,
        instance: n
      })
    })]
  })
}