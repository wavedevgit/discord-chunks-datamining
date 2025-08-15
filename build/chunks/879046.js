/** Chunk was on 30243 **/
/** chunk id: 879046, original params: e,t,r (module,exports,require) **/
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
  } = e, r = (0, i.q)(t.extra.application_id), u = null == r ? true : r.getIconURL(c.Si.LARGE), d = t.extra.activity_name, p = (0, a.Jg)(t) ? s.t.vPg1JS : s.t.rPqqtr, f = {
    onClick: () => {
      n.__(l._b.TEXT, o.Ie.NORMAL, {
        applicationId: t.extra.application_id
      })
    },
    ariaDescription: s.intl.formatToPlainString(s.t.NTHttL, {
      title: d
    })
  };
  return {
    thumbnailUrl: u,
    title: d,
    titleClickable: f,
    thumbnailClickable: f,
    userDescription: p
  }
}