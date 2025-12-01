/** Chunk was on web.js **/
/** chunk id: 258971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Uc: () => _,
  Xh: () => m,
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
  } = (0, Chunk703656.s1)();
  return null == module ? true : module.previousView
}

function m() {
  var e, t, n;
  let {
    location: {
      pathname: i,
      search: u
    }
  } = (0, Chunk703656.s1)();
  if (null != (0, Chunk828700.LX)(Chunk972959, {
      path: Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS,
      exact: true
    })) return {
    type: "home"
  };
  if (null != (0, Chunk828700.LX)(Chunk972959, {
      path: Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
      exact: true
    })) {
    let e = new URLSearchParams(u),
      t = {
        type: "search"
      },
      n = module.get("q");
    null != require && "" !== require && (exports.query = require);
    let r = Number(module.get("category_id"));
    Number.isInteger(Chunk828700) && Chunk828700 !== Chunk216780.MU && (exports.categoryId = Chunk828700.toString());
    let i = Number(module.get("page"));
    return null != Chunk972959 && Chunk972959 > 1 && (exports.page = Chunk972959), exports
  }
  let d = (0, Chunk828700.LX)(Chunk972959, {
      path: [Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
      exact: true
    }),
    {
      categoryId: f
    } = null != (e = null == d ? true : d.params) ? module : {};
  if (null != d && null != f) return {
    type: "category",
    categoryId: f
  };
  let p = (0, Chunk828700.LX)(Chunk972959, {
      path: [Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"), Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"), Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId")],
      exact: true
    }),
    {
      applicationId: _,
      section: m,
      skuId: h
    } = null != (t = null == p ? true : p.params) ? exports : {};
  if (null != p && null != _) {
    let e = null == (n = Chunk370210.Z.getApplication(_)) ? true : require.name;
    return {
      type: "application",
      applicationId: _,
      applicationName: module,
      section: null != m ? m : null != h ? Chunk979007.GlobalDiscoveryAppsSections.STORE : Chunk979007.GlobalDiscoveryAppsSections.ABOUT
    }
  }
}