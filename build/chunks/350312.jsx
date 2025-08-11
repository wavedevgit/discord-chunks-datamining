/** Chunk was on 32249 **/
/** chunk id: 350312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk754700 = require("./754700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk720293 = require("./720293.js"),
  Chunk602667 = require("./602667.js"),
  Chunk604142 = require("./604142.js");

function p(e) {
  let {
    asset: t
  } = e;
  return null == t ? null : <img src={t.url} alt={""} className={m.endScreenImageBackground} />
}

function f(e) {
  let {
    quest: t,
    asset: n,
    sourceQuestContent: l
  } = e;
  return null == n ? null : <d.A questOrQuests={t} questContent={c.jn.VIDEO_MODAL_END_CARD} sourceQuestContent={l}>{e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: n.url,
      alt: "Video thumbnail",
      className: m.endScreenCard
    })}</d.A>
}

function v(e) {
  let {
    ctaBtnLabel: t,
    title: n,
    subtitle: l,
    onCTAClick: o
  } = e;
  return <div className={m.endScreenCtaContainer}>{<E title={n} subtitle={l} />}{<g label={t} icon={s.d4D} onClick={o} />}</div>
}

function E(e) {
  let {
    title: t,
    subtitle: n
  } = e;
  return <div className={m.endScreenCtaTitleContainer}>{<s.X6q variant={"heading-md/semibold"} className={m.endScreenCtaTitle}>{t}</s.X6q>}{<s.X6q variant={"heading-sm/normal"} className={m.endScreenCtaSubtitle}>{n}</s.X6q>}</div>
}

function g(e) {
  let {
    label: t,
    icon: n,
    onClick: o,
    className: a
  } = e, [c, u] = l.useState(false), d = () => {
    u(true)
  }, p = () => {
    u(false)
  };
  return <s.P3F className={i()(m.endScreenCtaBtn, m.accentOnHover, a)} onMouseEnter={d} onMouseLeave={p} onFocus={d} onBlur={p} onClick={o}>{<s.X6q variant={"heading-md/semibold"} className={m.endScreenCtaBtnTitle}>{t}</s.X6q>}{<n size={"md"} color={c ? s.TVs.colors.WHITE : "#B5BAC1"} className={m.endScreenIcon} />}</s.P3F>
}
let O = function(e) {
  let {
    quest: t,
    ctaBtnLabel: n,
    title: o,
    subtitle: i,
    onCTAClick: s,
    sourceQuestContent: c
  } = e, d = l.useMemo(() => (0, u.z0)(t, a.X.WATCH_VIDEO, u.n1.VIDEO, u.O.THUMBNAIL), [t]);
  return <r.Fragment>{<p asset={d} />}{<div className={m.endScreenOverlay} />}{<div className={m.endScreenContainer}>{<f quest={t} asset={d} sourceQuestContent={c} />}{<v title={o} subtitle={i} ctaBtnLabel={n} onCTAClick={s} />}</div>}</r.Fragment>
}