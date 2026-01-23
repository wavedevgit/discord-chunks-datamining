/** Chunk was on web.js **/
/** chunk id: 457684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk662758 = require("./662758.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk7064 = require("./7064.jsx"),
  Chunk125040 = require("./125040.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
  } = e, [h, g] = i.useState(false), [E, y] = i.useState(false), [b, O] = i.useState(false), [v, A] = i.useState(false), [I, S] = i.useState(null), T = i.useCallback(e => {
    if (e.body.code === d.t02.INVALID_PASSWORD) throw e;
    A(true), S(e.body.message)
  }, []), C = i.useCallback((e, t) => (0, s.U_)(e, t).then(d.tEg, T), [T]), N = i.useCallback(function() {
    var e;
    let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
      i = l.A.getGuildsArray().filter(e => e.ownerId === t.id);
    (null != (e = null == p ? true : p.filter(e => e.owner_user_id === t.id)) ? e : []).length > 0 ? g(true) : i.length > 0 ? y(true) : t.isClaimed() ? (0, a.qfG)(e => (0, r.jsx)(o.default, m(_({}, e), {
      handleSubmit: e => C(e, n),
      title: n ? f.intl.string(f.t["8lQ2rR"]) : f.intl.string(f.t.jf5GGb),
      actionText: n ? f.intl.string(f.t["8lQ2rR"]) : f.intl.string(f.t.jf5GGb),
      children: n ? f.intl.string(f.t.FB4H1D) : f.intl.string(f.t.gk7h32)
    }))) : O(true)
  }, [t, C, p]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.A, {
      currentUser: t,
      disabled: n,
      handleDisableAccount: () => N(false),
      handleDeleteAccount: () => N(true)
    }), (0, r.jsx)(u.A, {
      shouldRenderOwnedTeamsModal: h,
      shouldRenderOwnedGuildsModal: E,
      shouldRenderDeleteAccountConfirmModal: b,
      shouldRenderDisableAccountErrorModal: v,
      disableAccountErrorMessage: I,
      onOwnedTeamsWarningModalClose: () => g(false),
      onOwnedGuildsWarningModalClose: () => y(false),
      onDeleteAccountConfirmModalClose: () => O(false),
      onDisableAccountErrorModalClose: () => {
        A(false), S(null)
      }
    })]
  })
}