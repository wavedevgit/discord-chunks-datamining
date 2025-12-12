/** Chunk was on web.js **/
/** chunk id: 260722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yw: () => h,
  ZP: () => y,
  fc: () => g,
  qd: () => E,
  ty: () => b
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk524437 = require("./524437.js"),
  Chunk570140 = require("./570140.js"),
  Chunk335131 = require("./335131.js"),
  Chunk28926 = require("./28926.js"),
  Chunk48481 = require("./48481.js"),
  Chunk626135 = require("./626135.js"),
  Chunk473007 = require("./473007.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js");

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
async function m(e) {
  let t = new Set;
  e.forEach(e => {
    if (null != e.invoice_items && e.invoice_items.length > 0) {
      let n = e.invoice_items[0];
      null != n.sku_id && t.add(n.sku_id)
    }
  }), await Promise.all(Array.from(t).map(e => (0, a.lW)(e)))
}
async function h(e, t) {
  await r.tn.patch({
    url: f.ANM.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e,
      link_status: t
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    return o.Z.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
      linkedUsers: t
    }), t
  })
}
async function g(e) {
  await r.tn.del({
    url: f.ANM.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e
    },
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t;
    return o.Z.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
      linkedUsers: n,
      deletedUserId: e
    }), n
  })
}
async function E() {
  await Chunk544891.tn.get({
    url: Chunk981631.ANM.FAMILY_CENTER_LINK_CODE,
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e, n = t.link_code;
    return o.Z.dispatch({
      type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
      linkCode: n
    }), n
  })
}
async function b() {
  await Chunk544891.tn.post({
    url: Chunk981631.ANM.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS,
    rejectWithError: true
  })
}
let y = {
  async initialPageLoad() {
    var e, t, n, i, a, s, l, c, u, d, p;
    Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let {
      body: _
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
      rejectWithError: false
    }), {
      teen_audit_log: h,
      linked_users: g,
      users: E
    } = _, b = {
      teenId: null == h ? true : h.teen_user_id,
      rangeStartId: null == h ? true : h.range_start_id,
      totals: null != (n = null == h ? true : h.totals) ? require : {},
      actions: null != (i = null == h ? true : h.actions) ? Chunk524437 : [],
      users: null != (a = null == h ? true : h.users) ? Chunk335131 : [],
      guilds: null != (s = null == h ? true : h.guilds) ? Chunk28926 : [],
      topUserActivities: null != (l = null == h ? true : h.top_user_activities) ? Chunk48481 : [],
      topGuildActivities: null != (c = null == h ? true : h.top_guild_activities) ? Chunk626135 : [],
      totalSpendAmount: null != (u = null == h || null == (e = h.total_spend) ? true : module.amount) ? Chunk473007 : null,
      totalSpendCurrency: null != (d = null == h || null == (t = h.total_spend) ? true : exports.currency) ? Chunk292352 : null,
      invoices: null != (p = null == h ? true : h.invoices) ? p : []
    };
    return null != b.invoices && b.invoices.length > 0 && await m(b.invoices), Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_INITIAL_LOAD",
      familyCenterTeenActivity: b,
      linkedUsers: g,
      users: E
    }), b
  },
  async fetchLinkedUsers() {
    let {
      body: e
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.FAMILY_CENTER_LINKED_USERS,
      rejectWithError: false
    }), t = {
      linkedUsers: module.linked_users,
      users: module.users
    };
    return Chunk570140.Z.dispatch(_({
      type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS"
    }, exports)), exports
  },
  async requestLink(e, t) {
    let {
      body: n
    } = await r.tn.post({
      url: f.ANM.FAMILY_CENTER_LINKED_USERS,
      body: {
        recipient_id: e,
        code: t
      },
      rejectWithError: false
    }), i = {
      linkedUsers: n.linked_users,
      users: n.users
    };
    return o.Z.dispatch(_({
      type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS"
    }, i)), i
  },
  async fetchTeenActivity(e) {
    var t, n, i, a, s, l, c;
    o.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let u = f.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
      {
        body: d
      } = await r.tn.get({
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
        topUserActivities: null != (i = p.top_user_activities) ? i : [],
        topGuildActivities: null != (a = p.top_guild_activities) ? a : [],
        totalSpendAmount: null != (s = null == p || null == (t = p.total_spend) ? true : t.amount) ? s : null,
        totalSpendCurrency: null != (l = null == p || null == (n = p.total_spend) ? true : n.currency) ? l : null,
        invoices: null != (c = null == p ? true : p.invoices) ? c : []
      };
    return _.invoices && _.invoices.length > 0 && await m(_.invoices), o.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
      familyCenterTeenActivity: _
    }), _
  },
  async fetchMoreTeenActivity(e, t, n, i) {
    var a, s, l, u, p, _, m;
    let {
      body: h
    } = await r.tn.get({
      url: f.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
      rejectWithError: false
    }), {
      teen_audit_log: g
    } = h, E = {
      teenId: g.teen_user_id,
      rangeStartId: g.range_start_id,
      actions: g.actions,
      users: g.users,
      guilds: g.guilds,
      topUserActivities: null != (l = g.top_user_activities) ? l : [],
      topGuildActivities: null != (u = g.top_guild_activities) ? u : [],
      totalSpendAmount: null != (p = null == g || null == (a = g.total_spend) ? true : a.amount) ? p : null,
      totalSpendCurrency: null != (_ = null == g || null == (s = g.total_spend) ? true : s.currency) ? _ : null,
      invoices: null != (m = null == g ? true : g.invoices) ? m : []
    };
    return c.default.track(f.rMx.FAMILY_CENTER_ACTION, {
      action: d.YC.LoadMore,
      selected_teen_id: e,
      action_display_type: t
    }), o.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
      familyCenterTeenActivity: E
    }), g
  },
  selectTab(e) {
    o.Z.dispatch({
      type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
      tab: e
    })
  },
  fetchTeenSettingsAndConsents: e => r.tn.get({
    url: f.ANM.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e),
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t, {
      settings: r,
      consents: i
    } = n;
    o.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
      userId: e,
      settings: r,
      consents: i
    })
  }),
  async updateTeenSettings(e, t, n) {
    var a;
    let c = (0, s.H)(i.o8, t),
      d = null == (a = u.Z.getSettings(e)) ? true : a[t],
      p = (0, s.r)(d, n, c, i.o8, t);
    if (null == p) return;
    let {
      body: _
    } = await r.tn.patch({
      url: f.ANM.FAMILY_CENTER_TEEN_SETTINGS(e),
      body: {
        settings: (0, l.xU)(i.o8, p)
      },
      rejectWithError: false
    }), {
      settings: m
    } = _;
    o.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
      userId: e,
      settings: m
    })
  },
  updateTeenConsents: (e, t, n) => r.tn.patch({
    url: f.ANM.FAMILY_CENTER_TEEN_CONSENTS(e),
    body: {
      grant: t,
      revoke: n
    },
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t;
    o.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
      userId: e,
      consents: n
    })
  })
}