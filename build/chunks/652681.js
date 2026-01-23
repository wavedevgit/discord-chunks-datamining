/** Chunk was on 96811 **/
/** chunk id: 652681, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk141931 = require("./141931.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk15285 = require("./15285.js"),
  Chunk920281 = require("./920281.js");
let c = [Chunk141931.fS.CAMERA],
  d = [Chunk141931.fS.SCREEN, Chunk141931.fS.WINDOW, Chunk141931.fS.CAMERA];

function u(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = (0, l.bG)([a.Ay], () => a.Ay.getRunningGames().length > 0),
    u = n.useRef(0),
    f = i ? 2e3 : 1e3,
    h = n.useRef(new s.Ep);
  n.useEffect(() => {
    if (r) return;
    let n = h.current,
      i = u.current,
      l = {
        width: 447,
        height: 251,
        types: e ? c : d
      };
    async function s() {
      let {
        screenSources: e,
        windowSources: r,
        cameraSources: a
      } = await (0, o.d)(l);
      u.current > i || (t({
        type: "set_source_candidates",
        screenSources: e,
        windowSources: r,
        deviceSources: a
      }), n.start(f, s))
    }
    return s(), () => {
      u.current += 1, n.stop()
    }
  }, [t, f, e, r])
}