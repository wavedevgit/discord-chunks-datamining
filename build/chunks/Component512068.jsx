/** Chunk was on 35894 **/
/** chunk id: 512068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk437553 = require("./437553.js"),
  Chunk34457 = require("./34457.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk510403 = require("./510403.js");
let b = e => {
  let {
    guild: t,
    transitionState: n,
    onClose: i
  } = e, [b, j] = l.useState(7), [g, h] = l.useState(null), [x, y] = l.useState([]), O = l.useCallback(async () => {
    h(null), h(await u.A.updateEstimate(t.id, b, x))
  }, [b, t.id, x]);
  l.useEffect(() => {
    O()
  }, [O]);
  let v = l.useCallback(() => {
      u.A.prune(t.id, b, x), i()
    }, [t.id, b, x, i]),
    _ = (0, a.yK)([m.A, C.A], () => {
      let e = m.A.getHighestRole(t);
      return o()(C.A.getSortedRoles(t.id)).filter(n => !(0, d.Oy)(n) && m.A.isRoleHigher(t, e, n)).map(e => {
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
  return (0, r.jsx)(s.aFV, {
    title: "".concat(p.intl.string(p.t.zbyz7p), "—").concat(null != t ? t.name : ""),
    actions: [{
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: i,
      variant: "secondary"
    }, {
      text: p.intl.string(p.t["2mIlKQ"]),
      onClick: v
    }],
    onClose: async () => {
      await i()
    },
    transitionState: n,
    children: (0, r.jsxs)("div", {
      className: f.Q,
      children: [(0, r.jsx)(c.z6M, {
        label: p.intl.string(p.t.YccTvK),
        value: String(b),
        options: [{
          name: p.intl.formatToPlainString(p.t.FM1dHS, {
            days: 7
          }),
          value: "7"
        }, {
          name: p.intl.formatToPlainString(p.t.FM1dHS, {
            days: 30
          }),
          value: "30"
        }],
        onChange: e => {
          j(Number(e))
        }
      }), (0, r.jsx)(c.IpV, {
        className: f.X,
        children: (0, r.jsx)(c.ZiE, {
          selectionMode: "multiple",
          label: p.intl.string(p.t.buoe17),
          maxOptionsVisible: 10,
          value: x,
          onSelectionChange: e => y(e),
          options: _
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: x.length > 0 ? p.intl.format(p.t["5WxHHp"], {
          members: g,
          days: b
        }) : p.intl.format(p.t.f13az9, {
          members: g,
          days: b
        })
      })]
    })
  })
}