/** Chunk was on 85683 **/
/** chunk id: 462923, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => N
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
  Chunk444083 = require("./444083.jsx"),
  Chunk943970 = require("./943970.js"),
  Chunk998964 = require("./998964.js"),
  Chunk340887 = require("./340887.jsx"),
  Chunk408629 = require("./408629.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk799427 = require("./799427.js");

function N(e) {
  let {
    guildId: n,
    instance: t
  } = e, i = (0, v.Z)(t), N = "Portkey", [P, S] = (0, u.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]), w = P !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS, T = (0, l.e7)([m.Z], () => m.Z.getDetectableGame(t.gameId)), E = r.useCallback(() => {
    w ? (0, _.Z)(n, t) : (0, O.Z)({
      provider: N,
      onAccept: () => {
        S(h.L.TAKE_ACTION), (0, _.Z)(n, t)
      }
    })
  }, [t, w, S, n]), k = r.useCallback(() => {
    (0, g.JG)(i), (0, d.showToast)((0, d.createToast)(C.intl.string(C.t["+5kSoa"]), d.ToastType.SUCCESS))
  }, [i]), Z = (0, p.Z)(n), R = (0, j.Z)(t.gameId, "cover");
  return (0, a.jsxs)("div", {
    className: I.card,
    children: [(0, a.jsxs)("div", {
      className: I.serverHeader,
      children: [(0, a.jsx)("img", {
        src: null != R ? R : "",
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
          children: [null != T ? "".concat(T.name, " • ") : "", t.planName]
        })]
      })]
    }), (0, a.jsx)("div", {
      className: I.serverDetails,
      children: (0, a.jsxs)("div", {
        className: I.detailsGrid,
        children: [(0, a.jsxs)("div", {
          className: I.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: C.intl.string(y.default.X0IaiI)
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: "".concat(t.onlineConnectionsCount, " / ").concat(t.maxConnectionsCount)
          })]
        }), (0, a.jsxs)("div", {
          className: I.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: C.intl.string(y.default["9pw/yM"])
          }), (0, a.jsx)("div", {
            className: I.serverIpContainer,
            children: w ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: i
              }), (0, a.jsx)(d.P3F, {
                className: I.copyButton,
                "aria-label": C.intl.string(C.t.OpuAlJ),
                onClick: k,
                children: (0, a.jsx)(d.TIy, {
                  size: "sm"
                })
              })]
            }) : (0, a.jsx)(b.Z, {
              onClick: () => {
                (0, O.Z)({
                  provider: N,
                  onAccept: () => {
                    S(h.L.TAKE_ACTION), (0, _.Z)(n, t)
                  }
                })
              },
              children: C.intl.string(y.default.UwXK29)
            })
          })]
        }), (0, a.jsxs)("div", {
          className: I.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: C.intl.string(y.default.MQQIu7)
          }), (0, a.jsxs)("div", {
            className: I.statusContainer,
            children: [(0, a.jsx)("span", {
              className: s()(I.statusIndicator, I[t.status])
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/medium",
              children: function(e) {
                switch (e) {
                  case o.V.STARTING:
                    return C.intl.string(y.default["7XF8pK"]);
                  case o.V.STARTUP_FAILED:
                    return C.intl.string(y.default["C/096+"]);
                  case o.V.OFFLINE:
                    return C.intl.string(y.default.Bz9gcH);
                  case o.V.ONLINE:
                    return C.intl.string(y.default["7q4iGR"]);
                  case o.V.DELETED:
                    return C.intl.string(y.default["UvP/1N"]);
                  case o.V.MISSING_STOCK:
                    return C.intl.string(y.default.ssC3cX);
                  case o.V.SLEEPING:
                    return C.intl.string(y.default.PS8AMT);
                  default:
                    return C.intl.string(y.default.Bz9gcH)
                }
              }(t.status)
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: I.detailItem,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            children: C.intl.string(y.default.fqrxlJ)
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: t.regionName
          })]
        })]
      })
    }), (0, a.jsxs)("div", {
      className: I.serverActions,
      children: [(0, a.jsx)(d.zxk, {
        fullWidth: true,
        text: C.intl.string(y.default["0TMXHh"]),
        onClick: E,
        variant: "primary"
      }), Z && null != t.gameServerPanelUrl && (0, a.jsx)(d.zxk, {
        fullWidth: true,
        text: C.intl.string(y.default["jO3u+/"]),
        onClick: () => {
          var e;
          (0, f.q)({
            href: null != (e = t.gameServerPanelUrl) ? e : ""
          })
        },
        variant: "secondary"
      })]
    }), (0, a.jsx)("div", {
      className: I.overflowMenu,
      children: (0, a.jsx)(x.Z, {
        guildId: n,
        instance: t
      })
    })]
  })
}