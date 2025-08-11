/** Chunk was on web.js **/
/** chunk id: 463194, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk727637 = require("./727637.js"),
  Chunk607070 = require("./607070.js"),
  Chunk176354 = require("./176354.js"),
  Chunk794206 = require("./794206.js");

function p(e) {
  let {
    emoji: t,
    shouldAnimate: n
  } = e;
  if (null == t) return null;
  let i = f.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
  return <c.Z className={_.traitEmoji} emojiId={t.id} emojiName={i} animated={t.animated} shouldAnimate={n} />
}

function h(e) {
  let {
    trait: t,
    ellipsize: n
  } = e, o = i.useRef(null), c = (0, u.Z)(o), f = !(0, s.e7)([d.Z], () => d.Z.useReducedMotion) && c;
  return null == t.label || t.label.length <= 0 ? null : <div ref={o} className={a()(_.trait, {
      [_.ellipsize]: n
    })}>{<p emoji={t.emoji} shouldAnimate={f} />}{<l.Text tag={"span"} className={n ? _.ellipsize : true} variant={"text-sm/normal"} color={"text-default"}>{t.label}</l.Text>}</div>
}

function m(e) {
  let {
    items: t
  } = e, n = i.useCallback((e, t) => "string" == typeof e ? <div className={a()(_.trait, {
      [_.ellipsize]: t.ellipsize
    })}><l.Text tag={"span"} variant={"text-sm/normal"} color={"text-default"}>{e}</l.Text></div> : <h trait={e} ellipsize={t.ellipsize} />, []), o = i.useCallback(e => n(e, {
    ellipsize: true
  }), [n]), s = i.useCallback(e => n(e, {
    ellipsize: false
  }), [n]), c = i.useCallback(e => <l.te1 items={e} renderItem={s} />, [s]);
  return 0 === t.length ? null : <l.Epb className={_.container} items={t} renderItem={o} renderOverflow={c} maxLines={2} itemGapPx={4} />
}