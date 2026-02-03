/** Chunk was on web.js **/
/** chunk id: 806911, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ep
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk367513 = require("./367513.js"),
  Chunk951001 = require("./951001.js"),
  Chunk398590 = require("./398590.js"),
  Chunk31728 = require("./31728.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk313961 = require("./313961.js"),
  Chunk520698 = require("./520698.js"),
  Chunk525788 = require("./525788.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk47167 = require("./47167.js"),
  Chunk958713 = require("./958713.js"),
  Chunk525505 = require("./525505.js"),
  Chunk652896 = require("./652896.js"),
  Chunk880144 = require("./880144.js"),
  Chunk638480 = require("./638480.js"),
  Chunk338771 = require("./338771.js"),
  Chunk991701 = require("./991701.jsx"),
  Chunk574172 = require("./574172.js"),
  Chunk976860 = require("./976860.js"),
  Chunk461782 = require("./461782.jsx"),
  Chunk447404 = require("./447404.jsx"),
  Chunk271195 = require("./271195.jsx"),
  Chunk905216 = require("./905216.jsx"),
  Chunk128286 = require("./128286.jsx"),
  Chunk528057 = require("./528057.jsx"),
  Chunk352018 = require("./352018.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk788318 = require("./788318.js"),
  Chunk803301 = require("./803301.js"),
  Chunk531685 = require("./531685.js"),
  Chunk954571 = require("./954571.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk712577 = require("./712577.jsx"),
  Chunk566331 = require("./566331.jsx"),
  Chunk768088 = require("./768088.jsx"),
  Chunk256195 = require("./256195.jsx"),
  Chunk729365 = require("./729365.jsx"),
  Chunk566566 = require("./566566.jsx"),
  Chunk222692 = require("./222692.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk612071 = require("./612071.js"),
  Chunk976092 = require("./976092.js");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ec(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      el(e, t, n[t])
    })
  }
  return e
}

function eu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ed(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eu(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class ef extends Chunk64700.PureComponent {
  get viewProperties() {
    let {
      participantOnScreen: e,
      currentUserId: t,
      channel: n
    } = this.props, r = (0, ea.Ay)(e), i = null != e && e.type !== ea.lp.ACTIVITY && e.user.id === t;
    return {
      canPopout: r && !i,
      canSettings: r && i,
      canStopStream: r,
      canSeeViewers: r,
      canSeeParticipantName: ((null == e ? true : e.type) === ea.lp.STREAM || (null == e ? true : e.type) === ea.lp.USER) && n.type !== ei.rbe.DM,
      canDisconnect: !r,
      isSelf: i
    }
  }
  get streamerPaused() {
    let {
      isMainWindowFocused: e,
      activeSelfStream: t,
      participantOnScreen: n
    } = this.props;
    return null != t && (null == n ? true : n.id) === (0, T._z)(t) && !e
  }
  get activeStreamForSelectedParticipant() {
    let {
      participantOnScreen: e,
      activeStreams: t
    } = this.props;
    return (0, ea.Ay)(e) ? t.find(t => (0, T._z)(t) === e.id) : null
  }
  getScreenMessage() {
    let {
      participantOnScreen: e,
      currentUserId: t
    } = this.props;
    if (!(0, ea.Ay)(e)) return null;
    let n = this.activeStreamForSelectedParticipant;
    return null == n ? null : (0, N.A)(n, e.user, e.user.id === t, this.streamerPaused)
  }
  componentDidMount() {
    let {
      channel: e
    } = this.props;
    q.default.track(ei.HAw.VIDEO_LAYOUT_TOGGLED, ec({
      video_layout: "pip"
    }, (0, E.QS)(e.id)))
  }
  componentWillUnmount() {
    let {
      channel: e
    } = this.props;
    q.default.track(ei.HAw.VIDEO_LAYOUT_TOGGLED, ec({
      video_layout: y.A.getLayout(e.id)
    }, (0, E.QS)(e.id)))
  }
  renderStreamState() {
    let e = this.activeStreamForSelectedParticipant,
      {
        participantOnScreen: t,
        width: n,
        isOverlayRenderingVideo: i,
        videoStreamError: a,
        cameraEncodeError: o
      } = this.props;
    if (null != a && null == o) {
      if ((null == t ? true : t.type) === ea.lp.STREAM) return (0, r.jsx)($.A, {
        stream: t.stream,
        width: n,
        avError: a
      });
      else if ((null == t ? true : t.type) === ea.lp.USER) return (0, r.jsx)(en.A, {
        userId: t.user.id,
        width: n,
        avError: a
      })
    }
    switch (true) {
      case (null == e ? true : e.state) === ei.XYD.ENDED:
        return (0, r.jsx)(J.A, {
          stream: e,
          width: n
        });
      case (null == e ? true : e.state) === ei.XYD.FAILED:
        return (0, r.jsx)($.A, {
          stream: e,
          width: n
        });
      case (null == t ? true : t.type) === ea.lp.HIDDEN_STREAM:
        return (0, r.jsx)(ee.A, {
          participant: t,
          width: n
        });
      case i:
        return (0, r.jsx)(et.A, {
          width: n
        })
    }
    return null
  }
  renderParticipantName() {
    let {
      channel: e,
      participantOnScreen: t
    } = this.props;
    if ((null == t ? true : t.type) === ea.lp.STREAM || (null == t ? true : t.type) === ea.lp.USER) {
      var n;
      let i = null != (n = Z.Ay.getNickname(e.getGuildId(), e.id, t.user)) ? n : Q.Ay.getName(t.user);
      return (0, r.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "always-white",
        className: eo.F8,
        lineClamp: 1,
        children: i
      })
    }
    return null
  }
  render() {
    let {
      channel: e,
      streamId: t,
      participantOnScreen: n,
      isVideoEnabled: i,
      width: a
    } = this.props, o = (0, A.m1)(e, Y.default, H.A), s = (null == n ? true : n.id) === V.default.getId() && i, l = this.renderStreamState(), c = this.activeStreamForSelectedParticipant, u = null;
    return (null == n ? true : n.type) !== ea.lp.ACTIVITY && (null != l ? u = l : ((null == n ? true : n.type) === ea.lp.USER || (null == n ? true : n.type) === ea.lp.STREAM) && (u = (0, r.jsx)(X.A, {
      paused: this.streamerPaused,
      streamId: t,
      component: B.A.getVideoComponent(),
      mirror: s,
      children: (0, r.jsx)(R.A, {
        size: d._3J.SIZE_80,
        src: null == n ? true : n.user.getAvatarURL(e.guild_id, 80),
        "aria-label": null == n ? true : n.user.username,
        guildId: e.guild_id,
        userId: null == n ? true : n.user.id
      })
    }))), (0, r.jsx)(L.Ay, {
      timeout: 1800,
      children: e => {
        var t;
        return (0, r.jsx)(M.A, ed(ec({
          title: o,
          backgroundKey: null != (t = null == n ? true : n.id) ? t : "",
          screenMessage: null == l ? this.getScreenMessage() : null,
          onJumpToChannel: this.handleJumpToChannel,
          onHide: this.handleHidePIP,
          renderBottomLeftControls: this.renderBottomLeftControls,
          renderBottomRightControls: this.renderBottomRightControls,
          preventIdleComponent: x.A,
          width: a,
          className: es.a8,
          videoControlsClassName: (null == c ? true : c.state) === ei.XYD.ENDED ? eo._v : true
        }, e), {
          children: u
        }))
      }
    })
  }
  constructor(...e) {
    super(...e), el(this, "state", {
      screensharePopoutOpen: false
    }), el(this, "_ref", i.createRef()), el(this, "handleVideo", e => {
      f.A.setVideoEnabled(e)
    }), el(this, "handleEnableVideoWhenUnavailable", () => {
      let {
        isVideoAvailable: e
      } = this.props;
      e ? this.handleVideo(true) : (0, er.A)()
    }), el(this, "handleJumpToChannel", () => {
      var e;
      let {
        channel: t
      } = this.props;
      (0, h.bz)();
      let n = null != (e = t.getGuildId()) ? e : ei.ME;
      (0, D.uh)(n, t.id), _.A.channelListScrollTo(n, t.id);
      let r = this.activeStreamForSelectedParticipant;
      null != r && p.A.selectParticipant(r.channelId, (0, T._z)(r))
    }), el(this, "handleStopStream", () => {
      let {
        participantOnScreen: e
      } = this.props;
      o()((0, ea.Ay)(e), "cannot stop stream for non streamer"), (0, v.X)(g.A.VIDEO_PIP, v.O.STREAM, false), (0, w.A)(e.stream)
    }), el(this, "handleHidePIP", () => {
      let {
        channel: e
      } = this.props;
      m.jD(e.id)
    }), el(this, "handleOpenPopout", () => {
      let {
        channel: e
      } = this.props;
      (0, v.X)(g.A.VIDEO_PIP, v.O.POPOUT, true), P.openChannelCallPopout(e)
    }), el(this, "renderBottomLeftControls", () => {
      let {
        canSeeParticipantName: e
      } = this.viewProperties;
      return e ? this.renderParticipantName() : null
    }), el(this, "renderBottomRightControls", () => {
      let {
        canSettings: e,
        canPopout: t,
        canDisconnect: n,
        canStopStream: i,
        canSeeViewers: a
      } = this.viewProperties;
      return (0, r.jsxs)(r.Fragment, {
        children: [a ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
      })
    }), el(this, "renderDisconnectButton", () => (0, r.jsx)(j.A, {
      className: eo.iq,
      onClick: () => (0, v.X)(g.A.VIDEO_PIP, v.O.DISCONNECT)
    })), el(this, "renderStopStreamButton", () => {
      let {
        isSelf: e
      } = this.viewProperties;
      return (0, r.jsx)(U.A, {
        isSelfStream: e,
        className: eo.iq,
        onClick: this.handleStopStream
      })
    }), el(this, "renderViewersIcon", () => {
      let {
        participantOnScreen: e,
        channel: t
      } = this.props;
      return o()((0, ea.Ay)(e) || (null == e ? true : e.type) === ea.lp.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? true : e.type)), (0, r.jsx)(x.A, {
        children: (0, r.jsx)(O.A, {
          channelId: t.id,
          guildId: t.getGuildId(),
          className: eo.iq,
          participant: e,
          compact: true
        })
      })
    }), el(this, "renderPopoutIcon", () => (0, r.jsx)(k.A, {
      className: eo.iq,
      popoutOpen: false,
      onOpenPopout: this.handleOpenPopout,
      onClosePopout: ei.FXj
    })), el(this, "renderSettingsIcon", () => {
      let {
        participantOnScreen: e,
        activeStreams: t
      } = this.props;
      o()((0, ea.Ay)(e), "Cannot render settings for non stream participant");
      let n = t.find(t => (0, T._z)(t) === e.id);
      return null == n || n.state === ei.XYD.ENDED ? null : (0, r.jsx)(G.A, {
        stream: n,
        className: eo.iq,
        appContext: ei.BRT.APP,
        location: g.A.VIDEO_PIP
      })
    })
  }
}

function ep(e) {
  let {
    channel: t,
    width: n
  } = e, i = (0, c.bG)([W.A], () => W.A.getSpeaker(t.id)), a = (0, c.bG)([y.A], () => y.A.getParticipant(t.id, i), [t.id, i]), o = (0, c.bG)([B.A], () => l()(B.A.getVideoDevices()).values().first()), s = (0, c.bG)([K.A], () => null != a && a.type !== ea.lp.ACTIVITY && a.type !== ea.lp.HIDDEN_STREAM ? K.A.getStreamId(a.user.id, t.getGuildId(), (0, b.A)(a.type)) : null, [a, t]), d = null == o || o.disabled, f = !d, p = (0, c.bG)([B.A], () => !d && B.A.isVideoEnabled(), [d]), _ = (0, c.bG)([B.A], () => (0, C.A)(B.A)), h = (0, c.bG)([V.default], () => V.default.getId()), m = (0, c.bG)([F.A], () => F.A.getCurrentUserActiveStream()), g = null != a && "user" in a ? a.user.id : "", E = (0, S.A)((null == a ? true : a.type) === ea.lp.STREAM ? u.x.STREAM : u.x.DEFAULT, g), O = (0, I.A)(g), v = (0, c.yK)([F.A], () => F.A.getAllActiveStreams());
  return (0, r.jsx)(ef, {
    channel: t,
    streamId: s,
    participantOnScreen: a,
    isVideoAvailable: f,
    isVideoEnabled: p,
    canGoLive: _,
    currentUserId: h,
    activeStreams: v,
    activeSelfStream: m,
    isMainWindowFocused: z.A.isFocused(),
    width: n,
    isOverlayRenderingVideo: false,
    videoStreamError: E,
    cameraEncodeError: O
  })
}