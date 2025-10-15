/** Chunk was on 4093 **/
/** chunk id: 399299, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => Q
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

function H(e) {
  let {
    selectedSource: n,
    selectSource: t,
    sourceChanged: r,
    onChangeSource: i
  } = e, s = (0, a.e7)([x.ZP, T.Z], () => (0, y.isWindows)() ? (0, k.Z)(x.ZP, T.Z) : null), d = (0, a.e7)([u.Z], () => (null == s ? true : s.id) != null ? u.Z.getApplication(s.id) : null), m = (0, a.e7)([x.ZP], () => x.ZP.getRunningGames()), h = (0, a.Wu)([u.Z], () => m.map(e => null != e.id ? u.Z.getApplication(e.id) : null).filter(I.lm), [m]), j = null;
  if (null != n ? j = n.name : null != s && (j = s.name), null == j) return null;
  let p = (0, z.Z)(s, n, m),
    v = r ? h.find(e => {
      let {
        id: n
      } = e;
      return n === (null == p ? true : p.id)
    }) : d,
    f = null != n && n.id.startsWith("screen") ? o.pzj : o.GON;
  return (0, l.jsx)(o.gNt, {
    label: B.intl.string(B.t.TC7Evz),
    children: (0, l.jsxs)(w.Z, {
      children: [null != v ? (0, l.jsx)(g.Z, {
        game: v,
        size: g.A.XSMALL,
        className: V.selectedIcon
      }) : (0, l.jsx)(f, {
        className: V.selectedIcon
      }), (0, l.jsx)("span", {
        className: V.ellipsisText,
        children: j
      }), t ? (0, l.jsx)(c.zx, {
        className: V.changeButton,
        color: c.zx.Colors.PRIMARY,
        size: c.zx.Sizes.SMALL,
        onClick: i,
        children: B.intl.string(B.t.GEgsA4)
      }) : null]
    })
  })
}

function Y(e) {
  let {
    onChange: n,
    guildId: t
  } = e, r = (0, a.e7)([N.Z], () => N.Z.getGuild(t));
  return null == r ? (n(), null) : (0, l.jsx)("div", {
    className: F.modalContent,
    children: (0, l.jsx)(o.gNt, {
      label: B.intl.string(B.t.WC3u3n),
      children: (0, l.jsxs)(w.Z, {
        children: [(0, l.jsx)(h.Z, {
          guild: r,
          size: h.Z.Sizes.SMALLER,
          className: V.selectedIcon
        }), (0, l.jsx)("span", {
          className: V.ellipsisText,
          children: r.name
        }), (0, l.jsx)(c.zx, {
          className: V.changeButton,
          color: c.zx.Colors.PRIMARY,
          size: c.zx.Sizes.SMALL,
          onClick: n,
          children: B.intl.string(B.t.GEgsA4)
        })]
      })
    })
  })
}

function X(e) {
  let {
    text: n
  } = e;
  return (0, l.jsxs)(m.Z, {
    align: m.Z.Align.CENTER,
    className: V.warning,
    children: [(0, l.jsx)(o.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: V.warningIcon
    }), (0, l.jsx)(o.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: n
    })]
  })
}

function q(e) {
  let {
    guildId: n
  } = e, t = (0, a.e7)([S.Z], () => {
    var e;
    return null != (e = S.Z.getMemberCount(n)) ? e : 0
  }), i = j.eo.useSetting(), c = r.useCallback(e => {
    j.eo.updateSetting(e), E.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: e
    })
  }, []);
  return t >= 2 && t <= L.tB ? (0, l.jsx)("div", {
    className: s()(F.modalContent, V.checkboxRow),
    children: (0, l.jsx)(o.Checkbox, {
      checked: !!i,
      onChange: c,
      label: B.intl.string(B.t.Cef4t7)
    })
  }) : null
}

function K(e) {
  let {
    enabled: n,
    onChange: t,
    screen: i
  } = e, c = r.useCallback(e => {
    t(e)
  }, [t]), u = (0, a.e7)([C.Z], () => C.Z.getUseSystemScreensharePicker() && (0, y.isLinux)());
  return (0, l.jsx)("div", {
    className: s()(F.modalContent, V.checkboxRow),
    children: (0, l.jsx)(o.Checkbox, {
      checked: n,
      onChange: c,
      label: i || u ? B.intl.string(B.t["5AdrtW"]) : B.intl.string(B.t.gRpbRF)
    })
  })
}

function J(e) {
  let {
    enabled: n,
    onChange: t
  } = e, i = r.useCallback(e => {
    t(e)
  }, [t]);
  return (0, l.jsx)("div", {
    className: s()(F.modalContent, V.checkboxRow),
    children: (0, l.jsx)(o.Checkbox, {
      checked: n,
      onChange: i,
      label: B.intl.string(B.t.JE73jB)
    })
  })
}

function Q(e) {
  let {
    selectedSource: n,
    selectedFPS: t,
    selectedChannelId: i,
    selectedPreset: s,
    selectedResolution: c,
    sourceChanged: o,
    selectedGuildId: u,
    targetGuildPremiumTier: m,
    selectSource: x,
    selectGuild: g,
    sound: h,
    previewDisabled: j,
    onClose: S,
    onChangeSelectedFPS: N,
    onChangeSelectedResolution: T,
    onChangeSelectedPreset: E,
    onChangeSelectedChannelId: I,
    onChangeSource: y,
    onChangeAudioDevice: k,
    onChangeGuild: w,
    onChangeSound: z,
    onChangePreviewDisabled: L
  } = e, F = (0, a.e7)([b.Z, Z.Z], () => Z.Z.getChannel(b.Z.getVoiceChannelId())), Q = (0, a.e7)([A.Z], () => A.Z.GPUDriversOutdated), $ = (0, a.e7)([A.Z], () => A.Z.problematicGPUDriver), ee = (0, a.e7)([P.default], () => P.default.getCurrentUser()), en = (0, R.Z)();
  null != n && n.id.startsWith("screen") && !C.Z.supportsScreenSoundshare() && (en = B.intl.string(B.t["1b0Gm7"]));
  let et = !!(null == n ? true : n.id.startsWith("camera")),
    el = null != ee && ee.verified && !ee.bot,
    er = null != F && !(0, d.Yk)(F),
    ei = !(0, a.e7)([C.Z], () => C.Z.getHardwareEncoding());
  return (0, l.jsxs)(r.Fragment, {
    children: [et ? (0, l.jsx)(D.Z, {
      selectedSource: n,
      onChangeVideoDeviceSource: y,
      onChangeAudioDevice: k
    }) : (0, l.jsxs)("div", {
      children: [(0, l.jsx)(H, {
        selectSource: x,
        sourceChanged: o,
        onChangeSource: y,
        selectedSource: n
      }), null != en ? (0, l.jsx)(X, {
        text: en
      }) : null, null != n && null == en ? (0, l.jsx)(K, {
        enabled: h,
        onChange: z,
        screen: n.id.startsWith("screen")
      }) : null]
    }), g && null != u ? (0, l.jsx)(Y, {
      guildId: u,
      onChange: w
    }) : null, null != F ? (0, l.jsx)(M.Z, {
      channel: F
    }) : (0, l.jsx)(_.Z, {
      guildId: u,
      selectedChannelId: i,
      onChangeSelectedChannelId: I
    }), null != u && el && er ? (0, l.jsx)(q, {
      guildId: u
    }) : null, Q ? (0, l.jsx)(X, {
      text: B.intl.string(B.t.q65tSw)
    }) : null, $ ? (0, l.jsx)(X, {
      text: B.intl.format(B.t.RrLvuT, {
        helpCenterLink: O.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, ei && (0, l.jsx)(v.Z, {
      look: v.z.WARNING,
      className: V.hardwareWarning,
      children: B.intl.format(B.t.zCLXwj, {
        onClick: () => {
          S(), (0, f.openUserSettings)(p.n.VOICE_AND_VIDEO_PANEL, {
            section: G.oAB.VOICE,
            subsection: W.gP,
            scrollPosition: W.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, l.jsx)(U.Z, {
      selectedPreset: s,
      selectedFPS: t,
      selectedResolution: c,
      targetGuildPremiumTier: m,
      onClose: S,
      onFPSChange: N,
      onResolutionChange: T,
      onPresetChange: E,
      captureDeviceSelected: et
    }), (0, l.jsx)(J, {
      enabled: j,
      onChange: L
    })]
  })
}