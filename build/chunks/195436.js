/** Chunk was on 46746 **/
/** chunk id: 195436, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk594190 = require("./594190.js"),
  Chunk59468 = require("./59468.js");
let a = [Chunk268146.vA.CAMERA],
  d = [Chunk268146.vA.SCREEN, Chunk268146.vA.WINDOW, Chunk268146.vA.CAMERA];

function u(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = (0, s.e7)([o.ZP], () => o.ZP.getRunningGames().length > 0),
    u = n.useRef(0),
    f = i ? 2e3 : 1e3,
    h = n.useRef(new l.V7);
  n.useEffect(() => {
    if (r) return;
    let n = h.current,
      i = u.current,
      s = {
        width: 447,
        height: 251,
        types: e ? a : d
      };
    async function l() {
      let {
        screenSources: e,
        windowSources: r,
        cameraSources: o
      } = await (0, c.t)(s);
      u.current > i || (t({
        type: "set_source_candidates",
        screenSources: e,
        windowSources: r,
        deviceSources: o
      }), n.start(f, l))
    }
    return l(), () => {
      u.current += 1, n.stop()
    }
  }, [t, f, e, r])
}