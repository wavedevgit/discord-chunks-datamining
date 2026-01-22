/** Chunk was on 94503 **/
/** chunk id: 769786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk950072 = require("./950072.jsx"),
  Chunk376092 = require("./376092.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk558393 = require("./558393.js"),
  Chunk829887 = require("./829887.jsx"),
  Chunk595849 = require("./595849.js"),
  Chunk486974 = require("./486974.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk636376 = require("./636376.js");

function N(e) {
  var t, n;
  let {
    permission: r,
    roleIds: a,
    guild: _,
    specMap: g
  } = e, A = h.xBc[r], f = null != (t = null == (n = g[A.toString()]) ? true : n.title) ? t : (0, E.hx)(A), N = T.S2.has(A), m = (0, s.yK)([d.A], () => d.A.getManyRoles(_.id, a), [_.id, a]);
  return (0, l.jsx)(o.m, {
    "aria-label": I.intl.string(I.t["0g8Xd/"]),
    __unsupportedReactNodeAsText: (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: N ? I.intl.string(I.t["GEuu/O"]) : I.intl.string(I.t.wgGiCk)
      }), m.map(e => (0, l.jsx)("div", {
        className: O.Zf,
        children: (0, l.jsx)(u.A, {
          role: e,
          guildId: _.id
        })
      }, e.id))]
    }),
    children: (0, l.jsxs)(c.DUT, {
      className: i()(O.t2, {
        [O.aE]: N
      }),
      children: [N && (0, l.jsx)(c.m5V, {
        size: "custom",
        width: 16,
        height: 16,
        color: c.LU0.colors.TEXT_BRAND
      }), (0, l.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: f
      })]
    })
  })
}
let m = Chunk64700.memo(function(e) {
  let {
    member: t,
    onNavigate: n
  } = e, a = (0, s.bG)([_.A], () => _.A.getGuild(t.guildId), [t.guildId]), o = (0, T.RP)(t.userId, t.guildId, T.yO), u = (0, T.RP)(t.userId, t.guildId, T.lp), E = Object.keys(o).length, d = Object.keys(u).length, m = r.useMemo(() => null != a ? g.A.getGuildPermissionSpecMap(a) : null, [a]), S = r.useMemo(() => null != a ? g.A.generateGuildPermissionSpec(a) : null, [a]), p = r.useMemo(() => {
    if (null == a || null == m) return null;
    if (0 === E) return (0, l.jsx)("div", {
      className: i()(O.t2, O.FI),
      children: (0, l.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-positive",
        children: I.intl.string(I.t.sXhykX)
      })
    });
    let e = [];
    return null == S || S.forEach(t => {
      t.permissions.forEach(t => {
        let n = t.flag,
          r = T.lp.find(e => h.xBc[e] === n);
        if (null == r) return;
        let i = o[r];
        null != i && e.push((0, l.jsx)(N, {
          permission: r,
          roleIds: i,
          guild: a,
          specMap: m
        }, r))
      })
    }), e
  }, [a, E, o, S, m]);
  return null == a ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: O.N1,
      children: [(0, l.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: I.intl.string(I.t.ZCq2nC)
      }), (0, l.jsxs)(c.DUT, {
        className: O.bz,
        onClick: () => n(f.g.PERMISSIONS),
        children: [(0, l.jsx)(c.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          children: I.intl.format(I.t["0x6aTm"], {
            count: d
          })
        }), (0, l.jsx)(c._BQ, {
          size: "custom",
          width: 16,
          height: 16
        })]
      })]
    }), (0, l.jsx)(A.SQ, {
      children: (0, l.jsx)(A.RU, {
        description: (0, l.jsx)("div", {
          className: O.SL,
          children: p
        })
      })
    })]
  })
})