/** Chunk was on 41753 **/
/** chunk id: 711165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => T
}), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk724757 = require("./724757.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk45251 = require("./45251.js"),
  Chunk156012 = require("./156012.js"),
  Chunk74365 = require("./74365.js"),
  Chunk618857 = require("./618857.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk23750 = require("./23750.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk324081 = require("./324081.jsx"),
  Chunk240126 = require("./240126.jsx"),
  Chunk791914 = require("./791914.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397551 = require("./397551.js");
let Z = {
  offset: {
    left: 4,
    right: false
  }
};

function T(e) {
  let {
    setTab: t,
    closePopout: n
  } = e;
  return i.useEffect(() => {
    (0, m.kg)()
  }, []), (0, r.jsx)("div", {
    className: o()(w.container, w.widerInbox),
    children: (0, r.jsx)(h.y5t, {
      component: (0, r.jsx)(I.Z, {
        tab: d.X.SCHEDULED,
        setTab: t,
        closePopout: n
      }),
      children: (0, r.jsx)(A, {})
    })
  })
}

function A() {
  let e = (0, Chunk442837.e7)([Chunk156012.Z], () => Chunk156012.Z.getScheduledMessagesForInbox(), []),
    t = Chunk73800.useMemo(() => Object.values(module).sort((e, t) => new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? false : 1), [module]),
    n = (0, Chunk442837.e7)([Chunk156012.Z], () => Chunk156012.Z.loading, []),
    l = Chunk73800.useRef(null),
    o = (0, Chunk724757.Z)("scheduled-messages", Chunk120356);
  return require ? (0, Chunk255367.jsx)(Chunk481060.$jN, {
    className: Chunk397551.loadingPlaceholder
  }) : 0 === exports.length ? (0, Chunk255367.jsx)(Chunk240126.Z, {
    Icon: Chunk481060.T39,
    header: Chunk388032.intl.string(Chunk388032.t.aJQZfX),
    tip: Chunk388032.intl.string(Chunk388032.t.rCN4pK)
  }) : (0, Chunk255367.jsx)(Chunk91192.bG, {
    navigator: o,
    children: (0, Chunk255367.jsx)(Chunk91192.SJ, {
      children: e => {
        var n, i, {
            ref: o
          } = e,
          s = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.keys(e);
              for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["ref"]);
        return (0, r.jsx)(h.Den, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          ref: e => {
            var t;
            l.current = e, o.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          }
        }, s), i = i = {
          children: (0, r.jsx)(R, {
            scheduledMessages: t
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })
  })
}

function R(e) {
  let {
    scheduledMessages: t
  } = e, n = i.useMemo(() => t.reduce((e, t) => {
    var n, r;
    let i = v.Z.getChannel(t.scheduledMessage.channelId);
    return null == i || (e[i.id] = {
      channel: i,
      scheduledMessages: [...null != (r = null == (n = e[i.id]) ? true : n.scheduledMessages) ? r : [], t]
    }), e
  }, {}), [t]), l = (0, u.e7)([b.Z], () => b.Z.getMessagesPendingDeletion(), []);
  return (0, r.jsx)(r.Fragment, {
    children: Object.entries(n).map(e => {
      let [t, {
        channel: n,
        scheduledMessages: i
      }] = e;
      return (0, r.jsxs)("div", {
        className: w.channelRow,
        children: [(0, r.jsx)(S.Z, {
          channel: n,
          gotoChannel: () => (0, g.uL)(P.Z5c.CHANNEL(n.getGuildId(), n.id)),
          children: null
        }), i.map(e => {
          let t = l.has(e.scheduledMessageId);
          return (0, r.jsx)(D, {
            scheduledMessage: e,
            channel: n,
            isPendingDeletion: t
          }, e.scheduledMessageId)
        })]
      }, t)
    })
  })
}
let D = Chunk73800.memo(function(e) {
  let {
    scheduledMessage: t,
    channel: n,
    isPendingDeletion: l
  } = e, s = new C.ZP({
    id: t.scheduledMessageId,
    content: t.scheduledMessage.content,
    author: j.default.getUser(t.userId),
    timestamp: a()(t.sendAtTimestamp).toDate(),
    channel_id: t.scheduledMessage.channelId
  }), {
    isError: c,
    stateMessage: u
  } = function(e) {
    switch (e) {
      case O._.SCHEDULED:
        return {
          isError: false, stateMessage: N.intl.string(N.t.Fn6Odn)
        };
      case O._.ERROR_CHANNEL_NOT_FOUND:
        return {
          isError: true, stateMessage: N.intl.string(N.t.v5O2dH)
        };
      case O._.ERROR_USER_NOT_FOUND:
        return {
          isError: true, stateMessage: N.intl.string(N.t.j8uIfH)
        };
      case O._.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
        return {
          isError: true, stateMessage: N.intl.string(N.t.w6zHX1)
        };
      case O._.ERROR_SEND_FAILED:
        return {
          isError: true, stateMessage: N.intl.string(N.t["pflV7+"])
        };
      case O._.ERROR_SCHEDULED_MESSAGES_DISABLED:
        return {
          isError: true, stateMessage: N.intl.string(N.t.j8uIfH)
        };
      default:
        (0, E.vE)(e)
    }
  }(t.state), d = i.useCallback(() => {
    (0, m.gD)(t.scheduledMessageId).then(() => {
      (0, _.C$)()
    }).catch(e => {
      (0, _.wW)(e.message)
    })
  }, [t.scheduledMessageId]);
  return (0, r.jsx)("div", {
    className: o()(w.messageContainer, {
      [w.messageSendError]: c,
      [w.messageSendScheduled]: !c
    }),
    children: l ? (0, r.jsx)(h.$jN, {
      className: w.messageSpinner
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: c ? "text-danger" : "text-feedback-positive",
        className: w.messageState,
        children: u
      }), (0, r.jsxs)("div", {
        className: w.channelMessageAndCancelButton,
        children: [(0, r.jsx)(f.Z, {
          message: s,
          channel: n,
          className: w.message,
          compact: y.jU.getSetting(),
          animateAvatar: false,
          focusProps: Z
        }, s.id), (0, r.jsx)(h.P3F, {
          className: w.cancelMessageButton,
          onClick: d,
          children: (0, r.jsx)(h.k$p, {})
        })]
      })]
    })
  }, s.id)
})