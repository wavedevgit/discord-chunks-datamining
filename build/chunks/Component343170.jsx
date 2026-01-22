/** Chunk was on 97492 **/
/** chunk id: 343170, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk366811 = require("./366811.js"),
  Chunk71393 = require("./71393.js"),
  Chunk531685 = require("./531685.js"),
  Chunk263715 = require("./263715.js"),
  Chunk131494 = require("./131494.js"),
  Chunk330465 = require("./330465.jsx");

function f(e) {
  let {
    guildId: t
  } = e, n = l.useMemo(() => (0, c.EL)(t), [t]), f = (0, i.bG)([s.A], () => s.A.getGuild(t)), p = (0, i.bG)([o.A], () => o.A.isFocused()), h = t === (0, a.A)(e => {
    let {
      guildId: t
    } = e;
    return t
  }), b = (0, u.A)(t);
  return null == f ? null : (0, r.jsx)(d.A, {
    guildNode: n,
    guild: f,
    animatable: p,
    selected: h,
    draggable: false,
    mediaState: b
  })
}