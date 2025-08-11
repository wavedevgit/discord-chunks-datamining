/** Chunk was on web.js **/
/** chunk id: 536847, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk866419 = require("./866419.js"),
  Chunk771934 = require("./771934.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk531864 = require("./531864.js");
let _ = (e, t) => e === t ? f.themePillItemSelected : true;

function p() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    t = (0, Chunk481060.wjy)(module) ? Chunk231338.BR.DARK : Chunk231338.BR.LIGHT,
    n = [{
      name: Chunk388032.intl.string(Chunk388032.t.b8Cei4),
      value: Chunk231338.BR.DARK,
      icon: Chunk657707.Z6G,
      className: _(exports, Chunk231338.BR.DARK)
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.K2sFfn),
      value: Chunk231338.BR.LIGHT,
      icon: Chunk657707.chG,
      className: _(exports, Chunk231338.BR.LIGHT)
    }];
  return (0, Chunk255367.jsx)(Chunk481060.sY7, {
    className: Chunk531864.themeSelector,
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