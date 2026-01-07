/** Chunk was on web.js **/
/** chunk id: 661111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk802098 = require("./802098.js"),
  Chunk695346 = require("./695346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk596401 = require("./596401.js");

function c() {
  let e = new Date().getMinutes();
  return "x=".concat(Math.floor(e / 5))
}
let u = {
  lockChangeLog(e) {
    i.Z.dispatch({
      type: "CHANGE_LOG_LOCK",
      key: e
    })
  },
  unlockChangeLog(e) {
    i.Z.dispatch({
      type: "CHANGE_LOG_UNLOCK",
      key: e
    })
  },
  markChangelogAsSeen(e, t) {
    i.Z.dispatch({
      type: "CHANGE_LOG_MARK_SEEN",
      changelogId: e,
      changelogDate: t
    }), o.l4.updateSetting(e)
  },
  setChangelogOverride(e) {
    i.Z.dispatch({
      type: "CHANGE_LOG_SET_OVERRIDE",
      id: e
    }), null != e && this.sendChangelogMessage(e)
  },
  sendChangelogMessage(e) {
    r.tn.post({
      url: s.ANM.CHANGELOG_MESSAGES,
      body: {
        changelog_id: e
      },
      rejectWithError: true
    })
  },
  fetchChangelogConfig() {
    let e = l.Vw.DESKTOP;
    return r.tn.get({
      url: "https://cdn.discordapp.com/changelogs/config_".concat(e, ".json?").concat(c()),
      rejectWithError: true
    })
  },
  async fetchChangelog(e, t) {
    if (arguments.length > 2 && true !== arguments[2] && arguments[2], null != a.Z.getChangelog(e, t)) return null;
    let n = l.Vw.DESKTOP;
    try {
      let a = await r.tn.get({
        url: "https://cdn.discordapp.com/changelogs/".concat(n, "/").concat(e, "/").concat(t, ".json?").concat(c()),
        rejectWithError: true
      });
      return i.Z.dispatch({
        type: "CHANGE_LOG_FETCH_SUCCESS",
        id: e,
        changelog: a.body
      }), a.body
    } catch (n) {
      if (i.Z.dispatch({
          type: "CHANGE_LOG_FETCH_FAILED",
          id: e,
          locale: t
        }), "en-US" !== t) return await this.fetchChangelog(e, "en-US");
      return null
    }
  }
}