/** Chunk was on 93886 **/
/** chunk id: 596768, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk665149 = require("./665149.js"),
  Chunk55935 = require("./55935.js"),
  Chunk120816 = require("./120816.js"),
  Chunk31336 = require("./31336.js"),
  Chunk257785 = require("./257785.jsx"),
  Chunk484036 = require("./484036.jsx"),
  Chunk681619 = require("./681619.js"),
  Chunk621060 = require("./621060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk459100 = require("./459100.js"),
  Chunk616257 = require("./616257.js");
let T = [{
    key: "id",
    cellClassName: Chunk459100.eventColumn,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: Chunk459100.locationColumn,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: Chunk459100.locationColumn,
    render(e) {
      let {
        timestamp: t
      } = e;
      return t.toLocaleString()
    }
  }],
  E = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      let {
        loggedTrigger: {
          experimentId: t,
          descriptor: a,
          exposureType: r,
          excluded: l,
          timestamp: s,
          location: o,
          previouslyTracked: c
        }
      } = e, u = d()(s);
      return <n.Fragment>{<p.ZP className={i()(O.headerBar, N.subPanelHeaderBar)}>{<p.ZP.Icon icon={x.IeX} tooltip={t} />}{<p.ZP.Title>{t}</p.ZP.Title>}</p.ZP>}{<j.E className={N.commonProperties}>{<j.Z9 name={"Timestamp (local)"}><time dateTime={s.toISOString()} title={(0, b.vc)(u, "LLLL")}>{(0, b.Y4)(u)}</time></j.Z9>}{"guild" === a.type && <j.Z9 name={"Guild ID"}><code>{a.guildId}</code></j.Z9>}{<j.Z9 name={"Bucket"}><code>{a.bucket}</code></j.Z9>}{<j.Z9 name={"Revision"}><code>{a.revision}</code></j.Z9>}{<j.Z9 name={"Override"}><j.wl value={a.override} /></j.Z9>}{<j.Z9 name={"Exposure type"}><code>{r}</code></j.Z9>}{<j.Z9 name={"Excluded"}><j.wl value={l} /></j.Z9>}{<j.Z9 name={"Previously tracked"}><j.wl value={c} /></j.Z9>}{<j.Z9 name={"Location"}><code>{o}</code></j.Z9>}</j.E>}</n.Fragment>
    }
  }];

function S() {
  let [e, t] = Chunk73800.useState(""), a = Chunk73800.useRef(null), l = (0, Chunk442837.Wu)([Chunk120816.Z], () => Chunk120816.Z.loggedTriggers), s = Chunk73800.useMemo(() => Chunk120356.filter(t => 0 === e.length || o()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [Chunk120356, module]), [c, d] = Chunk73800.useState(true), p = Chunk658722.find(e => e.key === c), {
    TabBar: b,
    renderSelectedTab: j
  } = (0, Chunk621060.ZP)({
    tabs: E
  }, []), S = (0, Chunk442837.e7)([Chunk120816.Z], () => Chunk120816.Z.trackTriggers), P = Chunk73800.useCallback(e => {
    h.Z.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return <div ref={require} className={i()(Chunk616257.panel, Chunk459100.panel)}>{<div className={Chunk459100.toolbar}>{<div title={"Enables tracking of all triggers"} className={Chunk459100.triggersEnable}><Chunk481060.rsf checked={S} onChange={P} className={Chunk459100.__invalid_toolbarSwitch} /></div>}{<Chunk755721.zx className={Chunk459100.toolbarButton} look={Chunk755721.zx.Looks.BLANK} size={Chunk755721.zx.Sizes.ICON} onClick={Chunk31336.Zw}><span title={Chunk388032.intl.string(Chunk388032.t.VkKicX)}><Chunk481060.XHJ size={"md"} color={"currentColor"} aria-label={Chunk388032.intl.string(Chunk388032.t.VkKicX)} /></span></Chunk755721.zx>}{<Chunk481060.E1j size={"sm"} className={Chunk459100.searchBar} query={module} onChange={exports} onClear={() => exports("")} placeholder={"Search by experiment id"} />}</div>}{<Chunk681619.Z columns={T} data={Chunk658722} selectedRowKey={Chunk913527} onClickRow={e => d(e.key)} />}{null != Chunk665149 && <Chunk484036.Z className={Chunk459100.subPanel} minHeight={100} initialHeight={null != require.current ? require.current.clientHeight / 2 : 300}>{<Chunk55935 />}{Chunk257785({
        loggedTrigger: Chunk665149
      })}</Chunk484036.Z>}</div>
}