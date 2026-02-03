/** Chunk was on 43549 **/
/** chunk id: 899847, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Ay: () => I,
  HB: () => f,
  Xz: () => C,
  e$: () => A,
  nt: () => S
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk873298 = require("./873298.js"),
  Chunk73153 = require("./73153.js"),
  Chunk979286 = require("./979286.js"),
  Chunk159201 = require("./159201.js"),
  Chunk761821 = require("./761821.js"),
  Chunk954571 = require("./954571.js"),
  Chunk842144 = require("./842144.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js");

function c(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      var i;
      i = n[e], e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = i
    })
  }
  return t
}
async function T(t) {
  let e = new Set;
  t.forEach(t => {
    if (null != t.invoice_items && t.invoice_items.length > 0) {
      let n = t.invoice_items[0];
      null != n.sku_id && e.add(n.sku_id)
    }
  }), await Promise.all(Array.from(e).map(t => (0, a.RE)(t)))
}
async function S(t, e) {
  await i.Bo.patch({
    url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: t,
      link_status: e
    },
    rejectWithError: false
  }).then(t => {
    let {
      body: e
    } = t;
    return r.h.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
      linkedUsers: e
    }), e
  })
}
async function A(t) {
  await i.Bo.del({
    url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: t
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: n
    } = e;
    return r.h.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
      linkedUsers: n,
      deletedUserId: t
    }), n
  })
}
async function f() {
  await i.Bo.get({
    url: _.Rsh.FAMILY_CENTER_LINK_CODE,
    rejectWithError: false
  }).then(t => {
    let {
      body: e
    } = t, n = e.link_code;
    return r.h.dispatch({
      type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
      linkCode: n
    }), n
  })
}
async function C() {
  await i.Bo.post({
    url: _.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS,
    rejectWithError: true
  })
}
let I = {
  async initialPageLoad() {
    var t, e, n, l, a, o, u, s, d, E, c;
    r.h.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let {
      body: S
    } = await i.Bo.get({
      url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME,
      rejectWithError: false
    }), {
      teen_audit_log: A,
      linked_users: f,
      users: C,
      age_group: I
    } = S, N = {
      teenId: null == A ? true : A.teen_user_id,
      rangeStartId: null == A ? true : A.range_start_id,
      totals: null != (t = null == A ? true : A.totals) ? t : {},
      actions: null != (e = null == A ? true : A.actions) ? e : [],
      users: null != (n = null == A ? true : A.users) ? n : [],
      guilds: null != (l = null == A ? true : A.guilds) ? l : [],
      topUserActivities: null != (a = null == A ? true : A.top_user_activities) ? a : [],
      topGuildActivities: null != (o = null == A ? true : A.top_guild_activities) ? o : [],
      totalSpendAmount: null != (u = null == A || null == (E = A.total_spend) ? true : E.amount) ? u : null,
      totalSpendCurrency: null != (s = null == A || null == (c = A.total_spend) ? true : c.currency) ? s : null,
      invoices: null != (d = null == A ? true : A.invoices) ? d : []
    };
    return null != N.invoices && N.invoices.length > 0 && await T(N.invoices), r.h.dispatch({
      type: "FAMILY_CENTER_INITIAL_LOAD",
      familyCenterTeenActivity: N,
      linkedUsers: f,
      users: C,
      ageGroup: I
    }), N
  },
  async fetchLinkedUsers() {
    let {
      body: t
    } = await i.Bo.get({
      url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
      rejectWithError: false
    }), e = {
      linkedUsers: t.linked_users,
      users: t.users
    };
    return r.h.dispatch(c({
      type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS"
    }, e)), e
  },
  async requestLink(t, e) {
    let {
      body: n
    } = await i.Bo.post({
      url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
      body: {
        recipient_id: t,
        code: e
      },
      rejectWithError: false
    }), l = {
      linkedUsers: n.linked_users,
      users: n.users
    };
    return r.h.dispatch(c({
      type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS"
    }, l)), l
  },
  async fetchTeenActivity(t) {
    var e, n, l, a, o, u, s;
    r.h.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let d = _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(t),
      {
        body: E
      } = await i.Bo.get({
        url: d,
        rejectWithError: false
      }),
      c = E.teen_audit_log,
      S = {
        teenId: c.teen_user_id,
        rangeStartId: c.range_start_id,
        totals: c.totals,
        actions: c.actions,
        users: c.users,
        guilds: c.guilds,
        topUserActivities: null != (e = c.top_user_activities) ? e : [],
        topGuildActivities: null != (n = c.top_guild_activities) ? n : [],
        totalSpendAmount: null != (l = null == c || null == (u = c.total_spend) ? true : u.amount) ? l : null,
        totalSpendCurrency: null != (a = null == c || null == (s = c.total_spend) ? true : s.currency) ? a : null,
        invoices: null != (o = null == c ? true : c.invoices) ? o : []
      };
    return S.invoices && S.invoices.length > 0 && await T(S.invoices), r.h.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
      familyCenterTeenActivity: S
    }), S
  },
  async fetchMoreTeenActivity(t, e, n, l) {
    var a, o, u, d, c, T, S;
    let {
      body: A
    } = await i.Bo.get({
      url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, l),
      rejectWithError: false
    }), {
      teen_audit_log: f
    } = A, C = {
      teenId: f.teen_user_id,
      rangeStartId: f.range_start_id,
      actions: f.actions,
      users: f.users,
      guilds: f.guilds,
      topUserActivities: null != (a = f.top_user_activities) ? a : [],
      topGuildActivities: null != (o = f.top_guild_activities) ? o : [],
      totalSpendAmount: null != (u = null == f || null == (T = f.total_spend) ? true : T.amount) ? u : null,
      totalSpendCurrency: null != (d = null == f || null == (S = f.total_spend) ? true : S.currency) ? d : null,
      invoices: null != (c = null == f ? true : f.invoices) ? c : []
    };
    return s.default.track(_.HAw.FAMILY_CENTER_ACTION, {
      action: E.qb.LoadMore,
      selected_teen_id: t,
      action_display_type: e
    }), r.h.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
      familyCenterTeenActivity: C
    }), f
  },
  selectTab(t) {
    r.h.dispatch({
      type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
      tab: t
    })
  },
  fetchTeenSettingsAndConsents: t => i.Bo.get({
    url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(t),
    rejectWithError: false
  }).then(e => {
    let {
      body: n
    } = e, {
      settings: i,
      consents: l
    } = n;
    r.h.dispatch({
      type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
      userId: t,
      settings: i,
      consents: l
    })
  }),
  async updateTeenSettings(t, e, n) {
    var a;
    let s = (0, o.f)(l.nT, e),
      E = null == (a = d.A.getSettings(t)) ? true : a[e],
      c = (0, o.a)(E, n, s, l.nT, e);
    if (null == c) return;
    let {
      body: T
    } = await i.Bo.patch({
      url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS(t),
      body: {
        settings: (0, u.ob)(l.nT, c)
      },
      rejectWithError: false
    }), {
      settings: S
    } = T;
    r.h.dispatch({
      type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
      userId: t,
      settings: S
    })
  },
  updateTeenConsents: (t, e, n) => i.Bo.patch({
    url: _.Rsh.FAMILY_CENTER_TEEN_CONSENTS(t),
    body: {
      grant: e,
      revoke: n
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: n
    } = e;
    r.h.dispatch({
      type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
      userId: t,
      consents: n
    })
  })
}