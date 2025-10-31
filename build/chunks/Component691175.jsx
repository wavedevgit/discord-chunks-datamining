/** Chunk was on 3020 **/
/** chunk id: 691175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk319738 = require("./319738.js"),
  Chunk163558 = require("./163558.js"),
  Chunk590149 = require("./590149.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk806992 = require("./806992.js");
let x = [Chunk657707.tBG, Chunk657707.b7C, Chunk657707.OgN, Chunk657707.e5I, Chunk657707.Ffc, Chunk657707.WXD, Chunk657707.EmW, Chunk657707.Jmo, Chunk657707.Vy8, Chunk657707.yxC, Chunk657707.RJm, Chunk657707.y3H, Chunk657707.vqy, Chunk657707.ED8, Chunk657707.ZRV, Chunk657707.GsA, Chunk657707.GuY, Chunk657707.aXf, Chunk657707.ewm],
  g = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-info", "text-feedback-critical"],
  f = () => {
    let [e, t] = Chunk647438.useState(""), [n, l] = Chunk647438.useState(""), [r, s] = Chunk647438.useState(false);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)("form", {
        onSubmit: async a => {
          a.preventDefault(), s(true);
          try {
            await (0, d.UK)(e, n), t(""), l("")
          } finally {
            s(false)
          }
        },
        children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          direction: "vertical",
          align: "center",
          gap: 8,
          children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
              fullWidth: true,
              value: module,
              onChange: exports,
              placeholder: "Pool ID",
              disabled: r
            }), (0, Chunk951288.jsx)(Chunk481060.oil, {
              type: "password",
              fullWidth: true,
              value: require,
              onChange: Chunk120356,
              placeholder: "Password",
              disabled: r
            })]
          }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
              type: "button",
              size: "md",
              fullWidth: true,
              variant: "secondary",
              text: "Clear",
              onClick: () => {
                exports(""), Chunk120356("")
              },
              disabled: 0 === module.length || 0 === require.length || r
            }), (0, Chunk951288.jsx)(Chunk481060.Button, {
              type: "submit",
              size: "md",
              fullWidth: true,
              variant: "primary",
              text: "Add Pool",
              disabled: 0 === module.length || 0 === require.length || r,
              loading: r
            })]
          })]
        })
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        gap: 4
      })]
    })
  },
  b = e => {
    let {
      pool: t
    } = e, {
      id: n,
      summary: l
    } = t, f = u.Z.getUsersForPool(n), b = (0, o.e7)([p.default], () => p.default.getId()), v = x[Number(n) % x.length], j = g[Number(n) % g.length], _ = i.useCallback(() => {
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
        title: l,
        className: h.accordion,
        subtitle: "".concat(f.length, " users"),
        children: (0, a.jsxs)(c.Kqy, {
          direction: "vertical",
          gap: 4,
          padding: {
            left: 24,
            right: 8,
            bottom: 16
          },
          fullWidth: false,
          children: [f.map((e, n) => (0, a.jsxs)(i.Fragment, {
            children: [0 !== n && (0, a.jsx)(c.izJ, {
              gap: 4
            }), (0, a.jsx)(c.P3F, {
              onClick: n => {
                n.stopPropagation(), (0, d.TA)(t.id, e.id)
              },
              "aria-disabled": b === e.id,
              className: r()(h.clickable, {
                [h.clickableDisabled]: b === e.id
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
                  className: r()({
                    [h.userInfoDisabled]: b === e.id
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
                      color: "text-tertiary",
                      className: h.emailText,
                      children: e.email
                    })]
                  })]
                }), b === e.id ? (0, a.jsx)(c.Text, {
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
              onClick: _
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
  return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    padding: 16,
    gap: 16,
    fullWidth: false,
    className: Chunk806992.container,
    children: [(0, Chunk951288.jsx)(f, {}), (0, Chunk951288.jsx)(Chunk481060.Ttm, {
      className: Chunk806992.poolsScroller,
      children: null == module ? true : module.map(e => (0, a.jsx)(b, {
        pool: e
      }, e.id))
    })]
  })
}