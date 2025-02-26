/** Chunk was on 93886 **/
n.d(t, {
  Z: () => k
}), n(47120), n(566702);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(392711),
  s = n(913527),
  c = n.n(s),
  d = n(481060),
  u = n(570140),
  m = n(665149),
  h = n(301801),
  x = n(4912),
  f = n(55935),
  p = n(428530),
  b = n(257785),
  _ = n(484036),
  g = n(681619),
  v = n(621060),
  j = n(981015),
  y = n(841699);

function C(e) {
  return parseFloat(e.toFixed(3))
}
let N = [{
  key: "store",
  cellClassName: j.actionColumn,
  render(e) {
    let {
      trace: t
    } = e;
    return t.name
  }
}, {
  key: "time",
  cellClassName: j.totalTimeColumn,
  render(e) {
    let {
      trace: t
    } = e;
    return "".concat(C(t.time), " ms")
  }
}];

function T(e) {
  let {
    actionLog: t
  } = e, n = a.useMemo(() => t.traces.map(e => ({
    key: e.name,
    trace: e
  })), [t]);
  return (0, r.jsx)(d.zJl, {
    children: (0, r.jsx)(g.Z, {
      columns: N,
      data: n
    })
  })
}
let O = [{
  id: "action",
  name: "Action",
  render(e) {
    var t;
    let {
      actionLog: n
    } = e, a = c()(n.createdAt);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(b.E, {
        className: j.actionProperties,
        children: [(0, r.jsx)(b.Z9, {
          name: "Created at",
          children: (0, r.jsx)("time", {
            dateTime: null === (t = n.createdAt) || void 0 === t ? void 0 : t.toISOString(),
            title: (0, f.vc)(a, "LLLL"),
            children: (0, f.Y4)(a)
          })
        }), (0, r.jsxs)(b.Z9, {
          name: "Total Time",
          children: [C(n.totalTime), " ms"]
        })]
      }), (0, r.jsx)(d.zJl, {
        className: j.inspectorContainer,
        children: (0, r.jsx)(p.Z, {
          data: n.action
        })
      })]
    })
  }
}, {
  id: "traces",
  name: "Store Handlers",
  render(e) {
    let {
      actionLog: t
    } = e;
    return (0, r.jsx)(T, {
      actionLog: t
    })
  }
}];

function E(e) {
  let {
    actionLog: t,
    initialHeight: n
  } = e, i = a.useMemo(() => t.error ? [...O, {
    id: "error",
    name: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x.Z, {
        className: j.errorIcon
      }), "Error"]
    }),
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: l()(j.errorToolbar, y.toolbar),
          children: (0, r.jsx)("div", {
            className: y.toolbarGroup,
            children: (0, r.jsx)(d.zxk, {
              className: y.toolbarButton,
              size: d.zxk.Sizes.MIN,
              onClick: () => console.error(t.error),
              children: "Log to Console"
            })
          })
        }), (0, r.jsx)(d.zJl, {
          className: j.inspectorContainer,
          children: (0, r.jsx)(p.Z, {
            data: t.error
          })
        })]
      })
    }
  }] : O, [t]), {
    TabBar: o,
    renderSelectedTab: s
  } = (0, v.Z)({
    tabs: i
  }, [i]);
  return (0, r.jsxs)(_.Z, {
    className: j.subPanel,
    minHeight: 100,
    initialHeight: n,
    children: [(0, r.jsx)(o, {}), (0, r.jsxs)(m.ZP, {
      className: l()(y.headerBar, j.subPanelHeaderBar),
      children: [(0, r.jsx)(m.ZP.Icon, {
        icon: d.xVZ,
        tooltip: t.name
      }), (0, r.jsx)(m.ZP.Title, {
        children: t.name
      })]
    }), s({
      actionLog: t
    })]
  })
}
let S = [{
  key: "action",
  cellClassName: j.actionColumn,
  render(e) {
    let {
      actionLog: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [t.error && (0, r.jsx)(x.Z, {
        className: j.errorIcon
      }), t.name]
    })
  }
}, {
  key: "total time",
  cellClassName: j.totalTimeColumn,
  render(e) {
    let {
      actionLog: t
    } = e;
    return "".concat(C(t.totalTime), " ms")
  }
}];

function k() {
  let e = a.useRef(null),
    [t, n] = a.useState(""),
    i = function(e) {
      let [t, n] = a.useState(e.logs), r = a.useCallback(() => {
        (0, o.debounce)(() => {
          n([...e.logs])
        }, 500)()
      }, [e]);
      return a.useEffect(() => (e.on("log", r), () => {
        e.off("log", r)
      }), [e, r]), t
    }(u.Z.actionLogger),
    s = a.useMemo(() => i.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })), [i]),
    [c, m] = a.useState(s),
    [x, f] = a.useState(s),
    [p, b] = a.useState(!1),
    [_, v] = a.useState(),
    C = a.useRef(null),
    N = a.useMemo(() => (0, o.throttle)(async (e, t) => {
      if ("" === e) {
        f(t);
        return
      }
      C.current = (0, o.uniqueId)();
      let n = await (0, h.H)(t, e => {
        let {
          actionLog: t
        } = e;
        return t.name
      }, e, !0);
      null != C.current && f(n)
    }, 300, {
      leading: !0
    }), []),
    T = a.useCallback(e => {
      m(s), b(e)
    }, [s]);
  a.useEffect(() => {
    if (p) {
      N(t, null != c ? c : s);
      return
    }
    N(t, s)
  }, [p, t, N, s, c]), a.useEffect(() => {
    C.current = null
  }, []);
  let O = t.trim().length > 0,
    k = a.useMemo(() => O ? x : p ? c : s, [s, x, O, p, c]);
  return (0, r.jsxs)("div", {
    ref: e,
    className: l()(y.panel, j.panel),
    children: [(0, r.jsxs)("div", {
      className: j.toolbar,
      children: [(0, r.jsx)("div", {
        title: "Toggles the flow of Actions",
        className: j.pausedEvents,
        children: (0, r.jsx)(d.rsf, {
          checked: !p,
          onChange: e => T(!e)
        })
      }), (0, r.jsx)(d.E1j, {
        className: j.searchBar,
        query: t,
        onChange: n,
        onClear: () => n(""),
        placeholder: "Search by action name"
      })]
    }), (0, r.jsx)(g.Z, {
      columns: S,
      data: k,
      selectedRowKey: null == _ ? void 0 : _.id.toString(),
      onClickRow: e => v(e.actionLog)
    }), null != _ && (0, r.jsx)(E, {
      actionLog: _,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}