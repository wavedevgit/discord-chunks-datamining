/** Chunk was on 93886 **/
n.d(t, {
  Z: () => j
}), n(47120), n(230036);
var r = n(200651),
  a = n(192379),
  l = n(120356),
  i = n.n(l),
  o = n(442837),
  s = n(481060),
  c = n(665149),
  d = n(428530),
  u = n(484036),
  m = n(681619),
  h = n(621060),
  p = n(710662),
  x = n(579581);

function f(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function b(e) {
  let {
    store: t,
    dataGetter: n
  } = e, [l, i] = a.useState(n(t));
  return a.useEffect(() => {
    let e = () => i(n(t));
    return e(), t.addChangeListener(e), () => {
      t.removeChangeListener(e)
    }
  }, [t, n]), (0, r.jsx)(s.zJl, {
    className: x.inspectorContainer,
    children: (0, r.jsx)(d.Z, {
      data: l
    })
  })
}
let _ = [{
    key: "name",
    cellClassName: x.__invalid_eventColumn,
    render(e) {
      let {
        store: t
      } = e;
      return t.getName()
    }
  }],
  g = [{
    id: "local",
    name: "Local Variables",
    render(e) {
      let {
        store: t
      } = e;
      return null == t.__getLocalVars ? (0, r.jsxs)("div", {
        className: x.inspectorContainer,
        children: ["Store is missing ", (0, r.jsx)("code", {
          children: "__getLocalVars"
        }), " method."]
      }) : (0, r.jsx)(b, {
        store: t,
        dataGetter: e => e.__getLocalVars()
      })
    }
  }, {
    id: "instance",
    name: "Store Instance",
    render(e) {
      let {
        store: t
      } = e;
      return (0, r.jsx)(b, {
        store: t,
        dataGetter: e => e
      })
    }
  }];

function v(e) {
  let {
    store: t,
    initialHeight: n
  } = e, {
    TabBar: a,
    renderSelectedTab: l
  } = (0, h.Z)({
    tabs: g
  }, []);
  return (0, r.jsxs)(u.Z, {
    className: x.subPanel,
    minHeight: 100,
    initialHeight: n,
    children: [(0, r.jsx)(a, {}), (0, r.jsxs)(c.ZP, {
      className: i()(p.headerBar, x.subPanelHeaderBar),
      children: [(0, r.jsx)(c.ZP.Icon, {
        icon: s.lO_,
        tooltip: t.getName()
      }), (0, r.jsx)(c.ZP.Title, {
        children: t.getName()
      })]
    }), l({
      store: t
    })]
  })
}

function j() {
  let e = a.useRef(null),
    [t, n] = a.useState(""),
    l = o.yh.getAll(),
    c = a.useMemo(() => l.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(f), [l]).filter(e => (function(e, t) {
      let {
        store: n
      } = e;
      return n.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [d, u] = a.useState(),
    h = l.find(e => e._dispatchToken === d);
  return (0, r.jsxs)("div", {
    ref: e,
    className: i()(p.panel, x.panel),
    children: [(0, r.jsx)("div", {
      className: x.toolbar,
      children: (0, r.jsx)(s.E1j, {
        className: x.searchBar,
        size: s.E1j.Sizes.SMALL,
        query: t,
        onChange: n,
        onClear: () => n(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, r.jsx)(m.Z, {
      columns: _,
      data: c,
      selectedRowKey: d,
      onClickRow: e => u(e.key)
    }), null != h && (0, r.jsx)(v, {
      store: h,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}