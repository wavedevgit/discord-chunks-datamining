/** Chunk was on 34779 **/
/** chunk id: 13186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => p,
  Z: () => f
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk680018 = require("./680018.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk341402 = require("./341402.js"),
  p = ((r = {}).TOP = "top", r.BOTTOM = "bottom", r);
let f = Chunk73800.forwardRef(function(e, t) {
  let {
    body: n,
    header: r,
    artClassName: l,
    buttonText: o,
    onClose: p,
    art: f,
    align: g
  } = e;
  return (0, d.Z)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.CHAT_WALLPAPER_DM_LIST_COACHMARK
  }), <div className={h.tooltip} ref={t}><div className={h.content}>{<div className={l}>{f}</div>}{<div className={h.body}>{<u.X6q className={h.header} variant={"heading-md/bold"} color={"always-white"}>{r}</u.X6q>}{null == n ? null : "string" == typeof n ? <u.Text variant={"text-sm/normal"} color={"always-white"}>{n}</u.Text> : n}</div>}{<div className={h.buttonContainer}><c.z variant={"primary"} text={o} fullWidth={true} onClick={e => {
            null == p || p(e)
          }} /></div>}{<div className={s()(h.pointer, {
          [h.pointerBottom]: "bottom" === g
        })} />}</div></div>
})