/** Chunk was on 79477 **/
n.d(t, {
  Z: () => q
});
var r = n(200651),
  l = n(192379),
  s = n(120356),
  i = n.n(s),
  a = n(442837),
  o = n(481060),
  c = n(230711),
  u = n(812206),
  d = n(605436),
  m = n(600164),
  p = n(594190),
  h = n(925329),
  g = n(565138),
  x = n(977059),
  f = n(695346),
  v = n(494620),
  j = n(592125),
  S = n(650774),
  N = n(430824),
  Z = n(131951),
  b = n(944486),
  O = n(594174),
  y = n(449224),
  C = n(626135),
  P = n(823379),
  E = n(63063),
  T = n(358085),
  I = n(653255),
  w = n(989941),
  _ = n(618407),
  R = n(586290),
  W = n(233037),
  A = n(810013),
  k = n(537135),
  L = n(641115),
  D = n(143135),
  M = n(70722),
  z = n(981631),
  U = n(526761),
  G = n(388032),
  F = n(557616),
  V = n(382840);

function Y(e) {
  let {
    selectedSource: t,
    selectSource: n,
    sourceChanged: l,
    onChangeSource: s
  } = e, i = (0, a.e7)([p.ZP, y.Z], () => (0, T.isWindows)() ? (0, w.Z)(p.ZP, y.Z) : null), c = (0, a.e7)([u.Z], () => (null == i ? void 0 : i.id) != null ? u.Z.getApplication(i.id) : null), d = (0, a.e7)([p.ZP], () => p.ZP.getRunningGames()), m = (0, a.Wu)([u.Z], () => d.map(e => null != e.id ? u.Z.getApplication(e.id) : null).filter(P.lm), [d]), g = null;
  if (null != t ? g = t.name : null != i && (g = i.name), null == g) return null;
  let x = (0, D.Z)(i, t, d),
    f = l ? m.find(e => {
      let {
        id: t
      } = e;
      return t === (null == x ? void 0 : x.id)
    }) : c,
    v = null != t && t.id.startsWith("screen") ? o.pzj : o.GON;
  return (0, r.jsx)(o.xJW, {
    title: G.NW.string(G.t.TC7Ev7),
    className: V.modalContent,
    titleClassName: V.formItemTitleVerySlim,
    children: (0, r.jsxs)(k.Z, {
      children: [null != f ? (0, r.jsx)(h.Z, {
        game: f,
        size: h.Z.Sizes.XSMALL,
        className: F.selectedIcon
      }) : (0, r.jsx)(v, {
        className: F.selectedIcon
      }), (0, r.jsx)("span", {
        className: F.ellipsisText,
        children: g
      }), n ? (0, r.jsx)(o.zxk, {
        className: F.changeButton,
        color: o.zxk.Colors.PRIMARY,
        size: o.zxk.Sizes.SMALL,
        onClick: s,
        children: G.NW.string(G.t.GEgsAw)
      }) : null]
    })
  })
}

function B(e) {
  let {
    onChange: t,
    guildId: n
  } = e, l = (0, a.e7)([N.Z], () => N.Z.getGuild(n));
  return null == l ? (t(), null) : (0, r.jsx)(o.xJW, {
    title: G.NW.string(G.t.WC3u3t),
    className: V.modalContent,
    titleClassName: V.formItemTitle,
    children: (0, r.jsxs)(k.Z, {
      children: [(0, r.jsx)(g.Z, {
        guild: l,
        size: g.Z.Sizes.SMALLER,
        className: F.selectedIcon
      }), (0, r.jsx)("span", {
        className: F.ellipsisText,
        children: l.toString()
      }), (0, r.jsx)(o.zxk, {
        className: F.changeButton,
        color: o.zxk.Colors.PRIMARY,
        size: o.zxk.Sizes.SMALL,
        onClick: t,
        children: G.NW.string(G.t.GEgsAw)
      })]
    })
  })
}

