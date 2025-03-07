/** Chunk was on 51724 **/
n.d(t, {
  Z: () => x
}), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(561537),
  o = n(269210),
  c = n(481060),
  d = n(58385),
  u = n(889989),
  m = n(937615),
  p = n(624138),
  g = n(150414),
  h = n(993553),
  f = n(960700);

function x(e) {
  let {
    cta: t,
    storeListing: n,
    className: s
  } = e, {
    applicationId: x,
    benefits: b,
    description: N
  } = n, _ = i.useMemo(() => null == n.thumbnail ? null : (0, g.q)(x, n.thumbnail, 256), [x, n.thumbnail]), {
    data: E
  } = (0, d.X)(n.skuId), C = i.useMemo(() => {
    if (null == E || 0 === E.length) return null;
    let e = E[0];
    return (0, m.xg)(e)
  }, [E]);
  return null == C ? null : (0, r.jsxs)(l.l, {
    className: a()(f.wrapper, s),
    header: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: f.headerTitle,
        children: [null != _ && (0, r.jsx)(c.Eep, {
          src: _.href,
          imageClassName: f.subscriptionImg,
          width: 48,
          height: 48
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-md/bold",
            children: n.summary
          }), (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            children: C
          })]
        })]
      }), t]
    }),
    children: [!(0, p.Ew)(N) && (0, r.jsx)("div", {
      className: f.description,
      children: (0, r.jsx)(h.Z, {
        variant: "text-sm/medium",
        children: N
      })
    }), null != b && b.length > 0 && (0, r.jsx)("div", {
      className: f.benefits,
      children: b.map(e => {
        let {
          id: t,
          name: n,
          description: i,
          icon: s
        } = e;
        return (0, r.jsx)(o.Gm, {
          header: n,
          icon: (0, u.n)(x, s),
          description: i
        }, t)
      })
    })]
  })
}