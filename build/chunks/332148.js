/** Chunk was on 36925 **/
/** chunk id: 332148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./784620.js"), require("./973216.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk346479 = require("./346479.js"),
  Chunk624453 = require("./624453.js"),
  Chunk668781 = require("./668781.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let u = {
    async pinMessage(e, t) {
      let {
        id: n,
        name: i
      } = e;
      await l.Z.unarchiveThreadIfNecessary(e.id), r.tn.put({
        url: s.ANM.PIN(n, t),
        oldFormErrors: true,
        rejectWithError: true
      }).catch(() => {
        let t;
        t = e.isPrivate() ? c.intl.formatToPlainString(c.t.Q89oQU, {
          maxPins: s.tG9
        }) : c.intl.formatToPlainString(c.t.NnO1S5, {
          maxPins: s.tG9,
          channelName: i
        }), a.Z.show({
          title: c.intl.string(c.t.HI88Q3),
          body: t,
          confirmText: c.intl.string(c.t.BddRzS)
        })
      })
    },
    async unpinMessage(e, t) {
      await l.Z.unarchiveThreadIfNecessary(e.id), r.tn.del({
        url: s.ANM.PIN(e.id, t),
        oldFormErrors: true,
        rejectWithError: true
      }).catch(() => a.Z.show({
        title: c.intl.string(c.t.xFjByk),
        body: c.intl.string(c.t["0R/Toc"]),
        confirmText: c.intl.string(c.t["7NqTJn"]),
        cancelText: c.intl.string(c.t["ETE/oC"]),
        onConfirm: u.unpinMessage.bind(u, e, t)
      }))
    },
    ackPins(e) {
      i.Z.dispatch({
        type: "CHANNEL_PINS_ACK",
        channelId: e
      })
    },
    fetchPins(e, t) {
      var n, l;
      let a = null != (n = null == t ? true : t.reset) && n,
        c = null != (l = null == t ? true : t.limit) ? l : 25,
        u = null == t ? true : t.before;
      (a || function(e, t) {
        let n = o.Z.getPins(e);
        if (null == n) returntrue;
        switch (n.state) {
          case o.M.FAILED:
            returntrue;
          case o.M.LOADING:
          case o.M.LOADED_FINISHED:
            returnfalse;
          case o.M.LOADED_HAS_MORE:
            if (null == t) return 0 === n.items.length;
            return n.items.at(false).pinnedAt === t
        }
      }(e, u)) && (i.Z.dispatch({
        type: "LOAD_PINNED_MESSAGES",
        channelId: e,
        reset: a
      }), r.tn.get({
        url: s.ANM.PINS(e),
        query: {
          limit: c,
          before: null == u ? true : u.toISOString()
        },
        retries: 2,
        oldFormErrors: true,
        rejectWithError: true
      }).then(t => {
        i.Z.dispatch({
          type: "LOAD_PINNED_MESSAGES_SUCCESS",
          pins: t.body.items,
          channelId: e,
          hasMore: t.body.has_more
        })
      }, () => {
        i.Z.dispatch({
          type: "LOAD_PINNED_MESSAGES_FAILURE",
          channelId: e
        })
      }))
    }
  },
  d = u