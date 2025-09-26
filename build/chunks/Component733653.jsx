/** Chunk was on 85831 **/
/** chunk id: 733653, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  r: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk794295 = require("./794295.jsx"),
  Chunk782568 = require("./782568.js"),
  Chunk364640 = require("./364640.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk198620 = require("./198620.js"),
  Chunk823379 = require("./823379.js"),
  Chunk312539 = require("./312539.jsx"),
  Chunk861537 = require("./861537.js");

function f(e) {
  let {
    type: n,
    value: t,
    children: l
  } = e;
  switch (n) {
    case "normal":
      return (0, r.jsx)(i.Z, {
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
          return (0, r.jsx)(j.d, {
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
              attachment_id: m,
              name: f
            }
          } = t;
          return (0, r.jsx)(p, {
            domain: s,
            ephemeral: u,
            channelId: d,
            attachmentId: m,
            name: f
          });
        default:
          (0, h.vE)(t)
      }
      break;
    default:
      (0, h.vE)(n)
  }
}

function p(e) {
  let {
    domain: n,
    ephemeral: i,
    channelId: h,
    attachmentId: j,
    name: f
  } = e, p = "https://".concat(n, "/").concat(i ? "ephemeral-attachments" : "attachments", "/").concat(h, "/").concat(j, "/").concat(f), x = l.useCallback(async () => {
    let e = await (0, d.B_)(p);
    s.Z.trackLinkClicked(e), (0, o.Z)(e)
  }, [p]), v = l.useCallback(e => {
    (0, a.jW)(e, async () => {
      let {
        default: e
      } = await t.e("98466").then(t.bind(t, 151578));
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
          attachmentUrl: p,
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
  }, [f, p]);
  return (0, r.jsxs)(u.Z, {
    role: "link",
    href: p,
    onClick: x,
    onContextMenu: v,
    className: "attachmentLink",
    children: [(0, r.jsx)(c.Ujz, {
      size: "xs",
      className: m.icon,
      color: "currentColor"
    }), f]
  })
}