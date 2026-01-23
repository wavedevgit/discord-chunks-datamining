/** Chunk was on web.js **/
/** chunk id: 607272, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk923457 = require("./923457.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49229 = require("./49229.js"),
  Chunk274294 = require("./274294.js"),
  Chunk207560 = require("./207560.js"),
  Chunk900342 = require("./900342.js"),
  Chunk994500 = require("./994500.js"),
  Chunk623605 = require("./623605.jsx"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    userId: t,
    applicationId: n,
    location: r,
    confirmStrangerRequest: i = false
  } = e;
  return null != n ? s.A.acceptGameFriendRequest({
    userId: t,
    applicationId: n
  }) : a.A.acceptFriendRequest({
    userId: t,
    confirmStrangerRequest: i,
    context: {
      location: r
    }
  })
}

function g(e) {
  let {
    userId: t,
    applicationId: n,
    location: i,
    onConfirm: a,
    onCancel: s
  } = e, d = (0, o.To)(r.p.FRIEND_REQUEST_STRANGER_CONFIRMATION), f = (0, l._)("maybeConfirmFriendRequestAccept"), p = d || f, _ = c.A.isStranger(t);
  return null == n && p && false !== _ ? _ && p ? void(0, u.B)({
    onConfirm: () => {
      m({
        userId: t,
        applicationId: n,
        location: i,
        confirmStrangerRequest: true
      }), null == a || a()
    },
    onCancel: () => {
      null == s || s()
    }
  }) : p ? void m({
    userId: t,
    applicationId: n,
    location: i
  }).then(e => {
    E(e, {
      userId: t,
      applicationId: n,
      location: i,
      onConfirm: a,
      onCancel: s
    }) || null == a || a()
  }).catch(e => {
    E(e, {
      userId: t,
      applicationId: n,
      location: i,
      onConfirm: a,
      onCancel: s
    })
  }) : true : m({
    userId: t,
    applicationId: n,
    location: i,
    confirmStrangerRequest: true
  }).then(() => {
    null == a || a()
  })
}

function E(e, t) {
  var n;
  return (null == (n = e.body) ? true : n.code) === d.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION ? (i.h.dispatch({
    type: "UPDATE_STRANGER_STATUS",
    userId: t.userId,
    isStranger: true
  }), (0, u.B)({
    onConfirm: () => {
      var e;
      m(h(p({}, t), {
        confirmStrangerRequest: true
      })), null == (e = t.onConfirm) || e.call(t)
    },
    onCancel: () => {
      var e;
      null == (e = t.onCancel) || e.call(t)
    }
  }), true) : (e.ok && i.h.dispatch({
    type: "UPDATE_STRANGER_STATUS",
    userId: t.userId,
    isStranger: false
  }), false)
}
let y = {
  removeFriend: function(e) {
    let {
      userId: t,
      applicationId: n,
      location: r
    } = e;
    null != n ? s.A.removeGameFriend({
      userId: t,
      applicationId: n
    }) : a.A.removeFriend(t, {
      location: r
    })
  },
  cancelFriendRequest: function(e) {
    let {
      userId: t,
      applicationId: n,
      location: r
    } = e;
    return null != n ? s.A.cancelGameFriendRequest({
      userId: t,
      applicationId: n
    }) : a.A.cancelFriendRequest(t, {
      location: r
    })
  },
  acceptFriendRequest: m,
  maybeConfirmFriendRequestAccept: g
}