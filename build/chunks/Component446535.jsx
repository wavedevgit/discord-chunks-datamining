/** Chunk was on 6850 **/
/** chunk id: 446535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk48210 = require("./48210.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk180746 = require("./180746.js");
let h = e => {
  let {
    guild: t,
    transitionState: n,
    onClose: i
  } = e, [h, g] = l.useState(7), [j, x] = l.useState(null), [v, y] = l.useState([]), O = l.useCallback(async () => {
    x(null), x(await u.Z.updateEstimate(t.id, h, v))
  }, [h, t.id, v]);
  l.useEffect(() => {
    O()
  }, [O]);
  let H = l.useCallback(() => {
      u.Z.prune(t.id, h, v), i()
    }, [t.id, h, v, i]),
    w = (0, a.Wu)([b.Z, m.Z], () => {
      let e = b.Z.getHighestRole(t);
      return o()(m.Z.getSortedRoles(t.id)).filter(n => !(0, C.fI)(n) && b.Z.isRoleHigher(t, e, n)).map(e => {
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
  return (0, r.jsx)(c.u_l, {
    title: "".concat(f.intl.string(f.t.zbyz7p), "—").concat(null != t ? t.name : ""),
    actions: [{
      text: f.intl.string(f.t["ETE/oC"]),
      onClick: i,
      variant: "secondary"
    }, {
      text: f.intl.string(f.t["2mIlKQ"]),
      onClick: H
    }],
    onClose: async () => {
      await i()
    },
    transitionState: n,
    children: (0, r.jsxs)("div", {
      className: p.content,
      children: [(0, r.jsx)(d.FXm, {
        label: f.intl.string(f.t.YccTvK),
        value: String(h),
        options: [{
          name: f.intl.formatToPlainString(f.t.FM1dHS, {
            days: 7
          }),
          value: "7"
        }, {
          name: f.intl.formatToPlainString(f.t.FM1dHS, {
            days: 30
          }),
          value: "30"
        }],
        onChange: e => {
          g(Number(e))
        }
      }), (0, r.jsx)(d.zJl, {
        className: p.scroller,
        children: (0, r.jsx)(s.d, {
          label: f.intl.string(f.t.buoe17),
          maxVisibleItems: 10,
          multi: true,
          value: v,
          onChange: e => y(e),
          options: w
        })
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: v.length > 0 ? f.intl.format(f.t["5WxHHp"], {
          members: j,
          days: h
        }) : f.intl.format(f.t.f13az9, {
          members: j,
          days: h
        })
      })]
    })
  })
}