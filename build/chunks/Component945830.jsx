/** Chunk was on 97492 **/
/** chunk id: 945830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./134528.js"), require("./947204.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk687709 = require("./687709.js"),
  Chunk964486 = require("./964486.js"),
  Chunk202803 = require("./202803.js"),
  Chunk145530 = require("./145530.jsx"),
  Chunk835835 = require("./835835.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk966833 = require("./966833.js"),
  Chunk222823 = require("./222823.js"),
  Chunk985018 = require("./985018.jsx");
let m = [];

function A(e) {
  let {
    channel: t,
    onJump: A
  } = e, {
    items: y,
    state: O
  } = (0, i.cf)([h.A], () => {
    var e, n;
    let r = h.A.getPins(t.id);
    return {
      items: null != (e = null == r ? true : r.items) ? e : m,
      state: null != (n = null == r ? true : r.state) ? n : h.e.LOADING
    }
  }), j = l.useMemo(() => y.map(e => e.message), [y]), v = (0, i.bG)([b.Ay], () => b.Ay.hasUnreadPins(t.id));
  l.useEffect(() => {
    v && o.A.ackPins(t.id)
  }, [v, t.id]), (0, c.Ay)(() => {
    j.some(u.$r) && o.A.fetchPins(t.id, {
      reset: true
    })
  });
  let x = l.useCallback(() => {
      o.A.fetchPins(t.id)
    }, [t.id]),
    E = l.useCallback(() => {
      var e;
      o.A.fetchPins(t.id, {
        before: null == (e = y.at(false)) ? true : e.pinnedAt
      })
    }, [t.id, y]),
    _ = (0, i.bG)([p.A], () => (0, a.qB)(p.A.theme));
  return (0, r.jsx)(s.lGe, {
    "aria-label": g.intl.string(g.t["mp1N/2"]),
    children: (0, r.jsx)(f.Ay, {
      channel: t,
      onFetch: x,
      messages: j,
      loading: O === h.e.LOADING,
      hasMore: O === h.e.LOADED_HAS_MORE,
      analyticsName: "Channel Pins",
      renderEmptyState: function() {
        if (y.length > 0) return;
        let e = g.intl.string(t.isPrivate() ? g.t.rhqcbJ : g.t.fmyaWJ),
          l = _ ? n(395236) : n(90367);
        return (0, r.jsx)(f.u9, {
          msg: e,
          image: l
        }, "emptystate")
      },
      renderHeader: () => (0, r.jsx)(f.Y9, {
        icon: s.tsw,
        title: g.intl.string(g.t["mp1N/2"])
      }),
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? o.A.unpinMessage(t, e.id) : d.A.confirmUnpin(t, e))
      },
      onJump: A,
      loadMore: E,
      getProTip: function() {
        return t.isPrivate() ? g.intl.string(g.t["3dLGAs"]) : g.intl.string(g.t.KTbRcg)
      },
      listName: "pins",
      closeAriaLabel: g.intl.string(g.t["Bse+F/"])
    })
  })
}