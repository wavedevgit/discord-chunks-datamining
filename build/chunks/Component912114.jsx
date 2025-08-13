/** Chunk was on web.js **/
/** chunk id: 912114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => A,
  default: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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
  Chunk249593 = require("./249593.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    channel: t,
    previewIcon: n,
    onIconChange: i,
    onIconRemove: o,
    analyticsLocations: s,
    petite: l = false,
    className: u,
    allowRemovingIcon: d = true
  } = e, h = true !== n ? n : (null == t ? true : t.icon) != null ? (0, p.x)(t, 120) : null, {
    analyticsLocations: m
  } = (0, _.ZP)(s, f.Z.GROUP_DM_ICON_EDITOR), g = l ? 32 : 64, b = l ? "xs" : "refresh_sm";
  return (0, r.jsxs)("div", {
    className: a()(O.iconSection, u),
    children: [(0, r.jsxs)(c.P3F, {
      className: a()(O.iconContainer, {
        [O.petite]: l
      }),
      "aria-label": y.intl.string(y.t["0qPSMT"]),
      onClick: () => (0, E.ND)(i, m),
      children: [null != h ? (0, r.jsx)("img", {
        src: h,
        alt: "",
        className: O.iconImage
      }) : (0, r.jsx)("div", {
        className: O.iconPlaceholder,
        children: (0, r.jsx)(c.BFJ, {
          size: "custom",
          width: g,
          height: g,
          color: "currentColor"
        })
      }), (0, r.jsx)("div", {
        className: O.pencilIconWrapper,
        children: (0, r.jsx)(c.vdY, {
          color: "currentColor",
          size: b
        })
      })]
    }), null != h && d ? (0, r.jsx)(c.Avr, {
      variant: "critical",
      onClick: o,
      "aria-label": y.intl.string(y.t["uY+Nk5"]),
      text: y.intl.string(y.t["uY+Nk5"]),
      textVariant: "text-sm/medium",
      size: "sm",
      role: "button",
      type: "button"
    }) : null]
  })
}
let N = function(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: o,
    setHasPendingChanges: a,
    closeOrShowDiscardChangesAlert: p,
    location: v
  } = e, T = (0, s.e7)([m.Z], () => m.Z.getChannel(t)), N = null == T ? true : T.name, C = (0, h.cO)(T), [R, P] = i.useState(null != N ? N : ""), [w, D] = i.useState(true), L = true !== w, {
    analyticsLocations: x
  } = (0, _.ZP)(v, f.Z.GROUP_DM_EDIT_MODAL), M = {
    channel_id: t,
    channel_type: null == T ? true : T.type,
    location: v,
    location_stack: x,
    old_name_set: "" !== N,
    old_icon_set: (null == T ? true : T.icon) != null
  };
  i.useEffect(() => {
    a(R !== N || L)
  }, [R, N, L, a]), (0, d.ZP)(() => (g.default.track(b.rMx.GDM_EDIT_INTERACTED, S(I({}, M), {
    action: "opened"
  })), () => {
    g.default.track(b.rMx.GDM_EDIT_INTERACTED, S(I({}, M), {
      action: "dismissed"
    }))
  }));
  let j = e => {
    e.preventDefault();
    let r = R !== N,
      i = true !== w;
    if (g.default.track(b.rMx.GDM_EDIT_INTERACTED, S(I({}, M), {
        action: "saved",
        new_name_set: "" !== R,
        new_icon_set: (i ? w : null == T ? true : T.icon) != null,
        name_changed: r,
        icon_changed: i
      })), r || i) {
      let e = {};
      r && (e.name = R), i && (e.icon = w), u.Z.updateChannel(t, e, v).catch(E.g6)
    }
    n()
  };
  return null == T ? null : (0, r.jsx)(_.Gt, {
    value: x,
    children: (0, r.jsx)("form", {
      onSubmit: j,
      children: (0, r.jsx)(l.Modal, {
        title: y.intl.string(y.t["5Q9+/P"]),
        actions: [{
          text: y.intl.string(y.t["ETE/oK"]),
          variant: "secondary",
          onClick: p
        }, {
          text: y.intl.string(y.t.R3BPHx),
          variant: "primary",
          type: "submit",
          disabled: R === N && !L
        }],
        onClose: () => Promise.resolve(p()),
        transitionState: o,
        children: (0, r.jsxs)("div", {
          className: O.modalContent,
          children: [(0, r.jsx)(A, {
            channel: T,
            previewIcon: w,
            onIconChange: e => D(e.imageUri),
            onIconRemove: () => D(null),
            analyticsLocations: x
          }), (0, r.jsx)(c.oil, {
            "aria-label": y.intl.string(y.t.GEGW3N),
            placeholder: null != C ? C : "",
            value: R,
            onChange: P,
            autoFocus: true
          })]
        })
      })
    })
  })
}