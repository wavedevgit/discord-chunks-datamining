/** Chunk was on 67564 **/
/** chunk id: 687709, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./134528.js"), require("./947204.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk867455 = require("./867455.js"),
  Chunk966833 = require("./966833.js"),
  Chunk157559 = require("./157559.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = {
    async pinMessage(e, t) {
      let {
        id: n,
        name: l
      } = e;
      await s.A.unarchiveThreadIfNecessary(e.id), r.Bo.put({
        url: c.Rsh.PIN(n, t),
        rejectWithError: true
      }).catch(t => {
        let n = new i.LG(t),
          r = n.code,
          s = u.intl.string(u.t.j2d6Km),
          a = u.intl.string(u.t.fEptJP);
        if (null != r) switch (r) {
          case c.t02.TOO_MANY_PINS_IN_CHANNEL:
            s = u.intl.string(u.t.HI88Q3), a = e.isPrivate() ? u.intl.formatToPlainString(u.t.Q89oQU, {
              maxPins: c.KL3
            }) : u.intl.formatToPlainString(u.t.NnO1S5, {
              maxPins: c.KL3,
              channelName: l
            });
            break;
          case c.t02.INVALID_ACCESS:
            s = u.intl.string(u.t["25gfQX"]), a = u.intl.string(u.t.QNnTwN);
            break;
          case c.t02.INVALID_PIN_MESSAGE_CHANNEL:
            s = u.intl.string(u.t["Q5G6+m"]), a = u.intl.string(u.t["5hgPfC"]);
            break;
          case c.t02.INVALID_THREAD_ARCHIVE_STATE:
            s = u.intl.string(u.t.fu6Lbl), a = u.intl.string(u.t.FmrcZM);
            break;
          case c.t02.INVALID_ACTION_SYSTEM_MESSAGE:
            s = u.intl.string(u.t["zV0/FC"]), a = u.intl.string(u.t.C4a7xI);
            break;
          case c.t02.UNKNOWN_MESSAGE:
            s = u.intl.string(u.t.fkqPro), a = u.intl.string(u.t.H6fRIg);
            break;
          default:
            var d;
            s = u.intl.string(u.t.HI88Q3), a = null != (d = n.getAnyErrorMessage()) ? d : u.intl.string(u.t.fEptJP)
        }
        o.A.show({
          title: s,
          body: a,
          confirmText: u.intl.string(u.t.BddRzS)
        })
      })
    },
    async unpinMessage(e, t) {
      await s.A.unarchiveThreadIfNecessary(e.id), r.Bo.del({
        url: c.Rsh.PIN(e.id, t),
        oldFormErrors: true,
        rejectWithError: true
      }).catch(() => o.A.show({
        title: u.intl.string(u.t.xFjByk),
        body: u.intl.string(u.t["0R/Toc"]),
        confirmText: u.intl.string(u.t["7NqTJn"]),
        cancelText: u.intl.string(u.t["ETE/oC"]),
        onConfirm: d.unpinMessage.bind(d, e, t)
      }))
    },
    ackPins(e) {
      l.h.dispatch({
        type: "CHANNEL_PINS_ACK",
        channelId: e
      })
    },
    fetchPins(e, t) {
      var n, i;
      let s = null != (n = null == t ? true : t.reset) && n,
        o = null != (i = null == t ? true : t.limit) ? i : 25,
        u = null == t ? true : t.before;
      (s || function(e, t) {
        let n = a.A.getPins(e);
        if (null == n) returntrue;
        switch (n.state) {
          case a.e.FAILED:
            returntrue;
          case a.e.LOADING:
          case a.e.LOADED_FINISHED:
            returnfalse;
          case a.e.LOADED_HAS_MORE:
            if (null == t) return 0 === n.items.length;
            return n.items.at(false).pinnedAt === t
        }
      }(e, u)) && (l.h.dispatch({
        type: "LOAD_PINNED_MESSAGES",
        channelId: e,
        reset: s
      }), r.Bo.get({
        url: c.Rsh.PINS(e),
        query: {
          limit: o,
          before: null == u ? true : u.toISOString()
        },
        retries: 2,
        oldFormErrors: true,
        rejectWithError: true
      }).then(t => {
        l.h.dispatch({
          type: "LOAD_PINNED_MESSAGES_SUCCESS",
          pins: t.body.items,
          channelId: e,
          hasMore: t.body.has_more
        })
      }, () => {
        l.h.dispatch({
          type: "LOAD_PINNED_MESSAGES_FAILURE",
          channelId: e
        })
      }))
    }
  },
  p = d