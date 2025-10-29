/** Chunk was on 73726 **/
/** chunk id: 912114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => E,
  default: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function O(e, t) {
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
  } = e, m = true !== n ? n : (null == t ? true : t.icon) != null ? (0, h.x)(t, 120) : null, {
    analyticsLocations: g
  } = (0, f.ZP)(o, p.Z.GROUP_DM_ICON_EDITOR), b = s ? 32 : 64;
  return (0, r.jsxs)("div", {
    className: a()(v.iconSection, u),
    children: [(0, r.jsxs)(c.P3F, {
      className: a()(v.iconContainer, {
        [v.petite]: s
      }),
      "aria-label": C.intl.string(C.t["0qPSMV"]),
      onClick: () => (0, _.ND)(i, g),
      children: [null != m ? (0, r.jsx)("img", {
        src: m,
        alt: "",
        className: v.iconImage
      }) : (0, r.jsx)("div", {
        className: v.iconPlaceholder,
        children: (0, r.jsx)(c.BFJ, {
          size: "custom",
          width: b,
          height: b,
          color: "currentColor"
        })
      }), (0, r.jsx)("div", {
        className: v.pencilIconWrapper,
        children: (0, r.jsx)(c.vdY, {
          color: "currentColor",
          size: s ? "xs" : "refresh_sm"
        })
      })]
    }), null != m && d ? (0, r.jsx)(c.Avr, {
      variant: "critical",
      onClick: l,
      "aria-label": C.intl.string(C.t["uY+Nk/"]),
      text: C.intl.string(C.t["uY+Nk/"]),
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
    closeOrShowDiscardChangesAlert: h,
    location: j
  } = e, S = (0, s.e7)([g.Z], () => g.Z.getChannel(t)), P = null == S ? true : S.name, I = (0, m.cO)(S), [Z, T] = i.useState(null != P ? P : ""), [N, A] = i.useState(true), w = true !== N, {
    analyticsLocations: M
  } = (0, f.ZP)(j, p.Z.GROUP_DM_EDIT_MODAL), R = {
    channel_id: t,
    channel_type: null == S ? true : S.type,
    location: j,
    location_stack: M,
    old_name_set: "" !== P,
    old_icon_set: (null == S ? true : S.icon) != null
  };
  return (i.useEffect(() => {
    a(Z !== P || w)
  }, [Z, P, w, a]), (0, d.ZP)(() => (b.default.track(y.rMx.GDM_EDIT_INTERACTED, O(x({}, R), {
    action: "opened"
  })), () => {
    b.default.track(y.rMx.GDM_EDIT_INTERACTED, O(x({}, R), {
      action: "dismissed"
    }))
  })), null == S) ? null : (0, r.jsx)(f.Gt, {
    value: M,
    children: (0, r.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let r = Z !== P,
          i = true !== N;
        if (b.default.track(y.rMx.GDM_EDIT_INTERACTED, O(x({}, R), {
            action: "saved",
            new_name_set: "" !== Z,
            new_icon_set: (i ? N : null == S ? true : S.icon) != null,
            name_changed: r,
            icon_changed: i
          })), r || i) {
          let e = {};
          r && (e.name = Z), i && (e.icon = N), u.Z.updateChannel(t, e, j).catch(_.g6)
        }
        n()
      },
      children: (0, r.jsx)(o.Modal, {
        title: C.intl.string(C.t["5Q9+/L"]),
        actions: [{
          text: C.intl.string(C.t["ETE/oC"]),
          variant: "secondary",
          onClick: h
        }, {
          text: C.intl.string(C.t["R3BPH+"]),
          variant: "primary",
          type: "submit",
          disabled: Z === P && !w
        }],
        onClose: () => Promise.resolve(h()),
        transitionState: l,
        children: (0, r.jsxs)("div", {
          className: v.modalContent,
          children: [(0, r.jsx)(E, {
            channel: S,
            previewIcon: N,
            onIconChange: e => A(e.imageUri),
            onIconRemove: () => A(null),
            analyticsLocations: M
          }), (0, r.jsx)(c.oil, {
            "aria-label": C.intl.string(C.t.GEGW3P),
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