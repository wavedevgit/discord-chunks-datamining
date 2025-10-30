/** Chunk was on web.js **/
/** chunk id: 254711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kh: () => B,
  Tm: () => k
}), require("./388685.js"), require("./781311.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = require("./227419.jsx").Z,
  M = (e, t) => {
    var n;
    return null == (n = e.find(e => e.name === t)) ? true : n.value
  },
  k = {
    [Chunk689079.bi.BUILT_IN]: {
      id: Chunk689079.bi.BUILT_IN,
      type: Chunk895924.Qi.BUILT_IN,
      get name() {
        return Chunk388032.intl.string(Chunk388032.t.fI5MTa)
      }
    },
    [Chunk689079.bi.FRECENCY]: {
      id: Chunk689079.bi.FRECENCY,
      type: Chunk895924.Qi.BUILT_IN,
      get name() {
        return Chunk388032.intl.string(Chunk388032.t["+cGVV6"])
      }
    }
  },
  j = [...x, {
    id: "-1",
    untranslatedName: "shrug",
    displayName: "shrug",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN_TEXT,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t.j5xUSW)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.j5xUSW)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.JewOrS)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.JewOrS)
      }
    }],
    execute: e => {
      var t;
      let n = null != (t = M(e, "message")) ? t : "";
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
      return Chunk388032.intl.string(Chunk388032.t.nrQRce)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.nrQRce)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.EI80tw)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.EI80tw)
      }
    }],
    execute: e => {
      var t;
      let n = null != (t = M(e, "message")) ? t : "";
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
      return Chunk388032.intl.string(Chunk388032.t.pnnn8e)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.pnnn8e)
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
      let n = null != (t = M(e, "message")) ? t : "";
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
      return Chunk388032.intl.string(Chunk388032.t.jZcIid)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.jZcIid)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t["k+sw9g"])
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t["k+sw9g"])
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
        content: null != (t = M(e, "message")) ? t : "",
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
      return Chunk388032.intl.string(Chunk388032.t.UGO8fU)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.UGO8fU)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.RWTgNd)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.RWTgNd)
      },
      required: true
    }],
    execute: e => {
      var t;
      let n = null != (t = M(e, "message")) ? t : "";
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
      return Chunk388032.intl.string(Chunk388032.t.v0eDdV)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.v0eDdV)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.D13pbc)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.D13pbc)
      },
      required: true
    }],
    execute: e => {
      var t;
      let n = null != (t = M(e, "message")) ? t : "";
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
      return Chunk388032.intl.string(Chunk388032.t["jiHfS/"])
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t["jiHfS/"])
    },
    options: [{
      name: "new_nick",
      displayName: "new_nick",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.WTSzVu)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.WTSzVu)
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
      let a = null != (n = M(e, "new_nick")) ? n : "";
      l.Z.changeNickname(r.id, i.id, A.ME, a || "")
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
        return Chunk388032.intl.string(Chunk388032.t.TffOfY)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.TffOfY)
      },
      required: true
    }, {
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.QXfSfU)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.QXfSfU)
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
      } = t, a = null != (n = M(e, "name")) ? n : "", o = null != (r = M(e, "message")) ? r : "", l = await (0, m.gK)(i, a, s.d.PUBLIC_THREAD, (0, h.WD)(i, null), "Slash Command");
      d.Z.sendMessage(l.id, p.ZP.parse(l, o), true, {
        location: N.dy.THREAD_CREATION
      })
    }
  }, {
    id: "-11",
    untranslatedName: "kick",
    displayName: "kick",
    type: Chunk911969.yU.CHAT,
    inputType: Chunk895924.iw.BUILT_IN,
    applicationId: Chunk689079.bi.BUILT_IN,
    get untranslatedDescription() {
      return Chunk388032.intl.string(Chunk388032.t["03N0UL"])
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t["03N0UL"])
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk911969.jw.USER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.gF8IpD)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.gF8IpD)
      },
      required: true
    }, {
      name: "reason",
      displayName: "reason",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.QWldgj)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.QWldgj)
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
      let a = null != (n = M(e, "user")) ? n : "";
      if (!y.Z.canManageUser(A.Plq.KICK_MEMBERS, a, r)) return void d.Z.sendBotMessage(i.id, R.intl.string(R.t["6RIwPI"]));
      (async () => {
        var t;
        let n = O.default.getUser(a);
        if (null == n) throw Error();
        await u.Z.kickUser(r.id, a, null != (t = M(e, "reason")) ? t : ""), d.Z.sendBotMessage(i.id, R.intl.formatToPlainString(R.t["9wzHDV"], {
          user: I.ZP.getUserTag(n)
        }))
      })().catch(() => {
        d.Z.sendBotMessage(i.id, R.intl.string(R.t.l0gNlp))
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
      return Chunk388032.intl.string(Chunk388032.t.HWuskv)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.HWuskv)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk911969.jw.USER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.z3XPjr)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.z3XPjr)
      },
      required: true
    }, {
      name: "delete_messages",
      displayName: "delete_messages",
      type: Chunk911969.jw.INTEGER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.smrvA6)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.smrvA6)
      },
      required: true,
      get choices() {
        return [{
          name: Chunk388032.intl.string(Chunk388032.t["4obaMS"]),
          displayName: Chunk388032.intl.string(Chunk388032.t["4obaMS"]),
          value: 0
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.RKpitY),
          displayName: Chunk388032.intl.string(Chunk388032.t.RKpitY),
          value: Chunk70956.Z.Seconds.HOUR
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["8WfJZ8"]),
          displayName: Chunk388032.intl.string(Chunk388032.t["8WfJZ8"]),
          value: 6 * Chunk70956.Z.Seconds.HOUR
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.p1up7u),
          displayName: Chunk388032.intl.string(Chunk388032.t.p1up7u),
          value: 12 * Chunk70956.Z.Seconds.HOUR
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.XuVkkD),
          displayName: Chunk388032.intl.string(Chunk388032.t.XuVkkD),
          value: Chunk70956.Z.Seconds.DAY
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["gMcDS+"]),
          displayName: Chunk388032.intl.string(Chunk388032.t["gMcDS+"]),
          value: 3 * Chunk70956.Z.Seconds.DAY
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.FA7IUk),
          displayName: Chunk388032.intl.string(Chunk388032.t.FA7IUk),
          value: 7 * Chunk70956.Z.Seconds.DAY
        }]
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.dG4noU)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.dG4noU)
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
      let a = null != (n = M(e, "user")) ? n : "";
      if (!y.Z.canManageUser(A.Plq.BAN_MEMBERS, a, r)) return void d.Z.sendBotMessage(i.id, R.intl.string(R.t.R27LJl));
      (async () => {
        var t, n;
        if ("" === a) throw Error();
        let o = null != (t = M(e, "delete_messages")) ? t : 0,
          s = null != (n = M(e, "reason")) ? n : "",
          l = O.default.getUser(a);
        await u.Z.banUser(r.id, a, o, s), d.Z.sendBotMessage(i.id, R.intl.formatToPlainString(R.t.YflWdM, {
          user: null != l ? I.ZP.getUserTag(l) : a
        }))
      })().catch(() => {
        d.Z.sendBotMessage(i.id, R.intl.string(R.t.w2J6Qs))
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
      return Chunk388032.intl.string(Chunk388032.t.KkPcep)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.KkPcep)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk911969.jw.USER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.UU3VRm)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.UU3VRm)
      },
      required: true
    }, {
      name: "duration",
      displayName: "duration",
      type: Chunk911969.jw.INTEGER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.SNqN1e)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.SNqN1e)
      },
      required: true,
      get choices() {
        return (0, Chunk590433.tr)().map(e => L(w({}, e), {
          name: e.label,
          displayName: e.label
        }))
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.akHScA)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.akHScA)
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
      let i = M(e, "user");
      if (!(0, _.F)(n.id, i)) return void d.Z.sendBotMessage(r.id, R.intl.string(R.t.F5pqSf));
      (async () => {
        var t, a;
        let s = null != (t = M(e, "duration")) ? t : "",
          l = null != (a = M(e, "reason")) ? a : "",
          c = O.default.getUser(i);
        if (null == c) throw Error();
        await u.Z.setCommunicationDisabledUntil({
          guildId: n.id,
          userId: i,
          communicationDisabledUntilTimestamp: o()().add(s, "s").toISOString(),
          duration: s,
          reason: l
        }), d.Z.sendBotMessage(r.id, R.intl.formatToPlainString(R.t.BbRV6o, {
          user: I.ZP.getUserTag(c),
          duration: s
        }))
      })().catch(() => {
        d.Z.sendBotMessage(r.id, R.intl.string(R.t["+mWyVq"]))
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
      return Chunk388032.intl.string(Chunk388032.t.Dg8XZw)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.Dg8XZw)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk911969.jw.USER,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t["KmVq/D"])
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t["KmVq/D"])
      },
      required: true
    }, {
      name: "message",
      displayName: "message",
      type: Chunk911969.jw.STRING,
      get description() {
        return Chunk388032.intl.string(Chunk388032.t.oGUuOJ)
      },
      get displayDescription() {
        return Chunk388032.intl.string(Chunk388032.t.oGUuOJ)
      },
      required: true,
      get maxLength() {
        var U;
        return (null == (U = Chunk594174.default.getCurrentUser()) ? true : U.premiumType) ? Chunk981631.en1 : Chunk981631.J6R
      }
    }],
    execute: (e, t) => {
      var n;
      let {
        channel: r
      } = t;
      if (null == r) return;
      let a = M(e, "user"),
        o = null != (n = M(e, "message")) ? n : "";
      (async () => {
        await c.Z.openPrivateChannel({
          recipientIds: a
        }).then(e => {
          let t = b.Z.getChannel(e);
          i()(null != t, "Newly created PrivateChannel is null"), d.Z.sendMessage(t.id, p.ZP.parse(t, o), true, {
            location: N.dy.PRIVATE_MESSAGE_COMMAND
          })
        })
      })().catch(() => {
        d.Z.sendBotMessage(r.id, R.intl.string(R.t["3XaE95"]))
      })
    }
  }],
  G = j.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName)),
  B = (e, t, n) => {
    let r = t ? j : G;
    return r.filter(t => e.includes(t.type) && (!n || t.inputType === S.iw.BUILT_IN_TEXT || t.inputType === S.iw.BUILT_IN_INTEGRATION))
  }