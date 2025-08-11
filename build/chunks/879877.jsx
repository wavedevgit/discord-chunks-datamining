/** Chunk was on 11776 **/
/** chunk id: 879877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk300695 = require("./300695.js");

function u(e) {
  let {
    tags: t
  } = e, n = null == t ? true : t.filter(e => null != (0, c.z)(e)), i = (0, l.useRef)(new Map), o = (0, l.useRef)(null), [s, u] = (0, l.useState)(0), [b, j] = (0, l.useState)(false), {
    trackUserProfileAction: h
  } = (0, a.KZ)(), x = g(o, n, i, u);
  if ((0, l.useEffect)(() => (x(), window.addEventListener("resize", x), () => {
      window.removeEventListener("resize", x)
    }), [x, null == n ? true : n.join("")]), null == n || 0 === n.length) return null;
  let y = b ? n : n.slice(0, n.length - s);
  return <div className={d.tagListContainer}>{y.map(e => <f tag={e} ref={t => {
        null != t && i.current.set(e, t)
      }} />)}{s > 0 && (b ? <p onClick={() => {
        j(false), h({
          action: "COLLAPSE_GAME_TAGS"
        })
      }} /> : <m numHidden={s} onClick={() => {
        j(true), h({
          action: "EXPAND_GAME_TAGS"
        })
      }} ref={o} />)}</div>
}
let f = e => {
    let {
      tag: t,
      ref: n
    } = e, l = (0, c.z)(t);
    if (null == l) return null;
    let {
      getText: o,
      icon: a
    } = l;
    return <div className={d.tag} ref={n}>{<a size={"xxs"} />}{<i.Text variant={"text-xxs/medium"} color={"text-secondary"}>{o()}</i.Text>}</div>
  },
  m = e => {
    let {
      numHidden: t,
      onClick: n,
      ref: l
    } = e;
    return <i.DY3 className={d.buttonContainer} text={s.intl.string(s.t.mriLXF)}><i.P3F onClick={n} className={d.expandButton} innerRef={l} aria-label={s.intl.string(s.t.mriLXF)}><i.Text variant={"text-xxs/medium"} color={"text-secondary"}>{"+".concat(t)}</i.Text></i.P3F></i.DY3>
  },
  p = e => {
    let {
      onClick: t
    } = e;
    return <i.DY3 className={d.buttonContainer} text={s.intl.string(s.t.z9VPra)}><i.P3F onClick={t} className={d.collapseButton} aria-label={s.intl.string(s.t.z9VPra)}><o.Z direction={o.Z.Directions.LEFT} width={12} height={12} className={d.caret} /></i.P3F></i.DY3>
  },
  g = (e, t, n, r) => (0, l.useCallback)(() => {
    var l, i;
    if (null == t) return void r(0);
    let o = null != (i = null == (l = e.current) ? true : l.getBoundingClientRect().width) ? i : 0,
      a = 0,
      c = 0,
      s = n.current;
    for (let e = 0; e < t.length; e++) {
      let n = s.get(t[e]);
      if (null != n) {
        if ((c += n.offsetWidth + 4) > 296) break;
        a++
      }
    }
    c = 0;
    for (let e = a; e < t.length; e++) {
      let n = s.get(t[e]);
      if (null != n) {
        if ((c += n.offsetWidth + 4) > 296 - o) break;
        a++
      }
    }
    r(t.length - a)
  }, [e, null == t ? true : t.join(""), n, r])