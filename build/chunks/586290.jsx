/** Chunk was on 46746 **/
/** chunk id: 586290, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => b,
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk856901 = require("./856901.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk670863 = require("./670863.js"),
  Chunk72897 = require("./72897.js"),
  Chunk537135 = require("./537135.jsx"),
  Chunk176940 = require("./176940.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk729497 = require("./729497.js"),
  Chunk347226 = require("./347226.js"),
  Chunk20493 = require("./20493.js");

function b(e, t, n) {
  var r;
  let i = t.find(t => t.id === e);
  if (null == i) return null;
  let l = a().reduce(n, (e, t) => (0, c.stringSimilarity)(i.name, t.name) > (0, c.stringSimilarity)(i.name, e.name) ? t : e);
  return null != (r = null == l ? true : l.id) ? r : null
}

function S(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: n,
    onChangeAudioDevice: l
  } = e;
  s()(null != t, "Camera capture device cannot be null");
  let o = (0, p.Z)(),
    [a, c] = (0, m.Ls)(x.h7.AUDIO_INPUT, {
      location: "CaptureDeviceConfig"
    }),
    S = a.concat(c),
    [C, y] = i.useState(b(t.id, o, S));
  return null != C && l(C), <u.xJW title={"Capture Device"} className={v.modalContent}>{<u.xJW className={j.marginTop8}><h.Z>{<span className={_.ellipsisText}>{t.name}</span>}{<d.zx className={_.changeButton} color={d.zx.Colors.PRIMARY} size={d.zx.Sizes.SMALL} onClick={n}>{g.intl.string(g.t.GEgsAw)}</d.zx>}</h.Z></u.xJW>}{<u.xJW className={j.marginTop8} title={g.intl.string(g.t.y4ooen)}><f.j deviceType={x.h7.AUDIO_INPUT} location={"CaptureDeviceConfig"} className={j.__invalid_marginaTop8} selectedDeviceId={C} onSelectDevice={e => (y(e), l(e), false)} /></u.xJW>}</u.xJW>
}