/** Chunk was on web.js **/
/** chunk id: 814225, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P3: () => p,
  ZK: () => f,
  en: () => m
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk828700 = require("./828700.js");
require("./358085.js"), require("./73346.js");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
  }, Chunk981631.EKQ));

function f(e) {
  let t = (0, o.LX)(e, {
    path: a.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug")
  });
  return null != t ? t.params.skuId : null
}

function p(e) {
  switch (e) {
    case a.EKQ.ACTION:
      return s.intl.string(s.t["1o2/IM"]);
    case a.EKQ.ACTION_RPG:
      return s.intl.string(s.t.e9Yo4H);
    case a.EKQ.BRAWLER:
      return s.intl.string(s.t.WCkEjT);
    case a.EKQ.HACK_AND_SLASH:
      return s.intl.string(s.t.xQ4VmK);
    case a.EKQ.PLATFORMER:
      return s.intl.string(s.t.WA3189);
    case a.EKQ.STEALTH:
      return s.intl.string(s.t["6UPFdw"]);
    case a.EKQ.SURVIVAL:
      return s.intl.string(s.t.SVPCt9);
    case a.EKQ.ADVENTURE:
      return s.intl.string(s.t["15p8on"]);
    case a.EKQ.ACTION_ADVENTURE:
      return s.intl.string(s.t.AxkUBp);
    case a.EKQ.METROIDVANIA:
      return s.intl.string(s.t.Iwr38m);
    case a.EKQ.OPEN_WORLD:
      return s.intl.string(s.t["2HRHJO"]);
    case a.EKQ.PSYCHOLOGICAL_HORROR:
      return s.intl.string(s.t["/IwK3s"]);
    case a.EKQ.SANDBOX:
      return s.intl.string(s.t["2+Vu4Q"]);
    case a.EKQ.SURVIVAL_HORROR:
      return s.intl.string(s.t.CCzRiK);
    case a.EKQ.VISUAL_NOVEL:
      return s.intl.string(s.t.FE7rnk);
    case a.EKQ.DRIVING_RACING:
      return s.intl.string(s.t.Erzgca);
    case a.EKQ.VEHICULAR_COMBAT:
      return s.intl.string(s.t.YQHhog);
    case a.EKQ.MASSIVELY_MULTIPLAYER:
      return s.intl.string(s.t["5CNg1o"]);
    case a.EKQ.MMORPG:
      return s.intl.string(s.t["c4NuO/"]);
    case a.EKQ.ROLE_PLAYING:
      return s.intl.string(s.t.yayVgs);
    case a.EKQ.DUNGEON_CRAWLER:
      return s.intl.string(s.t.qicemc);
    case a.EKQ.ROGUELIKE:
      return s.intl.string(s.t.zWzaCv);
    case a.EKQ.SHOOTER:
      return s.intl.string(s.t["+pk6sd"]);
    case a.EKQ.LIGHT_GUN:
      return s.intl.string(s.t.TDS96y);
    case a.EKQ.SHOOT_EM_UP:
      return s.intl.string(s.t.wltDUE);
    case a.EKQ.FPS:
      return s.intl.string(s.t.olTaq4);
    case a.EKQ.DUAL_JOYSTICK_SHOOTER:
      return s.intl.string(s.t["SN+NS3"]);
    case a.EKQ.SIMULATION:
      return s.intl.string(s.t.sxMPdm);
    case a.EKQ.FLIGHT_SIMULATOR:
      return s.intl.string(s.t["Q7msr+"]);
    case a.EKQ.TRAIN_SIMULATOR:
      return s.intl.string(s.t.ZtECf3);
    case a.EKQ.LIFE_SIMULATOR:
      return s.intl.string(s.t.byt5Fo);
    case a.EKQ.FISHING:
      return s.intl.string(s.t.BKwiwY);
    case a.EKQ.SPORTS:
      return s.intl.string(s.t.O0B7XM);
    case a.EKQ.BASEBALL:
      return s.intl.string(s.t["jPYb/z"]);
    case a.EKQ.BASKETBALL:
      return s.intl.string(s.t["o+D1Bm"]);
    case a.EKQ.BILLIARDS:
      return s.intl.string(s.t.PJ5o4E);
    case a.EKQ.BOWLING:
      return s.intl.string(s.t["82afJw"]);
    case a.EKQ.BOXING:
      return s.intl.string(s.t.DQvfei);
    case a.EKQ.FOOTBALL:
      return s.intl.string(s.t.slOYkj);
    case a.EKQ.GOLF:
      return s.intl.string(s.t.aeQPlG);
    case a.EKQ.HOCKEY:
      return s.intl.string(s.t.g7oe5X);
    case a.EKQ.SKATEBOARDING_SKATING:
      return s.intl.string(s.t.yBDEP0);
    case a.EKQ.SNOWBOARDING_SKIING:
      return s.intl.string(s.t.GVaAci);
    case a.EKQ.SOCCER:
      return s.intl.string(s.t.KPznxl);
    case a.EKQ.TRACK_FIELD:
      return s.intl.string(s.t["hJ62Q/"]);
    case a.EKQ.SURFING_WAKEBOARDING:
      return s.intl.string(s.t.PSh0CV);
    case a.EKQ.WRESTLING:
      return s.intl.string(s.t["3y9hAT"]);
    case a.EKQ.STRATEGY:
      return s.intl.string(s.t.KovTD8);
    case a.EKQ.FOUR_X:
      return s.intl.string(s.t["19h4dX"]);
    case a.EKQ.ARTILLERY:
      return s.intl.string(s.t.sBqLsP);
    case a.EKQ.RTS:
      return s.intl.string(s.t.yS4ddj);
    case a.EKQ.TOWER_DEFENSE:
      return s.intl.string(s.t.SULyIO);
    case a.EKQ.TURN_BASED_STRATEGY:
      return s.intl.string(s.t.VDsbru);
    case a.EKQ.WARGAME:
      return s.intl.string(s.t.YDCIrO);
    case a.EKQ.MOBA:
      return s.intl.string(s.t.i1m1t8);
    case a.EKQ.FIGHTING:
      return s.intl.string(s.t.KepcSI);
    case a.EKQ.PUZZLE:
      return s.intl.string(s.t.rm7Ggs);
    case a.EKQ.CARD_GAME:
      return s.intl.string(s.t.kX85vy);
    case a.EKQ.EDUCATION:
      return s.intl.string(s.t.klIi67);
    case a.EKQ.FITNESS:
      return s.intl.string(s.t.GOaaFb);
    case a.EKQ.GAMBLING:
      return s.intl.string(s.t["X8/Ee9"]);
    case a.EKQ.MUSIC_RHYTHM:
      return s.intl.string(s.t.qPgrgw);
    case a.EKQ.PARTY_MINI_GAME:
      return s.intl.string(s.t.diBclF);
    case a.EKQ.PINBALL:
      return s.intl.string(s.t["1+ottx"]);
    case a.EKQ.TRIVIA_BOARD_GAME:
      return s.intl.string(s.t.aLlxjC);
    case a.EKQ.TACTICAL:
      return s.intl.string(s.t.LRPgbt);
    case a.EKQ.INDIE:
      return s.intl.string(s.t.hz9Xvj);
    case a.EKQ.ARCADE:
      return s.intl.string(s.t.Sbxowr);
    case a.EKQ.POINT_AND_CLICK:
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

function m(e) {
  let {
    preorderReleaseAt: t,
    preorderApproximateReleaseDate: n
  } = e;
  if (null != t) return t.format("MMMM DD");
  if (null == n) return null;
  for (let e = 0; e < _.length; e++) {
    let [t, r] = _[e], o = i()(n, t, true);
    if (o.isValid()) return o.format(r)
  }
  return n
}