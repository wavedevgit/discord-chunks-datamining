/** Chunk was on 27978 **/
/** chunk id: 587444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  u: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk600164 = require("./600164.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk359487 = require("./359487.js"),
  Chunk893354 = require("./893354.js"),
  Chunk20493 = require("./20493.js");

function m(e) {
  let {
    text: t,
    buttonCta: i,
    onClick: u
  } = e;
  return <r.Fragment>{<a.Ee src={n(689411)} />}{<a.Dx className={l()(f.marginTop20, f.marginBottom8, p.flexCenter)}>{d.intl.string(d.t.eL5z0t)}</a.Dx>}{<a.DK className={f.marginBottom40}>{d.intl.string(d.t["poAv6+"])}</a.DK>}{<s.Zbd className={h.card} type={s.Zbd.Types.CUSTOM}>{<img alt={""} className={h.cardAccentLeft} src={n(70519)} />}{<img alt={""} className={h.cardAccentRight} src={n(806848)} />}{<c.Z className={h.cardContents} direction={c.Z.Direction.VERTICAL} align={c.Z.Align.STRETCH} grow={0}>{<s.Text tag={"strong"} className={h.buttonTitle} variant={"text-md/normal"} style={{
            color: o.Z.unsafe_rawColors.PRIMARY_300.css
          }}>{t}</s.Text>}{<a.zx className={h.button} onClick={u}>{i}</a.zx>}</c.Z>}</s.Zbd>}</r.Fragment>
}

function g(e) {
  let {
    text: t,
    buttonCta: n,
    theme: i = u.BRd.DARK,
    onClick: l
  } = e;
  return <a.ZP theme={i}><m text={t} buttonCta={n} onClick={l} /></a.ZP>
}