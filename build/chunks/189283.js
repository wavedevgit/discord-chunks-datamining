/** Chunk was on web.js **/
"use strict";
n.d(t, {
  s: () => p
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(1561),
  l = n(993365),
  c = n(75835);

function u(e) {
  switch (e) {
    case "tab":
    default:
      return c.tabContainer;
    case "pill":
      return c.pillContainer
  }
}

function d(e) {
  switch (e) {
    case "tab":
    default:
      return c.tabItem;
    case "pill":
      return c.pillItem
  }
}

function f(e) {
  switch (e) {
    case "tab":
    default:
      return c.tabItemSelected;
    case "pill":
      return c.pillItemSelected
  }
}

function _(e) {
  let {
    option: t,
    selected: n,
    onClick: o,
    look: u,
    className: _,
    selectedClassName: p
  } = e, h = {
    [f(u)]: n
  };
  null != p && (h[p] = n);
  let g = i.useCallback(e => o(t, e), [o, t]);
  return (0, r.jsx)(s.P, {
    className: a()(d(u), _, h),
    onClick: g,
    children: (0, r.jsxs)(l.x, {
      className: c.controlText,
      variant: "text-sm/medium",
      color: "none",
      children: [null != t.icon ? (0, r.jsx)(t.icon, {
        className: c.icon
      }) : null, t.name]
    })
  })
}

function p(e) {
  let {
    options: t,
    value: n,
    onChange: o,
    look: s = "tab",
    className: l,
    optionClassName: c,
    selectedOptionClassName: d
  } = e, f = i.useCallback(e => {
    var t;
    let i = n === e.value;
    return (0, r.jsx)(_, {
      selected: i,
      option: e,
      look: s,
      onClick: o,
      className: c,
      selectedClassName: d
    }, null !== (t = e.key) && void 0 !== t ? t : String(e.value))
  }, [n, s, o, c, d]);
  return (0, r.jsx)("div", {
    className: a()(u(s), l),
    children: t.map(f)
  })
}