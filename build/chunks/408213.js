/** Chunk was on web.js **/
/** chunk id: 408213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => S
}), require("./228524.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk442433 = require("./442433.js"),
  Chunk198982 = require("./198982.js"),
  Chunk9994 = require("./9994.js"),
  Chunk529942 = require("./529942.js"),
  Chunk164956 = require("./164956.js"),
  Chunk21599 = require("./21599.js"),
  Chunk696451 = require("./696451.js"),
  Chunk299091 = require("./299091.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk513461 = require("./513461.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = false;

function I(e) {
  i.h.dispatch({
    type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW",
    guildId: e
  })
}
let S = {
  fetchVerificationForm: async (e, t) => {
    let n = null != t ? t : p.A.getInviteKeyForGuildId(e),
      a = _.default.getCurrentUser(),
      s = !f.Ay.isMember(e, null == a ? true : a.id);
    try {
      let t = await r.Bo.get({
        url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
        query: {
          with_guild: s,
          invite_code: null != n ? (0, d.m0)(n) : true
        },
        oldFormErrors: true,
        rejectWithError: false
      });
      if (null == t.body) throw t;
      let {
        body: a
      } = t;
      return i.h.dispatch({
        type: "MEMBER_VERIFICATION_FORM_UPDATE",
        guildId: e,
        form: {
          version: a.version,
          description: a.description,
          formFields: a.form_fields,
          guild: a.guild,
          profile: null != a.profile ? (0, l.wr)(a.profile) : null
        }
      }), a
    } catch (t) {
      i.h.dispatch({
        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
        guildId: e
      })
    }
  },
  updateVerificationForm: async (e, t, n, a) => {
    let {
      body: s
    } = await r.Bo.patch({
      url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
      body: {
        form_fields: t,
        enabled: n,
        bulk_action: a
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    i.h.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        version: s.version,
        description: s.description,
        formFields: s.form_fields
      }
    })
  },
  updateVerificationFormFieldsLocal: (e, t) => {
    i.h.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        formFields: t
      },
      isLocalUpdate: true
    })
  },
  updateVerificationFormDescription: async (e, t) => {
    let {
      body: n
    } = await r.Bo.patch({
      url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
      body: {
        description: t
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    i.h.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        version: n.version,
        description: n.description,
        formFields: n.form_fields
      }
    })
  },
  updateVerificationFormDescriptionLocal: (e, t) => {
    i.h.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        description: t
      },
      isLocalUpdate: true
    })
  },
  enableVerificationForm: async (e, t) => {
    await r.Bo.patch({
      url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
      body: {
        enabled: t
      },
      oldFormErrors: true,
      rejectWithError: false
    })
  },
  submitVerificationForm: async function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 200;
    if (u.A.isFullServerPreview(e)) return void(0, c.Z$)(e, {
      memberOptions: {
        isPending: false
      }
    });
    try {
      let {
        body: a
      } = await r.Bo.put({
        url: g.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
        body: {
          version: t.version,
          form_fields: t.formFields
        },
        rejectWithError: false
      });
      return i.h.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
        guildId: e,
        request: a
      }), (0, m.j5)(t.formFields) && n !== A && setTimeout(() => I(e), n), a
    } catch (t) {
      let {
        status: e
      } = t;
      switch (e) {
        case 429:
          throw (0, s.Z_)(), a.A.show({
            title: E.intl.string(E.t.MmIrpf),
            body: E.intl.string(E.t.yjpDQ3),
            confirmText: E.intl.string(E.t.XNGT1O)
          }), v(b({}, t), {
            message: E.intl.string(E.t.yjpDQ3)
          });
        case 403:
          throw v(b({}, t), {
            message: E.intl.string(E.t["8T1rxN"])
          });
        default:
          var l, d;
          throw v(b({}, t), {
            message: null != (l = (d = new o.LG(t), d.getAnyErrorMessage())) ? l : E.intl.string(E.t.R0RpRX)
          })
      }
    }
  },
  clearCoachmark: function() {
    i.h.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR"
    })
  },
  reportApplication: function(e) {
    let {
      guild: t,
      guildJoinRequest: n,
      guildJoinRequestUser: r,
      reason: i,
      reasonOther: a,
      responses: s
    } = e;
    h.default.track(g.HAw.GUILD_MEMBER_APPLICATION_REPORTED, {
      application_id: n.joinRequestId,
      applicant_id: r.id,
      guild_id: t.id,
      reason: i,
      reason_other: a,
      responses: s
    })
  }
}