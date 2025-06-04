/** Chunk was on 89783 **/
e.d(n, {
  AR: () => g,
  C2: () => o,
  Pp: () => c,
  VX: () => p,
  b7: () => I,
  sE: () => E
});
var i, l, r, d, a = e(149765),
  _ = e(700785),
  s = e(981631),
  u = e(388032),
  o = ((i = {})[i.GUILD = 0] = "GUILD", i[i.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", i),
  p = ((l = {}).GUILD_TEMPLATES = "guild-templates", l.CUSTOMIZE_NEW_GUILD = "customize-new-guild", l.CHOOSE_GUILD = "choose-guild", l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", l.CONFIRMATION = "confirmation", l),
  E = ((r = {}).CREATE = "CREATE", r.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", r.HUB_STUDY = "HUB_STUDY", r.HUB_CLASS = "HUB_CLASS", r.HUB_SOCIAL = "HUB_SOCIAL", r.HUB_MAJOR = "HUB_MAJOR", r.HUB_DORM = "HUB_DORM", r),
  g = ((d = {})[d.ALL = -1] = "ALL", d[d.UNCATEGORIZED = 0] = "UNCATEGORIZED", d[d.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", d[d.CLASS = 2] = "CLASS", d[d.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", d[d.MISC = 5] = "MISC", d);

function I(t) {
  return "883060064561299456" === t ? [{
    value: 1,
    label: u.intl.string(u.t["Z+MPNz"])
  }, {
    value: 2,
    label: u.intl.string(u.t.dV9uBg)
  }, {
    value: 3,
    label: u.intl.string(u.t.xoHQcn)
  }, {
    value: 5,
    label: u.intl.string(u.t.Ao41rq)
  }] : [{
    value: 1,
    label: u.intl.string(u.t.oNHFUF),
    idealSize: 100
  }, {
    value: 2,
    label: u.intl.string(u.t.V1i8nZ)
  }, {
    value: 3,
    label: u.intl.string(u.t.Z2ygQk),
    idealSize: 50
  }, {
    value: 5,
    label: u.intl.string(u.t["0Bg9LS"])
  }]
}

function c() {
  return {
    CREATE: {
      id: "CREATE",
      code: "2TffvPucqHkN",
      label: u.intl.string(u.t["H3+6BA"]),
      channels: [],
      system_channel_id: null
    },
    HUB_SCHOOL_CLUB: {
      id: "HUB_SCHOOL_CLUB",
      code: "UMUbvRpRZhS6",
      label: u.intl.string(u.t["mmFA5+"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: u.intl.string(u.t["VCAA/f"]),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: u.intl.string(u.t.GHQoER),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: u.intl.string(u.t.nSsoSE),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: u.intl.string(u.t.yZCzMT),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: u.intl.string(u.t.mobYpK),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: u.intl.string(u.t.pIOigI),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: u.intl.string(u.t.ao2wxs),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: u.intl.string(u.t.AIszv7),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: u.intl.string(u.t.vcKDMj),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: u.intl.string(u.t.XS6gcH),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: u.intl.string(u.t.hi1Ykp),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: u.intl.string(u.t.vw8oaW),
        type: s.d4z.GUILD_VOICE
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
        permissions: a.$e(_.TP, s.Plq.MANAGE_ROLES, s.Plq.MANAGE_CHANNELS, s.Plq.KICK_MEMBERS, s.Plq.BAN_MEMBERS, s.Plq.MANAGE_NICKNAMES, s.Plq.MANAGE_GUILD_EXPRESSIONS, s.Plq.MANAGE_MESSAGES, s.Plq.SEND_TTS_MESSAGES),
        color: 3066993
      }],
      system_channel_id: "12"
    },
    HUB_STUDY: {
      id: "HUB_STUDY",
      code: "2JBhzzca2vfT",
      label: u.intl.string(u.t.fYwSi4),
      channels: [{
        id: "00",
        parent_id: null,
        name: u.intl.string(u.t["HY+vdH"]),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: u.intl.string(u.t["3eM+Li"]),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: u.intl.string(u.t.Qi0D7e),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: u.intl.string(u.t.yZIUV1),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: u.intl.string(u.t.pIOigI),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: u.intl.string(u.t.ao2wxs),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: u.intl.string(u.t.AIszv7),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: u.intl.string(u.t.vcKDMj),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: u.intl.string(u.t.XS6gcH),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: u.intl.formatToPlainString(u.t.LuNsNT, {
          number: 1
        }),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: u.intl.formatToPlainString(u.t.LuNsNT, {
          number: 2
        }),
        type: s.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_CLASS: {
      id: "HUB_CLASS",
      code: "r86WWBwTGspb",
      label: u.intl.string(u.t.e5gFS0),
      channels: [{
        id: "00",
        parent_id: null,
        name: u.intl.string(u.t["HY+vdH"]),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: u.intl.string(u.t["710tNj"]),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: u.intl.string(u.t.Qi0D7e),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: u.intl.string(u.t.yZIUV1),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: u.intl.string(u.t.pIOigI),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: u.intl.string(u.t.ao2wxs),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: u.intl.string(u.t.AIszv7),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: u.intl.string(u.t.vcKDMj),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: u.intl.string(u.t.XS6gcH),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: u.intl.formatToPlainString(u.t.LuNsNT, {
          number: 1
        }),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: u.intl.formatToPlainString(u.t.LuNsNT, {
          number: 2
        }),
        type: s.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_SOCIAL: {
      id: "HUB_SOCIAL",
      code: "AvvtXE3mfbCR",
      label: u.intl.string(u.t.oOj7Ii),
      channels: [{
        id: "00",
        parent_id: null,
        name: u.intl.string(u.t.yZIUV1),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: u.intl.string(u.t.pIOigI),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: u.intl.string(u.t.ao2wxs),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: u.intl.string(u.t.AIszv7),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "04",
        parent_id: "00",
        name: u.intl.string(u.t.d4F8gI),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: u.intl.string(u.t.vcKDMj),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: u.intl.string(u.t.CLWKNj),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "12",
        parent_id: "10",
        name: u.intl.string(u.t.g3qPRk),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "13",
        parent_id: "10",
        name: u.intl.string(u.t.yQZpe3),
        type: s.d4z.GUILD_VOICE
      }],
      system_channel_id: "02"
    },
    HUB_MAJOR: {
      id: "HUB_MAJOR",
      code: "FhmfDR6Arvsc",
      label: u.intl.string(u.t["9kly4e"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: u.intl.string(u.t["HY+vdH"]),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: u.intl.string(u.t.yZCzMT),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: u.intl.string(u.t.Qi0D7e),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: u.intl.string(u.t.yZIUV1),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: u.intl.string(u.t.pIOigI),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: u.intl.string(u.t.ao2wxs),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: u.intl.string(u.t.AIszv7),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: u.intl.string(u.t.vcKDMj),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: u.intl.string(u.t.XS6gcH),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: u.intl.formatToPlainString(u.t.LuNsNT, {
          number: 1
        }),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: u.intl.formatToPlainString(u.t.LuNsNT, {
          number: 2
        }),
        type: s.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_DORM: {
      id: "HUB_DORM",
      code: "fkq8xHfrGE58",
      label: u.intl.string(u.t["ppGw/P"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: u.intl.string(u.t["HY+vdH"]),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: u.intl.string(u.t["b2+FCQ"]),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: u.intl.string(u.t.yZIUV1),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: u.intl.string(u.t.pIOigI),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: u.intl.string(u.t.ao2wxs),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: u.intl.string(u.t.AIszv7),
        type: s.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: u.intl.string(u.t.vcKDMj),
        type: s.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: u.intl.string(u.t.XS6gcH),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: u.intl.string(u.t.g3qPRk),
        type: s.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: u.intl.string(u.t.CLWKNj),
        type: s.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    }
  }
}