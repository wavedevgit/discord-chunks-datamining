/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(572192);
let c = i.memo(function(e) {
  let {
    text: t,
    variant: n = "text-xs/medium",
    color: o = "text-normal",
    icon: c,
    className: u,
    selected: d,
    onMouseEnter: f,
    onMouseLeave: _,
    onClick: p
  } = e, h = i.useMemo(() => {
    if (null != p) return () => p(t)
  }, [p, t]);
  return (0, r.jsxs)(s.P3F, {
    tabIndex: null == p ? -1 : 0,
    className: a()(l.trait, {
      [l.selectable]: null != h && !d,
      [l.selected]: d,
      [l.clickable]: null != h
    }, u),
    onMouseEnter: f,
    onMouseLeave: _,
    onClick: h,
    children: [null != c && (0, r.jsx)(c, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(s.Text, {
      variant: n,
      color: o,
      lineClamp: 1,
      children: t
    })]
  })
})