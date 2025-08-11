/** Chunk was on 84722 **/
/** chunk id: 131154, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js"),
  Chunk449774 = require("./449774.js");

function o(e) {
  let {
    guild: n,
    speakers: t,
    speakerCount: l,
    className: o
  } = e, u = t.slice(0, 5), d = u.map(e => {
    var t, l;
    return <div className={c.speakerContainer}>{<a.qEK src={null == e || null == (t = e.user) ? true : t.getAvatarURL(n.id, 20)} size={a.EFr.SIZE_20} className={c.avatar} aria-label={"".concat(null == e ? true : e.userNick, "-avatar")} />}{<div className={c.textInGridContainer}><a.Text color={"header-secondary"} variant={"text-sm/normal"} className={c.textInGrid}>{null == e ? true : e.userNick}</a.Text></div>}</div>
  }), h = l - u.length;
  return <div className={r()(c.grid, o)}>{d}{h > 0 && <div className={c.speakerContainer}>{<div className={c.iconMicrophone}><a.S6n size={"custom"} color={"currentColor"} height={12} /></div>}{<a.Text color={"header-secondary"} variant={"text-sm/normal"} className={c.textInGrid}>{s.intl.format(s.t["185ggI"], {
          count: h
        })}</a.Text>}</div>}</div>
}