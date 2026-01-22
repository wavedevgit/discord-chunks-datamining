/** Chunk was on web.js **/
/** chunk id: 310419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bn: () => _,
  R4: () => h,
  ev: () => u,
  h: () => p,
  sW: () => f,
  tS: () => d
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk960488 = require("./960488.js"),
  Chunk839214 = require("./839214.js"),
  Chunk976860 = require("./976860.js"),
  Chunk212534 = require("./212534.js"),
  Chunk767599 = require("./767599.js"),
  Chunk435220 = require("./435220.js"),
  Chunk652215 = require("./652215.js"),
  u = function(e) {
    return e.HOME = "home", e.SEARCH = "search", e.APPLICATION = "application", e.CATEGORY = "category", e
  }({});
let d = (0, Chunk839214.D)(() => ({}));
var f = function(e) {
  return e.EXTERNAL = "External", e.KEYBOARD_SHORTCUT = "Keyboard Shortcut", e.APPLICATION_DIRECTORY_URL = "Application Directory URL", e.APPLICATION_MESSAGE_EMBED = "Application Message Embed", e.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", e.GUILD_HEADER_POPOUT = "Guild Header Popout", e.GUILD_SETTINGS = "Guild Settings", e.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", e.GUILD_CONTEXT_MENU = "Guild Context Menu", e.OAUTH2_EMBED = "OAuth2 Embed", e.GLOBAL_DISCOVERY_BUTTON = "Global Discovery Button", e.GLOBAL_DISCOVERY_SIDEBAR = "Global Discovery Sidebar", e
}({});
let p = (0, Chunk839214.D)(() => ({
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
  } = (0, a.JK)();
  return null == e ? true : e.previousView
}

function h() {
  var e, t, n;
  let {
    location: {
      pathname: i,
      search: u
    }
  } = (0, a.JK)();
  if (null != (0, r.B6)(i, {
      path: c.BVt.GLOBAL_DISCOVERY_APPS,
      exact: true
    })) return {
    type: "home"
  };
  if (null != (0, r.B6)(i, {
      path: c.BVt.GLOBAL_DISCOVERY_APPS_SEARCH,
      exact: true
    })) {
    let e = new URLSearchParams(u),
      t = {
        type: "search"
      },
      n = e.get("q");
    null != n && "" !== n && (t.query = n);
    let r = Number(e.get("category_id"));
    Number.isInteger(r) && r !== o.lj && (t.categoryId = r.toString());
    let i = Number(e.get("page"));
    return null != i && i > 1 && (t.page = i), t
  }
  let d = (0, r.B6)(i, {
      path: [c.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
      exact: true
    }),
    {
      categoryId: f
    } = null != (e = null == d ? true : d.params) ? e : {};
  if (null != d && null != f) return {
    type: "category",
    categoryId: f
  };
  let p = (0, r.B6)(i, {
      path: [c.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"), c.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"), c.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId")],
      exact: true
    }),
    {
      applicationId: _,
      section: h,
      skuId: m
    } = null != (t = null == p ? true : p.params) ? t : {};
  if (null != p && null != _) {
    let e = null == (n = s.A.getApplication(_)) ? true : n.name;
    return {
      type: "application",
      applicationId: _,
      applicationName: e,
      section: null != h ? h : null != m ? l.GlobalDiscoveryAppsSections.STORE : l.GlobalDiscoveryAppsSections.ABOUT
    }
  }
}