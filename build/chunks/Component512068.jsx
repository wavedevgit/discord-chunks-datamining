/** Chunk was on 35894 **/
/** chunk id: 512068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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
let p = e => {
  let {
    guild: t,
    transitionState: n,
    onClose: i
  } = e, [p, j] = l.useState(7), [g, h] = l.useState(null), [x, y] = l.useState([]), O = l.useCallback(async () => {
    h(null), h(await d.A.updateEstimate(t.id, p, x))
  }, [p, t.id, x]);
  l.useEffect(() => {
    O()
  }, [O]);
  let v = l.useCallback(() => {
      d.A.prune(t.id, p, x), i()
    }, [t.id, p, x, i]),
    H = (0, a.yK)([f.A, C.A], () => {
      let e = f.A.getHighestRole(t);
      return o()(C.A.getSortedRoles(t.id)).filter(n => !(0, u.Oy)(n) && f.A.isRoleHigher(t, e, n)).map(e => {
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
    title: "".concat(b.intl.string(b.t.zbyz7p), "—").concat(null != t ? t.name : ""),
    actions: [{
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: i,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t["2mIlKQ"]),
      onClick: v
    }],
    onClose: async () => {
      await i()
    },
    transitionState: n,
    children: (0, r.jsxs)("div", {
      className: m.Q,
      children: [(0, r.jsx)(c.z6M, {
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
          j(Number(e))
        }
      }), (0, r.jsx)(c.IpV, {
        className: m.X,
        children: (0, r.jsx)(c.ZiE, {
          selectionMode: "multiple",
          label: b.intl.string(b.t.buoe17),
          maxOptionsVisible: 10,
          value: x,
          onSelectionChange: e => y(e),
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