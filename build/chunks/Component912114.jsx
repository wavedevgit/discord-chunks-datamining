/** Chunk was on 81985 **/
/** chunk id: 912114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => E,
  default: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk718937 = require("./718937.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function C(e, t) {
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

function E(e) {
  let {
    channel: t,
    previewIcon: n,
    onIconChange: i,
    onIconRemove: l,
    analyticsLocations: o,
    petite: s = false,
    className: u,
    allowRemovingIcon: d = true
  } = e, g = true !== n ? n : (null == t ? true : t.icon) != null ? (0, h.x)(t, 120) : null, {
    analyticsLocations: m
  } = (0, f.ZP)(o, p.Z.GROUP_DM_ICON_EDITOR), b = s ? 32 : 64;
  return (0, r.jsxs)("div", {
    className: a()(j.iconSection, u),
    children: [(0, r.jsxs)(c.P3F, {
      className: a()(j.iconContainer, {
        [j.petite]: s
      }),
      "aria-label": O.intl.string(O.t["0qPSMV"]),
      onClick: () => (0, y.ND)(i, m),
      children: [null != g ? (0, r.jsx)("img", {
        src: g,
        alt: "",
        className: j.iconImage
      }) : (0, r.jsx)("div", {
        className: j.iconPlaceholder,
        children: (0, r.jsx)(c.BFJ, {
          size: "custom",
          width: b,
          height: b,
          color: "currentColor"
        })
      }), (0, r.jsx)("div", {
        className: j.pencilIconWrapper,
        children: (0, r.jsx)(c.vdY, {
          color: "currentColor",
          size: s ? "xs" : "refresh_sm"
        })
      })]
    }), null != g && d ? (0, r.jsx)(c.Avr, {
      variant: "critical",
      onClick: l,
      "aria-label": O.intl.string(O.t["uY+Nk/"]),
      text: O.intl.string(O.t["uY+Nk/"]),
      textVariant: "text-sm/medium",
      size: "sm",
      role: "button",
      type: "button"
    }) : null]
  })
}
let S = function(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: l,
    setHasPendingChanges: a,
    closeOrShowDiscardChangesAlert: h,
    location: S
  } = e, _ = (0, s.e7)([m.Z], () => m.Z.getChannel(t)), I = null == _ ? true : _.name, P = (0, g.cO)(_), [Z, N] = i.useState(null != I ? I : ""), [T, A] = i.useState(true), w = true !== T, {
    analyticsLocations: R
  } = (0, f.ZP)(S, p.Z.GROUP_DM_EDIT_MODAL), D = {
    channel_id: t,
    channel_type: null == _ ? true : _.type,
    location: S,
    location_stack: R,
    old_name_set: "" !== I,
    old_icon_set: (null == _ ? true : _.icon) != null
  };
  return (i.useEffect(() => {
    a(Z !== I || w)
  }, [Z, I, w, a]), (0, d.ZP)(() => (b.default.track(v.rMx.GDM_EDIT_INTERACTED, C(x({}, D), {
    action: "opened"
  })), () => {
    b.default.track(v.rMx.GDM_EDIT_INTERACTED, C(x({}, D), {
      action: "dismissed"
    }))
  })), null == _) ? null : (0, r.jsx)(f.Gt, {
    value: R,
    children: (0, r.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let r = Z !== I,
          i = true !== T;
        if (b.default.track(v.rMx.GDM_EDIT_INTERACTED, C(x({}, D), {
            action: "saved",
            new_name_set: "" !== Z,
            new_icon_set: (i ? T : null == _ ? true : _.icon) != null,
            name_changed: r,
            icon_changed: i
          })), r || i) {
          let e = {};
          r && (e.name = Z), i && (e.icon = T), u.Z.updateChannel(t, e, S).catch(y.g6)
        }
        n()
      },
      children: (0, r.jsx)(o.Modal, {
        title: O.intl.string(O.t["5Q9+/L"]),
        actions: [{
          text: O.intl.string(O.t["ETE/oC"]),
          variant: "secondary",
          onClick: h
        }, {
          text: O.intl.string(O.t["R3BPH+"]),
          variant: "primary",
          type: "submit",
          disabled: Z === I && !w
        }],
        onClose: () => Promise.resolve(h()),
        transitionState: l,
        children: (0, r.jsxs)("div", {
          className: j.modalContent,
          children: [(0, r.jsx)(E, {
            channel: _,
            previewIcon: T,
            onIconChange: e => A(e.imageUri),
            onIconRemove: () => A(null),
            analyticsLocations: R
          }), (0, r.jsx)(c.oil, {
            "aria-label": O.intl.string(O.t.GEGW3P),
            placeholder: null != P ? P : "",
            value: Z,
            onChange: N,
            autoFocus: true
          })]
        })
      })
    })
  })
}