/** Chunk was on 94503 **/
/** chunk id: 684968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
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
    roleIds: f,
    guild: I,
    specMap: N,
    categoryTitle: m,
    userId: S
  } = e, R = (0, c.yK)([h.A], () => h.A.getManyRoles(I.id, f)), L = b.xBc[o], x = null != (t = null == (a = N[L.toString()]) ? true : a.title) ? t : (0, A.hx)(L), C = null != (n = null == (s = N[L.toString()]) ? true : s.description) ? n : "", M = p.S2.has(L), v = p.yO.includes(o), j = f.length, U = (0, c.bG)([O.A], () => O.A.can(b.xBc.MANAGE_ROLES, I), [I]), y = r.useCallback(async e => {
    U && (await g.A.open(I.id, b.BEX.ROLES), await g.A.selectRole(e))
  }, [U, I.id]);
  return (0, l.jsxs)("div", {
    className: i()(D.wT, {
      [D.aE]: M
    }),
    children: [(0, l.jsxs)("div", {
      className: D.iY,
      children: [(0, l.jsxs)("div", {
        className: D.gH,
        children: [(0, l.jsx)(E.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: x
        }), null != m && (0, l.jsxs)("div", {
          className: D.OQ,
          children: [(0, l.jsx)(E.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: m
          }), M && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(d.A, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: E.LU0.colors.ICON_MUTED.css
            }), (0, l.jsx)(u.m, {
              text: G.intl.string(G.t.GZvXuP),
              children: (0, l.jsxs)(E.DUT, {
                className: D.Dc,
                children: [(0, l.jsx)(E.m5V, {
                  size: "custom",
                  width: 12,
                  height: 12,
                  color: E.LU0.colors.TEXT_BRAND
                }), (0, l.jsx)(E.Text, {
                  variant: "text-xs/normal",
                  color: "text-brand",
                  children: G.intl.string(G.t.k7Kqj7)
                })]
              })
            })]
          }), !M && v && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(d.A, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: E.LU0.colors.ICON_MUTED.css
            }), (0, l.jsx)("div", {
              className: D.Dc,
              children: (0, l.jsx)(E.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: G.intl.string(G.t.IfqUEM)
              })
            })]
          })]
        })]
      }), (0, l.jsx)(E.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: G.intl.format(G.t.KmJI4A, {
          roleCount: j
        })
      })]
    }), null != C && (0, l.jsx)("div", {
      className: D.Dp,
      children: (0, l.jsx)(E.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: C
      })
    }), (0, l.jsx)("div", {
      className: D.SY,
      children: R.map(e => (0, p._G)(e.id, S) ? (0, l.jsx)("div", {
        className: D.Zf,
        children: (0, l.jsx)("div", {
          className: D.o9,
          children: (0, l.jsx)(E.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: G.intl.string(G.t.pclUFJ)
          })
        })
      }, e.id) : (0, l.jsx)(E.DUT, {
        className: i()(D.Zf, {
          [D.LL]: U && !(0, T.Oy)(e)
        }),
        onClick: () => y(e.id),
        children: (0, l.jsx)(_.A, {
          role: e,
          guildId: I.id,
          className: D.o9
        })
      }, e.id))
    })]
  })
}

function x(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function C(e) {
  let {
    userId: t,
    guildId: n,
    location: a,
    className: s,
    onNavigate: u
  } = e, d = (0, c.bG)([N.default], () => N.default.getUser(t), [t]), _ = (0, c.bG)([I.A], () => I.A.getGuild(n), [n]), g = (0, c.bG)([f.Ay], () => f.Ay.getMember(n, t), [n, t]), T = (0, p.RP)(t, n, p.lp), h = Object.keys(T).length, O = r.useMemo(() => null != _ ? m.A.getGuildPermissionSpecMap(_) : null, [_]), C = r.useMemo(() => null != _ ? m.A.generateGuildPermissionSpec(_) : null, [_]), [M, v] = r.useState(""), [j, U] = r.useState(""), y = r.useMemo(() => o()(U, 300), []), P = r.useCallback(e => {
    v(e), y(e)
  }, [y]), k = r.useCallback(() => {
    v(""), U("")
  }, []), F = r.useMemo(() => {
    if (null == _ || null == O || null == g) return null;
    if (0 === h) return (0, l.jsx)(E.Text, {
      variant: "text-sm/normal",
      children: G.intl.string(G.t.DEBGqA)
    });
    let e = [];
    return null == C || C.forEach(n => {
      n.permissions.forEach(r => {
        let a = r.flag,
          i = p.lp.find(e => b.xBc[e] === a);
        if (null == i) return;
        let s = T[i];
        if (null != s) {
          if (j.length > 0) {
            var o, c, u, E, d;
            let e = null != (o = null == (u = O[a.toString()]) ? true : u.title) ? o : (0, A.hx)(a),
              t = null != (c = null == (d = O[a.toString()]) || null == (E = d.description) ? true : E.toString()) ? c : "",
              l = n.title,
              r = p.S2.has(a),
              s = p.yO.includes(i),
              _ = r ? G.intl.string(G.t.k7Kqj7) : s ? G.intl.string(G.t.IfqUEM) : null,
              g = x(j, e),
              T = x(j, t),
              f = x(j, l),
              h = null != _ && x(j, _);
            if (!g && !T && !f && !h) return
          }
          e.push((0, l.jsx)(L, {
            permission: i,
            roleIds: s,
            guild: _,
            specMap: O,
            categoryTitle: n.title,
            userId: t
          }, i))
        }
      })
    }), e
  }, [_, O, g, h, C, T, j, t]);
  return null == d || null == g ? null : (0, l.jsxs)("div", {
    className: i()(R.kL, s),
    children: [(0, l.jsx)(S.A, {
      guildId: n,
      userId: t,
      onNavigate: u
    }), (0, l.jsx)(E.HOs, {
      className: D.b3,
      children: (0, l.jsx)(E.nVY, {
        label: G.intl.string(G.t.BBWnpr),
        children: (0, l.jsxs)("div", {
          className: D.xV,
          children: [(0, l.jsx)(E.IWV, {
            size: "sm",
            query: M,
            placeholder: G.intl.string(G.t["yD9+dN"]),
            onChange: P,
            onClear: k,
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