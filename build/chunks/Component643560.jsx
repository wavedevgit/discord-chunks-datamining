/** Chunk was on 82124 **/
/** chunk id: 643560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk726521 = require("./726521.js"),
  Chunk99325 = require("./99325.js"),
  Chunk683818 = require("./683818.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    entry: t,
    onSelect: f,
    closePopout: h,
    hideEditButton: g = false
  } = e, {
    isEntryAdmin: m,
    canEdit: b,
    canRemove: y
  } = (0, d.Z)(t), v = (0, s.Z)({
    id: t.guildId,
    label: p.intl.string(p.t["94lLD7"]),
    onSuccess: h
  });
  i.useEffect(() => {
    b || y || null != v || (0, o.Zy)()
  });
  let O = () => {
    u.kx(t.channelId, t.guildId)
  };

  function j() {
    (0, o.Zy)(), null == h || h()
  }
  return (0, r.jsxs)(a.v2r, {
    navId: "guild-entry-context",
    onClose: j,
    "aria-label": p.intl.string(p.t.HpQykc),
    onSelect: f,
    children: [(0, r.jsxs)(a.kSQ, {
      children: [b && !g ? (0, r.jsx)(a.sNh, {
        id: "update-entry",
        label: p.intl.string(p.t.XnuOvN),
        action: function() {
          (0, a.ZDy)(async () => {
            let {
              default: e
            } = await n.e("34191").then(n.bind(n, 303647));
            return n => {
              var i, l;
              return (0, r.jsx)(e, (i = function(e) {
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
              }({}, n), l = l = {
                entry: t
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(l)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
              }), i))
            }
          }), j()
        }
      }) : null, y ? (0, r.jsx)(a.sNh, {
        id: "remove-from-hub",
        label: p.intl.string(p.t.KUxYWH),
        action: function() {
          (0, l.Z)({
            title: p.intl.string(p.t.KUxYWH),
            subtitle: p.intl.format(p.t["/5y0uV"], {
              guildName: t.name
            }),
            confirmText: p.intl.string(p.t.N86XcP),
            onConfirm: O
          }), j()
        },
        color: "danger"
      }) : null, m ? null : (0, r.jsx)(a.sNh, {
        id: "report-server-listing",
        label: p.intl.string(p.t.Aen9eh),
        action: function() {
          null != t && ((0, c.sq)(t), j())
        },
        icon: a.U65,
        color: "danger"
      })]
    }), (0, r.jsx)(a.kSQ, {
      children: v
    })]
  })
}