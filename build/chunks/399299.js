/** Chunk was on 79477 **/
n.d(t, {
  Z: () => q
});
var l = n(200651),
  r = n(192379),
  s = n(120356),
  i = n.n(s),
  a = n(442837),
  o = n(481060),
  c = n(230711),
  u = n(812206),
  d = n(605436),
  m = n(600164),
  g = n(594190),
  h = n(925329),
  x = n(565138),
  p = n(977059),
  v = n(695346),
  f = n(494620),
  j = n(592125),
  S = n(650774),
  N = n(430824),
  Z = n(131951),
  b = n(944486),
  O = n(594174),
  C = n(449224),
  E = n(626135),
  P = n(823379),
  y = n(63063),
  T = n(358085),
  I = n(653255),
  _ = n(989941),
  R = n(618407),
  w = n(586290),
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
  Y = n(382840);

function V(e) {
  let {
    selectedSource: t,
    selectSource: n,
    sourceChanged: r,
    onChangeSource: s
  } = e, i = (0, a.e7)([g.ZP, C.Z], () => (0, T.isWindows)() ? (0, _.Z)(g.ZP, C.Z) : null), c = (0, a.e7)([u.Z], () => (null == i ? void 0 : i.id) != null ? u.Z.getApplication(i.id) : null), d = (0, a.e7)([g.ZP], () => g.ZP.getRunningGames()), m = (0, a.Wu)([u.Z], () => d.map(e => null != e.id ? u.Z.getApplication(e.id) : null).filter(P.lm), [d]), x = null;
  if (null != t ? x = t.name : null != i && (x = i.name), null == x) return null;
  let p = (0, D.Z)(i, t, d),
    v = r ? m.find(e => {
      let {
        id: t
      } = e;
      return t === (null == p ? void 0 : p.id)
    }) : c,
    f = null != t && t.id.startsWith("screen") ? o.pzj : o.GON;
  return (0, l.jsx)(o.xJW, {
    title: G.NW.string(G.t.TC7Ev7),
    className: Y.modalContent,
    titleClassName: Y.formItemTitleVerySlim,
    children: (0, l.jsxs)(k.Z, {
      children: [null != v ? (0, l.jsx)(h.Z, {
        game: v,
        size: h.Z.Sizes.XSMALL,
        className: F.selectedIcon
      }) : (0, l.jsx)(f, {
        className: F.selectedIcon
      }), (0, l.jsx)("span", {
        className: F.ellipsisText,
        children: x
      }), n ? (0, l.jsx)(o.zxk, {
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
  } = e, r = (0, a.e7)([N.Z], () => N.Z.getGuild(n));
  return null == r ? (t(), null) : (0, l.jsx)(o.xJW, {
    title: G.NW.string(G.t.WC3u3t),
    className: Y.modalContent,
    titleClassName: Y.formItemTitle,
    children: (0, l.jsxs)(k.Z, {
      children: [(0, l.jsx)(x.Z, {
        guild: r,
        size: x.Z.Sizes.SMALLER,
        className: F.selectedIcon
      }), (0, l.jsx)("span", {
        className: F.ellipsisText,
        children: r.toString()
      }), (0, l.jsx)(o.zxk, {
        className: F.changeButton,
        color: o.zxk.Colors.PRIMARY,
        size: o.zxk.Sizes.SMALL,
        onClick: t,
        children: G.NW.string(G.t.GEgsAw)
      })]
    })
  })
}

function X(e) {
  let {
    text: t
  } = e;
  return (0, l.jsxs)(m.Z, {
    align: m.Z.Align.CENTER,
    className: F.warning,
    children: [(0, l.jsx)(o.P4T, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: F.warningIcon
    }), (0, l.jsx)(o.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function J(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([S.Z], () => {
    var e;
    return null !== (e = S.Z.getMemberCount(t)) && void 0 !== e ? e : 0
  }), s = v.eo.useSetting(), c = r.useCallback((e, t) => {
    v.eo.updateSetting(t), E.default.track(z.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return n >= 2 && n <= M.tB ? (0, l.jsx)(o.xJW, {
    className: i()(Y.modalContent, F.checkboxRow),
    children: (0, l.jsx)(o.XZJ, {
      value: !!s,
      type: o.XZJ.Types.INVERTED,
      onChange: c,
      children: (0, l.jsx)(o.Text, {
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
  } = e, a = r.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, l.jsx)(o.xJW, {
    className: i()(Y.modalContent, F.checkboxRow),
    children: (0, l.jsx)(o.XZJ, {
      value: t,
      type: o.XZJ.Types.INVERTED,
      onChange: a,
      children: (0, l.jsx)(o.Text, {
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
  } = e, s = r.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, l.jsx)(o.xJW, {
    className: i()(Y.modalContent, F.checkboxRow),
    children: (0, l.jsx)(o.XZJ, {
      value: t,
      type: o.XZJ.Types.INVERTED,
      onChange: s,
      children: (0, l.jsx)(o.Text, {
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
    targetGuildPremiumTier: g,
    selectSource: h,
    selectGuild: x,
    sound: v,
    previewDisabled: S,
    onClose: N,
    onChangeSelectedFPS: C,
    onChangeSelectedResolution: E,
    onChangeSelectedPreset: P,
    onChangeSelectedChannelId: T,
    onChangeSource: _,
    onChangeAudioDevice: k,
    onChangeGuild: D,
    onChangeSound: M,
    onChangePreviewDisabled: Y
  } = e, q = (0, a.e7)([b.Z, j.Z], () => j.Z.getChannel(b.Z.getVoiceChannelId())), Q = (0, a.e7)([I.Z], () => I.Z.GPUDriversOutdated), $ = (0, a.e7)([I.Z], () => I.Z.problematicGPUDriver), ee = (0, a.e7)([O.default], () => O.default.getCurrentUser()), et = (0, R.Z)();
  null != t && t.id.startsWith("screen") && !Z.Z.supportsScreenSoundshare() && (et = G.NW.string(G.t["1b0Gm5"]));
  let en = !!(null == t ? void 0 : t.id.startsWith("camera")),
    el = null != ee && ee.verified && !ee.bot,
    er = null != q && !(0, d.Yk)(q),
    es = !(0, a.e7)([Z.Z], () => Z.Z.getHardwareEncoding()),
    {
      enabled: ei
    } = (0, p.S)({
      location: "GoLiveModal_Confirm"
    });
  return (0, l.jsxs)(r.Fragment, {
    children: [en ? (0, l.jsx)(w.Z, {
      selectedSource: t,
      onChangeVideoDeviceSource: _,
      onChangeAudioDevice: k
    }) : (0, l.jsxs)("div", {
      children: [(0, l.jsx)(V, {
        selectSource: h,
        sourceChanged: u,
        onChangeSource: _,
        selectedSource: t
      }), null != et ? (0, l.jsx)(X, {
        text: et
      }) : null, null != t && null == et ? (0, l.jsx)(H, {
        enabled: v,
        onChange: M,
        screen: t.id.startsWith("screen")
      }) : null]
    }), x && null != m ? (0, l.jsx)(B, {
      guildId: m,
      onChange: D
    }) : null, null != q ? (0, l.jsx)(A.Z, {
      channel: q
    }) : (0, l.jsx)(W.Z, {
      guildId: m,
      selectedChannelId: s,
      onChangeSelectedChannelId: T
    }), null != m && el && er ? (0, l.jsx)(J, {
      guildId: m
    }) : null, Q ? (0, l.jsx)(X, {
      text: G.NW.string(G.t.q65tS0)
    }) : null, $ ? (0, l.jsx)(X, {
      text: G.NW.format(G.t.RrLvub, {
        helpCenterLink: y.Z.getArticleURL(z.BhN.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, es && (0, l.jsx)(f.Z, {
      look: f.z.WARNING,
      className: F.hardwareWarning,
      children: G.NW.format(G.t.zCLXws, {
        onClick: () => {
          N(), c.Z.open(z.oAB.VOICE, null, {
            scrollPosition: U.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, l.jsx)(L.Z, {
      selectedPreset: i,
      selectedFPS: n,
      selectedResolution: o,
      targetGuildPremiumTier: g,
      onClose: N,
      onFPSChange: C,
      onResolutionChange: E,
      onPresetChange: P,
      captureDeviceSelected: en
    }), ei && (0, l.jsx)(K, {
      enabled: S,
      onChange: Y
    })]
  })
}