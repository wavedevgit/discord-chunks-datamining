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
    } = (0, Chunk137920.Z)();
    return (null == module ? true : module.id) != null
  },
  useDisabled: () => {
    let {
      runningGame: t
    } = (0, Chunk137920.Z)();
    return null != module && (0, Chunk829907.H8)(module.pid)
  },
  useValue: () => {
    let {
      runningGame: t,
      runningGameApplication: e
    } = (0, Chunk137920.Z)(), n = null == exports ? true : exports.id, r = (0, Chunk442837.e7)([Chunk624864.Z], () => Chunk624864.Z.isLimitedInteractionOverrideEnabled(require)), a = null != module && (0, Chunk829907.H8)(module.pid);
    return Chunk932404 || Chunk509613
  },
  setValue: t => {
    let {
      runningGameApplication: e
    } = (0, l.S)();
    null != e && (0, r.rI)(e.id, t)
  },
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.wgVQND),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["5SsyF5"])
})