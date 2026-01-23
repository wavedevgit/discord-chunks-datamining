/** Chunk was on web.js **/
/** chunk id: 153331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => et,
  O: () => q
}), require("./938796.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
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

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let z = 40;
var q = function(e) {
  return e.ACTIVITY_FEED = "ActivityFeed", e.STREAM_PREVIEW = "StreamPreview", e.VOICE_CHANNEL = "VoiceChannel", e
}({});
let Z = {
    StreamPreview: [108, 60],
    VoiceChannel: [108, 60],
    ActivityFeed: [900, 500]
  },
  X = (0, Chunk492684.A)(class extends Chunk64700.PureComponent {
    render() {
      return (0, i.jsx)("div", {
        className: B.timestamp,
        children: this.props.message
      })
    }
  });

function Q(e) {
  let {
    activity: t
  } = e, n = null;
  return (0, j.A)(t) && (n = V.fg2.SPOTIFY), null != t.platform && [V.yTV.PS4, V.yTV.PS5].includes(t.platform) && (n = V.fg2.PLAYSTATION), n
}

function J(e) {
  let {
    activity: t
  } = e, n = (0, h.Ay)(), r = Q({
    activity: t
  });
  if (null == r) return null;
  let a = m.A.get(r);
  return (0, i.jsx)("img", {
    alt: "",
    src: (0, f.qB)(n) ? a.icon.lightSVG : a.icon.darkSVG,
    className: B.platformIcon
  })
}
class $ extends(r = Chunk64700.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != t && (null == e ? true : e.type) !== V.$pd.PLAYING && (null == e ? true : e.type) !== V.$pd.WATCHING && (null == e ? true : e.type) !== V.$pd.LISTENING && (null == e ? true : e.type) !== V.$pd.HANG_STATUS ? {
      type: V.$pd.PLAYING,
      name: F.intl.string(F.t.eXan7B)
    } : e
  }
  getTypeClass(e, t) {
    return (0, P.t)(B, e, this.props.type, t)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, k.A)(this.activity) && "ActivityFeed" === this.props.type
  }
  renderHeader(e) {
    let t, {
        hideHeader: n,
        activityGuild: r,
        showChannelDetails: a,
        renderHeaderAccessory: s
      } = this.props,
      l = this.activity;
    if (n || null == l) return null;
    let {
      name: c
    } = l;
    switch (l.type) {
      case V.$pd.STREAMING:
        t = F.intl.formatToPlainString(F.t.Dzgz4u, {
          platform: [V.fg2.TWITCH, V.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : m.A.get(V.fg2.TWITCH).name
        });
        break;
      case V.$pd.LISTENING:
        t = F.intl.formatToPlainString(F.t["5sYPnr"], {
          name: c
        });
        break;
      case V.$pd.WATCHING:
        t = F.intl.formatToPlainString(F.t.Ge29Zy, {
          name: c
        });
        break;
      case V.$pd.PLAYING:
        t = (0, D.A)(l);
        break;
      case V.$pd.COMPETING:
        t = F.intl.formatToPlainString(F.t.SQCo6D, {
          name: c
        })
    }
    if (null != r) {
      var f;
      t = (0, u.Lt)(null != (f = null == l ? true : l.flags) ? f : 0, V.jUm.EMBEDDED) ? l.type === V.$pd.WATCHING ? F.intl.formatToPlainString(F.t["M/L8ot"], {
        guildName: r.name
      }) : F.intl.formatToPlainString(F.t["4chKQu"], {
        guildName: r.name
      }) : F.intl.formatToPlainString(F.t.sddlGK, {
        server: r.name
      })
    }
    return (null == l ? true : l.type) === V.$pd.HANG_STATUS && (t = F.intl.string(F.t["74vS/x"])), (0, i.jsxs)("div", {
      className: B.headerContainer,
      children: [(0, i.jsx)(p.Heading, {
        className: o()((0, P.t)(B, "headerText", e ? "EmptyBody" : "Normal")),
        variant: a ? "text-xs/semibold" : "eyebrow",
        children: (0, i.jsx)(d.A, {
          children: t
        })
      }), null == s ? true : s()]
    })
  }
  renderXboxImage() {
    return (0, i.jsx)("div", {
      className: B.assets,
      children: (0, i.jsx)("img", {
        alt: "",
        src: m.A.get(V.fg2.XBOX).icon.customPNG,
        className: o()(this.getTypeClass("assetsLargeImage", "Xbox"))
      })
    })
  }
  renderImage(e) {
    var t, n, r;
    let s, l, {
      user: c
    } = this.props;
    if (e.type === V.$pd.HANG_STATUS) return (0, i.jsx)("div", {
      className: B.assets,
      children: (0, i.jsx)(I.A, {
        userId: c.id,
        hangStatusActivity: e,
        size: z,
        className: o()(B.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
      })
    });
    let {
      type: u
    } = this.props, {
      assets: d,
      application_id: f
    } = e;
    if (null == d || null == d.large_image && null == d.small_image) return null;
    (0, k.A)(e) && (s = Z[u]);
    let _ = (0, j.A)(e),
      h = null != d.large_image ? (0, i.jsx)("img", {
        alt: null != (t = d.large_text) ? t : "",
        src: (0, w.uD)(f, d.large_image, null != s ? s : [G.iu.LARGE, G.iu.LARGE]),
        className: o()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? V.fg2.TWITCH : ""), {
          [null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != d.small_image,
          [B.assetsLargeImageSpotify]: _
        })
      }) : null;
    if (_) h = (0, i.jsx)(p.MzZ, {
      onClick: this.handleOpenSpotifyAlbum,
      children: h
    });
    else if ((0, N.Cy)(e)) {
      let t = (0, N.UW)(e);
      if (null == t) return null;
      h = (0, i.jsx)(E.Ay, {
        mask: E.Ay.Masks.SQUIRCLE,
        width: G.iu.SMALL,
        height: G.iu.SMALL,
        children: (0, i.jsx)("img", {
          src: null != (r = R.Ay.getGuildIconURL({
            id: t.guildId,
            icon: d.small_image,
            size: G.iu.SMALL
          })) ? r : true,
          className: B.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (h = (0, i.jsxs)("div", {
      className: B.twitchImageContainer,
      children: [(0, i.jsxs)("div", {
        className: B.twitchImageOverlay,
        children: [(0, i.jsx)(p.H, {
          className: B.streamName,
          children: e.name
        }), (0, i.jsx)("div", {
          className: B.streamGame,
          children: F.intl.format(F.t.gmCZRY, {
            game: e.details
          })
        })]
      }), (0, i.jsx)(p.MzZ, {
        className: B.twitchBackgroundImage,
        href: e.url,
        children: h
      })]
    })), (0, N.Cy)(e) || null == d.small_image || (l = (0, i.jsx)(p.STz, {
      text: "" !== d.small_text ? d.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, i.jsx)("img", Y({
          alt: null != (t = d.small_text) ? t : "",
          src: (0, w.uD)(f, d.small_image, [G.iu.SMALL, G.iu.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == h ? "WithoutLargeImage" : true)
        }, e))
      }
    })), null == h) ? (0, i.jsx)("div", {
      className: B.assets,
      children: l
    }) : (0, i.jsxs)("div", {
      className: B.assets,
      children: [(0, i.jsx)(p.STz, {
        text: null != d.large_text ? d.large_text : null,
        position: "top",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != h ? a.cloneElement(h, {
            onMouseEnter: t,
            onMouseLeave: n
          }) : null
        }
      }), l]
    })
  }
  renderGameImage(e) {
    let {
      user: t,
      type: n,
      application: r,
      activityGuild: a
    } = this.props;
    return null != e.assets || (0, x.A)(e) || e.type !== V.$pd.PLAYING || "ActivityFeed" === n || t.bot ? null : null == r && null != a ? (0, i.jsx)("div", {
      className: o()(B.gameIcon, B.screenshareIcon)
    }) : (0, i.jsx)(y.A, {
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
      details: a,
      type: s
    } = e;
    if (s === V.$pd.CUSTOM_STATUS) return null;
    let l = (0, L.A)(e),
      c = e.name,
      u = c;
    return (s === V.$pd.HANG_STATUS ? u = (0, A.Au)(t.id, e) : l && null != n ? u = (0, i.jsx)("span", {
      className: B.activityName,
      children: u
    }) : !l && (c = a, u = a, (0, j.A)(e) && null != e.sync_id && null != a ? u = (0, i.jsx)(p.MzZ, {
      className: B.bodyLink,
      onClick: this.handleOpenSpotifyTrack,
      children: a
    }) : (0, N.Cy)(e) && (u = e.name)), null == u) ? null : (0, i.jsx)(p.Text, {
      title: c,
      variant: "text-sm/semibold",
      className: o()((0, P.t)(B, "name", t.bot ? "wrap" : "normal")),
      children: u
    })
  }
  renderDetails(e) {
    let t, {
        details: n,
        state: r
      } = e,
      {
        activityGuild: a
      } = this.props,
      s = n,
      o = n;
    if (e.type === V.$pd.CUSTOM_STATUS) s = r;
    else if (e.type === V.$pd.HANG_STATUS && null != a) s = F.intl.formatToPlainString(F.t.IAZiW2, {
      guildName: a.name
    }), t = () => {
      (0, T.u)(a.id)
    };
    else if (!(0, L.A)(e)) {
      if (s = r, o = r, (0, j.A)(e) && null != r) {
        let t = (t, n) => (0, i.jsx)(C.A, {
          artists: r,
          linkClassName: B.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n);
        s = F.intl.format(F.t.uU9le8, {
          artists: o,
          artistsHook: t
        })
      } else if ((0, N.Cy)(e)) {
        var l;
        s = null == (l = e.assets) ? true : l.small_text
      }
    }
    return null == s || "" === s ? null : ((0, k.A)(e) && (s = F.intl.formatToPlainString(F.t.gmCZRY, {
      game: s
    })), null != t) ? (0, i.jsx)(p.DUT, {
      onClick: t,
      title: null != o ? o : true,
      className: B.clickableDetails,
      children: s
    }) : (0, i.jsx)("div", {
      title: null != o ? o : true,
      className: (0, k.A)(e) || (0, j.A)(e) ? B.detailsWrap : B.details,
      children: s
    })
  }
  renderChannelDetails(e) {
    let {
      activityGuild: t,
      showChannelDetails: n,
      channel: r
    } = this.props;
    return n && null != t ? null == r ? (0, i.jsx)("div", {
      className: (0, k.A)(e) || (0, j.A)(e) ? B.detailsWrap : B.details,
      children: F.intl.format(F.t["hq/Qze"], {
        guildName: t.name
      })
    }) : (0, i.jsxs)("div", {
      className: o()((0, k.A)(e) || (0, j.A)(e) ? B.detailsWrap : B.details, B.guildDetails),
      children: [(0, i.jsx)(v.A, {
        guild: t,
        size: v.A.Sizes.SMOL,
        className: B.guildIcon
      }), (0, i.jsx)(p._BQ, {
        size: "xxs",
        color: "currentColor"
      }), (0, i.jsxs)("div", {
        className: B.voiceChannelInfo,
        children: [(0, i.jsx)(p.HKD, {
          size: "xxs",
          color: "currentColor"
        }), (0, i.jsx)(p.Text, {
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
    if (!(0, L.A)(e) || (0, j.A)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, x.A)(e) ? (0, i.jsx)(X, {
      timestamps: n
    }) : (0, i.jsx)(S.Ay, {
      start: n.start,
      location: S.Ay.Locations.USER_ACTIVITY,
      className: B.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, j.A)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: r
    } = t;
    return null == n || null == r ? null : (0, i.jsx)(U.A, {
      start: n,
      end: r,
      className: this.getTypeClass("timeBar"),
      themed: "VoiceChannel" === this.props.type
    })
  }
  renderState(e, t) {
    var n, r;
    let a, {
        state: s,
        party: o,
        assets: l
      } = e,
      c = s,
      u = s;
    if (!(0, L.A)(e) && (c = null == l ? true : l.large_text, u = null == l ? true : l.large_text, (0, j.A)(e) && null != c)) {
      let t = (t, n) => null != e.sync_id && null != u ? (0, i.jsx)(p.MzZ, {
        className: B.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: u
      }, n) : u;
      c = F.intl.format(F.t.vOLBEy, {
        album: u,
        albumHook: t
      })
    }
    return null != c && "" !== c && e.type !== V.$pd.CUSTOM_STATUS || (0, N.Cy)(e) ? ((null == o ? true : o.size) == null && [G.I4].includes(null != (n = e.application_id) ? n : "") ? a = F.intl.formatToPlainString(F.t["u//9By"], {
      count: "0",
      max: null != (r = null == t ? true : t.getMaxParticipants()) ? r : 0
    }) : (0, N.Cy)(e) && (null == o ? true : o.size) != null ? a = F.intl.formatToPlainString(F.t["JC/3xw"], {
      numSpeakers: o.size[0],
      numListeners: o.size[1] - o.size[0]
    }) : (null == o ? true : o.size) != null && o.size.length >= 2 && (a = 0 === o.size[1] ? F.intl.formatToPlainString(F.t.IM4J4e, {
      count: o.size[0]
    }) : F.intl.formatToPlainString(F.t["u//9By"], {
      count: o.size[0],
      max: o.size[1]
    })), (0, i.jsxs)("div", {
      className: B.state,
      children: [(0, i.jsx)("span", {
        title: u,
        children: c
      }), null != a ? (0, i.jsxs)("span", {
        children: [" ", a]
      }) : null]
    })) : null
  }
  render() {
    let e, {
        type: t,
        renderActions: n,
        className: r,
        application: a,
        onClose: s,
        onOpenGameProfileModal: l
      } = this.props,
      c = this.activity;
    if (null == c || c.type === V.$pd.CUSTOM_STATUS) return null;
    let u = "ActivityFeed" === t,
      d = "StreamPreview" === t,
      f = false;
    (0, M.A)(c) ? (e = this.renderXboxImage(), f = true) : null == (e = this.renderImage(c)) && (f = null != (e = this.renderGameImage(c)));
    let _ = this.renderName(c),
      h = this.renderDetails(c),
      m = this.renderState(c, a),
      E = this.renderTimePlayed(c),
      y = this.renderChannelDetails(c),
      b = null != n ? n() : null,
      O = this.renderTimeBar(c),
      v = ![e, _, h, m, E, O, b].some(e => null != e);
    return (0, i.jsxs)("div", {
      className: o()(this.getTypeClass("activity"), r),
      children: [this.renderHeader(v), (0, i.jsx)("div", {
        className: o()(f ? B.bodyAlignCenter : B.bodyNormal),
        children: (0, i.jsxs)("div", {
          className: B.activityDetails,
          children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, i.jsxs)(g.A.Child, {
            className: o()((0, P.t)(B, "content", f ? "GameImage" : null != e ? "Images" : "NoImages", t)),
            children: [(0, i.jsxs)(p.DUT, {
              className: o()(null != l && B.openGameProfile),
              onClick: null != l ? e => {
                l(e), null == s || s()
              } : true,
              children: [_, h, m, E]
            }), y, d ? null : O, u ? b : null]
          })]
        })
      }), d ? b : null, (0, i.jsx)(J, {
        activity: c
      })]
    })
  }
  constructor(...e) {
    super(...e), H(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      c()(null != e, "Spotify activity was null"), null == t || t(e)
    }), H(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: r
      } = this.props;
      c()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e)
    }), H(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      c()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
H($, "Types", q);
let ee = e => {
  var t, n, r;
  let a = (0, O.A)({
    location: "UserActivity",
    applicationId: null != (t = null == (n = e.application) ? true : n.id) ? t : null == (r = e.activity) ? true : r.application_id,
    source: b.Ob.UserProfile,
    sourceUserId: e.user.id,
    trackEntryPointImpression: true
  });
  return (0, i.jsx)($, K(Y({}, e), {
    onOpenGameProfileModal: a
  }))
};
ee.Types = q;
let et = ee