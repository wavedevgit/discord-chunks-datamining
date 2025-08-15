/** Chunk was on 96750 **/
/** chunk id: 387903, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => Y,
  Z: () => Q
}), require("./997841.js"), require("./388685.js");
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk438139 = require("./438139.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk111028 = require("./111028.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk833858 = require("./833858.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk707409 = require("./707409.jsx"),
  Chunk769654 = require("./769654.js"),
  Chunk424678 = require("./424678.jsx"),
  Chunk750154 = require("./750154.js"),
  Chunk81063 = require("./81063.js"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk153066 = require("./153066.js"),
  Chunk740265 = require("./740265.js"),
  Chunk122810 = require("./122810.js"),
  Chunk833664 = require("./833664.js"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk420660 = require("./420660.js"),
  Chunk39628 = require("./39628.jsx"),
  Chunk701488 = require("./701488.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk206733 = require("./206733.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}
var Y = ((i = {}).ACTIVITY_FEED = "ActivityFeed", i.STREAM_PREVIEW = "StreamPreview", i.VOICE_CHANNEL = "VoiceChannel", i);
let z = {
    StreamPreview: [108, 60],
    VoiceChannel: [108, 60],
    ActivityFeed: [900, 500]
  },
  J = (0, Chunk438139.Z)(class extends Chunk73800.PureComponent {
    render() {
      return (0, Chunk255367.jsx)("div", {
        className: Chunk206733.timestamp,
        children: this.props.message
      })
    }
  });

function K(e) {
  let {
    activity: t
  } = e, n = (0, m.ZP)(), r = function(e) {
    let {
      activity: t
    } = e, n = null;
    return (0, M.Z)(t) && (n = F.ABu.SPOTIFY), null != t.platform && [F.M7m.PS4, F.M7m.PS5].includes(t.platform) && (n = F.ABu.PLAYSTATION), n
  }({
    activity: t
  });
  if (null == r) return null;
  let i = g.Z.get(r);
  return (0, l.jsx)("img", {
    alt: "",
    src: (0, d.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
    className: B.platformIcon
  })
}
class q extends(r = Chunk73800.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != exports && (null == module ? true : module.type) !== Chunk981631.IIU.PLAYING && (null == module ? true : module.type) !== Chunk981631.IIU.WATCHING && (null == module ? true : module.type) !== Chunk981631.IIU.LISTENING && (null == module ? true : module.type) !== Chunk981631.IIU.HANG_STATUS ? {
      type: Chunk981631.IIU.PLAYING,
      name: Chunk388032.intl.string(Chunk388032.t.eXan7O)
    } : module
  }
  getTypeClass(e, t) {
    return (0, w.l)(B, e, this.props.type, t)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, Chunk420660.Z)(this.activity) && "ActivityFeed" === this.props.type
  }
  renderHeader(e) {
    let t, {
        hideHeader: n,
        activityGuild: r,
        showChannelDetails: i,
        renderHeaderAccessory: a
      } = this.props,
      o = this.activity;
    if (n || null == o) return null;
    let {
      name: c
    } = o;
    switch (o.type) {
      case F.IIU.STREAMING:
        t = G.intl.formatToPlainString(G.t.Dzgz4u, {
          platform: [F.ABu.TWITCH, F.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(F.ABu.TWITCH).name
        });
        break;
      case F.IIU.LISTENING:
        t = G.intl.formatToPlainString(G.t["5sYPnp"], {
          name: c
        });
        break;
      case F.IIU.WATCHING:
        t = G.intl.formatToPlainString(G.t.Ge29Z2, {
          name: c
        });
        break;
      case F.IIU.PLAYING:
        t = (0, D.Z)(o);
        break;
      case F.IIU.COMPETING:
        t = G.intl.formatToPlainString(G.t.SQCo6O, {
          name: c
        })
    }
    if (null != r) {
      var u;
      t = (0, A.yE)(null != (u = null == o ? true : o.flags) ? u : 0, F.xjy.EMBEDDED) ? o.type === F.IIU.WATCHING ? G.intl.formatToPlainString(G.t["M/L8oq"], {
        guildName: r.name
      }) : G.intl.formatToPlainString(G.t["4chKQk"], {
        guildName: r.name
      }) : G.intl.formatToPlainString(G.t.sddlGB, {
        server: r.name
      })
    }
    return (null == o ? true : o.type) === F.IIU.HANG_STATUS && (t = G.intl.string(G.t["74vS//"])), (0, l.jsxs)("div", {
      className: B.headerContainer,
      children: [(0, l.jsx)(f.X6q, {
        className: s()((0, w.l)(B, "headerText", e ? "EmptyBody" : "Normal")),
        variant: i ? "text-xs/semibold" : "eyebrow",
        children: (0, l.jsx)(v.Z, {
          children: t
        })
      }), null == a ? true : a()]
    })
  }
  renderXboxImage() {
    return (0, Chunk255367.jsx)("div", {
      className: Chunk206733.assets,
      children: (0, Chunk255367.jsx)("img", {
        alt: "",
        src: Chunk726542.Z.get(Chunk981631.ABu.XBOX).icon.customPNG,
        className: s()(this.getTypeClass("assetsLargeImage", "Xbox"))
      })
    })
  }
  renderImage(e) {
    var t, n, r;
    let i, o;
    if (e.type === F.IIU.HANG_STATUS) return (0, l.jsx)("div", {
      className: B.assets,
      children: (0, l.jsx)(j.Z, {
        hangStatusActivity: e,
        className: s()(B.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
      })
    });
    let {
      type: c
    } = this.props, {
      assets: u,
      application_id: d
    } = e;
    if (null == u || null == u.large_image && null == u.small_image) return null;
    (0, U.Z)(e) && (i = z[c]);
    let p = (0, M.Z)(e),
      m = null != u.large_image ? (0, l.jsx)("img", {
        alt: null != (t = u.large_text) ? t : "",
        src: (0, T.xF)(d, u.large_image, null != i ? i : [V.Si.LARGE, V.Si.LARGE]),
        className: s()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? F.ABu.TWITCH : ""), {
          [null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != u.small_image,
          [B.assetsLargeImageSpotify]: p
        })
      }) : null;
    if (p) m = (0, l.jsx)(f.eee, {
      onClick: this.handleOpenSpotifyAlbum,
      children: m
    });
    else if ((0, C.dS)(e)) {
      let t = (0, C.rq)(e);
      if (null == t) return null;
      m = (0, l.jsx)(b.ZP, {
        mask: b.ZP.Masks.SQUIRCLE,
        width: V.Si.SMALL,
        height: V.Si.SMALL,
        children: (0, l.jsx)("img", {
          src: null != (r = N.ZP.getGuildIconURL({
            id: t.guildId,
            icon: u.small_image,
            size: V.Si.SMALL
          })) ? r : true,
          className: B.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (m = (0, l.jsxs)("div", {
      className: B.twitchImageContainer,
      children: [(0, l.jsxs)("div", {
        className: B.twitchImageOverlay,
        children: [(0, l.jsx)(f.H, {
          className: B.streamName,
          children: e.name
        }), (0, l.jsx)("div", {
          className: B.streamGame,
          children: G.intl.format(G.t.gmCZRU, {
            game: e.details
          })
        })]
      }), (0, l.jsx)(f.eee, {
        className: B.twitchBackgroundImage,
        href: e.url,
        children: m
      })]
    })), (0, C.dS)(e) || null == u.small_image || (o = (0, l.jsx)(f.ua7, {
      text: "" !== u.small_text ? u.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, l.jsx)("img", H({
          alt: null != (t = u.small_text) ? t : "",
          src: (0, T.xF)(d, u.small_image, [V.Si.SMALL, V.Si.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == m ? "WithoutLargeImage" : true)
        }, e))
      }
    })), null == m) ? (0, l.jsx)("div", {
      className: B.assets,
      children: o
    }) : (0, l.jsxs)("div", {
      className: B.assets,
      children: [(0, l.jsx)(f.ua7, {
        text: null != u.large_text ? u.large_text : null,
        position: "top",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != m ? a.cloneElement(m, {
            onMouseEnter: t,
            onMouseLeave: n
          }) : null
        }
      }), o]
    })
  }
  renderGameImage(e) {
    let {
      user: t,
      type: n,
      application: r,
      activityGuild: i
    } = this.props;
    return null != e.assets || (0, Z.Z)(e) || e.type !== F.IIU.PLAYING || "ActivityFeed" === n || t.bot ? null : null == r && null != i ? (0, l.jsx)("div", {
      className: s()(B.gameIcon, B.screenshareIcon)
    }) : (0, l.jsx)(_.Z, {
      className: B.gameIcon,
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
      details: i,
      type: a
    } = e;
    if (a === F.IIU.CUSTOM_STATUS) return null;
    let o = (0, L.Z)(e),
      c = e.name,
      u = c;
    return (a === F.IIU.HANG_STATUS ? u = (0, I.O8)(e) : o && null != n ? u = (0, l.jsx)("span", {
      className: B.activityName,
      children: u
    }) : !o && (c = i, u = i, (0, M.Z)(e) && null != e.sync_id && null != i ? u = (0, l.jsx)(f.eee, {
      className: B.bodyLink,
      onClick: this.handleOpenSpotifyTrack,
      children: i
    }) : (0, C.dS)(e) && (u = e.name)), null == u) ? null : (0, l.jsx)(f.Text, {
      title: c,
      variant: "text-sm/semibold",
      className: s()((0, w.l)(B, "name", t.bot ? "wrap" : "normal")),
      children: u
    })
  }
  renderDetails(e) {
    let t, {
        details: n,
        state: r
      } = e,
      {
        activityGuild: i
      } = this.props,
      a = n,
      o = n;
    if (e.type === F.IIU.CUSTOM_STATUS) a = r;
    else if (e.type === F.IIU.HANG_STATUS && null != i) a = G.intl.formatToPlainString(G.t.IAZiW1, {
      guildName: i.name
    }), t = () => {
      (0, E.X)(i.id)
    };
    else if (!(0, L.Z)(e)) {
      if (a = r, o = r, (0, M.Z)(e) && null != r) {
        let t = (t, n) => (0, l.jsx)(P.Z, {
          artists: r,
          linkClassName: B.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n);
        a = G.intl.format(G.t.uU9le3, {
          artists: o,
          artistsHook: t
        })
      } else if ((0, C.dS)(e)) {
        var s;
        a = null == (s = e.assets) ? true : s.small_text
      }
    }
    return null == a || "" === a ? null : ((0, U.Z)(e) && (a = G.intl.formatToPlainString(G.t.gmCZRU, {
      game: a
    })), null != t) ? (0, l.jsx)(f.P3F, {
      onClick: t,
      title: null != o ? o : true,
      className: B.clickableDetails,
      children: a
    }) : (0, l.jsx)("div", {
      title: null != o ? o : true,
      className: (0, U.Z)(e) || (0, M.Z)(e) ? B.detailsWrap : B.details,
      children: a
    })
  }
  renderChannelDetails(e) {
    let {
      activityGuild: t,
      showChannelDetails: n,
      channel: r
    } = this.props;
    return n && null != t ? null == r ? (0, l.jsx)("div", {
      className: (0, U.Z)(e) || (0, M.Z)(e) ? B.detailsWrap : B.details,
      children: G.intl.format(G.t["hq/Qzc"], {
        guildName: t.name
      })
    }) : (0, l.jsxs)("div", {
      className: s()((0, U.Z)(e) || (0, M.Z)(e) ? B.detailsWrap : B.details, B.guildDetails),
      children: [(0, l.jsx)(S.Z, {
        guild: t,
        size: S.Z.Sizes.SMOL,
        className: B.guildIcon
      }), (0, l.jsx)(f.Fbu, {
        size: "xxs",
        color: "currentColor"
      }), (0, l.jsxs)("div", {
        className: B.voiceChannelInfo,
        children: [(0, l.jsx)(f.gj8, {
          size: "xxs",
          color: "currentColor"
        }), (0, l.jsx)(f.Text, {
          variant: "text-xs/normal",
          children: null == r ? true : r.name
        })]
      })]
    }) : null
  }
  renderTimePlayed(e) {
    let {
      activityGuild: t
    } = this.props;
    if (!(0, L.Z)(e) || (0, M.Z)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, Z.Z)(e) ? (0, l.jsx)(J, {
      timestamps: n
    }) : (0, l.jsx)(x.ZP, {
      start: n.start,
      location: x.ZP.Locations.USER_ACTIVITY,
      className: B.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, M.Z)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: r
    } = t;
    return null == n || null == r ? null : (0, l.jsx)(R.Z, {
      start: n,
      end: r,
      className: this.getTypeClass("timeBar"),
      themed: "VoiceChannel" === this.props.type
    })
  }
  renderState(e, t) {
    var n, r;
    let i, {
        state: a,
        party: o,
        assets: s
      } = e,
      c = a,
      u = a;
    if (!(0, L.Z)(e) && (c = null == s ? true : s.large_text, u = null == s ? true : s.large_text, (0, M.Z)(e) && null != c)) {
      let t = (t, n) => null != e.sync_id && null != u ? (0, l.jsx)(f.eee, {
        className: B.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: u
      }, n) : u;
      c = G.intl.format(G.t.vOLBEx, {
        album: u,
        albumHook: t
      })
    }
    return null != c && "" !== c && e.type !== F.IIU.CUSTOM_STATUS || (0, C.dS)(e) ? ((null == o ? true : o.size) == null && [V.Zc].includes(null != (n = e.application_id) ? n : "") ? i = G.intl.formatToPlainString(G.t["u//9Bw"], {
      count: "0",
      max: null != (r = null == t ? true : t.getMaxParticipants()) ? r : 0
    }) : (0, C.dS)(e) && (null == o ? true : o.size) != null ? i = G.intl.formatToPlainString(G.t["JC/3x8"], {
      numSpeakers: o.size[0],
      numListeners: o.size[1] - o.size[0]
    }) : (null == o ? true : o.size) != null && o.size.length >= 2 && (i = 0 === o.size[1] ? G.intl.formatToPlainString(G.t.IM4J4e, {
      count: o.size[0]
    }) : G.intl.formatToPlainString(G.t["u//9Bw"], {
      count: o.size[0],
      max: o.size[1]
    })), (0, l.jsxs)("div", {
      className: B.state,
      children: [(0, l.jsx)("span", {
        title: u,
        children: c
      }), null != i ? (0, l.jsxs)("span", {
        children: [" ", i]
      }) : null]
    })) : null
  }
  render() {
    let e, {
        type: t,
        renderActions: n,
        className: r,
        application: i,
        onClose: a,
        onOpenGameProfileModal: o
      } = this.props,
      c = this.activity;
    if (null == Chunk512722 || Chunk512722.type === Chunk981631.IIU.CUSTOM_STATUS) return null;
    let u = "ActivityFeed" === exports,
      d = "StreamPreview" === exports,
      p = false;
    (0, Chunk802856.Z)(Chunk512722) ? (e = this.renderXboxImage(), p = true) : null == (e = this.renderImage(Chunk512722)) && (p = null != (e = this.renderGameImage(Chunk512722)));
    let m = this.renderName(Chunk512722),
      g = this.renderDetails(Chunk512722),
      b = this.renderState(Chunk512722, i),
      v = this.renderTimePlayed(Chunk512722),
      _ = this.renderChannelDetails(Chunk512722),
      y = null != require ? require() : null,
      O = this.renderTimeBar(Chunk512722),
      S = ![module, Chunk410030, Chunk726542, Chunk686546, Chunk111028, Chunk168524, Chunk810568].some(e => null != e);
    return (0, Chunk255367.jsxs)("div", {
      className: s()(this.getTypeClass("activity"), r),
      children: [this.renderHeader(Chunk565138), (0, Chunk255367.jsx)("div", {
        className: s()(Chunk438139 ? Chunk206733.bodyAlignCenter : Chunk206733.bodyNormal),
        children: (0, Chunk255367.jsxs)("div", {
          className: Chunk206733.activityDetails,
          children: [module, this.isStreamerOnTypeActivityFeed() ? null : (0, Chunk255367.jsxs)(Chunk600164.Z.Child, {
            className: s()((0, Chunk153066.l)(Chunk206733, "content", Chunk438139 ? "GameImage" : null != module ? "Images" : "NoImages", exports)),
            children: [(0, Chunk255367.jsxs)(Chunk481060.P3F, {
              className: s()(null != Chunk120356 && Chunk206733.openGameProfile),
              onClick: null != Chunk120356 ? e => {
                o(e), null == a || a()
              } : true,
              children: [Chunk410030, Chunk726542, Chunk686546, Chunk111028]
            }), Chunk925329, Chunk780384 ? null : Chunk168524, u ? Chunk810568 : null]
          })]
        })
      }), Chunk780384 ? Chunk810568 : null, (0, Chunk255367.jsx)(K, {
        activity: Chunk512722
      })]
    })
  }
  constructor(...e) {
    super(...e), W(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      u()(null != e, "Spotify activity was null"), null == t || t(e)
    }), W(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: r
      } = this.props;
      u()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e)
    }), W(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      u()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
W(q, "Types", Y);
let X = e => {
  var t, n, r, i, a;
  let o = (0, O.Z)({
    location: "UserActivity",
    applicationId: null != (r = null == (t = e.application) ? true : t.id) ? r : null == (n = e.activity) ? true : n.application_id,
    source: y.m1.UserProfile,
    sourceUserId: e.user.id,
    trackEntryPointImpression: true
  });
  return (0, l.jsx)(q, (i = H({}, e), a = a = {
    onOpenGameProfileModal: o
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
  }), i))
};
X.Types = Y;
let Q = X