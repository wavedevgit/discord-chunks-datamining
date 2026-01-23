/** Chunk was on web.js **/
/** chunk id: 627363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => E,
  NP: () => b,
  TA: () => g,
  YY: () => y
}), require("./896048.js"), require("./938796.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk212534 = require("./212534.js"),
  Chunk611010 = require("./611010.js"),
  Chunk587895 = require("./587895.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
async function g(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true;
  s.h.dispatch({
    type: "APPLICATION_FETCH",
    applicationId: e
  });
  try {
    let r = await a.Bo.get({
      url: u.Rsh.APPLICATION_PUBLIC(e),
      query: {
        with_guild: t
      },
      oldFormErrors: true,
      signal: n,
      rejectWithError: false
    });
    return s.h.dispatch({
      type: "APPLICATION_FETCH_SUCCESS",
      application: r.body
    }), r.body
  } catch (t) {
    throw s.h.dispatch({
      type: "APPLICATION_FETCH_FAIL",
      applicationId: e
    }), t
  }
}
let E = {
    async createApplication(e) {
      let {
        name: t,
        guildId: n,
        type: r,
        teamId: i
      } = e, o = (await a.Bo.post({
        url: u.Rsh.APPLICATIONS,
        body: {
          name: t,
          type: r,
          guild_id: n,
          team_id: i
        },
        rejectWithError: false
      })).body;
      return null != n && null != r && s.h.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: o
      }), o
    },
    async getApplicationsForGuild(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : true,
        [n = {}] = [t],
        {
          includeTeam: r
        } = n,
        i = h(n, ["includeTeam"]),
        o = (await a.Bo.get({
          url: u.Rsh.GUILD_APPLICATIONS(e),
          query: _(f({}, i), {
            include_team: r
          }),
          rejectWithError: false
        })).body;
      return s.h.dispatch({
        type: "APPLICATIONS_FETCH_SUCCESS",
        applications: o
      }), o
    },
    async transferApplication(e) {
      let {
        applicationId: t,
        teamId: n
      } = e, r = (await a.Bo.post({
        url: u.Rsh.APPLICATION_OWNER_TRANSFER(t),
        body: {
          team_id: n
        },
        rejectWithError: false
      })).body;
      return s.h.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: r
      }), r
    },
    async fetchApplications(e) {
      let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        n = e;
      if (!t) {
        let t = e => {
          var t, n;
          let i = c.A.getApplication(e),
            a = (0, r.Lt)(null != (t = null == i ? true : i.flags) ? t : 0, u.gfo.EMBEDDED) && ((null == i || null == (n = i.embeddedActivityConfig) ? true : n.supported_platforms) == null || (null == i ? true : i.bot) == null);
          return !(null != i && !a) && !c.A.isFetchingApplication(e) && !c.A.didFetchingApplicationFail(e) && e.length > 0
        };
        n = e.filter(t)
      }
      if (n.length > 0) {
        let e;
        s.h.dispatch({
          type: "APPLICATIONS_FETCH",
          applicationIds: n
        });
        try {
          e = await a.Bo.get({
            url: u.Rsh.APPLICATIONS_PUBLIC,
            query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
            oldFormErrors: true,
            rejectWithError: false
          })
        } catch (e) {
          throw 429 !== e.status && s.h.dispatch({
            type: "APPLICATIONS_FETCH_FAIL",
            applicationIds: n
          }), e
        }
        let t = new Set(e.body.map(e => e.id)),
          r = n.filter(e => !t.has(e));
        s.h.dispatch({
          type: "APPLICATIONS_FETCH_SUCCESS",
          applications: e.body,
          unknownApplicationIds: r
        })
      }
    },
    fetchApplication: g
  },
  y = (0, Chunk311907.UT)(Chunk587895.A, {
    getQueryId: Chunk652215.fic.APPLICATIONS,
    get: e => {
      var t;
      return null != e && null != (t = c.A.getApplication(e)) ? t : null
    },
    load: e => null != e ? g(e, false).then(u.tEg) : Promise.resolve(),
    getIsLoading: e => null != e && c.A.isFetchingApplication(e)
  });

function b(e) {
  let {
    data: t,
    isLoading: n,
    error: r
  } = y(e);
  return {
    app: (0, i.bG)([o.A], () => {
      if (null == t) {
        let t = o.A.getApplication(e);
        if (null != t) return l.Ay.createFromServer(t)
      }
      return t
    }, [e, t]),
    isLoading: n,
    error: null != r ? r : true
  }
}