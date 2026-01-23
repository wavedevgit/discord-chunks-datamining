/** Chunk was on web.js **/
/** chunk id: 614651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $p: () => J,
  Ay: () => en,
  IE: () => K,
  Ys: () => $,
  ac: () => Q,
  y2: () => ee
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

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = {
    COZY: "cozy",
    COMPACT: "compact"
  },
  z = (0, Chunk915089.Ld)(),
  q = (0, Chunk915089.Ld)(),
  X = "1337",
  Z = e => {
    let t = 0;
    return [(0, b.rh)(W(H({}, (0, O.Ay)({
      channelId: X,
      content: G.intl.string(G.t.oZxkEq)
    })), {
      state: k.cmJ.SENT,
      id: "".concat(t++)
    })), (0, b.rh)(W(H({}, (0, O.Ay)({
      channelId: X,
      content: (0, c.Mw)(e) ? G.intl.string(G.t["WGb/v7"]) : G.intl.string(G.t["62m4mz"])
    })), {
      state: k.cmJ.SENT,
      id: "".concat(t++)
    })), (0, b.rh)(W(H({}, (0, O.Ay)({
      channelId: X,
      content: G.intl.string(G.t.a0Byo5)
    })), {
      state: k.cmJ.SENT,
      id: "".concat(t++)
    })), (0, b.rh)(W(H({}, (0, O.Ay)({
      channelId: X,
      content: G.intl.string(G.t.bmwEWJ)
    })), {
      state: k.cmJ.SENT,
      id: "".concat(t++)
    })), (0, b.rh)(W(H({}, (0, O.Ay)({
      channelId: X,
      content: G.intl.string(G.t["hK9QW/"])
    })), {
      state: k.cmJ.SENT,
      id: "".concat(t)
    }))]
  },
  Q = () => (0, r.jsxs)("div", {
    className: V.cF,
    children: [(0, r.jsxs)("div", {
      className: V.ZT,
      children: [(0, r.jsxs)(u.Text, {
        variant: "text-md/medium",
        children: [" ", G.intl.string(G.t["0EzVst"])]
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: G.intl.string(G.t.PV3dGX)
      })]
    }), (0, r.jsx)(D.Q, {})]
  }),
  $ = () => G.intl.format(G.t.Jae48E, {
    onClick: () => {
      (0, j.openUserSettings)(P.X.SYNC_FORCED_COLORS, {
        section: k.nc_.ACCESSIBILITY
      })
    }
  }),
  J = () => G.intl.format(G.t["5LEQdc"], {
    onAccessibilityClick: () => {
      (0, j.openUserSettings)(P.X.ACCESSIBILITY_PANEL, {
        section: k.nc_.ACCESSIBILITY
      })
    }
  }),
  ee = () => {
    let e = w.hH.useSetting(),
      t = w.hD.useSetting(),
      n = w.rs.useSetting(),
      {
        theme: a,
        messageGroupSpacing: l
      } = (0, o.cf)([N.A, h.A], () => ({
        theme: N.A.theme,
        messageGroupSpacing: h.A.messageGroupSpacing
      })),
      [d] = i.useState(() => Z(k.NJ8.DARK)),
      [f] = i.useState(() => Z(k.NJ8.LIGHT)),
      p = t && n,
      _ = (0, c.Mw)(a) ? d : f;
    return (0, r.jsx)(u.M1G, {
      children: (0, r.jsx)(u.ZpM, {
        className: s()(V.VH, F.C2, e ? V.Me : true, "group-spacing-".concat(null != l ? l : e ? U.y5 : U.ES)),
        outline: true,
        "aria-hidden": true,
        children: _.map((t, n) => (0, r.jsx)(A.A, {
          author: (0, v.p_)(t),
          message: t,
          compact: e,
          isGroupStart: n % 2 == 0,
          className: 0 === n ? V.Ck : true,
          hideSimpleEmbedContent: p
        }, t.id))
      })
    })
  };
class et extends Chunk64700.Component {
  renderZoomSlider() {
    return C.isPlatformEmbedded ? (0, r.jsx)(u.Apm, {
      label: G.intl.string(G.t.i19n5L),
      description: G.intl.string(G.t.ip0uSf),
      helperText: G.intl.format(G.t.OMkSUo, {
        modKey: p.A.modKey
      }),
      initialValue: this.props.zoom,
      defaultValue: k.hH7.ZOOM_DEFAULT,
      markers: k.hH7.ZOOM_SCALES,
      stickToMarkers: true,
      onValueChange: this.handleZoomChange,
      onValueRender: this.handleSliderRender,
      "aria-labelledby": z
    }) : null
  }
  renderFontScaleSlider() {
    return (0, r.jsx)(u.Apm, {
      label: G.intl.string(G.t.qPOqoK),
      description: G.intl.string(G.t.XrtbPo),
      initialValue: this.props.fontSize,
      defaultValue: k.hH7.FONT_SIZE_DEFAULT,
      markers: k.hH7.FONT_SIZES,
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
      label: G.intl.string(G.t.Q6lKkg),
      description: G.intl.string(G.t.p7eUrb),
      initialValue: t,
      defaultValue: e ? U.y5 : U.ES,
      markers: U.qh,
      stickToMarkers: true,
      onValueChange: this.handleMessageSpacingChange,
      onValueRender: this.handleSliderRenderPX,
      onMarkerRender: this.handleSliderRenderPX,
      getAriaValueText: this.handleSliderValueText,
      "aria-labelledby": q
    })
  }
  renderPreview() {
    return (0, r.jsx)(ee, {})
  }
  renderTheme() {
    let {
      useForcedColors: e
    } = this.props;
    return e ? (0, r.jsx)(u.nVY, {
      label: G.intl.string(G.t.Ksh3ik),
      children: (0, r.jsx)(u.po8, {
        messageType: u.YCn.INFO,
        children: (0, m.D)() ? (0, r.jsx)($, {}) : G.intl.string(G.t.AUMSZP)
      })
    }) : (0, r.jsx)(u.nVY, {
      label: G.intl.string(G.t.Ksh3ik),
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(Q, {}), (0, r.jsx)(D.I, {})]
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
    return G.intl.formatToPlainString(G.t["0hpvOV"], {
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, _.XS)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, _.AC)(e)
    }
  }
  handleZoomChange(e) {
    (0, _.Qp)(e)
  }
  render() {
    let {
      density: e
    } = this.props, t = (0, r.jsxs)(I.x, {
      setting: M.H.APPEARANCE_THEME,
      children: [this.renderPreview(), this.renderTheme()]
    }), n = (0, r.jsx)(I.x, {
      setting: M.H.APPEARANCE_ICON,
      children: (0, r.jsx)(x.y, {})
    }), i = [{
      name: G.intl.string(G.t["7iegX4"]),
      value: l.NS.COMPACT
    }, {
      name: G.intl.string(G.t.bBvAEH),
      value: l.NS.DEFAULT
    }, {
      name: G.intl.string(G.t["4cuYHx"]),
      value: l.NS.COZY
    }], a = (0, r.jsxs)(I.x, {
      setting: M.H.APPEARANCE_LIST_SPACING,
      children: [(0, r.jsx)(u.z6M, {
        label: G.intl.string(G.t["C/5V0A"]),
        description: G.intl.string(G.t.QLZhYk),
        options: i,
        onChange: e => this.handleUIDensityChange({
          value: e
        }),
        value: e
      }), (0, r.jsx)(u.cGx, {
        className: V.yF
      })]
    }), s = (0, r.jsxs)(I.x, {
      setting: M.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
      children: [(0, r.jsxs)(u.nVY, {
        label: G.intl.string(G.t["2ed/sA"]),
        description: G.intl.string(G.t.u9N6Qh),
        children: [(0, r.jsx)(u.z6M, {
          label: G.intl.string(G.t.nKRoPv),
          description: G.intl.string(G.t.QntEEG),
          options: [{
            name: G.intl.string(G.t.Jqj4cZ),
            value: K.COZY
          }, {
            name: G.intl.string(G.t["1JNcPS"]),
            value: K.COMPACT
          }],
          onChange: e => this.handleMessageDisplayModeChange({
            value: e
          }),
          value: this.props.messageDisplayCompact ? K.COMPACT : K.COZY
        }), this.props.messageDisplayCompact && (0, r.jsx)(u.dOG, {
          label: G.intl.string(G.t["//vhWi"]),
          checked: !this.props.displayCompactAvatars,
          onChange: e => this.handleDisplayCompactAvatarsChanged(!e)
        }), this.renderMessageGroupSpacingSlider()]
      }), (0, r.jsx)(u.cGx, {
        className: V.yF
      })]
    }), o = (0, r.jsxs)(I.x, {
      setting: M.H.APPEARANCE_SCALING_SPACING,
      children: [(0, r.jsxs)(u.nVY, {
        label: G.intl.string(G.t["0Yh+ZX"]),
        children: [this.renderFontScaleSlider(), this.renderZoomSlider()]
      }), (0, r.jsx)(u.cGx, {
        className: V.yF
      })]
    }), c = (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: V.fK,
      children: (0, r.jsx)(J, {})
    });
    return (0, r.jsxs)(L.A, {
      title: G.intl.string(G.t["iHH+ky"]),
      children: [t, n, a, s, o, c]
    })
  }
  constructor(...e) {
    super(...e), B(this, "darkMessages", Z(k.NJ8.DARK)), B(this, "lightMessages", Z(k.NJ8.LIGHT)), B(this, "handleDisplayCompactAvatarsChanged", e => {
      d.Ay.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), B(this, "handleDesktopRefreshEnabledChanged", e => {
      d.Ay.updatedUnsyncedSettings({
        disableVisualRefresh: !e
      })
    }), B(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      w.hH.updateSetting(t === K.COMPACT), (0, _.AC)()
    }), B(this, "handleUIDensityChange", e => {
      let {
        value: t
      } = e;
      t !== l.NS.UNSET_UI_DENSITY && w.Xi.updateSetting(t)
    })
  }
}

function en() {
  let e = w.hH.useSetting(),
    t = w.hD.useSetting(),
    n = w.rs.useSetting(),
    i = w.eh.useSetting(),
    a = w.Xi.useSetting();
  (0, f.Ay)(() => {
    (0, E.v)()
  });
  let s = (0, S.qo)(),
    l = (0, o.cf)([N.A, R.Ay, h.A, T.default, g.A], () => {
      var e, t;
      return {
        theme: N.A.theme,
        useForcedColors: h.A.useForcedColors,
        useSystemTheme: R.Ay.useSystemTheme,
        fontSize: h.A.fontSize,
        zoom: h.A.zoom,
        messageGroupSpacing: h.A.messageGroupSpacing,
        displayCompactAvatars: R.Ay.displayCompactAvatars,
        isStaff: null != (e = null == (t = T.default.getCurrentUser()) ? true : t.isStaff) && e,
        gradientPreset: g.A.gradientPreset
      }
    });
  return (0, r.jsx)(et, H({
    messageDisplayCompact: e,
    hideSimpleEmbedContent: t && n,
    clientTheme: i,
    density: a,
    darkSidebar: s
  }, l))
}