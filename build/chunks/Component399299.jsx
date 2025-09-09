/** Chunk was on 46746 **/
/** chunk id: 399299, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk812206 = require("./812206.js"),
  Chunk605436 = require("./605436.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk494620 = require("./494620.jsx"),
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
    selectedSource: t,
    selectSource: n,
    sourceChanged: i,
    onChangeSource: l
  } = e, s = (0, o.e7)([h.ZP, O.Z], () => (0, N.isWindows)() ? (0, T.Z)(h.ZP, O.Z) : null), d = (0, o.e7)([u.Z], () => (null == s ? true : s.id) != null ? u.Z.getApplication(s.id) : null), f = (0, o.e7)([h.ZP], () => h.ZP.getRunningGames()), m = (0, o.Wu)([u.Z], () => f.map(e => null != e.id ? u.Z.getApplication(e.id) : null).filter(Z.lm), [f]), x = null;
  if (null != t ? x = t.name : null != s && (x = s.name), null == x) return null;
  let g = (0, L.Z)(s, t, f),
    _ = i ? m.find(e => {
      let {
        id: t
      } = e;
      return t === (null == g ? true : g.id)
    }) : d,
    v = null != t && t.id.startsWith("screen") ? c.pzj : c.GON;
  return (0, r.jsx)(c.xJW, {
    title: W.intl.string(W.t.TC7Ev7),
    className: F.modalContent,
    titleClassName: F.formItemTitleVerySlim,
    children: (0, r.jsxs)(M.Z, {
      children: [null != _ ? (0, r.jsx)(p.Z, {
        game: _,
        size: p.A.XSMALL,
        className: z.selectedIcon
      }) : (0, r.jsx)(v, {
        className: z.selectedIcon
      }), (0, r.jsx)("span", {
        className: z.ellipsisText,
        children: x
      }), n ? (0, r.jsx)(a.zx, {
        className: z.changeButton,
        color: a.zx.Colors.PRIMARY,
        size: a.zx.Sizes.SMALL,
        onClick: l,
        children: W.intl.string(W.t.GEgsAw)
      }) : null]
    })
  })
}

function V(e) {
  let {
    onChange: t,
    guildId: n
  } = e, i = (0, o.e7)([b.Z], () => b.Z.getGuild(n));
  return null == i ? (t(), null) : (0, r.jsx)(c.xJW, {
    title: W.intl.string(W.t.WC3u3t),
    className: F.modalContent,
    titleClassName: F.formItemTitle,
    children: (0, r.jsxs)(M.Z, {
      children: [(0, r.jsx)(x.Z, {
        guild: i,
        size: x.Z.Sizes.SMALLER,
        className: z.selectedIcon
      }), (0, r.jsx)("span", {
        className: z.ellipsisText,
        children: i.name
      }), (0, r.jsx)(a.zx, {
        className: z.changeButton,
        color: a.zx.Colors.PRIMARY,
        size: a.zx.Sizes.SMALL,
        onClick: t,
        children: W.intl.string(W.t.GEgsAw)
      })]
    })
  })
}

function Y(e) {
  let {
    text: t
  } = e;
  return (0, r.jsxs)(m.Z, {
    align: m.Z.Align.CENTER,
    className: z.warning,
    children: [(0, r.jsx)(c.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: z.warningIcon
    }), (0, r.jsx)(c.Text, {
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
    return null != (e = j.Z.getMemberCount(t)) ? e : 0
  }), l = g.eo.useSetting(), d = i.useCallback((e, t) => {
    g.eo.updateSetting(t), w.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return n >= 2 && n <= B.tB ? (0, r.jsx)("div", {
    className: s()(F.modalContent, z.checkboxRow),
    children: (0, r.jsx)(a.$q, {
      value: !!l,
      type: a.M0.INVERTED,
      onChange: d,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: W.intl.string(W.t.Cef4t7)
      })
    })
  }) : null
}

function X(e) {
  let {
    enabled: t,
    onChange: n,
    screen: l
  } = e, d = i.useCallback((e, t) => {
    n(t)
  }, [n]), u = (0, o.e7)([y.Z], () => y.Z.getUseSystemScreensharePicker() && (0, N.isLinux)());
  return (0, r.jsx)("div", {
    className: s()(F.modalContent, z.checkboxRow),
    children: (0, r.jsx)(a.$q, {
      value: t,
      type: a.M0.INVERTED,
      onChange: d,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: l || u ? W.intl.string(W.t["5Adrtb"]) : W.intl.string(W.t.gRpbRE)
      })
    })
  })
}

function K(e) {
  let {
    enabled: t,
    onChange: n
  } = e, l = i.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, r.jsx)("div", {
    className: s()(F.modalContent, z.checkboxRow),
    children: (0, r.jsx)(a.$q, {
      value: t,
      type: a.M0.INVERTED,
      onChange: l,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: W.intl.string(W.t.JE73jI)
      })
    })
  })
}

function q(e) {
  let {
    selectedSource: t,
    selectedFPS: n,
    selectedChannelId: l,
    selectedPreset: s,
    selectedResolution: a,
    sourceChanged: c,
    selectedGuildId: u,
    targetGuildPremiumTier: m,
    selectSource: h,
    selectGuild: p,
    sound: x,
    previewDisabled: g,
    onClose: j,
    onChangeSelectedFPS: b,
    onChangeSelectedResolution: O,
    onChangeSelectedPreset: w,
    onChangeSelectedChannelId: Z,
    onChangeSource: N,
    onChangeAudioDevice: T,
    onChangeGuild: M,
    onChangeSound: L,
    onChangePreviewDisabled: B
  } = e, F = (0, o.e7)([S.Z, v.Z], () => v.Z.getChannel(S.Z.getVoiceChannelId())), q = (0, o.e7)([P.Z], () => P.Z.GPUDriversOutdated), Q = (0, o.e7)([P.Z], () => P.Z.problematicGPUDriver), $ = (0, o.e7)([C.default], () => C.default.getCurrentUser()), ee = (0, E.Z)();
  null != t && t.id.startsWith("screen") && !y.Z.supportsScreenSoundshare() && (ee = W.intl.string(W.t["1b0Gm5"]));
  let et = !!(null == t ? true : t.id.startsWith("camera")),
    en = null != $ && $.verified && !$.bot,
    er = null != F && !(0, f.Yk)(F),
    ei = !(0, o.e7)([y.Z], () => y.Z.getHardwareEncoding());
  return (0, r.jsxs)(i.Fragment, {
    children: [et ? (0, r.jsx)(R.Z, {
      selectedSource: t,
      onChangeVideoDeviceSource: N,
      onChangeAudioDevice: T
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(H, {
        selectSource: h,
        sourceChanged: c,
        onChangeSource: N,
        selectedSource: t
      }), null != ee ? (0, r.jsx)(Y, {
        text: ee
      }) : null, null != t && null == ee ? (0, r.jsx)(X, {
        enabled: x,
        onChange: L,
        screen: t.id.startsWith("screen")
      }) : null]
    }), p && null != u ? (0, r.jsx)(V, {
      guildId: u,
      onChange: M
    }) : null, null != F ? (0, r.jsx)(k.Z, {
      channel: F
    }) : (0, r.jsx)(A.Z, {
      guildId: u,
      selectedChannelId: l,
      onChangeSelectedChannelId: Z
    }), null != u && en && er ? (0, r.jsx)(J, {
      guildId: u
    }) : null, q ? (0, r.jsx)(Y, {
      text: W.intl.string(W.t.q65tS0)
    }) : null, Q ? (0, r.jsx)(Y, {
      text: W.intl.format(W.t.RrLvub, {
        helpCenterLink: I.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, ei && (0, r.jsx)(_.Z, {
      look: _.z.WARNING,
      className: z.hardwareWarning,
      children: W.intl.format(W.t.zCLXws, {
        onClick: () => {
          j(), d.Z.open(G.oAB.VOICE, U.gP, {
            scrollPosition: U.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, r.jsx)(D.Z, {
      selectedPreset: s,
      selectedFPS: n,
      selectedResolution: a,
      targetGuildPremiumTier: m,
      onClose: j,
      onFPSChange: b,
      onResolutionChange: O,
      onPresetChange: w,
      captureDeviceSelected: et
    }), (0, r.jsx)(K, {
      enabled: g,
      onChange: B
    })]
  })
}