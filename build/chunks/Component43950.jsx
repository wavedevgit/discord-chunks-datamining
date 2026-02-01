/** Chunk was on 88474 **/
/** chunk id: 43950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk90644 = require("./90644.js"),
  Chunk432166 = require("./432166.jsx"),
  Chunk104171 = require("./104171.jsx"),
  Chunk763758 = require("./763758.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk139675 = require("./139675.js"),
  Chunk486020 = require("./486020.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk6676 = require("./6676.js");
let A = Chunk104171.DN.SIZE_24;

function v(e) {
  var t, n;
  let {
    activity: l,
    user: i,
    embeddedApp: a,
    onOpenSpotifyAlbum: s
  } = e, d = null == l ? true : l.assets, p = null == l ? true : l.application_id;
  if (null == l || null == d || null == d.large_image && null == d.small_image)
    if (null == a) return null;
    else {
      let e, t;
      return e = y.Ay.getApplicationIconURL({
        id: a.application.id,
        icon: a.application.icon
      }), t = a.application.name, (0, r.jsx)(o.m, {
        text: t,
        position: "top",
        asContainer: true,
        children: (0, r.jsx)("img", {
          alt: t,
          src: e,
          className: h.P3
        })
      })
    } let f = null != (t = d.large_image) ? t : d.small_image,
    m = (0, u.A)(l),
    b = m ? h.RC : h.P3,
    _ = null != f ? (0, r.jsx)("img", {
      alt: null != (n = d.large_text) ? n : "",
      src: (0, g.uD)(p, f, [128, 128]),
      className: b
    }) : null;
  return m && null != s ? (_ = (0, r.jsx)(c.DUT, {
    className: h.vk,
    onClick: () => {
      s(l, i.id)
    },
    children: _
  }), (0, r.jsx)(o.m, {
    text: null != d.large_text ? d.large_text : null,
    position: "top",
    children: _
  })) : _
}

function O(e) {
  let {
    activity: t,
    embeddedApp: n,
    onOpenSpotifyTrack: l
  } = e, i = null == t ? true : t.details, a = null == t ? true : t.name, s = a;
  if (null != n) s = n.application.name;
  else {
    if (!(null != t && (0, u.A)(t)) || null == t.sync_id || null == i || null == l) return null;
    a = i, s = (0, r.jsx)(c.DUT, {
      className: h.wp,
      onClick: () => {
        l(t)
      },
      children: i
    })
  }
  return (0, r.jsx)(c.Heading, {
    variant: "heading-sm/semibold",
    color: "text-strong",
    className: h.wx,
    children: s
  })
}

function S(e) {
  let {
    activity: t,
    user: n,
    onOpenSpotifyArtist: l
  } = e, i = null == t ? true : t.details, s = null == t ? true : t.state, o = i;
  return (null != t && (0, u.A)(t) && null != s && (o = [(0, r.jsx)(f.A, {
    artists: s,
    linkClassName: h.hw,
    canOpen: null != t.sync_id,
    onOpenSpotifyArtist: e => {
      null == l || l(t, n.id, e)
    }
  }, s)]), null == o || "" === o) ? null : (0, r.jsx)("div", {
    className: a()(h.Mo, h.Tf, h.p9),
    children: o
  })
}

function j(e) {
  let {
    activity: t
  } = e, n = null == t ? true : t.state;
  return null == n || "" === n || (0, u.A)(t) ? null : (0, r.jsx)("div", {
    className: a()(h.Mo, h.Tf, h.p9, h.__invalid_activity),
    children: n
  })
}

function x(e) {
  let {
    activity: t
  } = e;
  if (null == t || !(0, u.A)(t)) return null;
  let {
    timestamps: n
  } = t;
  if ((null == n ? true : n.start) == null || (null == n ? true : n.end) == null) return null;
  let {
    start: l,
    end: i
  } = n;
  return (0, r.jsx)(d.A, {
    start: l,
    end: i,
    className: h.Jq,
    themed: true,
    singleLine: true
  })
}

function I(e) {
  let {
    activity: t,
    embeddedApp: n,
    user: i,
    channel: a,
    sortedVoiceStates: c,
    onOpenSpotifyTrack: d,
    onOpenSpotifyArtist: f,
    onOpenSpotifyAlbum: g
  } = e, y = [];
  null != n ? y = Array.from(n.embeddedActivity.userIds) : (0, u.A)(t) && null != c && (y = c.map(e => e.user.id));
  let I = (0, s.yK)([m.default], () => y.map(e => m.default.getUser(e)).filter(b.Vq)),
    E = null != n || (0, u.A)(t),
    C = l.useMemo(() => {
      let e = new Map;
      return E && null != c && c.forEach(t => {
        let n = t.member;
        null != n && e.set(t.user.id, n)
      }), e
    }, [c, E]);
  return E ? (0, r.jsxs)("div", {
    className: h.ec,
    children: [(0, r.jsxs)("div", {
      className: h.Wh,
      children: [(0, r.jsx)(v, {
        activity: t,
        user: i,
        embeddedApp: n,
        onOpenSpotifyAlbum: g
      }), (0, r.jsxs)("div", {
        className: h.X0,
        children: [(0, r.jsx)(O, {
          activity: t,
          embeddedApp: n,
          onOpenSpotifyTrack: d
        }), (0, r.jsx)(S, {
          activity: t,
          user: i,
          onOpenSpotifyArtist: f
        }), (0, r.jsx)(j, {
          activity: t
        }), y.length > 0 && (0, r.jsx)(p.Ay, {
          className: h.TN,
          guildId: a.guild_id,
          users: I,
          size: A,
          max: 7,
          renderUser: e => {
            var t;
            if (null == e || e === p.mt) return null;
            let n = C.get(e.id),
              l = null != (t = null == n ? true : n.nick) ? t : _.Ay.getName(e);
            return (0, r.jsx)(o.m, {
              asContainer: true,
              text: l,
              position: "bottom",
              children: (0, r.jsx)("img", {
                src: e.getAvatarURL(a.guild_id, A),
                alt: l,
                className: h.my
              }, e.id)
            }, e.id)
          }
        })]
      })]
    }), (0, r.jsx)(x, {
      activity: t
    })]
  }) : null
}