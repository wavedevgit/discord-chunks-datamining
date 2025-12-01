/** Chunk was on web.js **/
/** chunk id: 955418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk698305 = require("./698305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391022 = require("./391022.js");

function h(e, t, n) {
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
      h(e, t, n[t])
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
let y = (0, Chunk131704.createChannelRecord)({
  id: "1",
  type: Chunk981631.d4z.DM
});

function O(e) {
  let {
    user: t,
    guildId: n,
    channelId: c,
    onClose: p,
    disableAutoFocus: h = false
  } = e, {
    newestAnalyticsLocation: E
  } = (0, a.ZP)(), {
    trackUserProfileAction: O
  } = (0, d.KZ)(), [v, S] = i.useState(""), [I, T] = i.useState((0, s.JM)(v)), A = i.useRef(false), C = i.useMemo(() => b(g({}, o.Ie.USER_PROFILE), {
    disableAutoFocus: h
  }), [h]);
  return (0, r.jsx)(l.ZP, {
    className: m.container,
    editorClassName: m.editor,
    type: C,
    placeholder: _.intl.formatToPlainString(_.t["0ZQw/X"], {
      name: u.ZP.getName(n, c, t)
    }),
    channel: y,
    textValue: v,
    richValue: I,
    onChange: (e, t, n) => {
      t !== v && (S(t), T(n))
    },
    focused: A.current,
    onFocus: () => {
      A.current = true
    },
    onBlur: () => {
      A.current = false
    },
    onSubmit: async e => {
      let {
        value: n
      } = e;
      try {
        return O({
          action: "SEND_DIRECT_MESSAGE"
        }), await (0, f.Z)({
          userId: t.id,
          content: n.trim(),
          openChannel: true,
          whenReady: true,
          location: E
        }), null == p || p(), {
          shouldClear: true,
          shouldRefocus: false
        }
      } catch (e) {
        return {
          shouldClear: false,
          shouldRefocus: false
        }
      }
    }
  })
}