/** Chunk was on web.js **/
/** chunk id: 966302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => el
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk426322 = require("./426322.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk26151 = require("./26151.js"),
  Chunk922555 = require("./922555.js"),
  Chunk287734 = require("./287734.js"),
  Chunk249000 = require("./249000.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk932724 = require("./932724.js"),
  Chunk672339 = require("./672339.js"),
  Chunk898531 = require("./898531.js"),
  Chunk923973 = require("./923973.js"),
  Chunk189771 = require("./189771.js"),
  Chunk560688 = require("./560688.jsx"),
  Chunk88479 = require("./88479.jsx"),
  Chunk136995 = require("./136995.jsx"),
  Chunk25827 = require("./25827.jsx"),
  Chunk163612 = require("./163612.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk358221 = require("./358221.js"),
  Chunk584511 = require("./584511.jsx"),
  Chunk793865 = require("./793865.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk993103 = require("./993103.js"),
  Chunk450943 = require("./450943.js"),
  Chunk315091 = require("./315091.js");

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Q(e, t, n[t])
    })
  }
  return e
}

function $(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ee(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let et = {
    width: 232,
    height: 315
  },
  en = {
    width: 232,
    height: 267
  },
  er = 475,
  ei = 267,
  ea = 128;

function eo(e) {
  let {
    header: t
  } = e, n = x.Z.getCameraComponent(), a = (0, l.e7)([x.Z], () => x.Z.getVideoDeviceId()), o = (0, I.Z)();
  return i.useEffect(() => {
    let e = L.default.getCurrentUser();
    if (o && null != e) {
      let t = (0, O.P)(e);
      (0, v.FU)(t, a, {
        track: false
      }).catch(H.dG4)
    }
  }, [o, a]), (0, r.jsxs)("div", {
    className: q.previewRoot,
    children: [(0, r.jsx)(c.$jN, {}), (0, r.jsx)("div", {
      className: q.preview,
      children: (0, r.jsx)(n, {
        disabled: false,
        deviceId: a,
        width: er,
        height: ei
      })
    }), (0, r.jsx)("div", {
      className: q.previewChannelHeader,
      children: t
    })]
  })
}

function es(e) {
  let {
    canVideo: t,
    channel: n,
    numVideoDevices: a
  } = e, {
    parentAnalyticsLocation: s
  } = (0, m.ZP)(), {
    cameraUnavailable: l,
    enabled: d
  } = (0, T.Z)(), _ = (0, S.Z)(n), p = i.useRef(null), g = a > 1;
  return (0, r.jsxs)("div", {
    className: o()(q.wrapper, q.actions),
    children: [(0, r.jsx)(C.Z, {
      iconComponent: c.Dio,
      label: K.intl.string(K.t.WAI6xu),
      className: q.actionButton,
      onClick: () => {
        (0, Z.v)(s, Z.d.DISCONNECT), j.default.track(H.rMx.RING_CALL_DECLINED, J({
          location: s,
          guild_id: n.guild_id
        }, (0, h.v_)(n))), u.Z.stopRinging(n.id)
      }
    }), t && (0, r.jsx)(c.yRy, {
      targetElementRef: p,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(B.Z, {
          onClose: t,
          onInteraction: (0, F.u)("VideoDeviceMenu", s, {
            entrypoint: V.A5.CARET
          })
        })
      },
      position: "top",
      align: "center",
      animation: c.yRy.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: i
        } = e, {
          isShown: a
        } = t;
        return (0, r.jsx)(R.C, {
          buttonRef: p,
          join: true,
          enabled: d,
          className: o()(q.actionButton, {
            [q.fullRegionDropdownButtonOverride]: g
          }),
          color: "green",
          centerButton: true,
          hasPermission: _,
          cameraUnavailable: l,
          channel: n,
          onPopoutClick: g ? i : null,
          popoutOpen: a,
          onCameraUnavailable: A.Z,
          onChange: () => {
            var e;
            (0, Z.v)(s, Z.d.JOIN_VIDEO_CALL), j.default.track(H.rMx.RING_CALL_ACCEPTED, J({
              location: s,
              guild_id: n.guild_id
            }, (0, h.v_)(n))), f.default.selectVoiceChannel(n.id, true), (0, y.XU)(null != (e = n.guild_id) ? e : H.ME, n.id)
          }
        })
      }
    }), (0, r.jsx)(N.Z, {
      channel: n,
      color: "join",
      centerButton: true,
      onCallJoined: () => j.default.track(H.rMx.RING_CALL_ACCEPTED, J({
        location: s,
        guild_id: n.guild_id
      }, (0, h.v_)(n))),
      className: q.actionButton
    })]
  })
}

function el(e) {
  var t;
  let {
    animatedStyle: n,
    y: a,
    x: f,
    channel: h
  } = e, {
    analyticsLocations: y
  } = (0, m.ZP)(p.Z.INCOMING_CALL_MODAL), [O, v] = i.useState(false), I = (0, l.e7)([D.Z], () => D.Z.getGuild(h.guild_id)), T = null != I ? k.ZP.getGuildIconURL({
    id: I.id,
    icon: I.icon,
    size: ea
  }) : null, S = null != (t = (0, g.x)(h, ea, true)) ? t : T, A = (0, E.ZP)(h), [C, N] = (0, l.Wu)([x.Z], () => [x.Z.supports(W.AN.VIDEO), Object.keys(x.Z.getVideoDevices()).length]), R = null != I ? "".concat(A, ", ").concat(I.name) : A, L = (0, l.e7)([M.Z], () => M.Z.isFocused()), j = (0, l.e7)([U.Z], () => U.Z.getMode(h.id)), B = i.useCallback(e => {
    null != e.top && null != e.left && d.Z.move(e.left, e.top)
  }, []), Z = (0, c.q_F)({
    value: +!!O,
    config: ee(J({}, s.config.stiff), {
      clamp: true
    })
  }, "animate-always");
  i.useEffect(() => {
    let e = e => {
      e.key === Y.vn.ESCAPE && u.Z.stopRinging(h.id)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [h]);
  let F = j === H.WtW.VIDEO && C && N > 0,
    {
      enabled: V
    } = P.Z.useExperiment({
      guildId: null == h ? true : h.guild_id,
      location: "IncomingCallModal"
    }),
    Q = j === H.WtW.VOICE || V && h.type === H.d4z.GUILD_VOICE ? K.intl.string(K.t.Js8cK3) : K.intl.string(K.t.KcnWCO),
    $ = (0, r.jsxs)(r.Fragment, {
      children: [null != I && null == T ? (0, r.jsx)("div", {
        className: o()(q.icon, z.wrapper, z.ringingIncoming),
        children: (0, r.jsx)(b.ZP, {
          className: q.mask,
          mask: b.QS.AVATAR_DEFAULT,
          width: O ? 40 : 80,
          height: O ? 40 : 80,
          children: (0, r.jsx)("div", {
            className: o()(q.guildIcon, q.guildIconWithoutImage),
            children: (0, r.jsx)("div", {
              className: q.guildAcronym,
              children: (0, w.gM)(I)
            })
          })
        })
      }) : (0, r.jsx)(G.Z, {
        className: q.icon,
        ringing: L,
        src: null != S ? S : "",
        ringingType: G.Z.RingingType.INCOMING,
        size: O ? c.EFr.SIZE_40 : c.EFr.SIZE_80
      }), (0, r.jsxs)("div", {
        className: q.titleGroup,
        children: [(0, r.jsx)(c.Text, {
          className: q.title,
          color: "header-primary",
          variant: O ? "text-md/semibold" : "text-lg/semibold",
          children: R
        }), (0, r.jsx)(c.Text, {
          color: "header-secondary",
          className: q.subtitle,
          variant: O ? "text-sm/normal" : "text-md/normal",
          children: Q
        })]
      })]
    }),
    el = F ? et : en,
    ec = (0, l.e7)([M.Z], () => M.Z.windowSize());
  return (0, r.jsx)(m.Gt, {
    value: y,
    children: (0, r.jsx)(_.Z, {
      className: q.wrapper,
      selector: ".".concat(q.root),
      initialPosition: {
        left: f,
        top: a
      },
      maxX: ec.width,
      maxY: ec.height,
      onDragEnd: B,
      dragAnywhere: true,
      children: (0, r.jsx)(c.f6W, {
        theme: O ? H.BRd.DARK : true,
        children: e => (0, r.jsxs)(s.animated.div, {
          className: o()(q.root, X.elevationHigh, {
            [q.previewCamera]: O
          }, e),
          style: ee(J({}, n), {
            width: Z.value.interpolate([0, 1], [el.width, er]),
            minHeight: Z.value.interpolate([0, 1], [el.height, ei]),
            translateX: Z.value.interpolate([0, 1], [0, false * Math.abs(er - el.width) / 2])
          }),
          children: [O ? (0, r.jsx)(eo, {
            header: $
          }) : (0, r.jsx)("div", {
            className: q.mainChannelInfo,
            children: $
          }), (0, r.jsx)(es, {
            canVideo: F,
            channel: h,
            numVideoDevices: N
          }), F && !O ? (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": true,
            className: q.previewButton,
            children: (0, r.jsx)(c.Button, {
              variant: "secondary",
              size: "sm",
              text: K.intl.string(K.t["8B0UDr"]),
              fullWidth: true,
              onClick: () => v(true)
            })
          }) : null]
        })
      })
    })
  })
}