/** Chunk was on 35894 **/
/** chunk id: 512068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk437553 = require("./437553.js"),
  Chunk34457 = require("./34457.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk552247 = require("./552247.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk510403 = require("./510403.js");
let g = e => {
  var t;
  let {
    guild: n,
    transitionState: i,
    onClose: g
  } = e, [h, x] = l.useState(7), [y, O] = l.useState([]), v = null != (t = (0, f._k)(n.id, h, y)) ? t : false;
  l.useEffect(() => {
    let e = e => {
      if (e.guildId !== n.id || !e.prune.isPreview) return;
      let t = e.prune.days,
        r = e.prune.includeRoles,
        l = Number(e.prune.pruneCount);
      (0, f.nA)(e.guildId, t, r, l)
    };
    return u.h.subscribe("GUILD_PRUNE_UPDATE", e), () => {
      u.h.unsubscribe("GUILD_PRUNE_UPDATE", e)
    }
  }, [n.id]), l.useEffect(() => {
    false === v && d.A.updateEstimateV2(n.id, h, y)
  }, [n.id, h, y, v]);
  let _ = l.useCallback(() => {
      d.A.prune(n.id, h, y), g()
    }, [n.id, h, y, g]),
    H = (0, a.yK)([p.A, m.A], () => {
      let e = p.A.getHighestRole(n);
      return o()(m.A.getSortedRoles(n.id)).filter(t => !(0, C.Oy)(t) && p.A.isRoleHigher(n, e, t)).map(e => {
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
    }, [n]);
  return (0, r.jsx)(s.aFV, {
    title: "".concat(b.intl.string(b.t.zbyz7p), "—").concat(null != n ? n.name : ""),
    actions: [{
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: g,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t["2mIlKQ"]),
      onClick: _
    }],
    onClose: async () => {
      await g()
    },
    transitionState: i,
    children: (0, r.jsxs)("div", {
      className: j.Q,
      children: [(0, r.jsx)(c.z6M, {
        label: b.intl.string(b.t.YccTvK),
        value: String(h),
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
          x(Number(e))
        }
      }), (0, r.jsx)(c.IpV, {
        className: j.X,
        children: (0, r.jsx)(c.ZiE, {
          selectionMode: "multiple",
          label: b.intl.string(b.t.buoe17),
          maxOptionsVisible: 10,
          value: y,
          onSelectionChange: e => O(e),
          options: H
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: y.length > 0 ? b.intl.format(b.t["5WxHHp"], {
          members: v,
          days: h
        }) : b.intl.format(b.t.f13az9, {
          members: v,
          days: h
        })
      })]
    })
  })
}