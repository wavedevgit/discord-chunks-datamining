/** Chunk was on web.js **/
/** chunk id: 31051, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
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

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = e => {
    let {
      disabled: t,
      invite: s,
      isExistingSub: l
    } = e, c = () => {
      if (null == s) return;
      let e = s.subscription,
        t = s.id,
        a = d.default.getUser(s.primary_user);
      if (null == a) return;
      let c = (0, m.$3)(a);
      p.default.track(O.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
        invite_id: t,
        subscription_id: e
      });
      let f = (0, i.uniqueId)("premium-group-accept-invite-modal"),
        h = false;
      (0, o.mMO)(async () => {
        let {
          default: i
        } = await n.e("60072").then(n.bind(n, 159707));
        return n => (0, r.jsx)(i, w(C({}, n), {
          premiumGroupSubscriptionId: e,
          premiumGroupInviteId: t,
          premiumGroupPrimaryName: c,
          isExistingSub: l,
          onClose: async () => {
            h || (h = true, _._.dispatch(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated ? setTimeout(() => {
              n.onClose()
            }, u.K) : await n.onClose())
          }
        }))
      }, {
        onCloseRequest: () => {
          h || (h = true, _._.dispatch(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated ? setTimeout(() => {
            (0, o.OoC)(f)
          }, u.K) : (0, o.OoC)(f))
        },
        modalKey: f
      })
    };
    return (0, r.jsx)(o.Button, {
      variant: "expressive",
      size: "md",
      text: A.intl.string(v.default.rjuKse),
      icon: a.tvc,
      onClick: c,
      disabled: t
    })
  },
  P = e => {
    let {
      disabled: t,
      invite: i,
      channel: a
    } = e, s = () => {
      if (null == i || !a.isDM()) return void h.A.captureMessage("CancelInviteButton onClick: unexpected state", {
        extra: {
          inviteIsNull: null == i,
          channelIsDM: a.isDM(),
          channelId: a.id,
          subscriptionGroupMemberId: null == i ? true : i.id,
          subscriptionId: null == i ? true : i.subscription,
          primaryUserId: null == i ? true : i.primary_user
        }
      });
      let e = a.getRecipientId(),
        t = d.default.getUser(e);
      null != t && (p.default.track(O.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
        invite_id: i.id,
        subscription_id: i.subscription,
        invited_user_id: e
      }), (0, o.mMO)(async () => {
        let {
          default: e
        } = await n.e("15554").then(n.bind(n, 115225));
        return n => (0, r.jsx)(e, w(C({}, n), {
          subscriptionId: i.subscription,
          invitedUser: t,
          subscriptionGroupMemberId: i.id
        }))
      }))
    };
    return (0, r.jsx)(o.Button, {
      variant: "secondary",
      size: "md",
      text: A.intl.string(v.default["eYHh+z"]),
      onClick: s,
      disabled: t
    })
  },
  D = e => {
    let {
      message: t,
      header: n,
      body: i,
      compact: s,
      actionButton: l
    } = e;
    return (0, r.jsxs)(c.A, {
      className: I.og,
      compact: s,
      iconNode: (0, r.jsx)(a.tvc, {
        size: "md",
        color: "currentColor"
      }),
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: t
      }), (0, r.jsxs)(o.BJc, {
        direction: "horizontal",
        className: I.x,
        children: [(0, r.jsx)("img", {
          src: S,
          alt: "",
          className: I.Sl
        }), (0, r.jsxs)("div", {
          className: I.Qs,
          children: [(0, r.jsx)(o.Exy, {
            type: "beta",
            variant: "expressive"
          }), (0, r.jsx)("h2", {
            className: I.DD,
            children: n
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: i
          }), (0, r.jsx)("div", {
            className: I.UD,
            children: l
          })]
        })]
      })]
    })
  },
  x = e => {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, a = t.premiumGroupInviteId, {
      inviteState: o,
      isFetching: c,
      invite: u,
      currentUser: p,
      premiumSubscription: _
    } = (0, s.cf)([E.A, d.default, f.A], () => {
      var e;
      return {
        inviteState: null != a ? E.A.getInviteState(a) : b.xI.NOT_FOUND,
        isFetching: null != a && E.A.isFetching(a),
        invite: null != a ? null == (e = E.A.getInvite(a)) ? true : e.invite : null,
        currentUser: d.default.getCurrentUser(),
        premiumSubscription: f.A.getPremiumSubscription()
      }
    }, [a]);
    if (null == p) return null;
    let h = t.author,
      m = p.id === h.id;
    if (c || o === b.xI.FETCHING || o === b.xI.UNKNOWN) return (0, r.jsx)(l.Wb, {
      isHorizontal: true
    });
    let g = (0, y.o1)({
      sender: h,
      channel: n,
      isSender: m,
      inviteState: o
    });
    if (null == g) return null;
    let O = o === b.xI.PENDING,
      v = m ? (0, r.jsx)(P, {
        disabled: !O,
        invite: u,
        channel: n
      }) : (0, r.jsx)(R, {
        disabled: !O,
        invite: u,
        isExistingSub: null != _
      });
    return (0, r.jsx)(D, {
      message: g.message,
      header: g.header,
      body: g.body,
      compact: i,
      actionButton: v
    })
  }