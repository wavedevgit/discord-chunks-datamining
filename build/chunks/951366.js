/** Chunk was on web.js **/
/** chunk id: 951366, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $L: () => E,
  Oz: () => h
});
var Chunk481060 = require("./481060.js"),
  Chunk901297 = require("./901297.jsx"),
  Chunk73166 = require("./73166.jsx"),
  Chunk690524 = require("./690524.jsx"),
  Chunk374834 = require("./374834.jsx"),
  Chunk473542 = require("./473542.jsx"),
  Chunk654346 = require("./654346.jsx"),
  Chunk266631 = require("./266631.jsx"),
  Chunk906731 = require("./906731.jsx"),
  Chunk915409 = require("./915409.js"),
  Chunk74432 = require("./74432.jsx"),
  Chunk277939 = require("./277939.jsx"),
  h = function(e) {
    return e.PAYMENTS = "payments", e.VIRTUAL_CURRENCY = "virtual-currency", e.NITRO = "nitro", e
  }({});
let m = ["Revenue Storybook", "Revenue Playground"],
  g = {
    id: "payments",
    name: "Payments",
    groups: [Chunk690524.C, Chunk277939.U, Chunk74432.iZ, Chunk473542.R, Chunk374834.pl, Chunk915409.W],
    tags: m,
    IconComponent: Chunk481060.uMN
  },
  E = {
    playgroundBaseUrl: "revenue",
    collections: [g, {
      id: "virtual-currency",
      name: "Virtual Currency",
      groups: [Chunk73166.Oi, Chunk901297.vP, Chunk266631.X, Chunk906731.R],
      tags: m,
      IconComponent: Chunk481060.aQr
    }, {
      id: "nitro",
      name: "Nitro",
      groups: [Chunk654346.De],
      tags: m,
      IconComponent: Chunk481060.SrA
    }]
  }