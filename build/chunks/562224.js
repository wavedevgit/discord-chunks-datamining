/** Chunk was on 58173 **/
n.d(t, {
  Z: () => x
}), n(47120);
var r = n(268146),
  l = n(872810),
  i = n(594190),
  o = n(751571),
  s = n(695346),
  a = n(361291),
  c = n(592125),
  u = n(430824),
  d = n(131951),
  h = n(944486),
  f = n(594174),
  p = n(358085),
  g = n(451467),
  v = n(537413),
  N = n(143135),
  y = n(37113),
  O = n(761274);
async function x(e, t) {
  var n, x, m, b, E, C, j, I, S, P;
  let T = f.default.getCurrentUser(),
    w = h.Z.getVoiceChannelId(),
    Z = c.Z.getChannel(w),
    _ = null == Z ? void 0 : Z.getGuildId(),
    R = null === (n = u.Z.getGuild(_)) || void 0 === n ? void 0 : n.premiumTier;
  if (null == T || null == Z || null == w) return [!1, "no user or channel"];
  let A = null;
  if (null == (A = "number" == typeof e ? i.ZP.getGameForPID(e) : e)) return [!1, "no source"];
  if (!d.Z.getUseSystemScreensharePicker() && !await o.Z.hasPermission(O.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    })) return [!1, "no permission"];
  let {
    preset: W,
    resolution: D,
    fps: k,
    soundshareEnabled: M
  } = a.Z.getState(), B = null !== (m = null == t ? void 0 : t.preset) && void 0 !== m ? m : W, [U, L] = null !== (b = (0, v.Z)(B, T, R)) && void 0 !== b ? b : [], G = null !== (E = null != U ? U : null == t ? void 0 : t.resolution) && void 0 !== E ? E : D, V = null !== (C = null != L ? L : null == t ? void 0 : t.fps) && void 0 !== C ? C : k, F = null !== (j = null == t ? void 0 : t.previewDisabled) && void 0 !== j ? j : s.I0.getSetting(), K = null !== (I = null == t ? void 0 : t.soundshareEnabled) && void 0 !== I ? I : M;
  return (0, g.Z)(B, G, V, T, R, Z) || (B = y.tI.PRESET_VIDEO, G = y.LY.RESOLUTION_720, V = y.ws.FPS_30), (0, l.Rc)({
    preset: B,
    resolution: G,
    frameRate: V,
    soundshareEnabled: K
  }), (0, l.WH)(_, w, (S = function(e) {
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
    let t = (0, N.Z)(void 0, e, i.ZP.getRunningGames()),
      n = !(0, p.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
    return null != n ? {
      pid: n
    } : {
      sourceId: e.id,
      sourceName: e.name,
      sourceIcon: e.icon
    }
  }(A)), P = P = {
    audioSourceId: (null === (x = A.id) || void 0 === x ? void 0 : x.startsWith(r.vA.CAMERA)) ? null == t ? void 0 : t.audioSourceId : void 0,
    sound: K,
    previewDisabled: F,
    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(P)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(P)).forEach(function(e) {
    Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(P, e))
  }), S)), [!0, void 0]
}