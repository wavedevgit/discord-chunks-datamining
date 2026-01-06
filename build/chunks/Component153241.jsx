/** Chunk was on 86948 **/
/** chunk id: 153241, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk480466 = require("./480466.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk904399 = require("./904399.jsx"),
  Chunk80721 = require("./80721.js"),
  Chunk643281 = require("./643281.js"),
  Chunk172782 = require("./172782.js"),
  Chunk154122 = require("./154122.jsx"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk992909 = require("./992909.js"),
  Chunk135471 = require("./135471.js");

function S(e) {
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

function _(e, t) {
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

function x(e, t) {
  if (null == e) return {};
  var n, r, s = function(e, t) {
    if (null == e) return {};
    var n, r, s = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
    return s
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
  }
  return s
}
let C = e => {
    var {
      onInvite: t,
      onClose: n,
      subscriptionId: u
    } = e, p = x(e, ["onInvite", "onClose", "subscriptionId"]);
    let [g, m] = s.useState([]), [j, C] = s.useState(""), N = (0, c.Z)(j, 400), I = (0, a.e7)([b.Z], () => b.Z.getNumAvailableInvites());
    s.useEffect(() => {
      f.default.track(E.rMx.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED)
    }, []);
    let {
      eligibleUsers: w,
      getNextRows: D,
      hasError: k,
      isFetching: M
    } = (0, v.Z)({
      subscriptionId: u,
      searchQuery: N
    }), [T, U] = s.useState(false);
    return k ? (0, r.jsx)(l.Modal, S({
      size: "sm",
      title: P.intl.string(O.default["54lM5y"]),
      subtitle: P.intl.string(O.default.zrtwpV),
      onClose: n,
      actions: []
    }, p)) : 0 !== w.length || M || 0 !== N.length ? (0, r.jsx)(l.Modal, _(S({
      size: "md",
      title: P.intl.string(O.default["Um/7BM"]),
      subtitle: P.intl.format(O.default.qSWXaf, {
        totalSeats: y.v$,
        premiumGroupProductName: (0, y.sO)(),
        helpCenterLink: y.j3
      }),
      onClose: n,
      input: (0, r.jsx)(o.Z, {
        className: R.searchbar,
        size: o.Z.Sizes.MEDIUM,
        tags: g.map(e => h.ZP.getName(e)),
        placeholder: 0 === g.length ? P.intl.string(O.default.wRS8vo) : "",
        query: j,
        onRemoveTag: e => {
          m(t => t.filter((t, n) => n !== e))
        },
        onQueryChange: C,
        onClear: () => C("")
      }),
      actions: [],
      actionBarInput: (() => {
        let e = N.length > 0 && 0 === w.length;
        return (0, r.jsx)(i.Button, {
          variant: "primary",
          disabled: 0 === g.length && !e || T,
          text: P.intl.string(O.default["5fZHp3"]),
          size: "md",
          fullWidth: true,
          onClick: async () => {
            if (e) return void n();
            f.default.track(E.rMx.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
              invited_user_ids: g.map(e => e.id)
            }), U(true), await t(g), U(false)
          }
        })
      })()
    }, p), {
      children: (0, r.jsx)(d.Z, {
        users: w,
        isUserSelected: e => g.some(t => t.id === e.id),
        onSelectionChange: (e, t) => {
          m(n => t ? [...n, e] : n.filter(t => t.id !== e.id))
        },
        isUserDisabled: e => g.length >= I && !g.some(t => t.id === e.id),
        isFetching: M,
        onFetchMore: D,
        searchQuery: N,
        emptySearchContent: {
          header: P.intl.string(O.default.gaamNe),
          body: P.intl.string(O.default.nQcM39)
        },
        className: R.list
      })
    })) : (0, r.jsx)(l.Modal, S({
      size: "sm",
      title: P.intl.string(O.default.ONaJLH),
      subtitle: P.intl.format(O.default["0LHbPc"], {
        helpCenterLink: y.j3
      }),
      onClose: n,
      actions: []
    }, p))
  },
  N = e => {
    var {
      onClose: t,
      inviteUsersResult: n
    } = e, s = x(e, ["onClose", "inviteUsersResult"]);
    return (0, r.jsx)(l.ExpressiveModal, _(S({
      graphic: {
        type: "image",
        src: j.Z
      },
      gradientColor: "nitro-pink",
      title: P.intl.formatToPlainString(O.default.MIiPur, {
        premiumGroupProductName: (0, y.sO)(),
        sentCount: n.filter(e => e.isSuccess).length
      }),
      subtitle: P.intl.format(O.default.olkQkj, {
        onClick: () => {
          t(), (0, p.openUserSettings)(u.n.SUBSCRIPTIONS_PANEL, {
            section: E.oAB.SUBSCRIPTIONS
          })
        }
      }),
      onClose: t
    }, s), {
      children: (0, r.jsx)("div", {
        className: R.inviteUsersResultContainer,
        children: n.map(e => (0, r.jsx)(m.J, {
          recipient: e.user,
          isSuccess: e.isSuccess,
          onClose: t
        }, e.user.id))
      })
    }))
  },
  I = e => {
    var {
      subscription: t
    } = e, n = x(e, ["subscription"]);
    let [l, a] = s.useState([]), [i, o] = s.useState(1), c = async e => {
      let n = new Map,
        r = [];
      for (let t of e) n.set(t.id, t), r.push(t.id);
      let s = await (0, g.cD)(t.id, r);
      if (null == s) {
        f.default.track(E.rMx.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
          successful_user_ids: [],
          failed_user_ids: r
        }), a(e.map(e => ({
          user: e,
          isSuccess: false
        }))), o(2);
        return
      }
      let {
        invitedUsers: l,
        ineligibleUsers: i
      } = s;
      f.default.track(E.rMx.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
        successful_user_ids: l,
        failed_user_ids: i
      }), a([...l.map(e => ({
        user: n.get(e),
        isSuccess: true
      })), ...i.map(e => ({
        user: n.get(e),
        isSuccess: false
      }))]), o(2)
    };
    return 1 === i ? (0, r.jsx)(C, _(S({}, n), {
      onInvite: c,
      subscriptionId: t.id
    })) : 2 === i ? (0, r.jsx)(N, _(S({}, n), {
      inviteUsersResult: l
    })) : true
  }