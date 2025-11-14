/** Chunk was on web.js **/
/** chunk id: 298213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk570140 = require("./570140.js"),
  Chunk194359 = require("./194359.js"),
  Chunk855796 = require("./855796.js"),
  Chunk128064 = require("./128064.js"),
  Chunk738155 = require("./738155.js"),
  Chunk699516 = require("./699516.js"),
  Chunk801195 = require("./801195.jsx"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    userId: t,
    applicationId: n,
    location: r,
    confirmStrangerRequest: o = false
  } = e;
  return null != n ? a.Z.acceptGameFriendRequest({
    userId: t,
    applicationId: n
  }) : i.Z.acceptFriendRequest({
    userId: t,
    confirmStrangerRequest: o,
    context: {
      location: r
    }
  })
}

function m(e) {
  let {
    userId: t,
    applicationId: n,
    location: r,
    onConfirm: i,
    onCancel: a
  } = e, u = (0, o.c_)("useFriendRequestActions"), d = (0, s.q)("maybeConfirmFriendRequestAccept"), f = u || d, _ = l.Z.isStranger(t);
  return null == n && f && false !== _ ? _ && f ? void(0, c.c)({
    onConfirm: () => {
      h({
        userId: t,
        applicationId: n,
        location: r,
        confirmStrangerRequest: true
      }), null == i || i()
    },
    onCancel: () => {
      null == a || a()
    }
  }) : f ? void h({
    userId: t,
    applicationId: n,
    location: r
  }).then(e => {
    g(e, {
      userId: t,
      applicationId: n,
      location: r,
      onConfirm: i,
      onCancel: a
    }) || null == i || i()
  }).catch(e => {
    g(e, {
      userId: t,
      applicationId: n,
      location: r,
      onConfirm: i,
      onCancel: a
    })
  }) : true : h({
    userId: t,
    applicationId: n,
    location: r,
    confirmStrangerRequest: true
  }).then(() => {
    null == i || i()
  })
}

function g(e, t) {
  var n;
  return (null == (n = e.body) ? true : n.code) === u.evJ.RELATIONSHIP_INVALID_NO_CONFIRMATION ? (r.Z.dispatch({
    type: "UPDATE_STRANGER_STATUS",
    userId: t.userId,
    isStranger: true
  }), (0, c.c)({
    onConfirm: () => {
      var e;
      h(p(f({}, t), {
        confirmStrangerRequest: true
      })), null == (e = t.onConfirm) || e.call(t)
    },
    onCancel: () => {
      var e;
      null == (e = t.onCancel) || e.call(t)
    }
  }), true) : (e.ok && r.Z.dispatch({
    type: "UPDATE_STRANGER_STATUS",
    userId: t.userId,
    isStranger: false
  }), false)
}
let E = {
  removeFriend: function(e) {
    let {
      userId: t,
      applicationId: n,
      location: r
    } = e;
    null != n ? a.Z.removeGameFriend({
      userId: t,
      applicationId: n
    }) : i.Z.removeFriend(t, {
      location: r
    })
  },
  cancelFriendRequest: function(e) {
    let {
      userId: t,
      applicationId: n,
      location: r
    } = e;
    return null != n ? a.Z.cancelGameFriendRequest({
      userId: t,
      applicationId: n
    }) : i.Z.cancelFriendRequest(t, {
      location: r
    })
  },
  acceptFriendRequest: h,
  maybeConfirmFriendRequestAccept: m
}