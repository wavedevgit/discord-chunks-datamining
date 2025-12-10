/** Chunk was on 83037 **/
/** chunk id: 98597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CN: () => P,
  ZP: () => R,
  eP: () => w,
  hR: () => Z,
  jo: () => N
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk924301 = require("./924301.js"),
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

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function P(e, t, n) {
  return null != t && !!t && !(0, j.ig)(n, e.type)
}

function N(e, t) {
  return null == t ? E.containerDefault : e > t ? E.containerDragAfter : E.containerDragBefore
}

function Z(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: r,
    forceShowButtons: l,
    hasChannelInfo: o = false
  } = e;
  return (0, s.e7)([O.Z, v.Z], () => n || v.Z.getGuildId() === x.I_8 || !O.Z.can(x.Plq.MANAGE_CHANNELS, t) && !O.Z.can(x.Plq.MANAGE_ROLES, t) && !O.Z.can(x.Plq.MANAGE_WEBHOOKS, t) || (0, b.r8)(t.type) && !O.Z.can(x.Plq.VIEW_CHANNEL, t) || t.isGuildVocal() && !O.Z.can(x.Plq.CONNECT, t) || !b.dF.has(t.type) || t.isModeratorReportChannel()) ? null : (0, i.jsx)(c.u, {
    asContainer: true,
    text: C.intl.string(C.t["3gUsJb"]),
    children: (0, i.jsx)(u.P3F, {
      className: a()(E.iconItem, l ? E.alwaysShown : true, o ? E.iconWithChannelInfo : E.iconNoChannelInfo),
      onClick: function() {
        d.ZP.open(t.id)
      },
      tabIndex: r,
      "aria-label": C.intl.string(C.t["3gUsJb"]),
      children: (0, i.jsx)(u.ewm, {
        size: "xs",
        color: "currentColor",
        className: E.actionIcon
      })
    })
  })
}

function w(e) {
  let {
    channel: t,
    isDefaultChannel: r = false,
    locked: o,
    tabIndex: d,
    forceShowButtons: p,
    hasChannelInfo: b = false
  } = e, v = (0, s.e7)([y.Z], () => y.Z.getGuild(t.getGuildId())), j = (0, s.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]), S = (0, s.e7)([f.ZP], () => f.ZP.getActiveEventByChannel(t.id), [t.id]), P = (0, s.e7)([O.Z], () => (0, h.b)(O.Z, v, t, j)), N = (0, s.e7)([], () => (null == t ? true : t.type) === x.d4z.GUILD_VOICE ? C.intl.string(C.t["EE+P0H"]) : C.intl.string(C.t["0jeAXt"])), Z = l.useRef(null);
  if (o || !P || t.isModeratorReportChannel()) return null;
  let w = (0, i.jsx)(u.oLu, {
    size: "xs",
    className: E.actionIcon,
    "aria-hidden": true,
    color: "currentColor"
  });
  return r && (w = (0, i.jsx)(m.Z, {
    childRef: Z,
    tutorialId: "instant-invite",
    position: "left",
    children: (0, i.jsx)("div", {
      ref: Z,
      children: w
    })
  })), (0, i.jsx)(c.u, {
    asContainer: true,
    text: N,
    children: (0, i.jsx)(u.P3F, {
      className: a()(E.iconItem, p ? E.alwaysShown : true, b ? E.iconWithChannelInfo : E.iconNoChannelInfo),
      onClick: function() {
        if (null != v) {
          let e = _.Z.getAllActiveStreams().filter(e => e.state !== x.jm8.ENDED && e.channelId === t.id);
          (0, u.ZDy)(async () => {
            let {
              default: r
            } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
            return n => {
              var l, o;
              return (0, i.jsx)(r, (l = I({}, n), o = o = {
                guild: v,
                channel: t,
                streamUserId: 1 === e.length ? e[0].ownerId : null,
                source: x.t4x.GUILD_CHANNELS,
                guildScheduledEvent: S
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
      "aria-label": N,
      children: w
    })
  })
}

function T(e) {
  let {
    channel: t
  } = e;
  return (0, i.jsx)(c.u, {
    asContainer: true,
    text: C.intl.string(C.t["ROh4T+"]),
    children: (0, i.jsx)(u.P3F, {
      className: E.iconItem,
      onClick: () => {
        (0, p._U)(t.guild_id, t.id)
      },
      "aria-label": C.intl.string(C.t["ROh4T+"]),
      children: (0, i.jsx)(u.Dio, {
        size: "xs",
        color: "currentColor",
        className: E.actionIcon
      })
    })
  })
}

function A(e) {
  let {
    channel: t
  } = e;
  return (0, i.jsx)(c.u, {
    asContainer: true,
    text: C.intl.string(C.t["N2c/Un"]),
    children: (0, i.jsx)(u.P3F, {
      className: E.iconItem,
      onClick: () => {
        (0, p.dM)(t.guild_id, t.id, true, {
          section: x.jXE.CHANNEL_LIST
        })
      },
      "aria-label": C.intl.string(C.t["N2c/Un"]),
      children: (0, i.jsx)(u.dz2, {
        size: "xs",
        color: "currentColor",
        className: E.actionIcon
      })
    })
  })
}
class R extends(r = Chunk473749.PureComponent) {
  renderEditButton() {
    return (0, Chunk54381.jsx)(Z, I({}, this.props))
  }
  renderInviteButton() {
    return (0, Chunk54381.jsx)(w, I({}, this.props))
  }
  renderRemoveSuggestionButton() {
    return (0, Chunk54381.jsx)(T, I({}, this.props))
  }
  renderAcceptSuggestionButton() {
    return (0, Chunk54381.jsx)(A, I({}, this.props))
  }
  getClassName() {
    let {
      position: e,
      sortingPosition: t
    } = this.props;
    return N(module, exports)
  }
  isDisabled() {
    let {
      channel: e,
      sorting: t,
      sortingType: n
    } = this.props;
    return P(module, exports, require)
  }
}
S(R, "defaultProps", {
  isDefaultChannel: false
})