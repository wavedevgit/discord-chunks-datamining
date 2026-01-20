/** Chunk was on 6850 **/
/** chunk id: 446535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk48210 = require("./48210.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk180746 = require("./180746.js");
let p = e => {
  let {
    guild: t,
    transitionState: n,
    onClose: i
  } = e, [p, h] = l.useState(7), [g, j] = l.useState(null), [x, v] = l.useState([]), O = l.useCallback(async () => {
    j(null), j(await d.Z.updateEstimate(t.id, p, x))
  }, [p, t.id, x]);
  l.useEffect(() => {
    O()
  }, [O]);
  let y = l.useCallback(() => {
      d.Z.prune(t.id, p, x), i()
    }, [t.id, p, x, i]),
    H = (0, a.Wu)([m.Z, C.Z], () => {
      let e = m.Z.getHighestRole(t);
      return o()(C.Z.getSortedRoles(t.id)).filter(n => !(0, u.fI)(n) && m.Z.isRoleHigher(t, e, n)).map(e => {
        let {
          id: t,
          name: n
        } = e;
        return {
          id: t,
          label: n,
          value: t
        }
      }).value()
    }, [t]);
  return (0, r.jsx)(s.u_l, {
    title: "".concat(b.intl.string(b.t.zbyz7p), "—").concat(null != t ? t.name : ""),
    actions: [{
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: i,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t["2mIlKQ"]),
      onClick: y
    }],
    onClose: async () => {
      await i()
    },
    transitionState: n,
    children: (0, r.jsxs)("div", {
      className: f.content,
      children: [(0, r.jsx)(c.FXm, {
        label: b.intl.string(b.t.YccTvK),
        value: String(p),
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
        className: f.scroller,
        children: (0, r.jsx)(c.VcW, {
          selectionMode: "multiple",
          label: b.intl.string(b.t.buoe17),
          maxOptionsVisible: 10,
          value: x,
          onSelectionChange: e => v(e),
          options: H
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: x.length > 0 ? b.intl.format(b.t["5WxHHp"], {
          members: g,
          days: p
        }) : b.intl.format(b.t.f13az9, {
          members: g,
          days: p
        })
      })]
    })
  })
}