/** Chunk was on web.js **/
/** chunk id: 278938, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544028 = require("./544028.js"),
  Chunk230835 = require("./230835.js"),
  Chunk738419 = require("./738419.js"),
  Chunk818348 = require("./818348.js"),
  Chunk520650 = require("./520650.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk792352 = require("./792352.js");
let _ = (e, t) => e === t ? p.HE : true;

function h() {
  let e = (0, a.bG)([s.A], () => s.A.theme),
    t = (0, o.Mwr)(e) ? u.NJ.DARK : u.NJ.LIGHT,
    n = [{
      name: "",
      value: u.NJ.DARK,
      icon: i.ThemeDarkIcon,
      className: _(t, u.NJ.DARK),
      tooltip: f.intl.string(d.default["Dk+OWY"]),
      tooltipAriaLabel: f.intl.string(d.default["Dk+OWY"])
    }, {
      name: "",
      value: u.NJ.LIGHT,
      icon: i.ThemeLightIcon,
      className: _(t, u.NJ.LIGHT),
      tooltip: f.intl.string(d.default["5vlJkY"]),
      tooltipAriaLabel: f.intl.string(d.default["5vlJkY"])
    }];
  return (0, r.jsx)(o.IzF, {
    className: p.t7,
    optionClassName: p.aF,
    options: n,
    value: t,
    onChange: e => {
      let {
        value: t
      } = e;
      (0, c.dR)(), (0, l.IE)(t)
    },
    look: "pill"
  })
}