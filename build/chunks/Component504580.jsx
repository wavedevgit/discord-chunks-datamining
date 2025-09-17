/** Chunk was on 46746 **/
/** chunk id: 504580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Q
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk605436 = require("./605436.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk449224 = require("./449224.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk653255 = require("./653255.js"),
  Chunk989941 = require("./989941.js"),
  Chunk618407 = require("./618407.js"),
  Chunk586290 = require("./586290.jsx"),
  Chunk233037 = require("./233037.jsx"),
  Chunk810013 = require("./810013.jsx"),
  Chunk537135 = require("./537135.jsx"),
  Chunk641115 = require("./641115.jsx"),
  Chunk143135 = require("./143135.js"),
  Chunk70722 = require("./70722.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk734102 = require("./734102.js"),
  Chunk542257 = require("./542257.js");

function V(e) {
  let {
    selectedSource: t,
    selectSource: n,
    sourceChanged: i,
    onChangeSource: l
  } = e, s = (0, o.e7)([m.ZP, w.Z], () => (0, P.isWindows)() ? (0, E.Z)(m.ZP, w.Z) : null), u = (0, o.e7)([d.Z], () => (null == s ? true : s.id) != null ? d.Z.getApplication(s.id) : null), f = (0, o.e7)([m.ZP], () => m.ZP.getRunningGames()), p = (0, o.Wu)([d.Z], () => f.map(e => null != e.id ? d.Z.getApplication(e.id) : null).filter(I.lm), [f]), x = null;
  if (null != t ? x = t.name : null != s && (x = s.name), null == x) return null;
  let g = (0, B.Z)(s, t, f),
    _ = i ? p.find(e => {
      let {
        id: t
      } = e;
      return t === (null == g ? true : g.id)
    }) : u,
    v = null != t && t.id.startsWith("screen") ? c.pzj : c.GON;
  return (0, r.jsx)(c.xJW, {
    title: z.intl.string(z.t.TC7Ev7),
    className: H.modalContent,
    titleClassName: H.formItemTitleVerySlim,
    children: (0, r.jsxs)(D.Z, {
      children: [null != _ ? (0, r.jsx)(h.Z, {
        game: _,
        size: h.A.XSMALL,
        className: F.selectedIcon
      }) : (0, r.jsx)(v, {
        className: F.selectedIcon
      }), (0, r.jsx)("span", {
        className: F.ellipsisText,
        children: x
      }), n ? (0, r.jsx)(a.zx, {
        className: F.changeButton,
        color: a.zx.Colors.PRIMARY,
        size: a.zx.Sizes.SMALL,
        onClick: l,
        children: z.intl.string(z.t.GEgsAw)
      }) : null]
    })
  })
}

function Y(e) {
  let {
    onChange: t,
    guildId: n
  } = e, i = (0, o.e7)([S.Z], () => S.Z.getGuild(n));
  return null == i ? (t(), null) : (0, r.jsx)(c.xJW, {
    title: z.intl.string(z.t.WC3u3t),
    className: H.modalContent,
    titleClassName: H.formItemTitle,
    children: (0, r.jsxs)(D.Z, {
      children: [(0, r.jsx)(p.Z, {
        guild: i,
        size: p.Z.Sizes.SMALLER,
        className: F.selectedIcon
      }), (0, r.jsx)("span", {
        className: F.ellipsisText,
        children: i.name
      }), (0, r.jsx)(a.zx, {
        className: F.changeButton,
        color: a.zx.Colors.PRIMARY,
        size: a.zx.Sizes.SMALL,
        onClick: t,
        children: z.intl.string(z.t.GEgsAw)
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
    className: F.warning,
    children: [(0, r.jsx)(c.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: F.warningIcon
    }), (0, r.jsx)(c.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function X(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([b.Z], () => {
    var e;
    return null != (e = b.Z.getMemberCount(t)) ? e : 0
  }), l = x.eo.useSetting(), d = i.useCallback((e, t) => {
    x.eo.updateSetting(t), Z.default.track(U.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return n >= 2 && n <= G.tB ? (0, r.jsx)("div", {
    className: s()(H.modalContent, F.checkboxRow),
    children: (0, r.jsx)(a.$q, {
      value: !!l,
      type: a.M0.INVERTED,
      onChange: d,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: z.intl.string(z.t.Cef4t7)
      })
    })
  }) : null
}

function K(e) {
  let {
    enabled: t,
    onChange: n,
    screen: l
  } = e, d = i.useCallback((e, t) => {
    n(t)
  }, [n]), u = (0, o.e7)([y.Z], () => y.Z.getUseSystemScreensharePicker() && (0, P.isLinux)());
  return (0, r.jsx)("div", {
    className: s()(H.modalContent, F.checkboxRow),
    children: (0, r.jsx)(a.$q, {
      value: t,
      type: a.M0.INVERTED,
      onChange: d,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: l || u ? z.intl.string(z.t["5Adrtb"]) : z.intl.string(z.t.gRpbRE)
      })
    })
  })
}

function q(e) {
  let {
    enabled: t,
    onChange: n
  } = e, l = i.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, r.jsx)("div", {
    className: s()(H.modalContent, F.checkboxRow),
    children: (0, r.jsx)(a.$q, {
      value: t,
      type: a.M0.INVERTED,
      onChange: l,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: z.intl.string(z.t.JE73jI)
      })
    })
  })
}

function Q(e) {
  let {
    selectedSource: t,
    selectedFPS: n,
    selectedChannelId: l,
    selectedPreset: s,
    selectedResolution: a,
    sourceChanged: c,
    selectedGuildId: d,
    targetGuildPremiumTier: f,
    selectSource: m,
    selectGuild: h,
    sound: p,
    previewDisabled: x,
    onClose: b,
    onChangeSelectedFPS: S,
    onChangeSelectedResolution: w,
    onChangeSelectedPreset: Z,
    onChangeSelectedChannelId: I,
    onChangeSource: P,
    onChangeAudioDevice: E,
    onChangeGuild: D,
    onChangeSound: B,
    onChangePreviewDisabled: G
  } = e, H = (0, o.e7)([C.Z, j.Z], () => j.Z.getChannel(C.Z.getVoiceChannelId())), Q = (0, o.e7)([T.Z], () => T.Z.GPUDriversOutdated), $ = (0, o.e7)([T.Z], () => T.Z.problematicGPUDriver), ee = (0, o.e7)([O.default], () => O.default.getCurrentUser()), et = (0, R.Z)();
  null != t && t.id.startsWith("screen") && !y.Z.supportsScreenSoundshare() && (et = z.intl.string(z.t["1b0Gm5"]));
  let en = !!(null == t ? true : t.id.startsWith("camera")),
    er = null != ee && ee.verified && !ee.bot,
    ei = null != H && !(0, u.Yk)(H),
    el = !(0, o.e7)([y.Z], () => y.Z.getHardwareEncoding());
  return (0, r.jsxs)(i.Fragment, {
    children: [en ? (0, r.jsx)(A.Z, {
      selectedSource: t,
      onChangeVideoDeviceSource: P,
      onChangeAudioDevice: E
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(V, {
        selectSource: m,
        sourceChanged: c,
        onChangeSource: P,
        selectedSource: t
      }), null != et ? (0, r.jsx)(J, {
        text: et
      }) : null, null != t && null == et ? (0, r.jsx)(K, {
        enabled: p,
        onChange: B,
        screen: t.id.startsWith("screen")
      }) : null]
    }), h && null != d ? (0, r.jsx)(Y, {
      guildId: d,
      onChange: D
    }) : null, null != H ? (0, r.jsx)(M.Z, {
      channel: H
    }) : (0, r.jsx)(k.Z, {
      guildId: d,
      selectedChannelId: l,
      onChangeSelectedChannelId: I
    }), null != d && er && ei ? (0, r.jsx)(X, {
      guildId: d
    }) : null, Q ? (0, r.jsx)(J, {
      text: z.intl.string(z.t.q65tS0)
    }) : null, $ ? (0, r.jsx)(J, {
      text: z.intl.format(z.t.RrLvub, {
        helpCenterLink: N.Z.getArticleURL(U.BhN.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, el && (0, r.jsx)(_.Z, {
      look: _.z.WARNING,
      className: F.hardwareWarning,
      children: z.intl.format(z.t.zCLXws, {
        onClick: () => {
          b(), (0, v.openUserSettings)(g.n.VOICE_AND_VIDEO_PANEL, {
            section: U.oAB.VOICE,
            subsection: W.gP,
            scrollPosition: W.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, r.jsx)(L.Z, {
      selectedPreset: s,
      selectedFPS: n,
      selectedResolution: a,
      targetGuildPremiumTier: f,
      onClose: b,
      onFPSChange: S,
      onResolutionChange: w,
      onPresetChange: Z,
      captureDeviceSelected: en
    }), (0, r.jsx)(q, {
      enabled: x,
      onChange: G
    })]
  })
}