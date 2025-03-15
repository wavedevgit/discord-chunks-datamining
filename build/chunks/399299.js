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
  m = n(594190),
  h = n(925329),
  x = n(565138),
  p = n(977059),
  g = n(695346),
  _ = n(494620),
  v = n(592125),
  j = n(650774),
  b = n(430824),
  S = n(131951),
  C = n(944486),
  N = n(594174),
  y = n(449224),
  Z = n(626135),
  w = n(823379),
  I = n(63063),
  O = n(358085),
  T = n(653255),
  E = n(989941),
  P = n(618407),
  R = n(586290),
  W = n(233037),
  A = n(810013),
  k = n(537135),
  M = n(641115),
  L = n(143135),
  D = n(70722),
  G = n(981631),
  U = n(526761),
  B = n(388032),
  z = n(631045),
  F = n(432150);

function H(e) {
  let {
    selectedSource: t,
    selectSource: n,
    sourceChanged: l,
    onChangeSource: i
  } = e, s = (0, o.e7)([m.ZP, y.Z], () => (0, O.isWindows)() ? (0, E.Z)(m.ZP, y.Z) : null), c = (0, o.e7)([d.Z], () => (null == s ? void 0 : s.id) != null ? d.Z.getApplication(s.id) : null), u = (0, o.e7)([m.ZP], () => m.ZP.getRunningGames()), f = (0, o.Wu)([d.Z], () => u.map(e => null != e.id ? d.Z.getApplication(e.id) : null).filter(w.lm), [u]), x = null;
  if (null != t ? x = t.name : null != s && (x = s.name), null == x) return null;
  let p = (0, L.Z)(s, t, u),
    g = l ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == p ? void 0 : p.id)
    }) : c,
    _ = null != t && t.id.startsWith("screen") ? a.pzj : a.GON;
  return (0, r.jsx)(a.xJW, {
    title: B.NW.string(B.t.TC7Ev7),
    className: F.modalContent,
    titleClassName: F.formItemTitleVerySlim,
    children: (0, r.jsxs)(k.Z, {
      children: [null != g ? (0, r.jsx)(h.Z, {
        game: g,
        size: h.Z.Sizes.XSMALL,
        className: z.selectedIcon
      }) : (0, r.jsx)(_, {
        className: z.selectedIcon
      }), (0, r.jsx)("span", {
        className: z.ellipsisText,
        children: x
      }), n ? (0, r.jsx)(a.zxk, {
        className: z.changeButton,
        color: a.zxk.Colors.PRIMARY,
        size: a.zxk.Sizes.SMALL,
        onClick: i,
        children: B.NW.string(B.t.GEgsAw)
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
    title: B.NW.string(B.t.WC3u3t),
    className: F.modalContent,
    titleClassName: F.formItemTitle,
    children: (0, r.jsxs)(k.Z, {
      children: [(0, r.jsx)(x.Z, {
        guild: l,
        size: x.Z.Sizes.SMALLER,
        className: z.selectedIcon
      }), (0, r.jsx)("span", {
        className: z.ellipsisText,
        children: l.toString()
      }), (0, r.jsx)(a.zxk, {
        className: z.changeButton,
        color: a.zxk.Colors.PRIMARY,
        size: a.zxk.Sizes.SMALL,
        onClick: t,
        children: B.NW.string(B.t.GEgsAw)
      })]
    })
  })
}

function Y(e) {
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

function J(e) {
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
        children: B.NW.string(B.t.Cef4t7)
      })
    })
  }) : null
}

function X(e) {
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
        children: i ? B.NW.string(B.t["5Adrtb"]) : B.NW.string(B.t.gRpbRE)
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
        children: B.NW.string(B.t.JE73jI)
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
    targetGuildPremiumTier: m,
    selectSource: h,
    selectGuild: x,
    sound: g,
    previewDisabled: j,
    onClose: b,
    onChangeSelectedFPS: y,
    onChangeSelectedResolution: Z,
    onChangeSelectedPreset: w,
    onChangeSelectedChannelId: O,
    onChangeSource: E,
    onChangeAudioDevice: k,
    onChangeGuild: L,
    onChangeSound: D,
    onChangePreviewDisabled: F
  } = e, q = (0, o.e7)([C.Z, v.Z], () => v.Z.getChannel(C.Z.getVoiceChannelId())), Q = (0, o.e7)([T.Z], () => T.Z.GPUDriversOutdated), $ = (0, o.e7)([T.Z], () => T.Z.problematicGPUDriver), ee = (0, o.e7)([N.default], () => N.default.getCurrentUser()), et = (0, P.Z)();
  null != t && t.id.startsWith("screen") && !S.Z.supportsScreenSoundshare() && (et = B.NW.string(B.t["1b0Gm5"]));
  let en = !!(null == t ? void 0 : t.id.startsWith("camera")),
    er = null != ee && ee.verified && !ee.bot,
    el = null != q && !(0, u.Yk)(q),
    ei = !(0, o.e7)([S.Z], () => S.Z.getHardwareEncoding()),
    {
      enabled: es
    } = (0, p.S)({
      location: "GoLiveModal_Confirm"
    });
  return (0, r.jsxs)(l.Fragment, {
    children: [en ? (0, r.jsx)(R.Z, {
      selectedSource: t,
      onChangeVideoDeviceSource: E,
      onChangeAudioDevice: k
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(H, {
        selectSource: h,
        sourceChanged: d,
        onChangeSource: E,
        selectedSource: t
      }), null != et ? (0, r.jsx)(Y, {
        text: et
      }) : null, null != t && null == et ? (0, r.jsx)(X, {
        enabled: g,
        onChange: D,
        screen: t.id.startsWith("screen")
      }) : null]
    }), x && null != f ? (0, r.jsx)(V, {
      guildId: f,
      onChange: L
    }) : null, null != q ? (0, r.jsx)(A.Z, {
      channel: q
    }) : (0, r.jsx)(W.Z, {
      guildId: f,
      selectedChannelId: i,
      onChangeSelectedChannelId: O
    }), null != f && er && el ? (0, r.jsx)(J, {
      guildId: f
    }) : null, Q ? (0, r.jsx)(Y, {
      text: B.NW.string(B.t.q65tS0)
    }) : null, $ ? (0, r.jsx)(Y, {
      text: B.NW.format(B.t.RrLvub, {
        helpCenterLink: I.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, ei && (0, r.jsx)(_.Z, {
      look: _.z.WARNING,
      className: z.hardwareWarning,
      children: B.NW.format(B.t.zCLXws, {
        onClick: () => {
          b(), c.Z.open(G.oAB.VOICE, null, {
            scrollPosition: U.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, r.jsx)(M.Z, {
      selectedPreset: s,
      selectedFPS: n,
      selectedResolution: a,
      targetGuildPremiumTier: m,
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