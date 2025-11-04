/** Chunk was on 28532 **/
/** chunk id: 916790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./35282.js"), require("./388685.js"), require("./49124.js"), require("./975844.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk28664 = require("./28664.jsx"),
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
let P = [{
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

function I(e) {
  let {
    actionLog: t
  } = e, n = r.useMemo(() => t.traces.map(e => ({
    key: e.name,
    trace: e
  })), [t]);
  return (0, a.jsx)(m.zJl, {
    children: (0, a.jsx)(C.Z, {
      columns: P,
      data: n
    })
  })
}
let w = [{
  id: "action",
  name: "Action",
  group: Chunk621060.v0.NONE,
  render(e) {
    var t;
    let {
      actionLog: n
    } = e, r = c()(n.createdAt);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(_.E, {
        className: T.actionProperties,
        children: [(0, a.jsx)(_.Z9, {
          name: "Created at",
          children: (0, a.jsx)("time", {
            dateTime: null == (t = n.createdAt) ? true : t.toISOString(),
            title: (0, v.vc)(r, "LLLL"),
            children: (0, v.Y4)(r)
          })
        }), (0, a.jsxs)(_.Z9, {
          name: "Total Time",
          children: [O(n.totalTime), " ms"]
        })]
      }), (0, a.jsx)(m.zJl, {
        className: T.inspectorContainer,
        children: (0, a.jsx)(j.Z, {
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
    return (0, a.jsx)(I, {
      actionLog: t
    })
  }
}];

function k(e) {
  let {
    actionLog: t,
    initialHeight: n
  } = e, i = r.useMemo(() => t.error ? [...w, {
    id: "error",
    name: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.Z, {
        className: T.errorIcon
      }), "Error"]
    }),
    group: S.v0.NONE,
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: l()(T.errorToolbar, N.toolbar),
          children: (0, a.jsx)("div", {
            className: N.toolbarGroup,
            children: (0, a.jsx)(u.zx, {
              className: N.toolbarButton,
              size: u.zx.Sizes.MIN,
              onClick: () => console.error(t.error),
              children: "Log to Console"
            })
          })
        }), (0, a.jsx)(m.zJl, {
          className: T.inspectorContainer,
          children: (0, a.jsx)(j.Z, {
            data: t.error
          })
        })]
      })
    }
  }] : w, [t]), {
    TabBar: s,
    renderSelectedTab: o
  } = (0, S.ZP)({
    tabs: i
  }, [i]);
  return (0, a.jsxs)(y.Z, {
    className: T.subPanel,
    minHeight: 100,
    initialHeight: n,
    children: [(0, a.jsx)(s, {}), (0, a.jsxs)(h.ZP, {
      className: l()(N.headerBar, T.subPanelHeaderBar),
      children: [(0, a.jsx)(h.ZP.Icon, {
        icon: m.xVZ,
        tooltip: t.name
      }), (0, a.jsx)(h.ZP.Title, {
        wrapperClassName: l()(N.headerTitle, N.dispatcherHeader),
        className: N.headerTitleText,
        children: t.name
      }), (0, a.jsx)(h.ZP.Icon, {
        icon: m.TIy,
        tooltip: "Copy event data",
        onClick: () => {
          var e;
          let n = JSON.stringify(Object.keys(e = t.action).reduce((t, n) => {
            var a;
            return t[n] = (a = e[n], E.Jn9.test(a) ? "REDACTED" : a), t
          }, {}), null, 2);
          (0, b.JG)(n, () => (0, m.showToast)({
            id: "copy-action-log-name",
            type: m.ToastType.SUCCESS,
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
  A = {
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
    i = function(e) {
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
    [c, u] = Chunk647438.useState(Chunk913527),
    [h, x] = Chunk647438.useState(Chunk913527),
    [f, b] = Chunk647438.useState(false),
    [v, j] = Chunk647438.useState(),
    _ = Chunk647438.useCallback(e => {
      x(e)
    }, []);
  (0, Chunk301801.BO)(exports, Chunk4912 ? c : Chunk913527, Chunk257785, A);
  let y = Chunk647438.useCallback(e => {
      u(o), b(e)
    }, [Chunk913527]),
    S = exports.trim().length > 0,
    E = Chunk647438.useMemo(() => Chunk621060 ? Chunk665149 : Chunk4912 ? c : Chunk913527, [Chunk913527, Chunk665149, Chunk621060, Chunk4912, c]),
    O = Chunk4912 ? "Enable Event Tracking" : "Pause Event Tracking";
  return (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: l()(Chunk451429.panel, Chunk687278.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk687278.toolbar,
      children: [(0, Chunk951288.jsx)(Chunk28664.u, {
        text: O,
        children: (0, Chunk951288.jsx)(Chunk481060.hU, {
          size: "sm",
          variant: Chunk4912 ? "primary" : "active",
          icon: Chunk4912 ? Chunk481060.o1U : Chunk481060.fpf,
          "aria-label": O,
          onClick: () => Chunk484036(!Chunk4912)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: exports,
        onChange: require,
        onClear: () => require(""),
        placeholder: "Search by action name"
      })]
    }), (0, Chunk951288.jsx)(Chunk681619.Z, {
      columns: R,
      data: Chunk981631,
      selectedRowKey: null == Chunk55935 ? true : Chunk55935.id.toString(),
      onClickRow: e => j(e.actionLog)
    }), null != Chunk55935 && (0, Chunk951288.jsx)(k, {
      actionLog: Chunk55935,
      initialHeight: null != module.current ? module.current.clientHeight / 2 : 300
    })]
  })
}