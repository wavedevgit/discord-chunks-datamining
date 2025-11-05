/** Chunk was on 27 **/
/** chunk id: 98597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CN: () => N,
  ZP: () => D,
  eP: () => T,
  hR: () => w,
  jo: () => Z
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk924301 = require("./924301.js"),
  Chunk340541 = require("./340541.js"),
  Chunk159300 = require("./159300.js"),
  Chunk152376 = require("./152376.js"),
  Chunk427679 = require("./427679.js"),
  Chunk155409 = require("./155409.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk199902 = require("./199902.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk281029 = require("./281029.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk55940 = require("./55940.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function N(e, t, n) {
  return null != t && !!t && !(0, C.ig)(n, e.type)
}

function Z(e, t) {
  return null == t ? S.containerDefault : e > t ? S.containerDragAfter : S.containerDragBefore
}

function w(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: r,
    forceShowButtons: l,
    hasChannelInfo: o = false
  } = e;
  return (0, s.e7)([v.Z, j.Z], () => n || j.Z.getGuildId() === E.I_8 || !v.Z.can(E.Plq.MANAGE_CHANNELS, t) && !v.Z.can(E.Plq.MANAGE_ROLES, t) && !v.Z.can(E.Plq.MANAGE_WEBHOOKS, t) || (0, _.r8)(t.type) && !v.Z.can(E.Plq.VIEW_CHANNEL, t) || t.isGuildVocal() && !v.Z.can(E.Plq.CONNECT, t) || !_.dF.has(t.type) || t.isModeratorReportChannel()) ? null : (0, i.jsx)(c.u, {
    asContainer: true,
    text: x.intl.string(x.t["3gUsJb"]),
    children: (0, i.jsx)(u.P3F, {
      className: a()(S.iconItem, l ? S.alwaysShown : true, o ? S.iconWithChannelInfo : S.iconNoChannelInfo),
      onClick: function() {
        d.ZP.open(t.id)
      },
      tabIndex: r,
      "aria-label": x.intl.string(x.t["3gUsJb"]),
      children: (0, i.jsx)(u.ewm, {
        size: "xs",
        color: "currentColor",
        className: S.actionIcon
      })
    })
  })
}

function T(e) {
  let {
    channel: t,
    isDefaultChannel: r = false,
    locked: o,
    tabIndex: d,
    forceShowButtons: g,
    hasChannelInfo: _ = false
  } = e, j = (0, h._k)({
    location: "channel_base"
  }), C = (0, s.e7)([O.Z], () => O.Z.getGuild(t.getGuildId())), I = (0, s.e7)([m.Z], () => m.Z.getStageInstanceByChannel(t.id), [t.id]), N = (0, s.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(t.id), [t.id]), Z = (0, s.e7)([v.Z], () => (0, f.b)(v.Z, C, t, I)), w = (0, s.e7)([v.Z], () => (null == t ? true : t.type) === E.d4z.GUILD_VOICE && j.isVoiceChannelEntrypointEnabled ? x.intl.string(x.t["EE+P0H"]) : j.isTextChannelEntrypointEnabled ? x.intl.string(x.t["0jeAXt"]) : v.Z.can(E.Plq.CREATE_INSTANT_INVITE, t) ? x.intl.string(x.t.zJrgTG) : x.intl.string(x.t.Sd8Ixw)), T = l.useRef(null);
  if (o || !Z || t.isModeratorReportChannel()) return null;
  let A = [j.isVoiceChannelEntrypointEnabled, j.isTextChannelEntrypointEnabled].some(Boolean) ? u.oLu : u.ejJ,
    R = (0, i.jsx)(A, {
      size: "xs",
      className: S.actionIcon,
      "aria-hidden": true,
      color: "currentColor"
    });
  return r && (R = (0, i.jsx)(b.Z, {
    childRef: T,
    tutorialId: "instant-invite",
    position: "left",
    children: (0, i.jsx)("div", {
      ref: T,
      children: R
    })
  })), (0, i.jsx)(c.u, {
    asContainer: true,
    text: w,
    children: (0, i.jsx)(u.P3F, {
      className: a()(S.iconItem, g ? S.alwaysShown : true, _ ? S.iconWithChannelInfo : S.iconNoChannelInfo),
      onClick: function() {
        if (null != C) {
          let e = y.Z.getAllActiveStreams().filter(e => e.state !== E.jm8.ENDED && e.channelId === t.id);
          (0, u.ZDy)(async () => {
            let {
              default: r
            } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
            return n => {
              var l, o;
              return (0, i.jsx)(r, (l = P({}, n), o = o = {
                guild: C,
                channel: t,
                streamUserId: 1 === e.length ? e[0].ownerId : null,
                source: E.t4x.GUILD_CHANNELS,
                guildScheduledEvent: N
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(o)).forEach(function(e) {
                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
              }), l))
            }
          })
        }
      },
      tabIndex: d,
      "aria-label": w,
      children: R
    })
  })
}

function A(e) {
  let {
    channel: t
  } = e;
  return (0, i.jsx)(c.u, {
    asContainer: true,
    text: x.intl.string(x.t["ROh4T+"]),
    children: (0, i.jsx)(u.P3F, {
      className: S.iconItem,
      onClick: () => {
        (0, g._U)(t.guild_id, t.id)
      },
      "aria-label": x.intl.string(x.t["ROh4T+"]),
      children: (0, i.jsx)(u.Dio, {
        size: "xs",
        color: "currentColor",
        className: S.actionIcon
      })
    })
  })
}

function R(e) {
  let {
    channel: t
  } = e;
  return (0, i.jsx)(c.u, {
    asContainer: true,
    text: x.intl.string(x.t["N2c/Un"]),
    children: (0, i.jsx)(u.P3F, {
      className: S.iconItem,
      onClick: () => {
        (0, g.dM)(t.guild_id, t.id, true, {
          section: E.jXE.CHANNEL_LIST
        })
      },
      "aria-label": x.intl.string(x.t["N2c/Un"]),
      children: (0, i.jsx)(u.dz2, {
        size: "xs",
        color: "currentColor",
        className: S.actionIcon
      })
    })
  })
}
class D extends(r = Chunk647438.PureComponent) {
  renderEditButton() {
    return (0, Chunk951288.jsx)(w, P({}, this.props))
  }
  renderInviteButton() {
    return (0, Chunk951288.jsx)(T, P({}, this.props))
  }
  renderRemoveSuggestionButton() {
    return (0, Chunk951288.jsx)(A, P({}, this.props))
  }
  renderAcceptSuggestionButton() {
    return (0, Chunk951288.jsx)(R, P({}, this.props))
  }
  getClassName() {
    let {
      position: e,
      sortingPosition: t
    } = this.props;
    return Z(module, exports)
  }
  isDisabled() {
    let {
      channel: e,
      sorting: t,
      sortingType: n
    } = this.props;
    return N(module, exports, require)
  }
}
I(D, "defaultProps", {
  isDefaultChannel: false
})