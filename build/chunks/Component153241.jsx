/** Chunk was on 86948 **/
/** chunk id: 153241, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => N
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
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk992909 = require("./992909.js"),
  Chunk135471 = require("./135471.js");

function R(e) {
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

function x(e, t) {
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

function C(e, t) {
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
let E = e => {
    var {
      onInvite: t,
      onClose: n,
      subscriptionId: u
    } = e, p = C(e, ["onInvite", "onClose", "subscriptionId"]);
    let [d, v] = s.useState([]), [y, S] = s.useState(""), E = (0, c.Z)(y, 400), w = (0, a.e7)([g.Z], () => g.Z.getNumAvailableInvites()), {
      eligibleUsers: N,
      getNextRows: D,
      hasError: k,
      isFetching: _
    } = (0, b.Z)({
      subscriptionId: u,
      searchQuery: E
    }), [T, I] = s.useState(false);
    return k ? (0, r.jsx)(l.Modal, R({
      size: "sm",
      title: j.intl.string(O.default["54lM5y"]),
      subtitle: j.intl.string(O.default.zrtwpV),
      onClose: n,
      actions: []
    }, p)) : 0 !== N.length || _ || 0 !== E.length ? (0, r.jsx)(l.Modal, x(R({
      size: "md",
      title: j.intl.string(O.default["Um/7BM"]),
      subtitle: j.intl.format(O.default.qSWXaf, {
        totalSeats: m.v$,
        premiumGroupProductName: (0, m.sO)(),
        helpCenterLink: m.j3
      }),
      onClose: n,
      input: (0, r.jsx)(o.Z, {
        className: P.searchbar,
        size: o.Z.Sizes.MEDIUM,
        tags: d.map(e => f.ZP.getName(e)),
        placeholder: 0 === d.length ? j.intl.string(O.default.wRS8vo) : "",
        query: y,
        onRemoveTag: e => {
          v(t => t.filter((t, n) => n !== e))
        },
        onQueryChange: S,
        onClear: () => S("")
      }),
      actions: [],
      actionBarInput: (() => {
        let e = E.length > 0 && 0 === N.length;
        return (0, r.jsx)(i.Button, {
          variant: "primary",
          disabled: 0 === d.length && !e || T,
          text: j.intl.string(O.default["5fZHp3"]),
          size: "md",
          fullWidth: true,
          onClick: async () => {
            if (e) return void n();
            I(true), await t(d), I(false)
          }
        })
      })()
    }, p), {
      children: (0, r.jsx)(h.Z, {
        users: N,
        isUserSelected: e => d.some(t => t.id === e.id),
        onSelectionChange: (e, t) => {
          v(n => t ? [...n, e] : n.filter(t => t.id !== e.id))
        },
        isUserDisabled: e => d.length >= w && !d.some(t => t.id === e.id),
        isFetching: _,
        onFetchMore: D,
        searchQuery: E,
        emptySearchContent: {
          header: j.intl.string(O.default.gaamNe),
          body: j.intl.string(O.default.nQcM39)
        },
        className: P.list
      })
    })) : (0, r.jsx)(l.Modal, R({
      size: "sm",
      title: j.intl.string(O.default.ONaJLH),
      subtitle: j.intl.format(O.default["0LHbPc"], {
        helpCenterLink: m.j3
      }),
      onClose: n,
      actions: []
    }, p))
  },
  w = e => {
    var {
      onClose: t,
      inviteUsersResult: n
    } = e, s = C(e, ["onClose", "inviteUsersResult"]);
    return (0, r.jsx)(l.ExpressiveModal, x(R({
      graphic: {
        type: "image",
        src: S.Z
      },
      gradientColor: "nitro-pink",
      title: j.intl.formatToPlainString(O.default.MIiPur, {
        premiumGroupProductName: (0, m.sO)(),
        sentCount: n.filter(e => e.isSuccess).length
      }),
      subtitle: j.intl.format(O.default.olkQkj, {
        onClick: () => {
          t(), (0, p.openUserSettings)(u.n.SUBSCRIPTIONS_PANEL, {
            section: y.oAB.SUBSCRIPTIONS
          })
        }
      }),
      onClose: t
    }, s), {
      children: (0, r.jsx)("div", {
        className: P.inviteUsersResultContainer,
        children: n.map(e => (0, r.jsx)(v.J, {
          recipient: e.user,
          isSuccess: e.isSuccess,
          onClose: t
        }, e.user.id))
      })
    }))
  },
  N = e => {
    var {
      subscription: t
    } = e, n = C(e, ["subscription"]);
    let [l, a] = s.useState([]), [i, o] = s.useState(1), c = async e => {
      let n = new Map,
        r = [];
      for (let t of e) n.set(t.id, t), r.push(t.id);
      let s = await (0, d.cD)(t.id, r);
      if (null == s) {
        a(e.map(e => ({
          user: e,
          isSuccess: false
        }))), o(2);
        return
      }
      let {
        invitedUsers: l,
        ineligibleUsers: i
      } = s;
      a([...l.map(e => ({
        user: n.get(e),
        isSuccess: true
      })), ...i.map(e => ({
        user: n.get(e),
        isSuccess: false
      }))]), o(2)
    };
    return 1 === i ? (0, r.jsx)(E, x(R({}, n), {
      onInvite: c,
      subscriptionId: t.id
    })) : 2 === i ? (0, r.jsx)(w, x(R({}, n), {
      inviteUsersResult: l
    })) : true
  }