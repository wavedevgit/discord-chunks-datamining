/** Chunk was on 80960 **/
/** chunk id: 481250, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  V: () => b,
  a: () => v
}), require("./539854.js"), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk304680 = require("./304680.js"),
  Chunk763520 = require("./763520.js"),
  Chunk600164 = require("./600164.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk226961 = require("./226961.js"),
  Chunk513547 = require("./513547.js"),
  Chunk65154 = require("./65154.js"),
  Chunk442122 = require("./442122.js"),
  Chunk20493 = require("./20493.js");
let g = {
  [Chunk65154.Z.NO_OVERRIDE]: "None",
  [Chunk65154.Z.LOW]: "Low Quality Stream",
  [Chunk65154.Z.HIGH]: "High Quality Stream"
};

function v(e) {
  let t = [],
    r = 0;
  for (e.length % 2 != 0 && e.push(<c.Z basis={"50%"} grow={0} />); e.length > 0;) t.push(<c.Z basis={"50%"} grow={0}>{e.splice(0, 2)}</c.Z>);
  return t
}
let D = {
  ssrc: 1,
  codec: 2
};

function b(e, t, r, a, b) {
  return e.map((C, E) => {
    let P = [];
    for (let e of Object.keys(C).sort((e, t) => {
        let r = D[e],
          n = D[t];
        return r !== n ? true === r ? 1 : true === n ? false : r - n : m.Pz[e] !== m.Pz[t] ? m.Pz[e] ? 1 : false : e > t ? 1 : false
      })) {
      let t = C[e];
      p.al[e] || true === t || P.push(<p.ck section={a} label={e} value={t} />)
    }
    return <l.hjN className={y.marginBottom40} title={C.type} titleClassName={f.sectionHeader}>{"video" === C.type && null != r && null != a && null != b && function(e, t, r, a) {
        let l = a.get(t, r, e.ssrc);
        return null != l ? <div className={i()(f.videoWrapper, y.marginBottom40)}><d.Z streamId={l} videoComponent={u.Z.getMediaEngine().Video} paused={false} videoSpinnerContext={s.m.REPLAY_VIDEO_STREAM} userId={r} /></div> : null
      }(C, r, a, b)}{v(P)}{"video" === C.type && E === e.length - 1 && null != r && null != a && null != b && <c.Z className={y.marginBottom20}><c.Z.Child basis={"100%"}>{<l.vwX tag={l.RB0.H5} className={y.marginBottom8}>{"Simulcast Override"}</l.vwX>}{<l.q4e value={m.ZP.getSimulcastDebugOverride(a, t)} onChange={e => {
              o.MS(a, t, e)
            }} options={Object.values(h.Z).map(e => ({
              value: e,
              label: g[e]
            }))} />}</c.Z.Child></c.Z>}</l.hjN>
  })
}