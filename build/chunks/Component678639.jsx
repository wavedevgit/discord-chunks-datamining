/** Chunk was on 88499 **/
/** chunk id: 678639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk428530 = require("./428530.jsx"),
  Chunk484036 = require("./484036.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk451429 = require("./451429.js"),
  Chunk104444 = require("./104444.js");

function f(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function g(e) {
  let {
    store: t,
    dataGetter: n
  } = e, [i, l] = r.useState(n(t));
  return r.useEffect(() => {
    let e = () => l(n(t));
    return e(), t.addChangeListener(e), () => {
      t.removeChangeListener(e)
    }
  }, [t, n]), (0, a.jsx)(o.zJl, {
    className: x.inspectorContainer,
    children: (0, a.jsx)(d.Z, {
      data: i
    })
  })
}
let b = [{
    key: "name",
    cellClassName: Chunk104444.__invalid_eventColumn,
    render(e) {
      let {
        store: t
      } = e;
      return t.getName()
    }
  }],
  v = [{
    id: "local",
    name: "Local Variables",
    group: Chunk621060.v0.NONE,
    render(e) {
      let {
        store: t
      } = e;
      return null == t.__getLocalVars ? (0, a.jsxs)("div", {
        className: x.inspectorContainer,
        children: ["Store is missing ", (0, a.jsx)("code", {
          children: "__getLocalVars"
        }), " method."]
      }) : (0, a.jsx)(g, {
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
      return (0, a.jsx)(g, {
        store: t,
        dataGetter: e => e
      })
    }
  }];

function j(e) {
  let {
    store: t,
    initialHeight: n
  } = e, {
    TabBar: r,
    renderSelectedTab: i
  } = (0, p.ZP)({
    tabs: v
  }, []);
  return (0, a.jsxs)(u.Z, {
    className: x.subPanel,
    minHeight: 100,
    initialHeight: n,
    children: [(0, a.jsx)(r, {}), (0, a.jsxs)(c.ZP, {
      className: l()(h.headerBar, x.subPanelHeaderBar),
      children: [(0, a.jsx)(c.ZP.Icon, {
        icon: o.lO_,
        tooltip: t.getName()
      }), (0, a.jsx)(c.ZP.Title, {
        children: t.getName()
      })]
    }), i({
      store: t
    })]
  })
}

function _() {
  let e = Chunk473749.useRef(null),
    [t, n] = Chunk473749.useState(""),
    i = Chunk442837.yh.getAll(),
    c = Chunk473749.useMemo(() => Chunk120356.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(f), [Chunk120356]).filter(e => (function(e, t) {
      let {
        store: n
      } = e;
      return n.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [d, u] = Chunk473749.useState(),
    p = Chunk120356.find(e => e._dispatchToken === d);
  return (0, Chunk54381.jsxs)("div", {
    ref: module,
    className: l()(Chunk451429.panel, Chunk104444.panel),
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk104444.toolbar,
      children: (0, Chunk54381.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: exports,
        onChange: require,
        onClear: () => require(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, Chunk54381.jsx)(Chunk681619.Z, {
      columns: b,
      data: Chunk665149,
      selectedRowKey: Chunk428530,
      onClickRow: e => u(e.key)
    }), null != Chunk621060 && (0, Chunk54381.jsx)(j, {
      store: Chunk621060,
      initialHeight: null != module.current ? module.current.clientHeight / 2 : 300
    })]
  })
}