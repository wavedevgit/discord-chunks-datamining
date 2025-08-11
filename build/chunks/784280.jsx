/** Chunk was on 53900 **/
/** chunk id: 784280, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk781792 = require("./781792.js"),
  Chunk430824 = require("./430824.js"),
  Chunk645792 = require("./645792.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk539813 = require("./539813.js");

function _(e) {
  let {
    guildId: t
  } = e, a = (0, o.e7)([f.Z], () => f.Z.getGuild(t)), [_, p] = r.useState(null), [C, v] = r.useState(""), {
    createMultipleConfettiAt: H
  } = r.useContext(c.h), N = (0, o.e7)([d.Z], () => d.Z.useReducedMotion, []), k = async t => {
    let {
      onClose: a,
      guildId: n
    } = e;
    t.preventDefault(), p(null);
    try {
      await (0, u.e)(n, {
        nick: C
      }), null == a || a()
    } catch (e) {
      p(new s.Hx(e))
    }
  }, {
    transitionState: j
  } = e, S = f.Z.getGuildsArray().filter(e => e.id !== t && e.features.has(h.oNc.HUB)).length > 0, w = !N && !S && (null == a ? true : a.features.has(h.oNc.HUB)) && (0, b.b)();
  return r.useEffect(() => {
    w && H(window.innerWidth / 2, window.innerHeight / 2)
  }, [H, w]), <l.Y0X className={g.__invalid_modalRoot} transitionState={j} aria-label={x.intl.formatToPlainString(x.t["d+6kzs"], {
      guildName: null == a ? true : a.name
    })} parentComponent={"HubRealNameModal"}>{<l.xBx separator={false} className={g.formHeaderContainer} direction={m.Z.Direction.VERTICAL}>{<div className={g.formImage} />}{<l.X6q variant={"heading-xl/semibold"} className={g.formHeader}>{x.intl.format(x.t["d+6kzs"], {
          guildName: null == a ? true : a.name
        })}</l.X6q>}{<l.Text color={"header-secondary"} variant={"text-sm/normal"} className={g.formSubHeader}>{x.intl.string(x.t.b3L8y8)}</l.Text>}</l.xBx>}{<form className={g.formContent} onSubmit={k}>{<l.hzk><l.xJW title={x.intl.string(x.t.ilDlmZ)}><l.oil placeholder={x.intl.string(x.t.RfWvWF)} onChange={e => {
              v(e)
            }} error={null == _ ? true : _.getFirstFieldErrorMessage("name")} value={C} /></l.xJW></l.hzk>}{<l.mzw className={g.formFooter} direction={m.Z.Direction.VERTICAL}><i.zx type={"submit"} size={i.zx.Sizes.LARGE} color={i.zx.Colors.BRAND}>{x.intl.string(x.t.Np4yXV)}</i.zx></l.mzw>}</form>}</l.Y0X>
}