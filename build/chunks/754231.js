/** Chunk was on 30829 **/
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
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
  y = n(51144),
  v = n(308361);
let O = d.u.SIZE_24;

function j(e) {
  var t, n;
  let {
    activity: l,
    user: o,
    embeddedApp: a,
    onOpenSpotifyAlbum: u
  } = e, d = null == l ? void 0 : l.assets, p = null == l ? void 0 : l.application_id;
  if (null == l || null == d || null == d.large_image && null == d.small_image) return null != a ? function(e) {
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
        className: v.applicationLargeImage
      })
    })
  }(a) : null;
  let h = null !== (t = d.large_image) && void 0 !== t ? t : d.small_image,
    f = (0, c.Z)(l),
    b = f ? v.spotifyLargeImage : v.applicationLargeImage,
    y = null != h ? (0, r.jsx)("img", {
      alt: null !== (n = d.large_text) && void 0 !== n ? n : "",
      src: (0, g.getAssetImage)(p, h, [128, 128]),
      className: b
    }) : null;
  return f && null != u ? (y = (0, r.jsx)(s.P3F, {
    className: v.clickable,
    onClick: () => {
      u(l, o.id)
    },
    children: y
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
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["onClick"]);
      return null != y ? i.cloneElement(y, n) : null
    }
  })) : y
}

function _(e) {
  let {
    activity: t,
    embeddedApp: n,
    onOpenSpotifyTrack: i
  } = e, l = null == t ? void 0 : t.details, o = null == t ? void 0 : t.name, a = o;
  if (null != n) a = n.application.name;
  else {
    if (!(null != t && (0, c.Z)(t)) || null == t.sync_id || null == l || null == i) return null;
    o = l, a = (0, r.jsx)(s.P3F, {
      className: v.headerLink,
      onClick: () => {
        i(t)
      },
      children: l
    })
  }
  return (0, r.jsx)(p.Z, {
    title: o,
    className: v.header,
    children: a
  })
}

function C(e) {
  let {
    activity: t,
    user: n,
    onOpenSpotifyArtist: i
  } = e, l = null == t ? void 0 : t.details, a = null == t ? void 0 : t.state, s = l;
  return (null != t && (0, c.Z)(t) && null != a && (s = [(0, r.jsx)(h.Z, {
    artists: a,
    linkClassName: v.bodyLink,
    canOpen: null != t.sync_id,
    onOpenSpotifyArtist: e => {
      null == i || i(t, n.id, e)
    }
  }, a)]), null == s || "" === s) ? null : (0, r.jsx)("div", {
    className: o()(v.ellipsisRow, v.colorHeaderSecondary, v.bodyTextSize),
    children: s
  })
}

function x(e) {
  let {
    activity: t
  } = e, n = null == t ? void 0 : t.state;
  return null == n || "" === n || (0, c.Z)(t) ? null : (0, r.jsx)("div", {
    className: o()(v.ellipsisRow, v.colorHeaderSecondary, v.bodyTextSize, v.__invalid_activity),
    children: n
  })
}

function P(e) {
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
    end: l
  } = n;
  return (0, r.jsx)(u.Z, {
    start: i,
    end: l,
    className: v.timeBar,
    themed: !0,
    singleLine: !0
  })
}

function N(e) {
  let {
    activity: t,
    embeddedApp: n,
    user: l,
    channel: o,
    sortedVoiceStates: u,
    onOpenSpotifyTrack: p,
    onOpenSpotifyArtist: h,
    onOpenSpotifyAlbum: g
  } = e, m = [];
  null != n ? m = Array.from(n.embeddedActivity.userIds) : (0, c.Z)(t) && null != u && (m = u.map(e => e.user.id));
  let N = (0, a.Wu)([f.default], () => m.map(e => f.default.getUser(e)).filter(b.lm)),
    S = null != n || (0, c.Z)(t),
    Z = i.useMemo(() => {
      let e = new Map;
      return S && null != u && u.forEach(t => {
        let n = t.member;
        null != n && e.set(t.user.id, n)
      }), e
    }, [u, S]);
  return S ? (0, r.jsxs)("div", {
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
        children: [(0, r.jsx)(_, {
          activity: t,
          embeddedApp: n,
          onOpenSpotifyTrack: p
        }), (0, r.jsx)(C, {
          activity: t,
          user: l,
          onOpenSpotifyArtist: h
        }), (0, r.jsx)(x, {
          activity: t
        }), m.length > 0 && (0, r.jsx)(d.Z, {
          className: v.usersSummary,
          guildId: o.guild_id,
          users: N,
          size: O,
          max: 7,
          renderUser: e => {
            var t;
            if (null == e) return null;
            let n = Z.get(e.id),
              i = null !== (t = null == n ? void 0 : n.nick) && void 0 !== t ? t : y.ZP.getName(e);
            return (0, r.jsx)(s.DY3, {
              text: i,
              position: "bottom",
              children: (0, r.jsx)("img", {
                src: e.getAvatarURL(o.guild_id, O),
                alt: i,
                className: v.avatar
              }, e.id)
            }, e.id)
          }
        })]
      })]
    }), (0, r.jsx)(P, {
      activity: t
    })]
  }) : null
}