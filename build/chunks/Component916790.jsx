/** Chunk was on 93886 **/
/** chunk id: 916790, original params: e,t,a (module,exports,require) **/
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

function E(e) {
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
    return "".concat(E(t.time), " ms")
  }
}];

function P(e) {
  let {
    actionLog: t
  } = e, a = r.useMemo(() => t.traces.map(e => ({
    key: e.name,
    trace: e
  })), [t]);
  return (0, n.jsx)(u.zJl, {
    children: (0, n.jsx)(y.Z, {
      columns: S,
      data: a
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
      actionLog: a
    } = e, r = c()(a.createdAt);
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(j.E, {
        className: T.actionProperties,
        children: [(0, n.jsx)(j.Z9, {
          name: "Created at",
          children: (0, n.jsx)("time", {
            dateTime: null == (t = a.createdAt) ? true : t.toISOString(),
            title: (0, f.vc)(r, "LLLL"),
            children: (0, f.Y4)(r)
          })
        }), (0, n.jsxs)(j.Z9, {
          name: "Total Time",
          children: [E(a.totalTime), " ms"]
        })]
      }), (0, n.jsx)(u.zJl, {
        className: T.inspectorContainer,
        children: (0, n.jsx)(g.Z, {
          data: a.action
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
    return (0, n.jsx)(P, {
      actionLog: t
    })
  }
}];

function w(e) {
  let {
    actionLog: t,
    initialHeight: a
  } = e, l = r.useMemo(() => t.error ? [...I, {
    id: "error",
    name: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(v.Z, {
        className: T.errorIcon
      }), "Error"]
    }),
    group: C.v0.NONE,
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: i()(T.errorToolbar, O.toolbar),
          children: (0, n.jsx)("div", {
            className: O.toolbarGroup,
            children: (0, n.jsx)(d.zx, {
              className: O.toolbarButton,
              size: d.zx.Sizes.MIN,
              onClick: () => console.error(t.error),
              children: "Log to Console"
            })
          })
        }), (0, n.jsx)(u.zJl, {
          className: T.inspectorContainer,
          children: (0, n.jsx)(g.Z, {
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
  return (0, n.jsxs)(_.Z, {
    className: T.subPanel,
    minHeight: 100,
    initialHeight: a,
    children: [(0, n.jsx)(s, {}), (0, n.jsxs)(x.ZP, {
      className: i()(O.headerBar, T.subPanelHeaderBar),
      children: [(0, n.jsx)(x.ZP.Icon, {
        icon: u.xVZ,
        tooltip: t.name
      }), (0, n.jsx)(x.ZP.Title, {
        wrapperClassName: i()(O.headerTitle, O.dispatcherHeader),
        className: O.headerTitleText,
        children: t.name
      }), (0, n.jsx)(x.ZP.Icon, {
        icon: u.TIy,
        tooltip: "Copy event data",
        onClick: () => {
          var e;
          let a = JSON.stringify(Object.keys(e = t.action).reduce((t, a) => {
            var n;
            return t[a] = (n = e[a], N.Jn9.test(n) ? "REDACTED" : n), t
          }, {}), null, 2);
          (0, b.JG)(a, () => (0, u.showToast)({
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
      return (0, n.jsxs)(n.Fragment, {
        children: [t.error && (0, n.jsx)(v.Z, {
          className: T.errorIcon
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
      return "".concat(E(t.totalTime), " ms")
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
  k = {
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
    [t, a] = Chunk647438.useState(""),
    l = function(e) {
      let [t, a] = r.useState(e.logs), n = r.useCallback(() => {
        (0, s.debounce)(() => {
          a([...e.logs])
        }, 500)()
      }, [e]);
      return r.useEffect(() => (e.on("log", n), () => {
        e.off("log", n)
      }), [e, n]), t
    }(Chunk570140.Z.actionLogger),
    o = Chunk647438.useMemo(() => Chunk120356.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })).toReversed(), [Chunk120356]),
    [c, d] = Chunk647438.useState(Chunk913527),
    [x, h] = Chunk647438.useState(Chunk913527),
    [v, b] = Chunk647438.useState(false),
    [f, g] = Chunk647438.useState(),
    j = Chunk647438.useCallback(e => {
      h(e)
    }, []);
  (0, Chunk301801.BO)(exports, Chunk4912 ? c : Chunk913527, Chunk257785, k);
  let _ = Chunk647438.useCallback(e => {
      d(o), b(e)
    }, [Chunk913527]),
    C = exports.trim().length > 0,
    N = Chunk647438.useMemo(() => Chunk621060 ? Chunk665149 : Chunk4912 ? c : Chunk913527, [Chunk913527, Chunk665149, Chunk621060, Chunk4912, c]);
  return (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: i()(Chunk451429.panel, Chunk687278.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk687278.toolbar,
      children: [(0, Chunk951288.jsx)("div", {
        title: "Toggles the flow of Actions",
        className: Chunk687278.pausedEvents,
        children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
          checked: !Chunk4912,
          onChange: e => _(!e)
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
      data: Chunk981631,
      selectedRowKey: null == Chunk55935 ? true : Chunk55935.id.toString(),
      onClickRow: e => g(e.actionLog)
    }), null != Chunk55935 && (0, Chunk951288.jsx)(w, {
      actionLog: Chunk55935,
      initialHeight: null != module.current ? module.current.clientHeight / 2 : 300
    })]
  })
}