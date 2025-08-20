/** Chunk was on web.js **/
/** chunk id: 918257, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk906732 = require("./906732.jsx"),
  Chunk208049 = require("./208049.js"),
  Chunk242291 = require("./242291.js"),
  Chunk63063 = require("./63063.js"),
  Chunk36703 = require("./36703.js"),
  Chunk674343 = require("./674343.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, o.pI)(), {
    analyticsLocations: f
  } = (0, i.ZP)();

  function _(e) {
    n = (0, l.A)(e), (0, a.xz)(n, f)
  }
  return (0, r.jsx)(c.Z, {
    title: d.intl.string(d.t.xbMc8v),
    description: d.intl.format(d.t.BPbGq6, {
      helpCenterArticle: s.Z.getArticleURL(u.BhN.SOUNDBOARD)
    }),
    label: d.intl.string(d.t.kbFsAA),
    volume: n,
    onVolumeChange: _,
    refreshStyles: t
  })
}