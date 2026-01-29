/** Chunk was on 1113 **/
/** chunk id: 343170, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    guildId: t
  } = e, n = l.useMemo(() => (0, c.EL)(t), [t]), h = (0, i.bG)([a.A], () => a.A.getGuild(t)), p = (0, i.bG)([o.A], () => o.A.isFocused()), g = t === (0, s.A)(e => {
    let {
      guildId: t
    } = e;
    return t
  }), f = (0, u.A)(t);
  return null == h ? null : (0, r.jsx)(d.A, {
    guildNode: n,
    guild: h,
    animatable: p,
    selected: g,
    draggable: false,
    mediaState: f
  })
}