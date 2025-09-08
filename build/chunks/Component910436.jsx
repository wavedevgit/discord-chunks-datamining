/** Chunk was on 1272 **/
/** chunk id: 910436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk122810 = require("./122810.js"),
  Chunk841784 = require("./841784.js"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk420660 = require("./420660.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk23404 = require("./23404.jsx"),
  Chunk81063 = require("./81063.js"),
  Chunk761282 = require("./761282.jsx"),
  Chunk358924 = require("./358924.jsx"),
  Chunk868854 = require("./868854.js"),
  Chunk817915 = require("./817915.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: E
  } = e, y = (0, b.L)(), {
    voiceChannels: v,
    currentActivities: I,
    partiedMembers: C,
    applicationStreams: S,
    guildContext: T
  } = t, N = [], j = e => {
    let {
      length: t
    } = N;
    if (0 === t) return void N.push(e);
    N.push(e)
  };
  for (let {
      activity: e
    }
    of(v.length > 0 && v.forEach(e => {
      let {
        members: t,
        channel: i,
        guild: l
      } = e;
      j((0, r.jsx)(m.Z.VoiceSection, {
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
      let t = g.ct(e);
      if (null != t) {
        j(t);
        break
      }
    } return S.length > 0 && y && S.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: a
    } = e;
    j((0, r.jsx)(m.Z.ApplicationStreamingSection, {
      guildId: null == T ? true : T.id,
      user: n,
      activity: a,
      applicationStream: t,
      onPreviewClick: () => {
        i.default.selectVoiceChannel(t.channelId), (0, l.iV)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), I.forEach((e, t) => {
    var n, i, l, g, b, y, S, N, P;
    let {
      activity: x,
      game: A,
      playingMembers: Z,
      activityUser: w
    } = e;
    if (null == x || null == x.type) return null;
    if (I.length > 1 && x.type === O.IIU.PLAYING && !(0, a.Z)(x) && null != A) j((0, r.jsx)(m.Z.GameSection, {
      icon: A.getIconURL(_.Z),
      name: A.name,
      partySize: {
        knownSize: Z.length,
        unknownSize: 0,
        totalSize: Z.length
      },
      members: Z
    }, "game-".concat(null != (n = x.session_id) ? n : t, "-").concat(null != (i = x.application_id) ? i : t)));
    else if ((0, o.Z)(x)) {
      let e = new Set(Z.map(e => e.id)),
        t = null == (l = v.find(e => null != e)) ? true : l.channel;
      null != t && j((0, r.jsx)(m.Z.EmbeddedActivitySection, {
        activity: x,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(x.application_id)))
    } else if ((null != x.assets || (0, a.Z)(x)) && x.type === O.IIU.PLAYING) j((0, r.jsx)(m.Z.RichPresenceSection, {
      activity: x,
      getAssetImage: h.xF,
      user: w
    }, "rich-presence-".concat(null != (g = x.session_id) ? g : t, "-").concat(w.id)));
    else if ((0, u.Z)(x)) {
      let e = v.length > 0 && v[0].members.length > 1,
        n = Z.length > 1;
      j((0, r.jsx)(m.Z.TwitchSection, {
        guildId: null == T ? true : T.id,
        activity: x,
        user: e || n ? w : null,
        getAssetImage: h.xF
      }, "streaming-".concat(null != (b = x.session_id) ? b : t)))
    } else(0, s.Z)(x) ? j((0, r.jsx)(m.Z.SpotifySection, {
      activity: x,
      isSolo: 1 === C.length,
      partySize: {
        knownSize: Z.length,
        unknownSize: 0,
        totalSize: Z.length
      },
      getAssetImage: h.xF,
      members: Z
    }, "spotify-".concat(null != (y = x.session_id) ? y : t, "-").concat(w.id))) : (null != x.assets || (0, a.Z)(x)) && x.type === O.IIU.LISTENING ? j((0, r.jsx)(m.Z.RichPresenceSection, {
      activity: x,
      getAssetImage: h.xF,
      user: w
    }, "rich-presence-".concat(null != (S = x.session_id) ? S : t, "-").concat(w.id))) : (0, c.Z)(x) && j((0, r.jsx)(m.Z.XboxSection, {
      title: A.name
    }, "xbox-".concat(null != (N = x.session_id) ? N : t)));
    null != E && null != A && (0, d._D)(x, E) && (null == E.userStatus || !(0, d.zE)(E.userStatus, p.jn.ACTIVITY_PANEL)) && j((0, r.jsx)(f.Z, {
      quest: E
    }, "quest-".concat(E.id, "-").concat(null != (P = x.session_id) ? P : t)))
  }), N.length > 0 ? (0, r.jsx)(m.Z.Body, {
    children: N
  }) : null
}