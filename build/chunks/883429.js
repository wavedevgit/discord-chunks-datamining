/** Chunk was on web.js **/
/** chunk id: 883429, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk346479 = require("./346479.js"),
  Chunk929991 = require("./929991.js"),
  Chunk480739 = require("./480739.js"),
  Chunk985518 = require("./985518.js"),
  Chunk228392 = require("./228392.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function p(e, t, n) {
  try {
    return await e()
  } catch (e) {
    var r, i, a;
    (null == (r = e.body) ? true : r.code) === d.evJ.NON_MODERATED_TAG_REQUIRED ? o.Z.show({
      title: t,
      body: n
    }) : (null == (i = e.body) ? true : i.code) === d.evJ.INVALID_FORM_BODY && (null == (a = e.body) ? true : a.errors.emoji) && o.Z.show({
      title: f.intl.string(f.t.T8sBLJ),
      body: f.intl.string(f.t.aHt1Bd)
    })
  }
}
let _ = {
  resort(e) {
    i.Z.dispatch({
      type: "RESORT_THREADS",
      channelId: e
    })
  },
  createForumTag: (e, t) => r.tn.post({
    url: d.ANM.FORUM_TAGS(t),
    body: {
      name: e.name,
      emoji_id: e.emojiId,
      emoji_name: null != e.emojiId ? true : e.emojiName,
      moderated: e.moderated
    },
    rejectWithError: false
  }),
  updateForumTag(e, t) {
    let n = r.tn.put({
      url: d.ANM.FORUM_TAG(t, e.id),
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
    let n = r.tn.del({
      url: d.ANM.FORUM_TAG(e, t),
      rejectWithError: false
    });
    p(() => n, f.intl.string(f.t["0ZkNDU"]), f.intl.string(f.t.imcb5u))
  },
  updateForumPostTags: async (e, t) => (await a.Z.unarchiveThreadIfNecessary(e), r.tn.patch({
    url: d.ANM.CHANNEL(e),
    body: {
      applied_tags: t
    },
    rejectWithError: false
  })),
  hideAdminOnboarding(e, t) {
    i.Z.dispatch({
      type: "ADMIN_ONBOARDING_GUIDE_HIDE",
      channelId: e,
      hide: t
    })
  },
  markPostAsSeen(e, t, n) {
    (0, s.a8)((0, c.UP)(e), t, n)
  },
  markPostAsUnseen(e, t, n) {
    (0, s.FL)((0, c.UP)(e), t, n)
  },
  flushSeenItems(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.cs.IMMEDIATE_WITH_COOLDOWN;
    (0, s.rS)((0, c.UP)(e), t)
  },
  async searchForumPosts(e, t, n, r, o) {
    i.Z.dispatch({
      type: "FORUM_SEARCH_START",
      channelId: t
    });
    try {
      let s = await a.Z.searchThreads(e, t, n, r, o);
      (0, u.Js)({
        guildId: e,
        channelId: t,
        numSearchResults: s.length
      }), i.Z.dispatch({
        type: "FORUM_SEARCH_SUCCESS",
        channelId: t,
        threadIds: s
      })
    } catch (e) {
      i.Z.dispatch({
        type: "FORUM_SEARCH_FAILURE",
        channelId: t
      })
    }
  },
  updateForumSearchQuery(e, t) {
    i.Z.dispatch({
      type: "FORUM_SEARCH_QUERY_UPDATED",
      channelId: e,
      query: t
    })
  },
  clearForumSearch(e) {
    i.Z.dispatch({
      type: "FORUM_SEARCH_CLEAR",
      channelId: e
    })
  }
}