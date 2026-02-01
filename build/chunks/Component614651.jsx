/** Chunk was on 42402 **/
/** chunk id: 614651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $p: () => Z,
  Ay: () => et,
  IE: () => K,
  Ys: () => Q,
  ac: () => J,
  y2: () => $
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk964486 = require("./964486.js"),
  Chunk775121 = require("./775121.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk502229 = require("./502229.jsx"),
  Chunk47671 = require("./47671.js"),
  Chunk920603 = require("./920603.js"),
  Chunk915089 = require("./915089.js"),
  Chunk141468 = require("./141468.js"),
  Chunk963852 = require("./963852.js"),
  Chunk763754 = require("./763754.js"),
  Chunk20851 = require("./20851.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk97469 = require("./97469.js"),
  Chunk287809 = require("./287809.js"),
  Chunk723702 = require("./723702.js"),
  Chunk544028 = require("./544028.js"),
  Chunk964404 = require("./964404.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk70040 = require("./70040.jsx"),
  Chunk961154 = require("./961154.jsx"),
  Chunk790174 = require("./790174.jsx"),
  Chunk840065 = require("./840065.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk944255 = require("./944255.js"),
  Chunk473169 = require("./473169.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = {
    COZY: "cozy",
    COMPACT: "compact"
  },
  W = (0, Chunk915089.Ld)(),
  z = (0, Chunk915089.Ld)(),
  X = "1337",
  q = e => {
    let t = 0;
    return [(0, O.rh)(Y(F({}, (0, j.Ay)({
      channelId: X,
      content: U.intl.string(U.t.oZxkEq)
    })), {
      state: G.cmJ.SENT,
      id: "".concat(t++)
    })), (0, O.rh)(Y(F({}, (0, j.Ay)({
      channelId: X,
      content: (0, c.Mw)(e) ? U.intl.string(U.t["WGb/v7"]) : U.intl.string(U.t["62m4mz"])
    })), {
      state: G.cmJ.SENT,
      id: "".concat(t++)
    })), (0, O.rh)(Y(F({}, (0, j.Ay)({
      channelId: X,
      content: U.intl.string(U.t.a0Byo5)
    })), {
      state: G.cmJ.SENT,
      id: "".concat(t++)
    })), (0, O.rh)(Y(F({}, (0, j.Ay)({
      channelId: X,
      content: U.intl.string(U.t.bmwEWJ)
    })), {
      state: G.cmJ.SENT,
      id: "".concat(t++)
    })), (0, O.rh)(Y(F({}, (0, j.Ay)({
      channelId: X,
      content: U.intl.string(U.t["hK9QW/"])
    })), {
      state: G.cmJ.SENT,
      id: "".concat(t)
    }))]
  },
  J = () => (0, r.jsxs)("div", {
    className: V.cF,
    children: [(0, r.jsxs)("div", {
      className: V.ZT,
      children: [(0, r.jsxs)(u.Text, {
        variant: "text-md/medium",
        children: [" ", U.intl.string(U.t["0EzVst"])]
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: U.intl.string(U.t.PV3dGX)
      })]
    }), (0, r.jsx)(w.Q, {})]
  }),
  Q = () => U.intl.format(U.t.Jae48E, {
    onClick: () => {
      (0, L.openUserSettings)(P.X.SYNC_FORCED_COLORS, {
        section: G.nc_.ACCESSIBILITY
      })
    }
  }),
  Z = () => U.intl.format(U.t["5LEQdc"], {
    onAccessibilityClick: () => {
      (0, L.openUserSettings)(P.X.ACCESSIBILITY_PANEL, {
        section: G.nc_.ACCESSIBILITY
      })
    }
  }),
  $ = () => {
    let e = T.hH.useSetting(),
      t = T.hD.useSetting(),
      n = T.rs.useSetting(),
      {
        theme: i,
        messageGroupSpacing: o
      } = (0, a.cf)([I.A, f.A], () => ({
        theme: I.A.theme,
        messageGroupSpacing: f.A.messageGroupSpacing
      })),
      [d] = l.useState(() => q(G.NJ8.DARK)),
      [p] = l.useState(() => q(G.NJ8.LIGHT)),
      h = t && n,
      g = (0, c.Mw)(i) ? d : p;
    return (0, r.jsx)(u.M1G, {
      children: (0, r.jsx)(u.ZpM, {
        className: s()(V.VH, B.C2, e ? V.Me : true, "group-spacing-".concat(null != o ? o : e ? k.y5 : k.ES)),
        outline: true,
        "aria-hidden": true,
        children: g.map((t, n) => (0, r.jsx)(_.A, {
          author: (0, x.p_)(t),
          message: t,
          compact: e,
          isGroupStart: n % 2 == 0,
          className: 0 === n ? V.Ck : true,
          hideSimpleEmbedContent: h
        }, t.id))
      })
    })
  };
class ee extends Chunk64700.Component {
  renderZoomSlider() {
    return S.isPlatformEmbedded ? (0, r.jsx)(u.Apm, {
      label: U.intl.string(U.t.i19n5L),
      description: U.intl.string(U.t.ip0uSf),
      helperText: U.intl.format(U.t.OMkSUo, {
        modKey: h.A.modKey
      }),
      initialValue: this.props.zoom,
      defaultValue: G.hH7.ZOOM_DEFAULT,
      markers: G.hH7.ZOOM_SCALES,
      stickToMarkers: true,
      onValueChange: this.handleZoomChange,
      onValueRender: this.handleSliderRender,
      "aria-labelledby": W
    }) : null
  }
  renderFontScaleSlider() {
    return (0, r.jsx)(u.Apm, {
      label: U.intl.string(U.t.qPOqoK),
      description: U.intl.string(U.t.XrtbPo),
      initialValue: this.props.fontSize,
      defaultValue: G.hH7.FONT_SIZE_DEFAULT,
      markers: G.hH7.FONT_SIZES,
      stickToMarkers: true,
      onValueChange: this.handleFontSizeChange,
      onValueRender: this.handleSliderRenderPX,
      onMarkerRender: this.handleSliderRenderPX,
      getAriaValueText: this.handleSliderValueText
    })
  }
  renderMessageGroupSpacingSlider() {
    let {
      messageDisplayCompact: e,
      messageGroupSpacing: t
    } = this.props;
    return (0, r.jsx)(u.Apm, {
      label: U.intl.string(U.t.Q6lKkg),
      description: U.intl.string(U.t.p7eUrb),
      initialValue: t,
      defaultValue: e ? k.y5 : k.ES,
      markers: k.qh,
      stickToMarkers: true,
      onValueChange: this.handleMessageSpacingChange,
      onValueRender: this.handleSliderRenderPX,
      onMarkerRender: this.handleSliderRenderPX,
      getAriaValueText: this.handleSliderValueText,
      "aria-labelledby": z
    })
  }
  renderPreview() {
    return (0, r.jsx)($, {})
  }
  renderTheme() {
    let {
      useForcedColors: e
    } = this.props;
    return e ? (0, r.jsx)(u.nVY, {
      label: U.intl.string(U.t.Ksh3ik),
      children: (0, r.jsx)(u.po8, {
        messageType: u.YCn.INFO,
        children: (0, m.D)() ? (0, r.jsx)(Q, {}) : U.intl.string(U.t.AUMSZP)
      })
    }) : (0, r.jsx)(u.nVY, {
      label: U.intl.string(U.t.Ksh3ik),
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(J, {}), (0, r.jsx)(w.I, {})]
      })
    })
  }
  handleSliderRender(e) {
    return "".concat(e.toFixed(0), "%")
  }
  handleSliderRenderPX(e) {
    return "".concat(e.toFixed(0), "px")
  }
  handleSliderValueText(e) {
    return U.intl.formatToPlainString(U.t["0hpvOV"], {
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, g.XS)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, g.AC)(e)
    }
  }
  handleZoomChange(e) {
    (0, g.Qp)(e)
  }
  render() {
    let {
      density: e
    } = this.props, t = (0, r.jsxs)(v.x, {
      setting: M.H.APPEARANCE_THEME,
      children: [this.renderPreview(), this.renderTheme()]
    }), n = (0, r.jsx)(v.x, {
      setting: M.H.APPEARANCE_ICON,
      children: (0, r.jsx)(R.y, {})
    }), l = [{
      name: U.intl.string(U.t["7iegX4"]),
      value: o.NS.COMPACT
    }, {
      name: U.intl.string(U.t.bBvAEH),
      value: o.NS.DEFAULT
    }, {
      name: U.intl.string(U.t["4cuYHx"]),
      value: o.NS.COZY
    }], i = (0, r.jsxs)(v.x, {
      setting: M.H.APPEARANCE_LIST_SPACING,
      children: [(0, r.jsx)(u.z6M, {
        label: U.intl.string(U.t["C/5V0A"]),
        description: U.intl.string(U.t.QLZhYk),
        options: l,
        onChange: e => this.handleUIDensityChange({
          value: e
        }),
        value: e
      }), (0, r.jsx)(u.cGx, {
        className: V.yF
      })]
    }), s = (0, r.jsxs)(v.x, {
      setting: M.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
      children: [(0, r.jsxs)(u.nVY, {
        label: U.intl.string(U.t["2ed/sA"]),
        description: U.intl.string(U.t.u9N6Qh),
        children: [(0, r.jsx)(u.z6M, {
          label: U.intl.string(U.t.nKRoPv),
          description: U.intl.string(U.t.QntEEG),
          options: [{
            name: U.intl.string(U.t.Jqj4cZ),
            value: K.COZY
          }, {
            name: U.intl.string(U.t["1JNcPS"]),
            value: K.COMPACT
          }],
          onChange: e => this.handleMessageDisplayModeChange({
            value: e
          }),
          value: this.props.messageDisplayCompact ? K.COMPACT : K.COZY
        }), this.props.messageDisplayCompact && (0, r.jsx)(u.dOG, {
          label: U.intl.string(U.t["//vhWi"]),
          checked: !this.props.displayCompactAvatars,
          onChange: e => this.handleDisplayCompactAvatarsChanged(!e)
        }), this.renderMessageGroupSpacingSlider()]
      }), (0, r.jsx)(u.cGx, {
        className: V.yF
      })]
    }), a = (0, r.jsxs)(v.x, {
      setting: M.H.APPEARANCE_SCALING_SPACING,
      children: [(0, r.jsxs)(u.nVY, {
        label: U.intl.string(U.t["0Yh+ZX"]),
        children: [this.renderFontScaleSlider(), this.renderZoomSlider()]
      }), (0, r.jsx)(u.cGx, {
        className: V.yF
      })]
    }), c = (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: V.fK,
      children: (0, r.jsx)(Z, {})
    });
    return (0, r.jsxs)(D.A, {
      title: U.intl.string(U.t["iHH+ky"]),
      children: [t, n, i, s, a, c]
    })
  }
  constructor(...e) {
    super(...e), H(this, "darkMessages", q(G.NJ8.DARK)), H(this, "lightMessages", q(G.NJ8.LIGHT)), H(this, "handleDisplayCompactAvatarsChanged", e => {
      d.Ay.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), H(this, "handleDesktopRefreshEnabledChanged", e => {
      d.Ay.updatedUnsyncedSettings({
        disableVisualRefresh: !e
      })
    }), H(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      T.hH.updateSetting(t === K.COMPACT), (0, g.AC)()
    }), H(this, "handleUIDensityChange", e => {
      let {
        value: t
      } = e;
      t !== o.NS.UNSET_UI_DENSITY && T.Xi.updateSetting(t)
    })
  }
}

function et() {
  let e = T.hH.useSetting(),
    t = T.hD.useSetting(),
    n = T.rs.useSetting(),
    l = T.eh.useSetting(),
    i = T.Xi.useSetting();
  (0, p.Ay)(() => {
    (0, A.v)()
  });
  let s = (0, E.qo)(),
    o = (0, a.cf)([I.A, N.Ay, f.A, C.default, b.A], () => {
      var e, t;
      return {
        theme: I.A.theme,
        useForcedColors: f.A.useForcedColors,
        useSystemTheme: N.Ay.useSystemTheme,
        fontSize: f.A.fontSize,
        zoom: f.A.zoom,
        messageGroupSpacing: f.A.messageGroupSpacing,
        displayCompactAvatars: N.Ay.displayCompactAvatars,
        isStaff: null != (e = null == (t = C.default.getCurrentUser()) ? true : t.isStaff) && e,
        gradientPreset: b.A.gradientPreset
      }
    });
  return (0, r.jsx)(ee, F({
    messageDisplayCompact: e,
    hideSimpleEmbedContent: t && n,
    clientTheme: l,
    density: i,
    darkSidebar: s
  }, o))
}