/** Chunk was on 81985 **/
/** chunk id: 23536, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk332148 = require("./332148.js"),
  Chunk493773 = require("./493773.js"),
  Chunk198620 = require("./198620.js"),
  Chunk819514 = require("./819514.jsx"),
  Chunk598999 = require("./598999.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk624453 = require("./624453.js"),
  Chunk306680 = require("./306680.js"),
  Chunk388032 = require("./388032.jsx");
let b = [];

function y(e) {
  let {
    channel: t,
    onJump: y
  } = e, {
    items: v,
    state: O
  } = (0, l.cj)([h.Z], () => {
    var e, n;
    let r = h.Z.getPins(t.id);
    return {
      items: null != (e = null == r ? true : r.items) ? e : b,
      state: null != (n = null == r ? true : r.state) ? n : h.M.LOADING
    }
  }), j = i.useMemo(() => v.map(e => e.message), [v]), x = (0, l.e7)([g.ZP], () => g.ZP.hasUnreadPins(t.id));
  i.useEffect(() => {
    x && s.Z.ackPins(t.id)
  }, [x, t.id]), (0, c.ZP)(() => {
    j.some(u.k5) && s.Z.fetchPins(t.id, {
      reset: true
    })
  });
  let C = i.useCallback(() => {
      s.Z.fetchPins(t.id)
    }, [t.id]),
    E = i.useCallback(() => {
      var e;
      s.Z.fetchPins(t.id, {
        before: null == (e = v.at(false)) ? true : e.pinnedAt
      })
    }, [t.id, v]),
    S = (0, l.e7)([f.Z], () => (0, a.ap)(f.Z.theme));
  return (0, r.jsx)(o.VqE, {
    "aria-label": m.intl.string(m.t["mp1N/2"]),
    children: (0, r.jsx)(p.ZP, {
      channel: t,
      onFetch: C,
      messages: j,
      loading: O === h.M.LOADING,
      hasMore: O === h.M.LOADED_HAS_MORE,
      analyticsName: "Channel Pins",
      renderEmptyState: function() {
        if (v.length > 0) return;
        let e = m.intl.string(t.isPrivate() ? m.t.rhqcbJ : m.t.fmyaWJ),
          i = S ? n(306059) : n(281485);
        return (0, r.jsx)(p.nH, {
          msg: e,
          image: i
        }, "emptystate")
      },
      renderHeader: () => (0, r.jsx)(p.h4, {
        icon: o.qQX,
        title: m.intl.string(m.t["mp1N/2"])
      }),
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? s.Z.unpinMessage(t, e.id) : d.Z.confirmUnpin(t, e))
      },
      onJump: y,
      loadMore: E,
      getProTip: function() {
        return t.isPrivate() ? m.intl.string(m.t["3dLGAs"]) : m.intl.string(m.t.KTbRcg)
      },
      listName: "pins",
      closeAriaLabel: m.intl.string(m.t["Bse+F/"])
    })
  })
}