/** Chunk was on 21854 **/
/** chunk id: 211912, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk605236 = require("./605236.js"),
  Chunk626135 = require("./626135.js"),
  Chunk164670 = require("./164670.js"),
  Chunk705338 = require("./705338.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk383749 = require("./383749.js"),
  Chunk867709 = require("./867709.js"),
  Chunk157443 = require("./157443.js");

function O(e) {
  s.useEffect(() => {
    u.default.track(m.rMx.OPEN_MODAL, {
      type: "Social Layer Storefront Announcement Modal"
    }), (0, d.bj)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL, {
      dismissAction: x.L.AUTO_DISMISS
    })
  }, []);
  let t = s.useCallback(() => {
      (0, b.eagerNavigateToSocialLayerStorefront)({
        guildId: (0, f.ac)()
      })
    }, []),
    {
      onClose: r
    } = e,
    a = s.useCallback(() => {
      (0, b.default)({
        guildId: (0, f.ac)()
      }), r()
    }, [r]);
  return (0, n.jsx)(o.f6W, {
    theme: p.BR.DARK,
    children: s => {
      var c, d;
      return (0, n.jsx)(l.IX, (c = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), d = d = {
        size: "lg",
        children: (0, n.jsxs)("div", {
          className: i()(s, g.content),
          children: [(0, n.jsx)("div", {
            className: g.closeButton,
            children: (0, n.jsx)(o.PZ7, {
              onClick: r
            })
          }), (0, n.jsx)("div", {
            className: g.artwork
          }), (0, n.jsxs)("div", {
            className: g.titleContainer,
            children: [(0, n.jsx)(o.X6q, {
              variant: "display-md",
              color: "text-strong",
              className: g.title,
              children: j.intl.string(j.t.to0E8U)
            }), (0, n.jsx)(o.X6q, {
              variant: "display-md",
              color: "text-strong",
              className: g.title,
              children: j.intl.string(j.t.BKEkBd)
            }), (0, n.jsx)(o.X6q, {
              variant: "heading-lg/medium",
              color: "text-muted",
              className: g.subtitle,
              children: j.intl.string(j.t.SiXpR2)
            })]
          }), (0, n.jsxs)("div", {
            className: g.features,
            children: [(0, n.jsxs)("div", {
              className: g.feature,
              children: [(0, n.jsx)("div", {
                className: g.featureIcon,
                children: (0, n.jsx)("img", {
                  src: v,
                  alt: ""
                })
              }), (0, n.jsxs)("div", {
                className: g.featureCopy,
                children: [(0, n.jsx)(o.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: j.intl.string(j.t["5hRbeH"])
                }), (0, n.jsx)(o.xvT, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children: j.intl.string(j.t["72sDuh"])
                })]
              })]
            }), (0, n.jsxs)("div", {
              className: g.feature,
              children: [(0, n.jsx)("div", {
                className: g.featureIcon,
                children: (0, n.jsx)("img", {
                  src: h,
                  alt: ""
                })
              }), (0, n.jsxs)("div", {
                className: g.featureCopy,
                children: [(0, n.jsx)(o.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: j.intl.string(j.t.MO4ASw)
                }), (0, n.jsx)(o.xvT, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children: j.intl.string(j.t.o4i2Wx)
                })]
              })]
            })]
          }), (0, n.jsx)(o.zxk, {
            variant: "primary",
            text: j.intl.string(j.t.CekBHq),
            onClick: a,
            onMouseDown: t
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(d)).forEach(function(e) {
        Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(d, e))
      }), c))
    }
  })
}