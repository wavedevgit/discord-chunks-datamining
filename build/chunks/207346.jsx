/** Chunk was on 2668 **/
/** chunk id: 207346, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk547972 = require("./547972.js"),
  Chunk703288 = require("./703288.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.js"),
  Chunk537796 = require("./537796.js");

function d(e) {
  let {
    filterQuery: t,
    setFilterQuery: n,
    onClose: d,
    sortOrder: p,
    setSortOrder: m
  } = e;
  return <a.xBx className={u.root} separator={false}>{<a.AlX size={"xs"} color={"currentColor"} className={u.icon} />}{<a.X6q className={u.title} variant={"heading-xxl/bold"}>{c.intl.string(c.t.z2jK6e)}</a.X6q>}{<div className={u.betaTag}><o.Z /></div>}{<a.E1j autoFocus={true} placeholder={c.intl.string(c.t["5h0QOD"])} className={u.queryInput} query={t} onChange={n} onClear={() => n("")} />}{<a.PhF placeholder={c.intl.string(c.t["0XtAW1"])} className={u.sortInput} options={[{
        value: "descending",
        label: c.intl.string(c.t.SCsC5u)
      }, {
        value: "ascending",
        label: c.intl.string(c.t.fdx7aG)
      }]} isSelected={e => e === p} select={m} serialize={e => e} />}{<l.zx color={l.Tt.TRANSPARENT} size={l.zx.Sizes.NONE} className={u.settingsButton} look={l.zx.Looks.FILLED} onClick={() => {
        (0, i.Z)(s.Z.CLIPS), d()
      }}><a.ewm size={"md"} color={"currentColor"} /></l.zx>}{<a.olH className={u.button} onClick={d} />}</a.xBx>
}