/** Chunk was on web.js **/
/** chunk id: 332148, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./784620.js"), require("./973216.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk346479 = require("./346479.js"),
  Chunk624453 = require("./624453.js"),
  Chunk668781 = require("./668781.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function u(e, t) {
  let n = a.Z.getPins(e);
  if (null == n) returntrue;
  switch (n.state) {
    case a.M.FAILED:
      returntrue;
    case a.M.LOADING:
    case a.M.LOADED_FINISHED:
      returnfalse;
    case a.M.LOADED_HAS_MORE:
      if (null == t) return 0 === n.items.length;
      return n.items.at(false).pinnedAt === t
  }
}
let d = {
    async pinMessage(e, t) {
      let {
        id: n,
        name: i
      } = e;
      await o.Z.unarchiveThreadIfNecessary(e.id), r.tn.put({
        url: l.ANM.PIN(n, t),
        oldFormErrors: true,
        rejectWithError: true
      }).catch(() => {
        let t;
        t = e.isPrivate() ? c.intl.formatToPlainString(c.t.Q89oQU, {
          maxPins: l.tG9
        }) : c.intl.formatToPlainString(c.t.NnO1S0, {
          maxPins: l.tG9,
          channelName: i
        }), s.Z.show({
          title: c.intl.string(c.t.HI88Q0),
          body: t,
          confirmText: c.intl.string(c.t.BddRzc)
        })
      })
    },
    async unpinMessage(e, t) {
      await o.Z.unarchiveThreadIfNecessary(e.id), r.tn.del({
        url: l.ANM.PIN(e.id, t),
        oldFormErrors: true,
        rejectWithError: true
      }).catch(() => s.Z.show({
        title: c.intl.string(c.t.xFjBys),
        body: c.intl.string(c.t["0R/Toa"]),
        confirmText: c.intl.string(c.t["7NqTJi"]),
        cancelText: c.intl.string(c.t["ETE/oK"]),
        onConfirm: d.unpinMessage.bind(d, e, t)
      }))
    },
    ackPins(e) {
      i.Z.dispatch({
        type: "CHANNEL_PINS_ACK",
        channelId: e
      })
    },
    fetchPins(e, t) {
      var n, o;
      let a = null != (n = null == t ? true : t.reset) && n,
        s = null != (o = null == t ? true : t.limit) ? o : 25,
        c = null == t ? true : t.before;
      (a || u(e, c)) && (i.Z.dispatch({
        type: "LOAD_PINNED_MESSAGES",
        channelId: e,
        reset: a
      }), r.tn.get({
        url: l.ANM.PINS(e),
        query: {
          limit: s,
          before: null == c ? true : c.toISOString()
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
  f = d