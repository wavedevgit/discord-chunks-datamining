/** Chunk was on 9452 **/
/** chunk id: 299426, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  j: () => a,
  u: () => s
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk460181 = require("./460181.js");
let r = Chunk473749.createContext(true);

function s(t) {
  let {
    children: e
  } = t, n = l.useRef(null), s = l.useCallback(t => {
    null != n.current && n.current.stop(), n.current = (0, u.GN)(t)
  }, []);
  l.useEffect(() => () => {
    var t;
    null == (t = n.current) || t.stop()
  }, []);
  let a = l.useMemo(() => ({
    handlePreviewSound: s
  }), [s]);
  return (0, i.jsx)(r.Provider, {
    value: a,
    children: e
  })
}

function a() {
  let t = Chunk473749.useContext(r);
  if (null == module) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
  return module
}