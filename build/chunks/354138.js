/** Chunk was on web.js **/
/** chunk id: 354138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $P: () => R,
  An: () => D,
  Di: () => C,
  bW: () => N,
  eP: () => T,
  wD: () => x,
  xZ: () => w
}), require("./896048.js");
var Chunk158390 = require("./158390.js"),
  Chunk724002 = require("./724002.js"),
  Chunk277419 = require("./277419.js"),
  Chunk287174 = require("./287174.js"),
  Chunk994369 = require("./994369.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js");
require("./865116.js");
var Chunk773669 = require("./773669.js"),
  Chunk111162 = require("./111162.js"),
  Chunk723702 = require("./723702.js"),
  Chunk212534 = require("./212534.js"),
  Chunk38181 = require("./38181.js"),
  Chunk111042 = require("./111042.js"),
  Chunk651753 = require("./651753.js"),
  Chunk82293 = require("./82293.js"),
  Chunk680646 = require("./680646.js"),
  Chunk652215 = require("./652215.js");
let b = 1e3,
  O = 5e3,
  v = 10,
  A = 864e5,
  I = 6e5,
  S = new Map;
async function T(e) {
  var t;
  let n = Date.now(),
    i = null != (t = S.get(e)) ? t : 0;
  if (p.A.getApplicationFetchState(e) === p.e.FETCHING || p.A.isInvalidApplication(e) || n < i + I) return;
  S.set(e, n), c.h.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
    applicationId: e
  });
  let a = new r.A(b, O),
    s = (e, t) => 429 === e.status && a.fails < v && (a.fail(() => {
      t(true, s)
    }), true);
  try {
    let t = (await l.Bo.get({
      url: y.Rsh.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
      backoff: a,
      retries: v,
      interceptResponse: s,
      rejectWithError: false
    })).body;
    c.h.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
      application: t
    })
  } catch (t) {
    c.h.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
      applicationId: e,
      isInvalidApplication: true
    })
  }
}
async function C(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    n = Date.now(),
    r = p.A.getApplicationFetchState(e),
    i = p.A.getApplicationLastFetchTime(e),
    {
      dontRefetchMs: a,
      noCache: s
    } = t,
    o = null != i && i + (null != a ? a : I) > n;
  if (r !== p.e.FETCHING && !o) {
    c.h.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
      applicationId: e
    });
    try {
      let t = await l.Bo.get({
        url: y.Rsh.APPLICATION_DIRECTORY_APPLICATION(e),
        query: {
          locale: u.default.locale,
          nocache: s
        },
        rejectWithError: true
      });
      c.h.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
        application: t.body
      })
    } catch (t) {
      c.h.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
        applicationId: e,
        isInvalidApplication: true
      })
    }
  }
}
async function N() {
  let e = Date.now(),
    t = _.A.getLastFetchTimeMs();
  if (null != t && t + I > e) return;
  let n = await l.Bo.get({
    url: y.Rsh.APPLICATION_DIRECTORY_CATEGORIES,
    query: {
      locale: u.default.locale
    },
    rejectWithError: false
  });
  c.h.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
    categories: n.body
  })
}
async function w(e) {
  var t;
  let {
    applicationId: n,
    guildId: r,
    options: i
  } = e, {
    page: a
  } = null != i ? i : {}, s = Date.now(), o = g.A.getFetchState({
    applicationId: n,
    guildId: r
  }), {
    lastFetchTimeMs: d
  } = null != (t = g.A.getSimilarApplications({
    applicationId: n,
    guildId: r
  })) ? t : {};
  if (o !== g.e.FETCHING && (null == d || !(d + I > s))) {
    c.h.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
      applicationId: n,
      guildId: r,
      page: a
    });
    try {
      let e = await l.Bo.get({
        url: y.Rsh.APPLICATION_DIRECTORY_SIMILAR(n),
        query: {
          guild_id: r,
          page: a,
          locale: u.default.locale
        },
        rejectWithError: true
      });
      c.h.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
        applicationId: n,
        guildId: r,
        similarApplications: e.body.applications,
        loadId: e.body.load_id,
        page: a,
        totalPages: e.body.num_pages
      })
    } catch (e) {
      c.h.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
        applicationId: n,
        guildId: r,
        page: a
      })
    }
  }
}
async function R(e) {
  var t;
  let {
    query: n,
    guildId: r,
    options: i,
    onSuccessCallback: a
  } = e, {
    page: s,
    pageSize: d,
    categoryId: f,
    integrationType: p,
    minUserInstallCommandCount: _,
    excludeAppsWithCustomInstallUrl: h,
    excludeNonEmbeddedApps: g,
    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
    source: b = o.V.APP_DIRECTORY
  } = null != i ? i : {}, O = Date.now(), v = m.A.getFetchState({
    query: n,
    guildId: r,
    page: s,
    pageSize: d,
    categoryId: f,
    integrationType: p
  }), {
    lastFetchTimeMs: A
  } = null != (t = m.A.getSearchResults({
    query: n,
    guildId: r,
    page: s,
    pageSize: d,
    categoryId: f,
    integrationType: p
  })) ? t : {};
  if (v !== m.e.FETCHING && (null == A || !(A + I > O))) {
    c.h.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
      query: n,
      guildId: r,
      page: s,
      pageSize: d,
      categoryId: f,
      integrationType: p,
      minUserInstallCommandCount: _,
      excludeAppsWithCustomInstallUrl: h,
      excludeNonEmbeddedApps: g,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
      source: b
    });
    try {
      let e = await l.Bo.get({
        url: y.Rsh.APPLICATION_DIRECTORY_SEARCH,
        query: {
          query: n,
          guild_id: r,
          page: s,
          page_size: d,
          category_id: f,
          locale: u.default.locale,
          integration_type: p,
          min_user_install_command_count: _,
          exclude_apps_with_custom_install_url: h,
          exclude_non_embedded_apps: g,
          exclude_embedded_apps_without_primary_entry_point_app_command: E,
          source: b
        },
        rejectWithError: true
      });
      c.h.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
        query: n,
        guildId: r,
        page: s,
        pageSize: d,
        categoryId: f,
        integrationType: p,
        result: {
          results: e.body.results,
          countsByCategory: e.body.counts_by_category,
          totalCount: e.body.result_count,
          totalPages: e.body.num_pages,
          type: e.body.type,
          loadId: e.body.load_id
        },
        minUserInstallCommandCount: _,
        excludeAppsWithCustomInstallUrl: h,
        excludeNonEmbeddedApps: g,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
        source: b
      }), null == a || a(e.body.result_count)
    } catch (e) {
      c.h.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
        query: n,
        guildId: r,
        page: s,
        pageSize: d,
        categoryId: f,
        integrationType: p,
        minUserInstallCommandCount: _,
        excludeAppsWithCustomInstallUrl: h,
        excludeNonEmbeddedApps: g,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
        source: b
      })
    }
  }
}

function P() {
  return (0, f.isAndroid)() ? a.T.ANDROID : (0, f.isIOS)() ? a.T.IOS : a.T.WEB
}
async function D() {
  let {
    surface: e = s.K.APPLICATION_DIRECTORY,
    activeState: t = i.W.ACTIVE
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = d.default.disableAppCollectionsCache, r = Date.now(), a = h.A.getFetchState({
    surface: e,
    activeState: t
  }), o = h.A.getLastFetchTimeMs({
    surface: e,
    activeState: t
  });
  if (a === h.e.FETCHING) return;
  let f = !n && t === i.W.ACTIVE;
  if (!f || null == o || !(o + I > r)) {
    c.h.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
      surface: e,
      activeState: t
    });
    try {
      let n = await l.Bo.get({
        url: y.Rsh.APPLICATION_DIRECTORY_COLLECTIONS,
        query: {
          surface: e,
          active_state: t,
          platform: P(),
          locale: u.default.locale,
          cache: f
        },
        rejectWithError: true
      });
      c.h.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
        collections: n.body,
        surface: e,
        activeState: t
      })
    } catch (n) {
      c.h.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
        surface: e,
        activeState: t
      })
    }
  }
}
async function x() {
  let e = Date.now(),
    t = E.A.getFetchState(),
    n = E.A.getLastFetchTimeMs(),
    r = E.A.getNextFetchRetryTimeMs();
  if (t !== E.e.FETCHING && (null == n || !(n + A > e)) && (null == r || !(e < r))) {
    c.h.dispatch({
      type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
    });
    try {
      let e = await l.Bo.get({
        url: y.Rsh.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
        rejectWithError: false
      });
      c.h.dispatch({
        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
        guildIdToApplicationIds: e.body
      })
    } catch (t) {
      var i;
      let e = (null == t ? true : t.status) === 429;
      c.h.dispatch({
        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
        retryAfterSeconds: e ? null == t || null == (i = t.body) ? true : i.retry_after : true
      })
    }
  }
}