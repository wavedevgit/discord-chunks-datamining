/** Chunk was on 53512 **/
/** chunk id: 931839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => d,
  Z: () => m
});
var i, Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk923918 = require("./923918.js"),
  d = ((i = {})[i.Intro = 0] = "Intro", i[i.Customize = 1] = "Customize", i[i.Tips = 2] = "Tips", i);

function m(e) {
  let {
    selectedTab: t,
    onClick: n,
    submitted: i
  } = e;
  return <div className={o.tabs}>{<x tab={0} selectedTab={t} label={c.intl.string(c.t.JwwVrq)} disabled={i} onClick={n} />}{<x tab={1} selectedTab={t} label={c.intl.string(c.t["56vYWV"])} disabled={i} onClick={n} />}{<x tab={2} selectedTab={t} label={c.intl.string(c.t["0l0rJi"])} disabled={!i} onClick={n} />}</div>
}

function x(e) {
  let {
    tab: t,
    selectedTab: n,
    label: i,
    disabled: r,
    onClick: c
  } = e;
  return r ? <div className={a()(o.tab, {
      [o.current]: n === t
    })}>{<div className={o.progressBar} />}{<l.Text variant={"text-xs/medium"} color={n === t ? "text-brand" : "text-muted"}>{i}</l.Text>}</div> : <l.P3F onClick={() => c(t)} className={a()(o.tab, {
      [o.current]: n === t
    })}>{<div className={o.progressBar} />}{<l.Text variant={"text-xs/medium"} color={n === t ? "text-brand" : "text-muted"}>{i}</l.Text>}</l.P3F>
}