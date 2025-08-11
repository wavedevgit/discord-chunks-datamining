/** Chunk was on 34779 **/
/** chunk id: 40614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550532 = require("./550532.js"),
  Chunk371991 = require("./371991.js"),
  Chunk561308 = require("./561308.js"),
  Chunk594190 = require("./594190.js"),
  Chunk695346 = require("./695346.js"),
  Chunk885110 = require("./885110.js"),
  Chunk316496 = require("./316496.js"),
  Chunk29953 = require("./29953.js"),
  Chunk388032 = require("./388032.js"),
  Chunk24655 = require("./24655.js");

function b(e) {
  let {
    onClick: t
  } = e;
  return <o.P3F className={m.container} onClick={t}><o.Text className={m.textContent} variant={"text-xs/medium"} color={"text-secondary"}>{g.intl.string(g.t.jfrLLS)}</o.Text></o.P3F>
}

function O(e) {
  var t;
  let {
    onClick: n
  } = e, h = (0, l.e7)([s.Z], () => s.Z.getFakeGameData()), p = (0, l.e7)([u.ZP], () => u.ZP.getVisibleGame()), b = null != (t = null == h ? true : h.start) ? t : null == p ? true : p.start, O = d.SE.useSetting().length > 0, {
    now: _
  } = (0, a.tS)(), y = (0, i.useMemo)(() => null == b ? null : (0, c.T_)({
    start: b
  }, _), [b, _]);
  if (null == b) return null;
  let C = [...O ? [g.intl.string(f.default.jfDsyM)] : [], g.intl.string(g.t.BMTj29), y];
  return <o.P3F className={m.container} onClick={n}><o.Text className={m.textContent} variant={"text-xs/medium"} color={"text-feedback-positive"} lineClamp={1}>{C.join(" \xb7 ")}</o.Text></o.P3F>
}

function _(e) {
  let {
    onClick: t
  } = e, {
    isEnabled: n,
    showActivitySharingIndicatorWhenSharing: i
  } = (0, p.D)("not sharing link"), s = d.G6.useSetting(), a = (0, l.e7)([h.Z], () => h.Z.getStatus());
  return !n || __OVERLAY__ ? null : s && a !== o.Skl.INVISIBLE ? i ? <O onClick={t} /> : null : <b onClick={t} />
}