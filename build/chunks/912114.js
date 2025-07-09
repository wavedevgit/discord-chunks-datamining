/** Chunk was on 41259 **/
n.d(t, {
  B: () => D,
  default: () => w
}), n(388685);
var l = n(255367),
  r = n(73800),
  i = n(120356),
  o = n.n(i),
  a = n(442837),
  c = n(755721),
  s = n(481060),
  u = n(493683),
  d = n(493773),
  p = n(100527),
  h = n(906732),
  m = n(43267),
  f = n(933557),
  _ = n(313201),
  b = n(592125),
  y = n(626135),
  v = n(140106),
  g = n(981631),
  j = n(388032),
  x = n(285580);

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e) {
  let {
    channel: t,
    previewIcon: n,
    onIconChange: r,
    onIconRemove: i,
    analyticsLocations: a,
    petite: c = !1,
    className: u,
    allowRemovingIcon: d = !0
  } = e, f = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, m.x)(t, 120) : null, {
    analyticsLocations: _
  } = (0, h.ZP)(a, p.Z.GROUP_DM_ICON_EDITOR), b = c ? 32 : 64;
  return (0, l.jsxs)("div", {
    className: o()(x.iconSection, u),
    children: [(0, l.jsxs)(s.P3F, {
      className: o()(x.iconContainer, {
        [x.petite]: c
      }),
      "aria-label": j.intl.string(j.t["0qPSMT"]),
      onClick: () => (0, v.ND)(r, _),
      children: [null != f ? (0, l.jsx)("img", {
        src: f,
        alt: "",
        className: x.iconImage
      }) : (0, l.jsx)("div", {
        className: x.iconPlaceholder,
        children: (0, l.jsx)(s.BFJ, {
          size: "custom",
          width: b,
          height: b,
          color: "currentColor"
        })
      }), (0, l.jsx)("div", {
        className: x.pencilIconWrapper,
        children: (0, l.jsx)(s.vdY, {
          color: "currentColor",
          size: c ? "xs" : "refresh_sm"
        })
      })]
    }), null != f && d ? (0, l.jsx)(s.P3F, {
      onClick: i,
      "aria-label": j.intl.string(j.t["uY+Nk5"]),
      style: {
        cursor: "pointer"
      },
      children: (0, l.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-danger",
        children: j.intl.string(j.t["uY+Nk5"])
      })
    }) : null]
  })
}
let w = function(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: i,
    setHasPendingChanges: o,
    closeOrShowDiscardChangesAlert: m,
    location: w
  } = e, C = (0, _.Dt)(), I = (0, a.e7)([b.Z], () => b.Z.getChannel(t)), N = null == I ? void 0 : I.name, k = (0, f.cO)(I), [E, T] = r.useState(null != N ? N : ""), [R, S] = r.useState(void 0), Z = void 0 !== R, {
    analyticsLocations: M
  } = (0, h.ZP)(w, p.Z.GROUP_DM_EDIT_MODAL), A = {
    channel_id: t,
    channel_type: null == I ? void 0 : I.type,
    location: w,
    location_stack: M,
    old_name_set: "" !== N,
    old_icon_set: (null == I ? void 0 : I.icon) != null
  };
  return (r.useEffect(() => {
    o(E !== N || Z)
  }, [E, N, Z, o]), (0, d.ZP)(() => (y.default.track(g.rMx.GDM_EDIT_INTERACTED, P(O({}, A), {
    action: "opened"
  })), () => {
    y.default.track(g.rMx.GDM_EDIT_INTERACTED, P(O({}, A), {
      action: "dismissed"
    }))
  })), null == I) ? null : (0, l.jsx)(h.Gt, {
    value: M,
    children: (0, l.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let l = E !== N,
          r = void 0 !== R;
        if (y.default.track(g.rMx.GDM_EDIT_INTERACTED, P(O({}, A), {
            action: "saved",
            new_name_set: "" !== E,
            new_icon_set: (r ? R : null == I ? void 0 : I.icon) != null,
            name_changed: l,
            icon_changed: r
          })), l || r) {
          let e = {};
          l && (e.name = E), r && (e.icon = R), u.Z.updateChannel(t, e, w).catch(v.g6)
        }
        n()
      },
      children: (0, l.jsxs)(s.Y0X, {
        transitionState: i,
        "aria-labelledby": C,
        className: x.modal,
        parentComponent: "GdmEditModal",
        children: [(0, l.jsxs)(s.xBx, {
          separator: !0,
          className: x.header,
          children: [(0, l.jsx)(s.X6q, {
            id: C,
            variant: "heading-lg/semibold",
            color: "header-primary",
            children: j.intl.string(j.t["5Q9+/P"])
          }), (0, l.jsx)(s.olH, {
            onClick: m,
            className: x.closeButton
          })]
        }), (0, l.jsxs)(s.hzk, {
          className: x.modalContent,
          children: [(0, l.jsx)(D, {
            channel: I,
            previewIcon: R,
            onIconChange: e => S(e.imageUri),
            onIconRemove: () => S(null),
            analyticsLocations: M
          }), (0, l.jsx)(s.oil, {
            "aria-label": j.intl.string(j.t.GEGW3N),
            placeholder: null != k ? k : "",
            value: E,
            onChange: T,
            autoFocus: !0
          })]
        }), (0, l.jsxs)(s.mzw, {
          className: x.footer,
          children: [(0, l.jsx)(s.zxk, {
            variant: "primary",
            text: j.intl.string(j.t.R3BPHx),
            type: "submit",
            disabled: E === N && !Z
          }), (0, l.jsx)(c.zx, {
            onClick: m,
            look: c.zx.Looks.LINK,
            color: c.zx.Colors.PRIMARY,
            innerClassName: x.cancelButton,
            children: j.intl.string(j.t["ETE/oK"])
          })]
        })]
      })
    })
  })
}