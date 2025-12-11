/** Chunk was on 4093 **/
/** chunk id: 504580, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => X
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk605436 = require("./605436.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk695346 = require("./695346.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk863251 = require("./863251.js"),
  Chunk123795 = require("./123795.js");

function G(e) {
  let {
    selectedSource: n,
    selectSource: t,
    sourceChanged: r,
    onChangeSource: i
  } = e, s = (0, a.e7)([m.ZP, N.Z], () => (0, T.isWindows)() ? (0, O.Z)(m.ZP, N.Z) : null), u = (0, a.e7)([o.Z], () => (null == s ? true : s.id) != null ? o.Z.getApplication(s.id) : null), d = (0, a.e7)([m.ZP], () => m.ZP.getRunningGames()), g = (0, a.Wu)([o.Z], () => d.map(e => null != e.id ? o.Z.getApplication(e.id) : null).filter(C.lm), [d]), h = null;
  if (null != n ? h = n.name : null != s && (h = s.name), null == h) return null;
  let j = (0, U.Z)(s, n, d),
    v = r ? g.find(e => {
      let {
        id: n
      } = e;
      return n === (null == j ? true : j.id)
    }) : u,
    p = null != n && n.id.startsWith("screen") ? c.pzj : c.GON;
  return (0, l.jsx)("div", {
    className: B.modalContent,
    children: (0, l.jsx)(c.gNt, {
      label: M.intl.string(M.t.TC7Evz),
      children: (0, l.jsxs)(R.Z, {
        children: [null != v ? (0, l.jsx)(x.Z, {
          game: v,
          size: x.A.XSMALL,
          className: L.selectedIcon
        }) : (0, l.jsx)(p, {
          className: L.selectedIcon
        }), (0, l.jsx)("span", {
          className: L.ellipsisText,
          children: h
        }), t ? (0, l.jsx)("div", {
          className: L.changeButton,
          children: (0, l.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: i,
            text: M.intl.string(M.t.GEgsA4)
          })
        }) : null]
      })
    })
  })
}

function z(e) {
  let {
    onChange: n,
    guildId: t
  } = e, r = (0, a.e7)([p.Z], () => p.Z.getGuild(t));
  return null == r ? (n(), null) : (0, l.jsx)("div", {
    className: B.modalContent,
    children: (0, l.jsx)(c.gNt, {
      label: M.intl.string(M.t.WC3u3n),
      children: (0, l.jsxs)(R.Z, {
        children: [(0, l.jsx)(g.Z, {
          guild: r,
          size: g.Z.Sizes.SMALLER,
          className: L.selectedIcon
        }), (0, l.jsx)("span", {
          className: L.ellipsisText,
          children: r.name
        }), (0, l.jsx)("div", {
          className: L.changeButton,
          children: (0, l.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: n,
            text: M.intl.string(M.t.GEgsA4)
          })
        })]
      })
    })
  })
}

function F(e) {
  let {
    text: n
  } = e;
  return (0, l.jsxs)(d.Z, {
    align: d.Z.Align.CENTER,
    className: L.warning,
    children: [(0, l.jsx)(c.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: L.warningIcon
    }), (0, l.jsx)(c.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: n
    })]
  })
}

function W(e) {
  let {
    guildId: n
  } = e, t = (0, a.e7)([v.Z], () => {
    var e;
    return null != (e = v.Z.getMemberCount(n)) ? e : 0
  }), i = h.eo.useSetting(), o = r.useCallback(e => {
    h.eo.updateSetting(e), b.default.track(w.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: e
    })
  }, []);
  return t >= 2 && t <= _.tB ? (0, l.jsx)("div", {
    className: s()(B.modalContent, L.checkboxRow),
    children: (0, l.jsx)(c.Checkbox, {
      checked: !!i,
      onChange: o,
      label: M.intl.string(M.t.Cef4t7)
    })
  }) : null
}

function V(e) {
  let {
    enabled: n,
    onChange: t,
    screen: i
  } = e, o = r.useCallback(e => {
    t(e)
  }, [t]), u = (0, a.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, T.isLinux)());
  return (0, l.jsx)("div", {
    className: s()(B.modalContent, L.checkboxRow),
    children: (0, l.jsx)(c.Checkbox, {
      checked: n,
      onChange: o,
      label: i || u ? M.intl.string(M.t["5AdrtW"]) : M.intl.string(M.t.gRpbRF)
    })
  })
}

function H(e) {
  let {
    enabled: n,
    onChange: t
  } = e, i = r.useCallback(e => {
    t(e)
  }, [t]);
  return (0, l.jsx)("div", {
    className: s()(B.modalContent, L.checkboxRow),
    children: (0, l.jsx)(c.Checkbox, {
      checked: n,
      onChange: i,
      label: M.intl.string(M.t.JE73jB)
    })
  })
}

function X(e) {
  let {
    selectedSource: n,
    selectedFPS: t,
    selectedChannelId: i,
    selectedPreset: s,
    selectedResolution: c,
    sourceChanged: o,
    selectedGuildId: d,
    targetGuildPremiumTier: m,
    selectSource: x,
    selectGuild: g,
    sound: h,
    previewDisabled: v,
    onClose: p,
    onChangeSelectedFPS: N,
    onChangeSelectedResolution: b,
    onChangeSelectedPreset: C,
    onChangeSelectedChannelId: T,
    onChangeSource: O,
    onChangeAudioDevice: R,
    onChangeGuild: U,
    onChangeSound: _,
    onChangePreviewDisabled: L
  } = e, X = (0, a.e7)([Z.Z, j.Z], () => j.Z.getChannel(Z.Z.getVoiceChannelId())), Y = (0, a.e7)([y.Z], () => y.Z.GPUDriversOutdated), q = (0, a.e7)([y.Z], () => y.Z.problematicGPUDriver), K = (0, a.e7)([S.default], () => S.default.getCurrentUser()), J = (0, E.Z)();
  null != n && n.id.startsWith("screen") && !f.Z.supportsScreenSoundshare() && (J = M.intl.string(M.t["1b0Gm7"]));
  let Q = !!(null == n ? true : n.id.startsWith("camera")),
    $ = null != K && K.verified && !K.bot,
    ee = null != X && !(0, u.Yk)(X);
  return (0, l.jsxs)(r.Fragment, {
    children: [(0, l.jsx)("div", {
      children: Q ? (0, l.jsx)(I.Z, {
        selectedSource: n,
        onChangeVideoDeviceSource: O,
        onChangeAudioDevice: R
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(G, {
          selectSource: x,
          sourceChanged: o,
          onChangeSource: O,
          selectedSource: n
        }), null != J ? (0, l.jsx)(F, {
          text: J
        }) : null, null != n && null == J ? (0, l.jsx)(V, {
          enabled: h,
          onChange: _,
          screen: n.id.startsWith("screen")
        }) : null]
      })
    }), g && null != d ? (0, l.jsx)("div", {
      children: (0, l.jsx)(z, {
        guildId: d,
        onChange: U
      })
    }) : null, (0, l.jsxs)("div", {
      children: [null != X ? (0, l.jsx)(A.Z, {
        channel: X
      }) : (0, l.jsx)("div", {
        className: B.modalContent,
        children: (0, l.jsx)(k.Z, {
          guildId: d,
          selectedChannelId: i,
          onChangeSelectedChannelId: T
        })
      }), null != d && $ && ee ? (0, l.jsx)(W, {
        guildId: d
      }) : null, Y ? (0, l.jsx)(F, {
        text: M.intl.string(M.t.q65tSw)
      }) : null, q ? (0, l.jsx)(F, {
        text: M.intl.format(M.t.RrLvuT, {
          helpCenterLink: P.Z.getArticleURL(w.BhN.NVIDIA_DRIVER_ISSUES)
        })
      }) : null]
    }), (0, l.jsx)(D.Z, {
      selectedPreset: s,
      selectedFPS: t,
      selectedResolution: c,
      targetGuildPremiumTier: m,
      onClose: p,
      onFPSChange: N,
      onResolutionChange: b,
      onPresetChange: C,
      captureDeviceSelected: Q
    }), (0, l.jsx)(H, {
      enabled: v,
      onChange: L
    })]
  })
}