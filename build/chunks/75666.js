/** Chunk was on 89522 **/
/** chunk id: 75666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AR: () => f,
  C2: () => u,
  Pp: () => m,
  VX: () => p,
  b7: () => g,
  sE: () => h
});
var r, i, l, a, Chunk149765 = require("./149765.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  u = ((r = {})[r.GUILD = 0] = "GUILD", r[r.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", r),
  p = ((i = {}).GUILD_TEMPLATES = "guild-templates", i.CUSTOMIZE_NEW_GUILD = "customize-new-guild", i.CHOOSE_GUILD = "choose-guild", i.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", i.CONFIRMATION = "confirmation", i),
  h = ((l = {}).CREATE = "CREATE", l.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", l.HUB_STUDY = "HUB_STUDY", l.HUB_CLASS = "HUB_CLASS", l.HUB_SOCIAL = "HUB_SOCIAL", l.HUB_MAJOR = "HUB_MAJOR", l.HUB_DORM = "HUB_DORM", l),
  f = ((a = {})[a.ALL = false] = "ALL", a[a.UNCATEGORIZED = 0] = "UNCATEGORIZED", a[a.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", a[a.CLASS = 2] = "CLASS", a[a.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", a[a.MISC = 5] = "MISC", a);

function g(e) {
  return "883060064561299456" === e ? [{
    value: 1,
    label: d.intl.string(d.t["Z+MPN/"])
  }, {
    value: 2,
    label: d.intl.string(d.t.dV9uBr)
  }, {
    value: 3,
    label: d.intl.string(d.t.xoHQcn)
  }, {
    value: 5,
    label: d.intl.string(d.t.Ao41ri)
  }] : [{
    value: 1,
    label: d.intl.string(d.t.oNHFUL),
    idealSize: 100
  }, {
    value: 2,
    label: d.intl.string(d.t.V1i8nS)
  }, {
    value: 3,
    label: d.intl.string(d.t.Z2ygQt),
    idealSize: 50
  }, {
    value: 5,
    label: d.intl.string(d.t["0Bg9La"])
  }]
}

function m() {
  return {
    CREATE: {
      id: "CREATE",
      code: "2TffvPucqHkN",
      label: Chunk388032.intl.string(Chunk388032.t["H3+6BK"]),
      channels: [],
      system_channel_id: null
    },
    HUB_SCHOOL_CLUB: {
      id: "HUB_SCHOOL_CLUB",
      code: "UMUbvRpRZhS6",
      label: Chunk388032.intl.string(Chunk388032.t.mmFA51),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t["VCAA/X"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.GHQoEd),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.nSsoSF),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.yZCzMa),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.mobYpC),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigB),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxq),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv8),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMv),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcJ),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.hi1Ykg),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.vw8oaS),
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
      label: Chunk388032.intl.string(Chunk388032.t.fYwSi2),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t["HY+vdA"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t["3eM+Lh"]),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.Qi0D7e),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUVx),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigB),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxq),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv8),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMv),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcJ),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNf, {
          number: 1
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNf, {
          number: 2
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_CLASS: {
      id: "HUB_CLASS",
      code: "r86WWBwTGspb",
      label: Chunk388032.intl.string(Chunk388032.t.e5gFS3),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t["HY+vdA"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t["710tNh"]),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.Qi0D7e),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUVx),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigB),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxq),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv8),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMv),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcJ),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNf, {
          number: 1
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNf, {
          number: 2
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_SOCIAL: {
      id: "HUB_SOCIAL",
      code: "AvvtXE3mfbCR",
      label: Chunk388032.intl.string(Chunk388032.t.oOj7It),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUVx),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigB),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxq),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv8),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "04",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.d4F8gP),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMv),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.CLWKNs),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.g3qPRn),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t["yQZpe/"]),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      system_channel_id: "02"
    },
    HUB_MAJOR: {
      id: "HUB_MAJOR",
      code: "FhmfDR6Arvsc",
      label: Chunk388032.intl.string(Chunk388032.t["9kly4U"]),
      channels: [{
        id: "00",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t["HY+vdA"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.yZCzMa),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t.Qi0D7e),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUVx),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigB),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxq),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv8),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMv),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcJ),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNf, {
          number: 1
        }),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: Chunk388032.intl.formatToPlainString(Chunk388032.t.LuNsNf, {
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
        name: Chunk388032.intl.string(Chunk388032.t["HY+vdA"]),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: Chunk388032.intl.string(Chunk388032.t["b2+FCc"]),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.yZIUVx),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.pIOigB),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.ao2wxq),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: Chunk388032.intl.string(Chunk388032.t.AIszv8),
        type: Chunk981631.d4z.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: Chunk388032.intl.string(Chunk388032.t.vcKDMv),
        type: Chunk981631.d4z.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.XS6gcJ),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.g3qPRn),
        type: Chunk981631.d4z.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: Chunk388032.intl.string(Chunk388032.t.CLWKNs),
        type: Chunk981631.d4z.GUILD_VOICE
      }],
      system_channel_id: "12"
    }
  }
}