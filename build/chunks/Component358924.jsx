/** Chunk was on 1272 **/
/** chunk id: 358924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ey
}), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./472816.js"), require("./794429.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk438139 = require("./438139.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk726542 = require("./726542.js"),
  Chunk638880 = require("./638880.js"),
  Chunk655922 = require("./655922.js"),
  Chunk122810 = require("./122810.js"),
  Chunk833664 = require("./833664.js"),
  Chunk503438 = require("./503438.js"),
  Chunk420660 = require("./420660.js"),
  Chunk74433 = require("./74433.js"),
  Chunk206074 = require("./206074.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk933557 = require("./933557.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk379357 = require("./379357.js"),
  Chunk264165 = require("./264165.jsx"),
  Chunk548816 = require("./548816.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk386725 = require("./386725.js"),
  Chunk7284 = require("./7284.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk102172 = require("./102172.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk707409 = require("./707409.jsx"),
  Chunk365113 = require("./365113.js"),
  Chunk171516 = require("./171516.js"),
  Chunk103450 = require("./103450.js"),
  Chunk359110 = require("./359110.js"),
  Chunk769654 = require("./769654.js"),
  Chunk849171 = require("./849171.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk395361 = require("./395361.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk81063 = require("./81063.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk599706 = require("./599706.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk649519 = require("./649519.js");
let eo = [14, 14, 12, 12, 10, 8, 6],
  ec = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return (0, i.jsx)(f.Text, {
      className: s()(es.textContent, t),
      variant: "text-sm/semibold",
      children: e
    })
  },
  eu = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      n = V.o.getConfig({
        location: "nowplaying"
      }).demureActivityCards;
    return (0, i.jsx)(f.Text, {
      className: s()(es.textContent, t),
      variant: "text-xs/normal",
      color: n ? "text-muted" : true,
      children: e
    })
  },
  ed = (0, Chunk438139.Z)(e => {
    let {
      message: t
    } = e;
    return (0, i.jsx)("div", {
      className: es.__invalid_timestamp,
      children: t
    })
  }),
  ep = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)("section", {
      className: es.section,
      children: t
    })
  },
  ef = e => {
    let {
      inset: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: s()(es.separator, {
        [es.inset]: t
      }, n)
    })
  },
  eg = e => {
    let {
      onCloudPlayClick: t,
      analyticsLocations: n
    } = e;
    return (0, j.Z)({
      name: o.ImpressionNames.CLOUD_PLAY_CTA,
      type: o.ImpressionTypes.VIEW,
      properties: {
        location_stack: n
      }
    }), (0, i.jsx)(p.u, {
      text: ea.intl.string(ea.t.JVwWva),
      children: (0, i.jsx)(f.Button, {
        size: "sm",
        variant: "primary",
        icon: f.v3n,
        text: ea.intl.string(ea.t.YsIsPU),
        onClick: t
      })
    })
  },
  eh = e => {
    let {
      activity: t,
      user: n
    } = e, r = (0, z.e)({
      activity: t,
      user: n,
      supportsAskToJoin: false
    }), i = null != r;
    return {
      isJoinActivityButtonShown: i,
      joinActivityButtonAction: r,
      hasButton: i
    }
  },
  em = e => {
    let {
      activity: t,
      user: n
    } = e, {
      joinActivityButtonAction: r,
      isJoinActivityButtonShown: l
    } = eh({
      activity: t,
      user: n
    });
    if (l && null != r) {
      let {
        isJoining: e,
        handleJoinRequest: t,
        buttonCTA: n,
        tooltip: l,
        isEnabled: a
      } = r;
      return (0, i.jsx)(p.u, {
        text: l,
        asContainer: !a,
        children: (0, i.jsx)(f.Button, {
          size: "sm",
          variant: "secondary",
          icon: f.iWm,
          text: n,
          disabled: !a,
          loading: e,
          onClick: e => {
            e.stopPropagation(), t()
          }
        })
      })
    }
    return null
  },
  eb = e => {
    let {
      activity: t,
      analyticsLocations: n
    } = e, {
      application_id: r,
      name: l
    } = t, {
      data: a
    } = (0, P.IX)(r), s = (0, S.Z)({
      application: a,
      analyticsLocations: n
    }), o = (0, D.Nj)(u.z.CLOUD_PLAY_NEW_BADGE), c = (0, F.F)(r);
    return null == s || c ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(ef, {
        className: es.cloudPlaySectionSeparator
      }), (0, i.jsxs)("div", {
        className: es.cloudPlaySection,
        children: [(0, i.jsxs)("div", {
          className: es.cloudPlaySectionTextContainer,
          children: [o ? null : (0, i.jsx)(f.IGR, {
            text: ea.intl.string(ea.t.y2b7CA),
            color: d.Z.colors.BACKGROUND_BRAND.css
          }), (0, i.jsx)(f.Text, {
            variant: "text-xs/medium",
            children: ea.intl.formatToPlainString(ea.t.RmiYF3, {
              gameName: l
            })
          })]
        }), (0, i.jsx)(eg, {
          onCloudPlayClick: s,
          analyticsLocations: n
        })]
      })]
    })
  };
var e_ = ((r = e_ || {}).XBOX = "XBOX", r.SPOTIFY = "SPOTIFY", r.MULTIPLE = "MULTIPLE", r);
let eE = e => {
  let t, {
    src: n,
    onClick: r,
    onContextMenu: l
  } = e;
  switch (n) {
    case "XBOX":
      t = (0, i.jsx)(ee.Z, {
        className: es.headerIcon,
        color: d.Z.unsafe_rawColors.PRIMARY_300.css
      });
      break;
    case "SPOTIFY":
      t = (0, i.jsx)($.Z, {
        className: es.headerIcon,
        color: d.Z.unsafe_rawColors.SPOTIFY.css
      });
      break;
    case "MULTIPLE":
      t = (0, i.jsx)("div", {
        className: es.multipleIconWrapper,
        children: (0, i.jsx)(f.iWm, {
          size: "md",
          className: s()(es.headerIcon, es.multipleIcon),
          color: d.Z.unsafe_rawColors.PRIMARY_300.css
        })
      });
      break;
    default:
      t = (0, i.jsx)("img", {
        src: null != n ? n : true,
        alt: "",
        className: es.headerIcon
      })
  }
  return null != r || null != l ? (0, i.jsx)(f.P3F, {
    onClick: r,
    className: s()(null != r ? es.clickable : ""),
    onContextMenu: l,
    children: t
  }) : t
};
eE.Src = e_;
let eO = e => {
  let {
    priorityUser: t,
    title: n,
    subtitle: r,
    icon: l,
    onSubtitleClick: a,
    onIconClick: o,
    onContextMenu: c,
    guildId: u,
    displayNameFont: d
  } = e, p = V.o.useConfig({
    location: "nowplaying"
  }).demureActivityCards, g = (0, i.jsx)(f.Text, {
    color: p ? "text-muted" : "text-default",
    className: es.textContent,
    variant: "text-sm/normal",
    children: r
  });
  return (0, i.jsxs)("header", {
    className: null != l ? es.headerFull : es.headerSimple,
    children: [(0, i.jsx)(f.qEK, {
      src: t.user.getAvatarURL(u, 32),
      "aria-label": t.user.username,
      size: f.EFr.SIZE_32,
      className: es.headerAvatar,
      status: t.status,
      onContextMenu: c
    }), (0, i.jsxs)("div", {
      className: es.__invalid_headerDetails,
      children: [(0, i.jsx)(f.Text, {
        className: s()(es.textContent, d),
        variant: "text-md/semibold",
        children: n
      }), null != a ? (0, i.jsx)(f.P3F, {
        className: es.clickable,
        onClick: a,
        children: g
      }) : g]
    }), null != l && null != o ? (0, i.jsx)(f.P3F, {
      className: es.clickable,
      onClick: o,
      children: l
    }) : l]
  })
};
eO.Icon = eE;
let ev = e => {
  var t, n, {
      children: r,
      className: l,
      flat: a
    } = e,
    o = function(e, t) {
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
    }(e, ["children", "className", "flat"]);
  return (0, i.jsx)(f.tEY, {
    children: (0, i.jsx)(R.Z, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      noBackground: a,
      className: s()(l, es.wrapper),
      padded: !a
    }, o), n = n = {
      children: r
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
};
ev.Header = eO, ev.Body = e => {
  let {
    children: t
  } = e;
  return (0, i.jsx)(R.Z, {
    inset: true,
    padded: false,
    className: es.body,
    children: t
  })
}, ev.Separator = ef, ev.VoiceSection = e => {
  var t;
  let {
    guild: n,
    channel: r,
    partySize: a,
    members: o,
    onChannelContextMenu: c
  } = e, u = l.useRef(null), d = (0, A.ZP)(r, true), p = (0, K.EB)(n, 32), h = (0, K.gM)(n);
  return (0, i.jsx)(ep, {
    children: (0, i.jsxs)("div", {
      className: es.voiceSection,
      ref: u,
      onContextMenu: e => c(e, r),
      children: [(0, i.jsx)(f.P3F, {
        onClick: () => (0, W.X)(n.id),
        "aria-hidden": true,
        tabIndex: false,
        children: (0, i.jsxs)("div", {
          className: es.voiceSectionAssets,
          children: [null != p ? (0, i.jsx)("img", {
            alt: "",
            src: p,
            className: s()(es.voiceSectionGuildImage, es.largeImageMask)
          }) : (0, i.jsx)("div", {
            className: es.voiceSectionNoGuildImageWrapper,
            children: (0, i.jsx)("div", {
              className: es.voiceSectionNoGuildImage,
              style: {
                fontSize: null != (t = eo[h.length]) ? t : eo[eo.length - 1]
              },
              children: h
            })
          }), (0, i.jsx)("div", {
            className: es.voiceSectionIconWrapper,
            children: (0, i.jsx)(f.gj8, {
              size: "md",
              color: "currentColor",
              className: es.voiceSectionIcon
            })
          })]
        })
      }), (0, i.jsx)(f.P3F, {
        onClick: () => {
          g.default.selectVoiceChannel(r.id), (0, Y.Kh)(r.id)
        },
        focusProps: {
          ringTarget: u
        },
        children: (0, i.jsxs)("div", {
          className: es.voiceSectionDetails,
          children: [ec(n.name, es.voiceSectionText), eu(d, es.voiceSectionText)]
        })
      }), (0, i.jsx)(ei.Z, {
        partySize: a,
        members: o,
        guildId: n.id
      })]
    })
  })
}, ev.GameSection = e => {
  let {
    icon: t,
    name: n,
    partySize: r,
    members: l,
    activity: a
  } = e, {
    analyticsLocations: s
  } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_GAME_SECTION);
  return (0, i.jsxs)(ep, {
    children: [(0, i.jsxs)("div", {
      className: es.gameSection,
      children: [null != t ? (0, i.jsx)("img", {
        alt: "",
        src: t,
        className: es.gameSectionIcon
      }) : null, (0, i.jsxs)("div", {
        children: [ec(n), eu(ea.intl.formatToPlainString(ea.t.C4WXvc, {
          memberCount: r.totalSize
        }))]
      }), (0, i.jsx)(ei.Z, {
        partySize: r,
        members: l
      })]
    }), (0, i.jsx)(eb, {
      activity: a,
      analyticsLocations: s
    })]
  })
}, ev.RichPresenceSection = e => {
  var t, r, l, a, o;
  let {
    activity: c,
    getAssetImage: u,
    user: d
  } = e, {
    analyticsLocations: p
  } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION), {
    data: f
  } = (0, P.IX)(c.application_id), {
    assets: g,
    details: h,
    state: m,
    application_id: b
  } = c, {
    hasButton: _
  } = eh({
    activity: c,
    user: d
  }), E = null != (r = null == (t = (0, w.T7)(f)) ? true : t.src) ? r : n(211827), I = (0, S.Z)({
    application: f,
    analyticsLocations: p
  });
  return null != c.assets || (0, O.Z)(c) || null != I ? (0, i.jsxs)(ep, {
    children: [(0, i.jsxs)("div", {
      className: s()(es.activitySection, {
        [es.activitySectionWithButtons]: _
      }),
      children: [null != g && 0 !== Object.keys(g).length ? (0, i.jsxs)("div", {
        className: es.activitySectionAssets,
        children: [(0, i.jsx)("img", {
          alt: null != (l = g.large_text) ? l : "",
          src: null != (a = u(b, g.large_image, [160, 160])) ? a : E,
          className: s()(es.largeImage, {
            [es.largeImageMask]: null != g.small_image
          })
        }), null != g.small_image ? (0, i.jsx)("img", {
          alt: null != (o = g.small_text) ? o : "",
          src: u(b, g.small_image, [64, 64]),
          className: es.smallImage
        }) : null]
      }) : (0, i.jsx)("div", {
        className: es.activitySectionAssets,
        children: (0, i.jsx)("img", {
          alt: "",
          src: E,
          className: es.largeImage
        })
      }), (0, i.jsxs)("div", {
        className: es.activitySectionDetails,
        children: [ec(null != h && "" !== h ? h : c.name), null != m ? eu(m) : null, (() => {
          let {
            timestamps: e
          } = c;
          return null == e || !(0, v.Z)(c) || (0, y.Z)(c) ? null : eu((0, O.Z)(c) ? (0, i.jsx)(ed, {
            timestamps: e
          }) : (0, i.jsx)(B.ZP, {
            start: e.start,
            end: e.end,
            location: B.ZP.Locations.USER_ACTIVITY,
            className: es.__invalid_playTime
          }))
        })()]
      }), (0, i.jsx)(em, {
        activity: c,
        user: d
      })]
    }), (0, i.jsx)(eb, {
      activity: c,
      analyticsLocations: p
    })]
  }) : null
}, ev.XboxSection = e => {
  let {
    title: t
  } = e;
  return (0, i.jsx)(ep, {
    children: (0, i.jsxs)("div", {
      className: es.xboxSection,
      children: [(0, i.jsx)(ee.Z, {
        className: es.xboxSectionIcon
      }), (0, i.jsxs)("div", {
        className: es.__invalid_xboxSectionDetails,
        children: [ec(t), eu(ea.intl.string(ea.t["JG9r+9"]))]
      })]
    })
  })
}, ev.SpotifySection = e => {
  var t;
  let {
    activity: {
      assets: n,
      details: r,
      state: l,
      application_id: a
    },
    partySize: o,
    members: c,
    isSolo: u,
    getAssetImage: p
  } = e;
  return (0, i.jsx)(ep, {
    children: (0, i.jsxs)("div", {
      className: es.spotifySection,
      children: [null != n ? (0, i.jsxs)("div", {
        className: es.activitySectionAssets,
        children: [(0, i.jsx)("img", {
          alt: null != (t = n.large_text) ? t : "",
          src: p(a, n.large_image, [160, 160]),
          className: s()(es.largeImage, es.borderRadius0, {
            [es.largeImageMask]: null != n.small_image
          })
        }), u ? null : (0, i.jsx)($.Z, {
          className: es.smallImage,
          color: d.Z.unsafe_rawColors.SPOTIFY.css
        })]
      }) : (0, i.jsx)("div", {}), (0, i.jsxs)("div", {
        children: [null != r ? ec(r) : null, null != l ? eu(l.replace(/; /g, ", ")) : null]
      }), (0, i.jsx)(ei.Z, {
        minAvatarsShown: u ? 2 : 1,
        partySize: o,
        members: c
      })]
    })
  })
}, ev.TwitchSection = e => {
  let t, {
      activity: r,
      user: l,
      getAssetImage: a,
      guildId: o
    } = e,
    {
      name: c,
      details: u,
      assets: d,
      application_id: p
    } = r;
  if (null != d && (0, I.Z)(r)) {
    var g;
    t = (0, i.jsx)(L.Z, {
      className: es.twitchSectionPreviewWrapper,
      aspectRatio: 16 / 9,
      children: (0, i.jsxs)(f.P3F, {
        href: (0, E.Z)(r),
        tag: "a",
        target: "_blank",
        children: [(0, i.jsx)("img", {
          alt: null != (g = d.large_text) ? g : "",
          src: a(p, d.large_image, [900, 500]),
          className: es.twitchSectionPreview
        }), (0, i.jsx)("img", {
          src: n(497726),
          className: es.twitchSectionPlayButton,
          alt: ""
        })]
      })
    })
  }
  return (0, i.jsxs)(ep, {
    children: [(0, i.jsxs)("div", {
      className: s()({
        [es.twitchSectionSimple]: null == l,
        [es.twitchSectionFull]: null != l
      }),
      children: [(0, i.jsx)("img", {
        alt: "",
        src: b.Z.get(el.ABu.TWITCH).icon.lightSVG,
        className: es.twitchSectionIcon
      }), (0, i.jsxs)("div", {
        children: [ec(c), null != u ? eu(u) : null]
      }), null != l ? (0, i.jsx)(f.qEK, {
        src: l.getAvatarURL(o, 24),
        "aria-label": l.username,
        className: es.twitchSectionAvatar,
        size: f.EFr.SIZE_24
      }) : null]
    }), t]
  })
}, ev.ApplicationStreamingSection = e => {
  var t, n;
  let {
    activity: r,
    user: l,
    applicationStream: a,
    onPreviewClick: s,
    guildId: o
  } = e, u = (0, c.e7)([J.Z], () => J.Z.getChannel(a.channelId)), [d, p] = (0, G.wq)(u), g = (0, i.jsxs)(f.P3F, {
    onClick: d ? s : true,
    className: es.applicationStreamingPreviewWrapper,
    children: [(0, i.jsx)(H.Z, {
      stream: a,
      className: es.applicationStreamingPreviewSize
    }), (0, i.jsx)(f.Text, {
      className: es.applicationStreamingHoverText,
      variant: "text-sm/medium",
      color: "always-white",
      children: (0, G.P9)(p)
    })]
  }), h = null != (n = null == (t = (0, C.Z)(r, a)) ? true : t.activityText) ? n : ea.intl.string(ea.t.eXan7B), m = (0, M.Z)({
    userId: l.id,
    guildId: o
  }), b = (0, k.j)({
    displayNameStyles: m
  });
  return (0, i.jsxs)(ep, {
    children: [(0, i.jsxs)("div", {
      className: es.applicationStreamingSection,
      children: [(0, i.jsx)(f.qEK, {
        size: f.EFr.SIZE_32,
        src: l.getAvatarURL(o, 32),
        "aria-label": l.username,
        className: es.applicationStreamingAvatar
      }), (0, i.jsxs)("div", {
        children: [ec(er.ZP.getName(l), b), eu(h)]
      }), (0, i.jsx)(Z.ZP, {
        size: Z.ZP.Sizes.SMALL
      })]
    }), g]
  })
}, ev.EmbeddedActivitySection = e => {
  let {
    activity: t,
    channel: n,
    guildId: r,
    participants: a
  } = e, [s, o] = l.useState(null), u = t.application_id;
  l.useEffect(() => {
    null != u && (0, et.hR)(u, ["embedded_background"]).then(e => {
      let [t] = e;
      return o(t)
    })
  }, [u]);
  let d = (0, c.Wu)([X.default, Q.default], () => Array.from(a).map(e => Q.default.getId() === e ? null : X.default.getUser(e)).filter(en.lm)),
    p = (0, m.O)(),
    {
      analyticsLocations: g
    } = (0, N.ZP)();
  if (null == u) return null;
  let h = x.Z.getApplication(u);
  if (null == h) return null;
  let b = null != t.created_at && t.created_at > 0 ? {
      start: t.created_at
    } : true,
    E = (0, et.xF)(h.id, s, 300);
  return (0, i.jsxs)(ep, {
    children: [(0, i.jsxs)("div", {
      className: es.embeddedActivityTopRow,
      children: [(0, i.jsx)(U.Z, {
        game: h,
        size: U.A.XSMALL,
        className: es.embeddedActivityIcon
      }), (0, i.jsx)("div", {
        className: es.embeddedActivityName,
        children: (0, i.jsx)(f.Text, {
          variant: "text-sm/semibold",
          children: h.name
        })
      }), null != b ? (0, i.jsx)("div", {
        className: es.embeddedActivityTimeElapsed,
        children: (0, i.jsx)(f.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: (0, i.jsx)(ed, {
            timestamps: b
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: es.embeddedActivityPlayerContainer,
      children: [null != E ? (0, i.jsx)("img", {
        src: E,
        alt: h.name,
        className: es.embeddedActivityImage
      }) : null, (0, i.jsxs)("div", {
        className: es.embeddedActivityImageOverlay,
        children: [(0, i.jsx)(q.OV, {
          users: d,
          guildId: r,
          channelId: n.id
        }), (0, i.jsx)("div", {
          className: es.embeddedActivityJoinWrapper,
          children: (0, i.jsx)(f.Button, {
            variant: "primary",
            size: "sm",
            text: ea.intl.string(ea.t.VJlc0S),
            onClick: e => {
              e.stopPropagation(), (0, _.Z)({
                applicationId: u,
                activityChannelId: n.id,
                locationObject: p.location,
                analyticsLocations: g
              })
            }
          })
        })]
      })]
    })]
  })
};
let ey = ev