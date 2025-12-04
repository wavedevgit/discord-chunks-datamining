/** Chunk was on 6850 **/
/** chunk id: 446535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk48210 = require("./48210.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk797966 = require("./797966.js");
let f = e => {
  let {
    guild: t,
    transitionState: n,
    onClose: i
  } = e, [f, h] = l.useState(7), [g, j] = l.useState(null), [x, v] = l.useState([]), y = l.useCallback(async () => {
    j(null), j(await u.Z.updateEstimate(t.id, f, x))
  }, [f, t.id, x]);
  l.useEffect(() => {
    y()
  }, [y]);
  let O = (0, a.Wu)([m.Z, C.Z], () => {
    let e = m.Z.getHighestRole(t);
    return o()(C.Z.getSortedRoles(t.id)).filter(n => !(0, d.fI)(n) && m.Z.isRoleHigher(t, e, n)).map(e => {
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
  return (0, r.jsxs)(c.Y0X, {
    transitionState: n,
    parentComponent: "PruneGuild",
    children: [(0, r.jsx)(c.xBx, {
      separator: false,
      children: (0, r.jsxs)(c.Heading, {
        variant: "heading-lg/semibold",
        children: [b.intl.string(b.t.zbyz7p), "—", null != t ? t.name : ""]
      })
    }), (0, r.jsxs)("div", {
      className: p.content,
      children: [(0, r.jsx)(c.FXm, {
        label: b.intl.string(b.t.YccTvK),
        value: String(f),
        options: [{
          name: b.intl.formatToPlainString(b.t.FM1dHS, {
            days: 7
          }),
          value: "7"
        }, {
          name: b.intl.formatToPlainString(b.t.FM1dHS, {
            days: 30
          }),
          value: "30"
        }],
        onChange: e => {
          h(Number(e))
        }
      }), (0, r.jsx)(c.zJl, {
        className: p.scroller,
        children: (0, r.jsx)(s.d, {
          label: b.intl.string(b.t.buoe17),
          maxVisibleItems: 10,
          multi: true,
          value: x,
          onChange: e => v(e),
          options: O
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        className: p.spacing,
        children: x.length > 0 ? b.intl.format(b.t["5WxHHp"], {
          members: g,
          days: f
        }) : b.intl.format(b.t.f13az9, {
          members: g,
          days: f
        })
      })]
    }), (0, r.jsx)(c.mzw, {
      children: (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, r.jsx)(c.Button, {
          variant: "primary",
          text: b.intl.string(b.t["2mIlKQ"]),
          onClick: () => {
            u.Z.prune(t.id, f, x), i()
          }
        }), (0, r.jsx)(c.Button, {
          variant: "secondary",
          text: b.intl.string(b.t["ETE/oC"]),
          onClick: i
        })]
      })
    })]
  })
}