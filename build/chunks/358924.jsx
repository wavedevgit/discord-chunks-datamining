/** Chunk was on 1272 **/
/** chunk id: 358924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk438139 = require("./438139.js"),
  Chunk2052 = require("./2052.js"),
  Chunk726542 = require("./726542.js"),
  Chunk638880 = require("./638880.js"),
  Chunk655922 = require("./655922.js"),
  Chunk122810 = require("./122810.js"),
  Chunk833664 = require("./833664.js"),
  Chunk503438 = require("./503438.js"),
  Chunk420660 = require("./420660.js"),
  Chunk74433 = require("./74433.js"),
  Chunk906732 = require("./906732.js"),
  Chunk812206 = require("./812206.js"),
  Chunk933557 = require("./933557.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk264165 = require("./264165.jsx"),
  Chunk548816 = require("./548816.js"),
  Chunk925329 = require("./925329.js"),
  Chunk102172 = require("./102172.js"),
  Chunk871118 = require("./871118.js"),
  Chunk707409 = require("./707409.js"),
  Chunk359110 = require("./359110.js"),
  Chunk769654 = require("./769654.js"),
  Chunk849171 = require("./849171.js"),
  Chunk601964 = require("./601964.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk395361 = require("./395361.js"),
  Chunk639351 = require("./639351.js"),
  Chunk81063 = require("./81063.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk599706 = require("./599706.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk147049 = require("./147049.js");
let K = {
    SMALL: 64,
    LARGE: 160
  },
  q = [14, 14, 12, 12, 10, 8, 6],
  X = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return <u.Text className={o()(Y.textContent, t)} variant={"text-sm/semibold"}>{e}</u.Text>
  },
  Q = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return <u.Text className={o()(Y.textContent, t)} variant={"text-xs/normal"}>{e}</u.Text>
  },
  J = (0, Chunk438139.Z)(e => {
    let {
      message: t
    } = e;
    return <div className={Y.__invalid_timestamp}>{t}</div>
  }),
  $ = e => {
    let {
      children: t
    } = e;
    return <section className={Y.section}>{t}</section>
  };
class ee extends Chunk73800.Component {
  renderTimePlayed() {
    let e, {
        activity: t
      } = this.props,
      {
        timestamps: n
      } = exports;
    return null == require || !(0, Chunk833664.Z)(exports) || (0, Chunk503438.Z)(exports) ? null : Q((0, Chunk122810.Z)(exports) ? <J timestamps={require} /> : <Chunk707409.ZP start={require.start} end={require.end} location={Chunk707409.ZP.Locations.USER_ACTIVITY} className={Chunk147049.__invalid_playTime} />)
  }
  render() {
    var e, t;
    let {
      activity: {
        assets: r,
        details: l,
        state: a,
        application_id: s
      },
      getAssetImage: c
    } = this.props;
    return <$><div className={Chunk147049.activitySection}>{null != r && 0 !== Object.keys(r).length ? <div className={Chunk147049.activitySectionAssets}>{<img alt={null != (e = r.large_text) ? module : ""} src={Chunk692547(Chunk442837, r.large_image, [K.LARGE, K.LARGE])} className={o()(Chunk147049.largeImage, {
              [Chunk147049.largeImageMask]: null != r.small_image
            })} />}{null != r.small_image ? <img alt={null != (t = r.small_text) ? exports : ""} src={Chunk692547(Chunk442837, r.small_image, [K.SMALL, K.SMALL])} className={Chunk147049.smallImage} /> : null}</div> : <div className={Chunk147049.activitySectionAssets}><img alt={""} src={require("./211827.js")} className={Chunk147049.largeImage} /></div>}{<div>{X(null != Chunk73800 && "" !== Chunk73800 ? Chunk73800 : Chunk388032.intl.string(Chunk388032.t["2TbM/P"]))}{null != Chunk120356 ? Q(Chunk120356) : null}{this.renderTimePlayed()}</div>}</div></$>
  }
}
var et = ((r = et || {}).XBOX = "XBOX", r.SPOTIFY = "SPOTIFY", r.MULTIPLE = "MULTIPLE", r);
let en = e => {
  let t, {
    src: n,
    onClick: r,
    onContextMenu: l
  } = e;
  switch (n) {
    case "XBOX":
      t = <G.Z className={Y.headerIcon} color={c.Z.unsafe_rawColors.PRIMARY_300.css} />;
      break;
    case "SPOTIFY":
      t = <U.Z className={Y.headerIcon} color={c.Z.unsafe_rawColors.SPOTIFY.css} />;
      break;
    case "MULTIPLE":
      t = <div className={Y.multipleIconWrapper}><u.iWm size={"md"} className={o()(Y.headerIcon, Y.multipleIcon)} color={c.Z.unsafe_rawColors.PRIMARY_300.css} /></div>;
      break;
    default:
      t = <img src={null != n ? n : true} alt={""} className={Y.headerIcon} />
  }
  return null != r || null != l ? <u.P3F onClick={r} className={o()(null != r ? Y.clickable : "")} onContextMenu={l}>{t}</u.P3F> : t
};
en.Src = et;
let er = e => {
  let {
    priorityUser: t,
    title: n,
    subtitle: r,
    icon: l,
    onSubtitleClick: a,
    onIconClick: o,
    onContextMenu: s,
    guildId: c
  } = e, d = <u.Text color={"header-secondary"} className={Y.textContent} variant={"text-sm/normal"}>{r}</u.Text>;
  return <header className={null != l ? Y.headerFull : Y.headerSimple}>{<u.qEK src={t.user.getAvatarURL(c, 32)} aria-label={t.user.username} size={u.EFr.SIZE_32} className={Y.headerAvatar} status={t.status} onContextMenu={s} />}{<div className={Y.__invalid_headerDetails}>{<u.Text className={Y.textContent} variant={"text-md/semibold"}>{n}</u.Text>}{null != a ? <u.P3F className={Y.clickable} onClick={a}>{d}</u.P3F> : d}</div>}{null != l && null != o ? <u.P3F className={Y.clickable} onClick={o}>{l}</u.P3F> : l}</header>
};
er.Icon = en;
let ei = e => {
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
  return <u.tEY><T.Z{...t = function(e) {
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
      className: o()(l, Y.wrapper),
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
    }), t} /></u.tEY>
};
ei.Header = er, ei.Body = e => {
  let {
    children: t
  } = e;
  return <T.Z inset={true} padded={false} className={Y.body}>{t}</T.Z>
}, ei.Separator = e => {
  let {
    inset: t,
    className: n
  } = e;
  return <div className={o()(Y.separator, {
      [Y.inset]: t
    }, n)} />
}, ei.VoiceSection = e => {
  var t;
  let {
    guild: n,
    channel: r,
    partySize: a,
    members: s,
    onChannelContextMenu: c
  } = e, p = l.useRef(null), f = (0, C.ZP)(r, true), h = (0, R.EB)(n, 32), g = (0, R.gM)(n);
  return <$><div className={Y.voiceSection} ref={p} onContextMenu={e => c(e, r)}>{<u.P3F onClick={() => (0, w.X)(n.id)} aria-hidden={true} tabIndex={false}><div className={Y.voiceSectionAssets}>{null != h ? <img alt={""} src={h} className={o()(Y.voiceSectionGuildImage, Y.largeImageMask)} /> : <div className={Y.voiceSectionNoGuildImageWrapper}><div className={Y.voiceSectionNoGuildImage} style={{
                fontSize: null != (t = q[g.length]) ? t : q[q.length - 1]
              }}>{g}</div></div>}{<div className={Y.voiceSectionIconWrapper}><u.gj8 size={"md"} color={"currentColor"} className={Y.voiceSectionIcon} /></div>}</div></u.P3F>}{<u.P3F onClick={() => {
          d.default.selectVoiceChannel(r.id), (0, Z.Kh)(r.id)
        }} focusProps={{
          ringTarget: p
        }}><div className={Y.voiceSectionDetails}>{X(n.name, Y.voiceSectionText)}{Q(f, Y.voiceSectionText)}</div></u.P3F>}{<F.Z partySize={a} members={s} guildId={n.id} />}</div></$>
}, ei.GameSection = e => {
  let {
    icon: t,
    name: n,
    partySize: r,
    members: l
  } = e;
  return <$><div className={Y.gameSection}>{null != t ? <img alt={""} src={t} className={Y.gameSectionIcon} /> : null}{<div>{X(n)}{Q(W.intl.formatToPlainString(W.t.C4WXvb, {
          memberCount: r.totalSize
        }))}</div>}{<F.Z partySize={r} members={l} />}</div></$>
}, ei.RichPresenceSection = ee, ei.XboxSection = e => {
  let {
    title: t
  } = e;
  return <$><div className={Y.xboxSection}>{<G.Z className={Y.xboxSectionIcon} />}{<div className={Y.__invalid_xboxSectionDetails}>{X(t)}{Q(W.intl.string(W.t["JG9r+/"]))}</div>}</div></$>
}, ei.SpotifySection = e => {
  var t;
  let {
    activity: {
      assets: n,
      details: r,
      state: l,
      application_id: a
    },
    partySize: s,
    members: u,
    isSolo: d,
    getAssetImage: p
  } = e;
  return <$><div className={Y.spotifySection}>{null != n ? <div className={Y.activitySectionAssets}>{<img alt={null != (t = n.large_text) ? t : ""} src={p(a, n.large_image, [K.LARGE, K.LARGE])} className={o()(Y.largeImage, Y.borderRadius0, {
            [Y.largeImageMask]: null != n.small_image
          })} />}{d ? null : <U.Z className={Y.smallImage} color={c.Z.unsafe_rawColors.SPOTIFY.css} />}</div> : <div />}{<div>{null != r ? X(r) : null}{null != l ? Q(l) : null}</div>}{<F.Z minAvatarsShown={d ? 2 : 1} partySize={s} members={u} />}</div></$>
}, ei.TwitchSection = e => {
  let t, {
      activity: r,
      user: l,
      getAssetImage: a,
      guildId: s
    } = e,
    {
      name: c,
      details: d,
      assets: p,
      application_id: f
    } = r;
  if (null != p && (0, E.Z)(r)) {
    var g;
    t = <N.Z className={Y.twitchSectionPreviewWrapper} aspectRatio={16 / 9}><u.P3F href={(0, m.Z)(r)} tag={"a"} target={"_blank"}>{<img alt={null != (g = p.large_text) ? g : ""} src={a(f, p.large_image, [900, 500])} className={Y.twitchSectionPreview} />}{<img src={n(497726)} className={Y.twitchSectionPlayButton} alt={""} />}</u.P3F></N.Z>
  }
  return <$>{<div className={o()({
        [Y.twitchSectionSimple]: null == l,
        [Y.twitchSectionFull]: null != l
      })}>{<img alt={""} src={h.Z.get(z.ABu.TWITCH).icon.lightSVG} className={Y.twitchSectionIcon} />}{<div>{X(c)}{null != d ? Q(d) : null}</div>}{null != l ? <u.qEK src={l.getAvatarURL(s, 24)} aria-label={l.username} className={Y.twitchSectionAvatar} size={u.EFr.SIZE_24} /> : null}</div>}{t}</$>
}, ei.ApplicationStreamingSection = e => {
  var t, n;
  let {
    activity: r,
    user: l,
    applicationStream: a,
    onPreviewClick: o,
    guildId: c
  } = e, d = (0, s.e7)([k.Z], () => k.Z.getChannel(a.channelId)), [p, f] = (0, j.wq)(d), h = <u.P3F onClick={p ? o : true} className={Y.applicationStreamingPreviewWrapper}>{<x.Z stream={a} className={Y.applicationStreamingPreviewSize} />}{<u.Text className={Y.applicationStreamingHoverText} variant={"text-sm/medium"} color={"always-white"}>{(0, j.P9)(f)}</u.Text>}</u.P3F>, g = null != (n = null == (t = (0, y.Z)(r, a)) ? true : t.activityText) ? n : W.intl.string(W.t.eXan7O);
  return <$>{<div className={Y.applicationStreamingSection}>{<u.qEK size={u.EFr.SIZE_32} src={l.getAvatarURL(c, 32)} aria-label={l.username} className={Y.applicationStreamingAvatar} />}{<div>{X(B.ZP.getName(l))}{Q(g)}</div>}{<S.ZP size={S.ZP.Sizes.SMALL} />}</div>}{h}</$>
}, ei.EmbeddedActivitySection = e => {
  let {
    activity: t,
    channel: n,
    guildId: r,
    participants: a
  } = e, [o, c] = l.useState(null), d = t.application_id;
  l.useEffect(() => {
    null != d && (0, V.hR)(d, ["embedded_background"]).then(e => {
      let [t] = e;
      return c(t)
    })
  }, [d]);
  let p = (0, s.Wu)([M.default, D.default], () => Array.from(a).map(e => D.default.getId() === e ? null : M.default.getUser(e)).filter(H.lm)),
    h = (0, f.O)(),
    {
      analyticsLocations: m
    } = (0, v.ZP)();
  if (null == d) return null;
  let b = I.Z.getApplication(d);
  if (null == b) return null;
  let _ = null != t.created_at && t.created_at > 0 ? {
      start: t.created_at
    } : true,
    O = (0, V.xF)(b.id, o, 300);
  return <$>{<div className={Y.embeddedActivityTopRow}>{<P.Z game={b} size={P.Z.Sizes.XSMALL} className={Y.embeddedActivityIcon} />}{<div className={Y.embeddedActivityName}><u.Text variant={"text-sm/semibold"}>{b.name}</u.Text></div>}{null != _ ? <div className={Y.embeddedActivityTimeElapsed}><u.Text color={"text-muted"} variant={"text-sm/normal"}><J timestamps={_} /></u.Text></div> : null}</div>}{<div className={Y.embeddedActivityPlayerContainer}>{null != O ? <img src={O} alt={b.name} className={Y.embeddedActivityImage} /> : null}{<div className={Y.embeddedActivityImageOverlay}>{<L.OV users={p} guildId={r} channelId={n.id} />}{<div className={Y.embeddedActivityJoinWrapper}><u.zxk variant={"primary"} size={"sm"} text={W.intl.string(W.t.VJlc0d)} onClick={e => {
              e.stopPropagation(), (0, g.Z)({
                applicationId: d,
                activityChannelId: n.id,
                locationObject: h.location,
                analyticsLocations: m
              })
            }} /></div>}</div>}</div>}</$>
};
let el = ei