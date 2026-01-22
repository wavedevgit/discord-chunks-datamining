/** Chunk was on 34160 **/
/** chunk id: 572275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk392421 = require("./392421.js"),
  Chunk602137 = require("./602137.js"),
  Chunk397927 = require("./397927.js"),
  Chunk424798 = require("./424798.js"),
  Chunk351633 = require("./351633.jsx"),
  Chunk663535 = require("./663535.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk340399 = require("./340399.js");
let g = new Set;

function m(e) {
  let {
    channel: t,
    startThread: n,
    goToThread: m
  } = e, {
    joinedThreadIds: j,
    unjoinedThreadIds: x
  } = (0, i.jO)(t), {
    threadIds: v,
    canLoadMore: b,
    loading: A,
    loadMore: p
  } = (0, i.Fr)(t, s.T.LATEST_ACTIVITY, g, a.n.MATCH_SOME), y = l.useRef(null);
  (0, i.Kk)();
  let w = l.useCallback(e => {
      let t = 0 === e.section ? j : 1 === e.section ? x : v;
      return (0, r.jsx)(u.A, {
        threadId: t[e.row],
        goToThread: m
      }, "".concat(e.section, "-").concat(e.row))
    }, [v, j, x, m]),
    O = l.useCallback(e => 0 === e.section ? (0, r.jsx)(f, {
      text: d.intl.formatToPlainString(d.t["4E27fz"], {
        count: j.length
      })
    }, e.section) : 1 === e.section ? (0, r.jsx)(f, {
      text: d.intl.formatToPlainString(d.t.csPc4D, {
        count: x.length
      })
    }, e.section) : (0, r.jsx)(f, {
      text: d.intl.string(d.t["wUNQ+w"])
    }, e.section), [j.length, x.length]),
    S = l.useCallback(e => 1 === e && j.length > 0 || 2 === e && (j.length > 0 || x.length > 0) ? 64 : 32, [j.length, x.length]),
    T = l.useCallback(() => {
      var e;
      let t = null == (e = y.current) ? true : e.getScrollerState();
      if (null == t) return;
      let n = t.scrollTop + t.offsetHeight;
      t.scrollHeight - n < 200 && p()
    }, [p]);
  if (0 === j.length && 0 === x.length && 0 === v.length)
    if (A) return (0, r.jsx)("div", {
      className: h.p_,
      children: (0, r.jsx)(o.y$y, {
        className: h.u1
      })
    });
    else return (0, r.jsx)("div", {
      className: h.p_,
      children: (0, r.jsx)(c.A, {
        channel: t,
        header: d.intl.string(d.t.HgTQ8p),
        startThread: n
      })
    });
  return (0, r.jsx)(o.B8B, {
    ref: y,
    className: h.p_,
    fade: true,
    sections: [j.length, x.length, v.length],
    sectionHeight: S,
    rowHeight: 80,
    renderRow: w,
    renderSection: O,
    chunkSize: 20,
    onScroll: b ? T : true
  })
}

function f(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)(o.Text, {
    color: "text-default",
    variant: "text-xs/bold",
    className: h.bV,
    children: t
  })
}