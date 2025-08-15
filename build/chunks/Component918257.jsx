/** Chunk was on 30202 **/
/** chunk id: 918257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, a.pI)(), {
    analyticsLocations: m
  } = (0, r.ZP)();
  return (0, i.jsx)(c.Z, {
    title: u.intl.string(u.t.xbMc8v),
    description: u.intl.format(u.t.BPbGq6, {
      helpCenterArticle: l.Z.getArticleURL(d.BhN.SOUNDBOARD)
    }),
    label: u.intl.string(u.t.kbFsAA),
    volume: n,
    onVolumeChange: function(e) {
      n = (0, o.A)(e), (0, s.xz)(n, m)
    },
    refreshStyles: t
  })
}