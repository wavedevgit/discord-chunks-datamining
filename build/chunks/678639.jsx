/** Chunk was on 93886 **/
/** chunk id: 678639, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk428530 = require("./428530.jsx"),
  Chunk484036 = require("./484036.jsx"),
  Chunk681619 = require("./681619.js"),
  Chunk621060 = require("./621060.jsx"),
  Chunk616257 = require("./616257.js"),
  Chunk564799 = require("./564799.js");

function b(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function f(e) {
  let {
    store: t,
    dataGetter: a
  } = e, [l, i] = r.useState(a(t));
  return r.useEffect(() => {
    let e = () => i(a(t));
    return e(), t.addChangeListener(e), () => {
      t.removeChangeListener(e)
    }
  }, [t, a]), <o.zJl className={p.inspectorContainer}><d.Z data={l} /></o.zJl>
}
let v = [{
    key: "name",
    cellClassName: Chunk564799.__invalid_eventColumn,
    render(e) {
      let {
        store: t
      } = e;
      return t.getName()
    }
  }],
  j = [{
    id: "local",
    name: "Local Variables",
    group: Chunk621060.v0.NONE,
    render(e) {
      let {
        store: t
      } = e;
      return null == t.__getLocalVars ? <div className={p.inspectorContainer}>{"Store is missing "}{<code>{"__getLocalVars"}</code>}{" method."}</div> : <f store={t} dataGetter={e => e.__getLocalVars()} />
    }
  }, {
    id: "instance",
    name: "Store Instance",
    group: Chunk621060.v0.NONE,
    render(e) {
      let {
        store: t
      } = e;
      return <f store={t} dataGetter={e => e} />
    }
  }];

function g(e) {
  let {
    store: t,
    initialHeight: a
  } = e, {
    TabBar: r,
    renderSelectedTab: l
  } = (0, x.ZP)({
    tabs: j
  }, []);
  return <u.Z className={p.subPanel} minHeight={100} initialHeight={a}>{<r />}{<c.ZP className={i()(h.headerBar, p.subPanelHeaderBar)}>{<c.ZP.Icon icon={o.lO_} tooltip={t.getName()} />}{<c.ZP.Title>{t.getName()}</c.ZP.Title>}</c.ZP>}{l({
      store: t
    })}</u.Z>
}

function _() {
  let e = Chunk73800.useRef(null),
    [t, a] = Chunk73800.useState(""),
    l = Chunk442837.yh.getAll(),
    c = Chunk73800.useMemo(() => Chunk120356.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(b), [Chunk120356]).filter(e => (function(e, t) {
      let {
        store: a
      } = e;
      return a.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [d, u] = Chunk73800.useState(),
    x = Chunk120356.find(e => e._dispatchToken === d);
  return <div ref={module} className={i()(Chunk616257.panel, Chunk564799.panel)}>{<div className={Chunk564799.toolbar}><Chunk481060.E1j className={Chunk564799.searchBar} size={"sm"} query={exports} onChange={require} onClear={() => require("")} placeholder={"Search stores"} aria-label={"Search stores"} /></div>}{<Chunk681619.Z columns={v} data={Chunk665149} selectedRowKey={Chunk428530} onClickRow={e => u(e.key)} />}{null != Chunk621060 && <g store={Chunk621060} initialHeight={null != module.current ? module.current.clientHeight / 2 : 300} />}</div>
}