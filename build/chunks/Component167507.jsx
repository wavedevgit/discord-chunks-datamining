/** Chunk was on 72756 **/
/** chunk id: 167507, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  N: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk9578 = require("./9578.jsx"),
  Chunk975807 = require("./975807.js"),
  Chunk235393 = require("./235393.js"),
  Chunk332173 = require("./332173.jsx"),
  Chunk202803 = require("./202803.js"),
  Chunk403362 = require("./403362.js"),
  Chunk62849 = require("./62849.jsx"),
  Chunk800344 = require("./800344.js");

function p(e) {
  let {
    type: n,
    value: t,
    children: l
  } = e;
  switch (n) {
    case "normal":
      return (0, r.jsx)(i.A, {
        title: t.title,
        href: t.url,
        children: (0, r.jsx)("span", {
          children: l
        })
      });
    case "mention":
      switch (t.type) {
        case "channel":
        case "message":
          let {
            value: {
              guild_id: c,
              channel_id: a
            }
          } = t, s = "message_id" in t.value ? t.value.message_id : true;
          return (0, r.jsx)(m.A, {
            channelId: a,
            guildId: c,
            messageId: s
          });
        case "attachment":
          let {
            value: {
              domain: o,
              ephemeral: u,
              channel_id: d,
              attachment_id: j,
              name: p
            }
          } = t;
          return (0, r.jsx)(f, {
            domain: o,
            ephemeral: u,
            channelId: d,
            attachmentId: j,
            name: p
          });
        default:
          (0, h.xb)(t)
      }
      break;
    default:
      (0, h.xb)(n)
  }
}

function f(e) {
  let {
    domain: n,
    ephemeral: i,
    channelId: h,
    attachmentId: m,
    name: p
  } = e, f = "https://".concat(n, "/").concat(i ? "ephemeral-attachments" : "attachments", "/").concat(h, "/").concat(m, "/").concat(p), g = l.useCallback(async () => {
    let e = await (0, d.AN)(f);
    o.A.trackLinkClicked(e), (0, s.A)(e)
  }, [f]), x = l.useCallback(e => {
    (0, a.L3)(e, async () => {
      let {
        default: e
      } = await t.e("62529").then(t.bind(t, 740024));
      return n => {
        var t, l;
        return (0, r.jsx)(e, (t = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.forEach(function(n) {
              var r;
              r = t[n], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = r
            })
          }
          return e
        }({}, n), l = l = {
          attachmentUrl: f,
          attachmentName: p
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
        }), t))
      }
    })
  }, [p, f]);
  return (0, r.jsxs)(u.A, {
    role: "link",
    href: f,
    onClick: g,
    onContextMenu: x,
    className: "attachmentLink",
    children: [(0, r.jsx)(c.PtA, {
      size: "xs",
      className: j.Kk,
      color: "currentColor"
    }), p]
  })
}