/** Chunk was on 6850 **/
/** chunk id: 102560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk48210 = require("./48210.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk792353 = require("./792353.js");
let f = e => {
  let {
    guild: t,
    transitionState: n,
    onClose: i
  } = e, [f, h] = l.useState(7), [j, g] = l.useState(null), [x, v] = l.useState([]), y = l.useCallback(async () => {
    g(null), g(await u.Z.updateEstimate(t.id, f, x))
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
      children: (0, r.jsxs)(c.X6q, {
        variant: "heading-lg/semibold",
        children: [b.intl.string(b.t.zbyz7u), "—", null != t ? t.name : ""]
      })
    }), (0, r.jsxs)("div", {
      className: p.content,
      children: [(0, r.jsx)(s.Gu, {
        label: b.intl.string(b.t.YccTvL),
        value: f,
        options: [{
          name: b.intl.formatToPlainString(b.t.FM1dHR, {
            days: 7
          }),
          value: 7
        }, {
          name: b.intl.formatToPlainString(b.t.FM1dHR, {
            days: 30
          }),
          value: 30
        }],
        onChange: e => {
          let {
            value: t
          } = e;
          h(t)
        },
        className: p.spacing
      }), (0, r.jsx)(c.xJW, {
        title: b.intl.string(b.t.buoe19),
        children: (0, r.jsx)(c.zJl, {
          className: p.scroller,
          children: (0, r.jsx)(c.VcW, {
            maxVisibleItems: 10,
            multi: true,
            value: x,
            onChange: e => v(e),
            options: O
          })
        })
      }), (0, r.jsx)(c.R94, {
        type: c.R94.Types.DESCRIPTION,
        className: p.spacing,
        children: x.length > 0 ? b.intl.format(b.t["5WxHHh"], {
          members: j,
          days: f
        }) : b.intl.format(b.t.f13az8, {
          members: j,
          days: f
        })
      })]
    }), (0, r.jsx)(c.mzw, {
      children: (0, r.jsxs)(c.hE2, {
        direction: "horizontal-reverse",
        children: [(0, r.jsx)(c.zxk, {
          variant: "primary",
          text: b.intl.string(b.t["2mIlKS"]),
          onClick: () => {
            u.Z.prune(t.id, f, x), i()
          }
        }), (0, r.jsx)(c.zxk, {
          variant: "secondary",
          text: b.intl.string(b.t["ETE/oK"]),
          onClick: i
        })]
      })
    })]
  })
}