/** Chunk was on 61947 **/
"use strict";
r.d(t, {
  Z: () => h
}), r(388685);
var n = r(268146),
  o = r(872810),
  l = r(594190),
  i = r(751571),
  u = r(695346),
  a = r(361291),
  c = r(592125),
  s = r(430824),
  d = r(131951),
  f = r(944486),
  p = r(594174),
  b = r(358085),
  v = r(451467),
  O = r(537413),
  g = r(143135),
  y = r(37113),
  m = r(761274);
async function h(e, t) {
  var r, h, w, j, P, S, x, D, E, I;
  let k = p.default.getCurrentUser(),
    C = f.Z.getVoiceChannelId(),
    _ = c.Z.getChannel(C),
    Z = null == _ ? void 0 : _.getGuildId(),
    M = null == (r = s.Z.getGuild(Z)) ? void 0 : r.premiumTier;
  if (null == k || null == _ || null == C) return [!1, "no user or channel"];
  let R = null;
  if (null == (R = "number" == typeof e ? l.ZP.getGameForPID(e) : e)) return [!1, "no source"];
  if (!d.Z.getUseSystemScreensharePicker() && !await i.Z.hasPermission(m.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    })) return [!1, "no permission"];
  let {
    preset: G,
    resolution: N,
    fps: A,
    soundshareEnabled: W
  } = a.Z.getState(), L = null != (w = null == t ? void 0 : t.preset) ? w : G, [U, V] = null != (j = (0, O.Z)(L, k, M)) ? j : [], H = null != (P = null != U ? U : null == t ? void 0 : t.resolution) ? P : N, F = null != (S = null != V ? V : null == t ? void 0 : t.fps) ? S : A, T = null != (x = null == t ? void 0 : t.previewDisabled) ? x : u.I0.getSetting(), B = null != (D = null == t ? void 0 : t.soundshareEnabled) ? D : W;
  return (0, v.Z)(L, H, F, k, M, _) || (L = y.tI.PRESET_VIDEO, H = y.LY.RESOLUTION_720, F = y.ws.FPS_30), (0, o.Rc)({
    preset: L,
    resolution: H,
    frameRate: F,
    soundshareEnabled: B
  }), (0, o.WH)(Z, C, (E = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({}, function(e) {
    if (e.hasOwnProperty("pid")) return {
      pid: e.pid
    };
    let t = (0, g.Z)(void 0, e, l.ZP.getRunningGames()),
      r = !(0, b.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(n.vA.CAMERA)) || null == t ? null : t.pid;
    return null != r ? {
      pid: r
    } : {
      sourceId: e.id,
      sourceName: e.name,
      sourceIcon: e.icon
    }
  }(R)), I = I = {
    audioSourceId: (null == (h = R.id) ? void 0 : h.startsWith(n.vA.CAMERA)) ? null == t ? void 0 : t.audioSourceId : void 0,
    sound: B,
    previewDisabled: T,
    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(I)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(I)).forEach(function(e) {
    Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(I, e))
  }), E)), [!0, void 0]
}