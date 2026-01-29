/** Chunk was on 6500 **/
/** chunk id: 43950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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
let h = Chunk104171.DN.SIZE_24;

function v(e) {
  var t, n;
  let {
    activity: i,
    user: l,
    embeddedApp: a,
    onOpenSpotifyAlbum: s
  } = e, d = null == i ? true : i.assets, p = null == i ? true : i.application_id;
  if (null == i || null == d || null == d.large_image && null == d.small_image)
    if (null == a) return null;
    else {
      let e, t;
      return e = _.Ay.getApplicationIconURL({
        id: a.application.id,
        icon: a.application.icon
      }), t = a.application.name, (0, r.jsx)(o.m, {
        text: t,
        position: "top",
        asContainer: true,
        children: (0, r.jsx)("img", {
          alt: t,
          src: e,
          className: b.P3
        })
      })
    } let f = null != (t = d.large_image) ? t : d.small_image,
    m = (0, u.A)(i),
    y = m ? b.RC : b.P3,
    A = null != f ? (0, r.jsx)("img", {
      alt: null != (n = d.large_text) ? n : "",
      src: (0, g.uD)(p, f, [128, 128]),
      className: y
    }) : null;
  return m && null != s ? (A = (0, r.jsx)(c.DUT, {
    className: b.vk,
    onClick: () => {
      s(i, l.id)
    },
    children: A
  }), (0, r.jsx)(o.m, {
    text: null != d.large_text ? d.large_text : null,
    position: "top",
    children: A
  })) : A
}

function O(e) {
  let {
    activity: t,
    embeddedApp: n,
    onOpenSpotifyTrack: i
  } = e, l = null == t ? true : t.details, a = null == t ? true : t.name, s = a;
  if (null != n) s = n.application.name;
  else {
    if (!(null != t && (0, u.A)(t)) || null == t.sync_id || null == l || null == i) return null;
    a = l, s = (0, r.jsx)(c.DUT, {
      className: b.wp,
      onClick: () => {
        i(t)
      },
      children: l
    })
  }
  return (0, r.jsx)(c.Heading, {
    variant: "heading-sm/semibold",
    color: "text-strong",
    className: b.wx,
    children: s
  })
}

function j(e) {
  let {
    activity: t,
    user: n,
    onOpenSpotifyArtist: i
  } = e, l = null == t ? true : t.details, s = null == t ? true : t.state, o = l;
  return (null != t && (0, u.A)(t) && null != s && (o = [(0, r.jsx)(f.A, {
    artists: s,
    linkClassName: b.hw,
    canOpen: null != t.sync_id,
    onOpenSpotifyArtist: e => {
      null == i || i(t, n.id, e)
    }
  }, s)]), null == o || "" === o) ? null : (0, r.jsx)("div", {
    className: a()(b.Mo, b.Tf, b.p9),
    children: o
  })
}

function S(e) {
  let {
    activity: t
  } = e, n = null == t ? true : t.state;
  return null == n || "" === n || (0, u.A)(t) ? null : (0, r.jsx)("div", {
    className: a()(b.Mo, b.Tf, b.p9, b.__invalid_activity),
    children: n
  })
}

function I(e) {
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
    end: l
  } = n;
  return (0, r.jsx)(d.A, {
    start: i,
    end: l,
    className: b.Jq,
    themed: true,
    singleLine: true
  })
}

function x(e) {
  let {
    activity: t,
    embeddedApp: n,
    user: l,
    channel: a,
    sortedVoiceStates: c,
    onOpenSpotifyTrack: d,
    onOpenSpotifyArtist: f,
    onOpenSpotifyAlbum: g
  } = e, _ = [];
  null != n ? _ = Array.from(n.embeddedActivity.userIds) : (0, u.A)(t) && null != c && (_ = c.map(e => e.user.id));
  let x = (0, s.yK)([m.default], () => _.map(e => m.default.getUser(e)).filter(y.Vq)),
    E = null != n || (0, u.A)(t),
    P = i.useMemo(() => {
      let e = new Map;
      return E && null != c && c.forEach(t => {
        let n = t.member;
        null != n && e.set(t.user.id, n)
      }), e
    }, [c, E]);
  return E ? (0, r.jsxs)("div", {
    className: b.ec,
    children: [(0, r.jsxs)("div", {
      className: b.Wh,
      children: [(0, r.jsx)(v, {
        activity: t,
        user: l,
        embeddedApp: n,
        onOpenSpotifyAlbum: g
      }), (0, r.jsxs)("div", {
        className: b.X0,
        children: [(0, r.jsx)(O, {
          activity: t,
          embeddedApp: n,
          onOpenSpotifyTrack: d
        }), (0, r.jsx)(j, {
          activity: t,
          user: l,
          onOpenSpotifyArtist: f
        }), (0, r.jsx)(S, {
          activity: t
        }), _.length > 0 && (0, r.jsx)(p.Ay, {
          className: b.TN,
          guildId: a.guild_id,
          users: x,
          size: h,
          max: 7,
          renderUser: e => {
            var t;
            if (null == e || e === p.mt) return null;
            let n = P.get(e.id),
              i = null != (t = null == n ? true : n.nick) ? t : A.Ay.getName(e);
            return (0, r.jsx)(o.m, {
              asContainer: true,
              text: i,
              position: "bottom",
              children: (0, r.jsx)("img", {
                src: e.getAvatarURL(a.guild_id, h),
                alt: i,
                className: b.my
              }, e.id)
            }, e.id)
          }
        })]
      })]
    }), (0, r.jsx)(I, {
      activity: t
    })]
  }) : null
}