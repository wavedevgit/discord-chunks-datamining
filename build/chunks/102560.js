/** Chunk was on 6850 (8da95b630813dff8.js) **/
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651),
  l = n(192379),
  o = n(392711),
  a = n.n(o),
  i = n(442837),
  s = n(481060),
  c = n(48210),
  u = n(605436),
  d = n(430824),
  C = n(496675),
  m = n(388032),
  b = n(19500);
let p = e => {
  let {
    guild: t,
    transitionState: n,
    onClose: o
  } = e, [p, f] = l.useState(7), [h, j] = l.useState(null), [g, x] = l.useState([]), v = l.useCallback(async () => {
    j(null), j(await c.Z.updateEstimate(t.id, p, g))
  }, [p, t.id, g]);
  l.useEffect(() => {
    v()
  }, [v]);
  let y = (0, i.Wu)([C.Z, d.Z], () => {
    let e = C.Z.getHighestRole(t);
    return a()(d.Z.getRoles(t.id)).sortBy(e => e.position).filter(e => !(0, u.pM)(t.id, e.id)).filter(n => C.Z.isRoleHigher(t, e, n)).value().map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        label: n,
        value: t
      }
    })
  }, [t]);
  return (0, r.jsxs)(s.Y0X, {
    transitionState: n,
    children: [(0, r.jsx)(s.xBx, {
      separator: !1,
      children: (0, r.jsxs)(s.X6q, {
        variant: "heading-lg/semibold",
        children: [m.NW.string(m.t.zbyz7u), "—", null != t ? t.toString() : ""]
      })
    }), (0, r.jsxs)("div", {
      className: b.content,
      children: [(0, r.jsx)(s.xJW, {
        title: m.NW.string(m.t.YccTvL),
        children: (0, r.jsx)(s.FXm, {
          value: p,
          options: [{
            name: m.NW.formatToPlainString(m.t.FM1dHR, {
              days: 7
            }),
            value: 7
          }, {
            name: m.NW.formatToPlainString(m.t.FM1dHR, {
              days: 30
            }),
            value: 30
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            f(t)
          },
          className: b.spacing
        })
      }), (0, r.jsx)(s.xJW, {
        title: m.NW.string(m.t.buoe19),
        children: (0, r.jsx)(s.zJl, {
          className: b.scroller,
          children: (0, r.jsx)(s.VcW, {
            maxVisibleItems: 10,
            multi: !0,
            value: g,
            onChange: e => x(e),
            options: y
          })
        })
      }), (0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        className: b.spacing,
        children: g.length > 0 ? m.NW.format(m.t["5WxHHh"], {
          members: h,
          days: p
        }) : m.NW.format(m.t.f13az8, {
          members: h,
          days: p
        })
      })]
    }), (0, r.jsxs)(s.mzw, {
      children: [(0, r.jsx)(s.zxk, {
        onClick: () => {
          c.Z.prune(t.id, p, g), o()
        },
        children: m.NW.string(m.t["2mIlKS"])
      }), (0, r.jsx)(s.zxk, {
        look: s.zxk.Looks.LINK,
        color: s.zxk.Colors.PRIMARY,
        onClick: o,
        children: m.NW.string(m.t["ETE/oK"])
      })]
    })]
  })
}