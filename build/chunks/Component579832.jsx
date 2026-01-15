/** Chunk was on web.js **/
/** chunk id: 579832, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk568836 = require("./568836.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk518727 = require("./518727.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk960048 = require("./960048.js"),
  Chunk51144 = require("./51144.js"),
  Chunk453227 = require("./453227.js"),
  Chunk703995 = require("./703995.js"),
  Chunk260720 = require("./260720.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887547 = require("./887547.js"),
  Chunk617842 = require("./617842.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = e => {
    let {
      disabled: t,
      invite: o,
      isExistingSub: l
    } = e, c = () => {
      if (null == o) return;
      let e = o.subscription,
        t = o.id,
        a = d.default.getUser(o.primary_user);
      if (null == a) return;
      let c = (0, m.XM)(a);
      p.default.track(O.rMx.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
        invite_id: t,
        subscription_id: e
      });
      let f = (0, i.uniqueId)("premium-group-accept-invite-modal"),
        h = false;
      (0, s.ZDy)(async () => {
        let {
          default: i
        } = await n.e("26450").then(n.bind(n, 382927));
        return n => (0, r.jsx)(i, P(A({}, n), {
          premiumGroupSubscriptionId: e,
          premiumGroupInviteId: t,
          premiumGroupPrimaryName: c,
          isExistingSub: l,
          onClose: async () => {
            h || (h = true, _.S.dispatch(O.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), g.Z.isDisplayingWowMomentConfirmation && g.Z.isAnimated ? setTimeout(() => {
              n.onClose()
            }, u.P) : await n.onClose())
          }
        }))
      }, {
        onCloseRequest: () => {
          h || (h = true, _.S.dispatch(O.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), g.Z.isDisplayingWowMomentConfirmation && g.Z.isAnimated ? setTimeout(() => {
            (0, s.Mr3)(f)
          }, u.P) : (0, s.Mr3)(f))
        },
        modalKey: f
      })
    };
    return (0, r.jsx)(s.Button, {
      variant: "expressive",
      size: "md",
      text: S.intl.string(v.default.rjuKse),
      icon: a.SrA,
      onClick: c,
      disabled: t
    })
  },
  R = e => {
    let {
      disabled: t,
      invite: i,
      channel: a
    } = e, o = () => {
      if (null == i || !a.isDM()) return void h.Z.captureMessage("CancelInviteButton onClick: unexpected state", {
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
      null != t && (p.default.track(O.rMx.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
        invite_id: i.id,
        subscription_id: i.subscription,
        invited_user_id: e
      }), (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("72114").then(n.bind(n, 157312));
        return n => (0, r.jsx)(e, P(A({}, n), {
          subscriptionId: i.subscription,
          invitedUser: t,
          subscriptionGroupMemberId: i.id
        }))
      }))
    };
    return (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "md",
      text: S.intl.string(v.default["eYHh+z"]),
      onClick: o,
      disabled: t
    })
  },
  D = e => {
    let {
      message: t,
      header: n,
      body: i,
      compact: o,
      actionButton: l
    } = e;
    return (0, r.jsxs)(c.Z, {
      className: I.systemMessageContainer,
      compact: o,
      iconNode: (0, r.jsx)(a.SrA, {
        size: "md",
        color: "currentColor"
      }),
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: t
      }), (0, r.jsxs)(s.Kqy, {
        direction: "horizontal",
        className: I.embedContainer,
        children: [(0, r.jsx)("img", {
          src: T,
          alt: "",
          className: I.image
        }), (0, r.jsxs)("div", {
          className: I.content,
          children: [(0, r.jsx)(s.Cts, {
            type: "beta",
            variant: "expressive"
          }), (0, r.jsx)("h2", {
            className: I.title,
            children: n
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: i
          }), (0, r.jsx)("div", {
            className: I.buttonContainer,
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
      inviteState: s,
      isFetching: c,
      invite: u,
      currentUser: p,
      premiumSubscription: _
    } = (0, o.cj)([E.Z, d.default, f.Z], () => {
      var e;
      return {
        inviteState: null != a ? E.Z.getInviteState(a) : y.bZ.NOT_FOUND,
        isFetching: null != a && E.Z.isFetching(a),
        invite: null != a ? null == (e = E.Z.getInvite(a)) ? true : e.invite : null,
        currentUser: d.default.getCurrentUser(),
        premiumSubscription: f.Z.getPremiumSubscription()
      }
    }, [a]);
    if (null == p) return null;
    let h = t.author,
      m = p.id === h.id;
    if (c || s === y.bZ.FETCHING || s === y.bZ.UNKNOWN) return (0, r.jsx)(l.OR, {
      isHorizontal: true
    });
    let g = (0, b.xf)({
      sender: h,
      channel: n,
      isSender: m,
      inviteState: s
    });
    if (null == g) return null;
    let O = s === y.bZ.PENDING,
      v = m ? (0, r.jsx)(R, {
        disabled: !O,
        invite: u,
        channel: n
      }) : (0, r.jsx)(w, {
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