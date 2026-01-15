/** Chunk was on web.js **/
/** chunk id: 258971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Uc: () => _,
  Xh: () => h,
  aQ: () => d,
  m_: () => u,
  xF: () => f,
  z8: () => p
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk828700 = require("./828700.js"),
  Chunk972959 = require("./972959.js"),
  Chunk703656 = require("./703656.js"),
  Chunk370210 = require("./370210.js"),
  Chunk216780 = require("./216780.js"),
  Chunk979007 = require("./979007.js"),
  Chunk981631 = require("./981631.js"),
  u = function(e) {
    return e.HOME = "home", e.SEARCH = "search", e.APPLICATION = "application", e.CATEGORY = "category", e
  }({});
let d = (0, Chunk972959.H)(() => ({}));
var f = function(e) {
  return e.EXTERNAL = "External", e.KEYBOARD_SHORTCUT = "Keyboard Shortcut", e.APPLICATION_DIRECTORY_URL = "Application Directory URL", e.APPLICATION_MESSAGE_EMBED = "Application Message Embed", e.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", e.GUILD_HEADER_POPOUT = "Guild Header Popout", e.GUILD_SETTINGS = "Guild Settings", e.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", e.GUILD_CONTEXT_MENU = "Guild Context Menu", e.OAUTH2_EMBED = "OAuth2 Embed", e.GLOBAL_DISCOVERY_BUTTON = "Global Discovery Button", e.GLOBAL_DISCOVERY_SIDEBAR = "Global Discovery Sidebar", e
}({});
let p = (0, Chunk972959.H)(() => ({
  sessionId: null,
  guildId: null,
  entrypoint: null,
  trackedOpenedFromExternalEntrypoint: false
}));

function _() {
  let {
    location: {
      state: e
    }
  } = (0, a.s1)();
  return null == e ? true : e.previousView
}

function h() {
  var e, t, n;
  let {
    location: {
      pathname: i,
      search: u
    }
  } = (0, a.s1)();
  if (null != (0, r.LX)(i, {
      path: c.Z5c.GLOBAL_DISCOVERY_APPS,
      exact: true
    })) return {
    type: "home"
  };
  if (null != (0, r.LX)(i, {
      path: c.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
      exact: true
    })) {
    let e = new URLSearchParams(u),
      t = {
        type: "search"
      },
      n = e.get("q");
    null != n && "" !== n && (t.query = n);
    let r = Number(e.get("category_id"));
    Number.isInteger(r) && r !== s.MU && (t.categoryId = r.toString());
    let i = Number(e.get("page"));
    return null != i && i > 1 && (t.page = i), t
  }
  let d = (0, r.LX)(i, {
      path: [c.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
      exact: true
    }),
    {
      categoryId: f
    } = null != (e = null == d ? true : d.params) ? e : {};
  if (null != d && null != f) return {
    type: "category",
    categoryId: f
  };
  let p = (0, r.LX)(i, {
      path: [c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"), c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"), c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId")],
      exact: true
    }),
    {
      applicationId: _,
      section: h,
      skuId: m
    } = null != (t = null == p ? true : p.params) ? t : {};
  if (null != p && null != _) {
    let e = null == (n = o.Z.getApplication(_)) ? true : n.name;
    return {
      type: "application",
      applicationId: _,
      applicationName: e,
      section: null != h ? h : null != m ? l.GlobalDiscoveryAppsSections.STORE : l.GlobalDiscoveryAppsSections.ABOUT
    }
  }
}