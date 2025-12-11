/** Chunk was on 86948 **/
/** chunk id: 153241, original params: e,t,r (module,exports,require) **/
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
  Chunk51144 = require("./51144.js"),
  Chunk904399 = require("./904399.jsx"),
  Chunk80721 = require("./80721.js"),
  Chunk643281 = require("./643281.js"),
  Chunk172782 = require("./172782.js"),
  Chunk154122 = require("./154122.jsx"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk137427 = require("./137427.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk992909 = require("./992909.js"),
  Chunk135471 = require("./135471.js");

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var r, n, s = function(e, t) {
    if (null == e) return {};
    var r, n, s = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
    return s
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
  }
  return s
}
let N = e => {
    var {
      onInvite: t,
      onClose: r,
      subscriptionId: u
    } = e, d = C(e, ["onInvite", "onClose", "subscriptionId"]);
    let [b, y] = s.useState([]), [v, x] = s.useState(""), N = (0, c.Z)(v, 400), k = (0, a.e7)([m.Z], () => m.Z.getNumAvailableInvites()), {
      eligibleUsers: I,
      getNextRows: Z,
      hasError: E,
      isFetching: M
    } = (0, g.Z)({
      subscriptionId: u,
      searchQuery: N
    }), [z, U] = s.useState(false);
    return E ? (0, n.jsx)(i.Modal, w({
      size: "sm",
      title: O.intl.string(j.default["54lM5y"]),
      subtitle: O.intl.string(j.default.zrtwpV),
      onClose: r,
      actions: []
    }, d)) : 0 !== I.length || M || 0 !== N.length ? (0, n.jsx)(i.Modal, P(w({
      size: "md",
      title: O.intl.string(j.default["Um/7BM"]),
      subtitle: O.intl.format(j.default.qSWXaf, {
        totalSeats: h.v$,
        premiumGroupProductName: (0, h.sO)(),
        helpCenterLink: h.j3
      }),
      onClose: r,
      input: (0, n.jsx)(o.Z, {
        className: S.searchbar,
        size: o.Z.Sizes.MEDIUM,
        tags: b.map(e => f.ZP.getName(e)),
        placeholder: 0 === b.length ? O.intl.string(j.default.wRS8vo) : "",
        query: v,
        onRemoveTag: e => {
          y(t => t.filter((t, r) => r !== e))
        },
        onQueryChange: x,
        onClear: () => x("")
      }),
      actions: [],
      actionBarInput: (() => {
        let e = N.length > 0 && 0 === I.length;
        return (0, n.jsx)(l.Button, {
          variant: "primary",
          disabled: 0 === b.length && !e || z,
          text: O.intl.string(j.default["5fZHp3"]),
          size: "md",
          fullWidth: true,
          onClick: async () => {
            if (e) return void r();
            U(true), await t(b), U(false)
          }
        })
      })()
    }, d), {
      children: (0, n.jsx)(p.Z, {
        users: I,
        isUserSelected: e => b.some(t => t.id === e.id),
        onSelectionChange: (e, t) => {
          y(r => t ? [...r, e] : r.filter(t => t.id !== e.id))
        },
        isUserDisabled: () => b.length >= k,
        isFetching: M,
        onFetchMore: Z,
        searchQuery: N,
        emptySearchContent: {
          header: O.intl.string(j.default.gaamNe),
          body: O.intl.string(j.default.nQcM39)
        },
        className: S.list
      })
    })) : (0, n.jsx)(i.Modal, w({
      size: "sm",
      title: O.intl.string(j.default.ONaJLH),
      subtitle: O.intl.format(j.default["0LHbPc"], {
        helpCenterLink: h.j3
      }),
      onClose: r,
      actions: []
    }, d))
  },
  k = e => {
    var {
      onClose: t,
      inviteUsersResult: r
    } = e, s = C(e, ["onClose", "inviteUsersResult"]);
    return (0, n.jsx)(i.ExpressiveModal, P(w({
      graphic: {
        type: "image",
        src: x.Z
      },
      gradientColor: "nitro-pink",
      title: O.intl.formatToPlainString(j.default["0yblpx"], {
        premiumGroupProductName: (0, h.sO)()
      }),
      subtitle: O.intl.format(j.default.olkQkj, {
        onClick: () => {
          t(), (0, d.openUserSettings)(u.n.SUBSCRIPTIONS_PANEL, {
            section: v.oAB.SUBSCRIPTIONS
          })
        }
      }),
      onClose: t
    }, s), {
      children: r.map(e => (0, n.jsx)(y.J, {
        recipient: e.user,
        isSuccess: e.isSuccess,
        onClose: t
      }, e.user.id))
    }))
  },
  I = e => {
    var {
      subscription: t
    } = e, r = C(e, ["subscription"]);
    let [i, a] = s.useState([]), [l, o] = s.useState(1), c = async e => {
      let r = new Map,
        n = [];
      for (let t of e) r.set(t.id, t), n.push(t.id);
      let s = await (0, b.cD)(t.id, n);
      if (null == s) {
        a(e.map(e => ({
          user: e,
          isSuccess: false
        }))), o(2);
        return
      }
      let {
        invitedUsers: i,
        ineligibleUsers: l
      } = s;
      a([...i.map(e => ({
        user: r.get(e),
        isSuccess: true
      })), ...l.map(e => ({
        user: r.get(e),
        isSuccess: false
      }))]), o(2)
    };
    return 1 === l ? (0, n.jsx)(N, P(w({}, r), {
      onInvite: c,
      subscriptionId: t.id
    })) : 2 === l ? (0, n.jsx)(k, P(w({}, r), {
      inviteUsersResult: i
    })) : true
  }