/** Chunk was on 51333 **/
/** chunk id: 866834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk494415 = require("./494415.js"),
  Chunk937889 = require("./937889.js"),
  Chunk28005 = require("./28005.js");

function m(e) {
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

function f(e) {
  var {
    icon: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["icon"]);
  switch (t) {
    case "image":
      return (0, r.jsx)(o.XBm, m({}, n));
    case "video":
      return (0, r.jsx)(o.Odl, m({}, n));
    case "audio":
      return (0, r.jsx)(o.RZG, m({}, n));
    case "attachment":
      return (0, r.jsx)(o.Ujz, m({}, n));
    case "link":
      return (0, r.jsx)(o.xPt, m({}, n));
    case "sticker":
      return (0, r.jsx)(o.SlE, m({}, n));
    case "call-active":
      return (0, r.jsx)(o.Csw, m({}, n));
    case "call-ended":
      return (0, r.jsx)(o.gkL, m({}, n))
  }
}
let p = Chunk473749.memo(function(e) {
    let {
      message: t
    } = e;
    return (0, c.ZP)(t, {
      formatInline: true,
      noStyleAndInteraction: true
    }).content
  }),
  g = Chunk473749.memo(function(e) {
    let {
      markup: t,
      channelId: n
    } = e;
    return (0, c.d6)(s.Z.parseInlineReply, {
      content: t,
      channelId: n
    })
  });

function y(e) {
  let t, {
      channel: n,
      message: i
    } = e,
    l = (0, u.sY)(i, n);
  if (null == l) return null;
  let {
    authorLabel: o,
    color: s,
    trailingIcon: c
  } = l;
  return "text" === l.type ? t = l.text : "markup" === l.type ? t = (0, r.jsx)(g, {
    markup: l.markup,
    channelId: i.channel_id
  }) : "message" === l.type && (t = (0, r.jsx)(p, {
    message: l.message
  })), (0, r.jsxs)("div", {
    className: a()(d.messagePreviewLine, {
      [d.colorTextFeedbackPositive]: "text-feedback-positive" === s
    }),
    children: [(0, r.jsxs)("span", {
      className: d.messageContent,
      children: [null != o && "".concat(o, ": "), t]
    }), null != c && (0, r.jsx)(f, {
      icon: c,
      size: "xs",
      color: "currentColor",
      className: d.messageContentTrailingIcon
    })]
  })
}