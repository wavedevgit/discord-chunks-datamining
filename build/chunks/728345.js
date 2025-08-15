/** Chunk was on web.js **/
/** chunk id: 728345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IX: () => b,
  Rt: () => y,
  UM: () => g,
  ZP: () => E
}), require("./997841.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk370210 = require("./370210.js"),
  Chunk973616 = require("./973616.js"),
  Chunk630388 = require("./630388.js"),
  Chunk812206 = require("./812206.js"),
  Chunk981631 = require("./981631.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
async function g(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true;
  a.Z.dispatch({
    type: "APPLICATION_FETCH",
    applicationId: e
  });
  try {
    let r = await i.tn.get({
      url: u.ANM.APPLICATION_PUBLIC(e),
      query: {
        with_guild: t
      },
      oldFormErrors: true,
      signal: n,
      rejectWithError: false
    });
    return a.Z.dispatch({
      type: "APPLICATION_FETCH_SUCCESS",
      application: r.body
    }), r.body
  } catch (t) {
    throw a.Z.dispatch({
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
        teamId: o
      } = e, s = (await i.tn.post({
        url: u.ANM.APPLICATIONS,
        body: {
          name: t,
          type: r,
          guild_id: n,
          team_id: o
        },
        rejectWithError: false
      })).body;
      return null != n && null != r && a.Z.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: s
      }), s
    },
    async getApplicationsForGuild(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      var {
        includeTeam: n
      } = t, r = h(t, ["includeTeam"]);
      let o = (await i.tn.get({
        url: u.ANM.GUILD_APPLICATIONS(e),
        query: p(f({}, r), {
          include_team: n
        }),
        rejectWithError: false
      })).body;
      return a.Z.dispatch({
        type: "APPLICATIONS_FETCH_SUCCESS",
        applications: o
      }), o
    },
    async transferApplication(e) {
      let {
        applicationId: t,
        teamId: n
      } = e, r = (await i.tn.post({
        url: u.ANM.APPLICATION_OWNER_TRANSFER(t),
        body: {
          team_id: n
        },
        rejectWithError: false
      })).body;
      return a.Z.dispatch({
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
          let r = c.Z.getApplication(e),
            i = (0, l.yE)(null != (n = null == r ? true : r.flags) ? n : 0, u.udG.EMBEDDED) && ((null == r || null == (t = r.embeddedActivityConfig) ? true : t.supported_platforms) == null || (null == r ? true : r.bot) == null);
          return !(null != r && !i) && !c.Z.isFetchingApplication(e) && !c.Z.didFetchingApplicationFail(e) && e.length > 0
        };
        n = e.filter(t)
      }
      if (n.length > 0) {
        let e;
        a.Z.dispatch({
          type: "APPLICATIONS_FETCH",
          applicationIds: n
        });
        try {
          e = await i.tn.get({
            url: u.ANM.APPLICATIONS_PUBLIC,
            query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
            oldFormErrors: true,
            rejectWithError: false
          })
        } catch (e) {
          throw 429 !== e.status && a.Z.dispatch({
            type: "APPLICATIONS_FETCH_FAIL",
            applicationIds: n
          }), e
        }
        let t = new Set(e.body.map(e => e.id)),
          r = n.filter(e => !t.has(e));
        a.Z.dispatch({
          type: "APPLICATIONS_FETCH_SUCCESS",
          applications: e.body,
          unknownApplicationIds: r
        })
      }
    },
    fetchApplication: g
  },
  b = (0, Chunk442837.Kb)(Chunk812206.Z, {
    queryId: e => u.McO.APPLICATIONS(e),
    get: e => null != e ? c.Z.getApplication(e) : null,
    load: (e, t) => null != t ? g(t, false, e).then(u.dG4) : Promise.resolve(),
    useStateHook: Chunk442837.e7
  });

function y(e) {
  let {
    data: t,
    isLoading: n,
    error: i
  } = b(e);
  return {
    app: (0, r.e7)([o.Z], () => {
      if (null == t) {
        let t = o.Z.getApplication(e);
        if (null != t) return s.ZP.createFromServer(t)
      }
      return t
    }, [e, t]),
    isLoading: n,
    error: i
  }
}