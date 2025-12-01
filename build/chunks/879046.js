/** Chunk was on web.js **/
/** chunk id: 879046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk835473 = require("./835473.js"),
  Chunk541716 = require("./541716.js"),
  Chunk561308 = require("./561308.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    entry: t
  } = e, n = (0, a.q)(t.extra.application_id), u = null == n ? true : n.getIconURL(l.Si.LARGE), d = t.extra.activity_name, f = (0, s.Jg)(t) ? c.t.vPg1JT : c.t.rPqqts, p = {
    onClick: () => {
      r._(i._b.TEXT, o.Ie.NORMAL, {
        applicationId: t.extra.application_id
      })
    },
    ariaDescription: c.intl.formatToPlainString(c.t.NTHttN, {
      title: d
    })
  };
  return {
    thumbnailUrl: u,
    title: d,
    titleClickable: p,
    thumbnailClickable: p,
    userDescription: f
  }
}