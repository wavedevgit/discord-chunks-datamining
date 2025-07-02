/** Chunk was on 85831 **/
t.d(n, {
  r: () => g
});
var r = t(255367),
  l = t(73800),
  o = t(481060),
  i = t(239091),
  c = t(794295),
  a = t(782568),
  u = t(364640),
  s = t(124072),
  d = t(198620),
  f = t(823379),
  h = t(312539),
  b = t(606629);

function g(e) {
  let {
    type: n,
    value: t,
    children: l
  } = e;
  switch (n) {
    case "normal":
      return (0, r.jsx)(c.Z, {
        title: t.title,
        href: t.url,
        children: l
      });
    case "mention":
      switch (t.type) {
        case "channel":
        case "message":
          let {
            value: {
              guild_id: o,
              channel_id: i
            }
          } = t, a = "message_id" in t.value ? t.value.message_id : void 0;
          return (0, r.jsx)(h.d, {
            channelId: i,
            guildId: o,
            messageId: a
          });
        case "attachment":
          let {
            value: {
              domain: u,
              ephemeral: s,
              channel_id: d,
              attachment_id: b,
              name: g
            }
          } = t;
          return (0, r.jsx)(_, {
            domain: u,
            ephemeral: s,
            channelId: d,
            attachmentId: b,
            name: g
          });
        default:
          (0, f.vE)(t)
      }
      break;
    default:
      (0, f.vE)(n)
  }
}

function _(e) {
  let {
    domain: n,
    ephemeral: c,
    channelId: f,
    attachmentId: h,
    name: g
  } = e, _ = "https://".concat(n, "/").concat(c ? "ephemeral-attachments" : "attachments", "/").concat(f, "/").concat(h, "/").concat(g), p = l.useCallback(async () => {
    let e = await (0, d.B_)(_);
    u.Z.trackLinkClicked(e), (0, a.Z)(e)
  }, [_]), y = l.useCallback(e => {
    (0, i.jW)(e, async () => {
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
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[n] = r
            })
          }
          return e
        }({}, n), l = l = {
          attachmentUrl: _,
          attachmentName: g
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
  }, [g, _]);
  return (0, r.jsxs)(s.Z, {
    role: "link",
    href: _,
    onClick: p,
    onContextMenu: y,
    className: "attachmentLink",
    children: [(0, r.jsx)(o.Ujz, {
      size: "xs",
      className: b.icon,
      color: "currentColor"
    }), g]
  })
}