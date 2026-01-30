/** Chunk was on 64935 **/
/** chunk id: 31051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
});
var Chunk627968 = require("./627968.js"),
  Chunk735438 = require("./735438.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk863574 = require("./863574.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk639289 = require("./639289.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk728458 = require("./728458.js"),
  Chunk427262 = require("./427262.js"),
  Chunk573359 = require("./573359.js"),
  Chunk59784 = require("./59784.js"),
  Chunk612669 = require("./612669.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk260171 = require("./260171.js"),
  Chunk421438 = require("./421438.js");

function C(e) {
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
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = e => {
    let {
      disabled: t,
      invite: a,
      isExistingSub: o
    } = e;
    return (0, r.jsx)(s.Button, {
      variant: "expressive",
      size: "md",
      text: O.intl.string(x.default.rjuKse),
      icon: l.tvc,
      onClick: () => {
        if (null == a) return;
        let e = a.subscription,
          t = a.id,
          l = d.default.getUser(a.primary_user);
        if (null == l) return;
        let c = (0, _.$3)(l);
        m.default.track(v.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
          invite_id: t,
          subscription_id: e
        });
        let p = (0, i.uniqueId)("premium-group-accept-invite-modal"),
          g = false;
        (0, s.mMO)(async () => {
          let {
            default: i
          } = await n.e("60072").then(n.bind(n, 159707));
          return n => (0, r.jsx)(i, I(C({}, n), {
            premiumGroupSubscriptionId: e,
            premiumGroupInviteId: t,
            premiumGroupPrimaryName: c,
            isExistingSub: o,
            onClose: async () => {
              g || (g = true, f._.dispatch(v.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), h.A.isDisplayingWowMomentConfirmation && h.A.isAnimated ? setTimeout(() => {
                n.onClose()
              }, u.K) : await n.onClose())
            }
          }))
        }, {
          onCloseRequest: () => {
            g || (g = true, f._.dispatch(v.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), h.A.isDisplayingWowMomentConfirmation && h.A.isAnimated ? setTimeout(() => {
              (0, s.OoC)(p)
            }, u.K) : (0, s.OoC)(p))
          },
          modalKey: p
        })
      },
      disabled: t
    })
  },
  T = e => {
    let {
      disabled: t,
      invite: i,
      channel: l
    } = e;
    return (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "md",
      text: O.intl.string(x.default["eYHh+z"]),
      onClick: () => {
        if (null == i || !l.isDM()) return void g.A.captureMessage("CancelInviteButton onClick: unexpected state", {
          extra: {
            inviteIsNull: null == i,
            channelIsDM: l.isDM(),
            channelId: l.id,
            subscriptionGroupMemberId: null == i ? true : i.id,
            subscriptionId: null == i ? true : i.subscription,
            primaryUserId: null == i ? true : i.primary_user
          }
        });
        let e = l.getRecipientId(),
          t = d.default.getUser(e);
        null != t && (m.default.track(v.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
          invite_id: i.id,
          subscription_id: i.subscription,
          invited_user_id: e
        }), (0, s.mMO)(async () => {
          let {
            default: e
          } = await n.e("15554").then(n.bind(n, 115225));
          return n => (0, r.jsx)(e, I(C({}, n), {
            subscriptionId: i.subscription,
            invitedUser: t,
            subscriptionGroupMemberId: i.id
          }))
        }))
      },
      disabled: t
    })
  },
  N = e => {
    let {
      message: t,
      header: n,
      body: i,
      compact: a,
      actionButton: o
    } = e;
    return (0, r.jsxs)(c.A, {
      className: E.og,
      compact: a,
      iconNode: (0, r.jsx)(l.tvc, {
        size: "md",
        color: "currentColor"
      }),
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: t
      }), (0, r.jsxs)(s.BJc, {
        direction: "horizontal",
        className: E.x,
        children: [(0, r.jsx)("img", {
          src: j,
          alt: "",
          className: E.Sl
        }), (0, r.jsxs)("div", {
          className: E.Qs,
          children: [(0, r.jsx)(s.Exy, {
            type: "beta",
            variant: "expressive"
          }), (0, r.jsx)("h2", {
            className: E.DD,
            children: n
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: i
          }), (0, r.jsx)("div", {
            className: E.UD,
            children: o
          })]
        })]
      })]
    })
  },
  P = e => {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, l = t.premiumGroupInviteId, {
      inviteState: s,
      isFetching: c,
      invite: u,
      currentUser: m,
      premiumSubscription: f
    } = (0, a.cf)([b.A, d.default, p.A], () => {
      var e;
      return {
        inviteState: null != l ? b.A.getInviteState(l) : y.xI.NOT_FOUND,
        isFetching: null != l && b.A.isFetching(l),
        invite: null != l ? null == (e = b.A.getInvite(l)) ? true : e.invite : null,
        currentUser: d.default.getCurrentUser(),
        premiumSubscription: p.A.getPremiumSubscription()
      }
    }, [l]);
    if (null == m) return null;
    let g = t.author,
      _ = m.id === g.id;
    if (c || s === y.xI.FETCHING || s === y.xI.UNKNOWN) return (0, r.jsx)(o.Wb, {
      isHorizontal: true
    });
    let h = (0, A.o1)({
      sender: g,
      channel: n,
      isSender: _,
      inviteState: s
    });
    if (null == h) return null;
    let v = s === y.xI.PENDING,
      x = _ ? (0, r.jsx)(T, {
        disabled: !v,
        invite: u,
        channel: n
      }) : (0, r.jsx)(S, {
        disabled: !v,
        invite: u,
        isExistingSub: null != f
      });
    return (0, r.jsx)(N, {
      message: h.message,
      header: h.header,
      body: h.body,
      compact: i,
      actionButton: x
    })
  }