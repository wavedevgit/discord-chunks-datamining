/** Chunk was on 88474 **/
/** chunk id: 153331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => $,
  O: () => B
}), require("./938796.js"), require("./896048.js");
var r, l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  u = require.n(Chunk284009),
  Chunk665260 = require("./665260.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk492684 = require("./492684.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk573435 = require("./573435.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk886019 = require("./886019.js"),
  Chunk559405 = require("./559405.jsx"),
  Chunk290987 = require("./290987.jsx"),
  Chunk345942 = require("./345942.js"),
  Chunk763758 = require("./763758.jsx"),
  Chunk82149 = require("./82149.js"),
  Chunk139675 = require("./139675.js"),
  Chunk486020 = require("./486020.js"),
  Chunk821589 = require("./821589.js"),
  Chunk474447 = require("./474447.js"),
  Chunk682261 = require("./682261.js"),
  Chunk672979 = require("./672979.js"),
  Chunk90644 = require("./90644.js"),
  Chunk61330 = require("./61330.js"),
  Chunk960076 = require("./960076.js"),
  Chunk432166 = require("./432166.jsx"),
  Chunk360469 = require("./360469.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk609535 = require("./609535.js");

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}
var B = ((l = {}).ACTIVITY_FEED = "ActivityFeed", l.STREAM_PREVIEW = "StreamPreview", l.VOICE_CHANNEL = "VoiceChannel", l);
let Y = {
    StreamPreview: [108, 60],
    VoiceChannel: [108, 60],
    ActivityFeed: [900, 500]
  },
  J = (0, Chunk492684.A)(class extends Chunk64700.PureComponent {
    render() {
      return (0, i.jsx)("div", {
        className: H.timestamp,
        children: this.props.message
      })
    }
  });

function Z(e) {
  let {
    activity: t
  } = e, n = (0, y.Ay)(), r = function(e) {
    let {
      activity: t
    } = e, n = null;
    return (0, k.A)(t) && (n = F.fg2.SPOTIFY), null != t.platform && [F.yTV.PS4, F.yTV.PS5].includes(t.platform) && (n = F.fg2.PLAYSTATION), n
  }({
    activity: t
  });
  if (null == r) return null;
  let l = b.A.get(r);
  return (0, i.jsx)("img", {
    alt: "",
    src: (0, f.qB)(n) ? l.icon.lightSVG : l.icon.darkSVG,
    className: H.platformIcon
  })
}
class X extends(r = Chunk64700.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != t && (null == e ? true : e.type) !== F.$pd.PLAYING && (null == e ? true : e.type) !== F.$pd.WATCHING && (null == e ? true : e.type) !== F.$pd.LISTENING && (null == e ? true : e.type) !== F.$pd.HANG_STATUS ? {
      type: F.$pd.PLAYING,
      name: W.intl.string(W.t.eXan7B)
    } : e
  }
  getTypeClass(e, t) {
    return (0, w.t)(H, e, this.props.type, t)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, U.A)(this.activity) && "ActivityFeed" === this.props.type
  }
  renderHeader(e) {
    let t, {
        hideHeader: n,
        activityGuild: r,
        showChannelDetails: l,
        renderHeaderAccessory: a
      } = this.props,
      s = this.activity;
    if (n || null == s) return null;
    let {
      name: c
    } = s;
    switch (s.type) {
      case F.$pd.STREAMING:
        t = W.intl.formatToPlainString(W.t.Dzgz4u, {
          platform: [F.fg2.TWITCH, F.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : b.A.get(F.fg2.TWITCH).name
        });
        break;
      case F.$pd.LISTENING:
        t = W.intl.formatToPlainString(W.t["5sYPnr"], {
          name: c
        });
        break;
      case F.$pd.WATCHING:
        t = W.intl.formatToPlainString(W.t.Ge29Zy, {
          name: c
        });
        break;
      case F.$pd.PLAYING:
        t = (0, L.A)(s);
        break;
      case F.$pd.COMPETING:
        t = W.intl.formatToPlainString(W.t.SQCo6D, {
          name: c
        })
    }
    if (null != r) {
      var u;
      t = (0, d.Lt)(null != (u = null == s ? true : s.flags) ? u : 0, F.jUm.EMBEDDED) ? s.type === F.$pd.WATCHING ? W.intl.formatToPlainString(W.t["M/L8ot"], {
        guildName: r.name
      }) : W.intl.formatToPlainString(W.t["4chKQu"], {
        guildName: r.name
      }) : W.intl.formatToPlainString(W.t.sddlGK, {
        server: r.name
      })
    }
    return (null == s ? true : s.type) === F.$pd.HANG_STATUS && (t = W.intl.string(W.t["74vS/x"])), (0, i.jsxs)("div", {
      className: H.headerContainer,
      children: [(0, i.jsx)(m.Heading, {
        className: o()((0, w.t)(H, "headerText", e ? "EmptyBody" : "Normal")),
        variant: l ? "text-xs/semibold" : "eyebrow",
        children: (0, i.jsx)(p.A, {
          children: t
        })
      }), null == a ? true : a()]
    })
  }
  renderXboxImage() {
    return (0, i.jsx)("div", {
      className: H.assets,
      children: (0, i.jsx)("img", {
        alt: "",
        src: b.A.get(F.fg2.XBOX).icon.customPNG,
        className: o()(this.getTypeClass("assetsLargeImage", "Xbox"))
      })
    })
  }
  renderImage(e) {
    var t, n, r;
    let l, s, {
      user: c
    } = this.props;
    if (e.type === F.$pd.HANG_STATUS) return (0, i.jsx)("div", {
      className: H.assets,
      children: (0, i.jsx)(x.A, {
        userId: c.id,
        hangStatusActivity: e,
        size: 40,
        className: o()(H.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
      })
    });
    let {
      type: u
    } = this.props, {
      assets: d,
      application_id: p
    } = e;
    if (null == d || null == d.large_image && null == d.small_image) return null;
    (0, U.A)(e) && (l = Y[u]);
    let f = (0, k.A)(e),
      g = null != d.large_image ? (0, i.jsx)("img", {
        alt: null != (t = d.large_text) ? t : "",
        src: (0, N.uD)(p, d.large_image, null != l ? l : [V.iu.LARGE, V.iu.LARGE]),
        className: o()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? F.fg2.TWITCH : ""), {
          [null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != d.small_image,
          [H.assetsLargeImageSpotify]: f
        })
      }) : null;
    if (f) g = (0, i.jsx)(m.MzZ, {
      onClick: this.handleOpenSpotifyAlbum,
      children: g
    });
    else if ((0, P.Cy)(e)) {
      let t = (0, P.UW)(e);
      if (null == t) return null;
      g = (0, i.jsx)(h.Ay, {
        mask: h.Ay.Masks.SQUIRCLE,
        width: V.iu.SMALL,
        height: V.iu.SMALL,
        children: (0, i.jsx)("img", {
          src: null != (r = T.Ay.getGuildIconURL({
            id: t.guildId,
            icon: d.small_image,
            size: V.iu.SMALL
          })) ? r : true,
          className: H.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (g = (0, i.jsxs)("div", {
      className: H.twitchImageContainer,
      children: [(0, i.jsxs)("div", {
        className: H.twitchImageOverlay,
        children: [(0, i.jsx)(m.H, {
          className: H.streamName,
          children: e.name
        }), (0, i.jsx)("div", {
          className: H.streamGame,
          children: W.intl.format(W.t.gmCZRY, {
            game: e.details
          })
        })]
      }), (0, i.jsx)(m.MzZ, {
        className: H.twitchBackgroundImage,
        href: e.url,
        children: g
      })]
    })), (0, P.Cy)(e) || null == d.small_image || (s = (0, i.jsx)(m.STz, {
      text: "" !== d.small_text ? d.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, i.jsx)("img", K({
          alt: null != (t = d.small_text) ? t : "",
          src: (0, N.uD)(p, d.small_image, [V.iu.SMALL, V.iu.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == g ? "WithoutLargeImage" : true)
        }, e))
      }
    })), null == g) ? (0, i.jsx)("div", {
      className: H.assets,
      children: s
    }) : (0, i.jsxs)("div", {
      className: H.assets,
      children: [(0, i.jsx)(m.STz, {
        text: null != d.large_text ? d.large_text : null,
        position: "top",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != g ? a.cloneElement(g, {
            onMouseEnter: t,
            onMouseLeave: n
          }) : null
        }
      }), s]
    })
  }
  renderGameImage(e) {
    let {
      user: t,
      type: n,
      application: r,
      activityGuild: l
    } = this.props;
    return null != e.assets || (0, D.A)(e) || e.type !== F.$pd.PLAYING || "ActivityFeed" === n || t.bot ? null : null == r && null != l ? (0, i.jsx)("div", {
      className: o()(H.gameIcon, H.screenshareIcon)
    }) : (0, i.jsx)(A.A, {
      className: H.gameIcon,
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
      type: a
    } = e;
    if (a === F.$pd.CUSTOM_STATUS) return null;
    let s = (0, R.A)(e),
      c = e.name,
      u = c;
    return (a === F.$pd.HANG_STATUS ? u = (0, j.Au)(t.id, e) : s && null != n ? u = (0, i.jsx)("span", {
      className: H.activityName,
      children: u
    }) : !s && (c = l, u = l, (0, k.A)(e) && null != e.sync_id && null != l ? u = (0, i.jsx)(m.MzZ, {
      className: H.bodyLink,
      onClick: this.handleOpenSpotifyTrack,
      children: l
    }) : (0, P.Cy)(e) && (u = e.name)), null == u) ? null : (0, i.jsx)(m.Text, {
      title: c,
      variant: "text-sm/semibold",
      className: o()((0, w.t)(H, "name", t.bot ? "wrap" : "normal")),
      children: u
    })
  }
  renderDetails(e) {
    let t, {
        details: n,
        state: r
      } = e,
      {
        activityGuild: l
      } = this.props,
      a = n,
      s = n;
    if (e.type === F.$pd.CUSTOM_STATUS) a = r;
    else if (e.type === F.$pd.HANG_STATUS && null != l) a = W.intl.formatToPlainString(W.t.IAZiW2, {
      guildName: l.name
    }), t = () => {
      (0, E.u)(l.id)
    };
    else if (!(0, R.A)(e)) {
      if (a = r, s = r, (0, k.A)(e) && null != r) {
        let t = (t, n) => (0, i.jsx)(C.A, {
          artists: r,
          linkClassName: H.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n);
        a = W.intl.format(W.t.uU9le8, {
          artists: s,
          artistsHook: t
        })
      } else if ((0, P.Cy)(e)) {
        var o;
        a = null == (o = e.assets) ? true : o.small_text
      }
    }
    return null == a || "" === a ? null : ((0, U.A)(e) && (a = W.intl.formatToPlainString(W.t.gmCZRY, {
      game: a
    })), null != t) ? (0, i.jsx)(m.DUT, {
      onClick: t,
      title: null != s ? s : true,
      className: H.clickableDetails,
      children: a
    }) : (0, i.jsx)("div", {
      title: null != s ? s : true,
      className: (0, U.A)(e) || (0, k.A)(e) ? H.detailsWrap : H.details,
      children: a
    })
  }
  renderChannelDetails(e) {
    let {
      activityGuild: t,
      showChannelDetails: n,
      channel: r
    } = this.props;
    return n && null != t ? null == r ? (0, i.jsx)("div", {
      className: (0, U.A)(e) || (0, k.A)(e) ? H.detailsWrap : H.details,
      children: W.intl.format(W.t["hq/Qze"], {
        guildName: t.name
      })
    }) : (0, i.jsxs)("div", {
      className: o()((0, U.A)(e) || (0, k.A)(e) ? H.detailsWrap : H.details, H.guildDetails),
      children: [(0, i.jsx)(S.A, {
        guild: t,
        size: S.A.Sizes.SMOL,
        className: H.guildIcon
      }), (0, i.jsx)(m._BQ, {
        size: "xxs",
        color: "currentColor"
      }), (0, i.jsxs)("div", {
        className: H.voiceChannelInfo,
        children: [(0, i.jsx)(m.HKD, {
          size: "xxs",
          color: "currentColor"
        }), (0, i.jsx)(m.Text, {
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
    if (!(0, R.A)(e) || (0, k.A)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, D.A)(e) ? (0, i.jsx)(J, {
      timestamps: n
    }) : (0, i.jsx)(I.Ay, {
      start: n.start,
      location: I.Ay.Locations.USER_ACTIVITY,
      className: H.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, k.A)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: r
    } = t;
    return null == n || null == r ? null : (0, i.jsx)(G.A, {
      start: n,
      end: r,
      className: this.getTypeClass("timeBar"),
      themed: "VoiceChannel" === this.props.type
    })
  }
  renderState(e, t) {
    var n, r;
    let l, {
        state: a,
        party: s,
        assets: o
      } = e,
      c = a,
      u = a;
    if (!(0, R.A)(e) && (c = null == o ? true : o.large_text, u = null == o ? true : o.large_text, (0, k.A)(e) && null != c)) {
      let t = (t, n) => null != e.sync_id && null != u ? (0, i.jsx)(m.MzZ, {
        className: H.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: u
      }, n) : u;
      c = W.intl.format(W.t.vOLBEy, {
        album: u,
        albumHook: t
      })
    }
    return null != c && "" !== c && e.type !== F.$pd.CUSTOM_STATUS || (0, P.Cy)(e) ? ((null == s ? true : s.size) == null && [V.I4].includes(null != (n = e.application_id) ? n : "") ? l = W.intl.formatToPlainString(W.t["u//9By"], {
      count: "0",
      max: null != (r = null == t ? true : t.getMaxParticipants()) ? r : 0
    }) : (0, P.Cy)(e) && (null == s ? true : s.size) != null ? l = W.intl.formatToPlainString(W.t["JC/3xw"], {
      numSpeakers: s.size[0],
      numListeners: s.size[1] - s.size[0]
    }) : (null == s ? true : s.size) != null && s.size.length >= 2 && (l = 0 === s.size[1] ? W.intl.formatToPlainString(W.t.IM4J4e, {
      count: s.size[0]
    }) : W.intl.formatToPlainString(W.t["u//9By"], {
      count: s.size[0],
      max: s.size[1]
    })), (0, i.jsxs)("div", {
      className: H.state,
      children: [(0, i.jsx)("span", {
        title: u,
        children: c
      }), null != l ? (0, i.jsxs)("span", {
        children: [" ", l]
      }) : null]
    })) : null
  }
  render() {
    let e, {
        type: t,
        renderActions: n,
        className: r,
        application: l,
        onClose: a,
        onOpenGameProfileModal: s
      } = this.props,
      c = this.activity;
    if (null == c || c.type === F.$pd.CUSTOM_STATUS) return null;
    let u = "ActivityFeed" === t,
      d = "StreamPreview" === t,
      p = false;
    (0, M.A)(c) ? (e = this.renderXboxImage(), p = true) : null == (e = this.renderImage(c)) && (p = null != (e = this.renderGameImage(c)));
    let f = this.renderName(c),
      g = this.renderDetails(c),
      y = this.renderState(c, l),
      b = this.renderTimePlayed(c),
      h = this.renderChannelDetails(c),
      A = null != n ? n() : null,
      v = this.renderTimeBar(c),
      O = ![e, f, g, y, b, v, A].some(e => null != e);
    return (0, i.jsxs)("div", {
      className: o()(this.getTypeClass("activity"), r),
      children: [this.renderHeader(O), (0, i.jsx)("div", {
        className: o()(p ? H.bodyAlignCenter : H.bodyNormal),
        children: (0, i.jsxs)("div", {
          className: H.activityDetails,
          children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, i.jsxs)(_.A.Child, {
            className: o()((0, w.t)(H, "content", p ? "GameImage" : null != e ? "Images" : "NoImages", t)),
            children: [(0, i.jsxs)(m.DUT, {
              className: o()(null != s && H.openGameProfile),
              onClick: null != s ? e => {
                s(e), null == a || a()
              } : true,
              children: [f, g, y, b]
            }), h, d ? null : v, u ? A : null]
          })]
        })
      }), d ? A : null, (0, i.jsx)(Z, {
        activity: c
      })]
    })
  }
  constructor(...e) {
    super(...e), z(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      u()(null != e, "Spotify activity was null"), null == t || t(e)
    }), z(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: r
      } = this.props;
      u()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e)
    }), z(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      u()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
z(X, "Types", B);
let q = e => {
  var t, n, r, l, a;
  let s = (0, O.A)({
    location: "UserActivity",
    applicationId: null != (t = null == (n = e.application) ? true : n.id) ? t : null == (r = e.activity) ? true : r.application_id,
    source: v.Ob.UserProfile,
    sourceUserId: e.user.id,
    trackEntryPointImpression: true
  });
  return (0, i.jsx)(X, (l = K({}, e), a = a = {
    onOpenGameProfileModal: s
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
  }), l))
};
q.Types = B;
let $ = q