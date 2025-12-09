/** Chunk was on 83037 **/
/** chunk id: 711165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => w
}), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk909136 = require("./909136.js");
let Z = {
  offset: {
    left: 4,
    right: false
  }
};

function w() {
  return Chunk473749.useEffect(() => {
    (0, Chunk45251.kg)()
  }, []), (0, Chunk54381.jsx)(T, {})
}

function T() {
  let e = (0, Chunk442837.e7)([Chunk156012.Z], () => Chunk156012.Z.getScheduledMessagesForInbox(), []),
    t = Chunk473749.useMemo(() => Object.values(module).sort((e, t) => new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? false : 1), [module]),
    n = (0, Chunk442837.e7)([Chunk156012.Z], () => Chunk156012.Z.loading, []),
    l = Chunk473749.useRef(null),
    o = (0, Chunk724757.Z)("scheduled-messages", Chunk120356);
  return require ? (0, Chunk54381.jsx)(Chunk481060.$jN, {
    className: Chunk909136.loadingPlaceholder
  }) : 0 === exports.length ? (0, Chunk54381.jsx)(Chunk240126.Z, {
    Icon: Chunk481060.T39,
    header: Chunk388032.intl.string(Chunk388032.t.aJQZfZ),
    tip: Chunk388032.intl.string(Chunk388032.t.rCN4pN)
  }) : (0, Chunk54381.jsx)(Chunk91192.bG, {
    navigator: o,
    children: (0, Chunk54381.jsx)(Chunk91192.SJ, {
      children: e => {
        var n, i, {
            ref: o
          } = e,
          a = function(e, t) {
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
        return (0, r.jsx)(f.Den, (n = function(e) {
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
        }, a), i = i = {
          children: (0, r.jsx)(A, {
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

function A(e) {
  let {
    scheduledMessages: t
  } = e, n = i.useMemo(() => t.reduce((e, t) => {
    var n, r;
    let i = j.Z.getChannel(t.scheduledMessage.channelId);
    return null == i || (e[i.id] = {
      channel: i,
      scheduledMessages: [...null != (r = null == (n = e[i.id]) ? true : n.scheduledMessages) ? r : [], t]
    }), e
  }, {}), [t]), l = (0, d.e7)([b.Z], () => b.Z.getMessagesPendingDeletion(), []);
  return (0, r.jsx)(r.Fragment, {
    children: Object.entries(n).map(e => {
      let [t, {
        channel: n,
        scheduledMessages: i
      }] = e;
      return (0, r.jsxs)("div", {
        className: N.channelRow,
        children: [(0, r.jsx)(E.Z, {
          channel: n,
          gotoChannel: () => (0, g.uL)(I.Z5c.CHANNEL(n.getGuildId(), n.id)),
          children: null
        }), i.map(e => {
          let t = l.has(e.scheduledMessageId);
          return (0, r.jsx)(R, {
            scheduledMessage: e,
            channel: n,
            isPendingDeletion: t
          }, e.scheduledMessageId)
        })]
      }, t)
    })
  })
}
let R = Chunk473749.memo(function(e) {
  let {
    scheduledMessage: t,
    channel: n,
    isPendingDeletion: l
  } = e, a = new v.ZP({
    id: t.scheduledMessageId,
    content: t.scheduledMessage.content,
    author: x.default.getUser(t.userId),
    timestamp: s()(t.sendAtTimestamp).toDate(),
    channel_id: t.scheduledMessage.channelId
  }), {
    isError: c,
    stateMessage: d
  } = function(e) {
    switch (e) {
      case _._.SCHEDULED:
        return {
          isError: false, stateMessage: P.intl.string(P.t.Fn6Odn)
        };
      case _._.ERROR_CHANNEL_NOT_FOUND:
        return {
          isError: true, stateMessage: P.intl.string(P.t.v5O2dK)
        };
      case _._.ERROR_USER_NOT_FOUND:
        return {
          isError: true, stateMessage: P.intl.string(P.t.j8uIfG)
        };
      case _._.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
        return {
          isError: true, stateMessage: P.intl.string(P.t["w6zHX/"])
        };
      case _._.ERROR_SEND_FAILED:
        return {
          isError: true, stateMessage: P.intl.string(P.t.pflV7z)
        };
      case _._.ERROR_SCHEDULED_MESSAGES_DISABLED:
        return {
          isError: true, stateMessage: P.intl.string(P.t.j8uIfG)
        };
      default:
        (0, C.vE)(e)
    }
  }(t.state), h = i.useCallback(() => {
    (0, m.gD)(t.scheduledMessageId).then(() => {
      (0, y.C$)()
    }).catch(e => {
      (0, y.wW)(e.message)
    })
  }, [t.scheduledMessageId]), g = i.useCallback(() => {
    (0, y.uW)({
      scheduledMessage: t
    })
  }, [t]);
  return (0, r.jsx)("div", {
    className: o()(N.messageContainer, {
      [N.messageSendError]: c,
      [N.messageSendScheduled]: !c
    }),
    children: l ? (0, r.jsx)(f.$jN, {
      className: N.messageSpinner
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.Text, {
        variant: "text-xs/semibold",
        color: c ? "text-feedback-critical" : "text-feedback-positive",
        className: N.messageState,
        children: d
      }), (0, r.jsxs)("div", {
        className: N.channelMessageAndButtons,
        children: [(0, r.jsx)(p.Z, {
          message: a,
          channel: n,
          className: N.message,
          compact: O.jU.getSetting(),
          animateAvatar: false,
          focusProps: Z
        }, a.id), (0, r.jsxs)(u.hE2, {
          size: "sm",
          children: [(0, r.jsx)(u.hU, {
            icon: f.T39,
            onClick: g,
            variant: "icon-only",
            "aria-label": P.intl.string(P.t.SBcdAN)
          }), (0, r.jsx)(u.hU, {
            icon: f.k$p,
            onClick: h,
            "aria-label": P.intl.string(P.t.O3sL8F),
            variant: "icon-only"
          })]
        })]
      })]
    })
  }, a.id)
})