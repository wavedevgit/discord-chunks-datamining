/** Chunk was on web.js **/
/** chunk id: 260722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yw: () => u,
  ZP: () => _,
  fc: () => d,
  qd: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
async function u(e, t) {
  await r.tn.patch({
    url: s.ANM.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e,
      link_status: t
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    return i.Z.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
      linkedUsers: t
    }), t
  })
}
async function d(e) {
  await r.tn.del({
    url: s.ANM.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e
    },
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t;
    return i.Z.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
      linkedUsers: n,
      deletedUserId: e
    }), n
  })
}
async function f() {
  await Chunk544891.tn.get({
    url: Chunk981631.ANM.FAMILY_CENTER_LINK_CODE,
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e, n = t.link_code;
    return i.Z.dispatch({
      type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
      linkCode: n
    }), n
  })
}
let _ = {
  async initialPageLoad() {
    var e, t, n, o;
    Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let {
      body: a
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
      rejectWithError: false
    }), {
      teen_audit_log: l,
      linked_users: c,
      users: u
    } = Chunk292352, d = {
      teenId: null == l ? true : l.teen_user_id,
      rangeStartId: null == l ? true : l.range_start_id,
      totals: null != (e = null == l ? true : l.totals) ? module : {},
      actions: null != (t = null == l ? true : l.actions) ? exports : [],
      users: null != (n = null == l ? true : l.users) ? require : [],
      guilds: null != (o = null == l ? true : l.guilds) ? Chunk626135 : []
    };
    return Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_INITIAL_LOAD",
      familyCenterTeenActivity: d,
      linkedUsers: c,
      users: u
    }), d
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
    return Chunk570140.Z.dispatch(c({
      type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS"
    }, exports)), exports
  },
  async requestLink(e, t) {
    let {
      body: n
    } = await r.tn.post({
      url: s.ANM.FAMILY_CENTER_LINKED_USERS,
      body: {
        recipient_id: e,
        code: t
      },
      rejectWithError: false
    }), o = {
      linkedUsers: n.linked_users,
      users: n.users
    };
    return i.Z.dispatch(c({
      type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS"
    }, o)), o
  },
  async fetchTeenActivity(e) {
    i.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let t = s.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
      {
        body: n
      } = await r.tn.get({
        url: t,
        rejectWithError: false
      }),
      o = n.teen_audit_log,
      a = {
        teenId: o.teen_user_id,
        rangeStartId: o.range_start_id,
        totals: o.totals,
        actions: o.actions,
        users: o.users,
        guilds: o.guilds
      };
    return i.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
      familyCenterTeenActivity: a
    }), a
  },
  async fetchMoreTeenActivity(e, t, n, l) {
    let {
      body: c
    } = await r.tn.get({
      url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, l),
      rejectWithError: false
    }), {
      teen_audit_log: u
    } = c, d = {
      teenId: u.teen_user_id,
      rangeStartId: u.range_start_id,
      actions: u.actions,
      users: u.users,
      guilds: u.guilds
    };
    return o.default.track(s.rMx.FAMILY_CENTER_ACTION, {
      action: a.YC.LoadMore,
      selected_teen_id: e,
      action_display_type: t
    }), i.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
      familyCenterTeenActivity: d
    }), u
  },
  selectTab(e) {
    i.Z.dispatch({
      type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
      tab: e
    })
  }
}