/** Chunk was on 65354 **/
/** chunk id: 754231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk503438 = require("./503438.js"),
  Chunk39628 = require("./39628.jsx"),
  Chunk884338 = require("./884338.jsx"),
  Chunk424678 = require("./424678.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk81063 = require("./81063.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk506914 = require("./506914.js");
let O = Chunk884338.u8.SIZE_24;

function v(e) {
  var t, n;
  let {
    activity: i,
    user: l,
    embeddedApp: o,
    onOpenSpotifyAlbum: a
  } = e, d = null == i ? true : i.assets, p = null == i ? true : i.application_id;
  if (null == i || null == d || null == d.large_image && null == d.small_image)
    if (null == o) return null;
    else {
      let e = m.ZP.getApplicationIconURL({
          id: o.application.id,
          icon: o.application.icon
        }),
        t = o.application.name;
      return (0, r.jsx)(s.u, {
        text: t,
        position: "top",
        asContainer: true,
        children: (0, r.jsx)("img", {
          alt: t,
          src: e,
          className: y.applicationLargeImage
        })
      })
    } let f = null != (t = d.large_image) ? t : d.small_image,
    h = (0, u.Z)(i),
    b = h ? y.spotifyLargeImage : y.applicationLargeImage,
    _ = null != f ? (0, r.jsx)("img", {
      alt: null != (n = d.large_text) ? n : "",
      src: (0, g.xF)(p, f, [128, 128]),
      className: b
    }) : null;
  return h && null != a ? (_ = (0, r.jsx)(c.P3F, {
    className: y.clickable,
    onClick: () => {
      a(i, l.id)
    },
    children: _
  }), (0, r.jsx)(s.u, {
    text: null != d.large_text ? d.large_text : null,
    position: "top",
    children: _
  })) : _
}

function j(e) {
  let {
    activity: t,
    embeddedApp: n,
    onOpenSpotifyTrack: i
  } = e, l = null == t ? true : t.details, o = null == t ? true : t.name, a = o;
  if (null != n) a = n.application.name;
  else {
    if (!(null != t && (0, u.Z)(t)) || null == t.sync_id || null == l || null == i) return null;
    o = l, a = (0, r.jsx)(c.P3F, {
      className: y.headerLink,
      onClick: () => {
        i(t)
      },
      children: l
    })
  }
  return (0, r.jsx)(c.Heading, {
    variant: "heading-sm/semibold",
    color: "header-primary",
    className: y.header,
    children: a
  })
}

function x(e) {
  let {
    activity: t,
    user: n,
    onOpenSpotifyArtist: i
  } = e, l = null == t ? true : t.details, a = null == t ? true : t.state, s = l;
  return (null != t && (0, u.Z)(t) && null != a && (s = [(0, r.jsx)(f.Z, {
    artists: a,
    linkClassName: y.bodyLink,
    canOpen: null != t.sync_id,
    onOpenSpotifyArtist: e => {
      null == i || i(t, n.id, e)
    }
  }, a)]), null == s || "" === s) ? null : (0, r.jsx)("div", {
    className: o()(y.ellipsisRow, y.colorHeaderSecondary, y.bodyTextSize),
    children: s
  })
}

function C(e) {
  let {
    activity: t
  } = e, n = null == t ? true : t.state;
  return null == n || "" === n || (0, u.Z)(t) ? null : (0, r.jsx)("div", {
    className: o()(y.ellipsisRow, y.colorHeaderSecondary, y.bodyTextSize, y.__invalid_activity),
    children: n
  })
}

function E(e) {
  let {
    activity: t
  } = e;
  if (null == t || !(0, u.Z)(t)) return null;
  let {
    timestamps: n
  } = t;
  if ((null == n ? true : n.start) == null || (null == n ? true : n.end) == null) return null;
  let {
    start: i,
    end: l
  } = n;
  return (0, r.jsx)(d.Z, {
    start: i,
    end: l,
    className: y.timeBar,
    themed: true,
    singleLine: true
  })
}

function S(e) {
  let {
    activity: t,
    embeddedApp: n,
    user: l,
    channel: o,
    sortedVoiceStates: c,
    onOpenSpotifyTrack: d,
    onOpenSpotifyArtist: f,
    onOpenSpotifyAlbum: g
  } = e, m = [];
  null != n ? m = Array.from(n.embeddedActivity.userIds) : (0, u.Z)(t) && null != c && (m = c.map(e => e.user.id));
  let S = (0, a.Wu)([h.default], () => m.map(e => h.default.getUser(e)).filter(b.lm)),
    I = null != n || (0, u.Z)(t),
    P = i.useMemo(() => {
      let e = new Map;
      return I && null != c && c.forEach(t => {
        let n = t.member;
        null != n && e.set(t.user.id, n)
      }), e
    }, [c, I]);
  return I ? (0, r.jsxs)("div", {
    className: y.flexColumn,
    children: [(0, r.jsxs)("div", {
      className: y.flexRow,
      children: [(0, r.jsx)(v, {
        activity: t,
        user: l,
        embeddedApp: n,
        onOpenSpotifyAlbum: g
      }), (0, r.jsxs)("div", {
        className: y.detailsAndAvatarsContainer,
        children: [(0, r.jsx)(j, {
          activity: t,
          embeddedApp: n,
          onOpenSpotifyTrack: d
        }), (0, r.jsx)(x, {
          activity: t,
          user: l,
          onOpenSpotifyArtist: f
        }), (0, r.jsx)(C, {
          activity: t
        }), m.length > 0 && (0, r.jsx)(p.ZP, {
          className: y.usersSummary,
          guildId: o.guild_id,
          users: S,
          size: O,
          max: 7,
          renderUser: e => {
            var t;
            if (null == e || e === p.ag) return null;
            let n = P.get(e.id),
              i = null != (t = null == n ? true : n.nick) ? t : _.ZP.getName(e);
            return (0, r.jsx)(s.u, {
              asContainer: true,
              text: i,
              position: "bottom",
              children: (0, r.jsx)("img", {
                src: e.getAvatarURL(o.guild_id, O),
                alt: i,
                className: y.avatar
              }, e.id)
            }, e.id)
          }
        })]
      })]
    }), (0, r.jsx)(E, {
      activity: t
    })]
  }) : null
}