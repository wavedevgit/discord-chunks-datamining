/** Chunk was on web.js **/
/** chunk id: 407546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk149765 = require("./149765.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk340181 = require("./340181.js");
let u = 5;

function d(e) {
  let {
    error: t,
    selectedGuildId: n,
    onGuildChange: d,
    guilds: f,
    disabled: _ = false
  } = e, p = f.filter(e => i.e$(e.permissions, s.Plq.MANAGE_GUILD)).map(e => ({
    value: e.id,
    label: e.name
  }));
  return <div className={c.selectorGroup}>{<a.X6q variant={"heading-deprecated-12/semibold"} className={c.sectionLabel}>{l.intl.string(l.t["1DXFFR"])}</a.X6q>}{null != t && "" !== t ? <o.x variant={"text-xs/normal"} color={"text-danger"}>{t}</o.x> : null}{<a.VcW wrapperClassName={c.select} maxVisibleItems={u} placeholder={l.intl.string(l.t.oM4E1N)} options={p} onChange={d} isDisabled={_} value={n} />}{<o.x variant={"text-xs/medium"} color={"header-secondary"} className={c.label}>{l.intl.format(l.t.t9Jm9v, {})}</o.x>}</div>
}