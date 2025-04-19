/** Chunk was on 41259 **/
n.d(t, {
  B: () => N,
  default: () => P
}), n(388685);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  i = n.n(o),
  a = n(442837),
  c = n(481060),
  s = n(493683),
  u = n(493773),
  d = n(100527),
  p = n(906732),
  h = n(43267),
  m = n(933557),
  f = n(313201),
  _ = n(592125),
  b = n(626135),
  y = n(140106),
  v = n(981631),
  g = n(388032),
  j = n(285580);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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

function N(e) {
  let {
    channel: t,
    previewIcon: n,
    onIconChange: l,
    onIconRemove: o,
    analyticsLocations: a,
    petite: s = !1,
    className: u,
    allowRemovingIcon: m = !0
  } = e, f = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, h.x)(t, 120) : null, {
    analyticsLocations: _
  } = (0, p.ZP)(a, d.Z.GROUP_DM_ICON_EDITOR), b = s ? 32 : 64;
  return (0, r.jsxs)("div", {
    className: i()(j.iconSection, u),
    children: [(0, r.jsxs)(c.P3F, {
      className: i()(j.iconContainer, {
        [j.petite]: s
      }),
      "aria-label": g.NW.string(g.t["0qPSMT"]),
      onClick: () => (0, y.ND)(l, _),
      children: [null != f ? (0, r.jsx)("img", {
        src: f,
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
    }), null != f && m ? (0, r.jsx)(c.P3F, {
      onClick: o,
      "aria-label": g.NW.string(g.t["uY+Nk5"]),
      style: {
        cursor: "pointer"
      },
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-danger",
        children: g.NW.string(g.t["uY+Nk5"])
      })
    }) : null]
  })
}
let P = function(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: o,
    setHasPendingChanges: i,
    closeOrShowDiscardChangesAlert: h,
    location: P
  } = e, D = (0, f.Dt)(), w = (0, a.e7)([_.Z], () => _.Z.getChannel(t)), C = null == w ? void 0 : w.name, I = (0, m.cO)(w), [k, W] = l.useState(null != C ? C : ""), [E, T] = l.useState(void 0), R = void 0 !== E, {
    analyticsLocations: S
  } = (0, p.ZP)(P, d.Z.GROUP_DM_EDIT_MODAL), Z = {
    channel_id: t,
    channel_type: null == w ? void 0 : w.type,
    location: P,
    location_stack: S,
    old_name_set: "" !== C,
    old_icon_set: (null == w ? void 0 : w.icon) != null
  };
  return (l.useEffect(() => {
    i(k !== C || R)
  }, [k, C, R, i]), (0, u.ZP)(() => (b.default.track(v.rMx.GDM_EDIT_INTERACTED, O(x({}, Z), {
    action: "opened"
  })), () => {
    b.default.track(v.rMx.GDM_EDIT_INTERACTED, O(x({}, Z), {
      action: "dismissed"
    }))
  })), null == w) ? null : (0, r.jsx)(p.Gt, {
    value: S,
    children: (0, r.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let r = k !== C,
          l = void 0 !== E;
        b.default.track(v.rMx.GDM_EDIT_INTERACTED, O(x({}, Z), {
          action: "saved",
          new_name_set: "" !== k,
          new_icon_set: (l ? E : null == w ? void 0 : w.icon) != null,
          name_changed: r,
          icon_changed: l
        })), r && s.Z.setName(t, k), l && s.Z.setIcon(t, E, P).catch(y.es), n()
      },
      children: (0, r.jsxs)(c.Y0X, {
        transitionState: o,
        "aria-labelledby": D,
        children: [(0, r.jsxs)(c.xBx, {
          separator: !0,
          className: j.header,
          children: [(0, r.jsx)(c.X6q, {
            id: D,
            variant: "heading-lg/semibold",
            color: "header-primary",
            children: g.NW.string(g.t["5Q9+/P"])
          }), (0, r.jsx)(c.olH, {
            onClick: h,
            className: j.closeButtonWrapper
          })]
        }), (0, r.jsxs)(c.hzk, {
          className: j.modalContent,
          children: [(0, r.jsx)(N, {
            channel: w,
            previewIcon: E,
            onIconChange: e => T(e.imageUri),
            onIconRemove: () => T(null),
            analyticsLocations: S
          }), (0, r.jsx)(c.oil, {
            "aria-label": g.NW.string(g.t.GEGW3N),
            placeholder: null != I ? I : "",
            value: k,
            onChange: W,
            autoFocus: !0
          })]
        }), (0, r.jsxs)(c.mzw, {
          children: [(0, r.jsx)(c.zxk, {
            type: "submit",
            disabled: k === C && !R,
            children: g.NW.string(g.t.R3BPHx)
          }), (0, r.jsx)(c.zxk, {
            onClick: h,
            look: c.zxk.Looks.LINK,
            color: c.zxk.Colors.PRIMARY,
            innerClassName: j.cancelButton,
            children: g.NW.string(g.t["ETE/oK"])
          })]
        })]
      })
    })
  })
}