/** Chunk was on 30243 **/
r.d(t, {
  Gt: () => f,
  ZP: () => O
}), r(47120);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  o = r.n(i),
  a = r(95398),
  c = r(169525),
  s = r(197653),
  u = r(34209);
let d = {
    isInContainer: !0
  },
  p = l.createContext({
    isInContainer: !1
  });

function b(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)(p.Provider, {
    value: d,
    children: t
  })
}

function f() {
  let {
    isInContainer: e
  } = l.useContext(p);
  return e
}

function O(e) {
  let {
    components: t,
    accentColor: r,
    spoiler: i,
    renderComponents: d
  } = e, [p, f] = l.useState(i), O = e => (0, n.jsx)(s.am.AutoMeasuredNestedContainer, {
    children: l => (0, n.jsx)("div", {
      ref: l,
      className: o()(u.container, {
        [u.isHidden]: e,
        [u.withAccentColor]: null != r
      }),
      style: {
        "--__accent-color": r
      },
      children: (0, n.jsx)(b, {
        children: d(t)
      })
    })
  });
  return null == t || 0 === t.length ? null : i ? (0, n.jsx)(a.ZP, {
    type: a.ZP.Types.ATTACHMENT,
    reason: c.wk.SPOILER,
    obscured: p,
    onToggleObscurity: () => f(e => !e),
    children: e => O(e)
  }) : O(!1)
}