/** Chunk was on web.js **/
/** chunk id: 833858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fe: () => p,
  O8: () => b,
  V: () => g,
  tV: () => E
}), require("./35282.js");
var Chunk970683 = require("./970683.js"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk33346 = require("./33346.js"),
  Chunk857042 = require("./857042.js"),
  Chunk558532 = require("./558532.js"),
  Chunk105196 = require("./105196.js"),
  Chunk346554 = require("./346554.js"),
  Chunk933045 = require("./933045.js"),
  Chunk444305 = require("./444305.js");

function p(e) {
  return null == e ? [null, null] : e.split(":")
}
let h = () => ({
    [Chunk505905.tN.CHILLING]: {
      title: Chunk388032.intl.string(Chunk388032.t["vkpn7+"]),
      icon: Chunk857042
    },
    [Chunk505905.tN.GAMING]: {
      title: Chunk388032.intl.string(Chunk388032.t.lZslwM),
      icon: Chunk558532
    },
    [Chunk505905.tN.FOCUSING]: {
      title: Chunk388032.intl.string(Chunk388032.t.b6AscH),
      icon: Chunk346554
    },
    [Chunk505905.tN.BRB]: {
      title: Chunk388032.intl.string(Chunk388032.t["30yqZW"]),
      icon: Chunk33346
    },
    [Chunk505905.tN.EATING]: {
      title: Chunk388032.intl.string(Chunk388032.t.UVSEhY),
      icon: Chunk105196
    },
    [Chunk505905.tN.IN_TRANSIT]: {
      title: Chunk388032.intl.string(Chunk388032.t["l0q9/f"]),
      icon: Chunk933045
    },
    [Chunk505905.tN.WATCHING]: {
      title: Chunk388032.intl.string(Chunk388032.t.di6IFx),
      icon: Chunk444305
    }
  }),
  m = () => ({
    [Chunk505905.tN.IN_TRANSIT]: {
      title: "Here",
      icon: Chunk970683.s_
    }
  }),
  g = e => {
    switch (e) {
      case "original":
      default:
        return h();
      case "illocons":
        return m()
    }
  },
  E = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "original";
    if ((null == e ? true : e.type) !== a.IIU.HANG_STATUS || (null == e ? true : e.state) == null) return null;
    let n = p(e.state),
      r = n[0];
    if (r === i.tN.CUSTOM) return null;
    let o = g(n.length > 1 ? n[1] : t);
    return r in o ? o[r] : null
  },
  b = function(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "original";
    return (null == e ? true : e.type) !== a.IIU.HANG_STATUS || (null == e ? true : e.state) == null ? null : p(e.state)[0] === i.tN.CUSTOM ? null == e ? true : e.details : null == (t = E(e, n)) ? true : t.title
  }