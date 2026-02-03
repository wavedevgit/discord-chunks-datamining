/** Chunk was on 73987 **/
/** chunk id: 773486, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk718213 = require("./718213.js"),
  Chunk964486 = require("./964486.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk761546 = require("./761546.jsx"),
  Chunk677185 = require("./677185.js"),
  Chunk233317 = require("./233317.js"),
  Chunk783437 = require("./783437.js"),
  Chunk298492 = require("./298492.jsx"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk300296 = require("./300296.js"),
  Chunk788396 = require("./788396.js");

function I(e) {
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

function w(e, t) {
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

function x(e, t) {
  if (null == e) return {};
  var r, n, s, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (s = 0, r = Reflect.ownKeys(e); s < r.length; s++) n = r[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var r, n, s = {},
        i = Object.getOwnPropertyNames(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
      return s
    }(e, t), Object.getOwnPropertySymbols)
    for (s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++) n = r[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let E = e => {
    let t, {
        onInvite: r,
        onClose: c,
        subscriptionId: u
      } = e,
      d = x(e, ["onInvite", "onClose", "subscriptionId"]),
      [m, h] = s.useState([]),
      [_, E] = s.useState(""),
      N = (0, o.A)(_, 400),
      C = (0, l.bG)([g.A], () => g.A.getNumAvailableInvites()),
      {
        eligibleUsers: M,
        getNextRows: R,
        hasError: k,
        isFetching: A
      } = (0, y.A)({
        subscriptionId: u,
        searchQuery: N
      }),
      [U, D] = s.useState(false),
      T = s.useCallback(e => {
        h(t => t.filter(t => !e.has(t.id)))
      }, [h]),
      z = s.useMemo(() => m.map(e => ({
        id: e.id,
        label: p.Ay.getName(e)
      })), [m]);
    return k ? (0, n.jsx)(i.Modal, I({
      size: "sm",
      title: P.intl.string(j.default["54lM5y"]),
      subtitle: P.intl.string(j.default.zrtwpV),
      onClose: c,
      actions: []
    }, d)) : 0 !== M.length || A || 0 !== N.length ? (0, n.jsx)(i.Modal, w(I({
      size: "md",
      title: P.intl.string(j.default["Um/7BM"]),
      subtitle: P.intl.format(j.default.qSWXaf, {
        totalSeats: O.LM,
        premiumGroupProductName: (0, O.DP)(),
        helpCenterLink: O.TE
      }),
      onClose: c,
      input: (0, n.jsx)("div", {
        className: v.c,
        children: (0, n.jsx)(a.ksK, {
          value: _,
          onChange: E,
          placeholder: 0 === m.length ? P.intl.string(j.default.wRS8vo) : "",
          leading: {
            type: "tags",
            label: P.intl.string(j.default["Um/7BM"]),
            items: z,
            onRemove: T
          }
        })
      }),
      actions: [],
      actionBarInput: (t = N.length > 0 && 0 === M.length, (0, n.jsx)(a.Button, {
        variant: "primary",
        disabled: 0 === m.length && !t || U,
        text: P.intl.string(j.default["5fZHp3"]),
        size: "md",
        fullWidth: true,
        onClick: async () => {
          t ? c() : (f.default.track(S.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
            invited_user_ids: m.map(e => e.id)
          }), D(true), await r(m), D(false))
        }
      }))
    }, d), {
      children: (0, n.jsx)(b.A, {
        users: M,
        isUserSelected: e => m.some(t => t.id === e.id),
        onSelectionChange: (e, t) => {
          h(r => t ? [...r, e] : r.filter(t => t.id !== e.id)), t && E("")
        },
        isUserDisabled: e => m.length >= C && !m.some(t => t.id === e.id) || !e.eligible,
        isFetching: A,
        onFetchMore: R,
        searchQuery: N,
        emptySearchContent: {
          header: P.intl.string(j.default.gaamNe),
          body: P.intl.string(j.default.nQcM39)
        },
        className: v.p_,
        tooltipConfig: {
          text: e => P.intl.formatToPlainString(j.default["5tzM9V"], {
            disabledUserName: p.Ay.getName(e),
            premiumGroupProductName: (0, O.DP)()
          }),
          isActive: (e, t) => !!(t && !e.eligible)
        }
      })
    })) : (0, n.jsx)(i.Modal, I({
      size: "sm",
      title: P.intl.string(j.default.ONaJLH),
      subtitle: P.intl.format(j.default["0LHbPc"], {
        helpCenterLink: O.TE
      }),
      onClose: c,
      actions: []
    }, d))
  },
  N = e => {
    let {
      onClose: t,
      inviteUsersResult: r
    } = e, s = x(e, ["onClose", "inviteUsersResult"]);
    return (0, n.jsx)(i.ExpressiveModal, w(I({
      graphic: {
        type: "image",
        src: _.A
      },
      gradientColor: "nitro-pink",
      title: P.intl.formatToPlainString(j.default.MIiPur, {
        premiumGroupProductName: (0, O.DP)(),
        sentCount: r.filter(e => e.isSuccess).length
      }),
      subtitle: P.intl.format(j.default.olkQkj, {
        onClick: () => {
          t(), (0, d.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL, {
            section: S.nc_.SUBSCRIPTIONS
          })
        }
      }),
      onClose: t
    }, s), {
      children: (0, n.jsx)("div", {
        className: v.yk,
        children: r.map(e => (0, n.jsx)(h.q, {
          recipient: e.user,
          isSuccess: e.isSuccess,
          onClose: t
        }, e.user.id))
      })
    }))
  },
  C = e => {
    let {
      subscription: t,
      isFromPurchaseFlow: r = false
    } = e, i = x(e, ["subscription", "isFromPurchaseFlow"]), [l, a] = s.useState([]);
    (0, c.Ay)(() => {
      f.default.track(S.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED, {
        source: r ? "purchase_flow" : "subscription_card"
      })
    });
    let [o, u] = s.useState(1), d = async e => {
      let r = new Map,
        n = [];
      for (let t of e) r.set(t.id, t), n.push(t.id);
      let s = await (0, m.n2)(t.id, n);
      if (null == s) {
        f.default.track(S.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
          successful_user_ids: [],
          failed_user_ids: n
        }), a(e.map(e => ({
          user: e,
          isSuccess: false
        }))), u(2);
        return
      }
      let {
        invitedUsers: i,
        ineligibleUsers: l
      } = s;
      f.default.track(S.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
        successful_user_ids: i,
        failed_user_ids: l
      }), a([...i.map(e => ({
        user: r.get(e),
        isSuccess: true
      })), ...l.map(e => ({
        user: r.get(e),
        isSuccess: false
      }))]), u(2)
    };
    return 1 === o ? (0, n.jsx)(E, w(I({}, i), {
      onInvite: d,
      subscriptionId: t.id
    })) : 2 === o ? (0, n.jsx)(N, w(I({}, i), {
      inviteUsersResult: l
    })) : true
  }