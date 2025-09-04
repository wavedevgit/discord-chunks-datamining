/** Chunk was on 93886 **/
/** chunk id: 916790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./35282.js"), require("./388685.js"), require("./49124.js"), require("./975844.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk886118 = require("./886118.js"),
  Chunk301801 = require("./301801.js"),
  Chunk4912 = require("./4912.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk55935 = require("./55935.js"),
  Chunk428530 = require("./428530.jsx"),
  Chunk257785 = require("./257785.jsx"),
  Chunk484036 = require("./484036.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk687278 = require("./687278.js"),
  Chunk451429 = require("./451429.js");

function O(e) {
  return parseFloat(e.toFixed(3))
}
let S = [{
  key: "store",
  cellClassName: Chunk687278.actionColumn,
  render(e) {
    let {
      trace: t
    } = e;
    return t.name
  }
}, {
  key: "time",
  cellClassName: Chunk687278.totalTimeColumn,
  render(e) {
    let {
      trace: t
    } = e;
    return "".concat(O(t.time), " ms")
  }
}];

function P(e) {
  let {
    actionLog: t
  } = e, n = r.useMemo(() => t.traces.map(e => ({
    key: e.name,
    trace: e
  })), [t]);
  return (0, a.jsx)(u.zJl, {
    children: (0, a.jsx)(y.Z, {
      columns: S,
      data: n
    })
  })
}
let I = [{
  id: "action",
  name: "Action",
  group: Chunk621060.v0.NONE,
  render(e) {
    var t;
    let {
      actionLog: n
    } = e, r = c()(n.createdAt);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(j.E, {
        className: E.actionProperties,
        children: [(0, a.jsx)(j.Z9, {
          name: "Created at",
          children: (0, a.jsx)("time", {
            dateTime: null == (t = n.createdAt) ? true : t.toISOString(),
            title: (0, b.vc)(r, "LLLL"),
            children: (0, b.Y4)(r)
          })
        }), (0, a.jsxs)(j.Z9, {
          name: "Total Time",
          children: [O(n.totalTime), " ms"]
        })]
      }), (0, a.jsx)(u.zJl, {
        className: E.inspectorContainer,
        children: (0, a.jsx)(g.Z, {
          data: n.action
        })
      })]
    })
  }
}, {
  id: "traces",
  name: "Store Handlers",
  group: Chunk621060.v0.NONE,
  render(e) {
    let {
      actionLog: t
    } = e;
    return (0, a.jsx)(P, {
      actionLog: t
    })
  }
}];

function k(e) {
  let {
    actionLog: t,
    initialHeight: n
  } = e, l = r.useMemo(() => t.error ? [...I, {
    id: "error",
    name: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.Z, {
        className: E.errorIcon
      }), "Error"]
    }),
    group: C.v0.NONE,
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: i()(E.errorToolbar, T.toolbar),
          children: (0, a.jsx)("div", {
            className: T.toolbarGroup,
            children: (0, a.jsx)(d.zx, {
              className: T.toolbarButton,
              size: d.zx.Sizes.MIN,
              onClick: () => console.error(t.error),
              children: "Log to Console"
            })
          })
        }), (0, a.jsx)(u.zJl, {
          className: E.inspectorContainer,
          children: (0, a.jsx)(g.Z, {
            data: t.error
          })
        })]
      })
    }
  }] : I, [t]), {
    TabBar: s,
    renderSelectedTab: o
  } = (0, C.ZP)({
    tabs: l
  }, [l]);
  return (0, a.jsxs)(_.Z, {
    className: E.subPanel,
    minHeight: 100,
    initialHeight: n,
    children: [(0, a.jsx)(s, {}), (0, a.jsxs)(x.ZP, {
      className: i()(T.headerBar, E.subPanelHeaderBar),
      children: [(0, a.jsx)(x.ZP.Icon, {
        icon: u.xVZ,
        tooltip: t.name
      }), (0, a.jsx)(x.ZP.Title, {
        wrapperClassName: i()(T.headerTitle, T.dispatcherHeader),
        className: T.headerTitleText,
        children: t.name
      }), (0, a.jsx)(x.ZP.Icon, {
        icon: u.TIy,
        tooltip: "Copy event data",
        onClick: () => {
          var e;
          let n = JSON.stringify(Object.keys(e = t.action).reduce((t, n) => {
            var a;
            return t[n] = (a = e[n], N.Jn9.test(a) ? "REDACTED" : a), t
          }, {}), null, 2);
          (0, v.JG)(n, () => (0, u.showToast)({
            id: "copy-action-log-name",
            type: u.ToastType.SUCCESS,
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
    cellClassName: Chunk687278.actionColumn,
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [t.error && (0, a.jsx)(f.Z, {
          className: E.errorIcon
        }), t.name]
      })
    }
  }, {
    key: "total time",
    cellClassName: Chunk687278.totalTimeColumn,
    render(e) {
      let {
        actionLog: t
      } = e;
      return "".concat(O(t.totalTime), " ms")
    }
  }, {
    key: "timestamp",
    cellClassName: Chunk687278.totalTimeColumn,
    render(e) {
      let {
        actionLog: t
      } = e;
      return c()(t.createdAt).format("HH:mm:ss.SSS")
    }
  }],
  w = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        actionLog: t
      } = e;
      return t.name
    },
    throttleMs: 100
  };

function Z() {
  let e = Chunk647438.useRef(null),
    [t, n] = Chunk647438.useState(""),
    l = function(e) {
      let [t, n] = r.useState(e.logs), a = r.useCallback(() => {
        (0, s.debounce)(() => {
          n([...e.logs])
        }, 500)()
      }, [e]);
      return r.useEffect(() => (e.on("log", a), () => {
        e.off("log", a)
      }), [e, a]), t
    }(Chunk570140.Z.actionLogger),
    o = Chunk647438.useMemo(() => Chunk120356.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })).toReversed(), [Chunk120356]),
    [c, x] = Chunk647438.useState(Chunk913527),
    [h, f] = Chunk647438.useState(Chunk913527),
    [v, b] = Chunk647438.useState(false),
    [g, j] = Chunk647438.useState(),
    _ = Chunk647438.useCallback(e => {
      f(e)
    }, []);
  (0, Chunk301801.BO)(exports, Chunk572004 ? c : Chunk913527, Chunk484036, w);
  let C = Chunk647438.useCallback(e => {
      x(o), b(e)
    }, [Chunk913527]),
    N = exports.trim().length > 0,
    O = Chunk647438.useMemo(() => Chunk981631 ? Chunk886118 : Chunk572004 ? c : Chunk913527, [Chunk913527, Chunk886118, Chunk981631, Chunk572004, c]);
  return (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: i()(Chunk451429.panel, Chunk687278.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk687278.toolbar,
      children: [(0, Chunk951288.jsx)("div", {
        title: "Toggles the flow of Actions",
        className: Chunk687278.pausedEvents,
        children: (0, Chunk951288.jsx)(Chunk755721.T2, {
          checked: !Chunk572004,
          onChange: e => C(!e)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.E1j, {
        size: "sm",
        className: Chunk687278.searchBar,
        query: exports,
        onChange: require,
        onClear: () => require(""),
        placeholder: "Search by action name"
      })]
    }), (0, Chunk951288.jsx)(Chunk681619.Z, {
      columns: R,
      data: O,
      selectedRowKey: null == Chunk428530 ? true : Chunk428530.id.toString(),
      onClickRow: e => j(e.actionLog)
    }), null != Chunk428530 && (0, Chunk951288.jsx)(k, {
      actionLog: Chunk428530,
      initialHeight: null != module.current ? module.current.clientHeight / 2 : 300
    })]
  })
}