/** Chunk was on 86948 **/
/** chunk id: 153241, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk480466 = require("./480466.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk78839 = require("./78839.js"),
  Chunk51144 = require("./51144.js"),
  Chunk904399 = require("./904399.jsx"),
  Chunk80721 = require("./80721.js"),
  Chunk172782 = require("./172782.js"),
  Chunk154122 = require("./154122.jsx"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk606097 = require("./606097.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781565 = require("./781565.js"),
  Chunk383092 = require("./383092.js");

function I() {
  return (I = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function N(e) {
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

function C(e, t) {
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

function E(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let _ = e => {
    var {
      onInvite: t,
      onClose: n,
      subscriptionId: a
    } = e, s = E(e, ["onInvite", "onClose", "subscriptionId"]);
    let [l, b] = i.useState([]), [h, f] = i.useState(""), y = (0, d.Z)(h, 400), {
      eligibleUsers: v,
      fetchUsers: S,
      hasError: w,
      isFetching: I
    } = (0, g.Z)({
      subscriptionId: a,
      searchQuery: y
    }), [_, U] = i.useState(false);
    return I ? (0, r.jsx)(c.$jN, {}) : w ? (0, r.jsx)(o.Modal, N({
      size: "sm",
      title: x.intl.string(x.t.lcuio4),
      subtitle: x.intl.string(x.t["x09+CD"]),
      onClose: n,
      actions: []
    }, s)) : (0, r.jsx)(o.Modal, C(N({
      size: "md",
      title: x.intl.string(j.default["Um/7BM"]),
      subtitle: x.intl.formatToPlainString(j.default.qSWXaf, {
        totalSeats: O.v$,
        premiumGroupProductName: (0, O.sO)()
      }),
      onClose: n,
      input: (0, r.jsx)(u.Z, {
        className: P.searchbar,
        size: u.Z.Sizes.MEDIUM,
        tags: l.map(e => p.ZP.getName(e)),
        placeholder: 0 === l.length ? x.intl.string(j.default.wRS8vo) : "",
        query: h,
        onRemoveTag: e => {
          b(t => t.filter((t, n) => n !== e))
        },
        onQueryChange: f,
        onClear: () => f("")
      }),
      actions: [],
      actionBarInput: (() => {
        let e = y.length > 0 && 0 === v.length;
        return (0, r.jsx)(c.Button, {
          variant: "primary",
          disabled: 0 === l.length && !e || _,
          text: x.intl.string(j.default.TEntiZ),
          size: "md",
          fullWidth: true,
          onClick: async () => {
            if (e) return void n();
            U(true), await t(l), U(false)
          }
        })
      })()
    }, s), {
      children: (0, r.jsx)(m.Z, {
        users: v,
        isUserSelected: e => l.some(t => t.id === e.id),
        onSelectionChange: (e, t) => {
          b(n => t ? [...n, e] : n.filter(t => t.id !== e.id))
        },
        isUserDisabled: () => l.length >= O.v$,
        isFetching: I,
        onFetchMore: S,
        searchQuery: y,
        emptySearchContent: {
          header: x.intl.string(x.t["8+ywHD"]),
          body: x.intl.string(x.t.CgQmY2)
        },
        className: P.list
      })
    }))
  },
  U = e => {
    var {
      onClose: t,
      inviteUsersResult: n
    } = e, i = E(e, ["onClose", "inviteUsersResult"]);
    return (0, r.jsx)(o.ExpressiveModal, C(N({
      graphic: {
        type: "image",
        src: w.Z
      },
      gradientColor: "nitro-pink",
      title: x.intl.formatToPlainString(j.default["0yblpx"], {
        premiumGroupProductName: (0, O.sO)()
      }),
      subtitle: x.intl.format(j.default.olkQkj, {
        onClick: () => {
          t(), (0, h.openUserSettings)(b.n.SUBSCRIPTIONS_PANEL, {
            section: S.oAB.SUBSCRIPTIONS
          })
        }
      }),
      onClose: t
    }, i), {
      children: n.map(e => (0, r.jsx)(v.J, {
        recipient: e.user,
        isSuccess: e.isSuccess,
        onClose: t
      }, e.user.id))
    }))
  },
  B = e => {
    var t = I({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }(e));
    let n = (0, l.e7)([f.Z], () => f.Z.getPremiumSubscription()),
      [a, o] = i.useState([]);
    s()(null != n, "Subscription not found");
    let [c, u] = i.useState(1), d = async e => {
      let t = [];
      for (let r of e) await (0, y.r1)(n.id, r.id), t.push({
        user: r,
        isSuccess: true
      });
      o(t), u(2)
    };
    return 1 === c ? (0, r.jsx)(_, C(N({}, t), {
      onInvite: d,
      subscriptionId: n.id
    })) : 2 === c ? (0, r.jsx)(U, C(N({}, t), {
      inviteUsersResult: a
    })) : true
  }