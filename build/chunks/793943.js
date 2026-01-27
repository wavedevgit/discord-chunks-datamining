/** Chunk was on web.js **/
/** chunk id: 793943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HP: () => a,
  Jp: () => c,
  fy: () => s,
  nf: () => l,
  xv: () => o
});
var Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  a = function(e) {
    return e.CLIENT_THEMES = "CLIENT_THEMES", e.APP_ICON = "APP_ICON", e.CUSTOM_THEME = "CUSTOM_THEME", e.APPLICATION_TEST_MODE_DEBUG = "APPLICATION_TEST_MODE_DEBUG", e
  }({}),
  o = function(e) {
    return e.CLIENT_THEMES_EDITOR = "CLIENT_THEMES_EDITOR", e.SETTING = "SETTING", e.SHARE_MESSAGE = "SHARE_MESSAGE", e
  }({});
let s = (0, Chunk353640.v)(() => ({
  activePanel: null,
  metadata: null
}));

function l(e, t) {
  (0, i.r)(() => {
    s.setState({
      activePanel: e,
      metadata: null != t ? t : null
    })
  })
}

function c() {
  (0, i.r)(() => {
    s.setState({
      activePanel: null,
      metadata: null
    })
  })
}