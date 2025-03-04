/** Chunk was on 46746 **/
n.d(t, {
  Z: () => q
});
var r = n(200651),
  l = n(192379),
  i = n(120356),
  s = n.n(i),
  o = n(442837),
  a = n(481060),
  c = n(230711),
  d = n(812206),
  u = n(605436),
  f = n(600164),
  h = n(594190),
  m = n(925329),
  p = n(565138),
  x = n(977059),
  g = n(695346),
  _ = n(494620),
  v = n(592125),
  j = n(650774),
  b = n(430824),
  C = n(131951),
  S = n(944486),
  N = n(594174),
  y = n(449224),
  Z = n(626135),
  w = n(823379),
  O = n(63063),
  I = n(358085),
  P = n(653255),
  T = n(989941),
  E = n(618407),
  R = n(586290),
  W = n(233037),
  A = n(810013),
  k = n(537135),
  M = n(641115),
  L = n(143135),
  D = n(70722),
  G = n(981631),
  B = n(526761),
  U = n(388032),
  z = n(448597),
  F = n(711597);

function H(e) {
  let {
    selectedSource: t,
    selectSource: n,
    sourceChanged: l,
    onChangeSource: i
  } = e, s = (0, o.e7)([h.ZP, y.Z], () => (0, I.isWindows)() ? (0, T.Z)(h.ZP, y.Z) : null), c = (0, o.e7)([d.Z], () => (null == s ? void 0 : s.id) != null ? d.Z.getApplication(s.id) : null), u = (0, o.e7)([h.ZP], () => h.ZP.getRunningGames()), f = (0, o.Wu)([d.Z], () => u.map(e => null != e.id ? d.Z.getApplication(e.id) : null).filter(w.lm), [u]), p = null;
  if (null != t ? p = t.name : null != s && (p = s.name), null == p) return null;
  let x = (0, L.Z)(s, t, u),
    g = l ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == x ? void 0 : x.id)
    }) : c,
    _ = null != t && t.id.startsWith("screen") ? a.pzj : a.GON;
  return (0, r.jsx)(a.xJW, {
    title: U.NW.string(U.t.TC7Ev7),
    className: F.modalContent,
    titleClassName: F.formItemTitleVerySlim,
    children: (0, r.jsxs)(k.Z, {
      children: [null != g ? (0, r.jsx)(m.Z, {
        game: g,
        size: m.Z.Sizes.XSMALL,
        className: z.selectedIcon
      }) : (0, r.jsx)(_, {
        className: z.selectedIcon
      }), (0, r.jsx)("span", {
        className: z.ellipsisText,
        children: p
      }), n ? (0, r.jsx)(a.zxk, {
        className: z.changeButton,
        color: a.zxk.Colors.PRIMARY,
        size: a.zxk.Sizes.SMALL,
        onClick: i,
        children: U.NW.string(U.t.GEgsAw)
      }) : null]
    })
  })
}

function V(e) {
  let {
    onChange: t,
    guildId: n
  } = e, l = (0, o.e7)([b.Z], () => b.Z.getGuild(n));
  return null == l ? (t(), null) : (0, r.jsx)(a.xJW, {
    title: U.NW.string(U.t.WC3u3t),
    className: F.modalContent,
    titleClassName: F.formItemTitle,
    children: (0, r.jsxs)(k.Z, {
      children: [(0, r.jsx)(p.Z, {
        guild: l,
        size: p.Z.Sizes.SMALLER,
        className: z.selectedIcon
      }), (0, r.jsx)("span", {
        className: z.ellipsisText,
        children: l.toString()
      }), (0, r.jsx)(a.zxk, {
        className: z.changeButton,
        color: a.zxk.Colors.PRIMARY,
        size: a.zxk.Sizes.SMALL,
        onClick: t,
        children: U.NW.string(U.t.GEgsAw)
      })]
    })
  })
}

