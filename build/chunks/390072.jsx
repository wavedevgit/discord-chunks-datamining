/** Chunk was on 27978 **/
/** chunk id: 390072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk725436 = require("./725436.js"),
  Chunk11868 = require("./11868.jsx"),
  Chunk217804 = require("./217804.js"),
  Chunk765305 = require("./765305.js"),
  Chunk244231 = require("./244231.js");

function d(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: d
  } = e, h = t.entity_type === c.WX.EXTERNAL, p = i.useCallback(e => (0, s.Qt)(t, d)(e), [t, d]), f = (0, a.u)(t, n);
  if (null == f) return null;
  let {
    IconComponent: m,
    locationName: g
  } = f, _ = <r.Fragment>{null != m && <m size={"custom"} color={"currentColor"} width={20} height={20} className={u.channelIcon} />}{<l.Text color={"header-secondary"} variant={"text-sm/normal"} className={u.locationText}>{(0, o.m)(g, true)}</l.Text>}</r.Fragment>;
  return <div className={u.row}>{null != p ? (0, r.jsx)(l.P3F, {
      className: h ? u.externalLocation : u.channelLocation,
      onClick: p,
      children: _
    }) : _}</div>
}