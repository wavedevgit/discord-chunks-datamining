/** Chunk was on 88936 **/
n.d(t, {
  Y: () => V,
  Z: () => Q
}), n(789020), n(47120);
var r, l, i = n(200651),
  o = n(192379),
  a = n(120356),
  s = n.n(a),
  c = n(512722),
  u = n.n(c),
  d = n(780384),
  f = n(481060),
  p = n(438139),
  m = n(410030),
  g = n(726542),
  y = n(600164),
  b = n(686546),
  O = n(111028),
  h = n(925329),
  v = n(810568),
  j = n(168524),
  S = n(565138),
  P = n(707409),
  N = n(424678),
  E = n(750154),
  I = n(81063),
  x = n(768581),
  A = n(630388),
  Z = n(153066),
  T = n(740265),
  w = n(122810),
  C = n(833664),
  _ = n(503438),
  D = n(802856),
  L = n(420660),
  k = n(39628),
  W = n(701488),
  M = n(981631),
  U = n(388032),
  R = n(825300);

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}
var V = ((l = {}).ACTIVITY_FEED = "ActivityFeed", l.STREAM_PREVIEW = "StreamPreview", l.VOICE_CHANNEL = "VoiceChannel", l);
let Y = {
    StreamPreview: [108, 60],
    VoiceChannel: [108, 60],
    ActivityFeed: [900, 500]
  },
  B = (0, p.Z)(class extends o.PureComponent {
    render() {
      return (0, i.jsx)("div", {
        className: R.timestamp,
        children: this.props.message
      })
    }
  });

