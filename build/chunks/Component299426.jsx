/** Chunk was on 9452 **/
/** chunk id: 299426, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  j: () => a,
  u: () => s
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk460181 = require("./460181.js");
let u = Chunk473749.createContext(true);

function s(t) {
  let {
    children: e
  } = t, n = r.useRef(null), s = r.useCallback(t => {
    null != n.current && n.current.stop(), n.current = (0, l.GN)(t)
  }, []);
  r.useEffect(() => () => {
    var t;
    null == (t = n.current) || t.stop()
  }, []);
  let a = r.useMemo(() => ({
    handlePreviewSound: s
  }), [s]);
  return (0, i.jsx)(u.Provider, {
    value: a,
    children: e
  })
}

function a() {
  let t = Chunk473749.useContext(u);
  if (null == module) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
  return module
}