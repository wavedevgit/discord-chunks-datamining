/** Chunk was on 22477 **/
/** chunk id: 866001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./747238.js"), require("./896048.js"), require("./457529.js"), require("./172879.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk985623 = require("./985623.js"),
  o = require.n(Chunk985623),
  Chunk989349 = require("./989349.js"),
  d = require.n(Chunk989349),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk379078 = require("./379078.js"),
  Chunk704554 = require("./704554.js"),
  Chunk603349 = require("./603349.jsx"),
  Chunk957565 = require("./957565.js"),
  Chunk405269 = require("./405269.js"),
  Chunk231545 = require("./231545.jsx"),
  Chunk708403 = require("./708403.jsx"),
  Chunk260880 = require("./260880.jsx"),
  Chunk303054 = require("./303054.jsx"),
  Chunk231643 = require("./231643.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk84113 = require("./84113.js"),
  Chunk661251 = require("./661251.js");

function T(e) {
  return parseFloat(e.toFixed(3))
}
let I = [{
  key: "store",
  cellClassName: Chunk84113.lA,
  render(e) {
    let {
      trace: t
    } = e;
    return t.name
  }
}, {
  key: "time",
  cellClassName: Chunk84113.i7,
  render(e) {
    let {
      trace: t
    } = e;
    return "".concat(T(t.time), " ms")
  }
}];

function w(e) {
  let {
    actionLog: t
  } = e, n = l.useMemo(() => t.traces.map(e => ({
    key: e.name,
    trace: e
  })), [t]);
  return (0, a.jsx)(p.IpV, {
    children: (0, a.jsx)(C.A, {
      columns: I,
      data: n
    })
  })
}
let k = [{
  id: "action",
  name: "Action",
  group: Chunk231643.fu.NONE,
  render(e) {
    var t;
    let {
      actionLog: n
    } = e, l = d()(n.createdAt);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(_.OA, {
        className: E.mP,
        children: [(0, a.jsx)(_.mA, {
          name: "Created at",
          children: (0, a.jsx)("time", {
            dateTime: null == (t = n.createdAt) ? true : t.toISOString(),
            title: (0, j.i$)(l, "LLLL"),
            children: (0, j.mk)(l)
          })
        }), (0, a.jsxs)(_.mA, {
          name: "Total Time",
          children: [T(n.totalTime), " ms"]
        })]
      }), (0, a.jsx)(p.IpV, {
        className: E.Dx,
        children: (0, a.jsx)(y.A, {
          data: n.action
        })
      })]
    })
  }
}, {
  id: "traces",
  name: "Store Handlers",
  group: Chunk231643.fu.NONE,
  render(e) {
    let {
      actionLog: t
    } = e;
    return (0, a.jsx)(w, {
      actionLog: t
    })
  }
}];

function P(e) {
  let {
    actionLog: t,
    initialHeight: n
  } = e, i = l.useMemo(() => t.error ? [...k, {
    id: "error",
    name: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(g.A, {
        className: E.ik
      }), "Error"]
    }),
    group: S.fu.NONE,
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: r()(E.u4, N.KE),
          children: (0, a.jsx)("div", {
            className: N.R5,
            children: (0, a.jsx)(m.$n, {
              className: N.Q$,
              size: m.$n.Sizes.MIN,
              onClick: () => console.error(t.error),
              children: "Log to Console"
            })
          })
        }), (0, a.jsx)(p.IpV, {
          className: E.Dx,
          children: (0, a.jsx)(y.A, {
            data: t.error
          })
        })]
      })
    }
  }] : k, [t]), {
    TabBar: s,
    renderSelectedTab: o
  } = (0, S.Ay)({
    tabs: i
  }, [i]);
  return (0, a.jsxs)(A.A, {
    className: E.rf,
    minHeight: 100,
    initialHeight: n,
    children: [(0, a.jsx)(s, {}), (0, a.jsxs)(f.Ay, {
      className: r()(N.jr, E.nZ),
      children: [(0, a.jsx)(f.Ay.Icon, {
        icon: p.KBH,
        tooltip: t.name
      }), (0, a.jsx)(f.Ay.Title, {
        wrapperClassName: r()(N.qd, N.ZE),
        className: N.Pz,
        children: t.name
      }), (0, a.jsx)(f.Ay.Icon, {
        icon: p.TdU,
        tooltip: "Copy event data",
        onClick: () => {
          var e;
          let n = JSON.stringify(Object.keys(e = t.action).reduce((t, n) => {
            var a;
            return t[n] = (a = e[n], O.AKn.test(a) ? "REDACTED" : a), t
          }, {}), null, 2);
          (0, v.C)(n, () => (0, p.showToast)({
            id: "copy-action-log-name",
            type: p.ToastType.SUCCESS,
            message: "Copied action log data to clipboard"
          }))
        }
      })]
    }), o({
      actionLog: t
    })]
  })
}
let R = [{
    key: "action",
    cellClassName: Chunk84113.lA,
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [t.error && (0, a.jsx)(g.A, {
          className: E.ik
        }), t.name]
      })
    }
  }, {
    key: "total time",
    cellClassName: Chunk84113.i7,
    render(e) {
      let {
        actionLog: t
      } = e;
      return "".concat(T(t.totalTime), " ms")
    }
  }, {
    key: "timestamp",
    cellClassName: Chunk84113.i7,
    render(e) {
      let {
        actionLog: t
      } = e;
      return d()(t.createdAt).format("HH:mm:ss.SSS")
    }
  }],
  D = {
    searchType: Chunk379078.n.REGEX,
    searchStringGenerator: e => {
      let {
        actionLog: t
      } = e;
      return t.name
    },
    throttleMs: 100
  };

function M() {
  let e = l.useRef(null),
    [t, n] = l.useState(""),
    i = function(e) {
      let [t, n] = l.useState(e.logs);
      return l.useEffect(() => {
        let t = o()(() => {
          n([...e.logs])
        }, 500);
        return e.on("log", t), () => {
          e.off("log", t)
        }
      }, [e]), t
    }(h.h.actionLogger),
    s = l.useMemo(() => i.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })).toReversed(), [i]),
    [c, d] = l.useState(s),
    [m, f] = l.useState(s),
    [x, g] = l.useState(false),
    [v, j] = l.useState(),
    y = l.useCallback(e => {
      f(e)
    }, []);
  (0, b.RT)(t, x ? c : s, y, D);
  let _ = l.useCallback(e => {
      d(s), g(e)
    }, [s]),
    A = t.trim().length > 0,
    S = l.useMemo(() => A ? m : x ? c : s, [s, m, A, x, c]),
    O = x ? "Enable Event Tracking" : "Pause Event Tracking";
  return (0, a.jsxs)("div", {
    ref: e,
    className: r()(N.nd, E.nd),
    children: [(0, a.jsxs)("div", {
      className: E.KE,
      children: [(0, a.jsx)(u.m, {
        text: O,
        children: (0, a.jsx)(p.K0, {
          size: "sm",
          variant: x ? "primary" : "active",
          icon: x ? p.udU : p.E$n,
          "aria-label": O,
          onClick: () => _(!x)
        })
      }), (0, a.jsx)(p.IWV, {
        size: "sm",
        query: t,
        onChange: n,
        onClear: () => n(""),
        placeholder: "Search by action name"
      })]
    }), (0, a.jsx)(C.A, {
      columns: R,
      data: S,
      selectedRowKey: null == v ? true : v.id.toString(),
      onClickRow: e => j(e.actionLog)
    }), null != v && (0, a.jsx)(P, {
      actionLog: v,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}