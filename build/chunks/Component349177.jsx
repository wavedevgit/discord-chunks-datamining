/** Chunk was on web.js **/
/** chunk id: 349177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk235433 = require("./235433.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560553 = require("./560553.js");

function u(e) {
  var t, n;
  return (0, r.jsxs)(a.Z, {
    errors: e.errors,
    disabled: e.disabled,
    title: l.intl.string(l.t["9AjdkJ"]),
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)(i.oil, {
        placeholder: e.placeholder,
        maxLength: s.JuI,
        onChange: e.onGlobalNameChange,
        value: null != (n = null != (t = e.pendingGlobalName) ? t : e.currentGlobalName) ? n : ""
      })
    }), (0, r.jsx)(o.Z, {
      user: e.user,
      className: c.displayNameStylesSection
    })]
  })
}