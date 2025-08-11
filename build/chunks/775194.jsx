/** Chunk was on 80960 **/
/** chunk id: 775194, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./642613.js"), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk481250 = require("./481250.jsx"),
  Chunk513547 = require("./513547.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk442122 = require("./442122.js"),
  Chunk20493 = require("./20493.js");
let m = {
  userId: 1,
  dataType: 2,
  savedKB: 3,
  numFrames: 4,
  startTimestampMs: 5,
  endTimestampMs: 6,
  width: 7,
  height: 8,
  audioChannels: 9,
  sampleRate: 10
};

function p(e) {
  let {
    clips: t
  } = e;
  if (null == t) return <l.$jN type={l.$jN.Type.SPINNING_CIRCLE} />;
  let r = i().map(t, (e, t) => {
    if (true !== e && "buffers" !== t) return <s.ck label={t} value={e} />
  });
  return r.push(<s.ck label={"Frames Per Second"} value={t.recentEncodedFrames / (t.recentDurationMs / 1e3)} />), <l.hjN tag={l.RB0.H2} title={c.intl.string(c.t.MKrFKC)}>{(0, o.a)(r)}{function(e) {
      if (null != e.buffers) return e.buffers.map(e => {
        let t = [];
        for (let r of Object.keys(e).sort((e, t) => {
            let r = m[e],
              n = m[t];
            return r !== n ? true === r ? 1 : true === n ? false : r - n : e > t ? 1 : false
          })) {
          let a = e[r];
          null !== a && "key" !== r && t.push((0, n.jsx)(s.ck, {
            label: r,
            value: a
          }, r))
        }
        return (0, n.jsx)(l.hjN, {
          className: u.marginBottom40,
          title: "Buffer: ".concat(e.key),
          titleClassName: d.title,
          children: (0, o.a)(t)
        }, "Buffer: ".concat(e.key))
      })
    }(t)}</l.hjN>
}