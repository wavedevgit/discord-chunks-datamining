/** Chunk was on 78528 **/
/** chunk id: 391786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./321073.js"), require("./864466.js"), require("./443073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk846218 = require("./846218.js");

function o(e) {
  let t = (0, l.bG)([i.Ay], () => i.Ay.getGuilds()),
    n = r.useRef([]);
  return r.useEffect(() => {
    s.Ay.forEach(e => n.current.push(e))
  }, []), r.useMemo(() => [...Object.values(t).map(t => t.emojis.filter(t => (0, a.n)(t, e))).flat(), ...n.current], [t, e])
}