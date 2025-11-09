/** Chunk was on 50642 **/
/** chunk id: 298905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./539854.js"), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk866071 = require("./866071.js");

function s(e) {
  let t = (0, r.e7)([l.ZP], () => l.ZP.getGuilds()),
    n = i.useRef([]);
  return i.useEffect(() => {
    a.ZP.forEach(e => n.current.push(e))
  }, []), i.useMemo(() => [...Object.values(t).map(t => t.emojis.filter(t => (0, o.K)(t, e))).flat(), ...n.current], [t, e])
}