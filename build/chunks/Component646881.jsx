/** Chunk was on 71447 **/
/** chunk id: 646881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk308528 = require("./308528.js"),
  Chunk375492 = require("./375492.js"),
  Chunk287809 = require("./287809.js"),
  Chunk810412 = require("./810412.js"),
  Chunk914853 = require("./914853.js"),
  Chunk243612 = require("./243612.js"),
  Chunk640490 = require("./640490.jsx"),
  Chunk67103 = require("./67103.js"),
  Chunk755588 = require("./755588.jsx"),
  Chunk222870 = require("./222870.jsx"),
  Chunk180720 = require("./180720.jsx"),
  Chunk576420 = require("./576420.js"),
  Chunk145567 = require("./145567.js"),
  Chunk34307 = require("./34307.js"),
  Chunk652215 = require("./652215.js"),
  Chunk553777 = require("./553777.js");

function O() {
  var e, t, n;
  let O = (0, d.b4)(),
    x = null == O ? true : O.id,
    _ = null == O ? true : O.altId,
    S = null != (e = (0, l.bG)([o.default], () => o.default.getCurrentUser())) ? e : null,
    I = null != _ ? _ : x,
    j = y.Ay.useField("activeTab"),
    T = y.Ay.useField("setActiveTab"),
    C = r.useCallback(e => {
      e !== j && (T(e), (0, u.YX)(b.uss.FRIENDS, {
        type: u.Z5.TAB_SELECTED,
        value: function(e) {
          switch (e) {
            case c.x.FRIENDS:
              return u.IP.FRIEND_TAB_SELECTED;
            case c.x.MESSAGES:
              return u.IP.MESSAGES_TAB_SELECTED;
            case c.x.VOICE:
              return u.IP.VOICE_TAB_SELECTED;
            default:
              return u.IP.FRIEND_TAB_SELECTED
          }
        }(e)
      }))
    }, [j, T]),
    N = null != (t = (0, l.bG)([s.A], () => null == I ? null : s.A.getApplicationActivity(I), [I])) ? t : null,
    w = (0, r.useCallback)((e, t) => {
      let n = function(e) {
        switch (e) {
          case p.x.OPEN_DIRECT_MESSAGE:
            return {
              type: u.Z5.FRIEND_LIST, value: u.IP.CHAT
            };
          case p.x.ACCEPT_FRIEND_REQUEST:
            return {
              type: u.Z5.FRIEND_REQUEST, value: u.IP.ACCEPT_REQUEST
            };
          case p.x.DECLINE_FRIEND_REQUEST:
            return {
              type: u.Z5.FRIEND_REQUEST, value: u.IP.DECLINE_REQUEST
            };
          case p.x.CANCEL_FRIEND_REQUEST:
            return {
              type: u.Z5.FRIEND_REQUEST, value: u.IP.CANCEL_REQUEST
            };
          case p.x.SEND_FRIEND_REQUEST:
            return {
              type: u.Z5.FRIEND_REQUEST, value: u.IP.SEND_REQUEST
            };
          case p.x.SEND_ACTIVITY_INVITE:
            return {
              type: u.Z5.INVITE, value: u.IP.INVITE_SENT
            };
          case p.x.ASK_TO_JOIN:
            return {
              type: u.Z5.INVITE, value: u.IP.JOIN_REQUEST_SENT
            };
          case p.x.USER_CONTEXT_MENU:
            return {
              type: u.Z5.FRIEND_LIST, value: u.IP.SETTINGS_OPENED
            };
          case p.x.OPEN_FRIEND_MODAL:
            return {
              type: u.Z5.FRIEND_LIST, value: u.IP.PROFILE_OPENED
            };
          case p.x.OPEN_SETTINGS_MODAL:
            return {
              type: u.Z5.FRIEND_LIST, value: u.IP.SETTINGS_OPENED
            };
          case p.x.SEARCH_FRIENDS:
            return {
              type: u.Z5.FRIEND_LIST, value: u.IP.SEARCH
            };
          default:
            return null
        }
      }(e);
      if (null != n) {
        var i, r;
        if (e === p.x.OPEN_DIRECT_MESSAGE) {
          if (null == t) return;
          (async () => {
            try {
              let e = await a.A.getOrEnsurePrivateChannel(t);
              (0, A.D$)({
                channelId: e,
                source: v.B.FRIENDS_WIDGET_CLICK,
                guildId: null,
                messageId: null,
                widgetType: b.uss.FRIENDS
              })
            } catch (e) {}
          })()
        }(0, u.YX)(b.uss.FRIENDS, (i = function(e) {
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
    }, []);
  return (0, i.jsxs)("div", {
    className: E.kL,
    children: [(0, i.jsx)(f.b, {
      currentUser: S,
      activity: N,
      currentGameName: null != (n = null == O ? true : O.name) ? n : null,
      activeTab: j,
      onTabChange: C
    }), (0, i.jsx)("div", {
      className: E.Qs,
      children: j === c.x.FRIENDS ? (0, i.jsx)(h.F, {
        onAction: w
      }) : j === c.x.MESSAGES ? (0, i.jsx)(g.t, {}) : j === c.x.VOICE ? (0, i.jsx)(m.T, {}) : null
    })]
  })
}
let x = Chunk64700.memo(function(e) {
  let {
    locked: t
  } = e;
  return t ? null : (0, i.jsx)(O, {})
})