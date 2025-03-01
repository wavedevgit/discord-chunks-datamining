/** Chunk was on 79477 **/
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(200651),
  l = n(192379),
  s = n(268146),
  i = n(442837),
  a = n(481060),
  o = n(100527),
  c = n(592125),
  u = n(430824),
  d = n(944486),
  m = n(594174),
  p = n(451467),
  h = n(537413),
  g = n(615161),
  x = n(156582),
  v = n(37113),
  f = n(388032),
  j = n(929929);

function S(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: j.premiumOptionContainer,
    children: [t, (0, r.jsx)(a.SrA, {
      size: "xs",
      color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
    })]
  })
}

function N(e) {
  var t;
  let {
    onClose: n
  } = e, [{
    preset: N,
    resolution: Z,
    fps: O,
    sourceType: b
  }, y] = (0, g.E_)(), P = (0, i.e7)([m.default], () => m.default.getCurrentUser()), C = (0, i.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getVoiceChannelId())), E = null == C ? void 0 : C.getGuildId(), I = (0, i.e7)([u.Z], () => {
    var e;
    return null != E ? null === (e = u.Z.getGuild(E)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [T, w] = null !== (t = (0, h.Z)(N, P, I)) && void 0 !== t ? t : [v.LY.RESOLUTION_720, v.ws.FPS_30], _ = [{
    value: v.tI.PRESET_VIDEO,
    label: f.NW.string(f.t.HcwHc3)
  }, ...b === s.vA.CAMERA ? [] : [{
    value: v.tI.PRESET_DOCUMENTS,
    label: f.NW.string(f.t["rCa/jI"])
  }], {
    value: v.tI.PRESET_CUSTOM,
    label: f.NW.string(f.t["+eOtrK"])
  }], R = [{
    value: v.LY.RESOLUTION_720,
    label: "".concat(v.LY.RESOLUTION_720, "p")
  }, {
    value: v.LY.RESOLUTION_1080,
    label: "".concat(v.LY.RESOLUTION_1080, "p")
  }, {
    value: v.LY.RESOLUTION_1440,
    label: "".concat(v.LY.RESOLUTION_1440, "p")
  }, ...b === s.vA.CAMERA ? [] : [{
    value: v.LY.RESOLUTION_SOURCE,
    label: f.NW.string(f.t.XjXqzs)
  }]], W = [{
    value: v.ws.FPS_15,
    label: "".concat(v.ws.FPS_15, "fps")
  }, {
    value: v.ws.FPS_30,
    label: "".concat(v.ws.FPS_30, "fps")
  }, {
    value: v.ws.FPS_60,
    label: "".concat(v.ws.FPS_60, "fps")
  }];
  return l.useEffect(() => {
    (0, p.Z)(N, Z, O, P, I) || (y({
      type: "set_resolution",
      resolution: T
    }), y({
      type: "set_fps",
      fps: w
    }))
  }, [N, y, Z, O, P, I, T, w]), (0, r.jsxs)("div", {
    className: j.root,
    children: [(0, r.jsx)(a.PhF, {
      popoutPosition: "top",
      className: j.presetSelect,
      select: e => y({
        type: "set_preset",
        preset: e
      }),
      isSelected: e => e === N,
      serialize: String,
      options: _
    }), N !== v.tI.PRESET_CUSTOM && (0, r.jsxs)(a.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: [T === v.LY.RESOLUTION_SOURCE ? f.NW.string(f.t.XjXqzs) : "".concat(T, "p"), ", ", w, "fps"]
    }), N === v.tI.PRESET_CUSTOM && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.PhF, {
        popoutWidth: "auto",
        popoutPosition: "top",
        className: j.select,
        renderOptionLabel: e => e.value !== v.LY.RESOLUTION_720 ? (0, r.jsx)(S, {
          label: e.label
        }) : e.label,
        select: e => {
          (0, p.Z)(N, e, O, P, I) ? y({
            type: "set_resolution",
            resolution: e
          }): (0, x.E)({
            analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
            onClose: n
          })
        },
        isSelected: e => e === Z,
        serialize: String,
        options: R
      }), (0, r.jsx)(a.PhF, {
        popoutPosition: "top",
        popoutWidth: "auto",
        className: j.select,
        renderOptionLabel: e => e.value === v.ws.FPS_60 ? (0, r.jsx)(S, {
          label: e.label
        }) : e.label,
        select: e => {
          (0, p.Z)(N, Z, e, P, I) ? y({
            type: "set_fps",
            fps: e
          }): (0, x.E)({
            analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
            onClose: n
          })
        },
        isSelected: e => e === O,
        serialize: String,
        options: W
      })]
    })]
  })
}