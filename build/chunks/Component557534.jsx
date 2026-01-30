/** Chunk was on 1113 **/
/** chunk id: 557534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => D,
  Jd: () => T,
  O6: () => N,
  gQ: () => P,
  h$: () => I
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk698441 = require("./698441.js"),
  Chunk855687 = require("./855687.js"),
  Chunk816662 = require("./816662.js"),
  Chunk446600 = require("./446600.js"),
  Chunk728321 = require("./728321.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk616356 = require("./616356.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk343360 = require("./343360.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk728444 = require("./728444.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function I(e, t, n) {
  return null != t && !!t && !(0, j.ws)(n, e.type)
}

function N(e, t) {
  return null == t ? E.fx : e > t ? E.mU : E.TR
}

function T(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: r,
    forceShowButtons: i,
    hasChannelInfo: s = false
  } = e;
  return (0, o.bG)([O.A, _.A], () => n || _.A.getGuildId() === x.YYv || !O.A.can(x.xBc.MANAGE_CHANNELS, t) && !O.A.can(x.xBc.MANAGE_ROLES, t) && !O.A.can(x.xBc.MANAGE_WEBHOOKS, t) || (0, b.tr)(t.type) && !O.A.can(x.xBc.VIEW_CHANNEL, t) || t.isGuildVocal() && !O.A.can(x.xBc.CONNECT, t) || !b.bk.has(t.type) || t.isModeratorReportChannel()) ? null : (0, l.jsx)(c.m, {
    asContainer: true,
    text: v.intl.string(v.t["3gUsJb"]),
    children: (0, l.jsx)(u.DUT, {
      className: a()(E.Xs, i ? E.Tf : true, s ? E.bw : E.UI),
      onClick: function() {
        d.Ay.open(t.id)
      },
      tabIndex: r,
      "aria-label": v.intl.string(v.t["3gUsJb"]),
      children: (0, l.jsx)(u.Zes, {
        size: "xs",
        color: "currentColor",
        className: E.gE
      })
    })
  })
}

function P(e) {
  let {
    channel: t,
    isDefaultChannel: r = false,
    locked: s,
    tabIndex: d,
    forceShowButtons: g,
    hasChannelInfo: b = false
  } = e, _ = (0, o.bG)([y.A], () => y.A.getGuild(t.getGuildId())), j = (0, o.bG)([f.A], () => f.A.getStageInstanceByChannel(t.id), [t.id]), C = (0, o.bG)([h.Ay], () => h.Ay.getActiveEventByChannel(t.id), [t.id]), I = (0, o.bG)([O.A], () => (0, p.K)(O.A, _, t, j)), N = (0, o.bG)([], () => (null == t ? true : t.type) === x.rbe.GUILD_VOICE ? v.intl.string(v.t["EE+P0H"]) : v.intl.string(v.t["0jeAXt"])), T = i.useRef(null);
  if (s || !I || t.isModeratorReportChannel()) return null;
  let P = (0, l.jsx)(u.Rvf, {
    size: "xs",
    className: E.gE,
    "aria-hidden": true,
    color: "currentColor"
  });
  return r && (P = (0, l.jsx)(m.A, {
    childRef: T,
    tutorialId: "instant-invite",
    position: "left",
    children: (0, l.jsx)("div", {
      ref: T,
      children: P
    })
  })), (0, l.jsx)(c.m, {
    asContainer: true,
    text: N,
    children: (0, l.jsx)(u.DUT, {
      className: a()(E.Xs, g ? E.Tf : true, b ? E.bw : E.UI),
      onClick: function() {
        if (null != _) {
          let e = A.A.getAllActiveStreams().filter(e => e.state !== x.XYD.ENDED && e.channelId === t.id);
          (0, u.mMO)(async () => {
            let {
              default: r
            } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
            return n => {
              var i, s;
              return (0, l.jsx)(r, (i = S({}, n), s = s = {
                guild: _,
                channel: t,
                streamUserId: 1 === e.length ? e[0].ownerId : null,
                source: x.PE1.GUILD_CHANNELS,
                guildScheduledEvent: C
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(s)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
              }), i))
            }
          })
        }
      },
      tabIndex: d,
      "aria-label": N,
      children: P
    })
  })
}

function w(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsx)(c.m, {
    asContainer: true,
    text: v.intl.string(v.t["ROh4T+"]),
    children: (0, l.jsx)(u.DUT, {
      className: E.Xs,
      onClick: () => {
        (0, g.Ol)(t.guild_id, t.id)
      },
      "aria-label": v.intl.string(v.t["ROh4T+"]),
      children: (0, l.jsx)(u.PGe, {
        size: "xs",
        color: "currentColor",
        className: E.gE
      })
    })
  })
}

function R(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsx)(c.m, {
    asContainer: true,
    text: v.intl.string(v.t["N2c/Un"]),
    children: (0, l.jsx)(u.DUT, {
      className: E.Xs,
      onClick: () => {
        (0, g.jA)(t.guild_id, t.id, true, {
          section: x.JJy.CHANNEL_LIST
        })
      },
      "aria-label": v.intl.string(v.t["N2c/Un"]),
      children: (0, l.jsx)(u.A9s, {
        size: "xs",
        color: "currentColor",
        className: E.gE
      })
    })
  })
}
class D extends(r = Chunk64700.PureComponent) {
  renderEditButton() {
    return (0, l.jsx)(T, S({}, this.props))
  }
  renderInviteButton() {
    return (0, l.jsx)(P, S({}, this.props))
  }
  renderRemoveSuggestionButton() {
    return (0, l.jsx)(w, S({}, this.props))
  }
  renderAcceptSuggestionButton() {
    return (0, l.jsx)(R, S({}, this.props))
  }
  getClassName() {
    let {
      position: e,
      sortingPosition: t
    } = this.props;
    return N(e, t)
  }
  isDisabled() {
    let {
      channel: e,
      sorting: t,
      sortingType: n
    } = this.props;
    return I(e, t, n)
  }
}
C(D, "defaultProps", {
  isDefaultChannel: false
})