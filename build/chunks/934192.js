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
  f = n(37113),
  v = n(388032),
  j = n(23661);

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
    fps: b,
    sourceType: O
  }, y] = (0, g.E_)(), C = (0, i.e7)([m.default], () => m.default.getCurrentUser()), P = (0, i.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getVoiceChannelId())), E = null == P ? void 0 : P.getGuildId(), T = (0, i.e7)([u.Z], () => {
    var e;
    return null != E ? null === (e = u.Z.getGuild(E)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [I, w] = null !== (t = (0, h.Z)(N, C, T)) && void 0 !== t ? t : [f.LY.RESOLUTION_720, f.ws.FPS_30], _ = [{
    value: f.tI.PRESET_VIDEO,
    label: v.NW.string(v.t.HcwHc3)
  }, ...O === s.vA.CAMERA ? [] : [{
    value: f.tI.PRESET_DOCUMENTS,
    label: v.NW.string(v.t["rCa/jI"])
  }], {
    value: f.tI.PRESET_CUSTOM,
    label: v.NW.string(v.t["+eOtrK"])
  }], R = [{
    value: f.LY.RESOLUTION_720,
    label: "".concat(f.LY.RESOLUTION_720, "p")
  }, {
    value: f.LY.RESOLUTION_1080,
    label: "".concat(f.LY.RESOLUTION_1080, "p")
  }, {
    value: f.LY.RESOLUTION_1440,
    label: "".concat(f.LY.RESOLUTION_1440, "p")
  }, ...O === s.vA.CAMERA ? [] : [{
    value: f.LY.RESOLUTION_SOURCE,
    label: v.NW.string(v.t.XjXqzs)
  }]], W = [{
    value: f.ws.FPS_15,
    label: "".concat(f.ws.FPS_15, "fps")
  }, {
    value: f.ws.FPS_30,
    label: "".concat(f.ws.FPS_30, "fps")
  }, {
    value: f.ws.FPS_60,
    label: "".concat(f.ws.FPS_60, "fps")
  }];
  return l.useEffect(() => {
    (0, p.Z)(N, Z, b, C, T) || (y({
      type: "set_resolution",
      resolution: I
    }), y({
      type: "set_fps",
      fps: w
    }))
  }, [N, y, Z, b, C, T, I, w]), (0, r.jsxs)("div", {
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
    }), N !== f.tI.PRESET_CUSTOM && (0, r.jsxs)(a.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: [I === f.LY.RESOLUTION_SOURCE ? v.NW.string(v.t.XjXqzs) : "".concat(I, "p"), ", ", w, "fps"]
    }), N === f.tI.PRESET_CUSTOM && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.PhF, {
        popoutWidth: "auto",
        popoutPosition: "top",
        className: j.select,
        renderOptionLabel: e => e.value !== f.LY.RESOLUTION_720 ? (0, r.jsx)(S, {
          label: e.label
        }) : e.label,
        select: e => {
          (0, p.Z)(N, e, b, C, T) ? y({
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
        renderOptionLabel: e => e.value === f.ws.FPS_60 ? (0, r.jsx)(S, {
          label: e.label
        }) : e.label,
        select: e => {
          (0, p.Z)(N, Z, e, C, T) ? y({
            type: "set_fps",
            fps: e
          }): (0, x.E)({
            analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
            onClose: n
          })
        },
        isSelected: e => e === b,
        serialize: String,
        options: W
      })]
    })]
  })
}