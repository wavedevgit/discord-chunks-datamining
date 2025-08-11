/** Chunk was on 75708 **/
/** chunk id: 38915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk797685 = require("./797685.js");

function o(e) {
  let {
    hotspotLocation: t
  } = e, [n, o] = (0, r.Wu)([a.qc], () => [a.qc.hasHotspot(t, true), a.qc.getHotspotOverride(t)]);
  return <i.Fragment>{<s.xJW title={t} className={l.hotspotSwitch}>{n ? <s.DY3 className={l.iconContainer} element={"span"} text={"Active"}><s.dz2 size={"md"} color={"currentColor"} className={l.checkmark} /></s.DY3> : <s.DY3 className={l.iconContainer} element={"span"} text={"Inactive"}><s.Dio size={"md"} color={"currentColor"} className={l.xmark} /></s.DY3>}{<s.q4e className={l.overrideSelect} value={o} options={[{
          value: true,
          label: "No Override"
        }, {
          value: true,
          label: "Force Active"
        }, {
          value: false,
          label: "Force Inactive"
        }]} onChange={e => null != e ? (0, a.hv)(t, e) : (0, a.Po)(t)} />}</s.xJW>}{<s.$i$ />}</i.Fragment>
}

function c(e) {
  let {
    className: t
  } = e;
  return <s.hjN title={"Hotspots"} tag={s.RB0.H1} className={t}>{<s.Text className={l.helpText} tag={"p"} variant={"text-sm/normal"}>{'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'}</s.Text>}{Object.keys(a.v6).sort((e, t) => e.localeCompare(t)).map(e => <o hotspotLocation={e} />)}</s.hjN>
}