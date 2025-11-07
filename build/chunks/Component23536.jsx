/** Chunk was on 14953 **/
/** chunk id: 23536, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function _(e) {
  let {
    channel: t,
    onJump: _
  } = e, {
    items: y,
    state: x
  } = (0, l.cj)([f.Z], () => {
    var e, n;
    let r = f.Z.getPins(t.id);
    return {
      items: null != (e = null == r ? true : r.items) ? e : b,
      state: null != (n = null == r ? true : r.state) ? n : f.M.LOADING
    }
  }), O = i.useMemo(() => y.map(e => e.message), [y]), v = (0, l.e7)([g.ZP], () => g.ZP.hasUnreadPins(t.id));
  i.useEffect(() => {
    v && o.Z.ackPins(t.id)
  }, [v, t.id]), (0, c.ZP)(() => {
    O.some(d.k5) && o.Z.fetchPins(t.id, {
      reset: true
    })
  });
  let j = i.useCallback(() => {
      o.Z.fetchPins(t.id)
    }, [t.id]),
    C = i.useCallback(() => {
      var e;
      o.Z.fetchPins(t.id, {
        before: null == (e = y.at(false)) ? true : e.pinnedAt
      })
    }, [t.id, y]),
    I = (0, l.e7)([h.Z], () => (0, a.ap)(h.Z.theme));
  return (0, r.jsx)(s.VqE, {
    "aria-label": m.intl.string(m.t["mp1N/2"]),
    children: (0, r.jsx)(p.ZP, {
      channel: t,
      onFetch: j,
      messages: O,
      loading: x === f.M.LOADING,
      hasMore: x === f.M.LOADED_HAS_MORE,
      analyticsName: "Channel Pins",
      renderEmptyState: function() {
        if (y.length > 0) return;
        let e = m.intl.string(t.isPrivate() ? m.t.rhqcbJ : m.t.fmyaWJ),
          i = I ? n(306059) : n(281485);
        return (0, r.jsx)(p.nH, {
          msg: e,
          image: i
        }, "emptystate")
      },
      renderHeader: () => (0, r.jsx)(p.h4, {
        icon: s.qQX,
        title: m.intl.string(m.t["mp1N/2"])
      }),
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : u.Z.confirmUnpin(t, e))
      },
      onJump: _,
      loadMore: C,
      getProTip: function() {
        return t.isPrivate() ? m.intl.string(m.t["3dLGAs"]) : m.intl.string(m.t.KTbRcg)
      },
      listName: "pins"
    })
  })
}