/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk55935 = require("./55935.js"),
  Chunk639777 = require("./639777.js"),
  Chunk29168 = require("./29168.js"),
  Chunk444083 = require("./444083.jsx"),
  Chunk340887 = require("./340887.jsx"),
  Chunk408629 = require("./408629.jsx"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842788 = require("./842788.js");

function y(e) {
  let {
    guildId: t,
    instance: n
  } = e, y = (0, a.e7)([u.Z], () => u.Z.getState()), j = i.useCallback(() => {
    y ? (0, p.Z)(n) : (0, g.Z)({
      onAccept: () => {
        (0, p.Z)(n)
      }
    })
  }, [n, y]), P = i.useCallback(() => {
    (0, l.JG)(n.serverIP), (0, o.showToast)((0, o.createToast)(f.intl.string(f.t["+5kSoa"]), o.ToastType.SUCCESS))
  }, [n.serverIP]), h = (0, d.Z)(t);
  return (0, r.jsxs)("div", {
    className: v.card,
    children: [(0, r.jsxs)("div", {
      className: v.serverHeader,
      children: [(0, r.jsx)("img", {
        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
        alt: "",
        className: v.gameImage
      }), (0, r.jsxs)("div", {
        className: v.serverInfo,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-sm/medium",
          children: n.name
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: n.planName
        })]
      })]
    }), (0, r.jsx)("div", {
      className: v.serverDetails,
      children: (0, r.jsxs)("div", {
        className: v.detailsGrid,
        children: [(0, r.jsxs)("div", {
          className: v.detailItem,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            children: f.intl.string(b.default.X0IaiI)
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: "".concat(n.onlineConnectionsCount, " / ").concat(n.maxConnectionsCount)
          })]
        }), (0, r.jsxs)("div", {
          className: v.detailItem,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            children: f.intl.string(b.default["9pw/yM"])
          }), (0, r.jsx)("div", {
            className: v.serverIpContainer,
            children: y ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                children: n.serverIP
              }), (0, r.jsx)(o.P3F, {
                className: v.copyButton,
                "aria-label": f.intl.string(f.t.OpuAlJ),
                onClick: P,
                children: (0, r.jsx)(o.TIy, {
                  size: "sm"
                })
              })]
            }) : (0, r.jsx)(s.Z, {
              onClick: () => {
                (0, g.Z)({})
              },
              children: f.intl.string(b.default.UwXK29)
            })
          })]
        }), (0, r.jsxs)("div", {
          className: v.detailItem,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            children: f.intl.string(b.default.MQQIu7)
          }), (0, r.jsxs)("div", {
            className: v.statusContainer,
            children: [(0, r.jsx)("span", {
              className: v.statusIndicator
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              children: n.status
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: v.detailItem,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            children: f.intl.string(b.default.v8iSgI)
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: (0, c.Y4)(new Date(n.lastUpdated))
          })]
        })]
      })
    }), (0, r.jsxs)("div", {
      className: v.serverActions,
      children: [(0, r.jsx)(o.zxk, {
        fullWidth: true,
        text: f.intl.string(b.default["0TMXHh"]),
        onClick: j,
        variant: "primary"
      }), h && (0, r.jsx)(o.zxk, {
        fullWidth: true,
        text: f.intl.string(b.default["jO3u+/"]),
        onClick: () => {
          window.open(n.gameServerPanelUrl, "_blank")
        },
        variant: "secondary"
      })]
    }), (0, r.jsx)("div", {
      className: v.overflowMenu,
      children: (0, r.jsx)(m.Z, {
        guildId: t,
        instance: n
      })
    })]
  })
}