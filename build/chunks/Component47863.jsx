/** Chunk was on web.js **/
/** chunk id: 47863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk355497 = require("./355497.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk888256 = require("./888256.jsx"),
  Chunk288260 = require("./288260.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    currentUser: t,
    userTeamsLoading: n,
    userTeams: p
  } = e, [h, g] = i.useState(false), [E, b] = i.useState(false), [y, O] = i.useState(false), [v, S] = i.useState(false), [I, T] = i.useState(null), C = i.useCallback(e => {
    if (e.body.code === d.evJ.INVALID_PASSWORD) throw e;
    S(true), T(e.body.message)
  }, []), A = i.useCallback((e, t) => (0, o.ss)(e, t).then(d.dG4, C), [C]), N = i.useCallback(function() {
    var e;
    let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
      i = l.Z.getGuildsArray().filter(e => e.ownerId === t.id);
    return (null != (e = null == p ? true : p.filter(e => e.owner_user_id === t.id)) ? e : []).length > 0 ? void g(true) : i.length > 0 ? void b(true) : void(t.isClaimed() ? (0, a.h7j)(e => (0, r.jsx)(s.default, m(_({}, e), {
      handleSubmit: e => A(e, n),
      title: n ? f.intl.string(f.t["8lQ2rR"]) : f.intl.string(f.t.jf5GGb),
      actionText: n ? f.intl.string(f.t["8lQ2rR"]) : f.intl.string(f.t.jf5GGb),
      children: n ? f.intl.string(f.t.FB4H1D) : f.intl.string(f.t.gk7h32)
    }))) : O(true))
  }, [t, A, p]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      currentUser: t,
      disabled: n,
      handleDisableAccount: () => N(false),
      handleDeleteAccount: () => N(true)
    }), (0, r.jsx)(u.Z, {
      shouldRenderOwnedTeamsModal: h,
      shouldRenderOwnedGuildsModal: E,
      shouldRenderDeleteAccountConfirmModal: y,
      shouldRenderDisableAccountErrorModal: v,
      disableAccountErrorMessage: I,
      onOwnedTeamsWarningModalClose: () => g(false),
      onOwnedGuildsWarningModalClose: () => b(false),
      onDeleteAccountConfirmModalClose: () => O(false),
      onDisableAccountErrorModalClose: () => {
        S(false), T(null)
      }
    })]
  })
}