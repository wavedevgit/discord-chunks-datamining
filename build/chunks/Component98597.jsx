/** Chunk was on 85362 **/
/** chunk id: 98597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CN: () => N,
  ZP: () => L,
  eP: () => A,
  hR: () => T,
  jo: () => w
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t, n) {
  return null != t && !!t && !(0, j.ig)(n, e.type)
}

function w(e, t) {
  return null == t ? x.containerDefault : e > t ? x.containerDragAfter : x.containerDragBefore
}

function Z(e) {
  let {
    tabIndex: t,
    forceShowButtons: n,
    hasChannelInfo: r,
    onContextMenu: l
  } = e;
  return (0, i.jsx)(c.ua7, {
    text: E.intl.string(E.t.OBr7Cw),
    children: e => {
      let {
        onMouseEnter: o,
        onMouseLeave: s,
        onFocus: u,
        onBlur: d
      } = e;
      return (0, i.jsx)(c.P3F, {
        className: a()(x.iconItem, n ? x.alwaysShown : true, r ? x.iconWithChannelInfo : x.iconNoChannelInfo),
        onClick: l,
        tabIndex: t,
        "aria-label": E.intl.string(E.t.OBr7Cw),
        onMouseEnter: o,
        onMouseLeave: s,
        onFocus: u,
        onBlur: d,
        children: (0, i.jsx)(c.xhG, {
          size: "xs",
          color: "currentColor",
          className: x.actionIcon
        })
      })
    }
  })
}

function T(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: r,
    forceShowButtons: l,
    hasChannelInfo: o = false
  } = e;
  if ((0, s.e7)([y.Z, v.Z], () => n || v.Z.getGuildId() === C.I_8 || !y.Z.can(C.Plq.MANAGE_CHANNELS, t) && !y.Z.can(C.Plq.MANAGE_ROLES, t) && !y.Z.can(C.Plq.MANAGE_WEBHOOKS, t) || (0, b.r8)(t.type) && !y.Z.can(C.Plq.VIEW_CHANNEL, t) || t.isGuildVocal() && !y.Z.can(C.Plq.CONNECT, t) || !b.dF.has(t.type) || t.isModeratorReportChannel())) return null;

  function d() {
    u.ZP.open(t.id)
  }
  return (0, i.jsx)(c.ua7, {
    text: E.intl.string(E.t["3gUsJS"]),
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: s,
        onBlur: u
      } = e;
      return (0, i.jsx)(c.P3F, {
        className: a()(x.iconItem, l ? x.alwaysShown : true, o ? x.iconWithChannelInfo : x.iconNoChannelInfo),
        onClick: d,
        tabIndex: r,
        "aria-label": E.intl.string(E.t["3gUsJS"]),
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: s,
        onBlur: u,
        children: (0, i.jsx)(c.ewm, {
          size: "xs",
          color: "currentColor",
          className: x.actionIcon
        })
      })
    }
  })
}

function A(e) {
  let {
    channel: t,
    isDefaultChannel: r = false,
    locked: o,
    tabIndex: u,
    forceShowButtons: h,
    hasChannelInfo: b = false
  } = e, {
    entrypoints: v
  } = (0, p._k)({
    location: "channel_base"
  }), j = (0, s.e7)([O.Z], () => O.Z.getGuild(t.getGuildId())), S = (0, s.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]), N = (0, s.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(t.id), [t.id]), w = (0, s.e7)([y.Z], () => (0, f.b)(y.Z, j, t, S)), Z = (0, s.e7)([y.Z], () => y.Z.can(C.Plq.CREATE_INSTANT_INVITE, t) ? E.intl.string(E.t.zJrgTE) : E.intl.string(E.t.Sd8Ix8)), T = v ? E.intl.string(E.t["EE+P0N"]) : Z, A = l.useRef(null);
  if (o || !w || t.isModeratorReportChannel()) return null;

  function R() {
    if (null != j) {
      let e = _.Z.getAllActiveStreams().filter(e => e.state !== C.jm8.ENDED && e.channelId === t.id);
      (0, c.ZDy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("7654"), n.e("62292")]).then(n.bind(n, 560114));
        return n => (0, i.jsx)(r, P(I({}, n), {
          guild: j,
          channel: t,
          streamUserId: 1 === e.length ? e[0].ownerId : null,
          source: C.t4x.GUILD_CHANNELS,
          guildScheduledEvent: N
        }))
      })
    }
  }
  let D = v ? c.oLu : c.ejJ,
    L = (0, i.jsx)(D, {
      size: "xs",
      className: x.actionIcon,
      "aria-hidden": true,
      color: "currentColor"
    });
  return r && (L = (0, i.jsx)(m.Z, {
    childRef: A,
    tutorialId: "instant-invite",
    position: "left",
    children: (0, i.jsx)("div", {
      ref: A,
      children: L
    })
  })), (0, i.jsx)(c.ua7, {
    text: T,
    children: e => (0, i.jsx)(c.P3F, P(I({
      className: a()(x.iconItem, h ? x.alwaysShown : true, b ? x.iconWithChannelInfo : x.iconNoChannelInfo)
    }, e), {
      onClick: R,
      tabIndex: u,
      "aria-label": T,
      children: L
    }))
  })
}

function R(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, h._U)(t.guild_id, t.id)
  };
  return (0, i.jsx)(c.ua7, {
    text: E.intl.string(E.t.ROh4T0),
    children: e => (0, i.jsx)(c.P3F, P(I({
      className: x.iconItem
    }, e), {
      onClick: n,
      "aria-label": E.intl.string(E.t.ROh4T0),
      children: (0, i.jsx)(c.Dio, {
        size: "xs",
        color: "currentColor",
        className: x.actionIcon
      })
    }))
  })
}

function D(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, h.dM)(t.guild_id, t.id, true, {
      section: C.jXE.CHANNEL_LIST
    })
  };
  return (0, i.jsx)(c.ua7, {
    text: E.intl.string(E.t["N2c/Ul"]),
    children: e => (0, i.jsx)(c.P3F, P(I({
      className: x.iconItem
    }, e), {
      onClick: n,
      "aria-label": E.intl.string(E.t["N2c/Ul"]),
      children: (0, i.jsx)(c.dz2, {
        size: "xs",
        color: "currentColor",
        className: x.actionIcon
      })
    }))
  })
}
class L extends(r = Chunk73800.PureComponent) {
  renderOptionsButton(e) {
    let {
      onContextMenu: t
    } = e;
    return (0, i.jsx)(Z, P(I({}, this.props), {
      onContextMenu: t
    }))
  }
  renderEditButton() {
    return (0, Chunk255367.jsx)(T, I({}, this.props))
  }
  renderInviteButton() {
    return (0, Chunk255367.jsx)(A, I({}, this.props))
  }
  renderRemoveSuggestionButton() {
    return (0, Chunk255367.jsx)(R, I({}, this.props))
  }
  renderAcceptSuggestionButton() {
    return (0, Chunk255367.jsx)(D, I({}, this.props))
  }
  getClassName() {
    let {
      position: e,
      sortingPosition: t
    } = this.props;
    return w(module, exports)
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
S(L, "defaultProps", {
  isDefaultChannel: false
})