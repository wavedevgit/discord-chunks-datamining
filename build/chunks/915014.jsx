/** Chunk was on web.js **/
/** chunk id: 915014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk522289 = require("./522289.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk708108 = require("./708108.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk182294 = require("./182294.js"),
  Chunk68646 = require("./68646.js");
let p = 3;

function h(e) {
  let {
    user: t,
    onOpenProfile: n
  } = e, {
    mutualFriends: h,
    mutualGuilds: m
  } = (0, l.Z)(t), g = null != h && h.length > 0, E = null != m && m.length > 0, b = g && E ? "text-xs/normal" : "text-sm/normal";
  if (!g && !E) return null;
  let y = () => g ? <i.P3F className={_.section} onClick={() => null == n ? true : n(d.oh.MUTUAL_FRIENDS)}>{<o.Z maxUsers={p} users={h.map(e => {
          let {
            user: t
          } = e;
          return t
        })} size={f.EF.SIZE_16} hideOverflowCount={true} disableUsernameTooltip={true} aria-hidden={true} />}{<i.Text className={_.text} variant={b} color={"interactive-normal"}>{(0, c.Z)(h.length)}</i.Text>}</i.P3F> : null,
    O = () => g && E ? <div aria-hidden={"true"} className={_.spacer} /> : null,
    v = () => E ? <i.P3F className={_.section} onClick={() => null == n ? true : n(d.oh.MUTUAL_GUILDS)}>{!g && <a.Z maxGuilds={p} guilds={m.map(e => {
          let {
            guild: t
          } = e;
          return t
        })} size={s.Z.Sizes.SMOL} hideOverflowCount={true} disableGuildNameTooltip={true} />}{<i.Text className={_.text} variant={b} color={"interactive-normal"}>{(0, u.Z)(m.length)}</i.Text>}</i.P3F> : null;
  return <div className={_.mutuals}>{y()}{O()}{v()}</div>
}