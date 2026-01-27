/** Chunk was on web.js **/
/** chunk id: 541830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  du: () => p,
  qt: () => f,
  zJ: () => h
}), require("./747238.js"), require("./812715.js"), require("./896048.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk960488 = require("./960488.js");
require("./723702.js"), require("./371794.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {},
  u = {},
  d = Object.freeze(function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        l(e, t, n[t])
      })
    }
    return e
  }({
    ALL: false
  }, Chunk652215.Kf));

function f(e) {
  let t = (0, a.B6)(e, {
    path: o.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug")
  });
  return null != t ? t.params.skuId : null
}

function p(e) {
  switch (e) {
    case o.Kf.ACTION:
      return s.intl.string(s.t["1o2/IM"]);
    case o.Kf.ACTION_RPG:
      return s.intl.string(s.t.e9Yo4H);
    case o.Kf.BRAWLER:
      return s.intl.string(s.t.WCkEjT);
    case o.Kf.HACK_AND_SLASH:
      return s.intl.string(s.t.xQ4VmK);
    case o.Kf.PLATFORMER:
      return s.intl.string(s.t.WA3189);
    case o.Kf.STEALTH:
      return s.intl.string(s.t["6UPFdw"]);
    case o.Kf.SURVIVAL:
      return s.intl.string(s.t.SVPCt9);
    case o.Kf.ADVENTURE:
      return s.intl.string(s.t["15p8on"]);
    case o.Kf.ACTION_ADVENTURE:
      return s.intl.string(s.t.AxkUBp);
    case o.Kf.METROIDVANIA:
      return s.intl.string(s.t.Iwr38m);
    case o.Kf.OPEN_WORLD:
      return s.intl.string(s.t["2HRHJO"]);
    case o.Kf.PSYCHOLOGICAL_HORROR:
      return s.intl.string(s.t["/IwK3s"]);
    case o.Kf.SANDBOX:
      return s.intl.string(s.t["2+Vu4Q"]);
    case o.Kf.SURVIVAL_HORROR:
      return s.intl.string(s.t.CCzRiK);
    case o.Kf.VISUAL_NOVEL:
      return s.intl.string(s.t.FE7rnk);
    case o.Kf.DRIVING_RACING:
      return s.intl.string(s.t.Erzgca);
    case o.Kf.VEHICULAR_COMBAT:
      return s.intl.string(s.t.YQHhog);
    case o.Kf.MASSIVELY_MULTIPLAYER:
      return s.intl.string(s.t["5CNg1o"]);
    case o.Kf.MMORPG:
      return s.intl.string(s.t["c4NuO/"]);
    case o.Kf.ROLE_PLAYING:
      return s.intl.string(s.t.yayVgs);
    case o.Kf.DUNGEON_CRAWLER:
      return s.intl.string(s.t.qicemc);
    case o.Kf.ROGUELIKE:
      return s.intl.string(s.t.zWzaCv);
    case o.Kf.SHOOTER:
      return s.intl.string(s.t["+pk6sd"]);
    case o.Kf.LIGHT_GUN:
      return s.intl.string(s.t.TDS96y);
    case o.Kf.SHOOT_EM_UP:
      return s.intl.string(s.t.wltDUE);
    case o.Kf.FPS:
      return s.intl.string(s.t.olTaq4);
    case o.Kf.DUAL_JOYSTICK_SHOOTER:
      return s.intl.string(s.t["SN+NS3"]);
    case o.Kf.SIMULATION:
      return s.intl.string(s.t.sxMPdm);
    case o.Kf.FLIGHT_SIMULATOR:
      return s.intl.string(s.t["Q7msr+"]);
    case o.Kf.TRAIN_SIMULATOR:
      return s.intl.string(s.t.ZtECf3);
    case o.Kf.LIFE_SIMULATOR:
      return s.intl.string(s.t.byt5Fo);
    case o.Kf.FISHING:
      return s.intl.string(s.t.BKwiwY);
    case o.Kf.SPORTS:
      return s.intl.string(s.t.O0B7XM);
    case o.Kf.BASEBALL:
      return s.intl.string(s.t["jPYb/z"]);
    case o.Kf.BASKETBALL:
      return s.intl.string(s.t["o+D1Bm"]);
    case o.Kf.BILLIARDS:
      return s.intl.string(s.t.PJ5o4E);
    case o.Kf.BOWLING:
      return s.intl.string(s.t["82afJw"]);
    case o.Kf.BOXING:
      return s.intl.string(s.t.DQvfei);
    case o.Kf.FOOTBALL:
      return s.intl.string(s.t.slOYkj);
    case o.Kf.GOLF:
      return s.intl.string(s.t.aeQPlG);
    case o.Kf.HOCKEY:
      return s.intl.string(s.t.g7oe5X);
    case o.Kf.SKATEBOARDING_SKATING:
      return s.intl.string(s.t.yBDEP0);
    case o.Kf.SNOWBOARDING_SKIING:
      return s.intl.string(s.t.GVaAci);
    case o.Kf.SOCCER:
      return s.intl.string(s.t.KPznxl);
    case o.Kf.TRACK_FIELD:
      return s.intl.string(s.t["hJ62Q/"]);
    case o.Kf.SURFING_WAKEBOARDING:
      return s.intl.string(s.t.PSh0CV);
    case o.Kf.WRESTLING:
      return s.intl.string(s.t["3y9hAT"]);
    case o.Kf.STRATEGY:
      return s.intl.string(s.t.KovTD8);
    case o.Kf.FOUR_X:
      return s.intl.string(s.t["19h4dX"]);
    case o.Kf.ARTILLERY:
      return s.intl.string(s.t.sBqLsP);
    case o.Kf.RTS:
      return s.intl.string(s.t.yS4ddj);
    case o.Kf.TOWER_DEFENSE:
      return s.intl.string(s.t.SULyIO);
    case o.Kf.TURN_BASED_STRATEGY:
      return s.intl.string(s.t.VDsbru);
    case o.Kf.WARGAME:
      return s.intl.string(s.t.YDCIrO);
    case o.Kf.MOBA:
      return s.intl.string(s.t.i1m1t8);
    case o.Kf.FIGHTING:
      return s.intl.string(s.t.KepcSI);
    case o.Kf.PUZZLE:
      return s.intl.string(s.t.rm7Ggs);
    case o.Kf.CARD_GAME:
      return s.intl.string(s.t.kX85vy);
    case o.Kf.EDUCATION:
      return s.intl.string(s.t.klIi67);
    case o.Kf.FITNESS:
      return s.intl.string(s.t.GOaaFb);
    case o.Kf.GAMBLING:
      return s.intl.string(s.t["X8/Ee9"]);
    case o.Kf.MUSIC_RHYTHM:
      return s.intl.string(s.t.qPgrgw);
    case o.Kf.PARTY_MINI_GAME:
      return s.intl.string(s.t.diBclF);
    case o.Kf.PINBALL:
      return s.intl.string(s.t["1+ottx"]);
    case o.Kf.TRIVIA_BOARD_GAME:
      return s.intl.string(s.t.aLlxjC);
    case o.Kf.TACTICAL:
      return s.intl.string(s.t.LRPgbt);
    case o.Kf.INDIE:
      return s.intl.string(s.t.hz9Xvj);
    case o.Kf.ARCADE:
      return s.intl.string(s.t.Sbxowr);
    case o.Kf.POINT_AND_CLICK:
      return s.intl.string(s.t.vcerEn);
    default:
      return s.intl.string(s.t["9b4eUr"])
  }
}
Object.keys(d).forEach(e => {
  let t = e.toLowerCase().replace(/_/g, "-"),
    n = d[e];
  c[t] = n, u[n] = t
});
let _ = [
  ["YYYY-MM-DD", "MMMM DD, Y"],
  ["YYYY-MM", "MMMM Y"],
  ["MM-DD", "MMMM DD"],
  ["MM", "MMMM"],
  ["YYYY", "Y"]
];

function h(e) {
  let {
    preorderReleaseAt: t,
    preorderApproximateReleaseDate: n
  } = e;
  if (null != t) return t.format("MMMM DD");
  if (null == n) return null;
  for (let e = 0; e < _.length; e++) {
    let [t, r] = _[e], a = i()(n, t, true);
    if (a.isValid()) return a.format(r)
  }
  return n
}