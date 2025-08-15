/** Chunk was on web.js **/
/** chunk id: 550385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ll: () => c,
  XO: () => l,
  oq: () => s,
  tE: () => o,
  wh: () => a
});
var Chunk97519 = require("./97519.js"),
  Chunk731965 = require("./731965.js"),
  a = function(e) {
    return e.CLIENT_THEMES = "CLIENT_THEMES", e.APP_ICON = "APP_ICON", e.CUSTOM_THEME = "CUSTOM_THEME", e
  }({}),
  o = function(e) {
    return e.CLIENT_THEMES_EDITOR = "CLIENT_THEMES_EDITOR", e.SETTING = "SETTING", e
  }({});
let s = (0, Chunk97519.U)(() => ({
  activePanel: null,
  metadata: null
}));

function l(e, t) {
  (0, i.j)(() => {
    s.setState({
      activePanel: e,
      metadata: null != t ? t : null
    })
  })
}

function c() {
  (0, Chunk731965.j)(() => {
    s.setState({
      activePanel: null,
      metadata: null
    })
  })
}