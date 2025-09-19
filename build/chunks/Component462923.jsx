/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk639777 = require("./639777.js"),
  Chunk29168 = require("./29168.js"),
  Chunk444083 = require("./444083.jsx"),
  Chunk340887 = require("./340887.jsx"),
  Chunk408629 = require("./408629.jsx"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842788 = require("./842788.js");

function g(e) {
  let {
    guildId: t,
    instance: n
  } = e, g = (0, i.e7)([d.Z], () => d.Z.getState()), v = a.useCallback(() => {
    g ? (0, m.Z)(n) : (0, b.Z)({
      onAccept: () => {
        (0, m.Z)(n)
      }
    })
  }, [n, g]), x = a.useCallback(() => {
    (0, o.JG)(n.serverIP), (0, s.showToast)((0, s.createToast)(f.intl.string(f.t["+5kSoa"]), s.ToastType.SUCCESS))
  }, [n.serverIP]), y = (0, l.Z)(t);
  return (0, r.jsxs)("div", {
    className: j.card,
    children: [(0, r.jsxs)("div", {
      className: j.serverHeader,
      children: [(0, r.jsx)("img", {
        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
        alt: "",
        className: j.gameImage
      }), (0, r.jsxs)("div", {
        className: j.serverInfo,
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
      className: j.serverDetails,
      children: (0, r.jsxs)("div", {
        className: j.detailsGrid,
        children: [(0, r.jsxs)("div", {
          className: j.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: f.intl.string(p.default.X0IaiI)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: "".concat(n.onlineConnectionsCount, " / ").concat(n.maxConnectionsCount)
          })]
        }), (0, r.jsxs)("div", {
          className: j.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: f.intl.string(p.default["9pw/yM"])
          }), (0, r.jsx)("div", {
            className: j.serverIpContainer,
            children: g ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                children: n.serverIP
              }), (0, r.jsx)(s.P3F, {
                className: j.copyButton,
                "aria-label": f.intl.string(f.t.OpuAlJ),
                onClick: x,
                children: (0, r.jsx)(s.TIy, {
                  size: "sm"
                })
              })]
            }) : (0, r.jsx)(c.Z, {
              onClick: () => {
                (0, b.Z)({})
              },
              children: f.intl.string(p.default.UwXK29)
            })
          })]
        }), (0, r.jsxs)("div", {
          className: j.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: f.intl.string(p.default.MQQIu7)
          }), (0, r.jsxs)("div", {
            className: j.statusContainer,
            children: [(0, r.jsx)("span", {
              className: j.statusIndicator
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/medium",
              children: n.status
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: j.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: f.intl.string(p.default.fqrxlJ)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: n.regionName
          })]
        })]
      })
    }), (0, r.jsxs)("div", {
      className: j.serverActions,
      children: [(0, r.jsx)(s.zxk, {
        fullWidth: true,
        text: f.intl.string(p.default["0TMXHh"]),
        onClick: v,
        variant: "primary"
      }), y && null != n.gameServerPanelUrl && (0, r.jsx)(s.zxk, {
        fullWidth: true,
        text: f.intl.string(p.default["jO3u+/"]),
        onClick: () => {
          window.open(n.gameServerPanelUrl, "_blank")
        },
        variant: "secondary"
      })]
    }), (0, r.jsx)("div", {
      className: j.overflowMenu,
      children: (0, r.jsx)(u.Z, {
        guildId: t,
        instance: n
      })
    })]
  })
}