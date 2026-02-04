/** Chunk was on 88474 **/
/** chunk id: 142524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk80682 = require("./80682.js"),
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
  Chunk727353 = require("./727353.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk945354 = require("./945354.js");
class O extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      user: e,
      streamApplication: t
    } = this.props;
    y.default.track(_.HAw.OPEN_POPOUT, {
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
      hideTip: o,
      onWatch: s,
      activeStream: c,
      currentUserId: u,
      canWatch: d,
      unavailableReason: f,
      streamApplication: p
    } = this.props;
    return null == n ? null : (0, r.jsx)("div", {
      className: a()(v.yt, {
        [v.P0]: i
      }),
      children: (0, r.jsx)(A.Z, {
        stream: n,
        activeStream: c,
        streamActivity: e,
        streamApplication: p,
        user: t,
        currentUserId: u,
        canWatch: null != d && d,
        unavailableReason: f,
        onWatchStream: s,
        onAction: l,
        hideTip: o,
        className: v.Rh
      })
    })
  }
}

function S(e) {
  var t, n;
  let {
    user: l,
    channel: a
  } = e, y = function(e, t) {
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
  }(e, ["user", "channel"]), [A, _] = (0, o.yK)([g.A, f.A, p.A, c.default], () => (0, h.eo)(a, g.A, f.A, p.A, c.default)), v = (0, o.bG)([u.A], () => u.A.getStreamForUser(l.id, a.getGuildId())), S = (0, o.bG)([u.A], () => u.A.getActiveStreamForApplicationStream(v)), j = (0, o.bG)([d.default], () => d.default.getId()), I = (0, b.AO)(v), x = (0, o.bG)([m.A], () => (0, b.nr)(v, m.A)), E = i.useMemo(() => ({
    [a.guild_id]: [l.id]
  }), [a.guild_id, l.id]);
  return (0, s.E)(E, "StreamPreviewPopout"), (0, r.jsx)(O, (t = function(e) {
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
  }({}, y), n = n = {
    canWatch: A,
    unavailableReason: _,
    user: l,
    streamApplication: I,
    stream: v,
    activeStream: S,
    currentUserId: j,
    activity: x,
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