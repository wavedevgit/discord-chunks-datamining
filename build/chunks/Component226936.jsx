/** Chunk was on 87557 **/
/** chunk id: 226936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk934551 = require("./934551.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk238193 = require("./238193.js"),
  Chunk624622 = require("./624622.js"),
  Chunk844330 = require("./844330.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk372022 = require("./372022.js");
let x = [Chunk934551.UserIcon, Chunk934551.ShieldIcon, Chunk934551.GiftIcon, Chunk934551.AchievementsIcon, Chunk934551.PiggyBankIcon, Chunk934551.TreehouseIcon, Chunk934551.SpeedometerIcon, Chunk934551.CompassIcon, Chunk934551.SignPostIcon, Chunk934551.CarIcon, Chunk934551.TrainIcon, Chunk934551.TeacupIcon, Chunk934551.InventoryIcon, Chunk934551.FoodIcon, Chunk934551.BurgerIcon, Chunk934551.MagicDoorIcon, Chunk934551.PawPrintIcon, Chunk934551.RecordPlayerIcon, Chunk934551.SettingsIcon],
  g = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-info", "text-feedback-critical"],
  f = () => {
    let [e, t] = l.useState(""), [n, r] = l.useState(""), [i, s] = l.useState(false);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("form", {
        onSubmit: async a => {
          a.preventDefault(), s(true);
          try {
            await (0, d.gs)(e, n), t(""), r("")
          } finally {
            s(false)
          }
        },
        children: (0, a.jsxs)(c.BJc, {
          direction: "vertical",
          align: "center",
          gap: 8,
          children: [(0, a.jsxs)(c.BJc, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            children: [(0, a.jsx)(c.ksK, {
              fullWidth: true,
              value: e,
              onChange: t,
              placeholder: "Pool ID",
              disabled: i
            }), (0, a.jsx)(c.ksK, {
              type: "password",
              fullWidth: true,
              value: n,
              onChange: r,
              placeholder: "Password",
              disabled: i
            })]
          }), (0, a.jsxs)(c.BJc, {
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
                t(""), r("")
              },
              disabled: 0 === e.length || 0 === n.length || i
            }), (0, a.jsx)(c.Button, {
              type: "submit",
              size: "md",
              fullWidth: true,
              variant: "primary",
              text: "Add Pool",
              disabled: 0 === e.length || 0 === n.length || i,
              loading: i
            })]
          })]
        })
      }), (0, a.jsx)(c.cGx, {
        gap: 4
      })]
    })
  },
  b = e => {
    let {
      pool: t
    } = e, {
      id: n,
      summary: r
    } = t, f = u.A.getUsersForPool(n), b = (0, o.bG)([p.default], () => p.default.getId()), v = x[Number(n) % x.length], j = g[Number(n) % g.length], _ = l.useCallback(() => {
      (0, d.cD)(n)
    }, [n]);
    return (0, a.jsx)(c.BJc, {
      direction: "horizontal",
      align: "start",
      justify: "space-between",
      children: (0, a.jsx)(m.A, {
        icon: (0, a.jsx)(c.Text, {
          variant: "text-md/medium",
          color: j,
          className: h.td,
          children: (0, a.jsx)(v, {
            size: "custom",
            width: 24,
            height: 24,
            color: "currentColor"
          })
        }),
        title: r,
        className: h.JC,
        subtitle: "".concat(f.length, " users"),
        children: (0, a.jsxs)(c.BJc, {
          direction: "vertical",
          gap: 4,
          padding: {
            left: 24,
            right: 8,
            bottom: 16
          },
          fullWidth: false,
          children: [f.map((e, n) => (0, a.jsxs)(l.Fragment, {
            children: [0 !== n && (0, a.jsx)(c.cGx, {
              gap: 4
            }), (0, a.jsx)(c.DUT, {
              onClick: n => {
                n.stopPropagation(), (0, d.sl)(t.id, e.id)
              },
              "aria-disabled": b === e.id,
              className: i()(h.vk, {
                [h.Pe]: b === e.id
              }),
              children: (0, a.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 8,
                padding: {
                  right: 8
                },
                fullWidth: false,
                children: [(0, a.jsxs)(c.BJc, {
                  direction: "horizontal",
                  align: "center",
                  gap: 8,
                  fullWidth: false,
                  className: i()({
                    [h.WP]: b === e.id
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
                      className: h.c1,
                      children: e.email
                    })]
                  })]
                }), b === e.id ? (0, a.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-feedback-positive",
                  children: (0, a.jsx)(s.CircleCheckIcon, {
                    size: "sm",
                    color: "currentColor"
                  })
                }) : (0, a.jsx)(c._BQ, {
                  size: "sm",
                  color: "currentColor"
                })]
              }, e.id)
            }, e.id)]
          }, e.id)), (0, a.jsx)("div", {
            className: h.UD,
            children: (0, a.jsx)(c.Button, {
              icon: s.TrashIcon,
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
  let e = (0, o.yK)([u.A], () => {
    var e;
    return null != (e = u.A.getPools()) ? e : []
  });
  return (0, a.jsxs)(c.BJc, {
    padding: 16,
    gap: 16,
    fullWidth: false,
    className: h.kL,
    children: [(0, a.jsx)(f, {}), (0, a.jsx)(c.HOs, {
      className: h.Ik,
      children: null == e ? true : e.map(e => (0, a.jsx)(b, {
        pool: e
      }, e.id))
    })]
  })
}