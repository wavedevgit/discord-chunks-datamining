/** Chunk was on 73755 **/
/** chunk id: 912114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => E,
  default: () => j
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
  Chunk358993 = require("./358993.js");

function O(e) {
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

function x(e, t) {
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

function E(e) {
  let {
    channel: t,
    previewIcon: n,
    onIconChange: r,
    onIconRemove: l,
    analyticsLocations: o,
    petite: s = false,
    className: u,
    allowRemovingIcon: d = true
  } = e, m = true !== n ? n : (null == t ? true : t.icon) != null ? (0, f.x)(t, 120) : null, {
    analyticsLocations: g
  } = (0, h.ZP)(o, p.Z.GROUP_DM_ICON_EDITOR), b = s ? 32 : 64;
  return (0, i.jsxs)("div", {
    className: a()(v.iconSection, u),
    children: [(0, i.jsxs)(c.P3F, {
      className: a()(v.iconContainer, {
        [v.petite]: s
      }),
      "aria-label": _.intl.string(_.t["0qPSMV"]),
      onClick: () => (0, C.ND)(r, g),
      children: [null != m ? (0, i.jsx)("img", {
        src: m,
        alt: "",
        className: v.iconImage
      }) : (0, i.jsx)("div", {
        className: v.iconPlaceholder,
        children: (0, i.jsx)(c.BFJ, {
          size: "custom",
          width: b,
          height: b,
          color: "currentColor"
        })
      }), (0, i.jsx)("div", {
        className: v.pencilIconWrapper,
        children: (0, i.jsx)(c.vdY, {
          color: "currentColor",
          size: s ? "xs" : "refresh_sm"
        })
      })]
    }), null != m && d ? (0, i.jsx)(c.Avr, {
      variant: "critical",
      onClick: l,
      "aria-label": _.intl.string(_.t["uY+Nk/"]),
      text: _.intl.string(_.t["uY+Nk/"]),
      textVariant: "text-sm/medium",
      size: "sm",
      role: "button",
      type: "button"
    }) : null]
  })
}
let j = function(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: l,
    setHasPendingChanges: a,
    closeOrShowDiscardChangesAlert: f,
    location: j
  } = e, S = (0, s.e7)([g.Z], () => g.Z.getChannel(t)), P = null == S ? true : S.name, I = (0, m.cO)(S), [Z, T] = r.useState(null != P ? P : ""), [N, A] = r.useState(true), w = true !== N, {
    analyticsLocations: M
  } = (0, h.ZP)(j, p.Z.GROUP_DM_EDIT_MODAL), R = {
    channel_id: t,
    channel_type: null == S ? true : S.type,
    location: j,
    location_stack: M,
    old_name_set: "" !== P,
    old_icon_set: (null == S ? true : S.icon) != null
  };
  return (r.useEffect(() => {
    a(Z !== P || w)
  }, [Z, P, w, a]), (0, d.ZP)(() => (b.default.track(y.rMx.GDM_EDIT_INTERACTED, x(O({}, R), {
    action: "opened"
  })), () => {
    b.default.track(y.rMx.GDM_EDIT_INTERACTED, x(O({}, R), {
      action: "dismissed"
    }))
  })), null == S) ? null : (0, i.jsx)(h.Gt, {
    value: M,
    children: (0, i.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let i = Z !== P,
          r = true !== N;
        if (b.default.track(y.rMx.GDM_EDIT_INTERACTED, x(O({}, R), {
            action: "saved",
            new_name_set: "" !== Z,
            new_icon_set: (r ? N : null == S ? true : S.icon) != null,
            name_changed: i,
            icon_changed: r
          })), i || r) {
          let e = {};
          i && (e.name = Z), r && (e.icon = N), u.Z.updateChannel(t, e, j).catch(C.g6)
        }
        n()
      },
      children: (0, i.jsx)(o.Modal, {
        title: _.intl.string(_.t["5Q9+/L"]),
        actions: [{
          text: _.intl.string(_.t["ETE/oC"]),
          variant: "secondary",
          onClick: f
        }, {
          text: _.intl.string(_.t["R3BPH+"]),
          variant: "primary",
          type: "submit",
          disabled: Z === P && !w
        }],
        onClose: () => Promise.resolve(f()),
        transitionState: l,
        children: (0, i.jsxs)("div", {
          className: v.modalContent,
          children: [(0, i.jsx)(E, {
            channel: S,
            previewIcon: N,
            onIconChange: e => A(e.imageUri),
            onIconRemove: () => A(null),
            analyticsLocations: M
          }), (0, i.jsx)(c.oil, {
            "aria-label": _.intl.string(_.t.GEGW3P),
            placeholder: null != I ? I : "",
            value: Z,
            onChange: T,
            autoFocus: true
          })]
        })
      })
    })
  })
}