/** Chunk was on 67544 **/
/** chunk id: 359013, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Mq: () => i,
  Tw: () => c,
  p9: () => a
});
var Chunk562858 = require("./562858.js"),
  Chunk477839 = require("./477839.js");
let o = {
  [Chunk477839.uv.CLICKER_BUTTON_STRONGER]: {
    type: Chunk562858.e.BASIC,
    points: 1
  },
  [Chunk477839.uv.WEED_KILLER]: {
    type: Chunk562858.e.NONE
  },
  [Chunk477839.uv.BOUNCING_LOGO_MORE_LOGOS]: {
    type: Chunk562858.e.BASIC,
    points: 15
  },
  [Chunk477839.uv.BOUNCING_LOGO_CORNERS]: {
    type: Chunk562858.e.MULTIPLIER,
    multiplier: 3
  },
  [Chunk477839.uv.BOUNCING_LOGO_SPEED]: {
    type: Chunk562858.e.NONE
  },
  [Chunk477839.uv.BOUNCING_LOGO_COLORS]: {
    type: Chunk562858.e.MULTIPLIER,
    multiplier: 2
  },
  [Chunk477839.uv.CLICKER_BUTTON_AFFIRMATIONS]: {
    type: Chunk562858.e.MULTIPLIER,
    multiplier: 2
  },
  [Chunk477839.uv.SUN_RAISE]: {
    type: Chunk562858.e.BASIC,
    points: 40
  },
  [Chunk477839.uv.FULLSCREEN_AT_SOMEONE]: {
    type: Chunk562858.e.MULTIPLIER,
    multiplier: 2
  },
  [Chunk477839.uv.CLICKER_BUTTON_RAINBOW]: {
    type: Chunk562858.e.BASIC,
    points: 1.5
  },
  [Chunk477839.uv.MUSIC_CHANGE]: {
    type: Chunk562858.e.BASIC,
    points: 10
  }
};

function a(e) {
  let t = o[e];
  switch (t.type) {
    case r.e.BASIC:
      return t.points;
    case r.e.NONE:
      return 0;
    case r.e.MULTIPLIER:
      return t.multiplier
  }
}
let i = {
  [Chunk477839.yN.CLICKER_BUTTON]: {
    type: Chunk562858.e.UPGRADES,
    getPoints: e => Math.floor(Object.keys(e).reduce((t, n) => {
      var r;
      return t + a(n) * (null != (r = e[n]) ? r : 0)
    }, 1) * (null != e[s.uv.CLICKER_BUTTON_RAINBOW] ? a(s.uv.CLICKER_BUTTON_RAINBOW) : 1) * (null != e[s.uv.CLICKER_BUTTON_AFFIRMATIONS] ? a(s.uv.CLICKER_BUTTON_AFFIRMATIONS) : 1))
  },
  [Chunk477839.yN.RAIN]: {
    type: Chunk562858.e.BASIC,
    points: 42
  },
  [Chunk477839.yN.SUN]: {
    type: Chunk562858.e.SUN,
    getPoints: e => 55 + e * a(s.uv.SUN_RAISE)
  },
  [Chunk477839.yN.STATS]: {
    type: Chunk562858.e.NONE
  },
  [Chunk477839.yN.RATE]: {
    type: Chunk562858.e.NONE
  },
  [Chunk477839.yN.ACHIEVEMENTS]: {
    type: Chunk562858.e.NONE
  },
  [Chunk477839.yN.SNEK]: {
    type: Chunk562858.e.SNEK,
    getPoints: e => 1e3 * e
  },
  [Chunk477839.yN.WEEDS]: {
    type: Chunk562858.e.BASIC,
    points: false
  },
  [Chunk477839.yN.PET_WUMPUS]: {
    type: Chunk562858.e.BASIC,
    points: 30
  },
  [Chunk477839.yN.BOUNCING_LOGO]: {
    type: Chunk562858.e.BOUNCING_LOGOS,
    getPoints: (e, t, n) => {
      let r = a(s.uv.BOUNCING_LOGO_CORNERS),
        o = a(s.uv.BOUNCING_LOGO_COLORS);
      return 15 * (n ? o : 1) * (t && e ? r : 1)
    }
  },
  [Chunk477839.yN.NAGBAR]: {
    type: Chunk562858.e.NAGBAR,
    getPoints: e => e
  },
  [Chunk477839.yN.MESSAGES]: {
    type: Chunk562858.e.BASIC,
    points: 0
  },
  [Chunk477839.yN.ANT]: {
    type: Chunk562858.e.BASIC,
    points: 5
  },
  [Chunk477839.yN.SNAIL]: {
    type: Chunk562858.e.BASIC,
    points: 8
  },
  [Chunk477839.yN.BEE]: {
    type: Chunk562858.e.BASIC,
    points: 12
  },
  [Chunk477839.yN.WORM]: {
    type: Chunk562858.e.BASIC,
    points: 18
  },
  [Chunk477839.yN.BUTTERFLY]: {
    type: Chunk562858.e.BASIC,
    points: 31
  },
  [Chunk477839.yN.TULIP]: {
    type: Chunk562858.e.BASIC,
    points: 6
  },
  [Chunk477839.yN.SUNFLOWER]: {
    type: Chunk562858.e.BASIC,
    points: 1
  },
  [Chunk477839.yN.ORCHID]: {
    type: Chunk562858.e.BASIC,
    points: 22
  },
  [Chunk477839.yN.LOOTBOXES]: {
    type: Chunk562858.e.BASIC,
    points: 0
  },
  [Chunk477839.yN.AT_SOMEONE]: {
    type: Chunk562858.e.UPGRADES,
    getPoints: e => 70 * (null != e[s.uv.FULLSCREEN_AT_SOMEONE] ? a(s.uv.FULLSCREEN_AT_SOMEONE) : 1)
  },
  [Chunk477839.yN.CURSORS]: {
    type: Chunk562858.e.BASIC,
    points: 0
  },
  [Chunk477839.yN.POURING_WATER]: {
    type: Chunk562858.e.BASIC,
    points: 90
  },
  [Chunk477839.yN.WATERING_CAN]: {
    type: Chunk562858.e.BASIC,
    points: 15
  },
  [Chunk477839.yN.LEVELING]: {
    type: Chunk562858.e.BASIC,
    points: 0
  },
  [Chunk477839.yN.MUSIC]: {
    type: Chunk562858.e.UPGRADES,
    getPoints: e => null != e[s.uv.MUSIC_CHANGE] ? 5 + a(s.uv.MUSIC_CHANGE) : 5
  },
  [Chunk477839.yN.LAWNMOWER]: {
    type: Chunk562858.e.BASIC,
    points: false
  },
  [Chunk477839.yN.COMPLETE_GAME]: {
    type: Chunk562858.e.NONE
  }
};

function c(e) {
  let t = i[e];
  switch (t.type) {
    case r.e.BASIC:
      return t.points;
    case r.e.NONE:
      return 0;
    case r.e.BOUNCING_LOGOS:
      return t.getPoints(false, false, false);
    case r.e.UPGRADES:
      return t.getPoints({});
    case r.e.SUN:
      return t.getPoints(0);
    case r.e.SNEK:
      return t.getPoints(1);
    case r.e.NAGBAR:
      return t.getPoints(1e3)
  }
}