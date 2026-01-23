/** Chunk was on web.js **/
/** chunk id: 142524, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk302959 = require("./302959.jsx"),
  Chunk80682 = require("./80682.js"),
  Chunk592182 = require("./592182.jsx"),
  Chunk12351 = require("./12351.jsx"),
  Chunk643501 = require("./643501.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk279250 = require("./279250.js"),
  Chunk834757 = require("./834757.js"),
  Chunk877315 = require("./877315.js"),
  Chunk607407 = require("./607407.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk945354 = require("./945354.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = x(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class L extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      user: e,
      streamApplication: t
    } = this.props;
    b.default.track(S.HAw.OPEN_POPOUT, {
      type: "Stream Preview",
      other_user_id: e.id,
      application_id: null != t ? t.id : null,
      application_name: null != t ? t.name : null,
      game_id: null != t ? t.id : null,
      is_streaming: true
    })
  }
  renderPreview(e) {
    let {
      onWatch: t,
      activeStream: n,
      currentUserId: i,
      canWatch: a,
      unavailableReason: s
    } = this.props;
    return (0, r.jsxs)(l.DUT, {
      onClick: t,
      className: C.i1,
      children: [(0, r.jsx)(I.A, {
        className: C.oz,
        stream: e
      }), a ? (0, r.jsx)("div", {
        className: C.xD,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: C.ON,
          children: (0, A.A)(e, n, i, s)
        })
      }) : null]
    })
  }
  render() {
    let {
      activity: e,
      user: t,
      stream: n,
      previewIsOpen: i,
      onAction: a,
      hideTip: o
    } = this.props;
    return null == n ? null : (0, r.jsx)("div", {
      className: s()(C.yt, {
        [C.P0]: i
      }),
      children: (0, r.jsxs)("div", {
        className: C.Rh,
        children: [this.renderPreview(n), (0, r.jsxs)("div", {
          className: C.rf,
          children: [null != e ? (0, r.jsx)(c.A, {
            hideHeader: true,
            type: c.M.STREAM_PREVIEW,
            activity: e,
            user: t,
            guildId: n.guildId,
            channelId: n.channelId,
            analyticsParams: {
              location: {
                page: S.liQ.GO_LIVE_MODAL,
                section: S.JJy.STREAM_VIEWER_POPOUT
              }
            },
            onAction: a
          }) : (0, r.jsx)(d.A, {
            type: c.M.STREAM_PREVIEW,
            applicationStream: n,
            user: t,
            guildId: n.guildId,
            channelId: n.channelId,
            className: C.lx,
            onAction: a
          }), !o && (0, r.jsx)(f.A, {
            type: f.A.Types.INLINE,
            className: C.PP,
            children: __OVERLAY__ ? T.intl.string(T.t.YRdw70) : T.intl.string(T.t.CCTgbF)
          })]
        })]
      })
    })
  }
}

function j(e) {
  let {
    user: t,
    channel: n
  } = e, a = D(e, ["user", "channel"]), [s, l] = (0, o.yK)([y.A, m.A, g.A, p.default], () => (0, O.eo)(n, y.A, m.A, g.A, p.default)), c = (0, o.bG)([_.A], () => _.A.getStreamForUser(t.id, n.getGuildId())), d = (0, o.bG)([_.A], () => _.A.getActiveStreamForApplicationStream(c)), f = (0, o.bG)([h.default], () => h.default.getId()), b = (0, v.AO)(c), A = (0, o.bG)([E.A], () => (0, v.nr)(c, E.A)), I = i.useMemo(() => ({
    [n.guild_id]: [t.id]
  }), [n.guild_id, t.id]);
  return (0, u.E)(I, "StreamPreviewPopout"), (0, r.jsx)(L, P(w({}, a), {
    canWatch: s,
    unavailableReason: l,
    user: t,
    streamApplication: b,
    stream: c,
    activeStream: d,
    currentUserId: f,
    activity: A
  }))
}