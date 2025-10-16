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
    applicationStreams: N,
    guildContext: T
  } = t, P = (0, p.z1)(v), j = [], x = e => {
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
      x((0, r.jsx)(b.Z.VoiceSection, {
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
        x(t);
        break
      }
    } return N.length > 0 && y && N.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: a
    } = e;
    x((0, r.jsx)(b.Z.ApplicationStreamingSection, {
      guildId: null == T ? true : T.id,
      user: n,
      activity: a,
      applicationStream: t,
      onPreviewClick: () => {
        i.default.selectVoiceChannel(t.channelId), (0, l.iV)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), C.forEach((e, t) => {
    var n, i, l, p, m, _, y, N, j;
    let {
      activity: Z,
      game: A,
      playingMembers: w,
      activityUser: L
    } = e;
    if (null == Z || null == Z.type) return null;
    if (C.length > 1 && Z.type === O.IIU.PLAYING && !(0, a.Z)(Z) && null != A) x((0, r.jsx)(b.Z.GameSection, {
      icon: A.getIconURL(E.Z),
      name: A.name,
      partySize: {
        knownSize: w.length,
        unknownSize: 0,
        totalSize: w.length
      },
      members: w,
      activity: Z
    }, "game-".concat(null != (n = Z.session_id) ? n : t, "-").concat(null != (i = Z.application_id) ? i : t)));
    else if ((0, o.Z)(Z)) {
      let e = new Set(w.map(e => e.id)),
        t = null == (l = I.find(e => null != e)) ? true : l.channel;
      null != t && x((0, r.jsx)(b.Z.EmbeddedActivitySection, {
        activity: Z,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(Z.application_id)))
    } else if (Z.type === O.IIU.PLAYING) x((0, r.jsx)(b.Z.RichPresenceSection, {
      activity: Z,
      getAssetImage: g.xF,
      user: L
    }, "rich-presence-".concat(null != (p = Z.session_id) ? p : t, "-").concat(L.id)));
    else if ((0, u.Z)(Z)) {
      let e = I.length > 0 && I[0].members.length > 1,
        n = w.length > 1;
      x((0, r.jsx)(b.Z.TwitchSection, {
        guildId: null == T ? true : T.id,
        activity: Z,
        user: e || n ? L : null,
        getAssetImage: g.xF
      }, "streaming-".concat(null != (m = Z.session_id) ? m : t)))
    } else(0, s.Z)(Z) ? x((0, r.jsx)(b.Z.SpotifySection, {
      activity: Z,
      isSolo: 1 === S.length,
      partySize: {
        knownSize: w.length,
        unknownSize: 0,
        totalSize: w.length
      },
      getAssetImage: g.xF,
      members: w
    }, "spotify-".concat(null != (_ = Z.session_id) ? _ : t, "-").concat(L.id))) : (null != Z.assets || (0, a.Z)(Z)) && Z.type === O.IIU.LISTENING ? x((0, r.jsx)(b.Z.RichPresenceSection, {
      activity: Z,
      getAssetImage: g.xF,
      user: L
    }, "rich-presence-".concat(null != (y = Z.session_id) ? y : t, "-").concat(L.id))) : (0, c.Z)(Z) && x((0, r.jsx)(b.Z.XboxSection, {
      title: A.name
    }, "xbox-".concat(null != (N = Z.session_id) ? N : t)));
    P && null != v && null != A && (0, d._D)(Z, v) && (null == v.userStatus || !(0, d.zE)(v.userStatus, f.jn.ACTIVITY_PANEL)) && x((0, r.jsx)(h.Z, {
      quest: v
    }, "quest-".concat(v.id, "-").concat(null != (j = Z.session_id) ? j : t)))
  }), j.length > 0 ? (0, r.jsx)(b.Z.Body, {
    children: j
  }) : null
}