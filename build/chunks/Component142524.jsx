/** Chunk was on 78572 **/
/** chunk id: 142524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk80682 = require("./80682.js"),
  Chunk643501 = require("./643501.js"),
  Chunk338234 = require("./338234.js"),
  Chunk376696 = require("./376696.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk279250 = require("./279250.js"),
  Chunk834757 = require("./834757.js"),
  Chunk727353 = require("./727353.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk945354 = require("./945354.js");
class j extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      user: e,
      streamApplication: t
    } = this.props;
    _.default.track(O.HAw.OPEN_POPOUT, {
      type: "Stream Preview",
      other_user_id: e.id,
      application_id: null != t ? t.id : null,
      application_name: null != t ? t.name : null,
      game_id: null != t ? t.id : null,
      is_streaming: true
    })
  }
  render() {
    let {
      activity: e,
      user: t,
      stream: n,
      previewIsOpen: i,
      onAction: l,
      hideTip: s,
      channel: o,
      onWatch: c,
      activeStream: p,
      currentUserId: f,
      canWatch: m,
      unavailableReason: g,
      streamApplication: y
    } = this.props;
    if (null == n) return null;
    let {
      enableUserHoverActivities: b
    } = (0, u.Uw)({
      guildId: null == o ? true : o.guild_id,
      location: "StreamPreviewPopout"
    });
    return (0, r.jsxs)("div", {
      className: a()(S.yt, {
        [S.P0]: i
      }),
      children: [(0, r.jsx)(v.Z, {
        stream: n,
        activeStream: p,
        streamActivity: e,
        streamApplication: y,
        user: t,
        currentUserId: f,
        canWatch: null != m && m,
        unavailableReason: g,
        onWatchStream: c,
        onAction: l,
        hideTip: s,
        className: S.Rh,
        wrapperClassName: true
      }), b && null != o && (0, r.jsx)(d.A, {
        channel: o,
        user: t,
        onAction: l
      })]
    })
  }
}

function x(e) {
  var t, n;
  let {
    user: l,
    channel: a
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["user", "channel"]), [d, _] = (0, s.yK)([b.A, m.A, g.A, c.default], () => (0, h.eo)(a, b.A, m.A, g.A, c.default)), v = (0, s.bG)([p.A], () => p.A.getStreamForUser(l.id, a.getGuildId())), O = (0, s.bG)([p.A], () => p.A.getActiveStreamForApplicationStream(v)), S = (0, s.bG)([f.default], () => f.default.getId()), x = (0, A.AO)(v), I = (0, s.bG)([y.A], () => (0, A.nr)(v, y.A)), T = i.useMemo(() => ({
    [a.guild_id]: [l.id]
  }), [a.guild_id, l.id]);
  return (0, o.E)(T, "StreamPreviewPopout"), (0, r.jsx)(j, (t = function(e) {
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
  }({}, u), n = n = {
    canWatch: d,
    unavailableReason: _,
    user: l,
    streamApplication: x,
    stream: v,
    activeStream: O,
    currentUserId: S,
    activity: I,
    channel: a
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