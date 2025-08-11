/** Chunk was on 75708 **/
/** chunk id: 931547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk427894 = require("./427894.js");

function c(e) {
  let {
    message: t,
    error: n,
    onClick: r,
    submitting: c,
    className: d,
    ctaMessage: u
  } = e;
  return <div className={s()(o.container, d)}>{<div className={o.textContainer}>{<l.Mgn size={"custom"} width={20} height={20} color={"currentColor"} className={o.warningIcon} />}{<l.LZC size={10} horizontal={true} />}{<div>{<l.LZC size={1} />}{<l.Text className={o.info} variant={"text-sm/normal"}>{t}</l.Text>}{null != n && <l.Text className={s()(o.info, o.error)} variant={"text-sm/normal"}>{n}</l.Text>}</div>}</div>}{<l.LZC size={16} horizontal={true} />}{<a.zx className={o.undoButton} color={a.zx.Colors.LINK} look={a.zx.Looks.LINK} size={a.zx.Sizes.ICON} onClick={r} submitting={c}>{u}</a.zx>}</div>
}