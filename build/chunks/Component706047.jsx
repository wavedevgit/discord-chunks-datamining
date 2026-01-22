/** Chunk was on web.js **/
/** chunk id: 706047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk965957 = require("./965957.js"),
  Chunk312671 = require("./312671.js"),
  Chunk552122 = require("./552122.js"),
  Chunk235079 = require("./235079.js"),
  Chunk985018 = require("./985018.jsx");

function p() {
  let e = (0, s.bG)([c.A], () => c.A.getSoundpack()),
    t = u.A.useHolidaySoundpack();
  a()(null != t, "should not render this without a holiday soundpack");
  let n = [{
    id: "default",
    value: d.i.CLASSIC,
    label: f.intl.string(f.t.p3Hg5W)
  }, {
    id: "holiday",
    value: t.soundpack,
    label: f.intl.string(t.soundpackLabel)
  }];
  return (0, r.jsx)(o.l6P, {
    selectionMode: "single",
    label: f.intl.string(f.t.fgSHf8),
    onSelectionChange: l.p,
    value: e,
    options: n,
    maxOptionsVisible: n.length
  })
}