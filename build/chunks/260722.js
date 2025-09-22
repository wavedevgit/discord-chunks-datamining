/** Chunk was on web.js **/
/** chunk id: 260722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yw: () => p,
  ZP: () => E,
  fc: () => h,
  qd: () => m,
  ty: () => g
});
var Chunk544891 = require("./544891.js"),
  Chunk524437 = require("./524437.js"),
  Chunk570140 = require("./570140.js"),
  Chunk28926 = require("./28926.js"),
  Chunk48481 = require("./48481.js"),
  Chunk626135 = require("./626135.js"),
  Chunk473007 = require("./473007.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}
async function p(e, t) {
  await r.tn.patch({
    url: d.ANM.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e,
      link_status: t
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    return a.Z.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
      linkedUsers: t
    }), t
  })
}
async function h(e) {
  await r.tn.del({
    url: d.ANM.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e
    },
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t;
    return a.Z.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
      linkedUsers: n,
      deletedUserId: e
    }), n
  })
}
async function m() {
  await Chunk544891.tn.get({
    url: Chunk981631.ANM.FAMILY_CENTER_LINK_CODE,
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e, n = t.link_code;
    return a.Z.dispatch({
      type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
      linkCode: n
    }), n
  })
}
async function g() {
  await Chunk544891.tn.post({
    url: Chunk981631.ANM.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS,
    rejectWithError: true
  })
}
let E = {
  async initialPageLoad() {
    var e, t, n, i;
    Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let {
      body: o
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
      rejectWithError: false
    }), {
      teen_audit_log: s,
      linked_users: l,
      users: c
    } = Chunk28926, u = {
      teenId: null == Chunk48481 ? true : Chunk48481.teen_user_id,
      rangeStartId: null == Chunk48481 ? true : Chunk48481.range_start_id,
      totals: null != (e = null == Chunk48481 ? true : Chunk48481.totals) ? module : {},
      actions: null != (t = null == Chunk48481 ? true : Chunk48481.actions) ? exports : [],
      users: null != (n = null == Chunk48481 ? true : Chunk48481.users) ? require : [],
      guilds: null != (i = null == Chunk48481 ? true : Chunk48481.guilds) ? Chunk524437 : []
    };
    return Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_INITIAL_LOAD",
      familyCenterTeenActivity: Chunk292352,
      linkedUsers: Chunk626135,
      users: Chunk473007
    }), Chunk292352
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
      url: d.ANM.FAMILY_CENTER_LINKED_USERS,
      body: {
        recipient_id: e,
        code: t
      },
      rejectWithError: false
    }), i = {
      linkedUsers: n.linked_users,
      users: n.users
    };
    return a.Z.dispatch(_({
      type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS"
    }, i)), i
  },
  async fetchTeenActivity(e) {
    a.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let t = d.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
      {
        body: n
      } = await r.tn.get({
        url: t,
        rejectWithError: false
      }),
      i = n.teen_audit_log,
      o = {
        teenId: i.teen_user_id,
        rangeStartId: i.range_start_id,
        totals: i.totals,
        actions: i.actions,
        users: i.users,
        guilds: i.guilds
      };
    return a.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
      familyCenterTeenActivity: o
    }), o
  },
  async fetchMoreTeenActivity(e, t, n, i) {
    let {
      body: o
    } = await r.tn.get({
      url: d.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
      rejectWithError: false
    }), {
      teen_audit_log: s
    } = o, c = {
      teenId: s.teen_user_id,
      rangeStartId: s.range_start_id,
      actions: s.actions,
      users: s.users,
      guilds: s.guilds
    };
    return l.default.track(d.rMx.FAMILY_CENTER_ACTION, {
      action: u.YC.LoadMore,
      selected_teen_id: e,
      action_display_type: t
    }), a.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
      familyCenterTeenActivity: c
    }), s
  },
  selectTab(e) {
    a.Z.dispatch({
      type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
      tab: e
    })
  },
  fetchTeenSettingsAndConsents: e => r.tn.get({
    url: d.ANM.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e),
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t, {
      settings: r,
      consents: i
    } = n;
    a.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
      userId: e,
      settings: r,
      consents: i
    })
  }),
  async updateTeenSettings(e, t, n) {
    var l;
    let u = (0, o.H)(i.o8, t),
      f = null == (l = c.Z.getSettings(e)) ? true : l[t],
      _ = (0, o.r)(f, n, u, i.o8, t);
    if (null == _) return;
    let {
      body: p
    } = await r.tn.patch({
      url: d.ANM.FAMILY_CENTER_TEEN_SETTINGS(e),
      body: {
        settings: (0, s.xU)(i.o8, _)
      },
      rejectWithError: false
    }), {
      settings: h
    } = p;
    a.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
      userId: e,
      settings: h
    })
  },
  updateTeenConsents: (e, t, n) => r.tn.patch({
    url: d.ANM.FAMILY_CENTER_TEEN_CONSENTS(e),
    body: {
      grant: t,
      revoke: n
    },
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t, {
      consents: r
    } = n;
    a.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
      userId: e,
      consents: r
    })
  })
}