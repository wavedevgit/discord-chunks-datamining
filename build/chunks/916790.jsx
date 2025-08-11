/** Chunk was on 93886 **/
/** chunk id: 916790, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./35282.js"), require("./388685.js"), require("./49124.js"), require("./975844.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk248520 = require("./248520.js"),
  Chunk616257 = require("./616257.js");

function E(e) {
  return parseFloat(e.toFixed(3))
}
let S = [{
  key: "store",
  cellClassName: Chunk248520.actionColumn,
  render(e) {
    let {
      trace: t
    } = e;
    return t.name
  }
}, {
  key: "time",
  cellClassName: Chunk248520.totalTimeColumn,
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
  return <u.zJl><y.Z columns={S} data={a} /></u.zJl>
}
let w = [{
  id: "action",
  name: "Action",
  group: Chunk621060.v0.NONE,
  render(e) {
    var t;
    let {
      actionLog: a
    } = e, r = c()(a.createdAt);
    return <n.Fragment>{<g.E className={O.actionProperties}>{<g.Z9 name={"Created at"}><time dateTime={null == (t = a.createdAt) ? true : t.toISOString()} title={(0, v.vc)(r, "LLLL")}>{(0, v.Y4)(r)}</time></g.Z9>}{<g.Z9 name={"Total Time"}>{E(a.totalTime)}{" ms"}</g.Z9>}</g.E>}{<u.zJl className={O.inspectorContainer}><j.Z data={a.action} /></u.zJl>}</n.Fragment>
  }
}, {
  id: "traces",
  name: "Store Handlers",
  group: Chunk621060.v0.NONE,
  render(e) {
    let {
      actionLog: t
    } = e;
    return <P actionLog={t} />
  }
}];

function I(e) {
  let {
    actionLog: t,
    initialHeight: a
  } = e, l = r.useMemo(() => t.error ? [...w, {
    id: "error",
    name: <n.Fragment>{<b.Z className={O.errorIcon} />}{"Error"}</n.Fragment>,
    group: C.v0.NONE,
    render(e) {
      let {
        actionLog: t
      } = e;
      return <n.Fragment>{<div className={i()(O.errorToolbar, T.toolbar)}><div className={T.toolbarGroup}><d.zx className={T.toolbarButton} size={d.zx.Sizes.MIN} onClick={() => console.error(t.error)}>{"Log to Console"}</d.zx></div></div>}{<u.zJl className={O.inspectorContainer}><j.Z data={t.error} /></u.zJl>}</n.Fragment>
    }
  }] : w, [t]), {
    TabBar: s,
    renderSelectedTab: o
  } = (0, C.ZP)({
    tabs: l
  }, [l]);
  return <_.Z className={O.subPanel} minHeight={100} initialHeight={a}>{<s />}{<x.ZP className={i()(T.headerBar, O.subPanelHeaderBar)}>{<x.ZP.Icon icon={u.xVZ} tooltip={t.name} />}{<x.ZP.Title wrapperClassName={i()(T.headerTitle, T.dispatcherHeader)} className={T.headerTitleText}>{t.name}</x.ZP.Title>}{<x.ZP.Icon icon={u.TIy} tooltip={"Copy event data"} onClick={() => {
          var e;
          let a = JSON.stringify(Object.keys(e = t.action).reduce((t, a) => {
            var n;
            return t[a] = (n = e[a], N.Jn9.test(n) ? "REDACTED" : n), t
          }, {}), null, 2);
          (0, f.JG)(a, () => (0, u.showToast)({
            id: "copy-action-log-name",
            type: u.ToastType.SUCCESS,
            message: "Copied action log data to clipboard"
          }))
        }} />}</x.ZP>}{o({
      actionLog: t
    })}</_.Z>
}
let k = [{
    key: "action",
    cellClassName: Chunk248520.actionColumn,
    render(e) {
      let {
        actionLog: t
      } = e;
      return <n.Fragment>{t.error && <b.Z className={O.errorIcon} />}{t.name}</n.Fragment>
    }
  }, {
    key: "total time",
    cellClassName: Chunk248520.totalTimeColumn,
    render(e) {
      let {
        actionLog: t
      } = e;
      return "".concat(E(t.totalTime), " ms")
    }
  }, {
    key: "timestamp",
    cellClassName: Chunk248520.totalTimeColumn,
    render(e) {
      let {
        actionLog: t
      } = e;
      return c()(t.createdAt).format("HH:mm:ss.SSS")
    }
  }],
  R = {
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
  let e = Chunk73800.useRef(null),
    [t, a] = Chunk73800.useState(""),
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
    o = Chunk73800.useMemo(() => Chunk120356.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })).toReversed(), [Chunk120356]),
    [c, d] = Chunk73800.useState(Chunk913527),
    [x, h] = Chunk73800.useState(Chunk913527),
    [b, f] = Chunk73800.useState(false),
    [v, j] = Chunk73800.useState(),
    g = Chunk73800.useCallback(e => {
      h(e)
    }, []);
  (0, Chunk301801.BO)(exports, Chunk4912 ? c : Chunk913527, Chunk257785, R);
  let _ = Chunk73800.useCallback(e => {
      d(o), f(e)
    }, [Chunk913527]),
    C = exports.trim().length > 0,
    N = Chunk73800.useMemo(() => Chunk621060 ? Chunk665149 : Chunk4912 ? c : Chunk913527, [Chunk913527, Chunk665149, Chunk621060, Chunk4912, c]);
  return <div ref={module} className={i()(Chunk616257.panel, Chunk248520.panel)}>{<div className={Chunk248520.toolbar}>{<div title={"Toggles the flow of Actions"} className={Chunk248520.pausedEvents}><Chunk481060.rsf checked={!Chunk4912} onChange={e => _(!e)} /></div>}{<Chunk481060.E1j size={"sm"} className={Chunk248520.searchBar} query={exports} onChange={require} onClear={() => require("")} placeholder={"Search by action name"} />}</div>}{<Chunk681619.Z columns={k} data={Chunk981631} selectedRowKey={null == Chunk55935 ? true : Chunk55935.id.toString()} onClickRow={e => j(e.actionLog)} />}{null != Chunk55935 && <I actionLog={Chunk55935} initialHeight={null != module.current ? module.current.clientHeight / 2 : 300} />}</div>
}