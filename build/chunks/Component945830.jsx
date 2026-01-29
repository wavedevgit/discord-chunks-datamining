/** Chunk was on 1113 **/
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
let b = [];

function A(e) {
  let {
    channel: t,
    onJump: A
  } = e, {
    items: y,
    state: O
  } = (0, i.cf)([g.A], () => {
    var e, n;
    let r = g.A.getPins(t.id);
    return {
      items: null != (e = null == r ? true : r.items) ? e : b,
      state: null != (n = null == r ? true : r.state) ? n : g.e.LOADING
    }
  }), _ = l.useMemo(() => y.map(e => e.message), [y]), x = (0, i.bG)([f.Ay], () => f.Ay.hasUnreadPins(t.id));
  l.useEffect(() => {
    x && o.A.ackPins(t.id)
  }, [x, t.id]), (0, c.Ay)(() => {
    _.some(u.$r) && o.A.fetchPins(t.id, {
      reset: true
    })
  });
  let j = l.useCallback(() => {
      o.A.fetchPins(t.id)
    }, [t.id]),
    v = l.useCallback(() => {
      var e;
      o.A.fetchPins(t.id, {
        before: null == (e = y.at(false)) ? true : e.pinnedAt
      })
    }, [t.id, y]),
    E = (0, i.bG)([p.A], () => (0, s.qB)(p.A.theme));
  return (0, r.jsx)(a.lGe, {
    "aria-label": m.intl.string(m.t["mp1N/2"]),
    children: (0, r.jsx)(h.Ay, {
      channel: t,
      onFetch: j,
      messages: _,
      loading: O === g.e.LOADING,
      hasMore: O === g.e.LOADED_HAS_MORE,
      analyticsName: "Channel Pins",
      renderEmptyState: function() {
        if (y.length > 0) return;
        let e = m.intl.string(t.isPrivate() ? m.t.rhqcbJ : m.t.fmyaWJ),
          l = E ? n(395236) : n(90367);
        return (0, r.jsx)(h.u9, {
          msg: e,
          image: l
        }, "emptystate")
      },
      renderHeader: () => (0, r.jsx)(h.Y9, {
        icon: a.tsw,
        title: m.intl.string(m.t["mp1N/2"])
      }),
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? o.A.unpinMessage(t, e.id) : d.A.confirmUnpin(t, e))
      },
      onJump: A,
      loadMore: v,
      getProTip: function() {
        return t.isPrivate() ? m.intl.string(m.t["3dLGAs"]) : m.intl.string(m.t.KTbRcg)
      },
      listName: "pins",
      closeAriaLabel: m.intl.string(m.t["Bse+F/"])
    })
  })
}