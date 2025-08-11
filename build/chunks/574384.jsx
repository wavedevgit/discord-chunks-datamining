/** Chunk was on web.js **/
/** chunk id: 574384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489863 = require("./489863.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk340181 = require("./340181.js");
let d = 5;

function f(e) {
  var t;
  let {
    selectedGuildId: n,
    selectedChannelId: f,
    onChannelChange: _,
    error: p
  } = e, [h, m] = i.useState(null), g = i.useRef(false);
  if (i.useEffect(() => {
      async function e(e) {
        let t = await (0, l.UR)(e);
        n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), m({
          guildId: e,
          channels: t
        }), g.current = true)
      }
      m(null), null == n ? _(null) : e(n)
    }, [_, n]), i.useEffect(() => {
      g.current && (null == h ? null != f && _(null) : h.channels.some(e => e.id === f) || _(null))
    }, [h, _, f, n]), null == n) return null;
  let E = null == h || h.guildId !== n ? [] : (null != (t = null == h ? true : h.channels) ? t : []).map(e => ({
    value: e.id,
    label: e.name
  }));
  return <div className={u.selectorGroup}>{<o.X6 variant={"heading-deprecated-12/semibold"} className={u.sectionLabel}>{c.intl.string(c.t["8qKd+P"])}</o.X6>}{null != p && "" !== p ? <a.x variant={"text-xs/normal"} color={"text-danger"}>{p}</a.x> : null}{<s.VcW wrapperClassName={u.select} maxVisibleItems={d} onChange={_} placeholder={c.intl.string(c.t["Re/64e"])} options={E} value={f} renderOptionLabel={e => (0, r.jsx)(a.x, {
        variant: "text-md/normal",
        children: e.label
      })} renderOptionValue={e => (0, r.jsx)(a.x, {
        variant: "text-md/normal",
        children: e[0].label
      })} />}{<a.x variant={"text-xs/normal"} color={"header-secondary"} className={u.label}>{c.intl.string(c.t.kQXMfH)}</a.x>}</div>
}