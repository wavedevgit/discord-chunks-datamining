/** Chunk was on web.js **/
/** chunk id: 456116, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $L: () => g,
  Oz: () => p
});
var Chunk481060 = require("./481060.js"),
  Chunk864806 = require("./864806.jsx"),
  Chunk706872 = require("./706872.jsx"),
  Chunk400058 = require("./400058.jsx"),
  Chunk112726 = require("./112726.jsx"),
  Chunk244318 = require("./244318.jsx"),
  Chunk461318 = require("./461318.jsx"),
  Chunk231195 = require("./231195.jsx"),
  Chunk610750 = require("./610750.jsx"),
  Chunk80148 = require("./80148.js"),
  Chunk472826 = require("./472826.jsx"),
  p = function(e) {
    return e.PAYMENTS = "payments", e.VIRTUAL_CURRENCY = "virtual-currency", e.NITRO = "nitro", e
  }({});
let h = ["Revenue Storybook", "Revenue Playground"],
  m = {
    id: "payments",
    name: "Payments",
    groups: [Chunk400058.C, Chunk472826.iZ, Chunk244318.R, Chunk112726.pl, Chunk80148.W],
    tags: h,
    IconComponent: Chunk481060.uMN
  },
  g = {
    playgroundBaseUrl: "revenue",
    collections: [m, {
      id: "virtual-currency",
      name: "Virtual Currency",
      groups: [Chunk706872.Oi, Chunk864806.vP, Chunk231195.X, Chunk610750.R],
      tags: h,
      IconComponent: Chunk481060.aQr
    }, {
      id: "nitro",
      name: "Nitro",
      groups: [Chunk461318.De],
      tags: h,
      IconComponent: Chunk481060.SrA
    }]
  }