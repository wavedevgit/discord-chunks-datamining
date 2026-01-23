/** Chunk was on web.js **/
/** chunk id: 827785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ez: () => V,
  gZ: () => M
}), require("./896048.js"), require("./733351.js"), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk478437 = require("./478437.js"),
  Chunk715943 = require("./715943.js"),
  Chunk308528 = require("./308528.js"),
  Chunk686956 = require("./686956.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk838111 = require("./838111.js"),
  Chunk451909 = require("./451909.js"),
  Chunk268761 = require("./268761.js"),
  Chunk393309 = require("./393309.js"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk427262 = require("./427262.js"),
  Chunk392054 = require("./392054.js"),
  Chunk73510 = require("./73510.js"),
  Chunk652215 = require("./652215.js"),
  Chunk200700 = require("./200700.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx");

function w(e, t, n) {
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
      w(e, t, n[t])
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

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = require("./743361.js").A,
  j = (e, t) => {
    var n;
    return null == (n = e.find(e => e.name === t)) ? true : n.value
  },
  M = {
    [Chunk73510.Ik.BUILT_IN]: {
      id: Chunk73510.Ik.BUILT_IN,
      type: Chunk392054.Hf.BUILT_IN,
      get name() {
        return R.intl.string(R.t.fI5MTa)
      }
    },
    [Chunk73510.Ik.FRECENCY]: {
      id: Chunk73510.Ik.FRECENCY,
      type: Chunk392054.Hf.BUILT_IN,
      get name() {
        return R.intl.string(R.t["+cGVV6"])
      }
    }
  },
  k = [...L, {
    id: "-1",
    untranslatedName: "shrug",
    displayName: "shrug",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN_TEXT,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.j5xUSW)
    },
    get displayDescription() {
      return R.intl.string(R.t.j5xUSW)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.JewOrS)
      },
      get displayDescription() {
        return R.intl.string(R.t.JewOrS)
      }
    }],
    execute: e => {
      var t;
      let n = null != (t = j(e, "message")) ? t : "";
      return {
        content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
      }
    }
  }, {
    id: "-2",
    untranslatedName: "tableflip",
    displayName: "tableflip",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN_TEXT,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.nrQRce)
    },
    get displayDescription() {
      return R.intl.string(R.t.nrQRce)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.EI80tw)
      },
      get displayDescription() {
        return R.intl.string(R.t.EI80tw)
      }
    }],
    execute: e => {
      var t;
      let n = null != (t = j(e, "message")) ? t : "";
      return {
        content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
      }
    }
  }, {
    id: "-3",
    untranslatedName: "unflip",
    displayName: "unflip",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN_TEXT,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.pnnn8e)
    },
    get displayDescription() {
      return R.intl.string(R.t.pnnn8e)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.ETs6go)
      },
      get displayDescription() {
        return R.intl.string(R.t.ETs6go)
      }
    }],
    execute: e => {
      var t;
      let n = null != (t = j(e, "message")) ? t : "";
      return {
        content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
      }
    }
  }, {
    id: "-4",
    untranslatedName: "tts",
    displayName: "tts",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN_TEXT,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.jZcIid)
    },
    get displayDescription() {
      return R.intl.string(R.t.jZcIid)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t["k+sw9g"])
      },
      get displayDescription() {
        return R.intl.string(R.t["k+sw9g"])
      },
      required: true
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return null != t && !t.isPrivate() && E.on.getSetting() && b.A.can(T.xBc.SEND_TTS_MESSAGES, t)
    },
    execute: e => {
      var t;
      return {
        content: null != (t = j(e, "message")) ? t : "",
        tts: true
      }
    }
  }, {
    id: "-5",
    untranslatedName: "me",
    displayName: "me",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN_TEXT,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.UGO8fU)
    },
    get displayDescription() {
      return R.intl.string(R.t.UGO8fU)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.RWTgNd)
      },
      get displayDescription() {
        return R.intl.string(R.t.RWTgNd)
      },
      required: true
    }],
    execute: e => {
      var t;
      let n = null != (t = j(e, "message")) ? t : "";
      return {
        content: "_".concat(n, "_")
      }
    }
  }, {
    id: "-6",
    untranslatedName: "spoiler",
    displayName: "spoiler",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN_TEXT,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.v0eDdV)
    },
    get displayDescription() {
      return R.intl.string(R.t.v0eDdV)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.D13pbc)
      },
      get displayDescription() {
        return R.intl.string(R.t.D13pbc)
      },
      required: true
    }],
    execute: e => {
      var t;
      let n = null != (t = j(e, "message")) ? t : "";
      return {
        content: (0, T.ZGg)(n).trim()
      }
    }
  }, {
    id: "-7",
    untranslatedName: "nick",
    displayName: "nick",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t["jiHfS/"])
    },
    get displayDescription() {
      return R.intl.string(R.t["jiHfS/"])
    },
    options: [{
      name: "new_nick",
      displayName: "new_nick",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.WTSzVu)
      },
      get displayDescription() {
        return R.intl.string(R.t.WTSzVu)
      }
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return null != t && !t.isPrivate() && (b.A.can(T.xBc.CHANGE_NICKNAME, t) || b.A.can(T.xBc.MANAGE_NICKNAMES, t))
    },
    execute: (e, t) => {
      var n;
      let {
        guild: r,
        channel: i
      } = t;
      if (null == r || null == i) return;
      let a = null != (n = j(e, "new_nick")) ? n : "";
      l.A.changeNickname(r.id, i.id, T.ME, a || "")
    }
  }, {
    id: "-10",
    untranslatedName: "thread",
    displayName: "thread",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.t6ZAS0)
    },
    get displayDescription() {
      return R.intl.string(R.t.t6ZAS0)
    },
    options: [{
      name: "name",
      displayName: "name",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.TffOfY)
      },
      get displayDescription() {
        return R.intl.string(R.t.TffOfY)
      },
      required: true
    }, {
      name: "message",
      displayName: "message",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.QXfSfU)
      },
      get displayDescription() {
        return R.intl.string(R.t.QXfSfU)
      },
      required: true
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return null != t && (0, g.D1)(t)
    },
    execute: async (e, t) => {
      var n, r;
      let {
        channel: i
      } = t, a = null != (n = j(e, "name")) ? n : "", s = null != (r = j(e, "message")) ? r : "", l = await (0, m.Nw)(i, a, o.r.PUBLIC_THREAD, (0, h.Gl)(i, null), "Slash Command");
      d.A.sendMessage(l.id, _.Ay.parse(l, s), true, {
        location: N.Hx.THREAD_CREATION
      })
    }
  }, {
    id: "-11",
    untranslatedName: "kick",
    displayName: "kick",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t["03N0UL"])
    },
    get displayDescription() {
      return R.intl.string(R.t["03N0UL"])
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk155718.n4.USER,
      get description() {
        return R.intl.string(R.t.gF8IpD)
      },
      get displayDescription() {
        return R.intl.string(R.t.gF8IpD)
      },
      required: true
    }, {
      name: "reason",
      displayName: "reason",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.QWldgj)
      },
      get displayDescription() {
        return R.intl.string(R.t.QWldgj)
      },
      required: false
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return b.A.can(T.xBc.KICK_MEMBERS, t)
    },
    execute: (e, t) => {
      var n;
      let {
        guild: r,
        channel: i
      } = t;
      if (null == r || null == i) return;
      let a = null != (n = j(e, "user")) ? n : "";
      b.A.canManageUser(T.xBc.KICK_MEMBERS, a, r) ? (async () => {
        var t;
        let n = O.default.getUser(a);
        if (null == n) throw Error();
        await u.A.kickUser(r.id, a, null != (t = j(e, "reason")) ? t : ""), d.A.sendBotMessage(i.id, R.intl.formatToPlainString(R.t["9wzHDV"], {
          user: A.Ay.getUserTag(n)
        }))
      })().catch(() => {
        d.A.sendBotMessage(i.id, R.intl.string(R.t.l0gNlp))
      }) : d.A.sendBotMessage(i.id, R.intl.string(R.t["6RIwPI"]))
    }
  }, {
    id: "-12",
    untranslatedName: "ban",
    displayName: "ban",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.HWuskv)
    },
    get displayDescription() {
      return R.intl.string(R.t.HWuskv)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk155718.n4.USER,
      get description() {
        return R.intl.string(R.t.z3XPjr)
      },
      get displayDescription() {
        return R.intl.string(R.t.z3XPjr)
      },
      required: true
    }, {
      name: "delete_messages",
      displayName: "delete_messages",
      type: Chunk155718.n4.INTEGER,
      get description() {
        return R.intl.string(R.t.smrvA6)
      },
      get displayDescription() {
        return R.intl.string(R.t.smrvA6)
      },
      required: true,
      get choices() {
        return [{
          name: R.intl.string(R.t["4obaMS"]),
          displayName: R.intl.string(R.t["4obaMS"]),
          value: 0
        }, {
          name: R.intl.string(R.t.RKpitY),
          displayName: R.intl.string(R.t.RKpitY),
          value: v.A.Seconds.HOUR
        }, {
          name: R.intl.string(R.t["8WfJZ8"]),
          displayName: R.intl.string(R.t["8WfJZ8"]),
          value: 6 * v.A.Seconds.HOUR
        }, {
          name: R.intl.string(R.t.p1up7u),
          displayName: R.intl.string(R.t.p1up7u),
          value: 12 * v.A.Seconds.HOUR
        }, {
          name: R.intl.string(R.t.XuVkkD),
          displayName: R.intl.string(R.t.XuVkkD),
          value: v.A.Seconds.DAY
        }, {
          name: R.intl.string(R.t["gMcDS+"]),
          displayName: R.intl.string(R.t["gMcDS+"]),
          value: 3 * v.A.Seconds.DAY
        }, {
          name: R.intl.string(R.t.FA7IUk),
          displayName: R.intl.string(R.t.FA7IUk),
          value: 7 * v.A.Seconds.DAY
        }]
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.dG4noU)
      },
      get displayDescription() {
        return R.intl.string(R.t.dG4noU)
      },
      required: false
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return b.A.can(T.xBc.BAN_MEMBERS, t)
    },
    execute: (e, t) => {
      var n;
      let {
        guild: r,
        channel: i
      } = t;
      if (null == r || null == i) return;
      let a = null != (n = j(e, "user")) ? n : "";
      b.A.canManageUser(T.xBc.BAN_MEMBERS, a, r) ? (async () => {
        var t, n;
        if ("" === a) throw Error();
        let s = null != (t = j(e, "delete_messages")) ? t : 0,
          o = null != (n = j(e, "reason")) ? n : "",
          l = O.default.getUser(a);
        await u.A.banUser(r.id, a, s, o), d.A.sendBotMessage(i.id, R.intl.formatToPlainString(R.t.YflWdM, {
          user: null != l ? A.Ay.getUserTag(l) : a
        }))
      })().catch(() => {
        d.A.sendBotMessage(i.id, R.intl.string(R.t.w2J6Qs))
      }) : d.A.sendBotMessage(i.id, R.intl.string(R.t.R27LJl))
    }
  }, {
    id: "-13",
    untranslatedName: "timeout",
    displayName: "timeout",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.KkPcep)
    },
    get displayDescription() {
      return R.intl.string(R.t.KkPcep)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk155718.n4.USER,
      get description() {
        return R.intl.string(R.t.UU3VRm)
      },
      get displayDescription() {
        return R.intl.string(R.t.UU3VRm)
      },
      required: true
    }, {
      name: "duration",
      displayName: "duration",
      type: Chunk155718.n4.INTEGER,
      get description() {
        return R.intl.string(R.t.SNqN1e)
      },
      get displayDescription() {
        return R.intl.string(R.t.SNqN1e)
      },
      required: true,
      get choices() {
        return (0, C.ny)().map(e => x(P({}, e), {
          name: e.label,
          displayName: e.label
        }))
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.akHScA)
      },
      get displayDescription() {
        return R.intl.string(R.t.akHScA)
      },
      required: false
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return b.A.can(T.xBc.MODERATE_MEMBERS, t)
    },
    execute: (e, t) => {
      let {
        guild: n,
        channel: r
      } = t;
      if (null == n || null == r) return;
      let i = j(e, "user");
      (0, p.b)(n.id, i) ? (async () => {
        var t, a;
        let o = null != (t = j(e, "duration")) ? t : "",
          l = null != (a = j(e, "reason")) ? a : "",
          c = O.default.getUser(i);
        if (null == c) throw Error();
        await u.A.setCommunicationDisabledUntil({
          guildId: n.id,
          userId: i,
          communicationDisabledUntilTimestamp: s()().add(o, "s").toISOString(),
          duration: o,
          reason: l
        }), d.A.sendBotMessage(r.id, R.intl.formatToPlainString(R.t.BbRV6o, {
          user: A.Ay.getUserTag(c),
          duration: o
        }))
      })().catch(() => {
        d.A.sendBotMessage(r.id, R.intl.string(R.t["+mWyVq"]))
      }): d.A.sendBotMessage(r.id, R.intl.string(R.t.F5pqSf))
    }
  }, {
    id: "-14",
    untranslatedName: "msg",
    displayName: "msg",
    type: Chunk155718.kc.CHAT,
    inputType: Chunk392054.y$.BUILT_IN,
    applicationId: Chunk73510.Ik.BUILT_IN,
    get untranslatedDescription() {
      return R.intl.string(R.t.Dg8XZw)
    },
    get displayDescription() {
      return R.intl.string(R.t.Dg8XZw)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: Chunk155718.n4.USER,
      get description() {
        return R.intl.string(R.t["KmVq/D"])
      },
      get displayDescription() {
        return R.intl.string(R.t["KmVq/D"])
      },
      required: true
    }, {
      name: "message",
      displayName: "message",
      type: Chunk155718.n4.STRING,
      get description() {
        return R.intl.string(R.t.oGUuOJ)
      },
      get displayDescription() {
        return R.intl.string(R.t.oGUuOJ)
      },
      required: true,
      get maxLength() {
        var U;
        return (null == (U = O.default.getCurrentUser()) ? true : U.premiumType) ? T.CS1 : T.uvi
      }
    }],
    execute: (e, t) => {
      var n;
      let {
        channel: r
      } = t;
      if (null == r) return;
      let a = j(e, "user"),
        s = null != (n = j(e, "message")) ? n : "";
      (async () => {
        await c.A.openPrivateChannel({
          recipientIds: a
        }).then(e => {
          let t = y.A.getChannel(e);
          i()(null != t, "Newly created PrivateChannel is null"), d.A.sendMessage(t.id, _.Ay.parse(t, s), true, {
            location: N.Hx.PRIVATE_MESSAGE_COMMAND
          })
        })
      })().catch(() => {
        d.A.sendBotMessage(r.id, R.intl.string(R.t["3XaE95"]))
      })
    }
  }],
  G = k.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName)),
  V = (e, t, n) => {
    let r = t ? k : G;
    return r.filter(t => e.includes(t.type) && (!n || t.inputType === I.y$.BUILT_IN_TEXT || t.inputType === I.y$.BUILT_IN_INTEGRATION))
  }