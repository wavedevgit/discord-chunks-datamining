/** Chunk was on web.js **/
/** chunk id: 476756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk716364 = require("./716364.js"),
  Chunk474873 = require("./474873.js"),
  Chunk197344 = require("./197344.js"),
  Chunk871465 = require("./871465.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  let e = (0, o.e7)([c.Z], () => c.Z.getSoundpack()),
    t = u.Z.useHolidaySoundpack();
  a()(null != t, "should not render this without a holiday soundpack");
  let n = [{
    value: d.Y.CLASSIC,
    label: f.intl.string(f.t.p3Hg5W)
  }, {
    value: t.soundpack,
    label: f.intl.string(t.soundpackLabel)
  }];
  return (0, r.jsx)(s.y6, {
    label: f.intl.string(f.t.fgSHf8),
    onChange: l.c,
    value: e,
    options: n,
    maxVisibleItems: n.length
  })
}