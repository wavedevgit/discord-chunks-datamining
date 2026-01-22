/** Chunk was on 97492 **/
/** chunk id: 66442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => E,
  default: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function v(e) {
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

function x(e, t) {
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
    onIconChange: l,
    onIconRemove: i,
    analyticsLocations: s,
    petite: o = false,
    className: u,
    allowRemovingIcon: d = true
  } = e, b = true !== n ? n : (null == t ? true : t.icon) != null ? (0, h.Y)(t, 120) : null, {
    analyticsLocations: g
  } = (0, p.Ay)(s, f.A.GROUP_DM_ICON_EDITOR), m = o ? 32 : 64;
  return (0, r.jsxs)("div", {
    className: a()(j.r2, u),
    children: [(0, r.jsxs)(c.DUT, {
      className: a()(j.zc, {
        [j.ud]: o
      }),
      "aria-label": O.intl.string(O.t["0qPSMV"]),
      onClick: () => (0, A.F5)(l, g),
      children: [null != b ? (0, r.jsx)("img", {
        src: b,
        alt: "",
        className: j.Dp
      }) : (0, r.jsx)("div", {
        className: j.Pz,
        children: (0, r.jsx)(c.nFg, {
          size: "custom",
          width: m,
          height: m,
          color: "currentColor"
        })
      }), (0, r.jsx)("div", {
        className: j.qc,
        children: (0, r.jsx)(c.R2l, {
          color: "currentColor",
          size: o ? "xs" : "refresh_sm"
        })
      })]
    }), null != b && d ? (0, r.jsx)(c.QWc, {
      variant: "critical",
      onClick: i,
      "aria-label": O.intl.string(O.t["uY+Nk/"]),
      text: O.intl.string(O.t["uY+Nk/"]),
      textVariant: "text-sm/medium",
      size: "sm",
      role: "button",
      type: "button"
    }) : null]
  })
}
let _ = function(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: i,
    setHasPendingChanges: a,
    closeOrShowDiscardChangesAlert: h,
    location: _
  } = e, C = (0, o.bG)([g.A], () => g.A.getChannel(t)), S = null == C ? true : C.name, I = (0, b.e5)(C), [N, T] = l.useState(null != S ? S : ""), [P, w] = l.useState(true), R = true !== P, {
    analyticsLocations: D
  } = (0, p.Ay)(_, f.A.GROUP_DM_EDIT_MODAL), M = {
    channel_id: t,
    channel_type: null == C ? true : C.type,
    location: _,
    location_stack: D,
    old_name_set: "" !== S,
    old_icon_set: (null == C ? true : C.icon) != null
  };
  return (l.useEffect(() => {
    a(N !== S || R)
  }, [N, S, R, a]), (0, d.Ay)(() => (m.default.track(y.HAw.GDM_EDIT_INTERACTED, x(v({}, M), {
    action: "opened"
  })), () => {
    m.default.track(y.HAw.GDM_EDIT_INTERACTED, x(v({}, M), {
      action: "dismissed"
    }))
  })), null == C) ? null : (0, r.jsx)(p.f5, {
    value: D,
    children: (0, r.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let r = N !== S,
          l = true !== P;
        if (m.default.track(y.HAw.GDM_EDIT_INTERACTED, x(v({}, M), {
            action: "saved",
            new_name_set: "" !== N,
            new_icon_set: (l ? P : null == C ? true : C.icon) != null,
            name_changed: r,
            icon_changed: l
          })), r || l) {
          let e = {};
          r && (e.name = N), l && (e.icon = P), u.A.updateChannel(t, e, _).catch(A.XA)
        }
        n()
      },
      children: (0, r.jsx)(s.Modal, {
        title: O.intl.string(O.t["5Q9+/L"]),
        actions: [{
          text: O.intl.string(O.t["ETE/oC"]),
          variant: "secondary",
          onClick: h
        }, {
          text: O.intl.string(O.t["R3BPH+"]),
          variant: "primary",
          type: "submit",
          disabled: N === S && !R
        }],
        onClose: () => Promise.resolve(h()),
        transitionState: i,
        children: (0, r.jsxs)("div", {
          className: j.jE,
          children: [(0, r.jsx)(E, {
            channel: C,
            previewIcon: P,
            onIconChange: e => w(e.imageUri),
            onIconRemove: () => w(null),
            analyticsLocations: D
          }), (0, r.jsx)(c.ksK, {
            "aria-label": O.intl.string(O.t.GEGW3P),
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