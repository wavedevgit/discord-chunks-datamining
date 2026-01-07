/** Chunk was on 93234 **/
/** chunk id: 786000, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./415506.js"), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk998502 = require("./998502.js"),
  Chunk894694 = require("./894694.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
async function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    i = await l.ZP.fetchRiotGamesLiveClientData(e, t);
  if (i.status >= 200 && i.status < 300) return JSON.parse(i.body);
  throw Error("HTTP ".concat(i.status, ": ").concat(i.body))
}
class o {
  async poll() {
    return !(null != this.activePlayerRiotId || await this.fetchActivePlayer()) || (await this.pollEvents(), await this.pollPlayerState(), true)
  }
  async pollEvents() {
    try {
      var e, t, i, l, n, r, a, o, m, p, c, u, v, h, y, d;
      let E = await s("eventdata", {
        eventID: this.nextEventId
      });
      if ((null == (e = E.Events) ? true : e.length) > 0) {
        if (this.isFirstPoll) this.isFirstPoll = false;
        else
          for (let e of E.Events) {
            let s;
            if ("ChampionKill" === e.EventName) {
              let l = (null != (t = e.KillerName) ? t : "") === this.activePlayerName,
                n = (null != (i = e.Assisters) ? i : []).some(e => e === this.activePlayerName);
              s = {
                type: "ChampionKill",
                timestamp: this.gameTime,
                killerName: e.KillerName,
                victimName: e.VictimName,
                playerIsKiller: l,
                playerIsAssister: n,
                victimIsActivePlayer: e.VictimName === this.activePlayerName
              }
            } else if ("Multikill" === e.EventName) s = {
              type: "Multikill",
              timestamp: this.gameTime,
              killStreak: e.KillStreak || 1,
              killerName: null != (l = e.KillerName) ? l : "",
              killerIsActivePlayer: e.KillerName === this.activePlayerName
            };
            else if ("TurretKilled" === e.EventName) {
              let t = (null != (n = e.KillerName) ? n : "") === this.activePlayerName,
                i = (null != (r = e.Assisters) ? r : []).some(e => e === this.activePlayerName);
              s = {
                type: "TurretKill",
                timestamp: this.gameTime,
                playerHelpedKill: t || i
              }
            } else if ("InhibKilled" === e.EventName) {
              let t = (null != (a = e.KillerName) ? a : "") === this.activePlayerName,
                i = (null != (o = e.Assisters) ? o : []).some(e => e === this.activePlayerName);
              s = {
                type: "InhibitorKill",
                timestamp: this.gameTime,
                playerHelpedKill: t || i
              }
            } else if ("DragonKill" === e.EventName) {
              let t = (null != (m = e.KillerName) ? m : "") === this.activePlayerName,
                i = (null != (p = e.Assisters) ? p : []).some(e => e === this.activePlayerName);
              s = {
                type: "DragonKill",
                timestamp: this.gameTime,
                playerHelpedKill: t || i,
                killerName: null != (c = e.KillerName) ? c : "",
                drakeName: e.DragonType,
                stolen: (null != (u = e.Stolen) ? u : "") === "True"
              }
            } else if ("BaronKill" === e.EventName) {
              let t = (null != (v = e.KillerName) ? v : "") === this.activePlayerName,
                i = (null != (h = e.Assisters) ? h : []).some(e => e === this.activePlayerName);
              s = {
                type: "BaronKill",
                timestamp: this.gameTime,
                playerHelpedKill: t || i,
                stolen: (null != (y = e.Stolen) ? y : "") === "True",
                killerName: null != (d = e.KillerName) ? d : ""
              }
            }
            null != s && this.addEventToWindow(s)
          }
        let e = E.Events[E.Events.length - 1];
        this.nextEventId = e.EventID + 1
      }
    } catch (e) {}
  }
  addEventToWindow(e) {
    this.eventWindow.push(e), this.eventWindow.length > this.EVENT_WINDOW_SIZE && this.eventWindow.shift();
    let t = function(e) {
      switch (e.type) {
        case "ChampionKill":
          if (e.playerIsKiller) return {
            type: n.Bs.GAME_EVENT,
            eventType: n.x0.KILL,
            importance: .5,
            title: r.intl.string(r.t.ky6syM),
            description: r.intl.formatToPlainString(r.t["2sxvfW"], {
              name: e.victimName
            })
          };
          if (e.playerIsAssister) return {
            type: n.Bs.GAME_EVENT,
            eventType: n.x0.ASSIST,
            importance: .5,
            title: r.intl.string(r.t.ky6syM),
            description: r.intl.formatToPlainString(r.t.NyJvKf, {
              name: e.victimName
            })
          };
          if (e.victimIsActivePlayer) return {
            type: n.Bs.GAME_EVENT,
            eventType: n.x0.DEATH,
            importance: .5,
            title: r.intl.string(r.t.ky6syM),
            description: r.intl.formatToPlainString(r.t["wZ/IFO"], {
              name: e.killerName
            })
          };
          return null;
        case "Multikill":
          if (e.killerIsActivePlayer) {
            let {
              title: t,
              description: i
            } = (() => {
              switch (e.killStreak) {
                case 2:
                  return {
                    title: r.intl.string(r.t["+K7bbR"]), description: r.intl.string(r.t["+zq0aZ"])
                  };
                case 3:
                  return {
                    title: r.intl.string(r.t.fzI1wr), description: r.intl.string(r.t.brXPUX)
                  };
                case 4:
                  return {
                    title: r.intl.string(r.t.ntn0Eu), description: r.intl.string(r.t.GcWpwl)
                  };
                case 5:
                  return {
                    title: r.intl.string(r.t.JMxzCr), description: r.intl.string(r.t["9yXGOS"])
                  };
                default:
                  return {
                    title: true, description: true
                  }
              }
            })();
            return {
              type: n.Bs.GAME_EVENT,
              eventType: n.x0.MULTIKILL,
              importance: e.killStreak >= 4 && e.killerIsActivePlayer ? 1 : .5,
              title: t,
              description: i
            }
          }
          return null;
        case "LevelUp":
          return {
            type: n.Bs.GAME_EVENT, eventType: n.x0.LEVEL_UP, importance: 0, title: r.intl.string(r.t["cp+kpc"]), description: r.intl.formatToPlainString(r.t["le5/P1"], {
              level: e.newLevel
            })
          };
        case "ItemPurchase":
          return {
            type: n.Bs.GAME_EVENT, eventType: n.x0.ITEM, importance: 0, title: r.intl.string(r.t["89CDAj"]), description: r.intl.formatToPlainString(r.t.cpRNkD, {
              itemName: e.itemName
            })
          };
        case "TurretKill":
          if (e.playerHelpedKill) return {
            type: n.Bs.GAME_EVENT,
            eventType: n.x0.OBJECTIVE_KILL,
            importance: .5,
            title: r.intl.string(r.t["SoivN/"])
          };
          return null;
        case "InhibitorKill":
          if (e.playerHelpedKill) return {
            type: n.Bs.GAME_EVENT,
            eventType: n.x0.OBJECTIVE_KILL,
            importance: .5,
            title: r.intl.string(r.t["0Ttct6"])
          };
          return null;
        case "DragonKill":
          if (e.stolen) return {
            type: n.Bs.GAME_EVENT,
            eventType: n.x0.OBJECTIVE_KILL,
            importance: 1,
            title: r.intl.formatToPlainString(r.t.DUQK8U, {
              drakeName: e.drakeName
            }),
            description: r.intl.formatToPlainString(r.t["8qsedd"], {
              killerName: e.killerName
            })
          };
          if (e.playerHelpedKill) return {
            type: n.Bs.GAME_EVENT,
            eventType: n.x0.OBJECTIVE_KILL,
            importance: .5,
            title: r.intl.formatToPlainString(r.t["AjNN1/"], {
              drakeName: e.drakeName
            }),
            description: r.intl.formatToPlainString(r.t.HlopAO, {
              killerName: e.killerName
            })
          };
          return null;
        case "BaronKill":
          if (e.stolen) return {
            type: n.Bs.GAME_EVENT,
            eventType: n.x0.OBJECTIVE_KILL,
            importance: e.playerHelpedKill ? 1 : .8,
            title: r.intl.string(r.t["+WhzbK"]),
            description: r.intl.formatToPlainString(r.t.FUBbYu, {
              killerName: e.killerName
            })
          };
          if (e.playerHelpedKill) return {
            type: n.Bs.GAME_EVENT,
            eventType: n.x0.OBJECTIVE_KILL,
            importance: e.playerHelpedKill ? .8 : .5,
            title: r.intl.string(r.t.KohKss),
            description: r.intl.formatToPlainString(r.t["4yYLUi"], {
              killerName: e.killerName
            })
          };
          return null;
        default:
          return null
      }
    }(e);
    null != t && this.emitSignal(t)
  }
  async pollPlayerState() {
    if (null != this.activePlayerRiotId) try {
      var e, t;
      let [i, l] = await Promise.all([s("activeplayer"), s("playeritems", {
        riotId: this.activePlayerRiotId
      })]), n = new Map;
      if (Array.isArray(l))
        for (let e of l) n.set(e.itemID, e);
      let r = {
        level: null != (e = i.level) ? e : 1,
        currentGold: null != (t = i.currentGold) ? t : 0,
        items: n
      };
      this.gameTime += 1, null != this.previousPlayerState && this.detectStateChanges(this.previousPlayerState, r), this.previousPlayerState = r
    } catch (e) {}
  }
  detectStateChanges(e, t) {
    if (t.level > e.level) {
      let e = {
        type: "LevelUp",
        timestamp: this.gameTime,
        newLevel: t.level
      };
      this.addEventToWindow(e)
    }
    for (let [i, l] of t.items)
      if (null == e.items.get(i)) {
        let e = {
          type: "ItemPurchase",
          timestamp: this.gameTime,
          itemId: l.itemID,
          itemName: l.displayName,
          itemCount: l.count
        };
        this.addEventToWindow(e)
      }
  }
  async fetchActivePlayer() {
    try {
      let t = await s("activeplayer");
      if (null != t.riotId) {
        var e;
        return this.activePlayerRiotId = t.riotId, this.activePlayerName = null != (e = t.riotIdGameName) ? e : "", true
      }
      returnfalse
    } catch (e) {
      returnfalse
    }
  }
  reset() {
    this.activePlayerRiotId = null, this.nextEventId = 0, this.eventWindow = [], this.previousPlayerState = null, this.gameTime = 0, this.isFirstPoll = true
  }
  getEventWindow() {
    return this.eventWindow
  }
  constructor(e) {
    a(this, "activePlayerRiotId", null), a(this, "activePlayerName", null), a(this, "nextEventId", 0), a(this, "eventWindow", []), a(this, "EVENT_WINDOW_SIZE", 100), a(this, "previousPlayerState", null), a(this, "gameTime", 0), a(this, "isFirstPoll", true), a(this, "emitSignal", true), this.emitSignal = e
  }
}