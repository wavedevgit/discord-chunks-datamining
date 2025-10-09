/** Chunk was on 46746 **/
/** chunk id: 577257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk647438 = require("./647438.js"),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk594190 = require("./594190.js"),
  Chunk869580 = require("./869580.js"),
  Chunk59468 = require("./59468.js");
let d = [Chunk268146.vA.CAMERA],
  u = [Chunk268146.vA.SCREEN, Chunk268146.vA.WINDOW, Chunk268146.vA.CAMERA];

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    {
      previewSizeMultiplier: i
    } = (0, a.j)({
      location: "usePollSources"
    }),
    f = (0, l.e7)([o.ZP], () => o.ZP.getRunningGames().length > 0),
    h = r.useRef(0),
    m = f ? 2e3 : 1e3,
    p = r.useRef(new s.V7);
  r.useEffect(() => {
    if (n) return;
    let r = p.current,
      l = h.current,
      s = {
        width: 376 * i,
        height: 212 * i,
        types: e ? d : u
      };
    async function o() {
      let {
        screenSources: e,
        windowSources: n,
        cameraSources: i
      } = await (0, c.t)(s);
      h.current > l || (t({
        type: "set_source_candidates",
        screenSources: e,
        windowSources: n,
        deviceSources: i
      }), r.start(m, o))
    }
    return o(), () => {
      h.current += 1, r.stop()
    }
  }, [t, m, e, n, i])
}