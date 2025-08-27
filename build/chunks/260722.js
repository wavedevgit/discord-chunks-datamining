/** Chunk was on web.js **/
/** chunk id: 260722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yw: () => f,
  ZP: () => h,
  fc: () => _,
  qd: () => p
});
var Chunk544891 = require("./544891.js"),
  Chunk524437 = require("./524437.js"),
  Chunk570140 = require("./570140.js"),
  Chunk48481 = require("./48481.js"),
  Chunk626135 = require("./626135.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
async function f(e, t) {
  await r.tn.patch({
    url: c.ANM.FAMILY_CENTER_LINKED_USERS,
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
async function _(e) {
  await r.tn.del({
    url: c.ANM.FAMILY_CENTER_LINKED_USERS,
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
async function p() {
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
let h = {
  async initialPageLoad() {
    var e, t, n, i;
    Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let {
      body: a
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
      rejectWithError: false
    }), {
      teen_audit_log: s,
      linked_users: l,
      users: u
    } = Chunk48481, d = {
      teenId: null == Chunk626135 ? true : Chunk626135.teen_user_id,
      rangeStartId: null == Chunk626135 ? true : Chunk626135.range_start_id,
      totals: null != (e = null == Chunk626135 ? true : Chunk626135.totals) ? module : {},
      actions: null != (t = null == Chunk626135 ? true : Chunk626135.actions) ? exports : [],
      users: null != (n = null == Chunk626135 ? true : Chunk626135.users) ? require : [],
      guilds: null != (i = null == Chunk626135 ? true : Chunk626135.guilds) ? Chunk524437 : []
    };
    return Chunk570140.Z.dispatch({
      type: "FAMILY_CENTER_INITIAL_LOAD",
      familyCenterTeenActivity: d,
      linkedUsers: Chunk292352,
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
    return Chunk570140.Z.dispatch(d({
      type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS"
    }, exports)), exports
  },
  async requestLink(e, t) {
    let {
      body: n
    } = await r.tn.post({
      url: c.ANM.FAMILY_CENTER_LINKED_USERS,
      body: {
        recipient_id: e,
        code: t
      },
      rejectWithError: false
    }), i = {
      linkedUsers: n.linked_users,
      users: n.users
    };
    return o.Z.dispatch(d({
      type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS"
    }, i)), i
  },
  async fetchTeenActivity(e) {
    o.Z.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let t = c.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
      {
        body: n
      } = await r.tn.get({
        url: t,
        rejectWithError: false
      }),
      i = n.teen_audit_log,
      a = {
        teenId: i.teen_user_id,
        rangeStartId: i.range_start_id,
        totals: i.totals,
        actions: i.actions,
        users: i.users,
        guilds: i.guilds
      };
    return o.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
      familyCenterTeenActivity: a
    }), a
  },
  async fetchMoreTeenActivity(e, t, n, i) {
    let {
      body: a
    } = await r.tn.get({
      url: c.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
      rejectWithError: false
    }), {
      teen_audit_log: u
    } = a, d = {
      teenId: u.teen_user_id,
      rangeStartId: u.range_start_id,
      actions: u.actions,
      users: u.users,
      guilds: u.guilds
    };
    return s.default.track(c.rMx.FAMILY_CENTER_ACTION, {
      action: l.YC.LoadMore,
      selected_teen_id: e,
      action_display_type: t
    }), o.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
      familyCenterTeenActivity: d
    }), u
  },
  selectTab(e) {
    o.Z.dispatch({
      type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
      tab: e
    })
  },
  fetchTeenSettingsAndConsents: e => r.tn.get({
    url: c.ANM.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e),
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
  updateTeenSettings(e, t, n) {
    let s = i.o8.create();
    return n(s[t]), r.tn.patch({
      url: c.ANM.FAMILY_CENTER_TEEN_SETTINGS(e),
      body: {
        settings: (0, a.xU)(i.o8, s)
      },
      rejectWithError: false
    }).then(t => {
      let {
        body: n
      } = t, {
        settings: r
      } = n;
      o.Z.dispatch({
        type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
        userId: e,
        settings: r
      })
    })
  },
  updateTeenConsents: (e, t, n) => r.tn.patch({
    url: c.ANM.FAMILY_CENTER_TEEN_CONSENTS(e),
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
    o.Z.dispatch({
      type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
      userId: e,
      consents: r
    })
  })
}