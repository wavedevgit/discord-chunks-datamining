/** Chunk was on web.js **/
/** chunk id: 916001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk838997 = require("./838997.js");

function l(e) {
  let {
    locked: t,
    role: n,
    textVariant: l = "text-xs/medium"
  } = e, c = (0, o.dQu)(o.TVs.colors.INTERACTIVE_NORMAL).hex();
  return <div className={s.roleTagContainer}><div className={s.roleTag}>{<div className={s.roleColor} style={{
          backgroundColor: (0, i.Rf)(n.color)
        }} />}{<o.LZC size={8} horizontal={true} />}{<o.Text variant={l} color={"text-default"}>{<o.nn4>{a.intl.string(a.t.RnyseH)}</o.nn4>}{n.name}</o.Text>}{true === t && <r.Fragment>{<o.LZC size={8} horizontal={true} />}{<o.mBM size={"md"} color={c} />}</r.Fragment>}</div></div>
}