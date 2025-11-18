/** Chunk was on 10023 **/
/** chunk id: 153209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gp: () => O,
  ZP: () => _
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk140155 = require("./140155.js"),
  Chunk497089 = require("./497089.js"),
  Chunk178480 = require("./178480.js"),
  Chunk11799 = require("./11799.js"),
  Chunk616032 = require("./616032.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk629775 = require("./629775.js");

function _() {
  let {
    initialized: e,
    items: t,
    loading: n,
    loadMore: i
  } = (0, Chunk11799.y6)(), o = y(exports, (0, Chunk442837.e7)([Chunk140155.Z], () => Chunk140155.Z.localItems));
  return (0, Chunk54381.jsx)(Chunk616032.Z, {
    initialized: module,
    items: Chunk481060,
    loading: require,
    loadMore: Chunk473749
  })
}

function y(e, t) {
  return i.useMemo(() => [...[...e, ...t].sort((e, t) => false * h.default.compare(e.id, t.id))], [e, t])
}

function O() {
  let {
    items: e
  } = (0, Chunk11799.y6)(), t = module.length > 0 ? module[0] : null, n = y(module, (0, Chunk442837.e7)([Chunk140155.Z], () => Chunk140155.Z.localItems)), d = Chunk695346.d$.useSetting();
  return Chunk473749.useMemo(() => {
    if (null != exports && 0 >= Chunk709054.default.compare(exports.id, Chunk616032)) returnfalse;
    for (let e of require) {
      if (0 >= Chunk709054.default.compare(module.id, Chunk616032)) break;
      if (!(0, Chunk178480.r)(module, Chunk616032)) returntrue
    }
    returnfalse
  }, [exports, Chunk616032, require]) ? (0, Chunk54381.jsx)(Chunk481060.M0o, {
    tooltip: Chunk388032.intl.string(Chunk388032.t["8k+6QY"]),
    color: Chunk481060.YX$.TERTIARY,
    icon: (0, Chunk54381.jsx)(Chunk481060.W6s, {
      size: "xs",
      color: "currentColor"
    }),
    className: Chunk629775.controlButton,
    onClick: () => {
      null != exports && (Chunk695346.d$.updateSetting(exports.id), Chunk626135.default.track(Chunk981631.rMx.NOTIFICATION_CENTER_ACTION, {
        action_type: Chunk497089.ud.MARK_ALL_READ
      }))
    }
  }) : null
}