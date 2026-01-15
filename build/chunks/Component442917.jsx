/** Chunk was on web.js **/
/** chunk id: 442917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ep
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk475179 = require("./475179.js"),
  Chunk925549 = require("./925549.js"),
  Chunk37234 = require("./37234.js"),
  Chunk519938 = require("./519938.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk358221 = require("./358221.js"),
  Chunk414910 = require("./414910.js"),
  Chunk221888 = require("./221888.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk933557 = require("./933557.js"),
  Chunk502053 = require("./502053.js"),
  Chunk965048 = require("./965048.js"),
  Chunk569545 = require("./569545.js"),
  Chunk74299 = require("./74299.js"),
  Chunk863908 = require("./863908.js"),
  Chunk803647 = require("./803647.js"),
  Chunk266910 = require("./266910.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk703656 = require("./703656.js"),
  Chunk937995 = require("./937995.jsx"),
  Chunk618158 = require("./618158.jsx"),
  Chunk922745 = require("./922745.jsx"),
  Chunk197016 = require("./197016.jsx"),
  Chunk800965 = require("./800965.jsx"),
  Chunk445062 = require("./445062.jsx"),
  Chunk7188 = require("./7188.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk248402 = require("./248402.js"),
  Chunk33039 = require("./33039.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk484286 = require("./484286.jsx"),
  Chunk822296 = require("./822296.jsx"),
  Chunk916771 = require("./916771.jsx"),
  Chunk792517 = require("./792517.jsx"),
  Chunk351483 = require("./351483.jsx"),
  Chunk249212 = require("./249212.jsx"),
  Chunk560688 = require("./560688.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk978582 = require("./978582.js"),
  Chunk533348 = require("./533348.js");

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
class ef extends Chunk473749.PureComponent {
  get viewProperties() {
    let {
      participantOnScreen: e,
      currentUserId: t,
      channel: n
    } = this.props, r = (0, ea._5)(e), i = null != e && e.type !== ea.fO.ACTIVITY && e.user.id === t;
    return {
      canPopout: r && !i,
      canSettings: r && i,
      canStopStream: r,
      canSeeViewers: r,
      canSeeParticipantName: ((null == e ? true : e.type) === ea.fO.STREAM || (null == e ? true : e.type) === ea.fO.USER) && n.type !== ei.d4z.DM,
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
    return null != t && (null == n ? true : n.id) === (0, C.V9)(t) && !e
  }
  get activeStreamForSelectedParticipant() {
    let {
      participantOnScreen: e,
      activeStreams: t
    } = this.props;
    return (0, ea._5)(e) ? t.find(t => (0, C.V9)(t) === e.id) : null
  }
  getScreenMessage() {
    let {
      participantOnScreen: e,
      currentUserId: t
    } = this.props;
    if (!(0, ea._5)(e)) return null;
    let n = this.activeStreamForSelectedParticipant;
    return null == n ? null : (0, N.Z)(n, e.user, e.user.id === t, this.streamerPaused)
  }
  componentDidMount() {
    let {
      channel: e
    } = this.props;
    z.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, ec({
      video_layout: "pip"
    }, (0, E.AB)(e.id)))
  }
  componentWillUnmount() {
    let {
      channel: e
    } = this.props;
    z.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, ec({
      video_layout: b.Z.getLayout(e.id)
    }, (0, E.AB)(e.id)))
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
      if ((null == t ? true : t.type) === ea.fO.STREAM) return (0, r.jsx)($.Z, {
        stream: t.stream,
        width: n,
        avError: a
      });
      else if ((null == t ? true : t.type) === ea.fO.USER) return (0, r.jsx)(en.Z, {
        userId: t.user.id,
        width: n,
        avError: a
      })
    }
    switch (true) {
      case (null == e ? true : e.state) === ei.jm8.ENDED:
        return (0, r.jsx)(J.Z, {
          stream: e,
          width: n
        });
      case (null == e ? true : e.state) === ei.jm8.FAILED:
        return (0, r.jsx)($.Z, {
          stream: e,
          width: n
        });
      case (null == t ? true : t.type) === ea.fO.HIDDEN_STREAM:
        return (0, r.jsx)(ee.Z, {
          participant: t,
          width: n
        });
      case i:
        return (0, r.jsx)(et.Z, {
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
    if ((null == t ? true : t.type) === ea.fO.STREAM || (null == t ? true : t.type) === ea.fO.USER) {
      var n;
      let i = null != (n = q.ZP.getNickname(e.getGuildId(), e.id, t.user)) ? n : Q.ZP.getName(t.user);
      return (0, r.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "always-white",
        className: eo.participantName,
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
    } = this.props, o = (0, S.F6)(e, H.default, V.Z), s = (null == n ? true : n.id) === F.default.getId() && i, l = this.renderStreamState(), c = this.activeStreamForSelectedParticipant, u = null;
    return (null == n ? true : n.type) !== ea.fO.ACTIVITY && (null != l ? u = l : ((null == n ? true : n.type) === ea.fO.USER || (null == n ? true : n.type) === ea.fO.STREAM) && (u = (0, r.jsx)(X.Z, {
      paused: this.streamerPaused,
      streamId: t,
      component: B.Z.getVideoComponent(),
      mirror: s,
      children: (0, r.jsx)(w.Z, {
        size: d.EFr.SIZE_80,
        src: null == n ? true : n.user.getAvatarURL(e.guild_id, 80),
        "aria-label": null == n ? true : n.user.username,
        guildId: e.guild_id,
        userId: null == n ? true : n.user.id
      })
    }))), (0, r.jsx)(x.ZP, {
      timeout: 1800,
      children: e => {
        var t;
        return (0, r.jsx)(j.Z, ed(ec({
          title: o,
          backgroundKey: null != (t = null == n ? true : n.id) ? t : "",
          screenMessage: null == l ? this.getScreenMessage() : null,
          onJumpToChannel: this.handleJumpToChannel,
          onHide: this.handleHidePIP,
          renderBottomLeftControls: this.renderBottomLeftControls,
          renderBottomRightControls: this.renderBottomRightControls,
          preventIdleComponent: L.Z,
          width: a,
          className: es.elevationHigh,
          videoControlsClassName: (null == c ? true : c.state) === ei.jm8.ENDED ? eo.videoControls : true
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
      f.Z.setVideoEnabled(e)
    }), el(this, "handleEnableVideoWhenUnavailable", () => {
      let {
        isVideoAvailable: e
      } = this.props;
      e ? this.handleVideo(true) : (0, er.Z)()
    }), el(this, "handleJumpToChannel", () => {
      var e;
      let {
        channel: t
      } = this.props;
      (0, h.Ou)();
      let n = null != (e = t.getGuildId()) ? e : ei.ME;
      (0, D.XU)(n, t.id), _.Z.channelListScrollTo(n, t.id);
      let r = this.activeStreamForSelectedParticipant;
      null != r && p.Z.selectParticipant(r.channelId, (0, C.V9)(r))
    }), el(this, "handleStopStream", () => {
      let {
        participantOnScreen: e
      } = this.props;
      o()((0, ea._5)(e), "cannot stop stream for non streamer"), (0, v.v)(g.Z.VIDEO_PIP, v.d.STREAM, false), (0, P.Z)(e.stream)
    }), el(this, "handleHidePIP", () => {
      let {
        channel: e
      } = this.props;
      m.Cp(e.id)
    }), el(this, "handleOpenPopout", () => {
      let {
        channel: e
      } = this.props;
      (0, v.v)(g.Z.VIDEO_PIP, v.d.POPOUT, true), R.openChannelCallPopout(e)
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
    }), el(this, "renderDisconnectButton", () => (0, r.jsx)(M.Z, {
      className: eo.rightTrayIcon,
      onClick: () => (0, v.v)(g.Z.VIDEO_PIP, v.d.DISCONNECT)
    })), el(this, "renderStopStreamButton", () => {
      let {
        isSelf: e
      } = this.viewProperties;
      return (0, r.jsx)(U.Z, {
        isSelfStream: e,
        className: eo.rightTrayIcon,
        onClick: this.handleStopStream
      })
    }), el(this, "renderViewersIcon", () => {
      let {
        participantOnScreen: e,
        channel: t
      } = this.props;
      return o()((0, ea._5)(e) || (null == e ? true : e.type) === ea.fO.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? true : e.type)), (0, r.jsx)(L.Z, {
        children: (0, r.jsx)(O.Z, {
          channelId: t.id,
          guildId: t.getGuildId(),
          className: eo.rightTrayIcon,
          participant: e,
          compact: true
        })
      })
    }), el(this, "renderPopoutIcon", () => (0, r.jsx)(k.Z, {
      className: eo.rightTrayIcon,
      popoutOpen: false,
      onOpenPopout: this.handleOpenPopout,
      onClosePopout: ei.VqG
    })), el(this, "renderSettingsIcon", () => {
      let {
        participantOnScreen: e,
        activeStreams: t
      } = this.props;
      o()((0, ea._5)(e), "Cannot render settings for non stream participant");
      let n = t.find(t => (0, C.V9)(t) === e.id);
      return null == n || n.state === ei.jm8.ENDED ? null : (0, r.jsx)(G.Z, {
        stream: n,
        className: eo.rightTrayIcon,
        appContext: ei.IlC.APP,
        location: g.Z.VIDEO_PIP
      })
    })
  }
}

function ep(e) {
  let {
    channel: t,
    width: n
  } = e, i = (0, c.e7)([Y.Z], () => Y.Z.getSpeaker(t.id)), a = (0, c.e7)([b.Z], () => b.Z.getParticipant(t.id, i), [t.id, i]), o = (0, c.e7)([B.Z], () => l()(B.Z.getVideoDevices()).values().first()), s = (0, c.e7)([W.Z], () => null != a && a.type !== ea.fO.ACTIVITY && a.type !== ea.fO.HIDDEN_STREAM ? W.Z.getStreamId(a.user.id, t.getGuildId(), (0, y.Z)(a.type)) : null, [a, t]), d = null == o || o.disabled, f = !d, p = (0, c.e7)([B.Z], () => !d && B.Z.isVideoEnabled(), [d]), _ = (0, c.e7)([B.Z], () => (0, A.Z)(B.Z)), h = (0, c.e7)([F.default], () => F.default.getId()), m = (0, c.e7)([Z.Z], () => Z.Z.getCurrentUserActiveStream()), g = null != a && "user" in a ? a.user.id : "", E = (0, T.Z)((null == a ? true : a.type) === ea.fO.STREAM ? u.Yn.STREAM : u.Yn.DEFAULT, g), O = (0, I.Z)(g), v = (0, c.Wu)([Z.Z], () => Z.Z.getAllActiveStreams());
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
    isMainWindowFocused: K.Z.isFocused(),
    width: n,
    isOverlayRenderingVideo: false,
    videoStreamError: E,
    cameraEncodeError: O
  })
}