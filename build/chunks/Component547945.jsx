/** Chunk was on 1113 **/
/** chunk id: 547945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => P
}), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk837381 = require("./837381.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928039 = require("./928039.js"),
  Chunk636922 = require("./636922.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk151282 = require("./151282.js"),
  Chunk199160 = require("./199160.js"),
  Chunk551640 = require("./551640.js"),
  Chunk970244 = require("./970244.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk383233 = require("./383233.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk572448 = require("./572448.jsx"),
  Chunk963702 = require("./963702.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk693853 = require("./693853.js");
let T = {
  offset: {
    left: 4,
    right: false
  }
};

function P() {
  return l.useEffect(() => {
    (0, m.sy)()
  }, []), (0, r.jsx)(w, {})
}

function w() {
  let e = (0, d.bG)([b.A], () => b.A.getScheduledMessagesForInbox(), []),
    t = l.useMemo(() => Object.values(e).sort((e, t) => new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? false : 1), [e]),
    n = (0, d.bG)([b.A], () => b.A.loading, []),
    i = l.useRef(null),
    s = (0, p.A)("scheduled-messages", i);
  return n ? (0, r.jsx)(h.y$y, {
    className: N.k$
  }) : 0 === t.length ? (0, r.jsx)(C.A, {
    Icon: h.O4,
    header: I.intl.string(I.t.aJQZfZ),
    tip: I.intl.string(I.t.rCN4pN)
  }) : (0, r.jsx)(c.hD, {
    navigator: s,
    children: (0, r.jsx)(c.PR, {
      children: e => {
        var n, l;
        let {
          ref: s
        } = e, a = function(e, t) {
          if (null == e) return {};
          var n, r, l, i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }
          if (i = function(e, t) {
              if (null == e) return {};
              var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
              for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
              return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }(e, ["ref"]);
        return (0, r.jsx)(h.T7Y, (n = function(e) {
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
            i.current = e, s.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          }
        }, a), l = l = {
          children: (0, r.jsx)(R, {
            scheduledMessages: t
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    })
  })
}

function R(e) {
  let {
    scheduledMessages: t
  } = e, n = l.useMemo(() => t.reduce((e, t) => {
    var n, r;
    let l = x.A.getChannel(t.scheduledMessage.channelId);
    return null == l || (e[l.id] = {
      channel: l,
      scheduledMessages: [...null != (n = null == (r = e[l.id]) ? true : r.scheduledMessages) ? n : [], t]
    }), e
  }, {}), [t]), i = (0, d.bG)([b.A], () => b.A.getMessagesPendingDeletion(), []);
  return (0, r.jsx)(r.Fragment, {
    children: Object.entries(n).map(e => {
      let [t, {
        channel: n,
        scheduledMessages: l
      }] = e;
      return (0, r.jsxs)("div", {
        className: N.WG,
        children: [(0, r.jsx)(E.A, {
          channel: n,
          gotoChannel: () => (0, f.pX)(S.BVt.CHANNEL(n.getGuildId(), n.id)),
          children: null
        }), l.map(e => {
          let t = i.has(e.scheduledMessageId);
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
let D = Chunk64700.memo(function(e) {
  let {
    scheduledMessage: t,
    channel: n,
    isPendingDeletion: i
  } = e, a = new _.Ay({
    id: t.scheduledMessageId,
    content: t.scheduledMessage.content,
    author: j.default.getUser(t.userId),
    timestamp: o()(t.sendAtTimestamp).toDate(),
    channel_id: t.scheduledMessage.channelId
  }), {
    isError: c,
    stateMessage: d
  } = function(e) {
    switch (e) {
      case A.A.SCHEDULED:
        return {
          isError: false, stateMessage: I.intl.string(I.t.Fn6Odn)
        };
      case A.A.ERROR_CHANNEL_NOT_FOUND:
        return {
          isError: true, stateMessage: I.intl.string(I.t.v5O2dK)
        };
      case A.A.ERROR_USER_NOT_FOUND:
        return {
          isError: true, stateMessage: I.intl.string(I.t.j8uIfG)
        };
      case A.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
        return {
          isError: true, stateMessage: I.intl.string(I.t["w6zHX/"])
        };
      case A.A.ERROR_SEND_FAILED:
        return {
          isError: true, stateMessage: I.intl.string(I.t.pflV7z)
        };
      case A.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
        return {
          isError: true, stateMessage: I.intl.string(I.t.j8uIfG)
        };
      default:
        (0, v.xb)(e)
    }
  }(t.state), p = l.useCallback(() => {
    (0, m.mk)(t.scheduledMessageId).then(() => {
      (0, y.Re)()
    }).catch(e => {
      (0, y.kM)(e.message)
    })
  }, [t.scheduledMessageId]), f = l.useCallback(() => {
    (0, y.CI)({
      scheduledMessage: t
    })
  }, [t]);
  return (0, r.jsx)("div", {
    className: s()(N.zC, {
      [N._4]: c,
      [N.j3]: !c
    }),
    children: i ? (0, r.jsx)(h.y$y, {
      className: N.$5
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: c ? "text-feedback-critical" : "text-feedback-positive",
        className: N.Rq,
        children: d
      }), (0, r.jsxs)("div", {
        className: N.Pd,
        children: [(0, r.jsx)(g.A, {
          message: a,
          channel: n,
          className: N.iU,
          compact: O.hH.getSetting(),
          animateAvatar: false,
          focusProps: T
        }, a.id), (0, r.jsxs)(u.e2v, {
          size: "sm",
          children: [(0, r.jsx)(u.K0, {
            icon: h.O4,
            onClick: f,
            variant: "icon-only",
            "aria-label": I.intl.string(I.t.SBcdAN)
          }), (0, r.jsx)(u.K0, {
            icon: h.aXh,
            onClick: p,
            "aria-label": I.intl.string(I.t.O3sL8F),
            variant: "icon-only"
          })]
        })]
      })]
    })
  }, a.id)
})