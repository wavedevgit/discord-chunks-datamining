/** Chunk was on 12097 **/
/** chunk id: 727381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk777288 = require("./777288.js"),
  Chunk753042 = require("./753042.js"),
  Chunk787469 = require("./787469.js"),
  Chunk477718 = require("./477718.jsx"),
  Chunk791176 = require("./791176.js"),
  Chunk908474 = require("./908474.js"),
  Chunk467014 = require("./467014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk12740 = require("./12740.js");

function f() {
  return <div className={Chunk12740.header}>{<div className={Chunk12740.headerTitle}>{<Chunk777288.Z width={16} height={16} />}{<Chunk481060.X6q variant={"heading-md/semibold"}>{Chunk388032.intl.string(Chunk388032.t.cf5lgo)}</Chunk481060.X6q>}</div>}{<div><Chunk481060.M2$ shortcut={"esc"} keyClassName={Chunk12740.keyComboInner} className={Chunk12740.keyComboContainer} /></div>}</div>
}

function N(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: c,
    onNavigate: I
  } = e, N = (0, i.e7)([u.default], () => u.default.getUser(t), [t]), h = (0, i.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
  return null == N || null == h ? null : <div className={s()(g.container, c)}>{<f />}{<a.Ttm className={g.innerContainer}>{<T.Z member={h} />}{<m.Z userId={t} guildId={n} />}{<A.Z member={h} onNavigate={I} />}{<d.Z member={h} />}{<E.Z member={h} />}{<_.Z member={h} />}</a.Ttm>}</div>
}