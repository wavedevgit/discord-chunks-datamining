/** Chunk was on web.js **/
/** chunk id: 919577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk867455 = require("./867455.js"),
  Chunk543531 = require("./543531.js"),
  Chunk407689 = require("./407689.js"),
  Chunk613999 = require("./613999.js"),
  Chunk853742 = require("./853742.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
async function p(e, t, n) {
  try {
    return await e()
  } catch (e) {
    var r, i, s;
    (null == (r = e.body) ? true : r.code) === d.t02.NON_MODERATED_TAG_REQUIRED ? a.A.show({
      title: t,
      body: n
    }) : (null == (i = e.body) ? true : i.code) === d.t02.INVALID_FORM_BODY && (null == (s = e.body) ? true : s.errors.emoji) && a.A.show({
      title: f.intl.string(f.t.T8sBLJ),
      body: f.intl.string(f.t.aHt1Bd)
    })
  }
}
let _ = {
  resort(e) {
    i.h.dispatch({
      type: "RESORT_THREADS",
      channelId: e
    })
  },
  createForumTag: (e, t) => r.Bo.post({
    url: d.Rsh.FORUM_TAGS(t),
    body: {
      name: e.name,
      emoji_id: e.emojiId,
      emoji_name: null != e.emojiId ? true : e.emojiName,
      moderated: e.moderated
    },
    rejectWithError: false
  }),
  updateForumTag(e, t) {
    let n = r.Bo.put({
      url: d.Rsh.FORUM_TAG(t, e.id),
      body: {
        name: e.name,
        emoji_id: e.emojiId,
        emoji_name: null == e.emojiId ? e.emojiName : true,
        moderated: e.moderated
      },
      rejectWithError: false
    });
    p(() => n, f.intl.string(f.t.T8sBLJ), f.intl.string(f.t.imcb5u))
  },
  deleteForumTag(e, t) {
    let n = r.Bo.del({
      url: d.Rsh.FORUM_TAG(e, t),
      rejectWithError: false
    });
    p(() => n, f.intl.string(f.t["0ZkNDU"]), f.intl.string(f.t.imcb5u))
  },
  updateForumPostTags: async (e, t) => (await s.A.unarchiveThreadIfNecessary(e), r.Bo.patch({
    url: d.Rsh.CHANNEL(e),
    body: {
      applied_tags: t
    },
    rejectWithError: false
  })),
  hideAdminOnboarding(e, t) {
    i.h.dispatch({
      type: "ADMIN_ONBOARDING_GUIDE_HIDE",
      channelId: e,
      hide: t
    })
  },
  markPostAsSeen(e, t, n) {
    (0, o.wR)((0, c.$l)(e), t, n)
  },
  markPostAsUnseen(e, t, n) {
    (0, o.zK)((0, c.$l)(e), t, n)
  },
  flushSeenItems(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.Ao.IMMEDIATE_WITH_COOLDOWN;
    (0, o.Xt)((0, c.$l)(e), t)
  },
  async searchForumPosts(e, t, n, r, a) {
    i.h.dispatch({
      type: "FORUM_SEARCH_START",
      channelId: t
    });
    try {
      let o = await s.A.searchThreads(e, t, n, r, a);
      (0, u.Sc)({
        guildId: e,
        channelId: t,
        numSearchResults: o.length
      }), i.h.dispatch({
        type: "FORUM_SEARCH_SUCCESS",
        channelId: t,
        threadIds: o
      })
    } catch (e) {
      i.h.dispatch({
        type: "FORUM_SEARCH_FAILURE",
        channelId: t
      })
    }
  },
  updateForumSearchQuery(e, t) {
    i.h.dispatch({
      type: "FORUM_SEARCH_QUERY_UPDATED",
      channelId: e,
      query: t
    })
  },
  clearForumSearch(e) {
    i.h.dispatch({
      type: "FORUM_SEARCH_CLEAR",
      channelId: e
    })
  }
}