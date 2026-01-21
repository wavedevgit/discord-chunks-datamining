/** Chunk was on 1272 **/
/** chunk id: 910436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function v(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: v
  } = e, y = (0, _.L)(), {
    voiceChannels: C,
    currentActivities: S,
    partiedMembers: T,
    applicationStreams: N,
    guildContext: j
  } = t, x = (0, p.z1)(v), P = [], A = e => {
    let {
      length: t
    } = P;
    if (0 === t) return void P.push(e);
    P.push(e)
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
      A((0, r.jsx)(E.Z.VoiceSection, {
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
    } return N.length > 0 && y && N.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: a
    } = e;
    A((0, r.jsx)(E.Z.ApplicationStreamingSection, {
      guildId: null == j ? true : j.id,
      user: n,
      activity: a,
      applicationStream: t,
      onPreviewClick: () => {
        i.default.selectVoiceChannel(t.channelId), (0, l.iV)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), S.forEach((e, t) => {
    var n, i, l, p, b, _, y, N, P;
    let {
      activity: Z,
      game: w,
      playingMembers: L,
      activityUser: R
    } = e;
    if (null == Z || null == Z.type) return null;
    if (Z.type === I.IIU.PLAYING)
      if (S.length > 1 && !(0, a.Z)(Z) && null != w) A((0, r.jsx)(E.Z.GameSection, {
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
      null != t && A((0, r.jsx)(E.Z.EmbeddedActivitySection, {
        activity: Z,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(Z.application_id)))
    } else(0, c.Z)(Z) ? A((0, r.jsx)(E.Z.XboxSection, {
      title: w.name
    }, "xbox-".concat(null != (p = Z.session_id) ? p : t))) : A((0, r.jsx)(E.Z.RichPresenceSection, {
      activity: Z,
      getAssetImage: m.xF,
      user: R
    }, "rich-presence-".concat(null != (b = Z.session_id) ? b : t, "-").concat(R.id)));
    else if ((0, u.Z)(Z)) {
      let e = C.length > 0 && C[0].members.length > 1,
        n = L.length > 1;
      A((0, r.jsx)(E.Z.TwitchSection, {
        guildId: null == j ? true : j.id,
        activity: Z,
        user: e || n ? R : null,
        getAssetImage: m.xF
      }, "streaming-".concat(null != (_ = Z.session_id) ? _ : t)))
    } else Z.type === I.IIU.LISTENING && ((0, s.Z)(Z) ? A((0, r.jsx)(E.Z.SpotifySection, {
      activity: Z,
      isSolo: 1 === T.length,
      partySize: {
        knownSize: L.length,
        unknownSize: 0,
        totalSize: L.length
      },
      getAssetImage: m.xF,
      members: L
    }, "spotify-".concat(null != (y = Z.session_id) ? y : t, "-").concat(R.id))) : (null != Z.assets || (0, a.Z)(Z)) && A((0, r.jsx)(E.Z.RichPresenceSection, {
      activity: Z,
      getAssetImage: m.xF,
      user: R
    }, "rich-presence-".concat(null != (N = Z.session_id) ? N : t, "-").concat(R.id))));
    x && null != v && null != w && (0, g._D)(Z, v) && (null == v.userStatus || !(0, f.zE)(v.userStatus, d.jn.ACTIVITY_PANEL)) && A((0, r.jsx)(h.Z, {
      quest: v
    }, "quest-".concat(v.id, "-").concat(null != (P = Z.session_id) ? P : t)))
  }), P.length > 0 ? (0, r.jsx)(E.Z.Body, {
    children: P
  }) : null
}