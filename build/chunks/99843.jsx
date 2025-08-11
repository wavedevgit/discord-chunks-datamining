/** Chunk was on web.js **/
/** chunk id: 99843, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk933557 = require("./933557.js"),
  Chunk266076 = require("./266076.js"),
  Chunk769409 = require("./769409.js"),
  Chunk210975 = require("./210975.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk791293 = require("./791293.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = e => {
  let {
    channel: t
  } = e;
  return (0, d.m$)({
    channelId: t.id
  }) ? <o.ua7 text={p.intl.string(p.t.QyZ4TU)}>{e => (0, r.jsx)(o.tQf, b(g({}, e), {
      size: "xs",
      "aria-label": p.intl.string(p.t.VHXh8f),
      color: o.TVs.colors.INTERACTIVE_NORMAL
    }))}</o.ua7> : null
};

function I(e) {
  let {
    channel: t
  } = e, i = t.id, d = (0, l.ZP)(t);
  return <r.Fragment>{<o.ua7 text={p.intl.string(p.t["5Q9+/P"])} position={"bottom"}>{e => {
        var {
          onMouseEnter: l,
          onClick: m
        } = e, E = y(e, ["onMouseEnter", "onClick"]);
        return (0, r.jsxs)(o.P3F, b(g({}, E), {
          className: h.hoverableContainer,
          onClick: () => {
            null == m || m(), (0, u.B)(i, s.Z.HEADER_BAR)
          },
          onContextMenu: e => (0, a.jW)(e, () => Promise.all([n.e("79695"), n.e("70205"), n.e("57789"), n.e("55370")]).then(n.bind(n, 354741)).then(e => {
            let {
              default: n
            } = e;
            return e => (0, r.jsx)(n, b(g({}, e), {
              channel: t,
              selected: true
            }))
          }), {
            noBlurEvent: true
          }),
          onDoubleClick: e => e.stopPropagation(),
          onMouseEnter: () => {
            null == l || l(), f.default.track(_.rMx.GDM_EDIT_INTERACTED, {
              channel_id: t.id,
              action: "entry_point_hovered",
              location: s.Z.HEADER_BAR
            })
          },
          "aria-label": p.intl.string(p.t["5Q9+/P"]),
          children: [(0, r.jsx)(c.Z, {
            className: h.gdmIcon,
            "aria-hidden": true,
            channel: t,
            size: o.EFr.SIZE_20,
            facepileSizeOverride: o.EFr.SIZE_24,
            experimentLocation: "header_bar"
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: null != d ? d : ""
          }), (0, r.jsx)(o.vdY, {
            className: h.editIcon,
            size: "xs",
            color: "currentColor"
          })]
        }))
      }}</o.ua7>}{<v channel={t} />}</r.Fragment>
}
let T = Chunk73800.memo(I)