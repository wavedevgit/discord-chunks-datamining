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
  } = e, n = (0, h.II)(), m = null == n ? true : n.id, g = null == n ? true : n.altId, y = (0, l.e7)([u.default], () => u.default.getCurrentUser()), O = null != g ? g : m, [E, v] = r.useState(new Set), [S, b] = r.useState(new Set), x = r.useCallback((e, t, n) => {
    v(n => {
      if (t) {
        if (n.has(e)) return n;
        n.add(e)
      } else {
        if (!n.has(e)) return n;
        n.delete(e)
      }
      return new Set(n)
    }), b(i => {
      if (n && t) {
        if (i.has(e)) return i;
        i.add(e)
      } else {
        if (!i.has(e)) return i;
        i.delete(e)
      }
      return new Set(i)
    })
  }, []), j = (0, c.ee)(() => E, [E]), I = (0, c.ee)(() => S, [S]), C = (0, a.h)(c.zi, 3e3, []);
  r.useEffect(() => {
    0 === j.size || t || C(p.Odu.FRIENDS, {
      locked: t,
      shownUserIds: Array.from(j),
      liveUserIds: Array.from(I),
      contentInventoryIds: []
    })
  }, [j, I, t, C]);
  let Z = (0, l.e7)([s.Z], () => null == O ? null : s.Z.getApplicationActivity(O), [O]),
    N = (0, r.useCallback)((e, t) => {
      let n = function(e) {
        switch (e) {
          case o.sG.OPEN_DIRECT_MESSAGE:
            return {
              type: c.Qu.FRIEND_LIST, value: c.bk.CHAT
            };
          case o.sG.ACCEPT_FRIEND_REQUEST:
            return {
              type: c.Qu.FRIEND_REQUEST, value: c.bk.ACCEPT_REQUEST
            };
          case o.sG.DECLINE_FRIEND_REQUEST:
            return {
              type: c.Qu.FRIEND_REQUEST, value: c.bk.DECLINE_REQUEST
            };
          case o.sG.CANCEL_FRIEND_REQUEST:
            return {
              type: c.Qu.FRIEND_REQUEST, value: c.bk.CANCEL_REQUEST
            };
          case o.sG.SEND_FRIEND_REQUEST:
            return {
              type: c.Qu.FRIEND_REQUEST, value: c.bk.SEND_REQUEST
            };
          case o.sG.SEND_ACTIVITY_INVITE:
            return {
              type: c.Qu.INVITE, value: c.bk.INVITE_SENT
            };
          case o.sG.ASK_TO_JOIN:
            return {
              type: c.Qu.INVITE, value: c.bk.JOIN_REQUEST_SENT
            };
          case o.sG.USER_CONTEXT_MENU:
            return {
              type: c.Qu.FRIEND_LIST, value: c.bk.SETTINGS_OPENED
            };
          case o.sG.OPEN_FRIEND_MODAL:
            return {
              type: c.Qu.FRIEND_LIST, value: c.bk.PROFILE_OPENED
            };
          case o.sG.OPEN_SETTINGS_MODAL:
            return {
              type: c.Qu.FRIEND_LIST, value: c.bk.SETTINGS_OPENED
            };
          case o.sG.SEARCH_FRIENDS:
            return {
              type: c.Qu.FRIEND_LIST, value: c.bk.SEARCH
            };
          default:
            return null
        }
      }(e);
      if (null != n) {
        var i, r;
        (0, c.Ws)(p.Odu.FRIENDS, (i = function(e) {
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
    w = (0, r.useCallback)(() => {}, []),
    T = (0, r.useCallback)(() => (0, i.jsx)(d.lE, {
      activity: Z,
      currentUser: y,
      showInviteButton: false
    }), [Z, y]);
  return t ? null : (0, i.jsx)(o.r1, {
    containerClassName: f.container,
    listClassName: f.list,
    closePopout: w,
    renderHeader: T,
    appContext: p.IlC.OVERLAY,
    onAction: N,
    onFriendVisible: x
  })
}