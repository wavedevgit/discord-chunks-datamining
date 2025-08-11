/** Chunk was on 49152 **/
/** chunk id: 470134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk923726 = require("./923726.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542503 = require("./542503.js");

function d(e) {
  let {
    text: t,
    hasScrolled: n
  } = e;
  return <div className={a()(u.container, {
      [u.containerHide]: n
    })}>{<div className={u.notice}><s.Text className={u.__invalid_label} variant={"text-md/medium"} color={"header-primary"}>{t}</s.Text></div>}{<div className={u.noticeArrow} />}</div>
}

function h(e) {
  let [t, n] = i.useState(), [l, a] = i.useState(), [s, u] = i.useState(false), [h, p] = i.useState(false), {
    enabled: f
  } = (0, o.s1)(e);
  return i.useEffect(() => {
    f && null != t && null != l ? u(t < l) : u(false)
  }, [f, t, l]), {
    horizontalScrollNotice: i.useMemo(() => s ? <d text={c.intl.string(c.t.RfAAHx)} hasScrolled={h} /> : null, [s, h]),
    handleScroll: () => p(true),
    handleSetScrollerRef: e => {
      var t;
      return a(null == e || null == (t = e.getScrollerState()) ? true : t.scrollWidth)
    },
    handleSetContainerRef: e => n(null == e ? true : e.clientWidth)
  }
}