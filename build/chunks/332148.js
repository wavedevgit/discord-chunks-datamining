/** Chunk was on 64722 **/
/** chunk id: 332148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./784620.js"), require("./973216.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk346479 = require("./346479.js"),
  Chunk624453 = require("./624453.js"),
  Chunk668781 = require("./668781.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let d = {
    async pinMessage(e, t) {
      let {
        id: n,
        name: i
      } = e;
      await o.Z.unarchiveThreadIfNecessary(e.id), r.tn.put({
        url: c.ANM.PIN(n, t),
        rejectWithError: true
      }).catch(t => {
        let n = new l.Hx(t),
          r = n.code,
          o = u.intl.string(u.t.j2d6Km),
          a = u.intl.string(u.t.fEptJP);
        if (null != r) switch (r) {
          case c.evJ.TOO_MANY_PINS_IN_CHANNEL:
            o = u.intl.string(u.t.HI88Q3), a = e.isPrivate() ? u.intl.formatToPlainString(u.t.Q89oQU, {
              maxPins: c.tG9
            }) : u.intl.formatToPlainString(u.t.NnO1S5, {
              maxPins: c.tG9,
              channelName: i
            });
            break;
          case c.evJ.INVALID_ACCESS:
            o = u.intl.string(u.t["25gfQX"]), a = u.intl.string(u.t.QNnTwN);
            break;
          case c.evJ.INVALID_PIN_MESSAGE_CHANNEL:
            o = u.intl.string(u.t["Q5G6+m"]), a = u.intl.string(u.t["5hgPfC"]);
            break;
          case c.evJ.INVALID_THREAD_ARCHIVE_STATE:
            o = u.intl.string(u.t.fu6Lbl), a = u.intl.string(u.t.FmrcZM);
            break;
          case c.evJ.INVALID_ACTION_SYSTEM_MESSAGE:
            o = u.intl.string(u.t["zV0/FC"]), a = u.intl.string(u.t.C4a7xI);
            break;
          case c.evJ.UNKNOWN_MESSAGE:
            o = u.intl.string(u.t.fkqPro), a = u.intl.string(u.t.H6fRIg);
            break;
          default:
            var d;
            o = u.intl.string(u.t.HI88Q3), a = null != (d = n.getAnyErrorMessage()) ? d : u.intl.string(u.t.fEptJP)
        }
        s.Z.show({
          title: o,
          body: a,
          confirmText: u.intl.string(u.t.BddRzS)
        })
      })
    },
    async unpinMessage(e, t) {
      await o.Z.unarchiveThreadIfNecessary(e.id), r.tn.del({
        url: c.ANM.PIN(e.id, t),
        oldFormErrors: true,
        rejectWithError: true
      }).catch(() => s.Z.show({
        title: u.intl.string(u.t.xFjByk),
        body: u.intl.string(u.t["0R/Toc"]),
        confirmText: u.intl.string(u.t["7NqTJn"]),
        cancelText: u.intl.string(u.t["ETE/oC"]),
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
      var n, l;
      let o = null != (n = null == t ? true : t.reset) && n,
        s = null != (l = null == t ? true : t.limit) ? l : 25,
        u = null == t ? true : t.before;
      (o || function(e, t) {
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
      }(e, u)) && (i.Z.dispatch({
        type: "LOAD_PINNED_MESSAGES",
        channelId: e,
        reset: o
      }), r.tn.get({
        url: c.ANM.PINS(e),
        query: {
          limit: s,
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
  f = d