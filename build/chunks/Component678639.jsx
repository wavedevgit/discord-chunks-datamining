/** Chunk was on 93886 **/
/** chunk id: 678639, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk428530 = require("./428530.jsx"),
  Chunk484036 = require("./484036.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk451429 = require("./451429.js"),
  Chunk104444 = require("./104444.js");

function b(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function f(e) {
  let {
    store: t,
    dataGetter: a
  } = e, [l, i] = r.useState(a(t));
  return r.useEffect(() => {
    let e = () => i(a(t));
    return e(), t.addChangeListener(e), () => {
      t.removeChangeListener(e)
    }
  }, [t, a]), (0, n.jsx)(o.zJl, {
    className: p.inspectorContainer,
    children: (0, n.jsx)(d.Z, {
      data: l
    })
  })
}
let v = [{
    key: "name",
    cellClassName: Chunk104444.__invalid_eventColumn,
    render(e) {
      let {
        store: t
      } = e;
      return t.getName()
    }
  }],
  j = [{
    id: "local",
    name: "Local Variables",
    group: Chunk621060.v0.NONE,
    render(e) {
      let {
        store: t
      } = e;
      return null == t.__getLocalVars ? (0, n.jsxs)("div", {
        className: p.inspectorContainer,
        children: ["Store is missing ", (0, n.jsx)("code", {
          children: "__getLocalVars"
        }), " method."]
      }) : (0, n.jsx)(f, {
        store: t,
        dataGetter: e => e.__getLocalVars()
      })
    }
  }, {
    id: "instance",
    name: "Store Instance",
    group: Chunk621060.v0.NONE,
    render(e) {
      let {
        store: t
      } = e;
      return (0, n.jsx)(f, {
        store: t,
        dataGetter: e => e
      })
    }
  }];

function g(e) {
  let {
    store: t,
    initialHeight: a
  } = e, {
    TabBar: r,
    renderSelectedTab: l
  } = (0, x.ZP)({
    tabs: j
  }, []);
  return (0, n.jsxs)(u.Z, {
    className: p.subPanel,
    minHeight: 100,
    initialHeight: a,
    children: [(0, n.jsx)(r, {}), (0, n.jsxs)(c.ZP, {
      className: i()(h.headerBar, p.subPanelHeaderBar),
      children: [(0, n.jsx)(c.ZP.Icon, {
        icon: o.lO_,
        tooltip: t.getName()
      }), (0, n.jsx)(c.ZP.Title, {
        children: t.getName()
      })]
    }), l({
      store: t
    })]
  })
}

function _() {
  let e = Chunk73800.useRef(null),
    [t, a] = Chunk73800.useState(""),
    l = Chunk442837.yh.getAll(),
    c = Chunk73800.useMemo(() => Chunk120356.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(b), [Chunk120356]).filter(e => (function(e, t) {
      let {
        store: a
      } = e;
      return a.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [d, u] = Chunk73800.useState(),
    x = Chunk120356.find(e => e._dispatchToken === d);
  return (0, Chunk255367.jsxs)("div", {
    ref: module,
    className: i()(Chunk451429.panel, Chunk104444.panel),
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk104444.toolbar,
      children: (0, Chunk255367.jsx)(Chunk481060.E1j, {
        className: Chunk104444.searchBar,
        size: "sm",
        query: exports,
        onChange: require,
        onClear: () => require(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, Chunk255367.jsx)(Chunk681619.Z, {
      columns: v,
      data: Chunk665149,
      selectedRowKey: Chunk428530,
      onClickRow: e => u(e.key)
    }), null != Chunk621060 && (0, Chunk255367.jsx)(g, {
      store: Chunk621060,
      initialHeight: null != module.current ? module.current.clientHeight / 2 : 300
    })]
  })
}