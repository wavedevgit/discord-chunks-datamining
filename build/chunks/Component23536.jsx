/** Chunk was on 21087 **/
/** chunk id: 23536, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./784620.js"), require("./973216.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk332148 = require("./332148.js"),
  Chunk493773 = require("./493773.js"),
  Chunk198620 = require("./198620.js"),
  Chunk210887 = require("./210887.js"),
  Chunk624453 = require("./624453.js"),
  Chunk306680 = require("./306680.js"),
  Chunk494404 = require("./494404.jsx"),
  Chunk257559 = require("./257559.jsx"),
  Chunk388032 = require("./388032.jsx");
let b = [];

function y(e) {
  let {
    channel: t,
    onJump: y
  } = e, {
    items: x,
    state: _
  } = (0, l.cj)([h.Z], () => {
    var e, n;
    let r = h.Z.getPins(t.id);
    return {
      items: null != (e = null == r ? true : r.items) ? e : b,
      state: null != (n = null == r ? true : r.state) ? n : h.M.LOADING
    }
  }), j = i.useMemo(() => x.map(e => e.message), [x]), O = (0, l.e7)([p.ZP], () => p.ZP.hasUnreadPins(t.id));
  i.useEffect(() => {
    O && o.Z.ackPins(t.id)
  }, [O, t.id]), (0, c.ZP)(() => {
    j.some(u.k5) && o.Z.fetchPins(t.id, {
      reset: true
    })
  });
  let v = i.useCallback(() => {
      o.Z.fetchPins(t.id)
    }, [t.id]),
    C = i.useCallback(() => {
      var e;
      o.Z.fetchPins(t.id, {
        before: null == (e = x.at(false)) ? true : e.pinnedAt
      })
    }, [t.id, x]),
    E = (0, l.e7)([d.Z], () => (0, a.ap)(d.Z.theme));
  return (0, r.jsx)(s.VqE, {
    "aria-label": m.intl.string(m.t["mp1N//"]),
    children: (0, r.jsx)(f.ZP, {
      channel: t,
      onFetch: v,
      messages: j,
      loading: _ === h.M.LOADING,
      hasMore: _ === h.M.LOADED_HAS_MORE,
      analyticsName: "Channel Pins",
      renderEmptyState: function() {
        if (x.length > 0) return;
        let e = m.intl.string(t.isPrivate() ? m.t.rhqcbG : m.t.fmyaWF),
          i = E ? n(306059) : n(281485);
        return (0, r.jsx)(f.nH, {
          msg: e,
          image: i
        }, "emptystate")
      },
      renderHeader: () => (0, r.jsx)(f.h4, {
        icon: s.qQX,
        title: m.intl.string(m.t["mp1N//"])
      }),
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : g.Z.confirmUnpin(t, e))
      },
      onJump: y,
      loadMore: C,
      getProTip: function() {
        return t.isPrivate() ? m.intl.string(m.t["3dLGAg"]) : m.intl.string(m.t.KTbRcn)
      },
      listName: "pins"
    })
  })
}