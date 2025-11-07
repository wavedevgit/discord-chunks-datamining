/** Chunk was on web.js **/
/** chunk id: 471518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CP: () => N,
  T4: () => R,
  XK: () => D,
  g5: () => x,
  gZ: () => A,
  i6: () => C,
  yC: () => P
}), require("./388685.js");
var Chunk261470 = require("./261470.js"),
  Chunk535655 = require("./535655.js"),
  Chunk344372 = require("./344372.js"),
  Chunk973693 = require("./973693.js"),
  Chunk288385 = require("./288385.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js");
require("./432877.js");
var Chunk706454 = require("./706454.js"),
  Chunk857192 = require("./857192.js"),
  Chunk358085 = require("./358085.js"),
  Chunk370210 = require("./370210.js"),
  Chunk678694 = require("./678694.js"),
  Chunk425986 = require("./425986.js"),
  Chunk177653 = require("./177653.js"),
  Chunk255333 = require("./255333.js"),
  Chunk204298 = require("./204298.js"),
  Chunk981631 = require("./981631.js");
let y = 1e3,
  O = 5e3,
  v = 10,
  I = 864e5,
  S = 6e5,
  T = new Map;
async function A(e) {
  var t;
  let n = Date.now(),
    i = null != (t = T.get(e)) ? t : 0;
  if (_.Z.getApplicationFetchState(e) === _.M.FETCHING || _.Z.isInvalidApplication(e) || n < i + S) return;
  T.set(e, n), c.Z.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
    applicationId: e
  });
  let a = new r.Z(y, O),
    o = (e, t) => 429 === e.status && a.fails < v && (a.fail(() => {
      t(true, o)
    }), true);
  try {
    let t = (await l.tn.get({
      url: b.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
      backoff: a,
      retries: v,
      interceptResponse: o,
      rejectWithError: false
    })).body;
    c.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
      application: t
    })
  } catch (t) {
    c.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
      applicationId: e,
      isInvalidApplication: true
    })
  }
}
async function C(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    n = Date.now(),
    r = _.Z.getApplicationFetchState(e),
    i = _.Z.getApplicationLastFetchTime(e),
    {
      dontRefetchMs: a,
      noCache: o
    } = t,
    s = null != i && i + (null != a ? a : S) > n;
  if (r !== _.M.FETCHING && !s) {
    c.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
      applicationId: e
    });
    try {
      let t = await l.tn.get({
        url: b.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
        query: {
          locale: u.default.locale,
          nocache: o
        },
        rejectWithError: true
      });
      c.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
        application: t.body
      })
    } catch (t) {
      c.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
        applicationId: e,
        isInvalidApplication: true
      })
    }
  }
}
async function N() {
  let e = Date.now(),
    t = Chunk678694.Z.getLastFetchTimeMs();
  if (null != exports && exports + S > module) return;
  let n = await Chunk544891.tn.get({
    url: Chunk981631.ANM.APPLICATION_DIRECTORY_CATEGORIES,
    query: {
      locale: Chunk706454.default.locale
    },
    rejectWithError: false
  });
  Chunk570140.Z.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
    categories: require.body
  })
}
async function R(e) {
  var t;
  let {
    applicationId: n,
    guildId: r,
    options: i
  } = e, {
    page: a
  } = null != i ? i : {}, o = Date.now(), s = g.Z.getFetchState({
    applicationId: n,
    guildId: r
  }), {
    lastFetchTimeMs: d
  } = null != (t = g.Z.getSimilarApplications({
    applicationId: n,
    guildId: r
  })) ? t : {};
  if (s !== g.M.FETCHING && (null == d || !(d + S > o))) {
    c.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
      applicationId: n,
      guildId: r,
      page: a
    });
    try {
      let e = await l.tn.get({
        url: b.ANM.APPLICATION_DIRECTORY_SIMILAR(n),
        query: {
          guild_id: r,
          page: a,
          locale: u.default.locale
        },
        rejectWithError: true
      });
      c.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
        applicationId: n,
        guildId: r,
        similarApplications: e.body.applications,
        loadId: e.body.load_id,
        page: a,
        totalPages: e.body.num_pages
      })
    } catch (e) {
      c.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
        applicationId: n,
        guildId: r,
        page: a
      })
    }
  }
}
async function P(e) {
  var t;
  let {
    query: n,
    guildId: r,
    options: i,
    onSuccessCallback: a
  } = e, {
    page: o,
    pageSize: d,
    categoryId: f,
    integrationType: _,
    minUserInstallCommandCount: p,
    excludeAppsWithCustomInstallUrl: h,
    excludeNonEmbeddedApps: g,
    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
    source: y = s.F.APP_DIRECTORY
  } = null != i ? i : {}, O = Date.now(), v = m.Z.getFetchState({
    query: n,
    guildId: r,
    page: o,
    pageSize: d,
    categoryId: f,
    integrationType: _
  }), {
    lastFetchTimeMs: I
  } = null != (t = m.Z.getSearchResults({
    query: n,
    guildId: r,
    page: o,
    pageSize: d,
    categoryId: f,
    integrationType: _
  })) ? t : {};
  if (v !== m.M.FETCHING && (null == I || !(I + S > O))) {
    c.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
      query: n,
      guildId: r,
      page: o,
      pageSize: d,
      categoryId: f,
      integrationType: _,
      minUserInstallCommandCount: p,
      excludeAppsWithCustomInstallUrl: h,
      excludeNonEmbeddedApps: g,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
      source: y
    });
    try {
      let e = await l.tn.get({
        url: b.ANM.APPLICATION_DIRECTORY_SEARCH,
        query: {
          query: n,
          guild_id: r,
          page: o,
          page_size: d,
          category_id: f,
          locale: u.default.locale,
          integration_type: _,
          min_user_install_command_count: p,
          exclude_apps_with_custom_install_url: h,
          exclude_non_embedded_apps: g,
          exclude_embedded_apps_without_primary_entry_point_app_command: E,
          source: y
        },
        rejectWithError: true
      });
      c.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
        query: n,
        guildId: r,
        page: o,
        pageSize: d,
        categoryId: f,
        integrationType: _,
        result: {
          results: e.body.results,
          countsByCategory: e.body.counts_by_category,
          totalCount: e.body.result_count,
          totalPages: e.body.num_pages,
          type: e.body.type,
          loadId: e.body.load_id
        },
        minUserInstallCommandCount: p,
        excludeAppsWithCustomInstallUrl: h,
        excludeNonEmbeddedApps: g,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
        source: y
      }), null == a || a(e.body.result_count)
    } catch (e) {
      c.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
        query: n,
        guildId: r,
        page: o,
        pageSize: d,
        categoryId: f,
        integrationType: _,
        minUserInstallCommandCount: p,
        excludeAppsWithCustomInstallUrl: h,
        excludeNonEmbeddedApps: g,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
        source: y
      })
    }
  }
}

function w() {
  return (0, Chunk358085.isAndroid)() ? Chunk344372.R.ANDROID : (0, Chunk358085.isIOS)() ? Chunk344372.R.IOS : Chunk344372.R.WEB
}
async function D() {
  let {
    surface: e = Chunk973693.Y.APPLICATION_DIRECTORY,
    activeState: t = Chunk535655.E.ACTIVE
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = Chunk857192.default.disableAppCollectionsCache, r = Date.now(), a = Chunk425986.Z.getFetchState({
    surface: module,
    activeState: exports
  }), s = Chunk425986.Z.getLastFetchTimeMs({
    surface: module,
    activeState: exports
  });
  if (Chunk344372 === Chunk425986.M.FETCHING) return;
  let f = !require && exports === Chunk535655.E.ACTIVE;
  if (!Chunk358085 || null == Chunk288385 || !(Chunk288385 + S > Chunk261470)) {
    Chunk570140.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
      surface: module,
      activeState: exports
    });
    try {
      let n = await Chunk544891.tn.get({
        url: Chunk981631.ANM.APPLICATION_DIRECTORY_COLLECTIONS,
        query: {
          surface: module,
          active_state: exports,
          platform: w(),
          locale: Chunk706454.default.locale,
          cache: Chunk358085
        },
        rejectWithError: true
      });
      Chunk570140.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
        collections: require.body,
        surface: module,
        activeState: exports
      })
    } catch (n) {
      Chunk570140.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
        surface: module,
        activeState: exports
      })
    }
  }
}
async function x() {
  let e = Date.now(),
    t = Chunk204298.Z.getFetchState(),
    n = Chunk204298.Z.getLastFetchTimeMs(),
    r = Chunk204298.Z.getNextFetchRetryTimeMs();
  if (exports !== Chunk204298.M.FETCHING && (null == require || !(require + I > module)) && (null == Chunk261470 || !(module < Chunk261470))) {
    Chunk570140.Z.dispatch({
      type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
    });
    try {
      let e = await Chunk544891.tn.get({
        url: Chunk981631.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
        rejectWithError: false
      });
      Chunk570140.Z.dispatch({
        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
        guildIdToApplicationIds: module.body
      })
    } catch (t) {
      var i;
      let e = (null == exports ? true : exports.status) === 429;
      Chunk570140.Z.dispatch({
        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
        retryAfterSeconds: module ? null == exports || null == (i = exports.body) ? true : Chunk535655.retry_after : true
      })
    }
  }
}