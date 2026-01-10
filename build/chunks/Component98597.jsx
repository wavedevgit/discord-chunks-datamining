/** Chunk was on 81985 **/
/** chunk id: 98597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CN: () => P,
  ZP: () => R,
  eP: () => T,
  hR: () => N,
  jo: () => Z
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk642915 = require("./642915.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}

function P(e, t, n) {
  return null != t && !!t && !(0, x.ig)(n, e.type)
}

function Z(e, t) {
  return null == t ? S.containerDefault : e > t ? S.containerDragAfter : S.containerDragBefore
}

function N(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: r,
    forceShowButtons: l,
    hasChannelInfo: a = false
  } = e;
  return (0, s.e7)([O.Z, j.Z], () => n || j.Z.getGuildId() === C.I_8 || !O.Z.can(C.Plq.MANAGE_CHANNELS, t) && !O.Z.can(C.Plq.MANAGE_ROLES, t) && !O.Z.can(C.Plq.MANAGE_WEBHOOKS, t) || (0, b.r8)(t.type) && !O.Z.can(C.Plq.VIEW_CHANNEL, t) || t.isGuildVocal() && !O.Z.can(C.Plq.CONNECT, t) || !b.dF.has(t.type) || t.isModeratorReportChannel()) ? null : (0, i.jsx)(c.u, {
    asContainer: true,
    text: E.intl.string(E.t["3gUsJb"]),
    children: (0, i.jsx)(u.P3F, {
      className: o()(S.iconItem, l ? S.alwaysShown : true, a ? S.iconWithChannelInfo : S.iconNoChannelInfo),
      onClick: function() {
        d.ZP.open(t.id)
      },
      tabIndex: r,
      "aria-label": E.intl.string(E.t["3gUsJb"]),
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
    locked: a,
    tabIndex: d,
    forceShowButtons: h,
    hasChannelInfo: b = false
  } = e, j = (0, s.e7)([v.Z], () => v.Z.getGuild(t.getGuildId())), x = (0, s.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]), _ = (0, s.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(t.id), [t.id]), P = (0, s.e7)([O.Z], () => (0, f.b)(O.Z, j, t, x)), Z = (0, s.e7)([], () => (null == t ? true : t.type) === C.d4z.GUILD_VOICE ? E.intl.string(E.t["EE+P0H"]) : E.intl.string(E.t["0jeAXt"])), N = l.useRef(null);
  if (a || !P || t.isModeratorReportChannel()) return null;
  let T = (0, i.jsx)(u.oLu, {
    size: "xs",
    className: S.actionIcon,
    "aria-hidden": true,
    color: "currentColor"
  });
  return r && (T = (0, i.jsx)(m.Z, {
    childRef: N,
    tutorialId: "instant-invite",
    position: "left",
    children: (0, i.jsx)("div", {
      ref: N,
      children: T
    })
  })), (0, i.jsx)(c.u, {
    asContainer: true,
    text: Z,
    children: (0, i.jsx)(u.P3F, {
      className: o()(S.iconItem, h ? S.alwaysShown : true, b ? S.iconWithChannelInfo : S.iconNoChannelInfo),
      onClick: function() {
        if (null != j) {
          let e = y.Z.getAllActiveStreams().filter(e => e.state !== C.jm8.ENDED && e.channelId === t.id);
          (0, u.ZDy)(async () => {
            let {
              default: r
            } = await Promise.all([n.e("7654"), n.e("45965")]).then(n.bind(n, 560114));
            return n => {
              var l, a;
              return (0, i.jsx)(r, (l = I({}, n), a = a = {
                guild: j,
                channel: t,
                streamUserId: 1 === e.length ? e[0].ownerId : null,
                source: C.t4x.GUILD_CHANNELS,
                guildScheduledEvent: _
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(a)).forEach(function(e) {
                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
              }), l))
            }
          })
        }
      },
      tabIndex: d,
      "aria-label": Z,
      children: T
    })
  })
}

function A(e) {
  let {
    channel: t
  } = e;
  return (0, i.jsx)(c.u, {
    asContainer: true,
    text: E.intl.string(E.t["ROh4T+"]),
    children: (0, i.jsx)(u.P3F, {
      className: S.iconItem,
      onClick: () => {
        (0, h._U)(t.guild_id, t.id)
      },
      "aria-label": E.intl.string(E.t["ROh4T+"]),
      children: (0, i.jsx)(u.Dio, {
        size: "xs",
        color: "currentColor",
        className: S.actionIcon
      })
    })
  })
}

function w(e) {
  let {
    channel: t
  } = e;
  return (0, i.jsx)(c.u, {
    asContainer: true,
    text: E.intl.string(E.t["N2c/Un"]),
    children: (0, i.jsx)(u.P3F, {
      className: S.iconItem,
      onClick: () => {
        (0, h.dM)(t.guild_id, t.id, true, {
          section: C.jXE.CHANNEL_LIST
        })
      },
      "aria-label": E.intl.string(E.t["N2c/Un"]),
      children: (0, i.jsx)(u.dz2, {
        size: "xs",
        color: "currentColor",
        className: S.actionIcon
      })
    })
  })
}
class R extends(r = Chunk473749.PureComponent) {
  renderEditButton() {
    return (0, i.jsx)(N, I({}, this.props))
  }
  renderInviteButton() {
    return (0, i.jsx)(T, I({}, this.props))
  }
  renderRemoveSuggestionButton() {
    return (0, i.jsx)(A, I({}, this.props))
  }
  renderAcceptSuggestionButton() {
    return (0, i.jsx)(w, I({}, this.props))
  }
  getClassName() {
    let {
      position: e,
      sortingPosition: t
    } = this.props;
    return Z(e, t)
  }
  isDisabled() {
    let {
      channel: e,
      sorting: t,
      sortingType: n
    } = this.props;
    return P(e, t, n)
  }
}
_(R, "defaultProps", {
  isDefaultChannel: false
})