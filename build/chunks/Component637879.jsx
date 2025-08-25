/** Chunk was on web.js **/
/** chunk id: 637879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js"),
  Chunk579612 = require("./579612.jsx"),
  Chunk315322 = require("./315322.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk493090 = require("./493090.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    navId: t,
    index: n,
    selected: r
  } = e;
  return {
    id: "".concat(t, "-").concat(n),
    role: "option",
    tabIndex: false,
    "aria-selected": r
  }
}

function v(e) {
  let {
    searchContext: t,
    navId: n,
    index: o,
    selected: l
  } = e, c = (0, i.e7)([s.Z, a.Z], () => {
    let e = s.Z.getChannelId();
    return a.Z.getChannel(e)
  });
  return null == c ? null : (0, r.jsx)(I, {
    searchContext: t,
    selectedChannel: c,
    navId: n,
    index: o,
    selected: l
  }, c.id)
}

function I(e) {
  let {
    searchContext: t,
    selectedChannel: n,
    navId: i,
    index: a,
    selected: s
  } = e, g = (0, c.nl)(n), b = (0, r.jsxs)("div", {
    className: m.channelNameContainer,
    children: [(0, r.jsx)(d.MC, {
      channel: n,
      className: m.channelNameIcon
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-primary",
      className: m.channelName,
      children: g
    })]
  }), v = () => {
    var e;
    (0, f.tA)({
      searchContext: t,
      searchAutocompleteSelectAction: _.ZW.CLICK
    });
    let r = p.dCx.FILTER_IN,
      i = u.ZP[r],
      o = (0, c.X3)(n),
      a = "".concat(null != (e = null == i ? true : i.key) ? e : r.toString(), " ").concat(o);
    l.S.dispatch(p.CkL.SET_SEARCH_QUERY, {
      query: a,
      anchor: 0,
      focus: 0,
      performSearch: false,
      replace: false
    })
  };
  return (0, r.jsxs)(o.P3F, y(E({
    className: m.item,
    onClick: v
  }, O({
    navId: i,
    index: a,
    selected: s
  })), {
    children: [(0, r.jsx)(d.MC, {
      channel: n,
      className: m.itemIcon
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-primary",
      className: m.itemText,
      children: h.intl.format(h.t["VGEH//"], {
        channelName: b
      })
    })]
  }))
}