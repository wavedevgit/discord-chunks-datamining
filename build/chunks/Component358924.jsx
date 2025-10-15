/** Chunk was on 1272 **/
/** chunk id: 358924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eE
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk377171 = require("./377171.js"),
  Chunk379357 = require("./379357.js"),
  Chunk264165 = require("./264165.jsx"),
  Chunk548816 = require("./548816.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk102172 = require("./102172.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk707409 = require("./707409.jsx"),
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
  Chunk84822 = require("./84822.js");
let ea = [14, 14, 12, 12, 10, 8, 6],
  eo = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return (0, i.jsx)(f.Text, {
      className: o()(el.textContent, t),
      variant: "text-sm/semibold",
      children: e
    })
  },
  es = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return (0, i.jsx)(f.Text, {
      className: o()(el.textContent, t),
      variant: "text-xs/normal",
      children: e
    })
  },
  ec = (0, Chunk438139.Z)(e => {
    let {
      message: t
    } = e;
    return (0, i.jsx)("div", {
      className: el.__invalid_timestamp,
      children: t
    })
  }),
  eu = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)("section", {
      className: el.section,
      children: t
    })
  },
  ed = e => {
    let {
      inset: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: o()(el.separator, {
        [el.inset]: t
      }, n)
    })
  },
  ep = e => {
    let {
      onCloudPlayClick: t,
      analyticsLocations: n
    } = e;
    return (0, j.Z)({
      name: s.ImpressionNames.CLOUD_PLAY_CTA,
      type: s.ImpressionTypes.VIEW,
      properties: {
        location_stack: n
      }
    }), (0, i.jsx)(p.u, {
      text: ei.intl.string(ei.t.JVwWvb),
      children: (0, i.jsx)(f.Button, {
        size: "sm",
        variant: "primary",
        icon: f.v3n,
        text: ei.intl.string(ei.t.YsIsPT),
        onClick: t
      })
    })
  },
  ef = e => {
    let {
      activity: t,
      user: n
    } = e, r = (0, V.e)({
      activity: t,
      user: n,
      supportsAskToJoin: false
    }), i = null != r && r.isEnabled;
    return {
      isJoinActivityButtonShown: i,
      joinActivityButtonAction: r,
      hasButton: i
    }
  },
  eh = e => {
    let {
      activity: t,
      user: n
    } = e, {
      joinActivityButtonAction: r,
      isJoinActivityButtonShown: l
    } = ef({
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
  eg = e => {
    let {
      activity: t,
      analyticsLocations: n
    } = e, {
      application_id: r,
      name: l
    } = t, {
      data: a
    } = (0, P.IX)(r), o = (0, S.Z)({
      application: a,
      analyticsLocations: n
    }), s = (0, k.Nj)(u.z.CLOUD_PLAY_NEW_BADGE), c = (0, H.F)(r);
    return null == o || c ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(ed, {
        className: el.cloudPlaySectionSeparator
      }), (0, i.jsxs)("div", {
        className: el.cloudPlaySection,
        children: [(0, i.jsxs)("div", {
          className: el.cloudPlaySectionTextContainer,
          children: [s ? null : (0, i.jsx)(f.IGR, {
            text: ei.intl.string(ei.t.y2b7CA),
            color: w.Z.BG_BRAND
          }), (0, i.jsx)(f.Text, {
            variant: "text-xs/medium",
            children: ei.intl.formatToPlainString(ei.t.RmiYFx, {
              gameName: l
            })
          })]
        }), (0, i.jsx)(ep, {
          onCloudPlayClick: o,
          analyticsLocations: n
        })]
      })]
    })
  };
var em = ((r = em || {}).XBOX = "XBOX", r.SPOTIFY = "SPOTIFY", r.MULTIPLE = "MULTIPLE", r);
let eb = e => {
  let t, {
    src: n,
    onClick: r,
    onContextMenu: l
  } = e;
  switch (n) {
    case "XBOX":
      t = (0, i.jsx)(J.Z, {
        className: el.headerIcon,
        color: d.Z.unsafe_rawColors.PRIMARY_300.css
      });
      break;
    case "SPOTIFY":
      t = (0, i.jsx)(X.Z, {
        className: el.headerIcon,
        color: d.Z.unsafe_rawColors.SPOTIFY.css
      });
      break;
    case "MULTIPLE":
      t = (0, i.jsx)("div", {
        className: el.multipleIconWrapper,
        children: (0, i.jsx)(f.iWm, {
          size: "md",
          className: o()(el.headerIcon, el.multipleIcon),
          color: d.Z.unsafe_rawColors.PRIMARY_300.css
        })
      });
      break;
    default:
      t = (0, i.jsx)("img", {
        src: null != n ? n : true,
        alt: "",
        className: el.headerIcon
      })
  }
  return null != r || null != l ? (0, i.jsx)(f.P3F, {
    onClick: r,
    className: o()(null != r ? el.clickable : ""),
    onContextMenu: l,
    children: t
  }) : t
};
eb.Src = em;
let e_ = e => {
  let {
    priorityUser: t,
    title: n,
    subtitle: r,
    icon: l,
    onSubtitleClick: a,
    onIconClick: o,
    onContextMenu: s,
    guildId: c
  } = e, u = (0, i.jsx)(f.Text, {
    color: "header-secondary",
    className: el.textContent,
    variant: "text-sm/normal",
    children: r
  });
  return (0, i.jsxs)("header", {
    className: null != l ? el.headerFull : el.headerSimple,
    children: [(0, i.jsx)(f.qEK, {
      src: t.user.getAvatarURL(c, 32),
      "aria-label": t.user.username,
      size: f.EFr.SIZE_32,
      className: el.headerAvatar,
      status: t.status,
      onContextMenu: s
    }), (0, i.jsxs)("div", {
      className: el.__invalid_headerDetails,
      children: [(0, i.jsx)(f.Text, {
        className: el.textContent,
        variant: "text-md/semibold",
        children: n
      }), null != a ? (0, i.jsx)(f.P3F, {
        className: el.clickable,
        onClick: a,
        children: u
      }) : u]
    }), null != l && null != o ? (0, i.jsx)(f.P3F, {
      className: el.clickable,
      onClick: o,
      children: l
    }) : l]
  })
};
e_.Icon = eb;
let eO = e => {
  var t, n, {
      children: r,
      className: l
    } = e,
    a = function(e, t) {
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
    }(e, ["children", "className"]);
  return (0, i.jsx)(f.tEY, {
    children: (0, i.jsx)(D.Z, (t = function(e) {
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
      className: o()(l, el.wrapper),
      padded: true
    }, a), n = n = {
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
eO.Header = e_, eO.Body = e => {
  let {
    children: t
  } = e;
  return (0, i.jsx)(D.Z, {
    inset: true,
    padded: false,
    className: el.body,
    children: t
  })
}, eO.Separator = ed, eO.VoiceSection = e => {
  var t;
  let {
    guild: n,
    channel: r,
    partySize: a,
    members: s,
    onChannelContextMenu: c
  } = e, u = l.useRef(null), d = (0, A.ZP)(r, true), p = (0, Y.EB)(n, 32), g = (0, Y.gM)(n);
  return (0, i.jsx)(eu, {
    children: (0, i.jsxs)("div", {
      className: el.voiceSection,
      ref: u,
      onContextMenu: e => c(e, r),
      children: [(0, i.jsx)(f.P3F, {
        onClick: () => (0, z.X)(n.id),
        "aria-hidden": true,
        tabIndex: false,
        children: (0, i.jsxs)("div", {
          className: el.voiceSectionAssets,
          children: [null != p ? (0, i.jsx)("img", {
            alt: "",
            src: p,
            className: o()(el.voiceSectionGuildImage, el.largeImageMask)
          }) : (0, i.jsx)("div", {
            className: el.voiceSectionNoGuildImageWrapper,
            children: (0, i.jsx)("div", {
              className: el.voiceSectionNoGuildImage,
              style: {
                fontSize: null != (t = ea[g.length]) ? t : ea[ea.length - 1]
              },
              children: g
            })
          }), (0, i.jsx)("div", {
            className: el.voiceSectionIconWrapper,
            children: (0, i.jsx)(f.gj8, {
              size: "md",
              color: "currentColor",
              className: el.voiceSectionIcon
            })
          })]
        })
      }), (0, i.jsx)(f.P3F, {
        onClick: () => {
          h.default.selectVoiceChannel(r.id), (0, F.Kh)(r.id)
        },
        focusProps: {
          ringTarget: u
        },
        children: (0, i.jsxs)("div", {
          className: el.voiceSectionDetails,
          children: [eo(n.name, el.voiceSectionText), es(d, el.voiceSectionText)]
        })
      }), (0, i.jsx)(en.Z, {
        partySize: a,
        members: s,
        guildId: n.id
      })]
    })
  })
}, eO.GameSection = e => {
  let {
    icon: t,
    name: n,
    partySize: r,
    members: l,
    activity: a
  } = e, {
    analyticsLocations: o
  } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_GAME_SECTION);
  return (0, i.jsxs)(eu, {
    children: [(0, i.jsxs)("div", {
      className: el.gameSection,
      children: [null != t ? (0, i.jsx)("img", {
        alt: "",
        src: t,
        className: el.gameSectionIcon
      }) : null, (0, i.jsxs)("div", {
        children: [eo(n), es(ei.intl.formatToPlainString(ei.t.C4WXvb, {
          memberCount: r.totalSize
        }))]
      }), (0, i.jsx)(en.Z, {
        partySize: r,
        members: l
      })]
    }), (0, i.jsx)(eg, {
      activity: a,
      analyticsLocations: o
    })]
  })
}, eO.RichPresenceSection = e => {
  var t, r, l, a;
  let {
    activity: s,
    getAssetImage: c,
    user: u
  } = e, {
    analyticsLocations: d
  } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION), {
    data: p
  } = (0, P.IX)(s.application_id), {
    assets: f,
    details: h,
    state: g,
    application_id: m
  } = s, {
    hasButton: b
  } = ef({
    activity: s,
    user: u
  }), _ = null != (r = null == (t = (0, L.T7)(p)) ? true : t.src) ? r : n(211827), O = (0, S.Z)({
    application: p,
    analyticsLocations: d
  });
  return null != s.assets || (0, E.Z)(s) || null != O ? (0, i.jsxs)(eu, {
    children: [(0, i.jsxs)("div", {
      className: o()(el.activitySection, {
        [el.activitySectionWithButtons]: b
      }),
      children: [null != f && 0 !== Object.keys(f).length ? (0, i.jsxs)("div", {
        className: el.activitySectionAssets,
        children: [(0, i.jsx)("img", {
          alt: null != (l = f.large_text) ? l : "",
          src: c(m, f.large_image, [160, 160]),
          className: o()(el.largeImage, {
            [el.largeImageMask]: null != f.small_image
          })
        }), null != f.small_image ? (0, i.jsx)("img", {
          alt: null != (a = f.small_text) ? a : "",
          src: c(m, f.small_image, [64, 64]),
          className: el.smallImage
        }) : null]
      }) : (0, i.jsx)("div", {
        className: el.activitySectionAssets,
        children: (0, i.jsx)("img", {
          alt: "",
          src: _,
          className: el.largeImage
        })
      }), (0, i.jsxs)("div", {
        className: el.activitySectionDetails,
        children: [eo(null != h && "" !== h ? h : s.name), null != g ? es(g) : null, (() => {
          let {
            timestamps: e
          } = s;
          return null == e || !(0, v.Z)(s) || (0, y.Z)(s) ? null : es((0, E.Z)(s) ? (0, i.jsx)(ec, {
            timestamps: e
          }) : (0, i.jsx)(B.ZP, {
            start: e.start,
            end: e.end,
            location: B.ZP.Locations.USER_ACTIVITY,
            className: el.__invalid_playTime
          }))
        })()]
      }), (0, i.jsx)(eh, {
        activity: s,
        user: u
      })]
    }), (0, i.jsx)(eg, {
      activity: s,
      analyticsLocations: d
    })]
  }) : null
}, eO.XboxSection = e => {
  let {
    title: t
  } = e;
  return (0, i.jsx)(eu, {
    children: (0, i.jsxs)("div", {
      className: el.xboxSection,
      children: [(0, i.jsx)(J.Z, {
        className: el.xboxSectionIcon
      }), (0, i.jsxs)("div", {
        className: el.__invalid_xboxSectionDetails,
        children: [eo(t), es(ei.intl.string(ei.t["JG9r+/"]))]
      })]
    })
  })
}, eO.SpotifySection = e => {
  var t;
  let {
    activity: {
      assets: n,
      details: r,
      state: l,
      application_id: a
    },
    partySize: s,
    members: c,
    isSolo: u,
    getAssetImage: p
  } = e;
  return (0, i.jsx)(eu, {
    children: (0, i.jsxs)("div", {
      className: el.spotifySection,
      children: [null != n ? (0, i.jsxs)("div", {
        className: el.activitySectionAssets,
        children: [(0, i.jsx)("img", {
          alt: null != (t = n.large_text) ? t : "",
          src: p(a, n.large_image, [160, 160]),
          className: o()(el.largeImage, el.borderRadius0, {
            [el.largeImageMask]: null != n.small_image
          })
        }), u ? null : (0, i.jsx)(X.Z, {
          className: el.smallImage,
          color: d.Z.unsafe_rawColors.SPOTIFY.css
        })]
      }) : (0, i.jsx)("div", {}), (0, i.jsxs)("div", {
        children: [null != r ? eo(r) : null, null != l ? es(l) : null]
      }), (0, i.jsx)(en.Z, {
        minAvatarsShown: u ? 2 : 1,
        partySize: s,
        members: c
      })]
    })
  })
}, eO.TwitchSection = e => {
  let t, {
      activity: r,
      user: l,
      getAssetImage: a,
      guildId: s
    } = e,
    {
      name: c,
      details: u,
      assets: d,
      application_id: p
    } = r;
  if (null != d && (0, I.Z)(r)) {
    var h;
    t = (0, i.jsx)(R.Z, {
      className: el.twitchSectionPreviewWrapper,
      aspectRatio: 16 / 9,
      children: (0, i.jsxs)(f.P3F, {
        href: (0, O.Z)(r),
        tag: "a",
        target: "_blank",
        children: [(0, i.jsx)("img", {
          alt: null != (h = d.large_text) ? h : "",
          src: a(p, d.large_image, [900, 500]),
          className: el.twitchSectionPreview
        }), (0, i.jsx)("img", {
          src: n(497726),
          className: el.twitchSectionPlayButton,
          alt: ""
        })]
      })
    })
  }
  return (0, i.jsxs)(eu, {
    children: [(0, i.jsxs)("div", {
      className: o()({
        [el.twitchSectionSimple]: null == l,
        [el.twitchSectionFull]: null != l
      }),
      children: [(0, i.jsx)("img", {
        alt: "",
        src: b.Z.get(er.ABu.TWITCH).icon.lightSVG,
        className: el.twitchSectionIcon
      }), (0, i.jsxs)("div", {
        children: [eo(c), null != u ? es(u) : null]
      }), null != l ? (0, i.jsx)(f.qEK, {
        src: l.getAvatarURL(s, 24),
        "aria-label": l.username,
        className: el.twitchSectionAvatar,
        size: f.EFr.SIZE_24
      }) : null]
    }), t]
  })
}, eO.ApplicationStreamingSection = e => {
  var t, n;
  let {
    activity: r,
    user: l,
    applicationStream: a,
    onPreviewClick: o,
    guildId: s
  } = e, u = (0, c.e7)([K.Z], () => K.Z.getChannel(a.channelId)), [d, p] = (0, U.wq)(u), h = (0, i.jsxs)(f.P3F, {
    onClick: d ? o : true,
    className: el.applicationStreamingPreviewWrapper,
    children: [(0, i.jsx)(G.Z, {
      stream: a,
      className: el.applicationStreamingPreviewSize
    }), (0, i.jsx)(f.Text, {
      className: el.applicationStreamingHoverText,
      variant: "text-sm/medium",
      color: "always-white",
      children: (0, U.P9)(p)
    })]
  }), g = null != (n = null == (t = (0, C.Z)(r, a)) ? true : t.activityText) ? n : ei.intl.string(ei.t.eXan7O);
  return (0, i.jsxs)(eu, {
    children: [(0, i.jsxs)("div", {
      className: el.applicationStreamingSection,
      children: [(0, i.jsx)(f.qEK, {
        size: f.EFr.SIZE_32,
        src: l.getAvatarURL(s, 32),
        "aria-label": l.username,
        className: el.applicationStreamingAvatar
      }), (0, i.jsxs)("div", {
        children: [eo(et.ZP.getName(l)), es(g)]
      }), (0, i.jsx)(Z.ZP, {
        size: Z.ZP.Sizes.SMALL
      })]
    }), h]
  })
}, eO.EmbeddedActivitySection = e => {
  let {
    activity: t,
    channel: n,
    guildId: r,
    participants: a
  } = e, [o, s] = l.useState(null), u = t.application_id;
  l.useEffect(() => {
    null != u && (0, $.hR)(u, ["embedded_background"]).then(e => {
      let [t] = e;
      return s(t)
    })
  }, [u]);
  let d = (0, c.Wu)([Q.default, q.default], () => Array.from(a).map(e => q.default.getId() === e ? null : Q.default.getUser(e)).filter(ee.lm)),
    p = (0, m.O)(),
    {
      analyticsLocations: h
    } = (0, N.ZP)();
  if (null == u) return null;
  let g = x.Z.getApplication(u);
  if (null == g) return null;
  let b = null != t.created_at && t.created_at > 0 ? {
      start: t.created_at
    } : true,
    O = (0, $.xF)(g.id, o, 300);
  return (0, i.jsxs)(eu, {
    children: [(0, i.jsxs)("div", {
      className: el.embeddedActivityTopRow,
      children: [(0, i.jsx)(M.Z, {
        game: g,
        size: M.A.XSMALL,
        className: el.embeddedActivityIcon
      }), (0, i.jsx)("div", {
        className: el.embeddedActivityName,
        children: (0, i.jsx)(f.Text, {
          variant: "text-sm/semibold",
          children: g.name
        })
      }), null != b ? (0, i.jsx)("div", {
        className: el.embeddedActivityTimeElapsed,
        children: (0, i.jsx)(f.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: (0, i.jsx)(ec, {
            timestamps: b
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: el.embeddedActivityPlayerContainer,
      children: [null != O ? (0, i.jsx)("img", {
        src: O,
        alt: g.name,
        className: el.embeddedActivityImage
      }) : null, (0, i.jsxs)("div", {
        className: el.embeddedActivityImageOverlay,
        children: [(0, i.jsx)(W.OV, {
          users: d,
          guildId: r,
          channelId: n.id
        }), (0, i.jsx)("div", {
          className: el.embeddedActivityJoinWrapper,
          children: (0, i.jsx)(f.Button, {
            variant: "primary",
            size: "sm",
            text: ei.intl.string(ei.t.VJlc0d),
            onClick: e => {
              e.stopPropagation(), (0, _.Z)({
                applicationId: u,
                activityChannelId: n.id,
                locationObject: p.location,
                analyticsLocations: h
              })
            }
          })
        })]
      })]
    })]
  })
};
let eE = eO