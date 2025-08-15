/** Chunk was on 96750 **/
/** chunk id: 701362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
class E extends Chunk647438.PureComponent {
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
      canWatch: l,
      unavailableReason: a
    } = this.props;
    return (0, r.jsxs)(s.P3F, {
      onClick: t,
      className: C.previewContainer,
      children: [(0, r.jsx)(x.Z, {
        className: C.previewImage,
        stream: e
      }), l ? (0, r.jsx)("div", {
        className: C.previewHover,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: C.white,
          children: (0, S.Z)(e, n, i, a)
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
      onAction: l,
      hideTip: o
    } = this.props;
    return null == require ? null : (0, Chunk951288.jsx)("div", {
      className: a()(Chunk839021.streamPreviewWrapper, {
        [Chunk839021.mounted]: Chunk647438
      }),
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk839021.streamPreview,
        children: [this.renderPreview(require), (0, Chunk951288.jsxs)("div", {
          className: Chunk839021.body,
          children: [null != module ? (0, Chunk951288.jsx)(Chunk717881.Z, {
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
          }) : (0, Chunk951288.jsx)(Chunk850827.Z, {
            type: Chunk717881.P.STREAM_PREVIEW,
            applicationStream: require,
            user: exports,
            guildId: require.guildId,
            channelId: require.channelId,
            className: Chunk839021.activityActions,
            color: Chunk839021.watchButton,
            onAction: Chunk120356
          }), !Chunk442837 && (0, Chunk951288.jsx)(Chunk576855.Z, {
            type: Chunk576855.Z.Types.INLINE,
            className: Chunk839021.protip,
            children: __OVERLAY__ ? Chunk388032.intl.string(Chunk388032.t["YRdw7+"]) : Chunk388032.intl.string(Chunk388032.t.CCTgbG)
          })]
        })]
      })
    })
  }
}

function w(e) {
  var t, n, {
      user: l,
      channel: a
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["user", "channel"]);
  let [c, d] = (0, o.Wu)([h.Z, v.Z, _.Z, f.Z], () => (0, O.p9)(a, h.Z, v.Z, _.Z, f.Z)), p = (0, o.e7)([m.Z], () => m.Z.getStreamForUser(l.id, a.getGuildId())), y = (0, o.e7)([m.Z], () => m.Z.getActiveStreamForApplicationStream(p)), S = (0, o.e7)([g.default], () => g.default.getId()), x = (0, j.Cf)(p), I = (0, o.e7)([b.Z], () => (0, j.Um)(p, b.Z)), P = i.useMemo(() => ({
    [a.guild_id]: [l.id]
  }), [a.guild_id, l.id]);
  return (0, u.$)(P), (0, r.jsx)(E, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, s), n = n = {
    canWatch: c,
    unavailableReason: d,
    user: l,
    streamApplication: x,
    stream: p,
    activeStream: y,
    currentUserId: S,
    activity: I
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}