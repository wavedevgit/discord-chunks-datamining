/** Chunk was on 34779 **/
/** chunk id: 223730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => O,
  y: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk695346 = require("./695346.js"),
  Chunk771845 = require("./771845.js"),
  Chunk88658 = require("./88658.js"),
  Chunk782896 = require("./782896.js"),
  Chunk981631 = require("./981631.js"),
  Chunk29953 = require("./29953.js"),
  Chunk388032 = require("./388032.js"),
  Chunk420473 = require("./420473.js");
let g = () => {
  Chunk230711.Z.open(Chunk981631.oAB.ACTIVITY_PRIVACY)
};

function m(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return <l.P3F className={f.chevronButton} onClick={n}>{<div className={f.chevronButtonContent}>{t}</div>}{<l.Fbu color={l.TVs.colors.TEXT_SECONDARY} size={"xs"} />}</l.P3F>
}

function b(e) {
  let {
    onClosePopout: t
  } = e, n = s.G6.useSetting(), o = (0, i.e7)([a.ZP], () => a.ZP.getFlattenedGuildIds()), d = (0, c._o)(), f = o.filter(e => !d.has(e));
  return 0 === o.length ? null : <m onClick={() => {
      t(), g()
    }}>{<l.Text variant={"text-sm/semibold"}>{p.intl.string(n ? h.default["3GrhnJ"] : h.default["54ycKC"])}</l.Text>}{<u.c guildIds={f} />}</m>
}

function O(e) {
  let {
    onClosePopout: t
  } = e;
  return <l.P3F className={f.customizeLink} onClick={() => {
      t(), g()
    }}><l.Text variant={"text-xs/medium"} color={"text-link"}>{p.intl.string(p.t["ZrN+DQ"])}</l.Text></l.P3F>
}