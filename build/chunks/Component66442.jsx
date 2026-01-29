/** Chunk was on 42455 **/
/** chunk id: 66442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => D,
  default: () => P
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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function w(e, t) {
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
    analyticsLocations: o,
    petite: s = false,
    className: u,
    allowRemovingIcon: d = true
  } = e, m = true !== n ? n : (null == t ? true : t.icon) != null ? (0, f.Y)(t, 120) : null, {
    analyticsLocations: y
  } = (0, h.Ay)(o, p.A.GROUP_DM_ICON_EDITOR), b = s ? 32 : 64;
  return (0, l.jsxs)("div", {
    className: a()(j.r2, u),
    children: [(0, l.jsxs)(c.DUT, {
      className: a()(j.zc, {
        [j.ud]: s
      }),
      "aria-label": g.intl.string(g.t["0qPSMV"]),
      onClick: () => (0, v.F5)(r, y),
      children: [null != m ? (0, l.jsx)("img", {
        src: m,
        alt: "",
        className: j.Dp
      }) : (0, l.jsx)("div", {
        className: j.Pz,
        children: (0, l.jsx)(c.nFg, {
          size: "custom",
          width: b,
          height: b,
          color: "currentColor"
        })
      }), (0, l.jsx)("div", {
        className: j.qc,
        children: (0, l.jsx)(c.R2l, {
          color: "currentColor",
          size: s ? "xs" : "refresh_sm"
        })
      })]
    }), null != m && d ? (0, l.jsx)(c.QWc, {
      variant: "critical",
      onClick: i,
      "aria-label": g.intl.string(g.t["uY+Nk/"]),
      text: g.intl.string(g.t["uY+Nk/"]),
      textVariant: "text-sm/medium",
      size: "sm",
      role: "button",
      type: "button"
    }) : null]
  })
}
let P = function(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: i,
    setHasPendingChanges: a,
    closeOrShowDiscardChangesAlert: f,
    location: P
  } = e, x = (0, s.bG)([y.A], () => y.A.getChannel(t)), A = null == x ? true : x.name, C = (0, m.e5)(x), [E, I] = r.useState(null != A ? A : ""), [k, T] = r.useState(true), R = true !== k, {
    analyticsLocations: N
  } = (0, h.Ay)(P, p.A.GROUP_DM_EDIT_MODAL), S = {
    channel_id: t,
    channel_type: null == x ? true : x.type,
    location: P,
    location_stack: N,
    old_name_set: "" !== A,
    old_icon_set: (null == x ? true : x.icon) != null
  };
  return (r.useEffect(() => {
    a(E !== A || R)
  }, [E, A, R, a]), (0, d.Ay)(() => (b.default.track(_.HAw.GDM_EDIT_INTERACTED, w(O({}, S), {
    action: "opened"
  })), () => {
    b.default.track(_.HAw.GDM_EDIT_INTERACTED, w(O({}, S), {
      action: "dismissed"
    }))
  })), null == x) ? null : (0, l.jsx)(h.f5, {
    value: N,
    children: (0, l.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        let l = E !== A,
          r = true !== k;
        if (b.default.track(_.HAw.GDM_EDIT_INTERACTED, w(O({}, S), {
            action: "saved",
            new_name_set: "" !== E,
            new_icon_set: (r ? k : null == x ? true : x.icon) != null,
            name_changed: l,
            icon_changed: r
          })), l || r) {
          let e = {};
          l && (e.name = E), r && (e.icon = k), u.A.updateChannel(t, e, P).catch(v.XA)
        }
        n()
      },
      children: (0, l.jsx)(o.Modal, {
        title: g.intl.string(g.t["5Q9+/L"]),
        actions: [{
          text: g.intl.string(g.t["ETE/oC"]),
          variant: "secondary",
          onClick: f
        }, {
          text: g.intl.string(g.t["R3BPH+"]),
          variant: "primary",
          type: "submit",
          disabled: E === A && !R
        }],
        onClose: () => Promise.resolve(f()),
        transitionState: i,
        children: (0, l.jsxs)("div", {
          className: j.jE,
          children: [(0, l.jsx)(D, {
            channel: x,
            previewIcon: k,
            onIconChange: e => T(e.imageUri),
            onIconRemove: () => T(null),
            analyticsLocations: N
          }), (0, l.jsx)(c.ksK, {
            "aria-label": g.intl.string(g.t.GEGW3P),
            placeholder: null != C ? C : "",
            value: E,
            onChange: I,
            autoFocus: true
          })]
        })
      })
    })
  })
}