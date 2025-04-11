/** Chunk was on 79887 **/
"use strict";
r.d(t, {
  Z: () => m
}), r(388685);
var n = r(268146),
  l = r(872810),
  o = r(594190),
  i = r(751571),
  u = r(695346),
  c = r(361291),
  a = r(592125),
  s = r(430824),
  d = r(131951),
  f = r(944486),
  p = r(594174),
  b = r(358085),
  v = r(451467),
  O = r(537413),
  g = r(143135),
  y = r(37113),
  h = r(761274);
async function m(e, t) {
  var r, m, j, w, P, S, E, I, D, x;
  let C = p.default.getCurrentUser(),
    Z = f.Z.getVoiceChannelId(),
    k = a.Z.getChannel(Z),
    W = null == k ? void 0 : k.getGuildId(),
    N = null == (r = s.Z.getGuild(W)) ? void 0 : r.premiumTier;
  if (null == C || null == k || null == Z) return [!1, "no user or channel"];
  let _ = null;
  if (null == (_ = "number" == typeof e ? o.ZP.getGameForPID(e) : e)) return [!1, "no source"];
  if (!d.Z.getUseSystemScreensharePicker() && !await i.Z.hasPermission(h.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    })) return [!1, "no permission"];
  let {
    preset: A,
    resolution: R,
    fps: M,
    soundshareEnabled: G
  } = c.Z.getState(), L = null != (j = null == t ? void 0 : t.preset) ? j : A, [V, U] = null != (w = (0, O.Z)(L, C, N)) ? w : [], T = null != (P = null != V ? V : null == t ? void 0 : t.resolution) ? P : R, H = null != (S = null != U ? U : null == t ? void 0 : t.fps) ? S : M, Y = null != (E = null == t ? void 0 : t.previewDisabled) ? E : u.I0.getSetting(), B = null != (I = null == t ? void 0 : t.soundshareEnabled) ? I : G;
  return (0, v.Z)(L, T, H, C, N, k) || (L = y.tI.PRESET_VIDEO, T = y.LY.RESOLUTION_720, H = y.ws.FPS_30), (0, l.Rc)({
    preset: L,
    resolution: T,
    frameRate: H,
    soundshareEnabled: B
  }), (0, l.WH)(W, Z, (D = function(e) {
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
    let t = (0, g.Z)(void 0, e, o.ZP.getRunningGames()),
      r = !(0, b.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(n.vA.CAMERA)) || null == t ? null : t.pid;
    return null != r ? {
      pid: r
    } : {
      sourceId: e.id,
      sourceName: e.name,
      sourceIcon: e.icon
    }
  }(_)), x = x = {
    audioSourceId: (null == (m = _.id) ? void 0 : m.startsWith(n.vA.CAMERA)) ? null == t ? void 0 : t.audioSourceId : void 0,
    sound: B,
    previewDisabled: Y,
    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(x)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(x)).forEach(function(e) {
    Object.defineProperty(D, e, Object.getOwnPropertyDescriptor(x, e))
  }), D)), [!0, void 0]
}