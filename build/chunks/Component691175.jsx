/** Chunk was on 22979 **/
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
let f = [Chunk657707.UserIcon, Chunk657707.ShieldIcon, Chunk657707.GiftIcon, Chunk657707.AchievementsIcon, Chunk657707.PiggyBankIcon, Chunk657707.TreehouseIcon, Chunk657707.SpeedometerIcon, Chunk657707.CompassIcon, Chunk657707.SignPostIcon, Chunk657707.CarIcon, Chunk657707.TrainIcon, Chunk657707.TeacupIcon, Chunk657707.InventoryIcon, Chunk657707.FoodIcon, Chunk657707.BurgerIcon, Chunk657707.MagicDoorIcon, Chunk657707.PawPrintIcon, Chunk657707.RecordPlayerIcon, Chunk657707.SettingsIcon],
  b = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-info", "text-feedback-critical"],
  x = () => {
    let [e, t] = r.useState(""), [n, i] = r.useState(""), [l, s] = r.useState(false);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("form", {
        onSubmit: async a => {
          a.preventDefault(), s(true);
          try {
            await (0, d.UK)(e, n), t(""), i("")
          } finally {
            s(false)
          }
        },
        children: (0, a.jsxs)(c.Kqy, {
          direction: "vertical",
          align: "center",
          gap: 8,
          children: [(0, a.jsxs)(c.Kqy, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            children: [(0, a.jsx)(c.oil, {
              fullWidth: true,
              value: e,
              onChange: t,
              placeholder: "Pool ID",
              disabled: l
            }), (0, a.jsx)(c.oil, {
              type: "password",
              fullWidth: true,
              value: n,
              onChange: i,
              placeholder: "Password",
              disabled: l
            })]
          }), (0, a.jsxs)(c.Kqy, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            children: [(0, a.jsx)(c.Button, {
              type: "button",
              size: "md",
              fullWidth: true,
              variant: "secondary",
              text: "Clear",
              onClick: () => {
                t(""), i("")
              },
              disabled: 0 === e.length || 0 === n.length || l
            }), (0, a.jsx)(c.Button, {
              type: "submit",
              size: "md",
              fullWidth: true,
              variant: "primary",
              text: "Add Pool",
              disabled: 0 === e.length || 0 === n.length || l,
              loading: l
            })]
          })]
        })
      }), (0, a.jsx)(c.izJ, {
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
    } = t, x = u.Z.getUsersForPool(n), g = (0, o.e7)([p.default], () => p.default.getId()), v = f[Number(n) % f.length], j = b[Number(n) % b.length], y = r.useCallback(() => {
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
        subtitle: "".concat(x.length, " users"),
        children: (0, a.jsxs)(c.Kqy, {
          direction: "vertical",
          gap: 4,
          padding: {
            left: 24,
            right: 8,
            bottom: 16
          },
          fullWidth: false,
          children: [x.map((e, n) => (0, a.jsxs)(r.Fragment, {
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
                  children: [(0, a.jsx)(s.UserIcon, {
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
                  children: (0, a.jsx)(s.CircleCheckIcon, {
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
              icon: s.TrashIcon,
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
  let e = (0, o.Wu)([u.Z], () => {
    var e;
    return null != (e = u.Z.getPools()) ? e : []
  });
  return (0, a.jsxs)(c.Kqy, {
    padding: 16,
    gap: 16,
    fullWidth: false,
    className: h.container,
    children: [(0, a.jsx)(x, {}), (0, a.jsx)(c.Ttm, {
      className: h.poolsScroller,
      children: null == e ? true : e.map(e => (0, a.jsx)(g, {
        pool: e
      }, e.id))
    })]
  })
}