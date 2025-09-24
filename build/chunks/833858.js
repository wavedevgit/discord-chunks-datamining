/** Chunk was on web.js **/
/** chunk id: 833858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fe: () => h,
  O8: () => O,
  V: () => b,
  tV: () => y
}), require("./35282.js");
var Chunk970683 = require("./970683.js"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk829290 = require("./829290.js"),
  Chunk136779 = require("./136779.js"),
  Chunk33346 = require("./33346.js"),
  Chunk857042 = require("./857042.js"),
  Chunk558532 = require("./558532.js"),
  Chunk346554 = require("./346554.js"),
  Chunk444305 = require("./444305.js");
let p = [null, null];

function h(e) {
  return null == e ? p : e.split(":")
}
let m = () => ({
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
    [Chunk505905.tN.WATCHING]: {
      title: Chunk388032.intl.string(Chunk388032.t.di6IFx),
      icon: Chunk444305
    }
  }),
  g = () => ({
    [Chunk505905.tN.BRB]: {
      title: Chunk388032.intl.string(Chunk388032.t.fFTJTE),
      icon: Chunk136779
    },
    [Chunk505905.tN.CHILLING]: {
      title: Chunk388032.intl.string(Chunk388032.t.vybY9f),
      icon: Chunk970683.s_
    },
    [Chunk505905.tN.GAMING]: {
      title: Chunk388032.intl.string(Chunk388032.t.wvWdTU),
      icon: Chunk970683.mB
    },
    [Chunk505905.tN.WATCHING]: {
      title: Chunk388032.intl.string(Chunk388032.t.s8xFaG),
      icon: Chunk829290
    },
    [Chunk505905.tN.FOCUSING]: {
      title: Chunk388032.intl.string(Chunk388032.t.D5eCT0),
      icon: Chunk970683.Nl
    }
  }),
  E = () => ({
    [Chunk505905.tN.BRB]: {
      title: Chunk388032.intl.string(Chunk388032.t.fFTJTE),
      emoji: {
        id: true,
        name: "\uD83D\uDCA8"
      }
    },
    [Chunk505905.tN.CHILLING]: {
      title: Chunk388032.intl.string(Chunk388032.t.vybY9f),
      emoji: {
        id: true,
        name: "\uD83C\uDF68"
      }
    },
    [Chunk505905.tN.GAMING]: {
      title: Chunk388032.intl.string(Chunk388032.t.wvWdTU),
      emoji: {
        id: true,
        name: "⚔️"
      }
    },
    [Chunk505905.tN.WATCHING]: {
      title: Chunk388032.intl.string(Chunk388032.t.s8xFaG),
      emoji: {
        id: true,
        name: "\uD83C\uDF7F"
      }
    },
    [Chunk505905.tN.FOCUSING]: {
      title: Chunk388032.intl.string(Chunk388032.t.D5eCT0),
      emoji: {
        id: true,
        name: "\uD83E\uDDE0"
      }
    }
  }),
  b = e => {
    switch (e) {
      case "original":
      default:
        return m();
      case "illocons":
        return g();
      case "twemoji":
        return E()
    }
  },
  y = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "original";
    if ((null == e ? true : e.type) !== a.IIU.HANG_STATUS || (null == e ? true : e.state) == null) return null;
    let n = h(e.state),
      r = n[0];
    if (r === i.tN.CUSTOM) return null;
    let o = b(n.length > 1 ? n[1] : t);
    return r in o ? o[r] : null
  },
  O = function(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "original";
    return (null == e ? true : e.type) !== a.IIU.HANG_STATUS || (null == e ? true : e.state) == null ? null : h(e.state)[0] === i.tN.CUSTOM ? null == e ? true : e.details : null == (t = y(e, n)) ? true : t.title
  }