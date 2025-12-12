/** Chunk was on web.js **/
/** chunk id: 552018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $9: () => u
}), require("./980754.js"), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  Chunk381499 = require("./381499.js"),
  l = function(e) {
    return e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.EXCLUDE = 1] = "EXCLUDE", e[e.OVERRIDE = 2] = "OVERRIDE", e[e.REQUIRE = 3] = "REQUIRE", e
  }({});
class c extends Chunk495852.C {
  create(e) {
    let t = {
      type: 0,
      filters: [],
      isSunsetRule: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.type = e.int32();
          break;
        case 2:
          o.filters.push(_.internalBinaryRead(e, e.uint32(), n));
          break;
        case 3:
          o.override = f.internalBinaryRead(e, e.uint32(), n, o.override);
          break;
        case 4:
          o.isSunsetRule = e.bool();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.type && t.tag(1, r.TD.Varint).int32(e.type);
    for (let i = 0; i < e.filters.length; i++) _.internalBinaryWrite(e.filters[i], t.tag(2, r.TD.LengthDelimited).fork(), n).join();
    e.override && f.internalBinaryWrite(e.override, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), false !== e.isSunsetRule && t.tag(4, r.TD.Varint).bool(e.isSunsetRule);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.Rule", [{
      no: 1,
      name: "type",
      kind: "enum",
      T: () => ["discord_protos.discord_experimentation.v1.Rule.Type", l]
    }, {
      no: 2,
      name: "filters",
      kind: "message",
      repeat: 1,
      T: () => _
    }, {
      no: 3,
      name: "override",
      kind: "message",
      T: () => f
    }, {
      no: 4,
      name: "is_sunset_rule",
      kind: "scalar",
      T: 8
    }])
  }
}
let u = new c;
class d extends Chunk495852.C {
  create(e) {
    let t = {
      variationId: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.variationId = e.int32();
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.variationId && t.tag(1, r.TD.Varint).int32(e.variationId);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.Override", [{
      no: 1,
      name: "variation_id",
      kind: "scalar",
      T: 5
    }])
  }
}
let f = new d;
class p extends Chunk495852.C {
  create(e) {
    let t = {
      filter: {
        oneofKind: true
      }
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 2:
          o.filter = {
            oneofKind: "clientVersion",
            clientVersion: z.internalBinaryRead(e, e.uint32(), n, o.filter.clientVersion)
          };
          break;
        case 3:
          o.filter = {
            oneofKind: "clientOs",
            clientOs: U.internalBinaryRead(e, e.uint32(), n, o.filter.clientOs)
          };
          break;
        case 4:
          o.filter = {
            oneofKind: "staff",
            staff: h.internalBinaryRead(e, e.uint32(), n, o.filter.staff)
          };
          break;
        case 5:
          o.filter = {
            oneofKind: "userInGuild",
            userInGuild: E.internalBinaryRead(e, e.uint32(), n, o.filter.userInGuild)
          };
          break;
        case 6:
          o.filter = {
            oneofKind: "userIds",
            userIds: y.internalBinaryRead(e, e.uint32(), n, o.filter.userIds)
          };
          break;
        case 7:
          o.filter = {
            oneofKind: "clientLocale",
            clientLocale: I.internalBinaryRead(e, e.uint32(), n, o.filter.clientLocale)
          };
          break;
        case 8:
          o.filter = {
            oneofKind: "clientLocation",
            clientLocation: N.internalBinaryRead(e, e.uint32(), n, o.filter.clientLocation)
          };
          break;
        case 9:
          o.filter = {
            oneofKind: "clientIp",
            clientIp: M.internalBinaryRead(e, e.uint32(), n, o.filter.clientIp)
          };
          break;
        case 10:
          o.filter = {
            oneofKind: "userLocale",
            userLocale: v.internalBinaryRead(e, e.uint32(), n, o.filter.userLocale)
          };
          break;
        case 11:
          o.filter = {
            oneofKind: "bot",
            bot: ea.internalBinaryRead(e, e.uint32(), n, o.filter.bot)
          };
          break;
        case 12:
          o.filter = {
            oneofKind: "userAgeRange",
            userAgeRange: el.internalBinaryRead(e, e.uint32(), n, o.filter.userAgeRange)
          };
          break;
        case 13:
          o.filter = {
            oneofKind: "userIdRange",
            userIdRange: ef.internalBinaryRead(e, e.uint32(), n, o.filter.userIdRange)
          };
          break;
        case 14:
          o.filter = {
            oneofKind: "userHasFlag",
            userHasFlag: e_.internalBinaryRead(e, e.uint32(), n, o.filter.userHasFlag)
          };
          break;
        case 15:
          o.filter = {
            oneofKind: "unitIdInRangeByHash",
            unitIdInRangeByHash: eh.internalBinaryRead(e, e.uint32(), n, o.filter.unitIdInRangeByHash)
          };
          break;
        case 16:
          o.filter = {
            oneofKind: "clientReleaseChannel",
            clientReleaseChannel: eE.internalBinaryRead(e, e.uint32(), n, o.filter.clientReleaseChannel)
          };
          break;
        case 17:
          o.filter = {
            oneofKind: "always",
            always: ey.internalBinaryRead(e, e.uint32(), n, o.filter.always)
          };
          break;
        case 18:
          o.filter = {
            oneofKind: "clientSystemLocale",
            clientSystemLocale: C.internalBinaryRead(e, e.uint32(), n, o.filter.clientSystemLocale)
          };
          break;
        case 19:
          o.filter = {
            oneofKind: "unitIdInExperiment",
            unitIdInExperiment: ev.internalBinaryRead(e, e.uint32(), n, o.filter.unitIdInExperiment)
          };
          break;
        case 20:
          o.filter = {
            oneofKind: "userPremiumType",
            userPremiumType: eI.internalBinaryRead(e, e.uint32(), n, o.filter.userPremiumType)
          };
          break;
        case 21:
          o.filter = {
            oneofKind: "unitIdMatchesFilterSnapshot",
            unitIdMatchesFilterSnapshot: eC.internalBinaryRead(e, e.uint32(), n, o.filter.unitIdMatchesFilterSnapshot)
          };
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "clientVersion" === e.filter.oneofKind && z.internalBinaryWrite(e.filter.clientVersion, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), "clientOs" === e.filter.oneofKind && U.internalBinaryWrite(e.filter.clientOs, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), "staff" === e.filter.oneofKind && h.internalBinaryWrite(e.filter.staff, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), "userInGuild" === e.filter.oneofKind && E.internalBinaryWrite(e.filter.userInGuild, t.tag(5, r.TD.LengthDelimited).fork(), n).join(), "userIds" === e.filter.oneofKind && y.internalBinaryWrite(e.filter.userIds, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), "clientLocale" === e.filter.oneofKind && I.internalBinaryWrite(e.filter.clientLocale, t.tag(7, r.TD.LengthDelimited).fork(), n).join(), "clientLocation" === e.filter.oneofKind && N.internalBinaryWrite(e.filter.clientLocation, t.tag(8, r.TD.LengthDelimited).fork(), n).join(), "clientIp" === e.filter.oneofKind && M.internalBinaryWrite(e.filter.clientIp, t.tag(9, r.TD.LengthDelimited).fork(), n).join(), "userLocale" === e.filter.oneofKind && v.internalBinaryWrite(e.filter.userLocale, t.tag(10, r.TD.LengthDelimited).fork(), n).join(), "bot" === e.filter.oneofKind && ea.internalBinaryWrite(e.filter.bot, t.tag(11, r.TD.LengthDelimited).fork(), n).join(), "userAgeRange" === e.filter.oneofKind && el.internalBinaryWrite(e.filter.userAgeRange, t.tag(12, r.TD.LengthDelimited).fork(), n).join(), "userIdRange" === e.filter.oneofKind && ef.internalBinaryWrite(e.filter.userIdRange, t.tag(13, r.TD.LengthDelimited).fork(), n).join(), "userHasFlag" === e.filter.oneofKind && e_.internalBinaryWrite(e.filter.userHasFlag, t.tag(14, r.TD.LengthDelimited).fork(), n).join(), "unitIdInRangeByHash" === e.filter.oneofKind && eh.internalBinaryWrite(e.filter.unitIdInRangeByHash, t.tag(15, r.TD.LengthDelimited).fork(), n).join(), "clientReleaseChannel" === e.filter.oneofKind && eE.internalBinaryWrite(e.filter.clientReleaseChannel, t.tag(16, r.TD.LengthDelimited).fork(), n).join(), "always" === e.filter.oneofKind && ey.internalBinaryWrite(e.filter.always, t.tag(17, r.TD.LengthDelimited).fork(), n).join(), "clientSystemLocale" === e.filter.oneofKind && C.internalBinaryWrite(e.filter.clientSystemLocale, t.tag(18, r.TD.LengthDelimited).fork(), n).join(), "unitIdInExperiment" === e.filter.oneofKind && ev.internalBinaryWrite(e.filter.unitIdInExperiment, t.tag(19, r.TD.LengthDelimited).fork(), n).join(), "userPremiumType" === e.filter.oneofKind && eI.internalBinaryWrite(e.filter.userPremiumType, t.tag(20, r.TD.LengthDelimited).fork(), n).join(), "unitIdMatchesFilterSnapshot" === e.filter.oneofKind && eC.internalBinaryWrite(e.filter.unitIdMatchesFilterSnapshot, t.tag(21, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.Filter", [{
      no: 2,
      name: "client_version",
      kind: "message",
      oneof: "filter",
      T: () => z
    }, {
      no: 3,
      name: "client_os",
      kind: "message",
      oneof: "filter",
      T: () => U
    }, {
      no: 4,
      name: "staff",
      kind: "message",
      oneof: "filter",
      T: () => h
    }, {
      no: 5,
      name: "user_in_guild",
      kind: "message",
      oneof: "filter",
      T: () => E
    }, {
      no: 6,
      name: "user_ids",
      kind: "message",
      oneof: "filter",
      T: () => y
    }, {
      no: 7,
      name: "client_locale",
      kind: "message",
      oneof: "filter",
      T: () => I
    }, {
      no: 8,
      name: "client_location",
      kind: "message",
      oneof: "filter",
      T: () => N
    }, {
      no: 9,
      name: "client_ip",
      kind: "message",
      oneof: "filter",
      T: () => M
    }, {
      no: 10,
      name: "user_locale",
      kind: "message",
      oneof: "filter",
      T: () => v
    }, {
      no: 11,
      name: "bot",
      kind: "message",
      oneof: "filter",
      T: () => ea
    }, {
      no: 12,
      name: "user_age_range",
      kind: "message",
      oneof: "filter",
      T: () => el
    }, {
      no: 13,
      name: "user_id_range",
      kind: "message",
      oneof: "filter",
      T: () => ef
    }, {
      no: 14,
      name: "user_has_flag",
      kind: "message",
      oneof: "filter",
      T: () => e_
    }, {
      no: 15,
      name: "unit_id_in_range_by_hash",
      kind: "message",
      oneof: "filter",
      T: () => eh
    }, {
      no: 16,
      name: "client_release_channel",
      kind: "message",
      oneof: "filter",
      T: () => eE
    }, {
      no: 17,
      name: "always",
      kind: "message",
      oneof: "filter",
      T: () => ey
    }, {
      no: 18,
      name: "client_system_locale",
      kind: "message",
      oneof: "filter",
      T: () => C
    }, {
      no: 19,
      name: "unit_id_in_experiment",
      kind: "message",
      oneof: "filter",
      T: () => ev
    }, {
      no: 20,
      name: "user_premium_type",
      kind: "message",
      oneof: "filter",
      T: () => eI
    }, {
      no: 21,
      name: "unit_id_matches_filter_snapshot",
      kind: "message",
      oneof: "filter",
      T: () => eC
    }])
  }
}
let _ = new p;
class m extends Chunk495852.C {
  create(e) {
    let t = {
      workAccounts: false,
      personalAccounts: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.workAccounts = e.bool();
          break;
        case 2:
          o.personalAccounts = e.bool();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    false !== e.workAccounts && t.tag(1, r.TD.Varint).bool(e.workAccounts), false !== e.personalAccounts && t.tag(2, r.TD.Varint).bool(e.personalAccounts);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.StaffUsers", [{
      no: 1,
      name: "work_accounts",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "personal_accounts",
      kind: "scalar",
      T: 8
    }])
  }
}
let h = new m;
class g extends Chunk495852.C {
  create(e) {
    let t = {
      guildIds: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t)
        if (i === r.TD.LengthDelimited)
          for (let t = e.int32() + e.pos; e.pos < t;) o.guildIds.push(e.fixed64().toString());
        else o.guildIds.push(e.fixed64().toString());
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    if (e.guildIds.length) {
      t.tag(1, r.TD.LengthDelimited).fork();
      for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UserInGuild", [{
      no: 1,
      name: "guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }])
  }
}
let E = new g;
class b extends Chunk495852.C {
  create(e) {
    let t = {
      userIds: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t)
        if (i === r.TD.LengthDelimited)
          for (let t = e.int32() + e.pos; e.pos < t;) o.userIds.push(e.fixed64().toString());
        else o.userIds.push(e.fixed64().toString());
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    if (e.userIds.length) {
      t.tag(1, r.TD.LengthDelimited).fork();
      for (let n = 0; n < e.userIds.length; n++) t.fixed64(e.userIds[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UserIds", [{
      no: 1,
      name: "user_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }])
  }
}
let y = new b;
class O extends Chunk495852.C {
  create(e) {
    let t = {
      locales: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.locales.push(e.string());
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    for (let n = 0; n < e.locales.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.locales[n]);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UserLocale", [{
      no: 1,
      name: "locales",
      kind: "scalar",
      repeat: 2,
      T: 9
    }])
  }
}
let v = new O;
class S extends Chunk495852.C {
  create(e) {
    let t = {
      locales: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.locales.push(e.string());
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    for (let n = 0; n < e.locales.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.locales[n]);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientLocale", [{
      no: 1,
      name: "locales",
      kind: "scalar",
      repeat: 2,
      T: 9
    }])
  }
}
let I = new S;
class T extends Chunk495852.C {
  create(e) {
    let t = {
      locales: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.locales.push(e.string());
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    for (let n = 0; n < e.locales.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.locales[n]);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientSystemLocale", [{
      no: 1,
      name: "locales",
      kind: "scalar",
      repeat: 2,
      T: 9
    }])
  }
}
let C = new T;
class A extends Chunk495852.C {
  create(e) {
    let t = {
      locations: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.locations.push(L.internalBinaryRead(e, e.uint32(), n));
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    for (let i = 0; i < e.locations.length; i++) L.internalBinaryWrite(e.locations[i], t.tag(1, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientLocation", [{
      no: 1,
      name: "locations",
      kind: "message",
      repeat: 1,
      T: () => L
    }])
  }
}
let N = new A;
class P extends Chunk495852.C {
  create(e) {
    let t = {
      city: "",
      subdivision: "",
      country: ""
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.city = e.string();
          break;
        case 2:
          o.subdivision = e.string();
          break;
        case 3:
          o.country = e.string();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.city && t.tag(1, r.TD.LengthDelimited).string(e.city), "" !== e.subdivision && t.tag(2, r.TD.LengthDelimited).string(e.subdivision), "" !== e.country && t.tag(3, r.TD.LengthDelimited).string(e.country);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientLocation.Place", [{
      no: 1,
      name: "city",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "subdivision",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "country",
      kind: "scalar",
      T: 9
    }])
  }
}
let R = new P;
class w extends Chunk495852.C {
  create(e) {
    let t = {
      isoCountry: "",
      isoSubdivision: ""
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.isoCountry = e.string();
          break;
        case 2:
          o.isoSubdivision = e.string();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.isoCountry && t.tag(1, r.TD.LengthDelimited).string(e.isoCountry), "" !== e.isoSubdivision && t.tag(2, r.TD.LengthDelimited).string(e.isoSubdivision);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", [{
      no: 1,
      name: "iso_country",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "iso_subdivision",
      kind: "scalar",
      T: 9
    }])
  }
}
let D = new w;
class x extends Chunk495852.C {
  create(e) {
    let t = {
      location: {
        oneofKind: true
      }
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.location = {
            oneofKind: "isoRegion",
            isoRegion: D.internalBinaryRead(e, e.uint32(), n, o.location.isoRegion)
          };
          break;
        case 2:
          o.location = {
            oneofKind: "isEu",
            isEu: e.bool()
          };
          break;
        case 3:
          o.location = {
            oneofKind: "place",
            place: R.internalBinaryRead(e, e.uint32(), n, o.location.place)
          };
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "isoRegion" === e.location.oneofKind && D.internalBinaryWrite(e.location.isoRegion, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), "isEu" === e.location.oneofKind && t.tag(2, r.TD.Varint).bool(e.location.isEu), "place" === e.location.oneofKind && R.internalBinaryWrite(e.location.place, t.tag(3, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientLocation.Location", [{
      no: 1,
      name: "iso_region",
      kind: "message",
      oneof: "location",
      T: () => D
    }, {
      no: 2,
      name: "is_eu",
      kind: "scalar",
      oneof: "location",
      T: 8
    }, {
      no: 3,
      name: "place",
      kind: "message",
      oneof: "location",
      T: () => R
    }])
  }
}
let L = new x;
class j extends Chunk495852.C {
  create(e) {
    let t = {
      blocks: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.blocks.push(e.string());
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    for (let n = 0; n < e.blocks.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.blocks[n]);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientIP", [{
      no: 1,
      name: "blocks",
      kind: "scalar",
      repeat: 2,
      T: 9
    }])
  }
}
let M = new j;
class k extends Chunk495852.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.iosVersion = Z.internalBinaryRead(e, e.uint32(), n, o.iosVersion);
          break;
        case 2:
          o.androidVersion = Z.internalBinaryRead(e, e.uint32(), n, o.androidVersion);
          break;
        case 3:
          o.macosVersion = Z.internalBinaryRead(e, e.uint32(), n, o.macosVersion);
          break;
        case 4:
          o.windowsVersion = Z.internalBinaryRead(e, e.uint32(), n, o.windowsVersion);
          break;
        case 5:
          o.playstationVersion = Z.internalBinaryRead(e, e.uint32(), n, o.playstationVersion);
          break;
        case 6:
          o.xboxVersion = Z.internalBinaryRead(e, e.uint32(), n, o.xboxVersion);
          break;
        case 7:
          o.linuxVersion = Z.internalBinaryRead(e, e.uint32(), n, o.linuxVersion);
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    e.iosVersion && Z.internalBinaryWrite(e.iosVersion, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.androidVersion && Z.internalBinaryWrite(e.androidVersion, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), e.macosVersion && Z.internalBinaryWrite(e.macosVersion, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), e.windowsVersion && Z.internalBinaryWrite(e.windowsVersion, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), e.playstationVersion && Z.internalBinaryWrite(e.playstationVersion, t.tag(5, r.TD.LengthDelimited).fork(), n).join(), e.xboxVersion && Z.internalBinaryWrite(e.xboxVersion, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), e.linuxVersion && Z.internalBinaryWrite(e.linuxVersion, t.tag(7, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientOperatingSystem", [{
      no: 1,
      name: "ios_version",
      kind: "message",
      T: () => Z
    }, {
      no: 2,
      name: "android_version",
      kind: "message",
      T: () => Z
    }, {
      no: 3,
      name: "macos_version",
      kind: "message",
      T: () => Z
    }, {
      no: 4,
      name: "windows_version",
      kind: "message",
      T: () => Z
    }, {
      no: 5,
      name: "playstation_version",
      kind: "message",
      T: () => Z
    }, {
      no: 6,
      name: "xbox_version",
      kind: "message",
      T: () => Z
    }, {
      no: 7,
      name: "linux_version",
      kind: "message",
      T: () => Z
    }])
  }
}
let U = new k;
class G extends Chunk495852.C {
  create(e) {
    let t = {
      ranges: [],
      workAroundPyotoBug: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.ranges.push(B.internalBinaryRead(e, e.uint32(), n));
          break;
        case 2:
          o.workAroundPyotoBug = e.bool();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    for (let i = 0; i < e.ranges.length; i++) B.internalBinaryWrite(e.ranges[i], t.tag(1, r.TD.LengthDelimited).fork(), n).join();
    false !== e.workAroundPyotoBug && t.tag(2, r.TD.Varint).bool(e.workAroundPyotoBug);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.SDKVersion", [{
      no: 1,
      name: "ranges",
      kind: "message",
      repeat: 1,
      T: () => B
    }, {
      no: 2,
      name: "work_around_pyoto_bug",
      kind: "scalar",
      T: 8
    }])
  }
}
let Z = new G;
class F extends Chunk495852.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.lowerBound = H.internalBinaryRead(e, e.uint32(), n, o.lowerBound);
          break;
        case 2:
          o.upperBound = H.internalBinaryRead(e, e.uint32(), n, o.upperBound);
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    e.lowerBound && H.internalBinaryWrite(e.lowerBound, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.upperBound && H.internalBinaryWrite(e.upperBound, t.tag(2, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.SDKVersionRange", [{
      no: 1,
      name: "lower_bound",
      kind: "message",
      T: () => H
    }, {
      no: 2,
      name: "upper_bound",
      kind: "message",
      T: () => H
    }])
  }
}
let B = new F;
class V extends Chunk495852.C {
  create(e) {
    let t = {
      inclusive: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.version = W.internalBinaryRead(e, e.uint32(), n, o.version);
          break;
        case 2:
          o.inclusive = e.bool();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    e.version && W.internalBinaryWrite(e.version, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), false !== e.inclusive && t.tag(2, r.TD.Varint).bool(e.inclusive);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", [{
      no: 1,
      name: "version",
      kind: "message",
      T: () => W
    }, {
      no: 2,
      name: "inclusive",
      kind: "scalar",
      T: 8
    }])
  }
}
let H = new V;
class Y extends Chunk495852.C {
  create(e) {
    let t = {
      version: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.version = e.int32();
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.version && t.tag(1, r.TD.Varint).int32(e.version);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", [{
      no: 1,
      name: "version",
      kind: "scalar",
      T: 5
    }])
  }
}
let W = new Y;
class K extends Chunk495852.C {
  create(e) {
    let t = {
      allowNonNativeWeb: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.iosVersion = Q.internalBinaryRead(e, e.uint32(), n, o.iosVersion);
          break;
        case 2:
          o.androidVersion = Q.internalBinaryRead(e, e.uint32(), n, o.androidVersion);
          break;
        case 3:
          o.webVersion = Q.internalBinaryRead(e, e.uint32(), n, o.webVersion);
          break;
        case 4:
          o.nativeVersion = Q.internalBinaryRead(e, e.uint32(), n, o.nativeVersion);
          break;
        case 6:
          o.allowNonNativeWeb = e.bool();
          break;
        case 5:
          o.clientRequiredChanges = ei.internalBinaryRead(e, e.uint32(), n, o.clientRequiredChanges);
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    e.iosVersion && Q.internalBinaryWrite(e.iosVersion, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.androidVersion && Q.internalBinaryWrite(e.androidVersion, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), e.webVersion && Q.internalBinaryWrite(e.webVersion, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), e.nativeVersion && Q.internalBinaryWrite(e.nativeVersion, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), false !== e.allowNonNativeWeb && t.tag(6, r.TD.Varint).bool(e.allowNonNativeWeb), e.clientRequiredChanges && ei.internalBinaryWrite(e.clientRequiredChanges, t.tag(5, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientPlatform", [{
      no: 1,
      name: "ios_version",
      kind: "message",
      T: () => Q
    }, {
      no: 2,
      name: "android_version",
      kind: "message",
      T: () => Q
    }, {
      no: 3,
      name: "web_version",
      kind: "message",
      T: () => Q
    }, {
      no: 4,
      name: "native_version",
      kind: "message",
      T: () => Q
    }, {
      no: 6,
      name: "allow_non_native_web",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "client_required_changes",
      kind: "message",
      T: () => ei
    }])
  }
}
let z = new K;
class q extends Chunk495852.C {
  create(e) {
    let t = {
      ranges: [],
      workAroundPyotoBug: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.ranges.push(J.internalBinaryRead(e, e.uint32(), n));
          break;
        case 2:
          o.workAroundPyotoBug = e.bool();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    for (let i = 0; i < e.ranges.length; i++) J.internalBinaryWrite(e.ranges[i], t.tag(1, r.TD.LengthDelimited).fork(), n).join();
    false !== e.workAroundPyotoBug && t.tag(2, r.TD.Varint).bool(e.workAroundPyotoBug);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.PlatformVersion", [{
      no: 1,
      name: "ranges",
      kind: "message",
      repeat: 1,
      T: () => J
    }, {
      no: 2,
      name: "work_around_pyoto_bug",
      kind: "scalar",
      T: 8
    }])
  }
}
let Q = new q;
class X extends Chunk495852.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.lowerBound = ee.internalBinaryRead(e, e.uint32(), n, o.lowerBound);
          break;
        case 2:
          o.upperBound = ee.internalBinaryRead(e, e.uint32(), n, o.upperBound);
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    e.lowerBound && ee.internalBinaryWrite(e.lowerBound, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.upperBound && ee.internalBinaryWrite(e.upperBound, t.tag(2, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.PlatformVersionRange", [{
      no: 1,
      name: "lower_bound",
      kind: "message",
      T: () => ee
    }, {
      no: 2,
      name: "upper_bound",
      kind: "message",
      T: () => ee
    }])
  }
}
let J = new X;
class $ extends Chunk495852.C {
  create(e) {
    let t = {
      inclusive: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.version = en.internalBinaryRead(e, e.uint32(), n, o.version);
          break;
        case 2:
          o.inclusive = e.bool();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    e.version && en.internalBinaryWrite(e.version, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), false !== e.inclusive && t.tag(2, r.TD.Varint).bool(e.inclusive);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", [{
      no: 1,
      name: "version",
      kind: "message",
      T: () => en
    }, {
      no: 2,
      name: "inclusive",
      kind: "scalar",
      T: 8
    }])
  }
}
let ee = new $;
class et extends Chunk495852.C {
  create(e) {
    let t = {
      major: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.major = e.uint32();
          break;
        case 2:
          o.minor = s.yC.internalBinaryRead(e, e.uint32(), n, o.minor);
          break;
        case 3:
          o.build = s.wA.internalBinaryRead(e, e.uint32(), n, o.build);
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let l = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, l)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.major && t.tag(1, r.TD.Varint).uint32(e.major), e.minor && s.yC.internalBinaryWrite(e.minor, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), e.build && s.wA.internalBinaryWrite(e.build, t.tag(3, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", [{
      no: 1,
      name: "major",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "minor",
      kind: "message",
      T: () => Chunk381499.yC
    }, {
      no: 3,
      name: "build",
      kind: "message",
      T: () => Chunk381499.wA
    }])
  }
}
let en = new et;
class er extends Chunk495852.C {
  create(e) {
    let t = {
      commitHashes: [],
      prNumbers: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.commitHashes.push(e.string());
          break;
        case 2:
          if (i === r.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) o.prNumbers.push(e.int32());
          else o.prNumbers.push(e.int32());
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    for (let n = 0; n < e.commitHashes.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.commitHashes[n]);
    if (e.prNumbers.length) {
      t.tag(2, r.TD.LengthDelimited).fork();
      for (let n = 0; n < e.prNumbers.length; n++) t.int32(e.prNumbers[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientRequiredChanges", [{
      no: 1,
      name: "commit_hashes",
      kind: "scalar",
      repeat: 2,
      T: 9
    }, {
      no: 2,
      name: "pr_numbers",
      kind: "scalar",
      repeat: 1,
      T: 5
    }])
  }
}
let ei = new er;
class eo extends Chunk495852.C {
  create(e) {
    let t = {
      isBot: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.isBot = e.bool();
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    false !== e.isBot && t.tag(1, r.TD.Varint).bool(e.isBot);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UserIsBot", [{
      no: 1,
      name: "is_bot",
      kind: "scalar",
      T: 8
    }])
  }
}
let ea = new eo;
class es extends Chunk495852.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.minAgeYears = s.yC.internalBinaryRead(e, e.uint32(), n, o.minAgeYears);
          break;
        case 2:
          o.maxAgeYears = s.yC.internalBinaryRead(e, e.uint32(), n, o.maxAgeYears);
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let l = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, l)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    e.minAgeYears && s.yC.internalBinaryWrite(e.minAgeYears, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.maxAgeYears && s.yC.internalBinaryWrite(e.maxAgeYears, t.tag(2, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UserAgeRange", [{
      no: 1,
      name: "min_age_years",
      kind: "message",
      T: () => Chunk381499.yC
    }, {
      no: 2,
      name: "max_age_years",
      kind: "message",
      T: () => Chunk381499.yC
    }])
  }
}
let el = new es;
class ec extends Chunk495852.C {
  create(e) {
    let t = {
      value: "0"
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.value = e.fixed64().toString();
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.value && t.tag(1, r.TD.Bit64).fixed64(e.value);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.Fixed64Value", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 6
    }])
  }
}
let eu = new ec;
class ed extends Chunk495852.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.minId = eu.internalBinaryRead(e, e.uint32(), n, o.minId);
          break;
        case 2:
          o.maxId = eu.internalBinaryRead(e, e.uint32(), n, o.maxId);
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    e.minId && eu.internalBinaryWrite(e.minId, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.maxId && eu.internalBinaryWrite(e.maxId, t.tag(2, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UserIDRange", [{
      no: 1,
      name: "min_id",
      kind: "message",
      T: () => eu
    }, {
      no: 2,
      name: "max_id",
      kind: "message",
      T: () => eu
    }])
  }
}
let ef = new ed;
class ep extends Chunk495852.C {
  create(e) {
    let t = {
      mask: "0"
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.mask = e.fixed64().toString();
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.mask && t.tag(1, r.TD.Bit64).fixed64(e.mask);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UserHasFlag", [{
      no: 1,
      name: "mask",
      kind: "scalar",
      T: 6
    }])
  }
}
let e_ = new ep;
class em extends Chunk495852.C {
  create(e) {
    let t = {
      hashKey: "",
      target: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.hashKey = e.string();
          break;
        case 2:
          o.target = e.uint32();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.hashKey && t.tag(1, r.TD.LengthDelimited).string(e.hashKey), 0 !== e.target && t.tag(2, r.TD.Varint).uint32(e.target);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UnitIdInRangeByHash", [{
      no: 1,
      name: "hash_key",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "target",
      kind: "scalar",
      T: 13
    }])
  }
}
let eh = new em;
class eg extends Chunk495852.C {
  create(e) {
    let t = {
      releaseChannels: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.releaseChannels.push(e.string());
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    for (let n = 0; n < e.releaseChannels.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.releaseChannels[n]);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.ClientReleaseChannel", [{
      no: 1,
      name: "release_channels",
      kind: "scalar",
      repeat: 2,
      T: 9
    }])
  }
}
let eE = new eg;
class eb extends Chunk495852.C {
  create(e) {
    let t = {
      value: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.value = e.bool();
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    false !== e.value && t.tag(1, r.TD.Varint).bool(e.value);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.Always", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 8
    }])
  }
}
let ey = new eb;
class eO extends Chunk495852.C {
  create(e) {
    let t = {
      experimentId: "0",
      variationIds: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.experimentId = e.fixed64().toString();
          break;
        case 2:
          if (i === r.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) o.variationIds.push(e.int32());
          else o.variationIds.push(e.int32());
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    if ("0" !== e.experimentId && t.tag(1, r.TD.Bit64).fixed64(e.experimentId), e.variationIds.length) {
      t.tag(2, r.TD.LengthDelimited).fork();
      for (let n = 0; n < e.variationIds.length; n++) t.int32(e.variationIds[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UnitIdInExperiment", [{
      no: 1,
      name: "experiment_id",
      kind: "scalar",
      T: 6
    }, {
      no: 2,
      name: "variation_ids",
      kind: "scalar",
      repeat: 1,
      T: 5
    }])
  }
}
let ev = new eO;
class eS extends Chunk495852.C {
  create(e) {
    let t = {
      premiumTypes: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t)
        if (i === r.TD.LengthDelimited)
          for (let t = e.int32() + e.pos; e.pos < t;) o.premiumTypes.push(e.int32());
        else o.premiumTypes.push(e.int32());
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    if (e.premiumTypes.length) {
      t.tag(1, r.TD.LengthDelimited).fork();
      for (let n = 0; n < e.premiumTypes.length; n++) t.int32(e.premiumTypes[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UserPremiumType", [{
      no: 1,
      name: "premium_types",
      kind: "scalar",
      repeat: 1,
      T: 5
    }])
  }
}
let eI = new eS;
class eT extends Chunk495852.C {
  create(e) {
    let t = {
      filterSnapshotName: "",
      targetFilterValues: []
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.filterSnapshotName = e.string();
          break;
        case 2:
          if (i === r.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) o.targetFilterValues.push(e.fixed64().toString());
          else o.targetFilterValues.push(e.fixed64().toString());
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    if ("" !== e.filterSnapshotName && t.tag(1, r.TD.LengthDelimited).string(e.filterSnapshotName), e.targetFilterValues.length) {
      t.tag(2, r.TD.LengthDelimited).fork();
      for (let n = 0; n < e.targetFilterValues.length; n++) t.fixed64(e.targetFilterValues[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot", [{
      no: 1,
      name: "filter_snapshot_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "target_filter_values",
      kind: "scalar",
      repeat: 1,
      T: 6
    }])
  }
}
let eC = new eT