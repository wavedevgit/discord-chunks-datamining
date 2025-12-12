/** Chunk was on 50751 **/
/** chunk id: 878939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk638730 = require("./638730.js"),
  Chunk167762 = require("./167762.jsx"),
  Chunk293273 = require("./293273.js"),
  Chunk594174 = require("./594174.js"),
  Chunk444295 = require("./444295.js"),
  Chunk603618 = require("./603618.jsx"),
  Chunk388627 = require("./388627.js"),
  Chunk981631 = require("./981631.js"),
  Chunk275525 = require("./275525.js");

function m(e) {
  let {
    locked: t
  } = e, n = (0, h.II)(), m = null == n ? true : n.id, g = null == n ? true : n.altId, y = (0, l.e7)([c.default], () => c.default.getCurrentUser()), O = null != g ? g : m, [v, E] = r.useState(new Set), [b, _] = r.useState(new Set), S = r.useCallback((e, t, n) => {
    E(n => {
      if (t) {
        if (n.has(e)) return n;
        n.add(e)
      } else {
        if (!n.has(e)) return n;
        n.delete(e)
      }
      return new Set(n)
    }), _(i => {
      if (n && t) {
        if (i.has(e)) return i;
        i.add(e)
      } else {
        if (!i.has(e)) return i;
        i.delete(e)
      }
      return new Set(i)
    })
  }, []), x = (0, u.ee)(() => v, [v]), I = (0, u.ee)(() => b, [b]), C = (0, o.h)(u.zi, 3e3, []);
  r.useEffect(() => {
    0 === x.size || t || C(p.Odu.FRIENDS, {
      locked: t,
      shownUserIds: Array.from(x),
      liveUserIds: Array.from(I),
      contentInventoryIds: []
    })
  }, [x, I, t, C]);
  let j = (0, l.e7)([s.Z], () => null == O ? null : s.Z.getApplicationActivity(O), [O]),
    Z = (0, r.useCallback)((e, t) => {
      let n = function(e) {
        switch (e) {
          case a.sG.OPEN_DIRECT_MESSAGE:
            return {
              type: u.Qu.FRIEND_LIST, value: u.bk.CHAT
            };
          case a.sG.ACCEPT_FRIEND_REQUEST:
            return {
              type: u.Qu.FRIEND_REQUEST, value: u.bk.ACCEPT_REQUEST
            };
          case a.sG.DECLINE_FRIEND_REQUEST:
            return {
              type: u.Qu.FRIEND_REQUEST, value: u.bk.DECLINE_REQUEST
            };
          case a.sG.CANCEL_FRIEND_REQUEST:
            return {
              type: u.Qu.FRIEND_REQUEST, value: u.bk.CANCEL_REQUEST
            };
          case a.sG.SEND_FRIEND_REQUEST:
            return {
              type: u.Qu.FRIEND_REQUEST, value: u.bk.SEND_REQUEST
            };
          case a.sG.SEND_ACTIVITY_INVITE:
            return {
              type: u.Qu.INVITE, value: u.bk.INVITE_SENT
            };
          case a.sG.ASK_TO_JOIN:
            return {
              type: u.Qu.INVITE, value: u.bk.JOIN_REQUEST_SENT
            };
          case a.sG.USER_CONTEXT_MENU:
            return {
              type: u.Qu.FRIEND_LIST, value: u.bk.SETTINGS_OPENED
            };
          case a.sG.OPEN_FRIEND_MODAL:
            return {
              type: u.Qu.FRIEND_LIST, value: u.bk.PROFILE_OPENED
            };
          case a.sG.OPEN_SETTINGS_MODAL:
            return {
              type: u.Qu.FRIEND_LIST, value: u.bk.SETTINGS_OPENED
            };
          case a.sG.SEARCH_FRIENDS:
            return {
              type: u.Qu.FRIEND_LIST, value: u.bk.SEARCH
            };
          default:
            return null
        }
      }(e);
      if (null != n) {
        var i, r;
        (0, u.Ws)(p.Odu.FRIENDS, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, n), r = r = {
          userId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
        }), i))
      }
    }, []),
    N = (0, r.useCallback)(() => {}, []),
    w = (0, r.useCallback)(() => (0, i.jsx)(d.lE, {
      activity: j,
      currentUser: y,
      showInviteButton: false
    }), [j, y]);
  return t ? null : (0, i.jsx)(a.r1, {
    containerClassName: f.container,
    listClassName: f.list,
    closePopout: N,
    renderHeader: w,
    appContext: p.IlC.OVERLAY,
    onAction: Z,
    onFriendVisible: S
  })
}