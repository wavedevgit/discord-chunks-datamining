/** Chunk was on 52657 **/
"use strict";
n.d(t, {
  Z: () => O
}), n(47120);
var r = n(268146),
  i = n(872810),
  l = n(594190),
  o = n(751571),
  u = n(695346),
  s = n(361291),
  a = n(592125),
  d = n(430824),
  c = n(131951),
  f = n(944486),
  v = n(594174),
  p = n(358085),
  h = n(451467),
  g = n(537413),
  b = n(143135),
  m = n(37113),
  w = n(761274);
async function O(e, t) {
  var n, O, P, E, S, y, Z, I, D, C, R, A;
  let N = v.default.getCurrentUser(),
    _ = f.Z.getVoiceChannelId(),
    j = a.Z.getChannel(_),
    W = null == j ? void 0 : j.getGuildId(),
    k = null === (n = d.Z.getGuild(W)) || void 0 === n ? void 0 : n.premiumTier;
  if (null == N || null == j || null == _) return [!1, "no user or channel"];
  let G = null;
  if (null == (G = "number" == typeof e ? l.ZP.getGameForPID(e) : e)) return [!1, "no source"];
  if (!c.Z.getUseSystemScreensharePicker() && !await o.Z.hasPermission(w.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    })) return [!1, "no permission"];
  let {
    preset: L,
    resolution: V,
    fps: M,
    soundshareEnabled: U
  } = s.Z.getState(), x = null !== (P = null == t ? void 0 : t.preset) && void 0 !== P ? P : L, [T, H] = null !== (E = (0, g.Z)(x, N, k)) && void 0 !== E ? E : [], Y = null !== (y = null !== (S = null == t ? void 0 : t.resolution) && void 0 !== S ? S : T) && void 0 !== y ? y : V, F = null !== (I = null !== (Z = null == t ? void 0 : t.fps) && void 0 !== Z ? Z : H) && void 0 !== I ? I : M, z = null !== (D = null == t ? void 0 : t.previewDisabled) && void 0 !== D ? D : u.I0.getSetting(), B = null !== (C = null == t ? void 0 : t.soundshareEnabled) && void 0 !== C ? C : U;
  return (0, h.Z)(x, Y, F, N, k, j) || (x = m.tI.PRESET_VIDEO, Y = m.LY.RESOLUTION_720, F = m.ws.FPS_30), u.I0.updateSetting(z), (0, i.Rc)({
    preset: x,
    resolution: Y,
    frameRate: F,
    soundshareEnabled: B
  }), (0, i.WH)(W, _, (R = function(e) {
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
  }({}, function(e) {
    if (e.hasOwnProperty("pid")) return {
      pid: e.pid
    };
    let t = (0, b.Z)(void 0, e, l.ZP.getRunningGames()),
      n = !(0, p.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
    return null != n ? {
      pid: n
    } : {
      sourceId: e.id,
      sourceName: e.name,
      sourceIcon: e.icon
    }
  }(G)), A = A = {
    audioSourceId: (null === (O = G.id) || void 0 === O ? void 0 : O.startsWith(r.vA.CAMERA)) ? c.Z.getInputDeviceId() : void 0,
    sound: B,
    previewDisabled: z,
    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(A)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(A)).forEach(function(e) {
    Object.defineProperty(R, e, Object.getOwnPropertyDescriptor(A, e))
  }), R)), [!0, void 0]
}