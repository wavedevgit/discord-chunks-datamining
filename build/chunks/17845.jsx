/** Chunk was on 88934 **/
/** chunk id: 17845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk688465 = require("./688465.js"),
  Chunk750567 = require("./750567.js");

function p(e) {
  let {
    title: t,
    betaTag: n
  } = e;
  return <o.X6q className={l()(u.title, u.uppercase)} variant={"display-lg"} color={"header-primary"}>{t}{n && <d.Z className={u.betaTag} />}</o.X6q>
}

function m(e) {
  let {
    title: t,
    description: n,
    button: i,
    className: d,
    children: m,
    betaTag: h = false
  } = e, g = (0, c.ZP)(), f = (0, s.wj)(g), _ = a.useMemo(() => Array.isArray(t) ? t.map((e, t) => <p title={e} betaTag={h} />) : <p title={t} betaTag={h} />, [t, h]);
  return <div className={l()(u.container, d)}>{<div className={u.content}><div className={u.textContainer}>{_}{null != n && <o.Text className={u.description} variant={"text-md/medium"} color={f ? "text-muted" : "header-primary"}>{n}</o.Text>}{null != i && <div className={u.buttonContainer}>{i}</div>}</div></div>}{m}</div>
}