/** Chunk was on 47863 **/
/** chunk id: 577257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk594190 = require("./594190.js"),
  Chunk59468 = require("./59468.js");
let c = [Chunk268146.vA.CAMERA],
  d = [Chunk268146.vA.SCREEN, Chunk268146.vA.WINDOW, Chunk268146.vA.CAMERA];

function u(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = (0, l.e7)([s.ZP], () => s.ZP.getRunningGames().length > 0),
    u = r.useRef(0),
    f = i ? 2e3 : 1e3,
    p = r.useRef(new o.V7);
  r.useEffect(() => {
    if (n) return;
    let r = p.current,
      i = u.current,
      l = {
        width: 376,
        height: 212,
        types: e ? c : d
      };
    async function o() {
      let {
        screenSources: e,
        windowSources: n,
        cameraSources: s
      } = await (0, a.t)(l);
      u.current > i || (t({
        type: "set_source_candidates",
        screenSources: e,
        windowSources: n,
        deviceSources: s
      }), r.start(f, o))
    }
    return o(), () => {
      u.current += 1, r.stop()
    }
  }, [t, f, e, n])
}