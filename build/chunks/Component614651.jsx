/** Chunk was on 32502 **/
/** chunk id: 614651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $p: () => q,
  Ay: () => et,
  IE: () => z,
  Ys: () => X,
  ac: () => Z,
  y2: () => $
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let z = {
    COZY: "cozy",
    COMPACT: "compact"
  },
  K = (0, Chunk915089.Ld)(),
  W = (0, Chunk915089.Ld)(),
  J = "1337",
  Q = e => {
    let t = 0;
    return [(0, O.rh)(F(Y({}, (0, E.Ay)({
      channelId: J,
      content: M.intl.string(M.t.oZxkEq)
    })), {
      state: w.cmJ.SENT,
      id: "".concat(t++)
    })), (0, O.rh)(F(Y({}, (0, E.Ay)({
      channelId: J,
      content: (0, c.Mw)(e) ? M.intl.string(M.t["WGb/v7"]) : M.intl.string(M.t["62m4mz"])
    })), {
      state: w.cmJ.SENT,
      id: "".concat(t++)
    })), (0, O.rh)(F(Y({}, (0, E.Ay)({
      channelId: J,
      content: M.intl.string(M.t.a0Byo5)
    })), {
      state: w.cmJ.SENT,
      id: "".concat(t++)
    })), (0, O.rh)(F(Y({}, (0, E.Ay)({
      channelId: J,
      content: M.intl.string(M.t.bmwEWJ)
    })), {
      state: w.cmJ.SENT,
      id: "".concat(t++)
    })), (0, O.rh)(F(Y({}, (0, E.Ay)({
      channelId: J,
      content: M.intl.string(M.t["hK9QW/"])
    })), {
      state: w.cmJ.SENT,
      id: "".concat(t)
    }))]
  },
  Z = () => (0, i.jsxs)("div", {
    className: U.cF,
    children: [(0, i.jsxs)("div", {
      className: U.ZT,
      children: [(0, i.jsxs)(d.Text, {
        variant: "text-md/medium",
        children: [" ", M.intl.string(M.t["0EzVst"])]
      }), (0, i.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: M.intl.string(M.t.PV3dGX)
      })]
    }), (0, i.jsx)(R.Q, {})]
  }),
  X = () => M.intl.format(M.t.Jae48E, {
    onClick: () => {
      (0, D.openUserSettings)(P.X.SYNC_FORCED_COLORS, {
        section: w.nc_.ACCESSIBILITY
      })
    }
  }),
  q = () => M.intl.format(M.t["5LEQdc"], {
    onAccessibilityClick: () => {
      (0, D.openUserSettings)(P.X.ACCESSIBILITY_PANEL, {
        section: w.nc_.ACCESSIBILITY
      })
    }
  }),
  $ = () => {
    let e = I.hH.useSetting(),
      t = I.hD.useSetting(),
      n = I.rs.useSetting(),
      {
        theme: s,
        messageGroupSpacing: o
      } = (0, a.cf)([_.A, p.A], () => ({
        theme: _.A.theme,
        messageGroupSpacing: p.A.messageGroupSpacing
      })),
      [u] = l.useState(() => Q(w.NJ8.DARK)),
      [h] = l.useState(() => Q(w.NJ8.LIGHT)),
      g = t && n,
      x = (0, c.Mw)(s) ? u : h;
    return (0, i.jsx)(d.M1G, {
      children: (0, i.jsx)(d.ZpM, {
        className: r()(U.VH, H.C2, e ? U.Me : true, "group-spacing-".concat(null != o ? o : e ? V.y5 : V.ES)),
        outline: true,
        "aria-hidden": true,
        children: x.map((t, n) => (0, i.jsx)(f.A, {
          author: (0, S.p_)(t),
          message: t,
          compact: e,
          isGroupStart: n % 2 == 0,
          className: 0 === n ? U.Ck : true,
          hideSimpleEmbedContent: g
        }, t.id))
      })
    })
  };
class ee extends Chunk64700.Component {
  renderZoomSlider() {
    return T.isPlatformEmbedded ? (0, i.jsx)(d.Apm, {
      label: M.intl.string(M.t.i19n5L),
      description: M.intl.string(M.t.ip0uSf),
      helperText: M.intl.format(M.t.OMkSUo, {
        modKey: g.A.modKey
      }),
      initialValue: this.props.zoom,
      defaultValue: w.hH7.ZOOM_DEFAULT,
      markers: w.hH7.ZOOM_SCALES,
      stickToMarkers: true,
      onValueChange: this.handleZoomChange,
      onValueRender: this.handleSliderRender,
      "aria-labelledby": K
    }) : null
  }
  renderFontScaleSlider() {
    return (0, i.jsx)(d.Apm, {
      label: M.intl.string(M.t.qPOqoK),
      description: M.intl.string(M.t.XrtbPo),
      initialValue: this.props.fontSize,
      defaultValue: w.hH7.FONT_SIZE_DEFAULT,
      markers: w.hH7.FONT_SIZES,
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
    return (0, i.jsx)(d.Apm, {
      label: M.intl.string(M.t.Q6lKkg),
      description: M.intl.string(M.t.p7eUrb),
      initialValue: t,
      defaultValue: e ? V.y5 : V.ES,
      markers: V.qh,
      stickToMarkers: true,
      onValueChange: this.handleMessageSpacingChange,
      onValueRender: this.handleSliderRenderPX,
      onMarkerRender: this.handleSliderRenderPX,
      getAriaValueText: this.handleSliderValueText,
      "aria-labelledby": W
    })
  }
  renderPreview() {
    return (0, i.jsx)($, {})
  }
  renderTheme() {
    let {
      useForcedColors: e
    } = this.props;
    return e ? (0, i.jsx)(d.nVY, {
      label: M.intl.string(M.t.Ksh3ik),
      children: (0, i.jsx)(d.po8, {
        messageType: d.YCn.INFO,
        children: (0, m.D)() ? (0, i.jsx)(X, {}) : M.intl.string(M.t.AUMSZP)
      })
    }) : (0, i.jsx)(d.nVY, {
      label: M.intl.string(M.t.Ksh3ik),
      children: (0, i.jsxs)("div", {
        children: [(0, i.jsx)(Z, {}), (0, i.jsx)(R.I, {})]
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
    return M.intl.formatToPlainString(M.t["0hpvOV"], {
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, x.XS)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, x.AC)(e)
    }
  }
  handleZoomChange(e) {
    (0, x.Qp)(e)
  }
  render() {
    let {
      density: e
    } = this.props, t = (0, i.jsxs)(C.x, {
      setting: k.H.APPEARANCE_THEME,
      children: [this.renderPreview(), this.renderTheme()]
    }), n = (0, i.jsx)(C.x, {
      setting: k.H.APPEARANCE_ICON,
      children: (0, i.jsx)(L.y, {})
    }), l = [{
      name: M.intl.string(M.t["7iegX4"]),
      value: o.NS.COMPACT
    }, {
      name: M.intl.string(M.t.bBvAEH),
      value: o.NS.DEFAULT
    }, {
      name: M.intl.string(M.t["4cuYHx"]),
      value: o.NS.COZY
    }], s = (0, i.jsxs)(C.x, {
      setting: k.H.APPEARANCE_LIST_SPACING,
      children: [(0, i.jsx)(d.z6M, {
        label: M.intl.string(M.t["C/5V0A"]),
        description: M.intl.string(M.t.QLZhYk),
        options: l,
        onChange: e => this.handleUIDensityChange({
          value: e
        }),
        value: e
      }), (0, i.jsx)(d.cGx, {
        className: U.yF
      })]
    }), r = (0, i.jsxs)(C.x, {
      setting: k.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
      children: [(0, i.jsxs)(d.nVY, {
        label: M.intl.string(M.t["2ed/sA"]),
        description: M.intl.string(M.t.u9N6Qh),
        children: [(0, i.jsx)(d.z6M, {
          label: M.intl.string(M.t.nKRoPv),
          description: M.intl.string(M.t.QntEEG),
          options: [{
            name: M.intl.string(M.t.Jqj4cZ),
            value: z.COZY
          }, {
            name: M.intl.string(M.t["1JNcPS"]),
            value: z.COMPACT
          }],
          onChange: e => this.handleMessageDisplayModeChange({
            value: e
          }),
          value: this.props.messageDisplayCompact ? z.COMPACT : z.COZY
        }), this.props.messageDisplayCompact && (0, i.jsx)(d.dOG, {
          label: M.intl.string(M.t["//vhWi"]),
          checked: !this.props.displayCompactAvatars,
          onChange: e => this.handleDisplayCompactAvatarsChanged(!e)
        }), this.renderMessageGroupSpacingSlider()]
      }), (0, i.jsx)(d.cGx, {
        className: U.yF
      })]
    }), a = (0, i.jsxs)(C.x, {
      setting: k.H.APPEARANCE_SCALING_SPACING,
      children: [(0, i.jsxs)(d.nVY, {
        label: M.intl.string(M.t["0Yh+ZX"]),
        children: [this.renderFontScaleSlider(), this.renderZoomSlider()]
      }), (0, i.jsx)(d.cGx, {
        className: U.yF
      })]
    }), c = (0, i.jsx)(d.Text, {
      variant: "text-md/normal",
      className: U.fK,
      children: (0, i.jsx)(q, {})
    });
    return (0, i.jsxs)(G.A, {
      title: M.intl.string(M.t["iHH+ky"]),
      children: [t, n, s, r, a, c]
    })
  }
  constructor(...e) {
    super(...e), B(this, "darkMessages", Q(w.NJ8.DARK)), B(this, "lightMessages", Q(w.NJ8.LIGHT)), B(this, "handleDisplayCompactAvatarsChanged", e => {
      u.Ay.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), B(this, "handleDesktopRefreshEnabledChanged", e => {
      u.Ay.updatedUnsyncedSettings({
        disableVisualRefresh: !e
      })
    }), B(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      I.hH.updateSetting(t === z.COMPACT), (0, x.AC)()
    }), B(this, "handleUIDensityChange", e => {
      let {
        value: t
      } = e;
      t !== o.NS.UNSET_UI_DENSITY && I.Xi.updateSetting(t)
    })
  }
}

function et() {
  let e = I.hH.useSetting(),
    t = I.hD.useSetting(),
    n = I.rs.useSetting(),
    l = I.eh.useSetting(),
    s = I.Xi.useSetting();
  (0, h.Ay)(() => {
    (0, b.v)()
  });
  let r = (0, v.qo)(),
    o = (0, a.cf)([_.A, N.Ay, p.A, y.default, A.A], () => {
      var e, t;
      return {
        theme: _.A.theme,
        useForcedColors: p.A.useForcedColors,
        useSystemTheme: N.Ay.useSystemTheme,
        fontSize: p.A.fontSize,
        zoom: p.A.zoom,
        messageGroupSpacing: p.A.messageGroupSpacing,
        displayCompactAvatars: N.Ay.displayCompactAvatars,
        isStaff: null != (e = null == (t = y.default.getCurrentUser()) ? true : t.isStaff) && e,
        gradientPreset: A.A.gradientPreset
      }
    });
  return (0, i.jsx)(ee, Y({
    messageDisplayCompact: e,
    hideSimpleEmbedContent: t && n,
    clientTheme: l,
    density: s,
    darkSidebar: r
  }, o))
}