function z(e) {
  let {
    activity: t
  } = e, n = (0, m.ZP)(), r = function(e) {
    let {
      activity: t
    } = e, n = null;
    return (0, _.Z)(t) && (n = M.ABu.SPOTIFY), null != t.platform && [M.M7m.PS4, M.M7m.PS5].includes(t.platform) && (n = M.ABu.PLAYSTATION), n
  }({
    activity: t
  });
  if (null == r) return null;
  let l = g.Z.get(r);
  return (0, i.jsx)("img", {
    alt: "",
    src: (0, d.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
    className: R.platformIcon
  })
}
class H extends(r = o.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != t && (null == e ? void 0 : e.type) !== M.IIU.PLAYING && (null == e ? void 0 : e.type) !== M.IIU.WATCHING && (null == e ? void 0 : e.type) !== M.IIU.LISTENING && (null == e ? void 0 : e.type) !== M.IIU.HANG_STATUS ? {
      type: M.IIU.PLAYING,
      name: U.NW.string(U.t.eXan7O)
    } : e
  }
  getTypeClass(e, t) {
    return (0, Z.l)(R, e, this.props.type, t)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, L.Z)(this.activity) && "ActivityFeed" === this.props.type
  }
  renderHeader(e) {
    let t;
    let {
      hideHeader: n,
      activityGuild: r,
      showChannelDetails: l,
      renderHeaderAccessory: o
    } = this.props, a = this.activity;
    if (n || null == a) return null;
    let {
      name: c
    } = a;
    switch (a.type) {
      case M.IIU.STREAMING:
        t = U.NW.formatToPlainString(U.t.Dzgz4u, {
          platform: [M.ABu.TWITCH, M.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(M.ABu.TWITCH).name
        });
        break;
      case M.IIU.LISTENING:
        t = U.NW.formatToPlainString(U.t["5sYPnp"], {
          name: c
        });
        break;
      case M.IIU.WATCHING:
        t = U.NW.formatToPlainString(U.t.Ge29Z2, {
          name: c
        });
        break;
      case M.IIU.PLAYING:
        t = (0, T.Z)(a);
        break;
      case M.IIU.COMPETING:
        t = U.NW.formatToPlainString(U.t.SQCo6O, {
          name: c
        })
    }
    if (null != r) {
      var u;
      t = (0, A.yE)(null !== (u = null == a ? void 0 : a.flags) && void 0 !== u ? u : 0, M.xjy.EMBEDDED) ? a.type === M.IIU.WATCHING ? U.NW.formatToPlainString(U.t["M/L8oq"], {
        guildName: r.name
      }) : U.NW.formatToPlainString(U.t["4chKQk"], {
        guildName: r.name
      }) : U.NW.formatToPlainString(U.t.sddlGB, {
        server: r.name
      })
    }
    return (0, i.jsxs)("div", {
      className: R.headerContainer,
      children: [(0, i.jsx)(f.X6q, {
        className: s()((0, Z.l)(R, "headerText", e ? "EmptyBody" : "Normal")),
        variant: l ? "text-xs/semibold" : "eyebrow",
        children: (0, i.jsx)(O.Z, {
          children: t
        })
      }), null == o ? void 0 : o()]
    })
  }
  renderXboxImage() {
    return (0, i.jsx)("div", {
      className: R.assets,
      children: (0, i.jsx)("img", {
        alt: "",
        src: g.Z.get(M.ABu.XBOX).icon.customPNG,
        className: s()(this.getTypeClass("assetsLargeImage", "Xbox"))
      })
    })
  }
  renderImage(e) {
    var t, n, r;
    let l, a;
    let {
      type: c
    } = this.props, {
      assets: u,
      application_id: d
    } = e;
    if (null == u || null == u.large_image && null == u.small_image) return null;
    (0, L.Z)(e) && (l = Y[c]);
    let p = (0, _.Z)(e),
      m = null != u.large_image ? (0, i.jsx)("img", {
        alt: null !== (t = u.large_text) && void 0 !== t ? t : "",
        src: (0, I.xF)(d, u.large_image, null != l ? l : [W.Si.LARGE, W.Si.LARGE]),
        className: s()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? M.ABu.TWITCH : ""), {
          [null !== (n = this.getTypeClass("assetsLargeMask")) && void 0 !== n ? n : ""]: null != u.small_image,
          [R.assetsLargeImageSpotify]: p
        })
      }) : null;
    if (p) m = (0, i.jsx)(f.eee, {
      onClick: this.handleOpenSpotifyAlbum,
      children: m
    });
    else if ((0, E.dS)(e)) {
      let t = (0, E.rq)(e);
      if (null == t) return null;
      m = (0, i.jsx)(b.ZP, {
        mask: b.ZP.Masks.SQUIRCLE,
        width: W.Si.SMALL,
        height: W.Si.SMALL,
        children: (0, i.jsx)("img", {
          src: null !== (r = x.ZP.getGuildIconURL({
            id: t.guildId,
            icon: u.small_image,
            size: W.Si.SMALL
          })) && void 0 !== r ? r : void 0,
          className: R.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (m = (0, i.jsxs)("div", {
      className: R.twitchImageContainer,
      children: [(0, i.jsxs)("div", {
        className: R.twitchImageOverlay,
        children: [(0, i.jsx)(f.H, {
          className: R.streamName,
          children: e.name
        }), (0, i.jsx)("div", {
          className: R.streamGame,
          children: U.NW.format(U.t.gmCZRU, {
            game: e.details
          })
        })]
      }), (0, i.jsx)(f.eee, {
        className: R.twitchBackgroundImage,
        href: e.url,
        children: m
      })]
    })), (0, E.dS)(e) || null == u.small_image || (a = (0, i.jsx)(f.ua7, {
      text: "" !== u.small_text ? u.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, i.jsx)("img", G({
          alt: null !== (t = u.small_text) && void 0 !== t ? t : "",
          src: (0, I.xF)(d, u.small_image, [W.Si.SMALL, W.Si.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == m ? "WithoutLargeImage" : void 0)
        }, e))
      }
    })), null == m) ? (0, i.jsx)("div", {
      className: R.assets,
      children: a
    }) : (0, i.jsxs)("div", {
      className: R.assets,
      children: [(0, i.jsx)(f.ua7, {
        text: null != u.large_text ? u.large_text : null,
        position: "top",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != m ? o.cloneElement(m, {
            onMouseEnter: t,
            onMouseLeave: n
          }) : null
        }
      }), a]
    })
  }
  renderGameImage(e) {
    let {
      user: t,
      type: n,
      application: r,
      activityGuild: l
    } = this.props;
    return null != e.assets || (0, w.Z)(e) || e.type !== M.IIU.PLAYING || "ActivityFeed" === n || t.bot ? null : null == r && null != l ? (0, i.jsx)("div", {
      className: s()(R.gameIcon, R.screenshareIcon)
    }) : (0, i.jsx)(h.Z, {
      className: R.gameIcon,
      game: r
    })
  }
  renderName(e) {
    let {
      user: t,
      application: n,
      hideName: r
    } = this.props;
    if (r) return null;
    let {
      details: l,
      type: o
    } = e;
    if (o === M.IIU.CUSTOM_STATUS) return null;
    let a = (0, C.Z)(e),
      c = e.name,
      u = c;
    return (a && null != n ? u = (0, i.jsx)("span", {
      className: R.activityName,
      children: u
    }) : !a && (c = l, u = l, (0, _.Z)(e) && null != e.sync_id && null != l ? u = (0, i.jsx)(f.eee, {
      className: R.bodyLink,
      onClick: this.handleOpenSpotifyTrack,
      children: l
    }) : (0, E.dS)(e) && (u = e.name)), null == u) ? null : (0, i.jsx)(f.Text, {
      title: c,
      variant: "text-sm/semibold",
      className: s()((0, Z.l)(R, "name", t.bot ? "wrap" : "normal")),
      children: u
    })
  }
  renderDetails(e) {
    let t;
    let {
      details: n,
      state: r
    } = e, l = n, o = n;
    if (e.type === M.IIU.CUSTOM_STATUS) l = r;
    else if (!(0, C.Z)(e)) {
      if (l = r, o = r, (0, _.Z)(e) && null != r) l = U.NW.format(U.t.uU9le3, {
        artists: o,
        artistsHook: (t, n) => (0, i.jsx)(N.Z, {
          artists: r,
          linkClassName: R.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n)
      });
      else if ((0, E.dS)(e)) {
        var a;
        l = null === (a = e.assets) || void 0 === a ? void 0 : a.small_text
      }
    }
    return null == l || "" === l ? null : ((0, L.Z)(e) && (l = U.NW.formatToPlainString(U.t.gmCZRU, {
      game: l
    })), null != t) ? (0, i.jsx)(f.P3F, {
      onClick: t,
      title: null != o ? o : void 0,
      className: R.clickableDetails,
      children: l
    }) : (0, i.jsx)("div", {
      title: null != o ? o : void 0,
      className: (0, L.Z)(e) || (0, _.Z)(e) ? R.detailsWrap : R.details,
      children: l
    })
  }
  renderChannelDetails(e) {
    let {
      activityGuild: t,
      showChannelDetails: n,
      channel: r
    } = this.props;
    return n && null != t ? null == r ? (0, i.jsx)("div", {
      className: (0, L.Z)(e) || (0, _.Z)(e) ? R.detailsWrap : R.details,
      children: U.NW.format(U.t["hq/Qzc"], {
        guildName: t.name
      })
    }) : (0, i.jsxs)("div", {
      className: s()((0, L.Z)(e) || (0, _.Z)(e) ? R.detailsWrap : R.details, R.guildDetails),
      children: [(0, i.jsx)(S.Z, {
        guild: t,
        size: S.Z.Sizes.SMOL,
        className: R.guildIcon
      }), (0, i.jsx)(f.Fbu, {
        size: "xxs",
        color: "currentColor"
      }), (0, i.jsxs)("div", {
        className: R.voiceChannelInfo,
        children: [(0, i.jsx)(f.gj8, {
          size: "xxs",
          color: "currentColor"
        }), (0, i.jsx)(f.Text, {
          variant: "text-xs/normal",
          children: null == r ? void 0 : r.name
        })]
      })]
    }) : null
  }
  renderTimePlayed(e) {
    let {
      activityGuild: t
    } = this.props;
    if (!(0, C.Z)(e) || (0, _.Z)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, w.Z)(e) ? (0, i.jsx)(B, {
      timestamps: n
    }) : (0, i.jsx)(P.ZP, {
      start: n.start,
      location: P.ZP.Locations.USER_ACTIVITY,
      className: R.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, _.Z)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: r
    } = t;
    return null == n || null == r ? null : (0, i.jsx)(k.Z, {
      start: n,
      end: r,
      className: this.getTypeClass("timeBar"),
      themed: "VoiceChannel" === this.props.type
    })
  }
  renderState(e, t) {
    var n, r;
    let l;
    let {
      state: o,
      party: a,
      assets: s
    } = e, c = o, u = o;
    return (!(0, C.Z)(e) && (c = null == s ? void 0 : s.large_text, u = null == s ? void 0 : s.large_text, (0, _.Z)(e) && null != c && (c = U.NW.format(U.t.vOLBEx, {
      album: u,
      albumHook: (t, n) => null != e.sync_id && null != u ? (0, i.jsx)(f.eee, {
        className: R.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: u
      }, n) : u
    }))), null != c && "" !== c && e.type !== M.IIU.CUSTOM_STATUS || (0, E.dS)(e)) ? ((null == a ? void 0 : a.size) == null && [W.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : "") ? l = U.NW.formatToPlainString(U.t["u//9Bw"], {
      count: "0",
      max: null !== (r = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== r ? r : 0
    }) : (0, E.dS)(e) && (null == a ? void 0 : a.size) != null ? l = U.NW.formatToPlainString(U.t["JC/3x8"], {
      numSpeakers: a.size[0],
      numListeners: a.size[1] - a.size[0]
    }) : (null == a ? void 0 : a.size) != null && a.size.length >= 2 && (l = 0 === a.size[1] ? U.NW.formatToPlainString(U.t.IM4J4e, {
      count: a.size[0]
    }) : U.NW.formatToPlainString(U.t["u//9Bw"], {
      count: a.size[0],
      max: a.size[1]
    })), (0, i.jsxs)("div", {
      className: R.state,
      children: [(0, i.jsx)("span", {
        title: u,
        children: c
      }), null != l ? (0, i.jsxs)("span", {
        children: [" ", l]
      }) : null]
    })) : null
  }
  render() {
    let e;
    let {
      type: t,
      renderActions: n,
      className: r,
      application: l,
      onClose: o,
      onOpenGameProfileModal: a
    } = this.props, c = this.activity;
    if (null == c || c.type === M.IIU.CUSTOM_STATUS) return null;
    let u = "ActivityFeed" === t,
      d = "StreamPreview" === t,
      p = !1;
    (0, D.Z)(c) ? (e = this.renderXboxImage(), p = !0) : null == (e = this.renderImage(c)) && (p = null != (e = this.renderGameImage(c)));
    let m = this.renderName(c),
      g = this.renderDetails(c),
      b = this.renderState(c, l),
      O = this.renderTimePlayed(c),
      h = this.renderChannelDetails(c),
      v = null != n ? n() : null,
      j = this.renderTimeBar(c),
      S = ![e, m, g, b, O, j, v].some(e => null != e);
    return (0, i.jsxs)("div", {
      className: s()(this.getTypeClass("activity"), r),
      children: [this.renderHeader(S), (0, i.jsx)("div", {
        className: s()(p ? R.bodyAlignCenter : R.bodyNormal),
        children: (0, i.jsxs)("div", {
          className: R.activityDetails,
          children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, i.jsxs)(y.Z.Child, {
            className: s()((0, Z.l)(R, "content", p ? "GameImage" : null != e ? "Images" : "NoImages", t)),
            children: [(0, i.jsxs)(f.P3F, {
              className: s()(null != a && R.openGameProfile),
              onClick: null != a ? e => {
                a(e), null == o || o()
              } : void 0,
              children: [m, g, b, O]
            }), h, d ? null : j, u ? v : null]
          })]
        })
      }), d ? v : null, (0, i.jsx)(z, {
        activity: c
      })]
    })
  }
  constructor(...e) {
    super(...e), F(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      u()(null != e, "Spotify activity was null"), null == t || t(e)
    }), F(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: r
      } = this.props;
      u()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e)
    }), F(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      u()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
F(H, "Types", V);
let J = e => {
  var t, n, r, l, o;
  let a = (0, j.Z)({
    location: "UserActivity",
    applicationId: null !== (r = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
    source: v.m1.UserProfile,
    sourceUserId: e.user.id,
    trackEntryPointImpression: !0
  });
  return (0, i.jsx)(H, (l = G({}, e), o = o = {
    onOpenGameProfileModal: a
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
  }), l))
};
J.Types = V;
let Q = J