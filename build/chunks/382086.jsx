/** Chunk was on 42483 **/
/** chunk id: 382086, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  v: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk626135 = require("./626135.js"),
  Chunk109983 = require("./109983.jsx"),
  Chunk675999 = require("./675999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk661711 = require("./661711.js");
let p = .5 > Math.random();

function u(t) {
  let {
    onClose: n,
    onBack: e,
    onCreationIntentChosen: u,
    hasFooter: _ = true
  } = t, L = <l.zx className={C.backButton} look={l.zx.Looks.BLANK} size={l.zx.Sizes.MIN} onClick={e}>{m.intl.string(m.t["13/7kZ"])}</l.zx>;

  function g(t) {
    r.default.track(o.rMx.GUILD_CREATION_INTENT_SELECTED, {
      skipped: null == t,
      is_community: t === c.lr.COMMUNITY
    }), u(t)
  }
  return {
    content: <i.Fragment>{<a.xBx direction={s.Z.Direction.VERTICAL} className={C.header} separator={false}>{<a.X6q className={C.title} variant={"heading-xl/semibold"}>{m.intl.string(m.t.f3MvGR)}</a.X6q>}{<a.Text className={C.subtitle} color={"header-secondary"} variant={"text-md/normal"}>{m.intl.string(m.t["nOzc7+"])}</a.Text>}{null != n && <a.olH className={C.closeButton} onClick={n} />}</a.xBx>}{<a.hzk className={C.optionsList}>{p ? <i.Fragment>{<d.Z icon={a.Nye} message={m.intl.string(m.t.uE7zcn)} onClick={() => g(c.lr.FRIENDS)} />}{<d.Z icon={a.q3d} message={m.intl.string(m.t.h9Q1lJ)} onClick={() => g(c.lr.COMMUNITY)} />}</i.Fragment> : <i.Fragment>{<d.Z icon={a.q3d} message={m.intl.string(m.t.h9Q1lJ)} onClick={() => g(c.lr.COMMUNITY)} />}{<d.Z icon={a.Nye} message={m.intl.string(m.t.uE7zcn)} onClick={() => g(c.lr.FRIENDS)} />}</i.Fragment>}{<a.Text className={C.skip} color={"header-secondary"} variant={"text-sm/normal"}>{m.intl.format(m.t["SMc+Gx"], {
            onSkip: () => g(null)
          })}</a.Text>}</a.hzk>}{_ && <a.mzw justify={s.Z.Justify.BETWEEN}>{L}</a.mzw>}</i.Fragment>,
    footer: L
  }
}

function _(t) {
  let {
    content: n
  } = u(t);
  return n
}