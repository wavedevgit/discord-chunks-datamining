/** Chunk was on 78528 **/
/** chunk id: 66442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => x,
  default: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk396787 = require("./396787.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk353528 = require("./353528.js");

function j(e) {
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

function v(e, t) {
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

function x(e) {
  let {
    channel: t,
    previewIcon: n,
    onIconChange: l,
    onIconRemove: i,
    analyticsLocations: a,
    petite: o = false,
    className: u,
    allowRemovingIcon: d = true
  } = e, g = true !== n ? n : (null == t ? true : t.icon) != null ? (0, f.Y)(t, 120) : null, {
    analyticsLocations: m
  } = (0, h.Ay)(a, p.A.GROUP_DM_ICON_EDITOR), b = o ? 32 : 64;
  return (0, r.jsxs)("div", {
    className: s()(O.r2, u),
    children: [(0, r.jsxs)(c.DUT, {
      className: s()(O.zc, {
        [O.ud]: o
      }),
      "aria-label": _.intl.string(_.t["0qPSMV"]),
      onClick: () => (0, A.F5)(l, m),
      children: [null != g ? (0, r.jsx)("img", {
        src: g,
        alt: "",
        className: O.Dp
      }) : (0, r.jsx)("div", {
        className: O.Pz,
        children: (0, r.jsx)(c.nFg, {
          size: "custom",
          width: b,
          height: b,
          color: "currentColor"
        })
      }), (0, r.jsx)("div", {
        className: O.qc,
        children: (0, r.jsx)(c.R2l, {
          color: "currentColor",
          size: o ? "xs" : "refresh_sm"
        })
      })]
    }), null != g && d ? (0, r.jsx)(c.QWc, {
      variant: "critical",
      onClick: i,
      "aria-label": _.intl.string(_.t["uY+Nk/"]),
      text: _.intl.string(_.t["uY+Nk/"]),
      textVariant: "text-sm/medium",
      size: "sm",
      role: "button",
      type: "button"
    }) : null]
  })
}
let E = function(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: i,
    setHasPendingChanges: s,
    closeOrShowDiscardChangesAlert: f,
    location: E
  } = e, C = (0, o.bG)([m.A], () => m.A.getChannel(t)), S = null == C ? true : C.name, I = (0, g.e5)(C), [N, T] = l.useState(null != S ? S : ""), [P, w] = l.useState(true), R = true !== P, {
    analyticsLocations: D
  } = (0, h.Ay)(E, p.A.GROUP_DM_EDIT_MODAL), M = {
    channel_id: t,
    channel_type: null == C ? true : C.type,
    location: E,
    location_stack: D,
    old_name_set: "" !== S,
    old_icon_set: (null == C ? true : C.icon) != null
  };
  return (l.useEffect(() => {
    s(N !== S || R)
  }, [N, S, R, s]), (0, d.Ay)(() => (b.default.track(y.HAw.GDM_EDIT_INTERACTED, v(j({}, M), {
    action: "opened"
  })), () => {
    b.default.track(y.HAw.GDM_EDIT_INTERACTED, v(j({}, M), {
      action: "dismissed"
    }))
  })), null == C) ? null : (0, r.jsx)(h.f5, {
    value: D,
    children: (0, r.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let r = N !== S,
          l = true !== P;
        if (b.default.track(y.HAw.GDM_EDIT_INTERACTED, v(j({}, M), {
            action: "saved",
            new_name_set: "" !== N,
            new_icon_set: (l ? P : null == C ? true : C.icon) != null,
            name_changed: r,
            icon_changed: l
          })), r || l) {
          let e = {};
          r && (e.name = N), l && (e.icon = P), u.A.updateChannel(t, e, E).catch(A.XA)
        }
        n()
      },
      children: (0, r.jsx)(a.Modal, {
        title: _.intl.string(_.t["5Q9+/L"]),
        actions: [{
          text: _.intl.string(_.t["ETE/oC"]),
          variant: "secondary",
          onClick: f
        }, {
          text: _.intl.string(_.t["R3BPH+"]),
          variant: "primary",
          type: "submit",
          disabled: N === S && !R
        }],
        onClose: () => Promise.resolve(f()),
        transitionState: i,
        children: (0, r.jsxs)("div", {
          className: O.jE,
          children: [(0, r.jsx)(x, {
            channel: C,
            previewIcon: P,
            onIconChange: e => w(e.imageUri),
            onIconRemove: () => w(null),
            analyticsLocations: D
          }), (0, r.jsx)(c.ksK, {
            "aria-label": _.intl.string(_.t.GEGW3P),
            placeholder: null != I ? I : "",
            value: N,
            onChange: T,
            autoFocus: true
          })]
        })
      })
    })
  })
}