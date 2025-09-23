/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,n,t (module,exports,require) **/
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
    guildId: n,
    instance: t
  } = e, v = (0, b.Z)(t), _ = "Portkey", [h, y] = (0, s.US)([i.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), O = h !== i.z.GAME_SERVER_HOSTING_PORTKEY_TOS, C = r.useCallback(() => {
    O ? (0, m.Z)(t) : (0, g.Z)({
      provider: _,
      onAccept: () => {
        y(f.L.TAKE_ACTION), (0, m.Z)(t)
      }
    })
  }, [t, O, y]), N = r.useCallback(() => {
    (0, l.JG)(v), (0, o.showToast)((0, o.createToast)(p.intl.string(p.t["+5kSoa"]), o.ToastType.SUCCESS))
  }, [v]), P = (0, d.Z)(n);
  return (0, a.jsxs)("div", {
    className: j.card,
    children: [(0, a.jsxs)("div", {
      className: j.serverHeader,
      children: [(0, a.jsx)("img", {
        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
        alt: "",
        className: j.gameImage
      }), (0, a.jsxs)("div", {
        className: j.serverInfo,
        children: [(0, a.jsx)(o.X6q, {
          variant: "heading-sm/medium",
          children: t.name
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: t.planName
        })]
      })]
    }), (0, a.jsx)("div", {
      className: j.serverDetails,
      children: (0, a.jsxs)("div", {
        className: j.detailsGrid,
        children: [(0, a.jsxs)("div", {
          className: j.detailItem,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            children: p.intl.string(x.default.X0IaiI)
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: "".concat(t.onlineConnectionsCount, " / ").concat(t.maxConnectionsCount)
          })]
        }), (0, a.jsxs)("div", {
          className: j.detailItem,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            children: p.intl.string(x.default["9pw/yM"])
          }), (0, a.jsx)("div", {
            className: j.serverIpContainer,
            children: O ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(o.Text, {
                variant: "text-sm/medium",
                children: v
              }), (0, a.jsx)(o.P3F, {
                className: j.copyButton,
                "aria-label": p.intl.string(p.t.OpuAlJ),
                onClick: N,
                children: (0, a.jsx)(o.TIy, {
                  size: "sm"
                })
              })]
            }) : (0, a.jsx)(c.Z, {
              onClick: () => {
                (0, g.Z)({
                  provider: _,
                  onAccept: () => {
                    y(f.L.TAKE_ACTION), (0, m.Z)(t)
                  }
                })
              },
              children: p.intl.string(x.default.UwXK29)
            })
          })]
        }), (0, a.jsxs)("div", {
          className: j.detailItem,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            children: p.intl.string(x.default.MQQIu7)
          }), (0, a.jsxs)("div", {
            className: j.statusContainer,
            children: [(0, a.jsx)("span", {
              className: j.statusIndicator
            }), (0, a.jsx)(o.Text, {
              variant: "text-sm/medium",
              children: t.status
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: j.detailItem,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            children: p.intl.string(x.default.fqrxlJ)
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: t.regionName
          })]
        })]
      })
    }), (0, a.jsxs)("div", {
      className: j.serverActions,
      children: [(0, a.jsx)(o.zxk, {
        fullWidth: true,
        text: p.intl.string(x.default["0TMXHh"]),
        onClick: C,
        variant: "primary"
      }), P && null != t.gameServerPanelUrl && (0, a.jsx)(o.zxk, {
        fullWidth: true,
        text: p.intl.string(x.default["jO3u+/"]),
        onClick: () => {
          window.open(t.gameServerPanelUrl, "_blank")
        },
        variant: "secondary"
      })]
    }), (0, a.jsx)("div", {
      className: j.overflowMenu,
      children: (0, a.jsx)(u.Z, {
        guildId: n,
        instance: t
      })
    })]
  })
}