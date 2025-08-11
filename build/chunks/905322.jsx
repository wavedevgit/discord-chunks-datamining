/** Chunk was on 77803 **/
/** chunk id: 905322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk777207 = require("./777207.jsx"),
  Chunk210523 = require("./210523.js");

function s(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: s,
    backgroundSrc: a,
    animatedBackgroundSrc: u,
    prefersReducedMotion: c = true
  } = e, d = i.useMemo(() => {
    let e = null != a ? a : s;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [a, s]), p = i.useMemo(() => {
    if (null == a) return;
    let e = {
      "--custom-background-static": "url(".concat(a.toString())
    };
    return c || null == u || (e["--custom-background-animated"] = "url(".concat(u.toString(), ")")), e
  }, [u, a, c]);
  return <div className={o.wrapper}>{<div className={o.background} style={d} />}{<div className={o.content}>{null != s && <div className={o.icon}><img src={s.toString()} alt={""} /></div>}{<div>{<l.x variant={"heading-xl/bold"} tag={"div"}>{t}</l.x>}{null != n && <l.x variant={"text-sm/normal"}>{"“"}{n}{"”"}</l.x>}</div>}</div>}{null != a ? <div className={o.image} style={p} /> : null}</div>
}