/** Chunk was on 78376 **/
/** chunk id: 457684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    currentUser: t,
    userTeamsLoading: n,
    userTeams: p
  } = e, [m, g] = i.useState(false), [A, f] = i.useState(false), [b, h] = i.useState(false), [E, O] = i.useState(false), [C, x] = i.useState(null), S = i.useCallback(e => {
    if (e.body.code === u.t02.INVALID_PASSWORD) throw e;
    O(true), x(e.body.message)
  }, []), T = i.useCallback((e, t) => (0, s.U_)(e, t).then(u.tEg, S), [S]), I = i.useCallback(function() {
    var e;
    let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
      i = o.A.getGuildsArray().filter(e => e.ownerId === t.id);
    (null != (e = null == p ? true : p.filter(e => e.owner_user_id === t.id)) ? e : []).length > 0 ? g(true) : i.length > 0 ? f(true) : t.isClaimed() ? (0, l.qfG)(e => {
      var t, i;
      return (0, r.jsx)(a.default, (t = function(e) {
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
      }({}, e), i = i = {
        handleSubmit: e => T(e, n),
        title: n ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
        actionText: n ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
        children: n ? _.intl.string(_.t.FB4H1D) : _.intl.string(_.t.gk7h32)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }) : h(true)
  }, [t, T, p]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.A, {
      currentUser: t,
      disabled: n,
      handleDisableAccount: () => I(false),
      handleDeleteAccount: () => I(true)
    }), (0, r.jsx)(d.A, {
      shouldRenderOwnedTeamsModal: m,
      shouldRenderOwnedGuildsModal: A,
      shouldRenderDeleteAccountConfirmModal: b,
      shouldRenderDisableAccountErrorModal: E,
      disableAccountErrorMessage: C,
      onOwnedTeamsWarningModalClose: () => g(false),
      onOwnedGuildsWarningModalClose: () => f(false),
      onDeleteAccountConfirmModalClose: () => h(false),
      onDisableAccountErrorModalClose: () => {
        O(false), x(null)
      }
    })]
  })
}