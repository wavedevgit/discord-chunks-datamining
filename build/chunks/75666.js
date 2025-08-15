/** Chunk was on 98464 **/
/** chunk id: 75666, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  AR: () => p,
  C2: () => u,
  Pp: () => f,
  VX: () => _,
  b7: () => m,
  sE: () => g
});
var i, l, r, d, Chunk149765 = require("./149765.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  u = ((i = {})[i.GUILD = 0] = "GUILD", i[i.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", i),
  _ = ((l = {}).GUILD_TEMPLATES = "guild-templates", l.CUSTOMIZE_NEW_GUILD = "customize-new-guild", l.CHOOSE_GUILD = "choose-guild", l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", l.CONFIRMATION = "confirmation", l),
  g = ((r = {}).CREATE = "CREATE", r.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", r.HUB_STUDY = "HUB_STUDY", r.HUB_CLASS = "HUB_CLASS", r.HUB_SOCIAL = "HUB_SOCIAL", r.HUB_MAJOR = "HUB_MAJOR", r.HUB_DORM = "HUB_DORM", r),
  p = ((d = {})[d.ALL = false] = "ALL", d[d.UNCATEGORIZED = 0] = "UNCATEGORIZED", d[d.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", d[d.CLASS = 2] = "CLASS", d[d.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", d[d.MISC = 5] = "MISC", d);

function m(e) {
  return "883060064561299456" === e ? [{
    value: 1,
    label: c.intl.string(c.t["Z+MPNz"])
  }, {
    value: 2,
    label: c.intl.string(c.t.dV9uBg)
  }, {
    value: 3,
    label: c.intl.string(c.t.xoHQcn)
  }, {
    value: 5,
    label: c.intl.string(c.t.Ao41rq)
  }] : [{
    value: 1,
    label: c.intl.string(c.t.oNHFUF),
    idealSize: 100
  }, {
    value: 2,
    label: c.intl.string(c.t.V1i8nZ)
  }, {
    value: 3,
    label: c.intl.string(c.t.Z2ygQk),
    idealSize: 50
  }, {
    value: 5,
    label: c.intl.string(c.t["0Bg9LS"])
  }]
}

function f() {
  return {
    CREATE: {
      id: "CREATE",
      code: "2TffvPucqHkN",
      label: Chunk388032.intl.string(Chunk388032.t["H3+6BA"]),
      channels: [],
      system_channel_id: null
    },
    HUB_SCHOOL_CLUB: {
      id: "HUB_SCHOOL_CLUB",
      code: "UMUbvRpRZhS6",
      label: Chunk388032.intl.string(Chunk388032.t["mmFA5+"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t["VCAA/f"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.GHQoER),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.nSsoSE),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.yZCzMT),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.mobYpK),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigI),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxs),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv7),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMj),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcH),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.hi1Ykp),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.vw8oaW),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      roles: [{
        id: "00",
        name: "@everyone",
        permissions: Chunk700785.TP
      }, {
        id: "01",
        name: "officers (example)",
        mentionable: true,
        hoist: true,
        permissions: Chunk149765.$e(Chunk700785.TP, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.MANAGE_NICKNAMES, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.SEND_TTS_MESSAGES),
        color: 3066993
      }],
      system_channel_id: "12"
    },
    HUB_STUDY: {
      id: "HUB_STUDY",
      code: "2JBhzzca2vfT",
      label: Chunk388032.intl.string(Chunk388032.t.fYwSi4),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t["HY+vdH"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t["3eM+Li"]),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.Qi0D7e),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUV1),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigI),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxs),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv7),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMj),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcH),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNT, {
          number: 1
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNT, {
          number: 2
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_CLASS: {
      id: "HUB_CLASS",
      code: "r86WWBwTGspb",
      label: Chunk388032.intl.string(Chunk388032.t.e5gFS0),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t["HY+vdH"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t["710tNj"]),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.Qi0D7e),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUV1),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigI),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxs),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv7),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMj),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcH),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNT, {
          number: 1
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNT, {
          number: 2
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_SOCIAL: {
      id: "HUB_SOCIAL",
      code: "AvvtXE3mfbCR",
      label: Chunk388032.intl.string(Chunk388032.t.oOj7Ii),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUV1),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigI),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxs),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv7),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "04",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.d4F8gI),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMj),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.CLWKNj),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.g3qPRk),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.yQZpe3),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      system_channel_id: "02"
    },
    HUB_MAJOR: {
      id: "HUB_MAJOR",
      code: "FhmfDR6Arvsc",
      label: Chunk388032.intl.string(Chunk388032.t["9kly4e"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t["HY+vdH"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.yZCzMT),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.Qi0D7e),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUV1),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigI),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxs),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv7),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMj),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcH),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNT, {
          number: 1
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNT, {
          number: 2
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_DORM: {
      id: "HUB_DORM",
      code: "fkq8xHfrGE58",
      label: Chunk388032.intl.string(Chunk388032.t["ppGw/P"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t["HY+vdH"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t["b2+FCQ"]),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUV1),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigI),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxs),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv7),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMj),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcH),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.g3qPRk),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.CLWKNj),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    }
  }
}