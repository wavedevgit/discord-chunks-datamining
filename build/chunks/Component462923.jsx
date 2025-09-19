/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function v(e) {
  let {
    guildId: t,
    instance: n
  } = e, v = (0, i.e7)([u.Z], () => u.Z.getState()), x = a.useCallback(() => {
    v ? (0, m.Z)(n) : (0, p.Z)({
      onAccept: () => {
        (0, m.Z)(n)
      }
    })
  }, [n, v]), y = a.useCallback(() => {
    (0, o.JG)(n.serverIP), (0, s.showToast)((0, s.createToast)(j.intl.string(j.t["+5kSoa"]), s.ToastType.SUCCESS))
  }, [n.serverIP]), O = (0, d.Z)(t);
  return (0, r.jsxs)("div", {
    className: g.card,
    children: [(0, r.jsxs)("div", {
      className: g.serverHeader,
      children: [(0, r.jsx)("img", {
        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
        alt: "",
        className: g.gameImage
      }), (0, r.jsxs)("div", {
        className: g.serverInfo,
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
      className: g.serverDetails,
      children: (0, r.jsxs)("div", {
        className: g.detailsGrid,
        children: [(0, r.jsxs)("div", {
          className: g.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: j.intl.string(f.default.X0IaiI)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: "".concat(n.onlineConnectionsCount, " / ").concat(n.maxConnectionsCount)
          })]
        }), (0, r.jsxs)("div", {
          className: g.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: j.intl.string(f.default["9pw/yM"])
          }), (0, r.jsx)("div", {
            className: g.serverIpContainer,
            children: v ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                children: n.serverIP
              }), (0, r.jsx)(s.P3F, {
                className: g.copyButton,
                "aria-label": j.intl.string(j.t.OpuAlJ),
                onClick: y,
                children: (0, r.jsx)(s.TIy, {
                  size: "sm"
                })
              })]
            }) : (0, r.jsx)(c.Z, {
              onClick: () => {
                (0, p.Z)({})
              },
              children: j.intl.string(f.default.UwXK29)
            })
          })]
        }), (0, r.jsxs)("div", {
          className: g.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: j.intl.string(f.default.MQQIu7)
          }), (0, r.jsxs)("div", {
            className: g.statusContainer,
            children: [(0, r.jsx)("span", {
              className: g.statusIndicator
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/medium",
              children: n.status
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: g.detailItem,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/semibold",
            children: j.intl.string(f.default.v8iSgI)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: (0, l.Y4)(new Date(n.lastUpdated))
          })]
        })]
      })
    }), (0, r.jsxs)("div", {
      className: g.serverActions,
      children: [(0, r.jsx)(s.zxk, {
        fullWidth: true,
        text: j.intl.string(f.default["0TMXHh"]),
        onClick: x,
        variant: "primary"
      }), O && (0, r.jsx)(s.zxk, {
        fullWidth: true,
        text: j.intl.string(f.default["jO3u+/"]),
        onClick: () => {
          window.open(n.gameServerPanelUrl, "_blank")
        },
        variant: "secondary"
      })]
    }), (0, r.jsx)("div", {
      className: g.overflowMenu,
      children: (0, r.jsx)(b.Z, {
        guildId: t,
        instance: n
      })
    })]
  })
}