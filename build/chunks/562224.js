/** Chunk was on 66467 **/
"use strict";
r.d(t, {
  Z: () => y
}), r(388685);
var n = r(268146),
  l = r(872810),
  o = r(594190),
  i = r(751571),
  u = r(695346),
  a = r(361291),
  s = r(592125),
  c = r(430824),
  d = r(131951),
  f = r(944486),
  p = r(594174),
  b = r(358085),
  v = r(451467),
  g = r(537413),
  h = r(143135),
  m = r(37113),
  O = r(761274);
async function y(e, t) {
  var r, y, w, P, j, S, D, I, E, x;
  let k = p.default.getCurrentUser(),
    C = f.Z.getVoiceChannelId(),
    Z = s.Z.getChannel(C),
    M = null == Z ? void 0 : Z.getGuildId(),
    R = null == (r = c.Z.getGuild(M)) ? void 0 : r.premiumTier;
  if (null == k || null == Z || null == C) return [!1, "no user or channel"];
  let _ = null;
  if (null == (_ = "number" == typeof e ? o.ZP.getGameForPID(e) : e)) return [!1, "no source"];
  if (!d.Z.getUseSystemScreensharePicker() && !await i.Z.hasPermission(O.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    })) return [!1, "no permission"];
  let {
    preset: G,
    resolution: W,
    fps: A,
    soundshareEnabled: N
  } = a.Z.getState(), L = null != (w = null == t ? void 0 : t.preset) ? w : G, [U, V] = null != (P = (0, g.Z)(L, k, R)) ? P : [], H = null != (j = null != U ? U : null == t ? void 0 : t.resolution) ? j : W, F = null != (S = null != V ? V : null == t ? void 0 : t.fps) ? S : A, T = null != (D = null == t ? void 0 : t.previewDisabled) ? D : u.I0.getSetting(), B = null != (I = null == t ? void 0 : t.soundshareEnabled) ? I : N;
  return (0, v.Z)(L, H, F, k, R, Z) || (L = m.tI.PRESET_VIDEO, H = m.LY.RESOLUTION_720, F = m.ws.FPS_30), (0, l.Rc)({
    preset: L,
    resolution: H,
    frameRate: F,
    soundshareEnabled: B
  }), (0, l.WH)(M, C, (E = function(e) {
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
    let t = (0, h.Z)(void 0, e, o.ZP.getRunningGames()),
      r = !(0, b.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(n.vA.CAMERA)) || null == t ? null : t.pid;
    return null != r ? {
      pid: r
    } : {
      sourceId: e.id,
      sourceName: e.name,
      sourceIcon: e.icon
    }
  }(_)), x = x = {
    audioSourceId: (null == (y = _.id) ? void 0 : y.startsWith(n.vA.CAMERA)) ? null == t ? void 0 : t.audioSourceId : void 0,
    sound: B,
    previewDisabled: T,
    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(x)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(x)).forEach(function(e) {
    Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(x, e))
  }), E)), [!0, void 0]
}