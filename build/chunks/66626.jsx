/** Chunk was on 79764 **/
/** chunk id: 66626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk600164 = require("./600164.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.js"),
  Chunk685554 = require("./685554.js");

function m(e) {
  let {
    directoryChannelId: t,
    description: n,
    onDescriptionChange: m,
    categoryId: x,
    onCategoryIdChange: C,
    onSubmit: h,
    onClose: p,
    onBack: g
  } = e, [f, j] = s.useState(false), [_, b] = s.useState(null), L = async () => {
    j(true);
    try {
      await h()
    } catch (e) {
      b(new r.Z(e))
    }
    j(false)
  };
  return <i.Fragment>{<a.xBx direction={o.Z.Direction.VERTICAL} className={u.header} separator={false}>{<a.X6q className={u.title} variant={"heading-xl/semibold"}>{d.intl.string(d.t["5bQcoa"])}</a.X6q>}{<a.Text className={u.subtitle} color={"header-secondary"} variant={"text-md/normal"}>{d.intl.string(d.t.Ie60WV)}</a.Text>}{null != p && <a.olH className={u.closeButton} onClick={p} />}</a.xBx>}{<a.hzk className={u.createGuild} paddingFix={false}>{<a.xJW title={d.intl.string(d.t.FFFAGh)}><a.Kx8 value={n} maxLength={200} placeholder={d.intl.string(d.t.VzuITE)} onChange={m} error={null == _ ? true : _.getAnyErrorMessage()} /></a.xJW>}{<a.xJW className={u.formItemSpaced} title={d.intl.string(d.t.Olo8FB)}><a.q4e placeholder={d.intl.string(d.t.XqMe3N)} options={(0, c.b7)(t)} clearable={false} value={x} onChange={C} maxVisibleItems={4} /></a.xJW>}</a.hzk>}{<a.mzw justify={o.Z.Justify.BETWEEN}>{<a.zxk variant={"primary"} text={d.intl.string(d.t.H9jxS0)} onClick={L} loading={f} disabled={"" === n || x === c.AR.UNCATEGORIZED} />}{<l.zx className={u.backButton} look={l.zx.Looks.BLANK} size={l.zx.Sizes.MIN} onClick={g}>{d.intl.string(d.t["13/7kZ"])}</l.zx>}</a.mzw>}</i.Fragment>
}