function J(e) {
  let {
    text: t
  } = e;
  return (0, r.jsxs)(f.Z, {
    align: f.Z.Align.CENTER,
    className: z.warning,
    children: [(0, r.jsx)(a.P4T, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: z.warningIcon
    }), (0, r.jsx)(a.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function X(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([j.Z], () => {
    var e;
    return null !== (e = j.Z.getMemberCount(t)) && void 0 !== e ? e : 0
  }), i = g.eo.useSetting(), c = l.useCallback((e, t) => {
    g.eo.updateSetting(t), Z.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return n >= 2 && n <= D.tB ? (0, r.jsx)(a.xJW, {
    className: s()(F.modalContent, z.checkboxRow),
    children: (0, r.jsx)(a.XZJ, {
      value: !!i,
      type: a.XZJ.Types.INVERTED,
      onChange: c,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: U.NW.string(U.t.Cef4t7)
      })
    })
  }) : null
}

function Y(e) {
  let {
    enabled: t,
    onChange: n,
    screen: i
  } = e, o = l.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, r.jsx)(a.xJW, {
    className: s()(F.modalContent, z.checkboxRow),
    children: (0, r.jsx)(a.XZJ, {
      value: t,
      type: a.XZJ.Types.INVERTED,
      onChange: o,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: i ? U.NW.string(U.t["5Adrtb"]) : U.NW.string(U.t.gRpbRE)
      })
    })
  })
}

function K(e) {
  let {
    enabled: t,
    onChange: n
  } = e, i = l.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, r.jsx)(a.xJW, {
    className: s()(F.modalContent, z.checkboxRow),
    children: (0, r.jsx)(a.XZJ, {
      value: t,
      type: a.XZJ.Types.INVERTED,
      onChange: i,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: U.NW.string(U.t.JE73jI)
      })
    })
  })
}

function q(e) {
  let {
    selectedSource: t,
    selectedFPS: n,
    selectedChannelId: i,
    selectedPreset: s,
    selectedResolution: a,
    sourceChanged: d,
    selectedGuildId: f,
    targetGuildPremiumTier: h,
    selectSource: m,
    selectGuild: p,
    sound: g,
    previewDisabled: j,
    onClose: b,
    onChangeSelectedFPS: y,
    onChangeSelectedResolution: Z,
    onChangeSelectedPreset: w,
    onChangeSelectedChannelId: I,
    onChangeSource: T,
    onChangeAudioDevice: k,
    onChangeGuild: L,
    onChangeSound: D,
    onChangePreviewDisabled: F
  } = e, q = (0, o.e7)([S.Z, v.Z], () => v.Z.getChannel(S.Z.getVoiceChannelId())), Q = (0, o.e7)([P.Z], () => P.Z.GPUDriversOutdated), $ = (0, o.e7)([P.Z], () => P.Z.problematicGPUDriver), ee = (0, o.e7)([N.default], () => N.default.getCurrentUser()), et = (0, E.Z)();
  null != t && t.id.startsWith("screen") && !C.Z.supportsScreenSoundshare() && (et = U.NW.string(U.t["1b0Gm5"]));
  let en = !!(null == t ? void 0 : t.id.startsWith("camera")),
    er = null != ee && ee.verified && !ee.bot,
    el = null != q && !(0, u.Yk)(q),
    ei = !(0, o.e7)([C.Z], () => C.Z.getHardwareEncoding()),
    {
      enabled: es
    } = (0, x.S)({
      location: "GoLiveModal_Confirm"
    });
  return (0, r.jsxs)(l.Fragment, {
    children: [en ? (0, r.jsx)(R.Z, {
      selectedSource: t,
      onChangeVideoDeviceSource: T,
      onChangeAudioDevice: k
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(H, {
        selectSource: m,
        sourceChanged: d,
        onChangeSource: T,
        selectedSource: t
      }), null != et ? (0, r.jsx)(J, {
        text: et
      }) : null, null != t && null == et ? (0, r.jsx)(Y, {
        enabled: g,
        onChange: D,
        screen: t.id.startsWith("screen")
      }) : null]
    }), p && null != f ? (0, r.jsx)(V, {
      guildId: f,
      onChange: L
    }) : null, null != q ? (0, r.jsx)(A.Z, {
      channel: q
    }) : (0, r.jsx)(W.Z, {
      guildId: f,
      selectedChannelId: i,
      onChangeSelectedChannelId: I
    }), null != f && er && el ? (0, r.jsx)(X, {
      guildId: f
    }) : null, Q ? (0, r.jsx)(J, {
      text: U.NW.string(U.t.q65tS0)
    }) : null, $ ? (0, r.jsx)(J, {
      text: U.NW.format(U.t.RrLvub, {
        helpCenterLink: O.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, ei && (0, r.jsx)(_.Z, {
      look: _.z.WARNING,
      className: z.hardwareWarning,
      children: U.NW.format(U.t.zCLXws, {
        onClick: () => {
          b(), c.Z.open(G.oAB.VOICE, null, {
            scrollPosition: B.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, r.jsx)(M.Z, {
      selectedPreset: s,
      selectedFPS: n,
      selectedResolution: a,
      targetGuildPremiumTier: h,
      onClose: b,
      onFPSChange: y,
      onResolutionChange: Z,
      onPresetChange: w,
      captureDeviceSelected: en
    }), es && (0, r.jsx)(K, {
      enabled: j,
      onChange: F
    })]
  })
}