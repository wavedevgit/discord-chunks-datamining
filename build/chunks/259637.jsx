/** Chunk was on 71879 **/
/** chunk id: 259637, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk339085 = require("./339085.js"),
  Chunk456269 = require("./456269.js"),
  Chunk388032 = require("./388032.js"),
  Chunk414464 = require("./414464.js");
let h = e => {
  let {
    tag: t
  } = e, {
    id: n,
    name: i,
    emojiId: a,
    emojiName: d
  } = t, u = (0, l.e7)([c.ZP], () => null != a ? c.ZP.getUsableCustomEmojiById(a) : null), h = null != a || null != d;
  return <s.lo1 value={n}><s.lo1.Label><div className={m.row}>{h ? <o.Z className={m.__invalid_emoji} emojiId={a} emojiName={d} animated={!!(null == u ? true : u.animated)} /> : <s.lO_ size={"md"} color={"currentColor"} className={m.__invalid_emoji} />}{<s.Text variant={"text-md/semibold"} color={"header-secondary"}>{i}</s.Text>}</div></s.lo1.Label></s.lo1>
};

function g(e) {
  let {
    parentChannel: t,
    appliedTags: n,
    maxTagsApplied: i,
    onSelectTag: l,
    onClose: o
  } = e, c = (0, d.Vm)(t), m = (e, t) => t.filter(t => a()(e.toLowerCase(), t.name.toLowerCase()));
  return <s.DBG showScrollbar={true} value={n} onChange={e => {
      (!i || n.has(e)) && (l(e), o())
    }} placeholder={u.intl.string(u.t.MbhGm5)} aria-label={u.intl.string(u.t.MbhGm5)}>{e => m(e, c).map(e => (0, r.jsx)(h, {
      tag: e
    }, e.id))}</s.DBG>
}