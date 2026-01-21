/** Chunk was on 82124 **/
/** chunk id: 332148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
      await a.Z.unarchiveThreadIfNecessary(e.id), r.tn.put({
        url: c.ANM.PIN(n, t),
        rejectWithError: true
      }).catch(t => {
        let n = new l.Hx(t),
          r = n.code,
          a = u.intl.string(u.t.j2d6Km),
          o = u.intl.string(u.t.fEptJP);
        if (null != r) switch (r) {
          case c.evJ.TOO_MANY_PINS_IN_CHANNEL:
            a = u.intl.string(u.t.HI88Q3), o = e.isPrivate() ? u.intl.formatToPlainString(u.t.Q89oQU, {
              maxPins: c.tG9
            }) : u.intl.formatToPlainString(u.t.NnO1S5, {
              maxPins: c.tG9,
              channelName: i
            });
            break;
          case c.evJ.INVALID_ACCESS:
            a = u.intl.string(u.t["25gfQX"]), o = u.intl.string(u.t.QNnTwN);
            break;
          case c.evJ.INVALID_PIN_MESSAGE_CHANNEL:
            a = u.intl.string(u.t["Q5G6+m"]), o = u.intl.string(u.t["5hgPfC"]);
            break;
          case c.evJ.INVALID_THREAD_ARCHIVE_STATE:
            a = u.intl.string(u.t.fu6Lbl), o = u.intl.string(u.t.FmrcZM);
            break;
          case c.evJ.INVALID_ACTION_SYSTEM_MESSAGE:
            a = u.intl.string(u.t["zV0/FC"]), o = u.intl.string(u.t.C4a7xI);
            break;
          case c.evJ.UNKNOWN_MESSAGE:
            a = u.intl.string(u.t.fkqPro), o = u.intl.string(u.t.H6fRIg);
            break;
          default:
            var d;
            a = u.intl.string(u.t.HI88Q3), o = null != (d = n.getAnyErrorMessage()) ? d : u.intl.string(u.t.fEptJP)
        }
        s.Z.show({
          title: a,
          body: o,
          confirmText: u.intl.string(u.t.BddRzS)
        })
      })
    },
    async unpinMessage(e, t) {
      await a.Z.unarchiveThreadIfNecessary(e.id), r.tn.del({
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
      let a = null != (n = null == t ? true : t.reset) && n,
        s = null != (l = null == t ? true : t.limit) ? l : 25,
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
  p = d