/** Chunk was on 9109 **/
/** chunk id: 581355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk430824 = require("./430824.js"),
  Chunk427679 = require("./427679.js"),
  Chunk939863 = require("./939863.jsx"),
  Chunk540186 = require("./540186.jsx"),
  Chunk609776 = require("./609776.jsx"),
  Chunk289584 = require("./289584.js"),
  Chunk180899 = require("./180899.js"),
  Chunk157925 = require("./157925.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk243791 = require("./243791.js");

function f(e) {
  let {
    guild: t,
    channel: n,
    stageInstance: i,
    headerId: l,
    onClose: o,
    loading: s,
    error: c,
    onSave: u,
    defaultOptions: m,
    isSlideReady: h
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: p.content,
      children: [(0, r.jsx)(d.Z, {
        children: (0, r.jsx)("div", {
          className: p.stageIconBackground,
          children: (0, r.jsx)(a.ewx, {
            size: "custom",
            color: "currentColor",
            width: 32,
            height: 32,
            className: p.stageIcon
          })
        })
      }), (0, r.jsx)(a.X6q, {
        id: l,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: p.headerTitle,
        children: null == i ? b.intl.string(b.t.DDF0cH) : b.intl.string(b.t.YPdQOj)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: p.headerSubtitle,
        children: null == i ? b.intl.string(b.t.bqQIwc) : b.intl.string(b.t["I+9bLy"])
      })]
    }), (0, r.jsx)(x.Z, {
      guild: t,
      channel: n,
      onSave: u,
      error: c,
      loading: s,
      onClose: o,
      defaultOptions: m,
      isSlideReady: h
    })]
  })
}

function v(e) {
  var t, n, {
      channel: d,
      onClose: x,
      transitionState: b
    } = e,
    v = function(e, t) {
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
    }(e, ["channel", "onClose", "transitionState"]);
  let _ = (0, o.Dt)(),
    j = (0, l.e7)([s.Z], () => s.Z.getGuild(d.guild_id)),
    N = i.useMemo(() => c.Z.getStageInstanceByChannel(d.id), [d.id]),
    {
      loading: C,
      error: I,
      onSave: y
    } = (0, m.Z)(d, x),
    {
      modalStep: O,
      setModalStep: S,
      readySlide: E,
      handleSlideReady: w,
      savedOptions: T,
      handleSettingsSave: k,
      handleDelayedSave: P
    } = (0, h.Z)({
      stageInstance: N,
      defaultStep: g.lv.STAGE_CHANNEL_SETTINGS,
      error: I,
      onSave: y
    });
  return (i.useEffect(() => {
    null == j && x()
  }, [j, x]), null == j) ? null : (0, r.jsx)(a.Y0X, (t = function(e) {
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
  }({
    transitionState: b,
    "aria-labelledby": _
  }, v), n = n = {
    size: a.CgR.SMALL,
    parentComponent: "StageChannelSettingsModal",
    children: (0, r.jsxs)(a.MyZ, {
      activeSlide: O,
      width: 440,
      onSlideReady: w,
      children: [(0, r.jsx)(a.Mi4, {
        id: g.lv.STAGE_CHANNEL_SETTINGS,
        children: (0, r.jsx)("div", {
          className: p.slideContainer,
          children: (0, r.jsx)(f, {
            guild: j,
            channel: d,
            stageInstance: N,
            headerId: _,
            onClose: x,
            loading: C,
            error: I,
            onSave: k,
            defaultOptions: T,
            isSlideReady: E === g.lv.STAGE_CHANNEL_SETTINGS
          })
        })
      }), (0, r.jsx)(a.Mi4, {
        id: g.lv.PUBLIC_STAGE_PREVIEW,
        children: (0, r.jsx)("div", {
          className: p.slideContainer,
          children: (0, r.jsx)(u.Z, {
            headerId: _,
            guild: j,
            channel: d,
            stageData: T,
            loading: C,
            onNext: P,
            onCancel: x,
            onBack: () => S(g.lv.STAGE_CHANNEL_SETTINGS)
          })
        })
      })]
    })
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