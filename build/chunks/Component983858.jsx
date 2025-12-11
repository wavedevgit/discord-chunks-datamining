/** Chunk was on 44686 **/
/** chunk id: 983858, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./953529.js"), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk134432 = require("./134432.js"),
  Chunk768581 = require("./768581.js"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk324542 = require("./324542.js"),
  Chunk129512 = require("./129512.js"),
  Chunk330065 = require("./330065.js");
let h = [16, 16, 14, 14, 12, 10, 8],
  v = function(e) {
    var i, t;
    let {
      guild: r,
      disabled: v,
      small: T,
      loading: p = false,
      description: A,
      memberCount: C,
      presenceCount: D,
      className: y
    } = e, O = (0, o.ZP)(), [P, R] = l.useState(false);
    if (null == r || p) return (0, n.jsx)("div", {
      className: s()(y, S.card, S.cardPlaceholder, {
        [S.cardSmall]: T,
        [S.cardDisabled]: v
      })
    });
    let {
      name: L
    } = r, N = null != r.discoverySplash && /^data:/.test(r.discoverySplash) ? r.discoverySplash : f.ZP.getGuildDiscoverySplashURL({
      id: r.id,
      splash: r.discoverySplash,
      size: 240 * (0, E.x_)()
    }), b = (0, u.wj)(O) ? m : g, G = null != (i = f.ZP.getGuildIconURL({
      id: r.id,
      icon: r.icon,
      size: 40
    })) ? i : true, j = null != r.description ? r.description : A, V = null != C ? C : null == r ? true : r.memberCount, F = null != D ? D : null == r ? true : r.presenceCount, M = null;
    if (null != G) M = (0, n.jsx)("img", {
      src: G,
      alt: "",
      className: S.avatar
    });
    else {
      let e = (0, I.Zg)(r.name);
      M = (0, n.jsx)("div", {
        className: S.defaultIcon,
        children: (0, n.jsx)(a.Text, {
          className: S.acronym,
          style: {
            fontSize: null != (t = h[e.length]) ? t : h[h.length - 1]
          },
          variant: "text-sm/normal",
          children: e
        })
      })
    }
    return (0, n.jsxs)("div", {
      className: s()(y, S.card, {
        [S.cardSmall]: T,
        [S.cardDisabled]: v,
        [S.splashLoaded]: P
      }),
      children: [(0, n.jsxs)("div", {
        className: S.cardHeader,
        children: [(0, n.jsx)("div", {
          className: S.splash,
          children: (0, n.jsx)("img", {
            src: null != N ? N : b,
            alt: "",
            className: S.splashImage,
            onLoad: () => R(true)
          })
        }), (0, n.jsx)("div", {
          className: S.guildIcon,
          children: (0, n.jsx)(d.ZP, {
            mask: d.ZP.Masks.SQUIRCLE,
            width: 48,
            height: 48,
            children: (0, n.jsx)("div", {
              className: S.iconMask,
              children: (0, n.jsx)(d.ZP, {
                mask: d.ZP.Masks.SQUIRCLE,
                width: 40,
                height: 40,
                children: null != M ? M : null
              })
            })
          })
        })]
      }), (0, n.jsxs)("div", {
        className: S.guildInfo,
        children: [(0, n.jsxs)("div", {
          className: S.title,
          children: [(0, n.jsx)(c.Z, {
            className: S.verifiedIcon,
            guild: r,
            tooltipColor: a.aML.Colors.PRIMARY
          }), (0, n.jsx)(a.Text, {
            className: S.guildName,
            variant: "text-md/normal",
            children: (0, n.jsx)("span", {
              children: L
            })
          })]
        }), (0, n.jsx)("div", {
          className: S.descriptionContainer,
          children: (0, n.jsx)(a.Text, {
            lineClamp: 3,
            className: S.description,
            variant: "text-sm/normal",
            tag: "span",
            children: j
          })
        }), (0, n.jsxs)("div", {
          className: S.memberInfo,
          children: [null != F && (0, n.jsxs)("div", {
            className: S.memberCount,
            children: [(0, n.jsx)("div", {
              className: S.dotOnline
            }), (0, n.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: T ? _.intl.formatToPlainString(_.t.YMor7k, {
                count: F
              }) : _.intl.formatToPlainString(_.t["LC+S+m"], {
                membersOnline: F
              })
            })]
          }), null != V && (0, n.jsxs)("div", {
            className: S.memberCount,
            children: [(0, n.jsx)("div", {
              className: S.dotOffline
            }), (0, n.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: T ? _.intl.formatToPlainString(_.t.YMor7k, {
                count: V
              }) : _.intl.formatToPlainString(_.t.zRl6XR, {
                count: V
              })
            })]
          })]
        })]
      })]
    })
  }