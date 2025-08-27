/** Chunk was on 68197 **/
/** chunk id: 23536, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    items: _,
    state: C
  } = (0, l.cj)([p.Z], () => {
    var e, n;
    let r = p.Z.getPins(t.id);
    return {
      items: null != (e = null == r ? true : r.items) ? e : b,
      state: null != (n = null == r ? true : r.state) ? n : p.M.LOADING
    }
  }), v = i.useMemo(() => _.map(e => e.message), [_]), x = (0, l.e7)([h.ZP], () => h.ZP.hasUnreadPins(t.id));
  i.useEffect(() => {
    x && s.Z.ackPins(t.id)
  }, [x, t.id]), (0, c.ZP)(() => {
    v.some(u.k5) && s.Z.fetchPins(t.id, {
      reset: true
    })
  });
  let O = i.useCallback(() => {
      s.Z.fetchPins(t.id)
    }, [t.id]),
    j = i.useCallback(() => {
      var e;
      s.Z.fetchPins(t.id, {
        before: null == (e = _.at(false)) ? true : e.pinnedAt
      })
    }, [t.id, _]),
    E = (0, l.e7)([d.Z], () => (0, a.ap)(d.Z.theme));
  return (0, r.jsx)(o.VqE, {
    "aria-label": g.intl.string(g.t["mp1N//"]),
    children: (0, r.jsx)(f.ZP, {
      channel: t,
      onFetch: O,
      messages: v,
      loading: C === p.M.LOADING,
      hasMore: C === p.M.LOADED_HAS_MORE,
      analyticsName: "Channel Pins",
      renderEmptyState: function() {
        if (_.length > 0) return;
        let e = g.intl.string(t.isPrivate() ? g.t.rhqcbG : g.t.fmyaWF),
          i = E ? n(306059) : n(281485);
        return (0, r.jsx)(f.nH, {
          msg: e,
          image: i
        }, "emptystate")
      },
      renderHeader: () => (0, r.jsx)(f.h4, {
        icon: o.qQX,
        title: g.intl.string(g.t["mp1N//"])
      }),
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? s.Z.unpinMessage(t, e.id) : m.Z.confirmUnpin(t, e))
      },
      onJump: y,
      loadMore: j,
      getProTip: function() {
        return t.isPrivate() ? g.intl.string(g.t["3dLGAg"]) : g.intl.string(g.t.KTbRcn)
      },
      listName: "pins"
    })
  })
}