function J(e) {
  let {
    text: t
  } = e;
  return (0, r.jsxs)(m.Z, {
    align: m.Z.Align.CENTER,
    className: F.warning,
    children: [(0, r.jsx)(o.P4T, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: F.warningIcon
    }), (0, r.jsx)(o.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function X(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([S.Z], () => {
    var e;
    return null !== (e = S.Z.getMemberCount(t)) && void 0 !== e ? e : 0
  }), s = f.eo.useSetting(), c = l.useCallback((e, t) => {
    f.eo.updateSetting(t), C.default.track(z.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return n >= 2 && n <= M.tB ? (0, r.jsx)(o.xJW, {
    className: i()(V.modalContent, F.checkboxRow),
    children: (0, r.jsx)(o.XZJ, {
      value: !!s,
      type: o.XZJ.Types.INVERTED,
      onChange: c,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: G.NW.string(G.t.Cef4t7)
      })
    })
  }) : null
}

function H(e) {
  let {
    enabled: t,
    onChange: n,
    screen: s
  } = e, a = l.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, r.jsx)(o.xJW, {
    className: i()(V.modalContent, F.checkboxRow),
    children: (0, r.jsx)(o.XZJ, {
      value: t,
      type: o.XZJ.Types.INVERTED,
      onChange: a,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: s ? G.NW.string(G.t["5Adrtb"]) : G.NW.string(G.t.gRpbRE)
      })
    })
  })
}

function K(e) {
  let {
    enabled: t,
    onChange: n
  } = e, s = l.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, r.jsx)(o.xJW, {
    className: i()(V.modalContent, F.checkboxRow),
    children: (0, r.jsx)(o.XZJ, {
      value: t,
      type: o.XZJ.Types.INVERTED,
      onChange: s,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: G.NW.string(G.t.JE73jI)
      })
    })
  })
}

function q(e) {
  let {
    selectedSource: t,
    selectedFPS: n,
    selectedChannelId: s,
    selectedPreset: i,
    selectedResolution: o,
    sourceChanged: u,
    selectedGuildId: m,
    targetGuildPremiumTier: p,
    selectSource: h,
    selectGuild: g,
    sound: f,
    previewDisabled: S,
    onClose: N,
    onChangeSelectedFPS: y,
    onChangeSelectedResolution: C,
    onChangeSelectedPreset: P,
    onChangeSelectedChannelId: T,
    onChangeSource: w,
    onChangeAudioDevice: k,
    onChangeGuild: D,
    onChangeSound: M,
    onChangePreviewDisabled: V
  } = e, q = (0, a.e7)([b.Z, j.Z], () => j.Z.getChannel(b.Z.getVoiceChannelId())), Q = (0, a.e7)([I.Z], () => I.Z.GPUDriversOutdated), $ = (0, a.e7)([I.Z], () => I.Z.problematicGPUDriver), ee = (0, a.e7)([O.default], () => O.default.getCurrentUser()), et = (0, _.Z)();
  null != t && t.id.startsWith("screen") && !Z.Z.supportsScreenSoundshare() && (et = G.NW.string(G.t["1b0Gm5"]));
  let en = !!(null == t ? void 0 : t.id.startsWith("camera")),
    er = null != ee && ee.verified && !ee.bot,
    el = null != q && !(0, d.Yk)(q),
    es = !(0, a.e7)([Z.Z], () => Z.Z.getHardwareEncoding()),
    {
      enabled: ei
    } = (0, x.S)({
      location: "GoLiveModal_Confirm"
    });
  return (0, r.jsxs)(l.Fragment, {
    children: [en ? (0, r.jsx)(R.Z, {
      selectedSource: t,
      onChangeVideoDeviceSource: w,
      onChangeAudioDevice: k
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(Y, {
        selectSource: h,
        sourceChanged: u,
        onChangeSource: w,
        selectedSource: t
      }), null != et ? (0, r.jsx)(J, {
        text: et
      }) : null, null != t && null == et ? (0, r.jsx)(H, {
        enabled: f,
        onChange: M,
        screen: t.id.startsWith("screen")
      }) : null]
    }), g && null != m ? (0, r.jsx)(B, {
      guildId: m,
      onChange: D
    }) : null, null != q ? (0, r.jsx)(A.Z, {
      channel: q
    }) : (0, r.jsx)(W.Z, {
      guildId: m,
      selectedChannelId: s,
      onChangeSelectedChannelId: T
    }), null != m && er && el ? (0, r.jsx)(X, {
      guildId: m
    }) : null, Q ? (0, r.jsx)(J, {
      text: G.NW.string(G.t.q65tS0)
    }) : null, $ ? (0, r.jsx)(J, {
      text: G.NW.format(G.t.RrLvub, {
        helpCenterLink: E.Z.getArticleURL(z.BhN.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, es && (0, r.jsx)(v.Z, {
      look: v.z.WARNING,
      className: F.hardwareWarning,
      children: G.NW.format(G.t.zCLXws, {
        onClick: () => {
          N(), c.Z.open(z.oAB.VOICE, null, {
            scrollPosition: U.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, r.jsx)(L.Z, {
      selectedPreset: i,
      selectedFPS: n,
      selectedResolution: o,
      targetGuildPremiumTier: p,
      onClose: N,
      onFPSChange: y,
      onResolutionChange: C,
      onPresetChange: P,
      captureDeviceSelected: en
    }), ei && (0, r.jsx)(K, {
      enabled: S,
      onChange: V
    })]
  })
}