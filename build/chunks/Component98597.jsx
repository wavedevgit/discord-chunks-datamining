/** Chunk was on 41753 **/
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
  s = require.n(Chunk120356),
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
  Chunk81252 = require("./81252.js");

function x(e, t, n) {
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
      x(e, t, n[t])
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
  return null != t && !!t && !(0, v.ig)(n, e.type)
}

function w(e, t) {
  return null == t ? S.containerDefault : e > t ? S.containerDragAfter : S.containerDragBefore
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
        onMouseLeave: a,
        onFocus: u,
        onBlur: d
      } = e;
      return (0, i.jsx)(c.P3F, {
        className: s()(S.iconItem, n ? S.alwaysShown : true, r ? S.iconWithChannelInfo : S.iconNoChannelInfo),
        onClick: l,
        tabIndex: t,
        "aria-label": E.intl.string(E.t.OBr7Cw),
        onMouseEnter: o,
        onMouseLeave: a,
        onFocus: u,
        onBlur: d,
        children: (0, i.jsx)(c.xhG, {
          size: "xs",
          color: "currentColor",
          className: S.actionIcon
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
  if ((0, a.e7)([y.Z, C.Z], () => n || C.Z.getGuildId() === j.I_8 || !y.Z.can(j.Plq.MANAGE_CHANNELS, t) && !y.Z.can(j.Plq.MANAGE_ROLES, t) && !y.Z.can(j.Plq.MANAGE_WEBHOOKS, t) || (0, b.r8)(t.type) && !y.Z.can(j.Plq.VIEW_CHANNEL, t) || t.isGuildVocal() && !y.Z.can(j.Plq.CONNECT, t) || !b.dF.has(t.type) || t.isModeratorReportChannel())) return null;

  function d() {
    u.ZP.open(t.id)
  }
  return (0, i.jsx)(c.ua7, {
    text: E.intl.string(E.t["3gUsJS"]),
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: a,
        onBlur: u
      } = e;
      return (0, i.jsx)(c.P3F, {
        className: s()(S.iconItem, l ? S.alwaysShown : true, o ? S.iconWithChannelInfo : S.iconNoChannelInfo),
        onClick: d,
        tabIndex: r,
        "aria-label": E.intl.string(E.t["3gUsJS"]),
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: a,
        onBlur: u,
        children: (0, i.jsx)(c.ewm, {
          size: "xs",
          color: "currentColor",
          className: S.actionIcon
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
    forceShowButtons: f,
    hasChannelInfo: b = false
  } = e, {
    entrypoints: C
  } = (0, h._k)({
    location: "channel_base"
  }), v = (0, a.e7)([_.Z], () => _.Z.getGuild(t.getGuildId())), x = (0, a.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]), N = (0, a.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(t.id), [t.id]), w = (0, a.e7)([y.Z], () => (0, p.b)(y.Z, v, t, x)), Z = (0, a.e7)([y.Z], () => y.Z.can(j.Plq.CREATE_INSTANT_INVITE, t) ? E.intl.string(E.t.zJrgTE) : E.intl.string(E.t.Sd8Ix8)), T = C ? E.intl.string(E.t["EE+P0N"]) : Z, A = l.useRef(null);
  if (o || !w || t.isModeratorReportChannel()) return null;

  function R() {
    if (null != v) {
      let e = O.Z.getAllActiveStreams().filter(e => e.state !== j.jm8.ENDED && e.channelId === t.id);
      (0, c.ZDy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("7654"), n.e("41832")]).then(n.bind(n, 560114));
        return n => (0, i.jsx)(r, P(I({}, n), {
          guild: v,
          channel: t,
          streamUserId: 1 === e.length ? e[0].ownerId : null,
          source: j.t4x.GUILD_CHANNELS,
          guildScheduledEvent: N
        }))
      })
    }
  }
  let D = C ? c.oLu : c.ejJ,
    L = (0, i.jsx)(D, {
      size: "xs",
      className: S.actionIcon,
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
      className: s()(S.iconItem, f ? S.alwaysShown : true, b ? S.iconWithChannelInfo : S.iconNoChannelInfo)
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
    (0, f._U)(t.guild_id, t.id)
  };
  return (0, i.jsx)(c.ua7, {
    text: E.intl.string(E.t.ROh4T0),
    children: e => (0, i.jsx)(c.P3F, P(I({
      className: S.iconItem
    }, e), {
      onClick: n,
      "aria-label": E.intl.string(E.t.ROh4T0),
      children: (0, i.jsx)(c.Dio, {
        size: "xs",
        color: "currentColor",
        className: S.actionIcon
      })
    }))
  })
}

function D(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, f.dM)(t.guild_id, t.id, true, {
      section: j.jXE.CHANNEL_LIST
    })
  };
  return (0, i.jsx)(c.ua7, {
    text: E.intl.string(E.t["N2c/Ul"]),
    children: e => (0, i.jsx)(c.P3F, P(I({
      className: S.iconItem
    }, e), {
      onClick: n,
      "aria-label": E.intl.string(E.t["N2c/Ul"]),
      children: (0, i.jsx)(c.dz2, {
        size: "xs",
        color: "currentColor",
        className: S.actionIcon
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
x(L, "defaultProps", {
  isDefaultChannel: false
})