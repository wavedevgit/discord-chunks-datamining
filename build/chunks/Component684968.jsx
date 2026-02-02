/** Chunk was on 2155 **/
/** chunk id: 684968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./228524.js"), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk111956 = require("./111956.js"),
  o = require.n(Chunk111956),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk640708 = require("./640708.jsx"),
  Chunk950072 = require("./950072.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk376092 = require("./376092.js"),
  Chunk34457 = require("./34457.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk558393 = require("./558393.js"),
  Chunk62697 = require("./62697.jsx"),
  Chunk595849 = require("./595849.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438536 = require("./438536.js"),
  Chunk890865 = require("./890865.js");

function L(e) {
  var t, n, a, s;
  let {
    permission: o,
    roleIds: I,
    guild: h,
    specMap: m,
    categoryTitle: f,
    userId: S
  } = e, D = (0, u.yK)([O.A], () => O.A.getManyRoles(h.id, I)), L = G.xBc[o], x = null != (t = null == (a = m[L.toString()]) ? true : a.title) ? t : (0, A.hx)(L), b = null != (n = null == (s = m[L.toString()]) ? true : s.description) ? n : "", M = p.S2.has(L), v = p.yO.includes(o), U = I.length, j = (0, u.bG)([N.A], () => N.A.can(G.xBc.MANAGE_ROLES, h), [h]), y = r.useCallback(async e => {
    j && (await g.A.open(h.id, G.BEX.ROLES), await g.A.selectRole(e))
  }, [j, h.id]);
  return (0, l.jsxs)("div", {
    className: i()(C.wT, {
      [C.aE]: M
    }),
    children: [(0, l.jsxs)("div", {
      className: C.iY,
      children: [(0, l.jsxs)("div", {
        className: C.gH,
        children: [(0, l.jsx)(E.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: x
        }), null != f && (0, l.jsxs)("div", {
          className: C.OQ,
          children: [(0, l.jsx)(E.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: f
          }), M && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(_.A, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: E.LU0.colors.ICON_MUTED.css
            }), (0, l.jsx)(c.m, {
              text: R.intl.string(R.t.GZvXuP),
              children: (0, l.jsxs)(E.DUT, {
                className: C.Dc,
                children: [(0, l.jsx)(E.m5V, {
                  size: "custom",
                  width: 12,
                  height: 12,
                  color: E.LU0.colors.TEXT_BRAND
                }), (0, l.jsx)(E.Text, {
                  variant: "text-xs/normal",
                  color: "text-brand",
                  children: R.intl.string(R.t.k7Kqj7)
                })]
              })
            })]
          }), !M && v && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(_.A, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: E.LU0.colors.ICON_MUTED.css
            }), (0, l.jsx)("div", {
              className: C.Dc,
              children: (0, l.jsx)(E.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: R.intl.string(R.t.IfqUEM)
              })
            })]
          })]
        })]
      }), (0, l.jsx)(E.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: R.intl.format(R.t.KmJI4A, {
          roleCount: U
        })
      })]
    }), null != b && (0, l.jsx)("div", {
      className: C.Dp,
      children: (0, l.jsx)(E.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: b
      })
    }), (0, l.jsx)("div", {
      className: C.SY,
      children: D.map(e => (0, p._G)(e.id, S) ? (0, l.jsx)("div", {
        className: C.Zf,
        children: (0, l.jsx)("div", {
          className: C.o9,
          children: (0, l.jsx)(E.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: R.intl.string(R.t.pclUFJ)
          })
        })
      }, e.id) : (0, l.jsx)(E.DUT, {
        className: i()(C.Zf, {
          [C.LL]: j && !(0, T.Oy)(e)
        }),
        onClick: () => y(e.id),
        children: (0, l.jsx)(d.A, {
          role: e,
          guildId: h.id,
          className: C.o9
        })
      }, e.id))
    })]
  })
}

function x(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function b(e) {
  let {
    userId: t,
    guildId: n,
    location: a,
    className: s,
    onNavigate: c
  } = e, _ = (0, u.bG)([m.default], () => m.default.getUser(t), [t]), d = (0, u.bG)([h.A], () => h.A.getGuild(n), [n]), g = (0, u.bG)([I.Ay], () => I.Ay.getMember(n, t), [n, t]), T = (0, p.RP)(t, n, p.lp), O = Object.keys(T).length, N = r.useMemo(() => null != d ? f.A.getGuildPermissionSpecMap(d) : null, [d]), b = r.useMemo(() => null != d ? f.A.generateGuildPermissionSpec(d) : null, [d]), [M, v] = r.useState(""), [U, j] = r.useState(""), y = r.useMemo(() => o()(j, 300), []), k = r.useCallback(e => {
    v(e), y(e)
  }, [y]), P = r.useCallback(() => {
    v(""), j("")
  }, []), F = r.useMemo(() => {
    if (null == d || null == N || null == g) return null;
    if (0 === O) return (0, l.jsx)(E.Text, {
      variant: "text-sm/normal",
      children: R.intl.string(R.t.DEBGqA)
    });
    let e = [];
    return null == b || b.forEach(n => {
      n.permissions.forEach(r => {
        let a = r.flag,
          i = p.lp.find(e => G.xBc[e] === a);
        if (null == i) return;
        let s = T[i];
        if (null != s) {
          if (U.length > 0) {
            var o, u, c, E, _;
            let e = null != (o = null == (c = N[a.toString()]) ? true : c.title) ? o : (0, A.hx)(a),
              t = null != (u = null == (_ = N[a.toString()]) || null == (E = _.description) ? true : E.toString()) ? u : "",
              l = n.title,
              r = p.S2.has(a),
              s = p.yO.includes(i),
              d = r ? R.intl.string(R.t.k7Kqj7) : s ? R.intl.string(R.t.IfqUEM) : null,
              g = x(U, e),
              T = x(U, t),
              I = x(U, l),
              O = null != d && x(U, d);
            if (!g && !T && !I && !O) return
          }
          e.push((0, l.jsx)(L, {
            permission: i,
            roleIds: s,
            guild: d,
            specMap: N,
            categoryTitle: n.title,
            userId: t
          }, i))
        }
      })
    }), e
  }, [d, N, g, O, b, T, U, t]);
  return null == _ || null == g ? null : (0, l.jsxs)("div", {
    className: i()(D.kL, s),
    children: [(0, l.jsx)(S.A, {
      guildId: n,
      userId: t,
      onNavigate: c
    }), (0, l.jsx)(E.HOs, {
      className: C.b3,
      children: (0, l.jsx)(E.nVY, {
        label: R.intl.string(R.t.BBWnpr),
        children: (0, l.jsxs)("div", {
          className: C.xV,
          children: [(0, l.jsx)(E.IWV, {
            size: "sm",
            query: M,
            placeholder: R.intl.string(R.t["yD9+dN"]),
            onChange: k,
            onClear: P,
            autoComplete: "off",
            inputProps: {
              autoCapitalize: "none",
              autoCorrect: "off",
              spellCheck: "false"
            }
          }), F]
        })
      })
    })]
  })
}