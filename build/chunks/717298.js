/** Chunk was on 79477 **/
n.d(t, {
  Z: () => U
}), n(47120);
var l = n(200651),
  r = n(192379),
  s = n(209739),
  i = n.n(s),
  a = n(435935),
  o = n(268146),
  c = n(442837),
  u = n(481060),
  d = n(668781),
  m = n(872810),
  g = n(579806),
  h = n(100527),
  x = n(906732),
  p = n(594190),
  v = n(751571),
  f = n(695346),
  j = n(592125),
  S = n(430824),
  N = n(131951),
  Z = n(944486),
  b = n(594174),
  O = n(358085),
  C = n(74538),
  E = n(451467),
  P = n(537413),
  y = n(299570),
  T = n(143135),
  I = n(615161),
  _ = n(289989),
  R = n(328242),
  w = n(565574),
  W = n(51708),
  A = n(934192),
  k = n(70722),
  L = n(37113),
  D = n(761274),
  M = n(388032),
  z = n(115427);

function U(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, {
    state: s,
    dispatch: U
  } = (0, I.Ti)(), G = (0, c.e7)([N.Z], () => N.Z.getUseSystemScreensharePicker() && (0, O.isMac)() && i().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, k.jR)), F = (0, c.e7)([b.default], () => b.default.getCurrentUser()), Y = !C.ZP.canStreamQuality(C.ZP.StreamQuality.HIGH, F), V = (0, c.e7)([Z.Z, j.Z], () => j.Z.getChannel(Z.Z.getVoiceChannelId())), {
    analyticsLocations: B
  } = (0, x.ZP)(h.Z.GO_LIVE_MODAL_V2), X = r.useMemo(() => {
    let e = [{
      name: M.NW.string(M.t.tHoi7u),
      value: o.vA.WINDOW,
      icon: u.GON
    }, {
      name: M.NW.string(M.t.MhJ43N),
      value: o.vA.CAMERA,
      icon: u.Odl
    }];
    return G || e.splice(1, 0, {
      name: M.NW.string(M.t.slM8rK),
      value: o.vA.SCREEN,
      icon: u.pzj
    }), e
  }, [G]), {
    sourceType: J
  } = s;

  function H(e) {
    var n, l, r;
    if (null == V) return;
    let i = V.id,
      a = j.Z.getChannel(i),
      o = null == a ? void 0 : a.getGuildId(),
      c = null === (n = S.Z.getGuild(o)) || void 0 === n ? void 0 : n.premiumTier,
      u = s.preset,
      [g, h] = null !== (l = (0, P.Z)(s.preset, F, c)) && void 0 !== l ? l : [],
      x = null != g ? g : s.resolution,
      N = null != h ? h : s.fps;
    (0, E.Z)(u, x, N, F, c, a) || (u = L.tI.PRESET_VIDEO, x = L.LY.RESOLUTION_720, N = L.ws.FPS_30), (0, m.Rc)({
      preset: u,
      resolution: x,
      frameRate: N,
      soundshareEnabled: !s.muteStreamAudio
    });
    let Z = (0, T.Z)(void 0, e, p.ZP.getRunningGames()),
      b = !(0, O.isWindows)() || null == Z || (null == e ? void 0 : e.id.startsWith("camera:")) || null == Z ? null : Z.pid,
      C = null,
      y = null;
    null == b && null != e && (C = e.id, y = e.name), (0, m.WH)(o, i, {
      pid: b,
      sourceId: C,
      sourceName: y,
      sourceIcon: null == e ? void 0 : e.icon,
      audioSourceId: null,
      sound: !s.muteStreamAudio,
      previewDisabled: null !== (r = f.I0.getSetting()) && void 0 !== r && r,
      nativePickerStyleUsed: "internal"
    }), G || (async () => {
      await v.Z.hasPermission(D.Eu.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) || d.Z.show({
        title: M.NW.string(M.t["X+mXen"]),
        body: M.NW.string(M.t.MIJCzs)
      })
    })(), t()
  }
  return (0, l.jsx)(I.Yw, {
    state: s,
    dispatch: U,
    children: (0, l.jsxs)(u.Y0X, {
      className: z.root,
      size: u.CgR.LARGE,
      transitionState: n,
      children: [(0, l.jsx)(u.xBx, {
        separator: !1,
        className: z.header,
        children: (0, l.jsx)(u.sY7, {
          className: z.segmentedControl,
          value: J,
          look: "pill",
          onChange: e => {
            let {
              value: t
            } = e;
            return U({
              type: "set_source_type",
              sourceType: t
            })
          },
          options: X
        })
      }), (0, l.jsx)(u.hzk, {
        className: z.content,
        children: G && J !== o.vA.CAMERA ? (0, l.jsx)(_.Z, {
          onSourceSelect: function() {
            H({
              id: "prepicked:",
              name: M.NW.string(M.t["KKcy9/"]),
              url: ""
            })
          }
        }) : (0, l.jsx)(R.Z, {
          onClick: H
        })
      }), Y && (0, l.jsx)(W.Z, {
        onClose: t
      }), (0, l.jsxs)(u.mzw, {
        className: z.footer,
        separator: !1,
        justify: a.k.Justify.BETWEEN,
        align: a.k.Align.CENTER,
        direction: a.k.Direction.HORIZONTAL,
        children: [(0, l.jsx)(A.Z, {
          onClose: t
        }), (0, l.jsxs)("div", {
          className: z.rightButtonGroup,
          children: [G && J !== o.vA.CAMERA && (0, l.jsx)(u.zxk, {
            size: u.zxk.Sizes.LARGE,
            onClick: () => {
              (0, y.t)(), (0, y.T)("")
            },
            children: M.NW.string(M.t.FiBjwc)
          }), (0, l.jsx)(w.Z, {})]
        })]
      })]
    })
  })
}