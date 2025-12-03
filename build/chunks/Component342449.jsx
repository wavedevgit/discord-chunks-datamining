/** Chunk was on 91315 **/
/** chunk id: 342449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk481060 = require("./481060.js"),
  Chunk235449 = require("./235449.js"),
  Chunk487894 = require("./487894.jsx"),
  Chunk300234 = require("./300234.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk836227 = require("./836227.js");
let g = new Set;

function f(e) {
  let {
    channel: t,
    startThread: n,
    goToThread: f
  } = e, {
    joinedThreadIds: j,
    unjoinedThreadIds: v
  } = (0, i.FO)(t), {
    threadIds: x,
    canLoadMore: p,
    loading: b,
    loadMore: Z
  } = (0, i.qQ)(t, s.z.LATEST_ACTIVITY, g, a.z.MATCH_SOME), w = l.useRef(null);
  (0, i.r7)();
  let O = l.useCallback(e => {
      let t = 0 === e.section ? j : 1 === e.section ? v : x;
      return (0, r.jsx)(u.Z, {
        threadId: t[e.row],
        goToThread: f
      }, "".concat(e.section, "-").concat(e.row))
    }, [x, j, v, f]),
    y = l.useCallback(e => 0 === e.section ? (0, r.jsx)(m, {
      text: d.intl.formatToPlainString(d.t["4E27fz"], {
        count: j.length
      })
    }, e.section) : 1 === e.section ? (0, r.jsx)(m, {
      text: d.intl.formatToPlainString(d.t.csPc4D, {
        count: v.length
      })
    }, e.section) : (0, r.jsx)(m, {
      text: d.intl.string(d.t["wUNQ+w"])
    }, e.section), [j.length, v.length]),
    S = l.useCallback(e => 1 === e && j.length > 0 || 2 === e && (j.length > 0 || v.length > 0) ? 64 : 32, [j.length, v.length]),
    N = l.useCallback(() => {
      var e;
      let t = null == (e = w.current) ? true : e.getScrollerState();
      if (null == t) return;
      let n = t.scrollTop + t.offsetHeight;
      t.scrollHeight - n < 200 && Z()
    }, [Z]);
  if (0 === j.length && 0 === v.length && 0 === x.length)
    if (b) return (0, r.jsx)("div", {
      className: h.list,
      children: (0, r.jsx)(o.$jN, {
        className: h.spinner
      })
    });
    else return (0, r.jsx)("div", {
      className: h.list,
      children: (0, r.jsx)(c.Z, {
        channel: t,
        header: d.intl.string(d.t.HgTQ8p),
        startThread: n
      })
    });
  return (0, r.jsx)(o.aVo, {
    ref: w,
    className: h.list,
    fade: true,
    sections: [j.length, v.length, x.length],
    sectionHeight: S,
    rowHeight: 80,
    renderRow: O,
    renderSection: y,
    chunkSize: 20,
    onScroll: p ? N : true
  })
}

function m(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)(o.Text, {
    color: "text-default",
    variant: "text-xs/bold",
    className: h.sectionHeader,
    children: t
  })
}