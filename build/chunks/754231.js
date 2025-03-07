/** Chunk was on 53494 **/
n.d(t, {
  Z: () => P
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(442837),
  s = n(481060),
  c = n(503438),
  u = n(39628),
  d = n(884338),
  p = n(528144),
  h = n(424678),
  f = n(594174),
  g = n(81063),
  m = n(768581),
  b = n(823379),
  v = n(51144),
  y = n(338720);
let _ = d.u.SIZE_24;

function O(e) {
  var t, n;
  let {
    activity: o,
    user: l,
    embeddedApp: a,
    onOpenSpotifyAlbum: u
  } = e, d = null == o ? void 0 : o.assets, p = null == o ? void 0 : o.application_id;
  if (null == o || null == d || null == d.large_image && null == d.small_image) return null != a ? function(e) {
    let t = m.ZP.getApplicationIconURL({
        id: e.application.id,
        icon: e.application.icon
      }),
      n = e.application.name;
    return (0, r.jsx)(s.ua7, {
      text: n,
      position: "top",
      children: () => (0, r.jsx)("img", {
        alt: n,
        src: t,
        className: y.applicationLargeImage
      })
    })
  }(a) : null;
  let h = null !== (t = d.large_image) && void 0 !== t ? t : d.small_image,
    f = (0, c.Z)(o),
    b = f ? y.spotifyLargeImage : y.applicationLargeImage,
    v = null != h ? (0, r.jsx)("img", {
      alt: null !== (n = d.large_text) && void 0 !== n ? n : "",
      src: (0, g.xF)(p, h, [128, 128]),
      className: b
    }) : null;
  return f && null != u ? (v = (0, r.jsx)(s.P3F, {
    className: y.clickable,
    onClick: () => {
      u(o, l.id)
    },
    children: v
  }), (0, r.jsx)(s.ua7, {
    text: null != d.large_text ? d.large_text : null,
    position: "top",
    children: e => {
      let {
        onClick: t
      } = e, n = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["onClick"]);
      return null != v ? i.cloneElement(v, n) : null
    }
  })) : v
}

function j(e) {
  let {
    activity: t,
    embeddedApp: n,
    onOpenSpotifyTrack: i
  } = e, o = null == t ? void 0 : t.details, l = null == t ? void 0 : t.name, a = l;
  if (null != n) a = n.application.name;
  else {
    if (!(null != t && (0, c.Z)(t)) || null == t.sync_id || null == o || null == i) return null;
    l = o, a = (0, r.jsx)(s.P3F, {
      className: y.headerLink,
      onClick: () => {
        i(t)
      },
      children: o
    })
  }
  return (0, r.jsx)(p.Z, {
    title: l,
    className: y.header,
    children: a
  })
}

function C(e) {
  let {
    activity: t,
    user: n,
    onOpenSpotifyArtist: i
  } = e, o = null == t ? void 0 : t.details, a = null == t ? void 0 : t.state, s = o;
  return (null != t && (0, c.Z)(t) && null != a && (s = [(0, r.jsx)(h.Z, {
    artists: a,
    linkClassName: y.bodyLink,
    canOpen: null != t.sync_id,
    onOpenSpotifyArtist: e => {
      null == i || i(t, n.id, e)
    }
  }, a)]), null == s || "" === s) ? null : (0, r.jsx)("div", {
    className: l()(y.ellipsisRow, y.colorHeaderSecondary, y.bodyTextSize),
    children: s
  })
}

function x(e) {
  let {
    activity: t
  } = e, n = null == t ? void 0 : t.state;
  return null == n || "" === n || (0, c.Z)(t) ? null : (0, r.jsx)("div", {
    className: l()(y.ellipsisRow, y.colorHeaderSecondary, y.bodyTextSize, y.__invalid_activity),
    children: n
  })
}

function S(e) {
  let {
    activity: t
  } = e;
  if (null == t || !(0, c.Z)(t)) return null;
  let {
    timestamps: n
  } = t;
  if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
  let {
    start: i,
    end: o
  } = n;
  return (0, r.jsx)(u.Z, {
    start: i,
    end: o,
    className: y.timeBar,
    themed: !0,
    singleLine: !0
  })
}

function P(e) {
  let {
    activity: t,
    embeddedApp: n,
    user: o,
    channel: l,
    sortedVoiceStates: u,
    onOpenSpotifyTrack: p,
    onOpenSpotifyArtist: h,
    onOpenSpotifyAlbum: g
  } = e, m = [];
  null != n ? m = Array.from(n.embeddedActivity.userIds) : (0, c.Z)(t) && null != u && (m = u.map(e => e.user.id));
  let P = (0, a.Wu)([f.default], () => m.map(e => f.default.getUser(e)).filter(b.lm)),
    I = null != n || (0, c.Z)(t),
    N = i.useMemo(() => {
      let e = new Map;
      return I && null != u && u.forEach(t => {
        let n = t.member;
        null != n && e.set(t.user.id, n)
      }), e
    }, [u, I]);
  return I ? (0, r.jsxs)("div", {
    className: y.flexColumn,
    children: [(0, r.jsxs)("div", {
      className: y.flexRow,
      children: [(0, r.jsx)(O, {
        activity: t,
        user: o,
        embeddedApp: n,
        onOpenSpotifyAlbum: g
      }), (0, r.jsxs)("div", {
        className: y.detailsAndAvatarsContainer,
        children: [(0, r.jsx)(j, {
          activity: t,
          embeddedApp: n,
          onOpenSpotifyTrack: p
        }), (0, r.jsx)(C, {
          activity: t,
          user: o,
          onOpenSpotifyArtist: h
        }), (0, r.jsx)(x, {
          activity: t
        }), m.length > 0 && (0, r.jsx)(d.Z, {
          className: y.usersSummary,
          guildId: l.guild_id,
          users: P,
          size: _,
          max: 7,
          renderUser: e => {
            var t;
            if (null == e) return null;
            let n = N.get(e.id),
              i = null !== (t = null == n ? void 0 : n.nick) && void 0 !== t ? t : v.ZP.getName(e);
            return (0, r.jsx)(s.DY3, {
              text: i,
              position: "bottom",
              children: (0, r.jsx)("img", {
                src: e.getAvatarURL(l.guild_id, _),
                alt: i,
                className: y.avatar
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