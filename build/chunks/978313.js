/** Chunk was on 23150 **/
r.d(t, {
  Z: () => _
}), r(47120);
var n = r(200651),
  a = r(192379),
  o = r(120356),
  i = r.n(o),
  l = r(657707),
  s = r(793030),
  c = r(692547),
  u = r(481060),
  d = r(885006),
  p = r(810568),
  f = r(221370),
  m = r(388032),
  g = r(869429),
  b = r(453281);

function _(e) {
  let {
    detectedGame: t,
    trackAction: r
  } = e, [o, _] = a.useState((null == t ? void 0 : t.summaryLocalized) != null), [O, h] = a.useState(!0), [y, v] = a.useState(!1), j = a.useRef(null), {
    width: x,
    height: P
  } = (0, d.Z)();
  return (a.useEffect(() => {
    let e = j.current;
    null != e && v(e.scrollHeight - e.clientHeight > 1 || !O)
  }, [j, x, P, O]), null == t.summary) ? null : (0, n.jsxs)("div", {
    className: i()(g.column, g.gapMd),
    children: [null != t.summaryLocalized && (0, n.jsxs)("div", {
      className: i()(g.row, g.gapSm),
      children: [(0, n.jsx)(l.SxY, {
        color: c.Z.colors.HEADER_SECONDARY,
        size: "xs"
      }), (0, n.jsx)(s.xv, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: o ? m.NW.format(m.t.aZ2iIi, {
          onShowOriginal: () => _(!1)
        }) : m.NW.format(m.t["/2ylFx"], {
          onShowTranslated: () => _(!0)
        })
      })]
    }), (0, n.jsx)(s.xv, {
      ref: j,
      lineClamp: O ? 8 : void 0,
      variant: "text-sm/normal",
      children: o ? t.summaryLocalized : t.summary
    }), y && (0, n.jsx)(u.P3F, {
      className: g.clickable,
      onClick: () => {
        r(O ? p.as.ShowMore : p.as.ShowLess), h(!O)
      },
      children: (0, n.jsx)(s.xv, {
        variant: "text-sm/semibold",
        children: O ? m.NW.string(m.t.lBeKY2) : m.NW.string(m.t["6MwJo6"])
      })
    }), (0, n.jsx)(f.Z, {
      className: b.platforms,
      detectedGame: t
    })]
  })
}