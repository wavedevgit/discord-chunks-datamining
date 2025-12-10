/** Chunk was on web.js **/
/** chunk id: 701362, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk717881 = require("./717881.jsx"),
  Chunk616780 = require("./616780.js"),
  Chunk850827 = require("./850827.jsx"),
  Chunk576855 = require("./576855.jsx"),
  Chunk258609 = require("./258609.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk102172 = require("./102172.js"),
  Chunk687516 = require("./687516.js"),
  Chunk718805 = require("./718805.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk839021 = require("./839021.js");

function N(e, t, n) {
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

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = x(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class L extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      user: e,
      streamApplication: t
    } = this.props;
    Chunk626135.default.track(Chunk981631.rMx.OPEN_POPOUT, {
      type: "Stream Preview",
      other_user_id: module.id,
      application_id: null != exports ? exports.id : null,
      application_name: null != exports ? exports.name : null,
      game_id: null != exports ? exports.id : null,
      is_streaming: true
    })
  }
  renderPreview(e) {
    let {
      onWatch: t,
      activeStream: n,
      currentUserId: i,
      canWatch: a,
      unavailableReason: o
    } = this.props;
    return (0, r.jsxs)(l.P3F, {
      onClick: t,
      className: A.previewContainer,
      children: [(0, r.jsx)(I.Z, {
        className: A.previewImage,
        stream: e
      }), a ? (0, r.jsx)("div", {
        className: A.previewHover,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: A.white,
          children: (0, S.Z)(e, n, i, o)
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
      hideTip: s
    } = this.props;
    return null == require ? null : (0, Chunk54381.jsx)("div", {
      className: o()(Chunk839021.streamPreviewWrapper, {
        [Chunk839021.mounted]: Chunk473749
      }),
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk839021.streamPreview,
        children: [this.renderPreview(require), (0, Chunk54381.jsxs)("div", {
          className: Chunk839021.body,
          children: [null != module ? (0, Chunk54381.jsx)(Chunk717881.Z, {
            hideHeader: true,
            type: Chunk717881.P.STREAM_PREVIEW,
            activity: module,
            user: exports,
            guildId: require.guildId,
            channelId: require.channelId,
            analyticsParams: {
              location: {
                page: Chunk981631.ZY5.GO_LIVE_MODAL,
                section: Chunk981631.jXE.STREAM_VIEWER_POPOUT
              }
            },
            onAction: Chunk120356
          }) : (0, Chunk54381.jsx)(Chunk850827.Z, {
            type: Chunk717881.P.STREAM_PREVIEW,
            applicationStream: require,
            user: exports,
            guildId: require.guildId,
            channelId: require.channelId,
            className: Chunk839021.activityActions,
            onAction: Chunk120356
          }), !Chunk442837 && (0, Chunk54381.jsx)(Chunk576855.Z, {
            type: Chunk576855.Z.Types.INLINE,
            className: Chunk839021.protip,
            children: __OVERLAY__ ? Chunk388032.intl.string(Chunk388032.t.YRdw70) : Chunk388032.intl.string(Chunk388032.t.CCTgbF)
          })]
        })]
      })
    })
  }
}

function j(e) {
  var {
    user: t,
    channel: n
  } = e, a = D(e, ["user", "channel"]);
  let [o, l] = (0, s.Wu)([b.Z, h.Z, g.Z, p.default], () => (0, O.p9)(n, b.Z, h.Z, g.Z, p.default)), c = (0, s.e7)([_.Z], () => _.Z.getStreamForUser(t.id, n.getGuildId())), d = (0, s.e7)([_.Z], () => _.Z.getActiveStreamForApplicationStream(c)), f = (0, s.e7)([m.default], () => m.default.getId()), y = (0, v.Cf)(c), S = (0, s.e7)([E.Z], () => (0, v.Um)(c, E.Z)), I = i.useMemo(() => ({
    [n.guild_id]: [t.id]
  }), [n.guild_id, t.id]);
  return (0, u.$)(I, "StreamPreviewPopout"), (0, r.jsx)(L, w(P({}, a), {
    canWatch: o,
    unavailableReason: l,
    user: t,
    streamApplication: y,
    stream: c,
    activeStream: d,
    currentUserId: f,
    activity: S
  }))
}