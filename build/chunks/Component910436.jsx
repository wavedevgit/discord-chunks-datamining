/** Chunk was on 1272 **/
/** chunk id: 910436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk122810 = require("./122810.js"),
  Chunk841784 = require("./841784.js"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk420660 = require("./420660.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk862657 = require("./862657.js"),
  Chunk759479 = require("./759479.js"),
  Chunk364833 = require("./364833.jsx"),
  Chunk81063 = require("./81063.js"),
  Chunk761282 = require("./761282.jsx"),
  Chunk358924 = require("./358924.jsx"),
  Chunk868854 = require("./868854.js"),
  Chunk817915 = require("./817915.js"),
  Chunk981631 = require("./981631.js");

function y(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: y
  } = e, I = (0, E.L)(), {
    voiceChannels: C,
    currentActivities: S,
    partiedMembers: T,
    applicationStreams: N,
    guildContext: j
  } = t, P = (0, p.z1)(y), x = [], A = e => {
    let {
      length: t
    } = x;
    if (0 === t) return void x.push(e);
    x.push(e)
  };
  for (let {
      activity: e
    }
    of(C.length > 0 && C.forEach(e => {
      let {
        members: t,
        channel: i,
        guild: l
      } = e;
      A((0, r.jsx)(_.Z.VoiceSection, {
        guild: l,
        channel: i,
        members: t,
        partySize: function(e, t) {
          let n = e.length;
          return {
            knownSize: n,
            unknownSize: 0,
            totalSize: n + 0
          }
        }(t),
        onChannelContextMenu: n
      }, "voice-".concat(i.id)))
    }), t.currentActivities))
    if (null != e) {
      let t = b.ct(e);
      if (null != t) {
        A(t);
        break
      }
    } return N.length > 0 && I && N.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: a
    } = e;
    A((0, r.jsx)(_.Z.ApplicationStreamingSection, {
      guildId: null == j ? true : j.id,
      user: n,
      activity: a,
      applicationStream: t,
      onPreviewClick: () => {
        i.default.selectVoiceChannel(t.channelId), (0, l.iV)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), S.forEach((e, t) => {
    var n, i, l, p, b, E, I, N, x;
    let {
      activity: Z,
      game: w,
      playingMembers: L,
      activityUser: R
    } = e;
    if (null == Z || null == Z.type) return null;
    if (Z.type === v.IIU.PLAYING)
      if (S.length > 1 && !(0, a.Z)(Z) && null != w) A((0, r.jsx)(_.Z.GameSection, {
        icon: w.getIconURL(O.Z),
        name: w.name,
        partySize: {
          knownSize: L.length,
          unknownSize: 0,
          totalSize: L.length
        },
        members: L,
        activity: Z
      }, "game-".concat(null != (n = Z.session_id) ? n : t, "-").concat(null != (i = Z.application_id) ? i : t)));
      else if ((0, o.Z)(Z)) {
      let e = new Set(L.map(e => e.id)),
        t = null == (l = C.find(e => null != e)) ? true : l.channel;
      null != t && A((0, r.jsx)(_.Z.EmbeddedActivitySection, {
        activity: Z,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(Z.application_id)))
    } else(0, c.Z)(Z) ? A((0, r.jsx)(_.Z.XboxSection, {
      title: w.name
    }, "xbox-".concat(null != (p = Z.session_id) ? p : t))) : A((0, r.jsx)(_.Z.RichPresenceSection, {
      activity: Z,
      getAssetImage: h.xF,
      user: R
    }, "rich-presence-".concat(null != (b = Z.session_id) ? b : t, "-").concat(R.id)));
    else if ((0, u.Z)(Z)) {
      let e = C.length > 0 && C[0].members.length > 1,
        n = L.length > 1;
      A((0, r.jsx)(_.Z.TwitchSection, {
        guildId: null == j ? true : j.id,
        activity: Z,
        user: e || n ? R : null,
        getAssetImage: h.xF
      }, "streaming-".concat(null != (E = Z.session_id) ? E : t)))
    } else Z.type === v.IIU.LISTENING && ((0, s.Z)(Z) ? A((0, r.jsx)(_.Z.SpotifySection, {
      activity: Z,
      isSolo: 1 === T.length,
      partySize: {
        knownSize: L.length,
        unknownSize: 0,
        totalSize: L.length
      },
      getAssetImage: h.xF,
      members: L
    }, "spotify-".concat(null != (I = Z.session_id) ? I : t, "-").concat(R.id))) : (null != Z.assets || (0, a.Z)(Z)) && A((0, r.jsx)(_.Z.RichPresenceSection, {
      activity: Z,
      getAssetImage: h.xF,
      user: R
    }, "rich-presence-".concat(null != (N = Z.session_id) ? N : t, "-").concat(R.id))));
    P && null != y && null != w && (0, g._D)(Z, y) && (null == y.userStatus || !(0, f.zE)(y.userStatus, d.jn.ACTIVITY_PANEL)) && A((0, r.jsx)(m.Z, {
      quest: y
    }, "quest-".concat(y.id, "-").concat(null != (x = Z.session_id) ? x : t)))
  }), x.length > 0 ? (0, r.jsx)(_.Z.Body, {
    children: x
  }) : null
}