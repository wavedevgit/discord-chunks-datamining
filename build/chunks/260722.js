/** Chunk was on 49508 **/
/** chunk id: 260722, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Yw: () => s,
  ZP: () => c,
  fc: () => o,
  qd: () => E
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js");

function u(t) {
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
async function s(t, e) {
  await i.tn.patch({
    url: d.ANM.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: t,
      link_status: e
    },
    rejectWithError: false
  }).then(t => {
    let {
      body: e
    } = t;
    return r.Z.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
      linkedUsers: e
    }), e
  })
}
async function o(t) {
  await i.tn.del({
    url: d.ANM.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: t
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: n
    } = e;
    return r.Z.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
      linkedUsers: n,
      deletedUserId: t
    }), n
  })
}
async function E() {
  await Chunk544891.tn.get({
    url: Chunk981631.ANM.FAMILY_CENTER_LINK_CODE,
    rejectWithError: false
  }).then(t => {
    let {
      body: e
    } = t, n = e.link_code;
    return r.Z.dispatch({
      type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
      linkCode: n
    }), n
  })
}
let c = {
  async initialPageLoad() {
    var t, e, n, l;
    Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let {
      body: a
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
      rejectWithError: false
    }), {
      teen_audit_log: u,
      linked_users: s,
      users: o
    } = Chunk292352, E = {
      teenId: null == u ? true : u.teen_user_id,
      rangeStartId: null == u ? true : u.range_start_id,
      totals: null != (t = null == u ? true : u.totals) ? module : {},
      actions: null != (e = null == u ? true : u.actions) ? exports : [],
      users: null != (n = null == u ? true : u.users) ? require : [],
      guilds: null != (l = null == u ? true : u.guilds) ? Chunk626135 : []
    };
    return Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_INITIAL_LOAD",
      familyCenterTeenActivity: E,
      linkedUsers: s,
      users: o
    }), E
  },
  async fetchLinkedUsers() {
    let {
      body: t
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.FAMILY_CENTER_LINKED_USERS,
      rejectWithError: false
    }), e = {
      linkedUsers: module.linked_users,
      users: module.users
    };
    return Chunk570140.Z.dispatch(u({
      type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS"
    }, exports)), exports
  },
  async requestLink(t, e) {
    let {
      body: n
    } = await i.tn.post({
      url: d.ANM.FAMILY_CENTER_LINKED_USERS,
      body: {
        recipient_id: t,
        code: e
      },
      rejectWithError: false
    }), l = {
      linkedUsers: n.linked_users,
      users: n.users
    };
    return r.Z.dispatch(u({
      type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS"
    }, l)), l
  },
  async fetchTeenActivity(t) {
    r.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let e = d.ANM.FAMILY_CENTER_TEEN_ACTIVITY(t),
      {
        body: n
      } = await i.tn.get({
        url: e,
        rejectWithError: false
      }),
      l = n.teen_audit_log,
      a = {
        teenId: l.teen_user_id,
        rangeStartId: l.range_start_id,
        totals: l.totals,
        actions: l.actions,
        users: l.users,
        guilds: l.guilds
      };
    return r.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
      familyCenterTeenActivity: a
    }), a
  },
  async fetchMoreTeenActivity(t, e, n, u) {
    let {
      body: s
    } = await i.tn.get({
      url: d.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, u),
      rejectWithError: false
    }), {
      teen_audit_log: o
    } = s, E = {
      teenId: o.teen_user_id,
      rangeStartId: o.range_start_id,
      actions: o.actions,
      users: o.users,
      guilds: o.guilds
    };
    return l.default.track(d.rMx.FAMILY_CENTER_ACTION, {
      action: a.YC.LoadMore,
      selected_teen_id: t,
      action_display_type: e
    }), r.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
      familyCenterTeenActivity: E
    }), o
  },
  selectTab(t) {
    r.Z.dispatch({
      type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
      tab: t
    })
  }
}