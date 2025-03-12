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
  var n, O, P, E, S, y, Z, I, D, C;
  let R = v.default.getCurrentUser(),
    A = f.Z.getVoiceChannelId(),
    N = a.Z.getChannel(A),
    _ = null == N ? void 0 : N.getGuildId(),
    j = null === (n = d.Z.getGuild(_)) || void 0 === n ? void 0 : n.premiumTier;
  if (null == R || null == N || null == A) return [!1, "no user or channel"];
  let W = null;
  if (null == (W = "number" == typeof e ? l.ZP.getGameForPID(e) : e)) return [!1, "no source"];
  if (!c.Z.getUseSystemScreensharePicker() && !await o.Z.hasPermission(w.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    })) return [!1, "no permission"];
  let {
    preset: k,
    resolution: G,
    fps: L,
    soundshareEnabled: V
  } = s.Z.getState(), M = null !== (P = null == t ? void 0 : t.preset) && void 0 !== P ? P : k, [U, x] = null !== (E = (0, g.Z)(M, R, j)) && void 0 !== E ? E : [], T = null !== (S = null != U ? U : null == t ? void 0 : t.resolution) && void 0 !== S ? S : G, H = null !== (y = null != x ? x : null == t ? void 0 : t.fps) && void 0 !== y ? y : L, Y = null !== (Z = null == t ? void 0 : t.previewDisabled) && void 0 !== Z ? Z : u.I0.getSetting(), F = null !== (I = null == t ? void 0 : t.soundshareEnabled) && void 0 !== I ? I : V;
  return (0, h.Z)(M, T, H, R, j, N) || (M = m.tI.PRESET_VIDEO, T = m.LY.RESOLUTION_720, H = m.ws.FPS_30), u.I0.updateSetting(Y), (0, i.Rc)({
    preset: M,
    resolution: T,
    frameRate: H,
    soundshareEnabled: F
  }), (0, i.WH)(_, A, (D = function(e) {
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
  }(W)), C = C = {
    audioSourceId: (null === (O = W.id) || void 0 === O ? void 0 : O.startsWith(r.vA.CAMERA)) ? c.Z.getInputDeviceId() : void 0,
    sound: F,
    previewDisabled: Y,
    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(C)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(C)).forEach(function(e) {
    Object.defineProperty(D, e, Object.getOwnPropertyDescriptor(C, e))
  }), D)), [!0, void 0]
}