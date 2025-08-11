/** Chunk was on 91315 **/
/** chunk id: 342449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk481060 = require("./481060.js"),
  Chunk235449 = require("./235449.js"),
  Chunk487894 = require("./487894.js"),
  Chunk300234 = require("./300234.jsx"),
  Chunk388032 = require("./388032.js"),
  Chunk258033 = require("./258033.js");
let g = new Set;

function m(e) {
  let {
    channel: t,
    startThread: n,
    goToThread: m
  } = e, {
    joinedThreadIds: j,
    unjoinedThreadIds: v
  } = (0, i.FO)(t), {
    threadIds: x,
    canLoadMore: p,
    loading: b,
    loadMore: Z
  } = (0, i.qQ)(t, s.z.LATEST_ACTIVITY, g, a.z.MATCH_SOME), y = l.useRef(null);
  (0, i.r7)();
  let O = l.useCallback(e => {
      let t = 0 === e.section ? j : 1 === e.section ? v : x;
      return <d.Z threadId={t[e.row]} goToThread={m} />
    }, [x, j, v, m]),
    w = l.useCallback(e => 0 === e.section ? <f text={u.intl.formatToPlainString(u.t["4E27f3"], {
        count: j.length
      })} /> : 1 === e.section ? <f text={u.intl.formatToPlainString(u.t.csPc4O, {
        count: v.length
      })} /> : <f text={u.intl.string(u.t["wUNQ+/"])} />, [j.length, v.length]),
    N = l.useCallback(e => 1 === e && j.length > 0 || 2 === e && (j.length > 0 || v.length > 0) ? 64 : 32, [j.length, v.length]),
    S = l.useCallback(() => {
      var e;
      let t = null == (e = y.current) ? true : e.getScrollerState();
      if (null == t) return;
      let n = t.scrollTop + t.offsetHeight;
      t.scrollHeight - n < 200 && Z()
    }, [Z]);
  if (0 === j.length && 0 === v.length && 0 === x.length)
    if (b) return <div className={h.list}><o.$jN className={h.spinner} /></div>;
    else return <div className={h.list}><c.Z channel={t} header={u.intl.string(u.t.HgTQ8v)} startThread={n} /></div>;
  return <o.aVo ref={y} className={h.list} fade={true} sections={[j.length, v.length, x.length]} sectionHeight={N} rowHeight={80} renderRow={O} renderSection={w} chunkSize={20} onScroll={p ? S : true} />
}

function f(e) {
  let {
    text: t
  } = e;
  return <o.Text color={"header-secondary"} variant={"text-xs/bold"} className={h.sectionHeader}>{t}</o.Text>
}