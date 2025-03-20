/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(186523),
  A = n(553826),
  c = n(2150),
  d = n(992249),
  u = n(717251),
  g = n(388032),
  f = n(514662);

function m(e) {
  var t, n, s;
  let {
    changeTitle: m,
    value: p,
    options: h,
    className: C,
    onChange: b
  } = e, [v, x] = i.useState(p), [N, j] = i.useState(!1), [E, I] = i.useState(!1), O = i.useRef(null);
  i.useEffect(() => {
    x(p)
  }, [p]), i.useEffect(() => () => {
    clearTimeout(O.current)
  }, []);
  let y = h.find(e => e.value === v),
    w = e => {
      !e.disabled && e.value !== v && (I(!0), null == b || b(e), x(e.value), O.current = setTimeout(() => {
        I(!1), j(!1)
      }, 1e3))
    };
  return (0, r.jsx)(d.Z, {
    title: N ? m : null !== (t = null == y ? void 0 : y.title) && void 0 !== t ? t : m,
    description: N ? "(".concat(null !== (n = null == y ? void 0 : y.title) && void 0 !== n ? n : g.NW.string(g.t.PoWNfX), ")") : null !== (s = null == y ? void 0 : y.description) && void 0 !== s ? s : "",
    highlightColor: N ? c.q.NONE : null == y ? void 0 : y.highlightColor,
    action: (0, r.jsx)(l.zxk, {
      look: l.zxk.Looks.LINK,
      size: l.zxk.Sizes.MIN,
      color: l.zxk.Colors.LINK,
      children: g.NW.string(g.t.GEgsAw)
    }),
    loading: E,
    className: C,
    children: h.map((e, t) => (0, r.jsx)(u.Z, {
      title: e.title,
      description: e.description,
      highlightColor: e.highlightColor,
      className: a()(f.groupCollapsedRow, v === e.value && f.selected),
      selected: v === e.value,
      action: v === e.value ? (0, r.jsx)(A.Z, {
        className: f.radioItem
      }) : (0, r.jsx)(o.Z, {
        className: f.radioItem
      }),
      onClick: () => w(e),
      disabled: e.disabled
    }, "".concat(e.title, "-").concat(t)))
  })
}