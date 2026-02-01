/** Chunk was on 61344 **/
/** chunk id: 945830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let A = [];

function b(e) {
  let {
    channel: t,
    onJump: b
  } = e, {
    items: _,
    state: y
  } = (0, i.cf)([f.A], () => {
    var e, n;
    let l = f.A.getPins(t.id);
    return {
      items: null != (e = null == l ? true : l.items) ? e : A,
      state: null != (n = null == l ? true : l.state) ? n : f.e.LOADING
    }
  }), v = r.useMemo(() => _.map(e => e.message), [_]), E = (0, i.bG)([m.Ay], () => m.Ay.hasUnreadPins(t.id));
  r.useEffect(() => {
    E && o.A.ackPins(t.id)
  }, [E, t.id]), (0, c.Ay)(() => {
    v.some(u.$r) && o.A.fetchPins(t.id, {
      reset: true
    })
  });
  let O = r.useCallback(() => {
      o.A.fetchPins(t.id)
    }, [t.id]),
    C = r.useCallback(() => {
      var e;
      o.A.fetchPins(t.id, {
        before: null == (e = _.at(false)) ? true : e.pinnedAt
      })
    }, [t.id, _]),
    x = (0, i.bG)([p.A], () => (0, a.qB)(p.A.theme));
  return (0, l.jsx)(s.lGe, {
    "aria-label": g.intl.string(g.t["mp1N/2"]),
    children: (0, l.jsx)(h.Ay, {
      channel: t,
      onFetch: O,
      messages: v,
      loading: y === f.e.LOADING,
      hasMore: y === f.e.LOADED_HAS_MORE,
      analyticsName: "Channel Pins",
      renderEmptyState: function() {
        if (_.length > 0) return;
        let e = g.intl.string(t.isPrivate() ? g.t.rhqcbJ : g.t.fmyaWJ),
          r = x ? n(395236) : n(90367);
        return (0, l.jsx)(h.u9, {
          msg: e,
          image: r
        }, "emptystate")
      },
      renderHeader: () => (0, l.jsx)(h.Y9, {
        icon: s.tsw,
        title: g.intl.string(g.t["mp1N/2"])
      }),
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? o.A.unpinMessage(t, e.id) : d.A.confirmUnpin(t, e))
      },
      onJump: b,
      loadMore: C,
      getProTip: function() {
        return t.isPrivate() ? g.intl.string(g.t["3dLGAs"]) : g.intl.string(g.t.KTbRcg)
      },
      listName: "pins",
      closeAriaLabel: g.intl.string(g.t["Bse+F/"])
    })
  })
}