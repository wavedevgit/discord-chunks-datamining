/** Chunk was on 1272 **/
/** chunk id: 910436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk23404 = require("./23404.jsx"),
  Chunk81063 = require("./81063.js"),
  Chunk761282 = require("./761282.jsx"),
  Chunk358924 = require("./358924.jsx"),
  Chunk868854 = require("./868854.js"),
  Chunk817915 = require("./817915.js"),
  Chunk981631 = require("./981631.js");

function v(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: v
  } = e, y = (0, _.L)(), {
    voiceChannels: I,
    currentActivities: C,
    partiedMembers: S,
    applicationStreams: T,
    guildContext: N
  } = t, P = (0, p.z1)(v), j = [], A = e => {
    let {
      length: t
    } = j;
    if (0 === t) return void j.push(e);
    j.push(e)
  };
  for (let {
      activity: e
    }
    of(I.length > 0 && I.forEach(e => {
      let {
        members: t,
        channel: i,
        guild: l
      } = e;
      A((0, r.jsx)(b.Z.VoiceSection, {
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
      let t = m.ct(e);
      if (null != t) {
        A(t);
        break
      }
    } return T.length > 0 && y && T.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: a
    } = e;
    A((0, r.jsx)(b.Z.ApplicationStreamingSection, {
      guildId: null == N ? true : N.id,
      user: n,
      activity: a,
      applicationStream: t,
      onPreviewClick: () => {
        i.default.selectVoiceChannel(t.channelId), (0, l.iV)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), C.forEach((e, t) => {
    var n, i, l, p, m, _, y, T, j;
    let {
      activity: x,
      game: Z,
      playingMembers: w,
      activityUser: L
    } = e;
    if (null == x || null == x.type) return null;
    if (C.length > 1 && x.type === O.IIU.PLAYING && !(0, a.Z)(x) && null != Z) A((0, r.jsx)(b.Z.GameSection, {
      icon: Z.getIconURL(E.Z),
      name: Z.name,
      partySize: {
        knownSize: w.length,
        unknownSize: 0,
        totalSize: w.length
      },
      members: w,
      activity: x
    }, "game-".concat(null != (n = x.session_id) ? n : t, "-").concat(null != (i = x.application_id) ? i : t)));
    else if ((0, o.Z)(x)) {
      let e = new Set(w.map(e => e.id)),
        t = null == (l = I.find(e => null != e)) ? true : l.channel;
      null != t && A((0, r.jsx)(b.Z.EmbeddedActivitySection, {
        activity: x,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(x.application_id)))
    } else if (x.type === O.IIU.PLAYING) A((0, r.jsx)(b.Z.RichPresenceSection, {
      activity: x,
      getAssetImage: g.xF,
      user: L
    }, "rich-presence-".concat(null != (p = x.session_id) ? p : t, "-").concat(L.id)));
    else if ((0, u.Z)(x)) {
      let e = I.length > 0 && I[0].members.length > 1,
        n = w.length > 1;
      A((0, r.jsx)(b.Z.TwitchSection, {
        guildId: null == N ? true : N.id,
        activity: x,
        user: e || n ? L : null,
        getAssetImage: g.xF
      }, "streaming-".concat(null != (m = x.session_id) ? m : t)))
    } else(0, s.Z)(x) ? A((0, r.jsx)(b.Z.SpotifySection, {
      activity: x,
      isSolo: 1 === S.length,
      partySize: {
        knownSize: w.length,
        unknownSize: 0,
        totalSize: w.length
      },
      getAssetImage: g.xF,
      members: w
    }, "spotify-".concat(null != (_ = x.session_id) ? _ : t, "-").concat(L.id))) : (null != x.assets || (0, a.Z)(x)) && x.type === O.IIU.LISTENING ? A((0, r.jsx)(b.Z.RichPresenceSection, {
      activity: x,
      getAssetImage: g.xF,
      user: L
    }, "rich-presence-".concat(null != (y = x.session_id) ? y : t, "-").concat(L.id))) : (0, c.Z)(x) && A((0, r.jsx)(b.Z.XboxSection, {
      title: Z.name
    }, "xbox-".concat(null != (T = x.session_id) ? T : t)));
    P && null != v && null != Z && (0, d._D)(x, v) && (null == v.userStatus || !(0, d.zE)(v.userStatus, f.jn.ACTIVITY_PANEL)) && A((0, r.jsx)(h.Z, {
      quest: v
    }, "quest-".concat(v.id, "-").concat(null != (j = x.session_id) ? j : t)))
  }), j.length > 0 ? (0, r.jsx)(b.Z.Body, {
    children: j
  }) : null
}