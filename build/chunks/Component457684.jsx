/** Chunk was on 5606 **/
/** chunk id: 457684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  let {
    currentUser: t,
    userTeamsLoading: n,
    userTeams: _
  } = e, [m, g] = i.useState(false), [f, b] = i.useState(false), [h, A] = i.useState(false), [E, x] = i.useState(false), [O, C] = i.useState(null), y = i.useCallback(e => {
    if (e.body.code === u.t02.INVALID_PASSWORD) throw e;
    x(true), C(e.body.message)
  }, []), j = i.useCallback((e, t) => (0, s.U_)(e, t).then(u.tEg, y), [y]), T = i.useCallback(function() {
    var e;
    let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
      i = o.A.getGuildsArray().filter(e => e.ownerId === t.id);
    (null != (e = null == _ ? true : _.filter(e => e.owner_user_id === t.id)) ? e : []).length > 0 ? g(true) : i.length > 0 ? b(true) : t.isClaimed() ? (0, l.qfG)(e => {
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
        handleSubmit: e => j(e, n),
        title: n ? p.intl.string(p.t["8lQ2rR"]) : p.intl.string(p.t.jf5GGb),
        actionText: n ? p.intl.string(p.t["8lQ2rR"]) : p.intl.string(p.t.jf5GGb),
        children: n ? p.intl.string(p.t.FB4H1D) : p.intl.string(p.t.gk7h32)
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
    }) : A(true)
  }, [t, j, _]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.A, {
      currentUser: t,
      disabled: n,
      handleDisableAccount: () => T(false),
      handleDeleteAccount: () => T(true)
    }), (0, r.jsx)(d.A, {
      shouldRenderOwnedTeamsModal: m,
      shouldRenderOwnedGuildsModal: f,
      shouldRenderDeleteAccountConfirmModal: h,
      shouldRenderDisableAccountErrorModal: E,
      disableAccountErrorMessage: O,
      onOwnedTeamsWarningModalClose: () => g(false),
      onOwnedGuildsWarningModalClose: () => b(false),
      onDeleteAccountConfirmModalClose: () => A(false),
      onDisableAccountErrorModalClose: () => {
        x(false), C(null)
      }
    })]
  })
}