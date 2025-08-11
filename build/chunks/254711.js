/** Chunk was on web.js **/
/** chunk id: 254711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kh: () => G,
  Tm: () => M
}), require("./388685.js"), require("./781311.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk106351 = require("./106351.js"),
  Chunk969812 = require("./969812.js"),
  Chunk493683 = require("./493683.js"),
  Chunk749210 = require("./749210.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk386696 = require("./386696.js"),
  Chunk957730 = require("./957730.js"),
  Chunk968437 = require("./968437.js"),
  Chunk928477 = require("./928477.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk51144 = require("./51144.js"),
  Chunk895924 = require("./895924.js"),
  Chunk689079 = require("./689079.js"),
  Chunk981631 = require("./981631.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = require("./227419.jsx").Z,
  x = (e, t) => {
    var n;
    return null == (n = e.find(e => e.name === t)) ? true : n.value
  },
  M = {
    [Chunk689079.bi.BUILT_IN]: {
      id: Chunk689079.bi.BUILT_IN,
      type: Chunk895924.Qi.BUILT_IN,
      get name() {
        return Chunk388032.intl.string(Chunk388032.t.fI5MTU)
      }
    },
    [Chunk689079.bi.FRECENCY]: {
      id: Chunk689079.bi.FRECENCY,
      type: Chunk895924.Qi.BUILT_IN,
      get name() {
        return Chunk388032.intl.string(Chunk388032.t["+cGVV1"])
      }
    }
  },
  k = [...L, {
    id: "-1",
    untranslatedName: "shrug",
    displayName: "shrug",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN_TEXT,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.j5xUSU)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.j5xUSU)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.JewOra)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.JewOra)
      }
    }],
    execute: e => {
      var t;
      let n = null != (t = x(e, "message")) ? t : "";
      return {
        content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
      }
    }
  }, {
    id: "-2",
    untranslatedName: "tableflip",
    displayName: "tableflip",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN_TEXT,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.nrQRcX)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.nrQRcX)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.EI80t7)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.EI80t7)
      }
    }],
    execute: e => {
      var t;
      let n = null != (t = x(e, "message")) ? t : "";
      return {
        content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
      }
    }
  }, {
    id: "-3",
    untranslatedName: "unflip",
    displayName: "unflip",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN_TEXT,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.pnnn8f)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.pnnn8f)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.ETs6go)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.ETs6go)
      }
    }],
    execute: e => {
      var t;
      let n = null != (t = x(e, "message")) ? t : "";
      return {
        content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
      }
    }
  }, {
    id: "-4",
    untranslatedName: "tts",
    displayName: "tts",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN_TEXT,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.jZcIiY)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.jZcIiY)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t["k+sw9v"])
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t["k+sw9v"])
      },
      required: true
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return null != t && !t.isPrivate() && E.OW.getSetting() && y.Z.can(A.Plq.SEND_TTS_MESSAGES, t)
    },
    execute: e => {
      var t;
      return {
        content: null != (t = x(e, "message")) ? t : "",
        tts: true
      }
    }
  }, {
    id: "-5",
    untranslatedName: "me",
    displayName: "me",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN_TEXT,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.UGO8fX)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.UGO8fX)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.RWTgNT)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.RWTgNT)
      },
      required: true
    }],
    execute: e => {
      var t;
      let n = null != (t = x(e, "message")) ? t : "";
      return {
        content: "_".concat(n, "_")
      }
    }
  }, {
    id: "-6",
    untranslatedName: "spoiler",
    displayName: "spoiler",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN_TEXT,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.v0eDdX)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.v0eDdX)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.D13pbW)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.D13pbW)
      },
      required: true
    }],
    execute: e => {
      var t;
      let n = null != (t = x(e, "message")) ? t : "";
      return {
        content: (0, A.XmY)(n).trim()
      }
    }
  }, {
    id: "-7",
    untranslatedName: "nick",
    displayName: "nick",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.jiHfS0)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.jiHfS0)
    },
    options: [{
      name: "new_nick",
      displayName: "new_nick",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.WTSzVl)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.WTSzVl)
      }
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return null != t && !t.isPrivate() && (y.Z.can(A.Plq.CHANGE_NICKNAME, t) || y.Z.can(A.Plq.MANAGE_NICKNAMES, t))
    },
    execute: (e, t) => {
      var n;
      let {
        guild: r,
        channel: i
      } = t;
      if (null == r || null == i) return;
      let o = null != (n = x(e, "new_nick")) ? n : "";
      l.Z.changeNickname(r.id, i.id, A.ME, o || "")
    }
  }, {
    id: "-10",
    untranslatedName: "thread",
    displayName: "thread",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.t6ZAS0)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.t6ZAS0)
    },
    options: [{
      name: "name",
      displayName: "name",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.TffOfX)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.TffOfX)
      },
      required: true
    }, {
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.QXfSfX)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.QXfSfX)
      },
      required: true
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return null != t && (0, g.ki)(t)
    },
    execute: async (e, t) => {
      var n, r;
      let {
        channel: i
      } = t, o = null != (n = x(e, "name")) ? n : "", a = null != (r = x(e, "message")) ? r : "", l = await (0, m.gK)(i, o, s.d.PUBLIC_THREAD, (0, h.WD)(i, null), "Slash Command");
      d.Z.sendMessage(l.id, p.ZP.parse(l, a))
    }
  }, {
    id: "-11",
    untranslatedName: "kick",
    displayName: "kick",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t["03N0UF"])
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t["03N0UF"])
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk911969.jw.USER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.gF8IpK)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.gF8IpK)
      },
      required: true
    }, {
      name: "reason",
      displayName: "reason",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.QWldgo)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.QWldgo)
      },
      required: false
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return y.Z.can(A.Plq.KICK_MEMBERS, t)
    },
    execute: (e, t) => {
      var n;
      let {
        guild: r,
        channel: i
      } = t;
      if (null == r || null == i) return;
      let o = null != (n = x(e, "user")) ? n : "";
      if (!y.Z.canManageUser(A.Plq.KICK_MEMBERS, o, r)) return void d.Z.sendBotMessage(i.id, C.intl.string(C.t["6RIwPD"]));
      (async () => {
        var t;
        let n = O.default.getUser(o);
        if (null == n) throw Error();
        await u.Z.kickUser(r.id, o, null != (t = x(e, "reason")) ? t : ""), d.Z.sendBotMessage(i.id, C.intl.formatToPlainString(C.t["9wzHDQ"], {
          user: I.ZP.getUserTag(n)
        }))
      })().catch(() => {
        d.Z.sendBotMessage(i.id, C.intl.string(C.t.l0gNlp))
      })
    }
  }, {
    id: "-12",
    untranslatedName: "ban",
    displayName: "ban",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.HWuskp)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.HWuskp)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk911969.jw.USER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.z3XPjo)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.z3XPjo)
      },
      required: true
    }, {
      name: "delete_messages",
      displayName: "delete_messages",
      type: Chunk911969.jw.INTEGER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.smrvAw)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.smrvAw)
      },
      required: true,
      get choices() {
        return [{
          name: Chunk388032.intl.string(Chunk388032.t["4obaMT"]),
          displayName: Chunk388032.intl.string(Chunk388032.t["4obaMT"]),
          value: 0
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.RKpitb),
          displayName: Chunk388032.intl.string(Chunk388032.t.RKpitb),
          value: Chunk70956.Z.Seconds.HOUR
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["8WfJZ2"]),
          displayName: Chunk388032.intl.string(Chunk388032.t["8WfJZ2"]),
          value: 6 * Chunk70956.Z.Seconds.HOUR
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.p1up7u),
          displayName: Chunk388032.intl.string(Chunk388032.t.p1up7u),
          value: 12 * Chunk70956.Z.Seconds.HOUR
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.XuVkkJ),
          displayName: Chunk388032.intl.string(Chunk388032.t.XuVkkJ),
          value: Chunk70956.Z.Seconds.DAY
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.gMcDS0),
          displayName: Chunk388032.intl.string(Chunk388032.t.gMcDS0),
          value: 3 * Chunk70956.Z.Seconds.DAY
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.FA7IUl),
          displayName: Chunk388032.intl.string(Chunk388032.t.FA7IUl),
          value: 7 * Chunk70956.Z.Seconds.DAY
        }]
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.dG4noa)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.dG4noa)
      },
      required: false
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return y.Z.can(A.Plq.BAN_MEMBERS, t)
    },
    execute: (e, t) => {
      var n;
      let {
        guild: r,
        channel: i
      } = t;
      if (null == r || null == i) return;
      let o = null != (n = x(e, "user")) ? n : "";
      if (!y.Z.canManageUser(A.Plq.BAN_MEMBERS, o, r)) return void d.Z.sendBotMessage(i.id, C.intl.string(C.t.R27LJi));
      (async () => {
        var t, n;
        if ("" === o) throw Error();
        let a = null != (t = x(e, "delete_messages")) ? t : 0,
          s = null != (n = x(e, "reason")) ? n : "",
          l = O.default.getUser(o);
        await u.Z.banUser(r.id, o, a, s), d.Z.sendBotMessage(i.id, C.intl.formatToPlainString(C.t.YflWdH, {
          user: null != l ? I.ZP.getUserTag(l) : o
        }))
      })().catch(() => {
        d.Z.sendBotMessage(i.id, C.intl.string(C.t.w2J6Qk))
      })
    }
  }, {
    id: "-13",
    untranslatedName: "timeout",
    displayName: "timeout",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.KkPcen)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.KkPcen)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk911969.jw.USER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.UU3VRk)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.UU3VRk)
      },
      required: true
    }, {
      name: "duration",
      displayName: "duration",
      type: Chunk911969.jw.INTEGER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.SNqN1d)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.SNqN1d)
      },
      required: true,
      get choices() {
        return (0, Chunk590433.tr)().map(e => D(P({}, e), {
          name: e.label,
          displayName: e.label
        }))
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.akHScH)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.akHScH)
      },
      required: false
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return y.Z.can(A.Plq.MODERATE_MEMBERS, t)
    },
    execute: (e, t) => {
      let {
        guild: n,
        channel: r
      } = t;
      if (null == n || null == r) return;
      let i = x(e, "user");
      if (!(0, _.F)(n.id, i)) return void d.Z.sendBotMessage(r.id, C.intl.string(C.t.F5pqSU));
      (async () => {
        var t, o;
        let s = null != (t = x(e, "duration")) ? t : "",
          l = null != (o = x(e, "reason")) ? o : "",
          c = O.default.getUser(i);
        if (null == c) throw Error();
        await u.Z.setCommunicationDisabledUntil({
          guildId: n.id,
          userId: i,
          communicationDisabledUntilTimestamp: a()().add(s, "s").toISOString(),
          duration: s,
          reason: l
        }), d.Z.sendBotMessage(r.id, C.intl.formatToPlainString(C.t.BbRV6u, {
          user: I.ZP.getUserTag(c),
          duration: s
        }))
      })().catch(() => {
        d.Z.sendBotMessage(r.id, C.intl.string(C.t["+mWyVl"]))
      })
    }
  }, {
    id: "-14",
    untranslatedName: "msg",
    displayName: "msg",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.Dg8XZ2)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.Dg8XZ2)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk911969.jw.USER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t["KmVq/P"])
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t["KmVq/P"])
      },
      required: true
    }, {
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.oGUuOD)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.oGUuOD)
      },
      required: true,
      get maxLength() {
        var j;
        return (null == (j = Chunk594174.default.getCurrentUser()) ? true : j.premiumType) ? Chunk981631.en1 : Chunk981631.J6R
      }
    }],
    execute: (e, t) => {
      var n;
      let {
        channel: r
      } = t;
      if (null == r) return;
      let o = x(e, "user"),
        a = null != (n = x(e, "message")) ? n : "";
      (async () => {
        await c.Z.openPrivateChannel({
          recipientIds: o
        }).then(e => {
          let t = b.Z.getChannel(e);
          i()(null != t, "Newly created PrivateChannel is null"), d.Z.sendMessage(t.id, p.ZP.parse(t, a))
        })
      })().catch(() => {
        d.Z.sendBotMessage(r.id, C.intl.string(C.t["3XaE9/"]))
      })
    }
  }],
  U = k.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName)),
  G = (e, t, n) => {
    let r = t ? k : U;
    return r.filter(t => e.includes(t.type) && (!n || t.inputType === T.iw.BUILT_IN_TEXT || t.inputType === T.iw.BUILT_IN_INTEGRATION))
  }