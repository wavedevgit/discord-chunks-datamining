/** Chunk was on 28636 **/
/** chunk id: 847525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f,
  e: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk191711 = require("./191711.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk38181 = require("./38181.js"),
  Chunk767599 = require("./767599.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk897833 = require("./897833.js");

function b(e) {
  let {
    category: t,
    count: n,
    onSelectCategory: r,
    selected: s
  } = e, o = a.useCallback(() => {
    r(t.id)
  }, [t.id, r]), u = n.toLocaleString(d.default.locale);
  return (0, l.jsxs)(c.DUT, {
    onClick: o,
    className: i()(m.L1, {
      [m.wH]: s
    }),
    children: [(0, l.jsx)(c.Text, {
      className: m.UU,
      variant: "text-sm/medium",
      color: "text-strong",
      children: t.name
    }), (0, l.jsx)(c.Text, {
      className: m.U9,
      variant: "text-sm/normal",
      color: "text-muted",
      children: u
    })]
  })
}

function f(e) {
  let {
    countsByCategory: t,
    onSelectCategory: n,
    selectedCategoryId: r
  } = e, i = (0, s.bG)([u.A], () => u.A.getCategories()), c = a.useMemo(() => [(0, p.AU)(), ...i.filter(e => {
    var n;
    return (null != (n = t[e.id]) ? n : 0) !== 0
  })], [i, t]);
  return 0 === c.length ? null : (0, l.jsx)("div", {
    className: m.LZ,
    children: c.map(e => {
      var a;
      let i = e.id,
        s = null != (a = t[i]) ? a : 0;
      return (0, l.jsx)(b, {
        category: e,
        count: s,
        selected: i === r,
        onSelectCategory: () => n(e)
      }, i)
    })
  })
}

function g(e) {
  var t;
  let {
    countsByCategory: n,
    onSelectCategory: r,
    selectedCategoryId: i
  } = e, d = (0, s.bG)([u.A], () => u.A.getCategories()), b = a.useMemo(() => [(0, p.AU)(), ...d.filter(e => {
    var t;
    return (null != (t = n[e.id]) ? t : 0) !== 0
  })], [d, n]), f = a.useMemo(() => b.map(e => ({
    id: "".concat(e.id),
    label: (0, l.jsx)(o.kR, {
      count: n[e.id],
      name: e.name
    })
  })), [b, n]), g = a.useCallback(e => {
    let t = b.find(t => t.id === Number(e));
    null != t && r(t)
  }, [r, b]), x = a.useMemo(() => b.find(e => e.id === i), [i, b]);
  return 0 === f.length ? null : (0, l.jsxs)("div", {
    className: m.kL,
    children: [(0, l.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: h.intl.string(h.t.f09BQJ)
    }), (0, l.jsx)(o.Ay, {
      items: f,
      title: null != (t = null == x ? true : x.name) ? t : "",
      onSelect: g,
      selected: "".concat(i),
      "aria-label": h.intl.string(h.t.WHdCwR),
      variant: o.Hb.FILLED
    })]
  })
}