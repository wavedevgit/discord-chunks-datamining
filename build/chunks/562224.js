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
  h = r(761274);
async function m(e, t) {
  var r, m, j, w, P, S, E, I, D, x;
  let C = p.default.getCurrentUser(),
    Z = f.Z.getVoiceChannelId(),
    k = c.Z.getChannel(Z),
    W = null == k ? void 0 : k.getGuildId(),
    N = null == (r = s.Z.getGuild(W)) ? void 0 : r.premiumTier;
  if (null == C || null == k || null == Z) return [!1, "no user or channel"];
  let R = null;
  if (null == (R = "number" == typeof e ? o.ZP.getGameForPID(e) : e)) return [!1, "no source"];
  if (!d.Z.getUseSystemScreensharePicker() && !await i.Z.hasPermission(h.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    })) return [!1, "no permission"];
  let {
    preset: _,
    resolution: A,
    fps: M,
    soundshareEnabled: G
  } = a.Z.getState(), L = null != (j = null == t ? void 0 : t.preset) ? j : _, [U, V] = null != (w = (0, O.Z)(L, C, N)) ? w : [], H = null != (P = null != U ? U : null == t ? void 0 : t.resolution) ? P : A, T = null != (S = null != V ? V : null == t ? void 0 : t.fps) ? S : M, Y = null != (E = null == t ? void 0 : t.previewDisabled) ? E : u.I0.getSetting(), B = null != (I = null == t ? void 0 : t.soundshareEnabled) ? I : G;
  return (0, v.Z)(L, H, T, C, N, k) || (L = y.tI.PRESET_VIDEO, H = y.LY.RESOLUTION_720, T = y.ws.FPS_30), (0, l.Rc)({
    preset: L,
    resolution: H,
    frameRate: T,
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
  }(R)), x = x = {
    audioSourceId: (null == (m = R.id) ? void 0 : m.startsWith(n.vA.CAMERA)) ? null == t ? void 0 : t.audioSourceId : void 0,
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