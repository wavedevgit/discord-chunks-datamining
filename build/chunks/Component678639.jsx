/** Chunk was on 6043 **/
/** chunk id: 678639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk428530 = require("./428530.jsx"),
  Chunk975775 = require("./975775.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk663618 = require("./663618.js"),
  Chunk850409 = require("./850409.js");

function x(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function b(e) {
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
    className: h.inspectorContainer,
    children: (0, a.jsx)(d.Z, {
      data: i
    })
  })
}
let g = [{
    key: "name",
    cellClassName: Chunk850409.__invalid_eventColumn,
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
        className: h.inspectorContainer,
        children: ["Store is missing ", (0, a.jsx)("code", {
          children: "__getLocalVars"
        }), " method."]
      }) : (0, a.jsx)(b, {
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
      return (0, a.jsx)(b, {
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
    className: h.subPanel,
    minHeight: 100,
    initialHeight: n,
    children: [(0, a.jsx)(r, {}), (0, a.jsxs)(c.ZP, {
      className: l()(f.headerBar, h.subPanelHeaderBar),
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

function C() {
  let e = r.useRef(null),
    [t, n] = r.useState(""),
    i = s.yh.getAll(),
    c = r.useMemo(() => i.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(x), [i]).filter(e => (function(e, t) {
      let {
        store: n
      } = e;
      return n.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [d, u] = r.useState(),
    p = i.find(e => e._dispatchToken === d);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(f.panel, h.panel),
    children: [(0, a.jsx)("div", {
      className: h.toolbar,
      children: (0, a.jsx)(o.E1j, {
        size: "sm",
        query: t,
        onChange: n,
        onClear: () => n(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, a.jsx)(m.Z, {
      columns: g,
      data: c,
      selectedRowKey: d,
      onClickRow: e => u(e.key)
    }), null != p && (0, a.jsx)(j, {
      store: p,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}