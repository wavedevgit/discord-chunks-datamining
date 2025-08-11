/** Chunk was on web.js **/
/** chunk id: 75666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AR: () => u,
  C2: () => s,
  Pp: () => _,
  VX: () => l,
  b7: () => f,
  sE: () => c
});
var Chunk149765 = require("./149765.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  s = function(e) {
    return e[e.GUILD = 0] = "GUILD", e[e.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", e
  }({}),
  l = function(e) {
    return e.GUILD_TEMPLATES = "guild-templates", e.CUSTOMIZE_NEW_GUILD = "customize-new-guild", e.CHOOSE_GUILD = "choose-guild", e.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", e.CONFIRMATION = "confirmation", e
  }({}),
  c = function(e) {
    return e.CREATE = "CREATE", e.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", e.HUB_STUDY = "HUB_STUDY", e.HUB_CLASS = "HUB_CLASS", e.HUB_SOCIAL = "HUB_SOCIAL", e.HUB_MAJOR = "HUB_MAJOR", e.HUB_DORM = "HUB_DORM", e
  }({}),
  u = function(e) {
    return e[e.ALL = false] = "ALL", e[e.UNCATEGORIZED = 0] = "UNCATEGORIZED", e[e.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", e[e.CLASS = 2] = "CLASS", e[e.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", e[e.MISC = 5] = "MISC", e
  }({});
let d = "883060064561299456";

function f(e) {
  return e === d ? [{
    value: 1,
    label: a.intl.string(a.t["Z+MPNz"])
  }, {
    value: 2,
    label: a.intl.string(a.t.dV9uBg)
  }, {
    value: 3,
    label: a.intl.string(a.t.xoHQcn)
  }, {
    value: 5,
    label: a.intl.string(a.t.Ao41rq)
  }] : [{
    value: 1,
    label: a.intl.string(a.t.oNHFUF),
    idealSize: 100
  }, {
    value: 2,
    label: a.intl.string(a.t.V1i8nZ)
  }, {
    value: 3,
    label: a.intl.string(a.t.Z2ygQk),
    idealSize: 50
  }, {
    value: 5,
    label: a.intl.string(a.t["0Bg9LS"])
  }]
}

function _() {
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