/** Chunk was on 73987 **/
/** chunk id: 773486, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk718213 = require("./718213.js"),
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

function _(e, t) {
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
      b = x(e, ["onInvite", "onClose", "subscriptionId"]),
      [y, P] = s.useState([]),
      [E, w] = s.useState(""),
      N = (0, o.A)(E, 400),
      C = (0, l.bG)([m.A], () => m.A.getNumAvailableInvites());
    s.useEffect(() => {
      d.default.track(O.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED)
    }, []);
    let {
      eligibleUsers: M,
      getNextRows: R,
      hasError: k,
      isFetching: A
    } = (0, g.A)({
      subscriptionId: u,
      searchQuery: N
    }), [U, D] = s.useState(false), T = s.useCallback(e => {
      P(t => t.filter(t => !e.has(t.id)))
    }, [P]), z = s.useMemo(() => y.map(e => ({
      id: e.id,
      label: f.Ay.getName(e)
    })), [y]);
    return k ? (0, n.jsx)(i.Modal, I({
      size: "sm",
      title: j.intl.string(S.default["54lM5y"]),
      subtitle: j.intl.string(S.default.zrtwpV),
      onClose: c,
      actions: []
    }, b)) : 0 !== M.length || A || 0 !== N.length ? (0, n.jsx)(i.Modal, _(I({
      size: "md",
      title: j.intl.string(S.default["Um/7BM"]),
      subtitle: j.intl.format(S.default.qSWXaf, {
        totalSeats: h.LM,
        premiumGroupProductName: (0, h.DP)(),
        helpCenterLink: h.TE
      }),
      onClose: c,
      input: (0, n.jsx)("div", {
        className: v.c,
        children: (0, n.jsx)(a.ksK, {
          value: E,
          onChange: w,
          placeholder: 0 === y.length ? j.intl.string(S.default.wRS8vo) : "",
          leading: z.length > 0 ? {
            type: "tags",
            label: j.intl.string(S.default["Um/7BM"]),
            items: z,
            onRemove: T
          } : true
        })
      }),
      actions: [],
      actionBarInput: (t = N.length > 0 && 0 === M.length, (0, n.jsx)(a.Button, {
        variant: "primary",
        disabled: 0 === y.length && !t || U,
        text: j.intl.string(S.default["5fZHp3"]),
        size: "md",
        fullWidth: true,
        onClick: async () => {
          t ? c() : (d.default.track(O.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
            invited_user_ids: y.map(e => e.id)
          }), D(true), await r(y), D(false))
        }
      }))
    }, b), {
      children: (0, n.jsx)(p.A, {
        users: M,
        isUserSelected: e => y.some(t => t.id === e.id),
        onSelectionChange: (e, t) => {
          P(r => t ? [...r, e] : r.filter(t => t.id !== e.id))
        },
        isUserDisabled: e => y.length >= C && !y.some(t => t.id === e.id) || !e.eligible,
        isFetching: A,
        onFetchMore: R,
        searchQuery: N,
        emptySearchContent: {
          header: j.intl.string(S.default.gaamNe),
          body: j.intl.string(S.default.nQcM39)
        },
        className: v.p_,
        tooltipConfig: {
          text: e => j.intl.formatToPlainString(S.default["5tzM9V"], {
            disabledUserName: f.Ay.getName(e),
            premiumGroupProductName: (0, h.DP)()
          }),
          isActive: (e, t) => !!(t && !e.eligible)
        }
      })
    })) : (0, n.jsx)(i.Modal, I({
      size: "sm",
      title: j.intl.string(S.default.ONaJLH),
      subtitle: j.intl.format(S.default["0LHbPc"], {
        helpCenterLink: h.TE
      }),
      onClose: c,
      actions: []
    }, b))
  },
  w = e => {
    let {
      onClose: t,
      inviteUsersResult: r
    } = e, s = x(e, ["onClose", "inviteUsersResult"]);
    return (0, n.jsx)(i.ExpressiveModal, _(I({
      graphic: {
        type: "image",
        src: P.A
      },
      gradientColor: "nitro-pink",
      title: j.intl.formatToPlainString(S.default.MIiPur, {
        premiumGroupProductName: (0, h.DP)(),
        sentCount: r.filter(e => e.isSuccess).length
      }),
      subtitle: j.intl.format(S.default.olkQkj, {
        onClick: () => {
          t(), (0, u.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL, {
            section: O.nc_.SUBSCRIPTIONS
          })
        }
      }),
      onClose: t
    }, s), {
      children: (0, n.jsx)("div", {
        className: v.yk,
        children: r.map(e => (0, n.jsx)(y.q, {
          recipient: e.user,
          isSuccess: e.isSuccess,
          onClose: t
        }, e.user.id))
      })
    }))
  },
  N = e => {
    let {
      subscription: t
    } = e, r = x(e, ["subscription"]), [i, l] = s.useState([]), [a, o] = s.useState(1), c = async e => {
      let r = new Map,
        n = [];
      for (let t of e) r.set(t.id, t), n.push(t.id);
      let s = await (0, b.n2)(t.id, n);
      if (null == s) {
        d.default.track(O.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
          successful_user_ids: [],
          failed_user_ids: n
        }), l(e.map(e => ({
          user: e,
          isSuccess: false
        }))), o(2);
        return
      }
      let {
        invitedUsers: i,
        ineligibleUsers: a
      } = s;
      d.default.track(O.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
        successful_user_ids: i,
        failed_user_ids: a
      }), l([...i.map(e => ({
        user: r.get(e),
        isSuccess: true
      })), ...a.map(e => ({
        user: r.get(e),
        isSuccess: false
      }))]), o(2)
    };
    return 1 === a ? (0, n.jsx)(E, _(I({}, r), {
      onInvite: c,
      subscriptionId: t.id
    })) : 2 === a ? (0, n.jsx)(w, _(I({}, r), {
      inviteUsersResult: i
    })) : true
  }