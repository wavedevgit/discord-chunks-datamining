/** Chunk was on 70045 **/
n.d(t, {
  Y: () => F,
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
  I = n(750154),
  E = n(768581),
  x = n(630388),
  A = n(153066),
  Z = n(740265),
  T = n(122810),
  w = n(833664),
  C = n(503438),
  _ = n(802856),
  D = n(420660),
  L = n(39628),
  k = n(701488),
  W = n(981631),
  M = n(388032),
  U = n(825300);

function R(e, t, n) {
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
      R(e, t, n[t])
    })
  }
  return e
}
var F = ((l = {}).ACTIVITY_FEED = "ActivityFeed", l.STREAM_PREVIEW = "StreamPreview", l.VOICE_CHANNEL = "VoiceChannel", l);
let V = {
    StreamPreview: [108, 60],
    VoiceChannel: [108, 60],
    ActivityFeed: [900, 500]
  },
  {
    getAssetImage: Y
  } = n(81063),
  B = (0, p.Z)(class extends o.PureComponent {
    render() {
      return (0, i.jsx)("div", {
        className: U.timestamp,
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
    return (0, C.Z)(t) && (n = W.ABu.SPOTIFY), null != t.platform && [W.M7m.PS4, W.M7m.PS5].includes(t.platform) && (n = W.ABu.PLAYSTATION), n
  }({
    activity: t
  });
  if (null == r) return null;
  let l = g.Z.get(r);
  return (0, i.jsx)("img", {
    alt: "",
    src: (0, d.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
    className: U.platformIcon
  })
}
class H extends(r = o.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != t && (null == e ? void 0 : e.type) !== W.IIU.PLAYING && (null == e ? void 0 : e.type) !== W.IIU.WATCHING && (null == e ? void 0 : e.type) !== W.IIU.LISTENING && (null == e ? void 0 : e.type) !== W.IIU.HANG_STATUS ? {
      type: W.IIU.PLAYING,
      name: M.NW.string(M.t.eXan7O)
    } : e
  }
  getTypeClass(e, t) {
    return (0, A.l)(U, e, this.props.type, t)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, D.Z)(this.activity) && "ActivityFeed" === this.props.type
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
      case W.IIU.STREAMING:
        t = M.NW.formatToPlainString(M.t.Dzgz4u, {
          platform: [W.ABu.TWITCH, W.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(W.ABu.TWITCH).name
        });
        break;
      case W.IIU.LISTENING:
        t = M.NW.formatToPlainString(M.t["5sYPnp"], {
          name: c
        });
        break;
      case W.IIU.WATCHING:
        t = M.NW.formatToPlainString(M.t.Ge29Z2, {
          name: c
        });
        break;
      case W.IIU.PLAYING:
        t = (0, Z.Z)(a);
        break;
      case W.IIU.COMPETING:
        t = M.NW.formatToPlainString(M.t.SQCo6O, {
          name: c
        })
    }
    if (null != r) {
      var u;
      t = (0, x.yE)(null !== (u = null == a ? void 0 : a.flags) && void 0 !== u ? u : 0, W.xjy.EMBEDDED) ? a.type === W.IIU.WATCHING ? M.NW.formatToPlainString(M.t["M/L8oq"], {
        guildName: r.name
      }) : M.NW.formatToPlainString(M.t["4chKQk"], {
        guildName: r.name
      }) : M.NW.formatToPlainString(M.t.sddlGB, {
        server: r.name
      })
    }
    return (0, i.jsxs)("div", {
      className: U.headerContainer,
      children: [(0, i.jsx)(f.X6q, {
        className: s()((0, A.l)(U, "headerText", e ? "EmptyBody" : "Normal")),
        variant: l ? "text-xs/semibold" : "eyebrow",
        children: (0, i.jsx)(O.Z, {
          children: t
        })
      }), null == o ? void 0 : o()]
    })
  }
  renderXboxImage() {
    return (0, i.jsx)("div", {
      className: U.assets,
      children: (0, i.jsx)("img", {
        alt: "",
        src: g.Z.get(W.ABu.XBOX).icon.customPNG,
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
    (0, D.Z)(e) && (l = V[c]);
    let p = (0, C.Z)(e),
      m = null != u.large_image ? (0, i.jsx)("img", {
        alt: null !== (t = u.large_text) && void 0 !== t ? t : "",
        src: Y(d, u.large_image, null != l ? l : [k.Si.LARGE, k.Si.LARGE]),
        className: s()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? W.ABu.TWITCH : ""), {
          [null !== (n = this.getTypeClass("assetsLargeMask")) && void 0 !== n ? n : ""]: null != u.small_image,
          [U.assetsLargeImageSpotify]: p
        })
      }) : null;
    if (p) m = (0, i.jsx)(f.eee, {
      onClick: this.handleOpenSpotifyAlbum,
      children: m
    });
    else if ((0, I.dS)(e)) {
      let t = (0, I.rq)(e);
      if (null == t) return null;
      m = (0, i.jsx)(b.ZP, {
        mask: b.ZP.Masks.SQUIRCLE,
        width: k.Si.SMALL,
        height: k.Si.SMALL,
        children: (0, i.jsx)("img", {
          src: null !== (r = E.ZP.getGuildIconURL({
            id: t.guildId,
            icon: u.small_image,
            size: k.Si.SMALL
          })) && void 0 !== r ? r : void 0,
          className: U.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (m = (0, i.jsxs)("div", {
      className: U.twitchImageContainer,
      children: [(0, i.jsxs)("div", {
        className: U.twitchImageOverlay,
        children: [(0, i.jsx)(f.H, {
          className: U.streamName,
          children: e.name
        }), (0, i.jsx)("div", {
          className: U.streamGame,
          children: M.NW.format(M.t.gmCZRU, {
            game: e.details
          })
        })]
      }), (0, i.jsx)(f.eee, {
        className: U.twitchBackgroundImage,
        href: e.url,
        children: m
      })]
    })), (0, I.dS)(e) || null == u.small_image || (a = (0, i.jsx)(f.ua7, {
      text: "" !== u.small_text ? u.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, i.jsx)("img", G({
          alt: null !== (t = u.small_text) && void 0 !== t ? t : "",
          src: Y(d, u.small_image, [k.Si.SMALL, k.Si.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == m ? "WithoutLargeImage" : void 0)
        }, e))
      }
    })), null == m) ? (0, i.jsx)("div", {
      className: U.assets,
      children: a
    }) : (0, i.jsxs)("div", {
      className: U.assets,
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
    return null != e.assets || (0, T.Z)(e) || e.type !== W.IIU.PLAYING || "ActivityFeed" === n || t.bot ? null : null == r && null != l ? (0, i.jsx)("div", {
      className: s()(U.gameIcon, U.screenshareIcon)
    }) : (0, i.jsx)(h.Z, {
      className: U.gameIcon,
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
    if (o === W.IIU.CUSTOM_STATUS) return null;
    let a = (0, w.Z)(e),
      c = e.name,
      u = c;
    return (a && null != n ? u = (0, i.jsx)("span", {
      className: U.activityName,
      children: u
    }) : !a && (c = l, u = l, (0, C.Z)(e) && null != e.sync_id && null != l ? u = (0, i.jsx)(f.eee, {
      className: U.bodyLink,
      onClick: this.handleOpenSpotifyTrack,
      children: l
    }) : (0, I.dS)(e) && (u = e.name)), null == u) ? null : (0, i.jsx)(f.Text, {
      title: c,
      variant: "text-sm/semibold",
      className: s()((0, A.l)(U, "name", t.bot ? "wrap" : "normal")),
      children: u
    })
  }
  renderDetails(e) {
    let t;
    let {
      details: n,
      state: r
    } = e, l = n, o = n;
    if (e.type === W.IIU.CUSTOM_STATUS) l = r;
    else if (!(0, w.Z)(e)) {
      if (l = r, o = r, (0, C.Z)(e) && null != r) l = M.NW.format(M.t.uU9le3, {
        artists: o,
        artistsHook: (t, n) => (0, i.jsx)(N.Z, {
          artists: r,
          linkClassName: U.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n)
      });
      else if ((0, I.dS)(e)) {
        var a;
        l = null === (a = e.assets) || void 0 === a ? void 0 : a.small_text
      }
    }
    return null == l || "" === l ? null : ((0, D.Z)(e) && (l = M.NW.formatToPlainString(M.t.gmCZRU, {
      game: l
    })), null != t) ? (0, i.jsx)(f.P3F, {
      onClick: t,
      title: null != o ? o : void 0,
      className: U.clickableDetails,
      children: l
    }) : (0, i.jsx)("div", {
      title: null != o ? o : void 0,
      className: (0, D.Z)(e) || (0, C.Z)(e) ? U.detailsWrap : U.details,
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
      className: (0, D.Z)(e) || (0, C.Z)(e) ? U.detailsWrap : U.details,
      children: M.NW.format(M.t["hq/Qzc"], {
        guildName: t.name
      })
    }) : (0, i.jsxs)("div", {
      className: s()((0, D.Z)(e) || (0, C.Z)(e) ? U.detailsWrap : U.details, U.guildDetails),
      children: [(0, i.jsx)(S.Z, {
        guild: t,
        size: S.Z.Sizes.SMOL,
        className: U.guildIcon
      }), (0, i.jsx)(f.Fbu, {
        size: "xxs",
        color: "currentColor"
      }), (0, i.jsxs)("div", {
        className: U.voiceChannelInfo,
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
    if (!(0, w.Z)(e) || (0, C.Z)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, T.Z)(e) ? (0, i.jsx)(B, {
      timestamps: n
    }) : (0, i.jsx)(P.ZP, {
      start: n.start,
      location: P.ZP.Locations.USER_ACTIVITY,
      className: U.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, C.Z)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: r
    } = t;
    return null == n || null == r ? null : (0, i.jsx)(L.Z, {
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
    return (!(0, w.Z)(e) && (c = null == s ? void 0 : s.large_text, u = null == s ? void 0 : s.large_text, (0, C.Z)(e) && null != c && (c = M.NW.format(M.t.vOLBEx, {
      album: u,
      albumHook: (t, n) => null != e.sync_id && null != u ? (0, i.jsx)(f.eee, {
        className: U.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: u
      }, n) : u
    }))), null != c && "" !== c && e.type !== W.IIU.CUSTOM_STATUS || (0, I.dS)(e)) ? ((null == a ? void 0 : a.size) == null && [k.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : "") ? l = M.NW.formatToPlainString(M.t["u//9Bw"], {
      count: "0",
      max: null !== (r = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== r ? r : 0
    }) : (0, I.dS)(e) && (null == a ? void 0 : a.size) != null ? l = M.NW.formatToPlainString(M.t["JC/3x8"], {
      numSpeakers: a.size[0],
      numListeners: a.size[1] - a.size[0]
    }) : (null == a ? void 0 : a.size) != null && a.size.length >= 2 && (l = 0 === a.size[1] ? M.NW.formatToPlainString(M.t.IM4J4e, {
      count: a.size[0]
    }) : M.NW.formatToPlainString(M.t["u//9Bw"], {
      count: a.size[0],
      max: a.size[1]
    })), (0, i.jsxs)("div", {
      className: U.state,
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
    if (null == c || c.type === W.IIU.CUSTOM_STATUS) return null;
    let u = "ActivityFeed" === t,
      d = "StreamPreview" === t,
      p = !1;
    (0, _.Z)(c) ? (e = this.renderXboxImage(), p = !0) : null == (e = this.renderImage(c)) && (p = null != (e = this.renderGameImage(c)));
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
        className: s()(p ? U.bodyAlignCenter : U.bodyNormal),
        children: (0, i.jsxs)("div", {
          className: U.activityDetails,
          children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, i.jsxs)(y.Z.Child, {
            className: s()((0, A.l)(U, "content", p ? "GameImage" : null != e ? "Images" : "NoImages", t)),
            children: [(0, i.jsxs)(f.P3F, {
              className: s()(null != a && U.openGameProfile),
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
    super(...e), R(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      u()(null != e, "Spotify activity was null"), null == t || t(e)
    }), R(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: r
      } = this.props;
      u()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e)
    }), R(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      u()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
R(H, "Types", F);
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
J.Types = F;
let Q = J