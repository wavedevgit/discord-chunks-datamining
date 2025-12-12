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
  Chunk5570 = require("./5570.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk884984 = require("./884984.js");
let _ = (e, t) => e === t ? p.themePillItemSelected : true;

function m() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    t = (0, Chunk481060.wjy)(module) ? Chunk231338.BR.DARK : Chunk231338.BR.LIGHT,
    n = [{
      name: "",
      value: Chunk231338.BR.DARK,
      icon: Chunk657707.Z6G,
      className: _(exports, Chunk231338.BR.DARK),
      tooltip: Chunk388032.intl.string(Chunk5570.default["Dk+OWY"]),
      tooltipAriaLabel: Chunk388032.intl.string(Chunk5570.default["Dk+OWY"])
    }, {
      name: "",
      value: Chunk231338.BR.LIGHT,
      icon: Chunk657707.chG,
      className: _(exports, Chunk231338.BR.LIGHT),
      tooltip: Chunk388032.intl.string(Chunk5570.default["5vlJkY"]),
      tooltipAriaLabel: Chunk388032.intl.string(Chunk5570.default["5vlJkY"])
    }];
  return (0, Chunk54381.jsx)(Chunk481060.sY7, {
    className: Chunk884984.themeSelector,
    options: require,
    value: exports,
    onChange: e => {
      let {
        value: t
      } = e;
      (0, c.HV)(), (0, l.Bv)(t)
    },
    look: "pill"
  })
}