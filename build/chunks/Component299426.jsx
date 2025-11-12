/** Chunk was on 9452 **/
/** chunk id: 299426, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  j: () => a,
  u: () => s
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk460181 = require("./460181.js");
let r = Chunk647438.createContext(true);

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
  let t = Chunk647438.useContext(r);
  if (null == module) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
  return module
}