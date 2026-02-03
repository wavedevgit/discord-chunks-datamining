/** Chunk was on 71447 **/
/** chunk id: 646881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
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

function E() {
  var e, t, n;
  let E = (0, c.b4)(),
    O = null == E ? true : E.id,
    x = null == E ? true : E.altId,
    _ = null != (e = (0, l.bG)([s.default], () => s.default.getCurrentUser())) ? e : null,
    S = null != x ? x : O,
    I = m.Ay.useField("activeTab"),
    j = m.Ay.useField("setActiveTab"),
    T = r.useCallback(e => {
      e !== I && (j(e), (0, o.YX)(v.uss.FRIENDS, {
        type: o.Z5.TAB_SELECTED,
        value: function(e) {
          switch (e) {
            case u.x.FRIENDS:
              return o.IP.FRIEND_TAB_SELECTED;
            case u.x.MESSAGES:
              return o.IP.MESSAGES_TAB_SELECTED;
            case u.x.VOICE:
              return o.IP.VOICE_TAB_SELECTED;
            default:
              return o.IP.FRIEND_TAB_SELECTED
          }
        }(e)
      }))
    }, [I, j]),
    C = null != (t = (0, l.bG)([a.A], () => null == S ? null : a.A.getApplicationActivity(S), [S])) ? t : null,
    N = (0, r.useCallback)((e, t) => {
      let n = function(e) {
        switch (e) {
          case h.x.OPEN_DIRECT_MESSAGE:
            return {
              type: o.Z5.FRIEND_LIST, value: o.IP.CHAT
            };
          case h.x.ACCEPT_FRIEND_REQUEST:
            return {
              type: o.Z5.FRIEND_REQUEST, value: o.IP.ACCEPT_REQUEST
            };
          case h.x.DECLINE_FRIEND_REQUEST:
            return {
              type: o.Z5.FRIEND_REQUEST, value: o.IP.DECLINE_REQUEST
            };
          case h.x.CANCEL_FRIEND_REQUEST:
            return {
              type: o.Z5.FRIEND_REQUEST, value: o.IP.CANCEL_REQUEST
            };
          case h.x.SEND_FRIEND_REQUEST:
            return {
              type: o.Z5.FRIEND_REQUEST, value: o.IP.SEND_REQUEST
            };
          case h.x.SEND_ACTIVITY_INVITE:
            return {
              type: o.Z5.INVITE, value: o.IP.INVITE_SENT
            };
          case h.x.ASK_TO_JOIN:
            return {
              type: o.Z5.INVITE, value: o.IP.JOIN_REQUEST_SENT
            };
          case h.x.USER_CONTEXT_MENU:
            return {
              type: o.Z5.FRIEND_LIST, value: o.IP.SETTINGS_OPENED
            };
          case h.x.OPEN_FRIEND_MODAL:
            return {
              type: o.Z5.FRIEND_LIST, value: o.IP.PROFILE_OPENED
            };
          case h.x.OPEN_SETTINGS_MODAL:
            return {
              type: o.Z5.FRIEND_LIST, value: o.IP.SETTINGS_OPENED
            };
          case h.x.SEARCH_FRIENDS:
            return {
              type: o.Z5.FRIEND_LIST, value: o.IP.SEARCH
            };
          default:
            return null
        }
      }(e);
      if (null != n) {
        var i, r;
        if (e === h.x.OPEN_DIRECT_MESSAGE) {
          if (null == t) return;
          (async () => {
            try {
              await (0, y.D$)({
                target: {
                  kind: y.bB.DM_USER,
                  userId: t,
                  messageId: null
                },
                source: A.B.FRIENDS_WIDGET_CLICK,
                widgetType: v.uss.FRIENDS
              })
            } catch (e) {}
          })()
        }(0, o.YX)(v.uss.FRIENDS, (i = function(e) {
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
    className: b.kL,
    children: [(0, i.jsx)(p.b, {
      currentUser: _,
      activity: C,
      currentGameName: null != (n = null == E ? true : E.name) ? n : null,
      activeTab: I,
      onTabChange: T
    }), (0, i.jsx)("div", {
      className: b.Qs,
      children: I === u.x.FRIENDS ? (0, i.jsx)(d.F, {
        onAction: N
      }) : I === u.x.MESSAGES ? (0, i.jsx)(f.t, {}) : I === u.x.VOICE ? (0, i.jsx)(g.T, {}) : null
    })]
  })
}
let O = Chunk64700.memo(function(e) {
  let {
    locked: t
  } = e;
  return t ? null : (0, i.jsx)(E, {})
})