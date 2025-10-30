/** Chunk was on 49947 **/
/** chunk id: 656791, original params: e,t,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => c
}), require("./953529.js");
var Chunk710845 = require("./710845.js"),
  Chunk604886 = require("./604886.js"),
  Chunk358085 = require("./358085.js"),
  Chunk894694 = require("./894694.js");
let r = new Chunk710845.Z("SteamSignalHandler");

function c(e) {
  let t = false,
    i = i => {
      var n;
      if (!t) return;
      let s = function(e) {
          var t, i, n, s;
          let a = null != (n = null == (t = e.title) ? true : t.toLowerCase()) ? n : "",
            r = null != (s = null == (i = e.description) ? true : i.toLowerCase()) ? s : "",
            c = "".concat(a, " ").concat(r);
          return "death" === e.icon || c.includes("death") || c.includes("died") || c.includes("eliminated") ? l.x0.DEATH : "killstreak" === e.icon ? l.x0.MULTIKILL : c.includes("kill") || c.includes("defeat") || c.includes("eliminated") ? l.x0.KILL : c.includes("victory") || c.includes("win") || c.includes("champion") ? l.x0.VICTORY : c.includes("level") || c.includes("upgrade") ? l.x0.LEVEL_UP : c.includes("item") || c.includes("equipment") || c.includes("loot") ? l.x0.ITEM : c.includes("treasure") || c.includes("reward") || c.includes("chest") ? l.x0.TREASURE : c.includes("objective") || c.includes("boss") || c.includes("target") ? l.x0.OBJECTIVE_KILL : l.x0.ITEM
        }(i),
        a = function(e) {
          var t;
          let i = null != (t = e.possibleClipPriority) ? t : 0;
          if (1 === e.isUserMarker) return 1;
          switch (i) {
            case 3:
              return 1;
            case 2:
              return .5;
            default:
              return 0
          }
        }(i),
        c = {
          type: l.Bs.GAME_EVENT,
          eventType: s,
          title: i.title,
          description: i.description,
          importance: a
        };
      r.info("Converting Steam timeline event to clip signal", {
        gameId: null == (n = i.gameId) ? true : n.toString(),
        title: i.title,
        eventType: s,
        importance: a
      }), e(c)
    };
  return {
    start() {
      !t && (0, a.isWindows)() && (t = true, s.j.initialize(), s.j.addTimelineEventCallback(i))
    },
    stop() {
      t && (r.info("Stopping Steam signal handler"), t = false, s.j.removeTimelineEventCallback(i))
    },
    getState() {
      let e = (0, a.isWindows)();
      return {
        isActive: t,
        processesTracked: s.j.getTrackedProcesses().length,
        isAvailableForUser: e
      }
    }
  }
}