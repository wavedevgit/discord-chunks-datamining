/** Chunk was on 98806 **/
n.d(t, {
  default: () => f
});
var r = n(200651),
  a = n(192379),
  i = n(442837),
  l = n(481060),
  o = n(313201),
  c = n(430824),
  s = n(427679),
  d = n(939863),
  u = n(540186),
  _ = n(609776),
  m = n(289584),
  b = n(180899),
  h = n(157925),
  g = n(388032),
  x = n(448930);

function p(e) {
  let {
    guild: t,
    channel: n,
    stageInstance: a,
    headerId: i,
    onClose: o,
    loading: c,
    error: s,
    onSave: u,
    defaultOptions: m,
    isSlideReady: b
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: x.content,
      children: [(0, r.jsx)(d.Z, {
        children: (0, r.jsx)("div", {
          className: x.stageIconBackground,
          children: (0, r.jsx)(l.ewx, {
            size: "custom",
            color: "currentColor",
            width: 32,
            height: 32,
            className: x.stageIcon
          })
        })
      }), (0, r.jsx)(l.X6q, {
        id: i,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: x.headerTitle,
        children: null == a ? g.NW.string(g.t.DDF0cH) : g.NW.string(g.t.YPdQOj)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: x.headerSubtitle,
        children: null == a ? g.NW.string(g.t.bqQIwc) : g.NW.string(g.t["I+9bLy"])
      })]
    }), (0, r.jsx)(_.Z, {
      guild: t,
      channel: n,
      onSave: u,
      error: s,
      loading: c,
      onClose: o,
      defaultOptions: m,
      isSlideReady: b
    })]
  })
}

function f(e) {
  var t, n, {
      channel: d,
      onClose: _,
      transitionState: g
    } = e,
    f = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["channel", "onClose", "transitionState"]);
  let v = (0, o.Dt)(),
    N = (0, i.e7)([c.Z], () => c.Z.getGuild(d.guild_id)),
    j = a.useMemo(() => s.Z.getStageInstanceByChannel(d.id), [d.id]),
    {
      loading: I,
      error: C,
      onSave: y
    } = (0, m.Z)(d, _),
    {
      modalStep: O,
      setModalStep: S,
      readySlide: E,
      handleSlideReady: T,
      savedOptions: P,
      handleSettingsSave: w,
      handleDelayedSave: k
    } = (0, b.Z)({
      stageInstance: j,
      defaultStep: h.lv.STAGE_CHANNEL_SETTINGS,
      error: C,
      onSave: y
    });
  return (a.useEffect(() => {
    null == N && _()
  }, [N, _]), null == N) ? null : (0, r.jsx)(l.Y0X, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({
    transitionState: g,
    "aria-labelledby": v
  }, f), n = n = {
    size: l.CgR.SMALL,
    children: (0, r.jsxs)(l.MyZ, {
      activeSlide: O,
      width: 440,
      onSlideReady: T,
      children: [(0, r.jsx)(l.Mi4, {
        id: h.lv.STAGE_CHANNEL_SETTINGS,
        children: (0, r.jsx)("div", {
          className: x.slideContainer,
          children: (0, r.jsx)(p, {
            guild: N,
            channel: d,
            stageInstance: j,
            headerId: v,
            onClose: _,
            loading: I,
            error: C,
            onSave: w,
            defaultOptions: P,
            isSlideReady: E === h.lv.STAGE_CHANNEL_SETTINGS
          })
        })
      }), (0, r.jsx)(l.Mi4, {
        id: h.lv.PUBLIC_STAGE_PREVIEW,
        children: (0, r.jsx)("div", {
          className: x.slideContainer,
          children: (0, r.jsx)(u.Z, {
            headerId: v,
            guild: N,
            channel: d,
            stageData: P,
            loading: I,
            onNext: k,
            onCancel: _,
            onBack: () => S(h.lv.STAGE_CHANNEL_SETTINGS)
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