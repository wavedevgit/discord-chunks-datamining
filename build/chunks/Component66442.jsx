/** Chunk was on 61344 **/
/** chunk id: 66442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => C,
  default: () => S
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

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function O(e, t) {
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

function C(e) {
  let {
    channel: t,
    previewIcon: n,
    onIconChange: r,
    onIconRemove: i,
    analyticsLocations: s,
    petite: o = false,
    className: u,
    allowRemovingIcon: d = true
  } = e, m = true !== n ? n : (null == t ? true : t.icon) != null ? (0, f.Y)(t, 120) : null, {
    analyticsLocations: g
  } = (0, p.Ay)(s, h.A.GROUP_DM_ICON_EDITOR), A = o ? 32 : 64;
  return (0, l.jsxs)("div", {
    className: a()(v.r2, u),
    children: [(0, l.jsxs)(c.DUT, {
      className: a()(v.zc, {
        [v.ud]: o
      }),
      "aria-label": y.intl.string(y.t["0qPSMV"]),
      onClick: () => (0, b.F5)(r, g),
      children: [null != m ? (0, l.jsx)("img", {
        src: m,
        alt: "",
        className: v.Dp
      }) : (0, l.jsx)("div", {
        className: v.Pz,
        children: (0, l.jsx)(c.nFg, {
          size: "custom",
          width: A,
          height: A,
          color: "currentColor"
        })
      }), (0, l.jsx)("div", {
        className: v.qc,
        children: (0, l.jsx)(c.R2l, {
          color: "currentColor",
          size: o ? "xs" : "refresh_sm"
        })
      })]
    }), null != m && d ? (0, l.jsx)(c.QWc, {
      variant: "critical",
      onClick: i,
      "aria-label": y.intl.string(y.t["uY+Nk/"]),
      text: y.intl.string(y.t["uY+Nk/"]),
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
    transitionState: i,
    setHasPendingChanges: a,
    closeOrShowDiscardChangesAlert: f,
    location: S
  } = e, x = (0, o.bG)([g.A], () => g.A.getChannel(t)), j = null == x ? true : x.name, I = (0, m.e5)(x), [T, N] = r.useState(null != j ? j : ""), [P, w] = r.useState(true), R = true !== P, {
    analyticsLocations: D
  } = (0, p.Ay)(S, h.A.GROUP_DM_EDIT_MODAL), M = {
    channel_id: t,
    channel_type: null == x ? true : x.type,
    location: S,
    location_stack: D,
    old_name_set: "" !== j,
    old_icon_set: (null == x ? true : x.icon) != null
  };
  return (r.useEffect(() => {
    a(T !== j || R)
  }, [T, j, R, a]), (0, d.Ay)(() => (A.default.track(_.HAw.GDM_EDIT_INTERACTED, O(E({}, M), {
    action: "opened"
  })), () => {
    A.default.track(_.HAw.GDM_EDIT_INTERACTED, O(E({}, M), {
      action: "dismissed"
    }))
  })), null == x) ? null : (0, l.jsx)(p.f5, {
    value: D,
    children: (0, l.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let l = T !== j,
          r = true !== P;
        if (A.default.track(_.HAw.GDM_EDIT_INTERACTED, O(E({}, M), {
            action: "saved",
            new_name_set: "" !== T,
            new_icon_set: (r ? P : null == x ? true : x.icon) != null,
            name_changed: l,
            icon_changed: r
          })), l || r) {
          let e = {};
          l && (e.name = T), r && (e.icon = P), u.A.updateChannel(t, e, S).catch(b.XA)
        }
        n()
      },
      children: (0, l.jsx)(s.Modal, {
        title: y.intl.string(y.t["5Q9+/L"]),
        actions: [{
          text: y.intl.string(y.t["ETE/oC"]),
          variant: "secondary",
          onClick: f
        }, {
          text: y.intl.string(y.t["R3BPH+"]),
          variant: "primary",
          type: "submit",
          disabled: T === j && !R
        }],
        onClose: () => Promise.resolve(f()),
        transitionState: i,
        children: (0, l.jsxs)("div", {
          className: v.jE,
          children: [(0, l.jsx)(C, {
            channel: x,
            previewIcon: P,
            onIconChange: e => w(e.imageUri),
            onIconRemove: () => w(null),
            analyticsLocations: D
          }), (0, l.jsx)(c.ksK, {
            "aria-label": y.intl.string(y.t.GEGW3P),
            placeholder: null != I ? I : "",
            value: T,
            onChange: N,
            autoFocus: true
          })]
        })
      })
    })
  })
}