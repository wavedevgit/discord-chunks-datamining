/** Chunk was on 92917 **/
/** chunk id: 678480, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => g
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk547056 = require("./547056.jsx"),
  Chunk169295 = require("./169295.jsx"),
  Chunk18301 = require("./18301.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk860894 = require("./860894.js");
let m = {
  [Chunk652215.uje.WINDOWS]: {
    icon: Chunk18301.A,
    getLabel: () => d.intl.string(d.t["0/xHFO"])
  },
  [Chunk652215.uje.MACOS]: {
    icon: Chunk169295.A,
    getLabel: () => d.intl.string(d.t.E4u4n5)
  },
  [Chunk652215.uje.LINUX]: {
    icon: Chunk547056.A,
    getLabel: () => d.intl.string(d.t.tcawo3)
  }
};

function f(e) {
  let {
    operatingSystem: t,
    className: n
  } = e, i = m[t];
  if (null == i) throw Error("Unexpected operating system: ".concat(t));
  let l = i.icon;
  return (0, r.jsx)(a.m, {
    text: i.getLabel(),
    children: (0, r.jsx)(l, {
      className: n
    })
  })
}
let g = e => {
  let {
    systems: t,
    className: n,
    iconClassName: i
  } = e;
  return (0, r.jsx)("div", {
    className: l()(p.I, n),
    children: t.map(e => (0, r.jsx)(f, {
      operatingSystem: e,
      className: l()(p.A, i)
    }, e))
  })
}