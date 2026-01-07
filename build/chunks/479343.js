/** Chunk was on 77069 **/
/** chunk id: 479343, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  L: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk137920 = require("./137920.js"),
  Chunk829907 = require("./829907.js"),
  Chunk624864 = require("./624864.js"),
  Chunk932404 = require("./932404.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.qs)(Chunk313789.n.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
  usePredicate: () => {
    let {
      runningGameApplication: t
    } = (0, l.Z)();
    return (null == t ? true : t.id) != null
  },
  useDisabled: () => {
    let {
      runningGame: t
    } = (0, l.Z)();
    return null != t && (0, s.H8)(t.pid)
  },
  useValue: () => {
    let {
      runningGame: t,
      runningGameApplication: e
    } = (0, l.Z)(), n = null == e ? true : e.id, r = (0, i.e7)([u.Z], () => u.Z.isLimitedInteractionOverrideEnabled(n)), a = null != t && (0, s.H8)(t.pid);
    return r || a
  },
  setValue: t => {
    let {
      runningGameApplication: e
    } = (0, l.S)();
    null != e && (0, r.rI)(e.id, t)
  },
  useTitle: () => T.intl.string(T.t.wgVQND),
  useSubtitle: () => T.intl.string(T.t["5SsyF5"])
})