/** Chunk was on 6850 **/
/** chunk id: 102560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk48210 = require("./48210.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201367 = require("./201367.js");
let p = e => {
  let {
    guild: t,
    transitionState: n,
    onClose: o
  } = e, [p, f] = l.useState(7), [h, j] = l.useState(null), [g, x] = l.useState([]), v = l.useCallback(async () => {
    j(null), j(await c.Z.updateEstimate(t.id, p, g))
  }, [p, t.id, g]);
  l.useEffect(() => {
    v()
  }, [v]);
  let y = (0, a.Wu)([C.Z, d.Z], () => {
    let e = C.Z.getHighestRole(t);
    return i()(d.Z.getSortedRoles(t.id)).filter(n => !(0, u.fI)(n) && C.Z.isRoleHigher(t, e, n)).map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        label: n,
        value: t
      }
    }).value()
  }, [t]);
  return (0, r.jsxs)(s.Y0X, {
    transitionState: n,
    parentComponent: "PruneGuild",
    children: [(0, r.jsx)(s.xBx, {
      separator: false,
      children: (0, r.jsxs)(s.X6q, {
        variant: "heading-lg/semibold",
        children: [m.intl.string(m.t.zbyz7u), "—", null != t ? t.name : ""]
      })
    }), (0, r.jsxs)("div", {
      className: b.content,
      children: [(0, r.jsx)(s.xJW, {
        title: m.intl.string(m.t.YccTvL),
        children: (0, r.jsx)(s.FXm, {
          value: p,
          options: [{
            name: m.intl.formatToPlainString(m.t.FM1dHR, {
              days: 7
            }),
            value: 7
          }, {
            name: m.intl.formatToPlainString(m.t.FM1dHR, {
              days: 30
            }),
            value: 30
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            f(t)
          },
          className: b.spacing
        })
      }), (0, r.jsx)(s.xJW, {
        title: m.intl.string(m.t.buoe19),
        children: (0, r.jsx)(s.zJl, {
          className: b.scroller,
          children: (0, r.jsx)(s.VcW, {
            maxVisibleItems: 10,
            multi: true,
            value: g,
            onChange: e => x(e),
            options: y
          })
        })
      }), (0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        className: b.spacing,
        children: g.length > 0 ? m.intl.format(m.t["5WxHHh"], {
          members: h,
          days: p
        }) : m.intl.format(m.t.f13az8, {
          members: h,
          days: p
        })
      })]
    }), (0, r.jsx)(s.mzw, {
      children: (0, r.jsxs)(s.hE2, {
        direction: "horizontal-reverse",
        children: [(0, r.jsx)(s.zxk, {
          variant: "primary",
          text: m.intl.string(m.t["2mIlKS"]),
          onClick: () => {
            c.Z.prune(t.id, p, g), o()
          }
        }), (0, r.jsx)(s.zxk, {
          variant: "secondary",
          text: m.intl.string(m.t["ETE/oK"]),
          onClick: o
        })]
      })
    })]
  })
}