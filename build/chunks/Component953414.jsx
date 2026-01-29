/** Chunk was on 87557 **/
/** chunk id: 953414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk231545 = require("./231545.jsx"),
  Chunk260880 = require("./260880.jsx"),
  Chunk303054 = require("./303054.jsx"),
  Chunk231643 = require("./231643.jsx"),
  Chunk661251 = require("./661251.js"),
  Chunk166812 = require("./166812.js");

function g(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function f(e) {
  let {
    store: t,
    dataGetter: n
  } = e, [r, i] = l.useState(n(t));
  return l.useEffect(() => {
    let e = () => i(n(t));
    return e(), t.addChangeListener(e), () => {
      t.removeChangeListener(e)
    }
  }, [t, n]), (0, a.jsx)(o.IpV, {
    className: x.Dx,
    children: (0, a.jsx)(d.A, {
      data: r
    })
  })
}
let b = [{
    key: "name",
    cellClassName: Chunk166812.__invalid_eventColumn,
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
    group: Chunk231643.fu.NONE,
    render(e) {
      let {
        store: t
      } = e;
      return null == t.__getLocalVars ? (0, a.jsxs)("div", {
        className: x.Dx,
        children: ["Store is missing ", (0, a.jsx)("code", {
          children: "__getLocalVars"
        }), " method."]
      }) : (0, a.jsx)(f, {
        store: t,
        dataGetter: e => e.__getLocalVars()
      })
    }
  }, {
    id: "instance",
    name: "Store Instance",
    group: Chunk231643.fu.NONE,
    render(e) {
      let {
        store: t
      } = e;
      return (0, a.jsx)(f, {
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
    TabBar: l,
    renderSelectedTab: r
  } = (0, p.Ay)({
    tabs: v
  }, []);
  return (0, a.jsxs)(u.A, {
    className: x.rf,
    minHeight: 100,
    initialHeight: n,
    children: [(0, a.jsx)(l, {}), (0, a.jsxs)(c.Ay, {
      className: i()(h.jr, x.nZ),
      children: [(0, a.jsx)(c.Ay.Icon, {
        icon: o.gqV,
        tooltip: t.getName()
      }), (0, a.jsx)(c.Ay.Title, {
        children: t.getName()
      })]
    }), r({
      store: t
    })]
  })
}

function _() {
  let e = l.useRef(null),
    [t, n] = l.useState(""),
    r = s.il.getAll(),
    c = l.useMemo(() => r.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(g), [r]).filter(e => (function(e, t) {
      let {
        store: n
      } = e;
      return n.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [d, u] = l.useState(),
    p = r.find(e => e._dispatchToken === d);
  return (0, a.jsxs)("div", {
    ref: e,
    className: i()(h.nd, x.nd),
    children: [(0, a.jsx)("div", {
      className: x.KE,
      children: (0, a.jsx)(o.IWV, {
        size: "sm",
        query: t,
        onChange: n,
        onClear: () => n(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, a.jsx)(m.A, {
      columns: b,
      data: c,
      selectedRowKey: d,
      onClickRow: e => u(e.key)
    }), null != p && (0, a.jsx)(j, {
      store: p,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}