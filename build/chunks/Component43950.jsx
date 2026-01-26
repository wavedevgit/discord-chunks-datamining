/** Chunk was on web.js **/
/** chunk id: 43950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let b = Chunk104171.DN.SIZE_24;

function O(e) {
  let t = m.Ay.getApplicationIconURL({
      id: e.application.id,
      icon: e.application.icon
    }),
    n = e.application.name;
  return (0, r.jsx)(l.m, {
    text: n,
    position: "top",
    asContainer: true,
    children: (0, r.jsx)("img", {
      alt: n,
      src: t,
      className: y.P3
    })
  })
}

function v(e) {
  var t, n;
  let {
    activity: i,
    user: a,
    embeddedApp: s,
    onOpenSpotifyAlbum: o
  } = e, d = null == i ? true : i.assets, f = null == i ? true : i.application_id;
  if (null == i || null == d || null == d.large_image && null == d.small_image)
    if (null != s) return O(s);
    else return null;
  let p = null != (t = d.large_image) ? t : d.small_image,
    _ = (0, u.A)(i),
    m = _ ? y.RC : y.P3,
    g = null != p ? (0, r.jsx)("img", {
      alt: null != (n = d.large_text) ? n : "",
      src: (0, h.uD)(f, p, [128, 128]),
      className: m
    }) : null;
  return _ && null != o ? (g = (0, r.jsx)(c.DUT, {
    className: y.vk,
    onClick: () => {
      o(i, a.id)
    },
    children: g
  }), (0, r.jsx)(l.m, {
    text: null != d.large_text ? d.large_text : null,
    position: "top",
    children: g
  })) : g
}

function A(e) {
  let {
    activity: t,
    embeddedApp: n,
    onOpenSpotifyTrack: i
  } = e, a = null == t ? true : t.details, s = null == t ? true : t.name, o = s;
  if (null != n) o = n.application.name;
  else {
    if (!(null != t && (0, u.A)(t)) || null == t.sync_id || null == a || null == i) return null;
    s = a, o = (0, r.jsx)(c.DUT, {
      className: y.wp,
      onClick: () => {
        i(t)
      },
      children: a
    })
  }
  return (0, r.jsx)(c.Heading, {
    variant: "heading-sm/semibold",
    color: "text-strong",
    className: y.wx,
    children: o
  })
}

function I(e) {
  let {
    activity: t,
    user: n,
    onOpenSpotifyArtist: i
  } = e, a = null == t ? true : t.details, o = null == t ? true : t.state, l = a;
  return (null != t && (0, u.A)(t) && null != o && (l = [(0, r.jsx)(p.A, {
    artists: o,
    linkClassName: y.hw,
    canOpen: null != t.sync_id,
    onOpenSpotifyArtist: e => {
      null == i || i(t, n.id, e)
    }
  }, o)]), null == l || "" === l) ? null : (0, r.jsx)("div", {
    className: s()(y.Mo, y.Tf, y.p9),
    children: l
  })
}

function S(e) {
  let {
    activity: t
  } = e, n = null == t ? true : t.state;
  return null == n || "" === n || (0, u.A)(t) ? null : (0, r.jsx)("div", {
    className: s()(y.Mo, y.Tf, y.p9, y.__invalid_activity),
    children: n
  })
}

function T(e) {
  let {
    activity: t
  } = e;
  if (null == t || !(0, u.A)(t)) return null;
  let {
    timestamps: n
  } = t;
  if ((null == n ? true : n.start) == null || (null == n ? true : n.end) == null) return null;
  let {
    start: i,
    end: a
  } = n;
  return (0, r.jsx)(d.A, {
    start: i,
    end: a,
    className: y.Jq,
    themed: true,
    singleLine: true
  })
}

function C(e) {
  let {
    activity: t,
    embeddedApp: n,
    user: a,
    channel: s,
    sortedVoiceStates: c,
    onOpenSpotifyTrack: d,
    onOpenSpotifyArtist: p,
    onOpenSpotifyAlbum: h
  } = e, m = [];
  null != n ? m = Array.from(n.embeddedActivity.userIds) : (0, u.A)(t) && null != c && (m = c.map(e => e.user.id));
  let O = (0, o.yK)([_.default], () => m.map(e => _.default.getUser(e)).filter(g.Vq)),
    C = null != n || (0, u.A)(t),
    N = i.useMemo(() => {
      let e = new Map;
      return C && null != c && c.forEach(t => {
        let n = t.member;
        null != n && e.set(t.user.id, n)
      }), e
    }, [c, C]);
  if (!C) return null;
  let w = e => {
    var t;
    if (null == e || e === f.mt) return null;
    let n = N.get(e.id),
      i = null != (t = null == n ? true : n.nick) ? t : E.Ay.getName(e);
    return (0, r.jsx)(l.m, {
      asContainer: true,
      text: i,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(s.guild_id, b),
        alt: i,
        className: y.my
      }, e.id)
    }, e.id)
  };
  return (0, r.jsxs)("div", {
    className: y.ec,
    children: [(0, r.jsxs)("div", {
      className: y.Wh,
      children: [(0, r.jsx)(v, {
        activity: t,
        user: a,
        embeddedApp: n,
        onOpenSpotifyAlbum: h
      }), (0, r.jsxs)("div", {
        className: y.X0,
        children: [(0, r.jsx)(A, {
          activity: t,
          embeddedApp: n,
          onOpenSpotifyTrack: d
        }), (0, r.jsx)(I, {
          activity: t,
          user: a,
          onOpenSpotifyArtist: p
        }), (0, r.jsx)(S, {
          activity: t
        }), m.length > 0 && (0, r.jsx)(f.Ay, {
          className: y.TN,
          guildId: s.guild_id,
          users: O,
          size: b,
          max: 7,
          renderUser: w
        })]
      })]
    }), (0, r.jsx)(T, {
      activity: t
    })]
  })
}