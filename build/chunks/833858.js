/** Chunk was on web.js **/
/** chunk id: 833858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O8: () => y,
  V: () => E,
  tV: () => b
});
var Chunk970683 = require("./970683.js"),
  Chunk797156 = require("./797156.js"),
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
    [Chunk505905.tN.WATCHING]: {
      title: Chunk388032.intl.string(Chunk388032.t.di6IFx),
      icon: Chunk444305
    }
  }),
  m = () => ({
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
  g = () => ({
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
  E = e => {
    switch (e) {
      case "original":
      default:
        return h();
      case "illocons":
        return m();
      case "twemoji":
        return g()
    }
  },
  b = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "original";
    if ((null == t ? true : t.type) !== o.IIU.HANG_STATUS || (null == t ? true : t.state) == null) return null;
    let r = (0, i.F)(e, t.state),
      s = r[0];
    if (s === a.tN.CUSTOM) return null;
    let l = E(r.length > 1 ? r[1] : n);
    return s in l ? l[s] : null
  },
  y = function(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "original";
    return (null == t ? true : t.type) !== o.IIU.HANG_STATUS || (null == t ? true : t.state) == null ? null : (0, i.F)(e, t.state)[0] === a.tN.CUSTOM ? null == t ? true : t.details : null == (n = b(e, t, r)) ? true : n.title
  }