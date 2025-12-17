/** Chunk was on 6043 **/
/** chunk id: 916790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./35282.js"), require("./388685.js"), require("./49124.js"), require("./975844.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk299608 = require("./299608.js"),
  o = require.n(Chunk299608),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
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
  Chunk975775 = require("./975775.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk461015 = require("./461015.js"),
  Chunk663618 = require("./663618.js");

function w(e) {
  return parseFloat(e.toFixed(3))
}
let P = [{
  key: "store",
  cellClassName: Chunk461015.actionColumn,
  render(e) {
    let {
      trace: t
    } = e;
    return t.name
  }
}, {
  key: "time",
  cellClassName: Chunk461015.totalTimeColumn,
  render(e) {
    let {
      trace: t
    } = e;
    return "".concat(w(t.time), " ms")
  }
}];

function I(e) {
  let {
    actionLog: t
  } = e, n = r.useMemo(() => t.traces.map(e => ({
    key: e.name,
    trace: e
  })), [t]);
  return (0, a.jsx)(p.zJl, {
    children: (0, a.jsx)(S.Z, {
      columns: P,
      data: n
    })
  })
}
let k = [{
  id: "action",
  name: "Action",
  group: Chunk621060.v0.NONE,
  render(e) {
    var t;
    let {
      actionLog: n
    } = e, r = d()(n.createdAt);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(C.E, {
        className: O.actionProperties,
        children: [(0, a.jsx)(C.Z9, {
          name: "Created at",
          children: (0, a.jsx)("time", {
            dateTime: null == (t = n.createdAt) ? true : t.toISOString(),
            title: (0, j.vc)(r, "LLLL"),
            children: (0, j.Y4)(r)
          })
        }), (0, a.jsxs)(C.Z9, {
          name: "Total Time",
          children: [w(n.totalTime), " ms"]
        })]
      }), (0, a.jsx)(p.zJl, {
        className: O.inspectorContainer,
        children: (0, a.jsx)(y.Z, {
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

function R(e) {
  let {
    actionLog: t,
    initialHeight: n
  } = e, i = r.useMemo(() => t.error ? [...k, {
    id: "error",
    name: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(g.Z, {
        className: O.errorIcon
      }), "Error"]
    }),
    group: E.v0.NONE,
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: l()(O.errorToolbar, N.toolbar),
          children: (0, a.jsx)("div", {
            className: N.toolbarGroup,
            children: (0, a.jsx)(m.zx, {
              className: N.toolbarButton,
              size: m.zx.Sizes.MIN,
              onClick: () => console.error(t.error),
              children: "Log to Console"
            })
          })
        }), (0, a.jsx)(p.zJl, {
          className: O.inspectorContainer,
          children: (0, a.jsx)(y.Z, {
            data: t.error
          })
        })]
      })
    }
  }] : k, [t]), {
    TabBar: s,
    renderSelectedTab: o
  } = (0, E.ZP)({
    tabs: i
  }, [i]);
  return (0, a.jsxs)(_.Z, {
    className: O.subPanel,
    minHeight: 100,
    initialHeight: n,
    children: [(0, a.jsx)(s, {}), (0, a.jsxs)(f.ZP, {
      className: l()(N.headerBar, O.subPanelHeaderBar),
      children: [(0, a.jsx)(f.ZP.Icon, {
        icon: p.xVZ,
        tooltip: t.name
      }), (0, a.jsx)(f.ZP.Title, {
        wrapperClassName: l()(N.headerTitle, N.dispatcherHeader),
        className: N.headerTitleText,
        children: t.name
      }), (0, a.jsx)(f.ZP.Icon, {
        icon: p.TIy,
        tooltip: "Copy event data",
        onClick: () => {
          var e;
          let n = JSON.stringify(Object.keys(e = t.action).reduce((t, n) => {
            var a;
            return t[n] = (a = e[n], T.Jn9.test(a) ? "REDACTED" : a), t
          }, {}), null, 2);
          (0, v.JG)(n, () => (0, p.showToast)({
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
let A = [{
    key: "action",
    cellClassName: Chunk461015.actionColumn,
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [t.error && (0, a.jsx)(g.Z, {
          className: O.errorIcon
        }), t.name]
      })
    }
  }, {
    key: "total time",
    cellClassName: Chunk461015.totalTimeColumn,
    render(e) {
      let {
        actionLog: t
      } = e;
      return "".concat(w(t.totalTime), " ms")
    }
  }, {
    key: "timestamp",
    cellClassName: Chunk461015.totalTimeColumn,
    render(e) {
      let {
        actionLog: t
      } = e;
      return d()(t.createdAt).format("HH:mm:ss.SSS")
    }
  }],
  Z = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        actionLog: t
      } = e;
      return t.name
    },
    throttleMs: 100
  };

function D() {
  let e = Chunk473749.useRef(null),
    [t, n] = Chunk473749.useState(""),
    i = function(e) {
      let [t, n] = r.useState(e.logs);
      return r.useEffect(() => {
        let t = o()(() => {
          n([...e.logs])
        }, 500);
        return e.on("log", t), () => {
          e.off("log", t)
        }
      }, [e]), t
    }(Chunk570140.Z.actionLogger),
    s = Chunk473749.useMemo(() => Chunk120356.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })).toReversed(), [Chunk120356]),
    [c, d] = Chunk473749.useState(Chunk299608),
    [m, f] = Chunk473749.useState(Chunk299608),
    [x, g] = Chunk473749.useState(false),
    [v, j] = Chunk473749.useState(),
    y = Chunk473749.useCallback(e => {
      f(e)
    }, []);
  (0, Chunk301801.BO)(exports, Chunk886118 ? Chunk913527 : Chunk299608, Chunk428530, Z);
  let C = Chunk473749.useCallback(e => {
      d(s), g(e)
    }, [Chunk299608]),
    _ = exports.trim().length > 0,
    E = Chunk473749.useMemo(() => Chunk975775 ? Chunk755721 : Chunk886118 ? Chunk913527 : Chunk299608, [Chunk299608, Chunk755721, Chunk975775, Chunk886118, Chunk913527]),
    T = Chunk886118 ? "Enable Event Tracking" : "Pause Event Tracking";
  return (0, Chunk54381.jsxs)("div", {
    ref: module,
    className: l()(Chunk663618.panel, Chunk461015.panel),
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk461015.toolbar,
      children: [(0, Chunk54381.jsx)(Chunk28664.u, {
        text: Chunk981631,
        children: (0, Chunk54381.jsx)(Chunk481060.hU, {
          size: "sm",
          variant: Chunk886118 ? "primary" : "active",
          icon: Chunk886118 ? Chunk481060.o1U : Chunk481060.fpf,
          "aria-label": Chunk981631,
          onClick: () => Chunk257785(!Chunk886118)
        })
      }), (0, Chunk54381.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: exports,
        onChange: require,
        onClear: () => require(""),
        placeholder: "Search by action name"
      })]
    }), (0, Chunk54381.jsx)(Chunk681619.Z, {
      columns: A,
      data: Chunk621060,
      selectedRowKey: null == Chunk572004 ? true : Chunk572004.id.toString(),
      onClickRow: e => j(e.actionLog)
    }), null != Chunk572004 && (0, Chunk54381.jsx)(R, {
      actionLog: Chunk572004,
      initialHeight: null != module.current ? module.current.clientHeight / 2 : 300
    })]
  })
}