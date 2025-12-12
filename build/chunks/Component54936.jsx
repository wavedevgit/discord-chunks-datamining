/** Chunk was on web.js **/
/** chunk id: 54936, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => m
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk910111 = require("./910111.jsx"),
  Chunk732559 = require("./732559.jsx"),
  Chunk723851 = require("./723851.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84637 = require("./84637.js");
let p = {
  [Chunk981631.TaA.WINDOWS]: {
    icon: Chunk723851.Z,
    getLabel: () => Chunk388032.intl.string(Chunk388032.t["0/xHFO"])
  },
  [Chunk981631.TaA.MACOS]: {
    icon: Chunk732559.Z,
    getLabel: () => Chunk388032.intl.string(Chunk388032.t.E4u4n5)
  },
  [Chunk981631.TaA.LINUX]: {
    icon: Chunk910111.Z,
    getLabel: () => Chunk388032.intl.string(Chunk388032.t.tcawo3)
  }
};

function _(e) {
  let {
    operatingSystem: t,
    className: n
  } = e, i = p[t];
  if (null == i) throw Error("Unexpected operating system: ".concat(t));
  let o = i.icon;
  return (0, r.jsx)(a.u, {
    text: i.getLabel(),
    children: (0, r.jsx)(o, {
      className: n
    })
  })
}
let m = e => {
  let {
    systems: t,
    className: n,
    iconClassName: i
  } = e;
  return (0, r.jsx)("div", {
    className: o()(f.OSSection, n),
    children: t.map(e => (0, r.jsx)(_, {
      operatingSystem: e,
      className: o()(f.purchaseUnitOperatingSystem, i)
    }, e))
  })
}