/** Chunk was on web.js **/
/** chunk id: 714097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk866419 = require("./866419.js"),
  Chunk771934 = require("./771934.js"),
  Chunk231338 = require("./231338.js"),
  Chunk831989 = require("./831989.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk346722 = require("./346722.js");
let _ = (e, t) => e === t ? p.themePillItemSelected : true;

function m() {
  let e = (0, a.e7)([s.Z], () => s.Z.theme),
    t = (0, o.wjy)(e) ? u.BR.DARK : u.BR.LIGHT,
    n = [{
      name: "",
      value: u.BR.DARK,
      icon: i.Z6G,
      className: _(t, u.BR.DARK),
      tooltip: f.intl.string(d.default["Dk+OWY"]),
      tooltipAriaLabel: f.intl.string(d.default["Dk+OWY"])
    }, {
      name: "",
      value: u.BR.LIGHT,
      icon: i.chG,
      className: _(t, u.BR.LIGHT),
      tooltip: f.intl.string(d.default["5vlJkY"]),
      tooltipAriaLabel: f.intl.string(d.default["5vlJkY"])
    }];
  return (0, r.jsx)(o.sY7, {
    className: p.themeSelector,
    options: n,
    value: t,
    onChange: e => {
      let {
        value: t
      } = e;
      (0, c.HV)(), (0, l.Bv)(t)
    },
    look: "pill"
  })
}