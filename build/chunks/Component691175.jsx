/** Chunk was on 23736 **/
/** chunk id: 691175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk319738 = require("./319738.js"),
  Chunk163558 = require("./163558.js"),
  Chunk590149 = require("./590149.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk158570 = require("./158570.js");
let f = [Chunk657707.tBG, Chunk657707.b7C, Chunk657707.OgN, Chunk657707.e5I, Chunk657707.Ffc, Chunk657707.WXD, Chunk657707.EmW, Chunk657707.Jmo, Chunk657707.Vy8, Chunk657707.yxC, Chunk657707.RJm, Chunk657707.y3H, Chunk657707.vqy, Chunk657707.ED8, Chunk657707.ZRV, Chunk657707.GsA, Chunk657707.GuY, Chunk657707.aXf, Chunk657707.ewm],
  x = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-info", "text-feedback-critical"],
  b = () => {
    let [e, t] = Chunk473749.useState(""), [n, i] = Chunk473749.useState(""), [l, s] = Chunk473749.useState(false);
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)("form", {
        onSubmit: async a => {
          a.preventDefault(), s(true);
          try {
            await (0, d.UK)(e, n), t(""), i("")
          } finally {
            s(false)
          }
        },
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          direction: "vertical",
          align: "center",
          gap: 8,
          children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
              fullWidth: true,
              value: module,
              onChange: exports,
              placeholder: "Pool ID",
              disabled: l
            }), (0, Chunk54381.jsx)(Chunk481060.oil, {
              type: "password",
              fullWidth: true,
              value: require,
              onChange: Chunk120356,
              placeholder: "Password",
              disabled: l
            })]
          }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
              type: "button",
              size: "md",
              fullWidth: true,
              variant: "secondary",
              text: "Clear",
              onClick: () => {
                exports(""), Chunk120356("")
              },
              disabled: 0 === module.length || 0 === require.length || l
            }), (0, Chunk54381.jsx)(Chunk481060.Button, {
              type: "submit",
              size: "md",
              fullWidth: true,
              variant: "primary",
              text: "Add Pool",
              disabled: 0 === module.length || 0 === require.length || l,
              loading: l
            })]
          })]
        })
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        gap: 4
      })]
    })
  },
  g = e => {
    let {
      pool: t
    } = e, {
      id: n,
      summary: i
    } = t, b = u.Z.getUsersForPool(n), g = (0, o.e7)([p.default], () => p.default.getId()), v = f[Number(n) % f.length], j = x[Number(n) % x.length], y = r.useCallback(() => {
      (0, d.KZ)(n)
    }, [n]);
    return (0, a.jsx)(c.Kqy, {
      direction: "horizontal",
      align: "start",
      justify: "space-between",
      children: (0, a.jsx)(m.Z, {
        icon: (0, a.jsx)(c.Text, {
          variant: "text-md/medium",
          color: j,
          className: h.iconText,
          children: (0, a.jsx)(v, {
            size: "custom",
            width: 24,
            height: 24,
            color: "currentColor"
          })
        }),
        title: i,
        className: h.accordion,
        subtitle: "".concat(b.length, " users"),
        children: (0, a.jsxs)(c.Kqy, {
          direction: "vertical",
          gap: 4,
          padding: {
            left: 24,
            right: 8,
            bottom: 16
          },
          fullWidth: false,
          children: [b.map((e, n) => (0, a.jsxs)(r.Fragment, {
            children: [0 !== n && (0, a.jsx)(c.izJ, {
              gap: 4
            }), (0, a.jsx)(c.P3F, {
              onClick: n => {
                n.stopPropagation(), (0, d.TA)(t.id, e.id)
              },
              "aria-disabled": g === e.id,
              className: l()(h.clickable, {
                [h.clickableDisabled]: g === e.id
              }),
              children: (0, a.jsxs)(c.Kqy, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 8,
                padding: {
                  right: 8
                },
                fullWidth: false,
                children: [(0, a.jsxs)(c.Kqy, {
                  direction: "horizontal",
                  align: "center",
                  gap: 8,
                  fullWidth: false,
                  className: l()({
                    [h.userInfoDisabled]: g === e.id
                  }),
                  children: [(0, a.jsx)(s.tBG, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor"
                  }), (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: e.username
                    }), (0, a.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: h.emailText,
                      children: e.email
                    })]
                  })]
                }), g === e.id ? (0, a.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-feedback-positive",
                  children: (0, a.jsx)(s.owK, {
                    size: "sm",
                    color: "currentColor"
                  })
                }) : (0, a.jsx)(c.Fbu, {
                  size: "sm",
                  color: "currentColor"
                })]
              }, e.id)
            }, e.id)]
          }, e.id)), (0, a.jsx)("div", {
            className: h.buttonContainer,
            children: (0, a.jsx)(c.Button, {
              icon: s.XHJ,
              text: "",
              size: "sm",
              variant: "secondary",
              onClick: y
            })
          })]
        })
      })
    })
  };

function v() {
  let e = (0, Chunk442837.Wu)([Chunk163558.Z], () => {
    var e;
    return null != (e = Chunk163558.Z.getPools()) ? module : []
  });
  return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
    padding: 16,
    gap: 16,
    fullWidth: false,
    className: Chunk158570.container,
    children: [(0, Chunk54381.jsx)(b, {}), (0, Chunk54381.jsx)(Chunk481060.Ttm, {
      className: Chunk158570.poolsScroller,
      children: null == module ? true : module.map(e => (0, a.jsx)(g, {
        pool: e
      }, e.id))
    })]
  })
}