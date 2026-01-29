/** Chunk was on 4670 **/
/** chunk id: 234658, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  x: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk286237 = require("./286237.js"),
  Chunk515183 = require("./515183.js"),
  Chunk592598 = require("./592598.js"),
  Chunk682763 = require("./682763.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
  usePredicate: () => {
    let {
      runningGameApplication: e
    } = (0, l.A)();
    return (null == e ? true : e.id) != null
  },
  useDisabled: () => {
    let {
      runningGame: e
    } = (0, l.A)();
    return null != e && (0, s.qJ)(e.pid)
  },
  useValue: () => {
    let {
      runningGame: e,
      runningGameApplication: t
    } = (0, l.A)(), i = null == t ? true : t.id, a = (0, n.bG)([r.A], () => r.A.isLimitedInteractionOverrideEnabled(i)), u = null != e && (0, s.qJ)(e.pid);
    return a || u
  },
  setValue: e => {
    let {
      runningGameApplication: t
    } = (0, l.b)();
    null != t && (0, a.x8)(t.id, e)
  },
  useTitle: () => d.intl.string(d.t.wgVQND),
  useSubtitle: () => d.intl.string(d.t["5SsyF5"])
})