/** Chunk was on web.js **/
/** chunk id: 942596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => z,
  Z: () => et
}), require("./997841.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk95015 = require("./95015.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk438139 = require("./438139.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk686546 = require("./686546.jsx"),
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

function V(e, t, n) {
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
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = 40;
var z = function(e) {
  return e.ACTIVITY_FEED = "ActivityFeed", e.STREAM_PREVIEW = "StreamPreview", e.VOICE_CHANNEL = "VoiceChannel", e
}({});
let q = {
    StreamPreview: [108, 60],
    VoiceChannel: [108, 60],
    ActivityFeed: [900, 500]
  },
  Q = (0, Chunk438139.Z)(class extends Chunk473749.PureComponent {
    render() {
      return (0, Chunk54381.jsx)("div", {
        className: Chunk206733.timestamp,
        children: this.props.message
      })
    }
  });

function X(e) {
  let {
    activity: t
  } = e, n = null;
  return (0, j.Z)(t) && (n = Z.ABu.SPOTIFY), null != t.platform && [Z.M7m.PS4, Z.M7m.PS5].includes(t.platform) && (n = Z.ABu.PLAYSTATION), n
}

function J(e) {
  let {
    activity: t
  } = e, n = (0, m.ZP)(), r = X({
    activity: t
  });
  if (null == r) return null;
  let a = h.Z.get(r);
  return (0, i.jsx)("img", {
    alt: "",
    src: (0, f.ap)(n) ? a.icon.lightSVG : a.icon.darkSVG,
    className: F.platformIcon
  })
}
class $ extends(r = Chunk473749.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != exports && (null == module ? true : module.type) !== Chunk981631.IIU.PLAYING && (null == module ? true : module.type) !== Chunk981631.IIU.WATCHING && (null == module ? true : module.type) !== Chunk981631.IIU.LISTENING && (null == module ? true : module.type) !== Chunk981631.IIU.HANG_STATUS ? {
      type: Chunk981631.IIU.PLAYING,
      name: Chunk388032.intl.string(Chunk388032.t.eXan7B)
    } : module
  }
  getTypeClass(e, t) {
    return (0, w.l)(F, e, this.props.type, t)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, Chunk420660.Z)(this.activity) && "ActivityFeed" === this.props.type
  }
  renderHeader(e) {
    let t, {
        hideHeader: n,
        activityGuild: r,
        showChannelDetails: a,
        renderHeaderAccessory: o
      } = this.props,
      l = this.activity;
    if (n || null == l) return null;
    let {
      name: c
    } = l;
    switch (l.type) {
      case Z.IIU.STREAMING:
        t = B.intl.formatToPlainString(B.t.Dzgz4u, {
          platform: [Z.ABu.TWITCH, Z.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : h.Z.get(Z.ABu.TWITCH).name
        });
        break;
      case Z.IIU.LISTENING:
        t = B.intl.formatToPlainString(B.t["5sYPnr"], {
          name: c
        });
        break;
      case Z.IIU.WATCHING:
        t = B.intl.formatToPlainString(B.t.Ge29Zy, {
          name: c
        });
        break;
      case Z.IIU.PLAYING:
        t = (0, D.Z)(l);
        break;
      case Z.IIU.COMPETING:
        t = B.intl.formatToPlainString(B.t.SQCo6D, {
          name: c
        })
    }
    if (null != r) {
      var f;
      t = (0, u.yE)(null != (f = null == l ? true : l.flags) ? f : 0, Z.xjy.EMBEDDED) ? l.type === Z.IIU.WATCHING ? B.intl.formatToPlainString(B.t["M/L8ot"], {
        guildName: r.name
      }) : B.intl.formatToPlainString(B.t["4chKQu"], {
        guildName: r.name
      }) : B.intl.formatToPlainString(B.t.sddlGK, {
        server: r.name
      })
    }
    return (null == l ? true : l.type) === Z.IIU.HANG_STATUS && (t = B.intl.string(B.t["74vS/x"])), (0, i.jsxs)("div", {
      className: F.headerContainer,
      children: [(0, i.jsx)(p.Heading, {
        className: s()((0, w.l)(F, "headerText", e ? "EmptyBody" : "Normal")),
        variant: a ? "text-xs/semibold" : "eyebrow",
        children: (0, i.jsx)(d.Z, {
          children: t
        })
      }), null == o ? true : o()]
    })
  }
  renderXboxImage() {
    return (0, Chunk54381.jsx)("div", {
      className: Chunk206733.assets,
      children: (0, Chunk54381.jsx)("img", {
        alt: "",
        src: Chunk726542.Z.get(Chunk981631.ABu.XBOX).icon.customPNG,
        className: s()(this.getTypeClass("assetsLargeImage", "Xbox"))
      })
    })
  }
  renderImage(e) {
    var t, n, r;
    let o, l, {
      user: c
    } = this.props;
    if (e.type === Z.IIU.HANG_STATUS) return (0, i.jsx)("div", {
      className: F.assets,
      children: (0, i.jsx)(I.Z, {
        userId: c.id,
        hangStatusActivity: e,
        size: K,
        className: s()(F.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
      })
    });
    let {
      type: u
    } = this.props, {
      assets: d,
      application_id: f
    } = e;
    if (null == d || null == d.large_image && null == d.small_image) return null;
    (0, k.Z)(e) && (o = q[u]);
    let _ = (0, j.Z)(e),
      m = null != d.large_image ? (0, i.jsx)("img", {
        alt: null != (t = d.large_text) ? t : "",
        src: (0, P.xF)(f, d.large_image, null != o ? o : [G.Si.LARGE, G.Si.LARGE]),
        className: s()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? Z.ABu.TWITCH : ""), {
          [null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != d.small_image,
          [F.assetsLargeImageSpotify]: _
        })
      }) : null;
    if (_) m = (0, i.jsx)(p.Anchor, {
      onClick: this.handleOpenSpotifyAlbum,
      children: m
    });
    else if ((0, N.dS)(e)) {
      let t = (0, N.rq)(e);
      if (null == t) return null;
      m = (0, i.jsx)(E.ZP, {
        mask: E.ZP.Masks.SQUIRCLE,
        width: G.Si.SMALL,
        height: G.Si.SMALL,
        children: (0, i.jsx)("img", {
          src: null != (r = R.ZP.getGuildIconURL({
            id: t.guildId,
            icon: d.small_image,
            size: G.Si.SMALL
          })) ? r : true,
          className: F.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (m = (0, i.jsxs)("div", {
      className: F.twitchImageContainer,
      children: [(0, i.jsxs)("div", {
        className: F.twitchImageOverlay,
        children: [(0, i.jsx)(p.H, {
          className: F.streamName,
          children: e.name
        }), (0, i.jsx)("div", {
          className: F.streamGame,
          children: B.intl.format(B.t.gmCZRY, {
            game: e.details
          })
        })]
      }), (0, i.jsx)(p.Anchor, {
        className: F.twitchBackgroundImage,
        href: e.url,
        children: m
      })]
    })), (0, N.dS)(e) || null == d.small_image || (l = (0, i.jsx)(p.aML, {
      text: "" !== d.small_text ? d.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, i.jsx)("img", H({
          alt: null != (t = d.small_text) ? t : "",
          src: (0, P.xF)(f, d.small_image, [G.Si.SMALL, G.Si.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == m ? "WithoutLargeImage" : true)
        }, e))
      }
    })), null == m) ? (0, i.jsx)("div", {
      className: F.assets,
      children: l
    }) : (0, i.jsxs)("div", {
      className: F.assets,
      children: [(0, i.jsx)(p.aML, {
        text: null != d.large_text ? d.large_text : null,
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
    return null != e.assets || (0, x.Z)(e) || e.type !== Z.IIU.PLAYING || "ActivityFeed" === n || t.bot ? null : null == r && null != a ? (0, i.jsx)("div", {
      className: s()(F.gameIcon, F.screenshareIcon)
    }) : (0, i.jsx)(b.Z, {
      className: F.gameIcon,
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
      type: o
    } = e;
    if (o === Z.IIU.CUSTOM_STATUS) return null;
    let l = (0, L.Z)(e),
      c = e.name,
      u = c;
    return (o === Z.IIU.HANG_STATUS ? u = (0, S.O8)(t.id, e) : l && null != n ? u = (0, i.jsx)("span", {
      className: F.activityName,
      children: u
    }) : !l && (c = a, u = a, (0, j.Z)(e) && null != e.sync_id && null != a ? u = (0, i.jsx)(p.Anchor, {
      className: F.bodyLink,
      onClick: this.handleOpenSpotifyTrack,
      children: a
    }) : (0, N.dS)(e) && (u = e.name)), null == u) ? null : (0, i.jsx)(p.Text, {
      title: c,
      variant: "text-sm/semibold",
      className: s()((0, w.l)(F, "name", t.bot ? "wrap" : "normal")),
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
      o = n,
      s = n;
    if (e.type === Z.IIU.CUSTOM_STATUS) o = r;
    else if (e.type === Z.IIU.HANG_STATUS && null != a) o = B.intl.formatToPlainString(B.t.IAZiW2, {
      guildName: a.name
    }), t = () => {
      (0, C.X)(a.id)
    };
    else if (!(0, L.Z)(e)) {
      if (o = r, s = r, (0, j.Z)(e) && null != r) {
        let t = (t, n) => (0, i.jsx)(A.Z, {
          artists: r,
          linkClassName: F.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n);
        o = B.intl.format(B.t.uU9le8, {
          artists: s,
          artistsHook: t
        })
      } else if ((0, N.dS)(e)) {
        var l;
        o = null == (l = e.assets) ? true : l.small_text
      }
    }
    return null == o || "" === o ? null : ((0, k.Z)(e) && (o = B.intl.formatToPlainString(B.t.gmCZRY, {
      game: o
    })), null != t) ? (0, i.jsx)(p.P3F, {
      onClick: t,
      title: null != s ? s : true,
      className: F.clickableDetails,
      children: o
    }) : (0, i.jsx)("div", {
      title: null != s ? s : true,
      className: (0, k.Z)(e) || (0, j.Z)(e) ? F.detailsWrap : F.details,
      children: o
    })
  }
  renderChannelDetails(e) {
    let {
      activityGuild: t,
      showChannelDetails: n,
      channel: r
    } = this.props;
    return n && null != t ? null == r ? (0, i.jsx)("div", {
      className: (0, k.Z)(e) || (0, j.Z)(e) ? F.detailsWrap : F.details,
      children: B.intl.format(B.t["hq/Qze"], {
        guildName: t.name
      })
    }) : (0, i.jsxs)("div", {
      className: s()((0, k.Z)(e) || (0, j.Z)(e) ? F.detailsWrap : F.details, F.guildDetails),
      children: [(0, i.jsx)(v.Z, {
        guild: t,
        size: v.Z.Sizes.SMOL,
        className: F.guildIcon
      }), (0, i.jsx)(p.Fbu, {
        size: "xxs",
        color: "currentColor"
      }), (0, i.jsxs)("div", {
        className: F.voiceChannelInfo,
        children: [(0, i.jsx)(p.gj8, {
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
    if (!(0, L.Z)(e) || (0, j.Z)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, x.Z)(e) ? (0, i.jsx)(Q, {
      timestamps: n
    }) : (0, i.jsx)(T.ZP, {
      start: n.start,
      location: T.ZP.Locations.USER_ACTIVITY,
      className: F.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, j.Z)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: r
    } = t;
    return null == n || null == r ? null : (0, i.jsx)(U.Z, {
      start: n,
      end: r,
      className: this.getTypeClass("timeBar"),
      themed: "VoiceChannel" === this.props.type
    })
  }
  renderState(e, t) {
    var n, r;
    let a, {
        state: o,
        party: s,
        assets: l
      } = e,
      c = o,
      u = o;
    if (!(0, L.Z)(e) && (c = null == l ? true : l.large_text, u = null == l ? true : l.large_text, (0, j.Z)(e) && null != c)) {
      let t = (t, n) => null != e.sync_id && null != u ? (0, i.jsx)(p.Anchor, {
        className: F.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: u
      }, n) : u;
      c = B.intl.format(B.t.vOLBEy, {
        album: u,
        albumHook: t
      })
    }
    return null != c && "" !== c && e.type !== Z.IIU.CUSTOM_STATUS || (0, N.dS)(e) ? ((null == s ? true : s.size) == null && [G.Zc].includes(null != (n = e.application_id) ? n : "") ? a = B.intl.formatToPlainString(B.t["u//9By"], {
      count: "0",
      max: null != (r = null == t ? true : t.getMaxParticipants()) ? r : 0
    }) : (0, N.dS)(e) && (null == s ? true : s.size) != null ? a = B.intl.formatToPlainString(B.t["JC/3xw"], {
      numSpeakers: s.size[0],
      numListeners: s.size[1] - s.size[0]
    }) : (null == s ? true : s.size) != null && s.size.length >= 2 && (a = 0 === s.size[1] ? B.intl.formatToPlainString(B.t.IM4J4e, {
      count: s.size[0]
    }) : B.intl.formatToPlainString(B.t["u//9By"], {
      count: s.size[0],
      max: s.size[1]
    })), (0, i.jsxs)("div", {
      className: F.state,
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
        onClose: o,
        onOpenGameProfileModal: l
      } = this.props,
      c = this.activity;
    if (null == c || c.type === Chunk981631.IIU.CUSTOM_STATUS) return null;
    let u = "ActivityFeed" === exports,
      d = "StreamPreview" === exports,
      f = false;
    (0, Chunk802856.Z)(c) ? (e = this.renderXboxImage(), f = true) : null == (e = this.renderImage(c)) && (f = null != (e = this.renderGameImage(c)));
    let _ = this.renderName(c),
      m = this.renderDetails(c),
      h = this.renderState(c, Chunk473749),
      E = this.renderTimePlayed(c),
      b = this.renderChannelDetails(c),
      y = null != require ? require() : null,
      O = this.renderTimeBar(c),
      v = ![module, Chunk438139, Chunk410030, Chunk726542, Chunk686546, Chunk168524, Chunk810568].some(e => null != e);
    return (0, Chunk54381.jsxs)("div", {
      className: s()(this.getTypeClass("activity"), r),
      children: [this.renderHeader(Chunk565138), (0, Chunk54381.jsx)("div", {
        className: s()(Chunk780384 ? Chunk206733.bodyAlignCenter : Chunk206733.bodyNormal),
        children: (0, Chunk54381.jsxs)("div", {
          className: Chunk206733.activityDetails,
          children: [module, this.isStreamerOnTypeActivityFeed() ? null : (0, Chunk54381.jsxs)(Chunk600164.Z.Child, {
            className: s()((0, Chunk153066.l)(Chunk206733, "content", Chunk780384 ? "GameImage" : null != module ? "Images" : "NoImages", exports)),
            children: [(0, Chunk54381.jsxs)(Chunk481060.P3F, {
              className: s()(null != Chunk512722 && Chunk206733.openGameProfile),
              onClick: null != Chunk512722 ? e => {
                l(e), null == o || o()
              } : true,
              children: [Chunk438139, Chunk410030, Chunk726542, Chunk686546]
            }), Chunk925329, Chunk194983 ? null : Chunk168524, Chunk95015 ? Chunk810568 : null]
          })]
        })
      }), Chunk194983 ? Chunk810568 : null, (0, Chunk54381.jsx)(J, {
        activity: c
      })]
    })
  }
  constructor(...e) {
    super(...e), V(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      c()(null != e, "Spotify activity was null"), null == t || t(e)
    }), V(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: r
      } = this.props;
      c()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e)
    }), V(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      c()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
V($, "Types", z);
let ee = e => {
  var t, n, r;
  let a = (0, O.Z)({
    location: "UserActivity",
    applicationId: null != (r = null == (t = e.application) ? true : t.id) ? r : null == (n = e.activity) ? true : n.application_id,
    source: y.m1.UserProfile,
    sourceUserId: e.user.id,
    trackEntryPointImpression: true
  });
  return (0, i.jsx)($, W(H({}, e), {
    onOpenGameProfileModal: a
  }))
};
ee.Types = z;
let et = ee