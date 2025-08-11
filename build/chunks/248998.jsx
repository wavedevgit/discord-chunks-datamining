/** Chunk was on 75708 **/
/** chunk id: 248998, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk55935 = require("./55935.js"),
  Chunk955204 = require("./955204.js"),
  Chunk674680 = require("./674680.js"),
  Chunk927671 = require("./927671.js");

function p(e) {
  let {
    achievementId: t,
    dateUnlocked: n
  } = e, r = (0, d.oX)(t);
  if (null == r) return null;
  let a = null != n,
    {
      name: p,
      description: g,
      hideDescriptionUntilUnlock: h,
      onAction: f
    } = r,
    b = h && !a,
    x = a ? "header-primary" : "text-muted",
    _ = a ? "header-secondary" : "text-muted",
    j = l()(n),
    E = null != f && a,
    C = E ? o.P3F : "div";
  return <C className={s()(m.container, E && m.actionable)} onClick={() => {
      E && f()
    }}>{<div className={m.iconContainer}><u.Z achievementId={t} size={u.Z.Sizes.SIZE_40} unlocked={a} /></div>}{<div className={m.nameContainer}>{null != n && <o.Text variant={"text-xxs/semibold"} color={"text-muted"} className={m.unlocked}>{(0, c.Y4)(j)}</o.Text>}{<o.Text variant={"text-md/medium"} color={x}>{p()}</o.Text>}{<o.Text variant={"text-xs/normal"} color={_}>{b ? "?????" : g()}</o.Text>}</div>}</C>
}