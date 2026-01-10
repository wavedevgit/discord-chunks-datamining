/** Chunk was on 81985 **/
/** chunk id: 754231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk273676 = require("./273676.js");
let O = Chunk884338.u8.SIZE_24;

function j(e) {
  var t, n;
  let {
    activity: i,
    user: l,
    embeddedApp: a,
    onOpenSpotifyAlbum: o
  } = e, d = null == i ? true : i.assets, p = null == i ? true : i.application_id;
  if (null == i || null == d || null == d.large_image && null == d.small_image)
    if (null == a) return null;
    else {
      let e = m.ZP.getApplicationIconURL({
          id: a.application.id,
          icon: a.application.icon
        }),
        t = a.application.name;
      return (0, r.jsx)(s.u, {
        text: t,
        position: "top",
        asContainer: true,
        children: (0, r.jsx)("img", {
          alt: t,
          src: e,
          className: v.applicationLargeImage
        })
      })
    } let f = null != (t = d.large_image) ? t : d.small_image,
    h = (0, u.Z)(i),
    b = h ? v.spotifyLargeImage : v.applicationLargeImage,
    y = null != f ? (0, r.jsx)("img", {
      alt: null != (n = d.large_text) ? n : "",
      src: (0, g.xF)(p, f, [128, 128]),
      className: b
    }) : null;
  return h && null != o ? (y = (0, r.jsx)(c.P3F, {
    className: v.clickable,
    onClick: () => {
      o(i, l.id)
    },
    children: y
  }), (0, r.jsx)(s.u, {
    text: null != d.large_text ? d.large_text : null,
    position: "top",
    children: y
  })) : y
}

function x(e) {
  let {
    activity: t,
    embeddedApp: n,
    onOpenSpotifyTrack: i
  } = e, l = null == t ? true : t.details, a = null == t ? true : t.name, o = a;
  if (null != n) o = n.application.name;
  else {
    if (!(null != t && (0, u.Z)(t)) || null == t.sync_id || null == l || null == i) return null;
    a = l, o = (0, r.jsx)(c.P3F, {
      className: v.headerLink,
      onClick: () => {
        i(t)
      },
      children: l
    })
  }
  return (0, r.jsx)(c.Heading, {
    variant: "heading-sm/semibold",
    color: "text-strong",
    className: v.header,
    children: o
  })
}

function C(e) {
  let {
    activity: t,
    user: n,
    onOpenSpotifyArtist: i
  } = e, l = null == t ? true : t.details, o = null == t ? true : t.state, s = l;
  return (null != t && (0, u.Z)(t) && null != o && (s = [(0, r.jsx)(f.Z, {
    artists: o,
    linkClassName: v.bodyLink,
    canOpen: null != t.sync_id,
    onOpenSpotifyArtist: e => {
      null == i || i(t, n.id, e)
    }
  }, o)]), null == s || "" === s) ? null : (0, r.jsx)("div", {
    className: a()(v.ellipsisRow, v.colorHeaderSecondary, v.bodyTextSize),
    children: s
  })
}

function E(e) {
  let {
    activity: t
  } = e, n = null == t ? true : t.state;
  return null == n || "" === n || (0, u.Z)(t) ? null : (0, r.jsx)("div", {
    className: a()(v.ellipsisRow, v.colorHeaderSecondary, v.bodyTextSize, v.__invalid_activity),
    children: n
  })
}

function S(e) {
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
    className: v.timeBar,
    themed: true,
    singleLine: true
  })
}

function _(e) {
  let {
    activity: t,
    embeddedApp: n,
    user: l,
    channel: a,
    sortedVoiceStates: c,
    onOpenSpotifyTrack: d,
    onOpenSpotifyArtist: f,
    onOpenSpotifyAlbum: g
  } = e, m = [];
  null != n ? m = Array.from(n.embeddedActivity.userIds) : (0, u.Z)(t) && null != c && (m = c.map(e => e.user.id));
  let _ = (0, o.Wu)([h.default], () => m.map(e => h.default.getUser(e)).filter(b.lm)),
    I = null != n || (0, u.Z)(t),
    P = i.useMemo(() => {
      let e = new Map;
      return I && null != c && c.forEach(t => {
        let n = t.member;
        null != n && e.set(t.user.id, n)
      }), e
    }, [c, I]);
  return I ? (0, r.jsxs)("div", {
    className: v.flexColumn,
    children: [(0, r.jsxs)("div", {
      className: v.flexRow,
      children: [(0, r.jsx)(j, {
        activity: t,
        user: l,
        embeddedApp: n,
        onOpenSpotifyAlbum: g
      }), (0, r.jsxs)("div", {
        className: v.detailsAndAvatarsContainer,
        children: [(0, r.jsx)(x, {
          activity: t,
          embeddedApp: n,
          onOpenSpotifyTrack: d
        }), (0, r.jsx)(C, {
          activity: t,
          user: l,
          onOpenSpotifyArtist: f
        }), (0, r.jsx)(E, {
          activity: t
        }), m.length > 0 && (0, r.jsx)(p.ZP, {
          className: v.usersSummary,
          guildId: a.guild_id,
          users: _,
          size: O,
          max: 7,
          renderUser: e => {
            var t;
            if (null == e || e === p.ag) return null;
            let n = P.get(e.id),
              i = null != (t = null == n ? true : n.nick) ? t : y.ZP.getName(e);
            return (0, r.jsx)(s.u, {
              asContainer: true,
              text: i,
              position: "bottom",
              children: (0, r.jsx)("img", {
                src: e.getAvatarURL(a.guild_id, O),
                alt: i,
                className: v.avatar
              }, e.id)
            }, e.id)
          }
        })]
      })]
    }), (0, r.jsx)(S, {
      activity: t
    })]
  }) : null
}