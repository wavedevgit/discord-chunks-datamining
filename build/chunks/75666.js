/** Chunk was on 96173 **/
t.d(n, {
  AR: () => b,
  C2: () => s,
  Pp: () => g,
  VX: () => p,
  b7: () => m,
  sE: () => u
});
var i, a, r, o, d = t(149765),
  _ = t(700785),
  l = t(981631),
  c = t(388032),
  s = ((i = {})[i.GUILD = 0] = "GUILD", i[i.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", i),
  p = ((a = {}).GUILD_TEMPLATES = "guild-templates", a.CUSTOMIZE_NEW_GUILD = "customize-new-guild", a.CHOOSE_GUILD = "choose-guild", a.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", a.CONFIRMATION = "confirmation", a),
  u = ((r = {}).CREATE = "CREATE", r.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", r.HUB_STUDY = "HUB_STUDY", r.HUB_CLASS = "HUB_CLASS", r.HUB_SOCIAL = "HUB_SOCIAL", r.HUB_MAJOR = "HUB_MAJOR", r.HUB_DORM = "HUB_DORM", r),
  b = ((o = {})[o.ALL = -1] = "ALL", o[o.UNCATEGORIZED = 0] = "UNCATEGORIZED", o[o.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", o[o.CLASS = 2] = "CLASS", o[o.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", o[o.MISC = 5] = "MISC", o);

function m(e) {
  return "883060064561299456" === e ? [{
    value: 1,
    label: c.NW.string(c.t["Z+MPNz"])
  }, {
    value: 2,
    label: c.NW.string(c.t.dV9uBg)
  }, {
    value: 3,
    label: c.NW.string(c.t.xoHQcn)
  }, {
    value: 5,
    label: c.NW.string(c.t.Ao41rq)
  }] : [{
    value: 1,
    label: c.NW.string(c.t.oNHFUF),
    idealSize: 100
  }, {
    value: 2,
    label: c.NW.string(c.t.V1i8nZ)
  }, {
    value: 3,
    label: c.NW.string(c.t.Z2ygQk),
    idealSize: 50
  }, {
    value: 5,
    label: c.NW.string(c.t["0Bg9LS"])
  }]
}

function g() {
  return {
    CREATE: {
      id: "CREATE",
      code: "2TffvPucqHkN",
      label: c.NW.string(c.t["H3+6BA"]),
      channels: [],
      system_channel_id: null
    },
    HUB_SCHOOL_CLUB: {
      id: "HUB_SCHOOL_CLUB",
      code: "UMUbvRpRZhS6",
      label: c.NW.string(c.t["mmFA5+"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: c.NW.string(c.t["VCAA/f"]),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: c.NW.string(c.t.GHQoER),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: c.NW.string(c.t.nSsoSE),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: c.NW.string(c.t.yZCzMT),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: c.NW.string(c.t.mobYpK),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: c.NW.string(c.t.pIOigI),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: c.NW.string(c.t.ao2wxs),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: c.NW.string(c.t.AIszv7),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: c.NW.string(c.t.vcKDMj),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: c.NW.string(c.t.XS6gcH),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: c.NW.string(c.t.hi1Ykp),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: c.NW.string(c.t.vw8oaW),
        type: l.d4z.GUILD_VOICE
      }],
      roles: [{
        id: "00",
        name: "@everyone",
        permissions: _.TP
      }, {
        id: "01",
        name: "officers (example)",
        mentionable: !0,
        hoist: !0,
        permissions: d.$e(_.TP, l.Plq.MANAGE_ROLES, l.Plq.MANAGE_CHANNELS, l.Plq.KICK_MEMBERS, l.Plq.BAN_MEMBERS, l.Plq.MANAGE_NICKNAMES, l.Plq.MANAGE_GUILD_EXPRESSIONS, l.Plq.MANAGE_MESSAGES, l.Plq.SEND_TTS_MESSAGES),
        color: 3066993
      }],
      system_channel_id: "12"
    },
    HUB_STUDY: {
      id: "HUB_STUDY",
      code: "2JBhzzca2vfT",
      label: c.NW.string(c.t.fYwSi4),
      channels: [{
        id: "00",
        parent_id: null,
        name: c.NW.string(c.t["HY+vdH"]),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: c.NW.string(c.t["3eM+Li"]),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: c.NW.string(c.t.Qi0D7e),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: c.NW.string(c.t.yZIUV1),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: c.NW.string(c.t.pIOigI),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: c.NW.string(c.t.ao2wxs),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: c.NW.string(c.t.AIszv7),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: c.NW.string(c.t.vcKDMj),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: c.NW.string(c.t.XS6gcH),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: c.NW.formatToPlainString(c.t.LuNsNT, {
          number: 1
        }),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: c.NW.formatToPlainString(c.t.LuNsNT, {
          number: 2
        }),
        type: l.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_CLASS: {
      id: "HUB_CLASS",
      code: "r86WWBwTGspb",
      label: c.NW.string(c.t.e5gFS0),
      channels: [{
        id: "00",
        parent_id: null,
        name: c.NW.string(c.t["HY+vdH"]),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: c.NW.string(c.t["710tNj"]),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: c.NW.string(c.t.Qi0D7e),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: c.NW.string(c.t.yZIUV1),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: c.NW.string(c.t.pIOigI),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: c.NW.string(c.t.ao2wxs),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: c.NW.string(c.t.AIszv7),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: c.NW.string(c.t.vcKDMj),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: c.NW.string(c.t.XS6gcH),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: c.NW.formatToPlainString(c.t.LuNsNT, {
          number: 1
        }),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: c.NW.formatToPlainString(c.t.LuNsNT, {
          number: 2
        }),
        type: l.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_SOCIAL: {
      id: "HUB_SOCIAL",
      code: "AvvtXE3mfbCR",
      label: c.NW.string(c.t.oOj7Ii),
      channels: [{
        id: "00",
        parent_id: null,
        name: c.NW.string(c.t.yZIUV1),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: c.NW.string(c.t.pIOigI),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: c.NW.string(c.t.ao2wxs),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: c.NW.string(c.t.AIszv7),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "04",
        parent_id: "00",
        name: c.NW.string(c.t.d4F8gI),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: c.NW.string(c.t.vcKDMj),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: c.NW.string(c.t.CLWKNj),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "12",
        parent_id: "10",
        name: c.NW.string(c.t.g3qPRk),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "13",
        parent_id: "10",
        name: c.NW.string(c.t.yQZpe3),
        type: l.d4z.GUILD_VOICE
      }],
      system_channel_id: "02"
    },
    HUB_MAJOR: {
      id: "HUB_MAJOR",
      code: "FhmfDR6Arvsc",
      label: c.NW.string(c.t["9kly4e"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: c.NW.string(c.t["HY+vdH"]),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: c.NW.string(c.t.yZCzMT),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: c.NW.string(c.t.Qi0D7e),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: c.NW.string(c.t.yZIUV1),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: c.NW.string(c.t.pIOigI),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: c.NW.string(c.t.ao2wxs),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: c.NW.string(c.t.AIszv7),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: c.NW.string(c.t.vcKDMj),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: c.NW.string(c.t.XS6gcH),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: c.NW.formatToPlainString(c.t.LuNsNT, {
          number: 1
        }),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: c.NW.formatToPlainString(c.t.LuNsNT, {
          number: 2
        }),
        type: l.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_DORM: {
      id: "HUB_DORM",
      code: "fkq8xHfrGE58",
      label: c.NW.string(c.t["ppGw/P"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: c.NW.string(c.t["HY+vdH"]),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: c.NW.string(c.t["b2+FCQ"]),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: c.NW.string(c.t.yZIUV1),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: c.NW.string(c.t.pIOigI),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: c.NW.string(c.t.ao2wxs),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: c.NW.string(c.t.AIszv7),
        type: l.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: c.NW.string(c.t.vcKDMj),
        type: l.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: c.NW.string(c.t.XS6gcH),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: c.NW.string(c.t.g3qPRk),
        type: l.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: c.NW.string(c.t.CLWKNj),
        type: l.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    }
  }
}