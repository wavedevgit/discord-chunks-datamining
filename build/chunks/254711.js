/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Kh: () => G,
  Tm: () => M
}), n(47120), n(566702), n(411104);
var r = n(512722),
  i = n.n(r),
  o = n(913527),
  a = n.n(o),
  s = n(106351),
  l = n(969812),
  c = n(493683),
  u = n(749210),
  d = n(904245),
  f = n(911969),
  p = n(386696),
  _ = n(957730),
  h = n(968437),
  m = n(928477),
  g = n(665906),
  E = n(695346),
  v = n(592125),
  b = n(496675),
  y = n(594174),
  O = n(70956),
  S = n(51144),
  I = n(895924),
  T = n(689079),
  N = n(981631),
  A = n(590433),
  C = n(388032);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let x = n(227419).Z,
  L = (e, t) => {
    var n;
    return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
  },
  M = {
    [T.bi.BUILT_IN]: {
      id: T.bi.BUILT_IN,
      type: I.Qi.BUILT_IN,
      get name() {
        return C.NW.string(C.t.fI5MTU)
      }
    },
    [T.bi.FRECENCY]: {
      id: T.bi.FRECENCY,
      type: I.Qi.BUILT_IN,
      get name() {
        return C.NW.string(C.t["+cGVV1"])
      }
    }
  },
  k = [...x, {
    id: "-1",
    untranslatedName: "shrug",
    displayName: "shrug",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN_TEXT,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.j5xUSU)
    },
    get displayDescription() {
      return C.NW.string(C.t.j5xUSU)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.JewOra)
      },
      get displayDescription() {
        return C.NW.string(C.t.JewOra)
      }
    }],
    execute: e => {
      var t;
      let n = null !== (t = L(e, "message")) && void 0 !== t ? t : "";
      return {
        content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
      }
    }
  }, {
    id: "-2",
    untranslatedName: "tableflip",
    displayName: "tableflip",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN_TEXT,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.nrQRcX)
    },
    get displayDescription() {
      return C.NW.string(C.t.nrQRcX)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.EI80t7)
      },
      get displayDescription() {
        return C.NW.string(C.t.EI80t7)
      }
    }],
    execute: e => {
      var t;
      let n = null !== (t = L(e, "message")) && void 0 !== t ? t : "";
      return {
        content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
      }
    }
  }, {
    id: "-3",
    untranslatedName: "unflip",
    displayName: "unflip",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN_TEXT,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.pnnn8f)
    },
    get displayDescription() {
      return C.NW.string(C.t.pnnn8f)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.ETs6go)
      },
      get displayDescription() {
        return C.NW.string(C.t.ETs6go)
      }
    }],
    execute: e => {
      var t;
      let n = null !== (t = L(e, "message")) && void 0 !== t ? t : "";
      return {
        content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
      }
    }
  }, {
    id: "-4",
    untranslatedName: "tts",
    displayName: "tts",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN_TEXT,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.jZcIiY)
    },
    get displayDescription() {
      return C.NW.string(C.t.jZcIiY)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t["k+sw9v"])
      },
      get displayDescription() {
        return C.NW.string(C.t["k+sw9v"])
      },
      required: !0
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return null != t && !t.isPrivate() && E.OW.getSetting() && b.Z.can(N.Plq.SEND_TTS_MESSAGES, t)
    },
    execute: e => {
      var t;
      return {
        content: null !== (t = L(e, "message")) && void 0 !== t ? t : "",
        tts: !0
      }
    }
  }, {
    id: "-5",
    untranslatedName: "me",
    displayName: "me",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN_TEXT,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.UGO8fX)
    },
    get displayDescription() {
      return C.NW.string(C.t.UGO8fX)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.RWTgNT)
      },
      get displayDescription() {
        return C.NW.string(C.t.RWTgNT)
      },
      required: !0
    }],
    execute: e => {
      var t;
      let n = null !== (t = L(e, "message")) && void 0 !== t ? t : "";
      return {
        content: "_".concat(n, "_")
      }
    }
  }, {
    id: "-6",
    untranslatedName: "spoiler",
    displayName: "spoiler",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN_TEXT,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.v0eDdX)
    },
    get displayDescription() {
      return C.NW.string(C.t.v0eDdX)
    },
    options: [{
      name: "message",
      displayName: "message",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.D13pbW)
      },
      get displayDescription() {
        return C.NW.string(C.t.D13pbW)
      },
      required: !0
    }],
    execute: e => {
      var t;
      let n = null !== (t = L(e, "message")) && void 0 !== t ? t : "";
      return {
        content: (0, N.XmY)(n).trim()
      }
    }
  }, {
    id: "-7",
    untranslatedName: "nick",
    displayName: "nick",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.jiHfS0)
    },
    get displayDescription() {
      return C.NW.string(C.t.jiHfS0)
    },
    options: [{
      name: "new_nick",
      displayName: "new_nick",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.WTSzVl)
      },
      get displayDescription() {
        return C.NW.string(C.t.WTSzVl)
      }
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return null != t && !t.isPrivate() && (b.Z.can(N.Plq.CHANGE_NICKNAME, t) || b.Z.can(N.Plq.MANAGE_NICKNAMES, t))
    },
    execute: (e, t) => {
      var n;
      let {
        guild: r,
        channel: i
      } = t;
      if (null == r || null == i) return;
      let o = null !== (n = L(e, "new_nick")) && void 0 !== n ? n : "";
      l.Z.changeNickname(r.id, i.id, N.ME, o || "")
    }
  }, {
    id: "-10",
    untranslatedName: "thread",
    displayName: "thread",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.t6ZAS0)
    },
    get displayDescription() {
      return C.NW.string(C.t.t6ZAS0)
    },
    options: [{
      name: "name",
      displayName: "name",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.TffOfX)
      },
      get displayDescription() {
        return C.NW.string(C.t.TffOfX)
      },
      required: !0
    }, {
      name: "message",
      displayName: "message",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.QXfSfX)
      },
      get displayDescription() {
        return C.NW.string(C.t.QXfSfX)
      },
      required: !0
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
      } = t, o = null !== (n = L(e, "name")) && void 0 !== n ? n : "", a = null !== (r = L(e, "message")) && void 0 !== r ? r : "", l = await (0, m.gK)(i, o, s.d.PUBLIC_THREAD, (0, h.WD)(i, null), "Slash Command");
      d.Z.sendMessage(l.id, _.ZP.parse(l, a))
    }
  }, {
    id: "-11",
    untranslatedName: "kick",
    displayName: "kick",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t["03N0UF"])
    },
    get displayDescription() {
      return C.NW.string(C.t["03N0UF"])
    },
    options: [{
      name: "user",
      displayName: "user",
      type: f.jw.USER,
      get description() {
        return C.NW.string(C.t.gF8IpK)
      },
      get displayDescription() {
        return C.NW.string(C.t.gF8IpK)
      },
      required: !0
    }, {
      name: "reason",
      displayName: "reason",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.QWldgo)
      },
      get displayDescription() {
        return C.NW.string(C.t.QWldgo)
      },
      required: !1
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return b.Z.can(N.Plq.KICK_MEMBERS, t)
    },
    execute: (e, t) => {
      var n;
      let {
        guild: r,
        channel: i
      } = t;
      if (null == r || null == i) return;
      let o = null !== (n = L(e, "user")) && void 0 !== n ? n : "";
      if (!b.Z.canManageUser(N.Plq.KICK_MEMBERS, o, r)) {
        d.Z.sendBotMessage(i.id, C.NW.string(C.t["6RIwPD"]));
        return
      }(async () => {
        var t;
        let n = y.default.getUser(o);
        if (null == n) throw Error();
        await u.Z.kickUser(r.id, o, null !== (t = L(e, "reason")) && void 0 !== t ? t : ""), d.Z.sendBotMessage(i.id, C.NW.formatToPlainString(C.t["9wzHDQ"], {
          user: S.ZP.getUserTag(n)
        }))
      })().catch(() => {
        d.Z.sendBotMessage(i.id, C.NW.string(C.t.l0gNlp))
      })
    }
  }, {
    id: "-12",
    untranslatedName: "ban",
    displayName: "ban",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.HWuskp)
    },
    get displayDescription() {
      return C.NW.string(C.t.HWuskp)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: f.jw.USER,
      get description() {
        return C.NW.string(C.t.z3XPjo)
      },
      get displayDescription() {
        return C.NW.string(C.t.z3XPjo)
      },
      required: !0
    }, {
      name: "delete_messages",
      displayName: "delete_messages",
      type: f.jw.INTEGER,
      get description() {
        return C.NW.string(C.t.smrvAw)
      },
      get displayDescription() {
        return C.NW.string(C.t.smrvAw)
      },
      required: !0,
      get choices() {
        return [{
          name: C.NW.string(C.t["4obaMT"]),
          displayName: C.NW.string(C.t["4obaMT"]),
          value: 0
        }, {
          name: C.NW.string(C.t.RKpitb),
          displayName: C.NW.string(C.t.RKpitb),
          value: O.Z.Seconds.HOUR
        }, {
          name: C.NW.string(C.t["8WfJZ2"]),
          displayName: C.NW.string(C.t["8WfJZ2"]),
          value: 6 * O.Z.Seconds.HOUR
        }, {
          name: C.NW.string(C.t.p1up7u),
          displayName: C.NW.string(C.t.p1up7u),
          value: 12 * O.Z.Seconds.HOUR
        }, {
          name: C.NW.string(C.t.XuVkkJ),
          displayName: C.NW.string(C.t.XuVkkJ),
          value: O.Z.Seconds.DAY
        }, {
          name: C.NW.string(C.t.gMcDS0),
          displayName: C.NW.string(C.t.gMcDS0),
          value: 3 * O.Z.Seconds.DAY
        }, {
          name: C.NW.string(C.t.FA7IUl),
          displayName: C.NW.string(C.t.FA7IUl),
          value: 7 * O.Z.Seconds.DAY
        }]
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.dG4noa)
      },
      get displayDescription() {
        return C.NW.string(C.t.dG4noa)
      },
      required: !1
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return b.Z.can(N.Plq.BAN_MEMBERS, t)
    },
    execute: (e, t) => {
      var n;
      let {
        guild: r,
        channel: i
      } = t;
      if (null == r || null == i) return;
      let o = null !== (n = L(e, "user")) && void 0 !== n ? n : "";
      if (!b.Z.canManageUser(N.Plq.BAN_MEMBERS, o, r)) {
        d.Z.sendBotMessage(i.id, C.NW.string(C.t.R27LJi));
        return
      }(async () => {
        var t, n;
        if ("" === o) throw Error();
        let a = null !== (t = L(e, "delete_messages")) && void 0 !== t ? t : 0,
          s = null !== (n = L(e, "reason")) && void 0 !== n ? n : "",
          l = y.default.getUser(o);
        await u.Z.banUser(r.id, o, a, s), d.Z.sendBotMessage(i.id, C.NW.formatToPlainString(C.t.YflWdH, {
          user: null != l ? S.ZP.getUserTag(l) : o
        }))
      })().catch(() => {
        d.Z.sendBotMessage(i.id, C.NW.string(C.t.w2J6Qk))
      })
    }
  }, {
    id: "-13",
    untranslatedName: "timeout",
    displayName: "timeout",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.KkPcen)
    },
    get displayDescription() {
      return C.NW.string(C.t.KkPcen)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: f.jw.USER,
      get description() {
        return C.NW.string(C.t.UU3VRk)
      },
      get displayDescription() {
        return C.NW.string(C.t.UU3VRk)
      },
      required: !0
    }, {
      name: "duration",
      displayName: "duration",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.SNqN1d)
      },
      get displayDescription() {
        return C.NW.string(C.t.SNqN1d)
      },
      required: !0,
      get choices() {
        return (0, A.tr)().map(e => D(P({}, e), {
          name: e.label,
          displayName: e.label
        }))
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.akHScH)
      },
      get displayDescription() {
        return C.NW.string(C.t.akHScH)
      },
      required: !1
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return b.Z.can(N.Plq.MODERATE_MEMBERS, t)
    },
    execute: (e, t) => {
      let {
        guild: n,
        channel: r
      } = t;
      if (null == n || null == r) return;
      let i = L(e, "user");
      if (!(0, p.F)(n.id, i)) {
        d.Z.sendBotMessage(r.id, C.NW.string(C.t.F5pqSU));
        return
      }(async () => {
        var t, o;
        let s = null !== (t = L(e, "duration")) && void 0 !== t ? t : "",
          l = null !== (o = L(e, "reason")) && void 0 !== o ? o : "",
          c = y.default.getUser(i);
        if (null == c) throw Error();
        await u.Z.setCommunicationDisabledUntil({
          guildId: n.id,
          userId: i,
          communicationDisabledUntilTimestamp: a()().add(s, "s").toISOString(),
          duration: s,
          reason: l
        }), d.Z.sendBotMessage(r.id, C.NW.formatToPlainString(C.t.BbRV6u, {
          user: S.ZP.getUserTag(c),
          duration: s
        }))
      })().catch(() => {
        d.Z.sendBotMessage(r.id, C.NW.string(C.t["+mWyVl"]))
      })
    }
  }, {
    id: "-14",
    untranslatedName: "msg",
    displayName: "msg",
    type: f.yU.CHAT,
    inputType: I.iw.BUILT_IN,
    applicationId: T.bi.BUILT_IN,
    get untranslatedDescription() {
      return C.NW.string(C.t.Dg8XZ2)
    },
    get displayDescription() {
      return C.NW.string(C.t.Dg8XZ2)
    },
    options: [{
      name: "user",
      displayName: "user",
      type: f.jw.USER,
      get description() {
        return C.NW.string(C.t["KmVq/P"])
      },
      get displayDescription() {
        return C.NW.string(C.t["KmVq/P"])
      },
      required: !0
    }, {
      name: "message",
      displayName: "message",
      type: f.jw.STRING,
      get description() {
        return C.NW.string(C.t.oGUuOD)
      },
      get displayDescription() {
        return C.NW.string(C.t.oGUuOD)
      },
      required: !0,
      get maxLength() {
        var j;
        return (null === (j = y.default.getCurrentUser()) || void 0 === j ? void 0 : j.premiumType) ? N.en1 : N.J6R
      }
    }],
    execute: (e, t) => {
      var n;
      let {
        channel: r
      } = t;
      if (null == r) return;
      let o = L(e, "user"),
        a = null !== (n = L(e, "message")) && void 0 !== n ? n : "";
      (async () => {
        await c.Z.openPrivateChannel(o).then(e => {
          let t = v.Z.getChannel(e);
          i()(null != t, "Newly created PrivateChannel is null"), d.Z.sendMessage(t.id, _.ZP.parse(t, a))
        })
      })().catch(() => {
        d.Z.sendBotMessage(r.id, C.NW.string(C.t["3XaE9/"]))
      })
    }
  }],
  U = k.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName)),
  G = (e, t, n) => {
    let r = t ? k : U;
    return r.filter(t => e.includes(t.type) && (!n || t.inputType === I.iw.BUILT_IN_TEXT || t.inputType === I.iw.BUILT_IN_INTEGRATION))
  }