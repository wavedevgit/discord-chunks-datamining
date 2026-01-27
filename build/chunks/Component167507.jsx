/** Chunk was on 72756 **/
/** chunk id: 167507, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  N: () => f
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

function f(e) {
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
          } = t, o = "message_id" in t.value ? t.value.message_id : true;
          return (0, r.jsx)(p.A, {
            channelId: a,
            guildId: c,
            messageId: o
          });
        case "attachment":
          let {
            value: {
              domain: s,
              ephemeral: u,
              channel_id: d,
              attachment_id: j,
              name: f
            }
          } = t;
          return (0, r.jsx)(m, {
            domain: s,
            ephemeral: u,
            channelId: d,
            attachmentId: j,
            name: f
          });
        default:
          (0, h.xb)(t)
      }
      break;
    default:
      (0, h.xb)(n)
  }
}

function m(e) {
  let {
    domain: n,
    ephemeral: i,
    channelId: h,
    attachmentId: p,
    name: f
  } = e, m = "https://".concat(n, "/").concat(i ? "ephemeral-attachments" : "attachments", "/").concat(h, "/").concat(p, "/").concat(f), y = l.useCallback(async () => {
    let e = await (0, d.AN)(m);
    s.A.trackLinkClicked(e), (0, o.A)(e)
  }, [m]), b = l.useCallback(e => {
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
          attachmentUrl: m,
          attachmentName: f
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
  }, [f, m]);
  return (0, r.jsxs)(u.A, {
    role: "link",
    href: m,
    onClick: y,
    onContextMenu: b,
    className: "attachmentLink",
    children: [(0, r.jsx)(c.PtA, {
      size: "xs",
      className: j.Kk,
      color: "currentColor"
    }), f]
  })
}