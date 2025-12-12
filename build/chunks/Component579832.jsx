/** Chunk was on web.js **/
/** chunk id: 579832, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk568836 = require("./568836.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk51144 = require("./51144.js"),
  Chunk703995 = require("./703995.js"),
  Chunk260720 = require("./260720.js"),
  Chunk282793 = require("./282793.js"),
  Chunk96011 = require("./96011.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887819 = require("./887819.js"),
  Chunk617842 = require("./617842.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = e => {
    let {
      disabled: t,
      invite: o,
      isExistingSub: s
    } = e, l = () => {
      if (null == o) return;
      let e = o.subscription,
        t = c.default.getUser(o.primary_user);
      if (null == t) return;
      let i = (0, d.XM)(t);
      (0, a.ZDy)(async () => {
        let {
          default: t
        } = await n.e("26450").then(n.bind(n, 382927));
        return n => (0, r.jsx)(t, v(y({}, n), {
          premiumGroupSubscriptionId: e,
          premiumGroupPrimaryName: i,
          isExistingSub: s
        }))
      })
    };
    return (0, r.jsx)(a.Button, {
      variant: "expressive",
      size: "md",
      text: h.intl.string(m.default.rjuKse),
      icon: i.SrA,
      onClick: l,
      disabled: t
    })
  },
  I = e => {
    let {
      disabled: t
    } = e, n = () => {};
    return (0, r.jsx)(a.Button, {
      variant: "secondary",
      size: "md",
      text: h.intl.string(m.default["eYHh+z"]),
      onClick: n,
      disabled: t
    })
  },
  T = e => {
    let {
      message: t,
      header: n,
      body: o,
      compact: s,
      actionButton: c
    } = e;
    return (0, r.jsxs)(l.Z, {
      className: g.systemMessageContainer,
      compact: s,
      iconNode: (0, r.jsx)(i.SrA, {
        size: "md",
        color: "currentColor"
      }),
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: t
      }), (0, r.jsxs)(a.Kqy, {
        direction: "horizontal",
        className: g.embedContainer,
        children: [(0, r.jsx)("img", {
          src: E,
          alt: "",
          className: g.image
        }), (0, r.jsxs)("div", {
          className: g.content,
          children: [(0, r.jsx)(a.Cts, {
            type: "beta",
            variant: "expressive"
          }), (0, r.jsx)("h2", {
            className: g.title,
            children: n
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: o
          }), (0, r.jsx)("div", {
            className: g.buttonContainer,
            children: c
          })]
        })]
      })]
    })
  },
  C = e => {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, a = t.premiumGroupInviteId, {
      inviteState: l,
      isFetching: d,
      invite: m,
      currentUser: h,
      premiumSubscription: g
    } = (0, o.cj)([f.Z, c.default, u.Z], () => {
      var e;
      return {
        inviteState: null != a ? f.Z.getInviteState(a) : _.bZ.NOT_FOUND,
        isFetching: null != a && f.Z.isFetching(a),
        invite: null != a ? null == (e = f.Z.getInvite(a)) ? true : e.invite : null,
        currentUser: c.default.getCurrentUser(),
        premiumSubscription: u.Z.getPremiumSubscription()
      }
    }, [a]);
    if (null == h) return null;
    let E = t.author,
      b = h.id === E.id;
    if (d || l === _.bZ.FETCHING || l === _.bZ.UNKNOWN) return (0, r.jsx)(s.OR, {
      isHorizontal: true
    });
    let y = (0, p.x)({
      sender: E,
      channel: n,
      isSender: b,
      inviteState: l
    });
    if (null == y) return null;
    let O = l === _.bZ.PENDING,
      v = b ? (0, r.jsx)(I, {
        disabled: !O
      }) : (0, r.jsx)(S, {
        disabled: !O,
        invite: m,
        isExistingSub: null != g
      });
    return (0, r.jsx)(T, {
      message: y.message,
      header: y.header,
      body: y.body,
      compact: i,
      actionButton: v
    })
  }