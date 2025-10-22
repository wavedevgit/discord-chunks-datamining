/** Chunk was on 41259 **/
/** chunk id: 912114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => x,
  default: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk140106 = require("./140106.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk653841 = require("./653841.js");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function P(e, t) {
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

function x(e) {
  let {
    channel: t,
    previewIcon: n,
    onIconChange: l,
    onIconRemove: r,
    analyticsLocations: a,
    petite: c = false,
    className: u,
    allowRemovingIcon: d = true
  } = e, m = true !== n ? n : (null == t ? true : t.icon) != null ? (0, f.x)(t, 120) : null, {
    analyticsLocations: b
  } = (0, h.ZP)(a, p.Z.GROUP_DM_ICON_EDITOR), v = c ? 32 : 64;
  return (0, i.jsxs)("div", {
    className: o()(O.iconSection, u),
    children: [(0, i.jsxs)(s.P3F, {
      className: o()(O.iconContainer, {
        [O.petite]: c
      }),
      "aria-label": g.intl.string(g.t["0qPSMV"]),
      onClick: () => (0, y.ND)(l, b),
      children: [null != m ? (0, i.jsx)("img", {
        src: m,
        alt: "",
        className: O.iconImage
      }) : (0, i.jsx)("div", {
        className: O.iconPlaceholder,
        children: (0, i.jsx)(s.BFJ, {
          size: "custom",
          width: v,
          height: v,
          color: "currentColor"
        })
      }), (0, i.jsx)("div", {
        className: O.pencilIconWrapper,
        children: (0, i.jsx)(s.vdY, {
          color: "currentColor",
          size: c ? "xs" : "refresh_sm"
        })
      })]
    }), null != m && d ? (0, i.jsx)(s.Avr, {
      variant: "critical",
      onClick: r,
      "aria-label": g.intl.string(g.t["uY+Nk/"]),
      text: g.intl.string(g.t["uY+Nk/"]),
      textVariant: "text-sm/medium",
      size: "sm",
      role: "button",
      type: "button"
    }) : null]
  })
}
let D = function(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: r,
    setHasPendingChanges: o,
    closeOrShowDiscardChangesAlert: f,
    location: D
  } = e, w = (0, c.e7)([b.Z], () => b.Z.getChannel(t)), C = null == w ? true : w.name, I = (0, m.cO)(w), [E, k] = l.useState(null != C ? C : ""), [N, S] = l.useState(true), T = true !== N, {
    analyticsLocations: R
  } = (0, h.ZP)(D, p.Z.GROUP_DM_EDIT_MODAL), Z = {
    channel_id: t,
    channel_type: null == w ? true : w.type,
    location: D,
    location_stack: R,
    old_name_set: "" !== C,
    old_icon_set: (null == w ? true : w.icon) != null
  };
  return (l.useEffect(() => {
    o(E !== C || T)
  }, [E, C, T, o]), (0, d.ZP)(() => (v.default.track(_.rMx.GDM_EDIT_INTERACTED, P(j({}, Z), {
    action: "opened"
  })), () => {
    v.default.track(_.rMx.GDM_EDIT_INTERACTED, P(j({}, Z), {
      action: "dismissed"
    }))
  })), null == w) ? null : (0, i.jsx)(h.Gt, {
    value: R,
    children: (0, i.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let i = E !== C,
          l = true !== N;
        if (v.default.track(_.rMx.GDM_EDIT_INTERACTED, P(j({}, Z), {
            action: "saved",
            new_name_set: "" !== E,
            new_icon_set: (l ? N : null == w ? true : w.icon) != null,
            name_changed: i,
            icon_changed: l
          })), i || l) {
          let e = {};
          i && (e.name = E), l && (e.icon = N), u.Z.updateChannel(t, e, D).catch(y.g6)
        }
        n()
      },
      children: (0, i.jsx)(a.Modal, {
        title: g.intl.string(g.t["5Q9+/L"]),
        actions: [{
          text: g.intl.string(g.t["ETE/oC"]),
          variant: "secondary",
          onClick: f
        }, {
          text: g.intl.string(g.t["R3BPH+"]),
          variant: "primary",
          type: "submit",
          disabled: E === C && !T
        }],
        onClose: () => Promise.resolve(f()),
        transitionState: r,
        children: (0, i.jsxs)("div", {
          className: O.modalContent,
          children: [(0, i.jsx)(x, {
            channel: w,
            previewIcon: N,
            onIconChange: e => S(e.imageUri),
            onIconRemove: () => S(null),
            analyticsLocations: R
          }), (0, i.jsx)(s.oil, {
            "aria-label": g.intl.string(g.t.GEGW3P),
            placeholder: null != I ? I : "",
            value: E,
            onChange: k,
            autoFocus: true
          })]
        })
      })
    })
  })
}