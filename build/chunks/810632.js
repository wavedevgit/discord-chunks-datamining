/** Chunk was on 37874 **/
n.d(t, {
  B: () => N
}), n(230036), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(442837),
  l = n(481060),
  a = n(872810),
  s = n(594190),
  c = n(74299),
  u = n(451467),
  d = n(537413),
  p = n(830461),
  f = n(989941),
  h = n(567126),
  g = n(143135),
  _ = n(751571),
  m = n(695346),
  v = n(361291),
  O = n(592125),
  b = n(430824),
  y = n(131951),
  E = n(944486),
  x = n(594174),
  S = n(449224),
  I = n(358085),
  C = n(981631),
  j = n(37113),
  w = n(761274),
  Z = n(388032);

function N(e) {
  let t = (0, o.e7)([E.Z], () => E.Z.getVoiceChannelId()),
    N = (0, o.e7)([O.Z], () => O.Z.getChannel(t), [t]),
    P = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
    T = null == N ? void 0 : N.getGuildId(),
    k = (0, o.e7)([y.Z], () => (0, c.Z)(y.Z));
  async function A() {
    var e;
    return null !== (e = (await (0, p._)()).sort((e, t) => (0, h.ov)(t) - (0, h.ov)(e))[0]) && void 0 !== e ? e : null
  }
  let D = r.useCallback(async () => {
    var e, n, i;
    if (null == N || null == t || null == P) return !1;
    let r = await A(),
      o = (0, I.isWindows)() ? (0, f.Z)(s.ZP, S.Z) : null;
    if (null == o && null == r) return !1;
    let l = null != T ? null === (e = b.Z.getGuild(T)) || void 0 === e ? void 0 : e.premiumTier : null,
      {
        preset: c,
        resolution: p,
        fps: h,
        soundshareEnabled: O
      } = v.Z.getState(),
      [E, x] = null !== (n = (0, d.Z)(c, P, l)) && void 0 !== n ? n : [j.LY.RESOLUTION_720, j.ws.FPS_30],
      C = c,
      Z = p,
      k = h;
    C !== j.tI.PRESET_CUSTOM && (Z = E, k = x), (0, u.Z)(C, Z, k, P, l) || (Z = E, k = x), (0, u.Z)(C, Z, k, P, l, N) || (C = j.tI.PRESET_VIDEO, Z = j.LY.RESOLUTION_720, k = j.ws.FPS_30), (0, a.Rc)({
      preset: C,
      resolution: Z,
      frameRate: k,
      soundshareEnabled: O
    });
    let D = (0, g.Z)(o, r, s.ZP.getRunningGames()),
      L = !(0, I.isWindows)() || null == D || (null == r ? void 0 : r.id.startsWith("camera:")) || null == D ? null : D.pid,
      R = null,
      W = null;
    return null == L && null != r && (R = r.id, W = r.name), !!(y.Z.getUseSystemScreensharePicker() || await _.Z.hasPermission(w.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    })) && ((0, a.WH)(T, t, {
      pid: L,
      sourceId: R,
      sourceName: W,
      audioSourceId: null,
      sound: O,
      previewDisabled: null !== (i = m.I0.getSetting()) && void 0 !== i && i
    }), !0)
  }, [N, T, P, t]);
  return r.useCallback(async () => {
    if (!(!k || null == t || await D())) {
      if (null == P) {
        (0, l.showToast)((0, l.createToast)(Z.NW.string(Z.t.OKnWyc), l.ToastType.FAILURE));
        return
      }(0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("79477"), n.e("63432")]).then(n.bind(n, 60594));
        return t => {
          var n, r;
          return (0, i.jsx)(e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = i
              })
            }
            return e
          }({}, t), r = r = {
            selectSource: !1,
            guildId: T,
            analyticsLocation: C.Sbl.UNLOCKED_OVERLAY
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n))
        }
      }, {
        contextKey: null != e ? (0, l.VnL)(e) : void 0
      })
    }
  }, [k, D, T, t, e, P])
}