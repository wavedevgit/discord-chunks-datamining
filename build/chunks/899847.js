/** Chunk was on web.js **/
/** chunk id: 899847, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => b,
  HB: () => E,
  Xz: () => y,
  e$: () => g,
  nt: () => m
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
async function h(e) {
  let t = new Set;
  e.forEach(e => {
    if (null != e.invoice_items && e.invoice_items.length > 0) {
      let n = e.invoice_items[0];
      null != n.sku_id && t.add(n.sku_id)
    }
  }), await Promise.all(Array.from(t).map(e => (0, s.RE)(e)))
}
async function m(e, t) {
  await r.Bo.patch({
    url: f.Rsh.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e,
      link_status: t
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    return a.h.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
      linkedUsers: t
    }), t
  })
}
async function g(e) {
  await r.Bo.del({
    url: f.Rsh.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e
    },
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t;
    return a.h.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
      linkedUsers: n,
      deletedUserId: e
    }), n
  })
}
async function E() {
  await r.Bo.get({
    url: f.Rsh.FAMILY_CENTER_LINK_CODE,
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e, n = t.link_code;
    return a.h.dispatch({
      type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
      linkCode: n
    }), n
  })
}
async function y() {
  await r.Bo.post({
    url: f.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS,
    rejectWithError: true
  })
}
let b = {
  async initialPageLoad() {
    var e, t, n, i, s, o, l, c, u, d, p;
    a.h.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let {
      body: _
    } = await r.Bo.get({
      url: f.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME,
      rejectWithError: false
    }), {
      teen_audit_log: m,
      linked_users: g,
      users: E,
      age_group: y
    } = _, b = {
      teenId: null == m ? true : m.teen_user_id,
      rangeStartId: null == m ? true : m.range_start_id,
      totals: null != (e = null == m ? true : m.totals) ? e : {},
      actions: null != (t = null == m ? true : m.actions) ? t : [],
      users: null != (n = null == m ? true : m.users) ? n : [],
      guilds: null != (i = null == m ? true : m.guilds) ? i : [],
      topUserActivities: null != (s = null == m ? true : m.top_user_activities) ? s : [],
      topGuildActivities: null != (o = null == m ? true : m.top_guild_activities) ? o : [],
      totalSpendAmount: null != (l = null == m || null == (d = m.total_spend) ? true : d.amount) ? l : null,
      totalSpendCurrency: null != (c = null == m || null == (p = m.total_spend) ? true : p.currency) ? c : null,
      invoices: null != (u = null == m ? true : m.invoices) ? u : []
    };
    return null != b.invoices && b.invoices.length > 0 && await h(b.invoices), a.h.dispatch({
      type: "FAMILY_CENTER_INITIAL_LOAD",
      familyCenterTeenActivity: b,
      linkedUsers: g,
      users: E,
      ageGroup: y
    }), b
  },
  async fetchLinkedUsers() {
    let {
      body: e
    } = await r.Bo.get({
      url: f.Rsh.FAMILY_CENTER_LINKED_USERS,
      rejectWithError: false
    }), t = {
      linkedUsers: e.linked_users,
      users: e.users
    };
    return a.h.dispatch(_({
      type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS"
    }, t)), t
  },
  async requestLink(e, t) {
    let {
      body: n
    } = await r.Bo.post({
      url: f.Rsh.FAMILY_CENTER_LINKED_USERS,
      body: {
        recipient_id: e,
        code: t
      },
      rejectWithError: false
    }), i = {
      linkedUsers: n.linked_users,
      users: n.users
    };
    return a.h.dispatch(_({
      type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS"
    }, i)), i
  },
  async fetchTeenActivity(e) {
    var t, n, i, s, o, l, c;
    a.h.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let u = f.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(e),
      {
        body: d
      } = await r.Bo.get({
        url: u,
        rejectWithError: false
      }),
      p = d.teen_audit_log,
      _ = {
        teenId: p.teen_user_id,
        rangeStartId: p.range_start_id,
        totals: p.totals,
        actions: p.actions,
        users: p.users,
        guilds: p.guilds,
        topUserActivities: null != (t = p.top_user_activities) ? t : [],
        topGuildActivities: null != (n = p.top_guild_activities) ? n : [],
        totalSpendAmount: null != (i = null == p || null == (l = p.total_spend) ? true : l.amount) ? i : null,
        totalSpendCurrency: null != (s = null == p || null == (c = p.total_spend) ? true : c.currency) ? s : null,
        invoices: null != (o = null == p ? true : p.invoices) ? o : []
      };
    return _.invoices && _.invoices.length > 0 && await h(_.invoices), a.h.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
      familyCenterTeenActivity: _
    }), _
  },
  async fetchMoreTeenActivity(e, t, n, i) {
    var s, o, l, u, p, _, h;
    let {
      body: m
    } = await r.Bo.get({
      url: f.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
      rejectWithError: false
    }), {
      teen_audit_log: g
    } = m, E = {
      teenId: g.teen_user_id,
      rangeStartId: g.range_start_id,
      actions: g.actions,
      users: g.users,
      guilds: g.guilds,
      topUserActivities: null != (s = g.top_user_activities) ? s : [],
      topGuildActivities: null != (o = g.top_guild_activities) ? o : [],
      totalSpendAmount: null != (l = null == g || null == (_ = g.total_spend) ? true : _.amount) ? l : null,
      totalSpendCurrency: null != (u = null == g || null == (h = g.total_spend) ? true : h.currency) ? u : null,
      invoices: null != (p = null == g ? true : g.invoices) ? p : []
    };
    return c.default.track(f.HAw.FAMILY_CENTER_ACTION, {
      action: d.qb.LoadMore,
      selected_teen_id: e,
      action_display_type: t
    }), a.h.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
      familyCenterTeenActivity: E
    }), g
  },
  selectTab(e) {
    a.h.dispatch({
      type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
      tab: e
    })
  },
  fetchTeenSettingsAndConsents: e => r.Bo.get({
    url: f.Rsh.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e),
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t, {
      settings: r,
      consents: i
    } = n;
    a.h.dispatch({
      type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
      userId: e,
      settings: r,
      consents: i
    })
  }),
  async updateTeenSettings(e, t, n) {
    var s;
    let c = (0, o.f)(i.nT, t),
      d = null == (s = u.A.getSettings(e)) ? true : s[t],
      p = (0, o.a)(d, n, c, i.nT, t);
    if (null == p) return;
    let {
      body: _
    } = await r.Bo.patch({
      url: f.Rsh.FAMILY_CENTER_TEEN_SETTINGS(e),
      body: {
        settings: (0, l.ob)(i.nT, p)
      },
      rejectWithError: false
    }), {
      settings: h
    } = _;
    a.h.dispatch({
      type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
      userId: e,
      settings: h
    })
  },
  updateTeenConsents: (e, t, n) => r.Bo.patch({
    url: f.Rsh.FAMILY_CENTER_TEEN_CONSENTS(e),
    body: {
      grant: t,
      revoke: n
    },
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t;
    a.h.dispatch({
      type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
      userId: e,
      consents: n
    })
  })
}