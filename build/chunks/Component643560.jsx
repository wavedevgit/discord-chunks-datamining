/** Chunk was on 91053 **/
/** chunk id: 643560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk726521 = require("./726521.js"),
  Chunk99325 = require("./99325.js"),
  Chunk683818 = require("./683818.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    entry: t,
    onSelect: f,
    closePopout: g,
    hideEditButton: m = false
  } = e, {
    isEntryAdmin: b,
    canEdit: _,
    canRemove: y
  } = (0, d.Z)(t), x = (0, s.Z)({
    id: t.guildId,
    label: u.intl.string(u.t["94lLD7"]),
    onSuccess: g
  });
  i.useEffect(() => {
    _ || y || null != x || (0, a.Zy)()
  });
  let v = () => {
    c.kx(t.channelId, t.guildId)
  };

  function j() {
    (0, a.Zy)(), null == g || g()
  }
  return (0, r.jsxs)(l.v2r, {
    navId: "guild-entry-context",
    onClose: j,
    "aria-label": u.intl.string(u.t.HpQykc),
    onSelect: f,
    children: [(0, r.jsxs)(l.kSQ, {
      children: [_ && !m ? (0, r.jsx)(l.sNh, {
        id: "update-entry",
        label: u.intl.string(u.t.XnuOvN),
        action: function() {
          (0, l.ZDy)(async () => {
            let {
              default: e
            } = await n.e("34191").then(n.bind(n, 303647));
            return n => (0, r.jsx)(e, p(h({}, n), {
              entry: t
            }))
          }), j()
        }
      }) : null, y ? (0, r.jsx)(l.sNh, {
        id: "remove-from-hub",
        label: u.intl.string(u.t.KUxYWH),
        action: function() {
          (0, l.h7j)(e => (0, r.jsx)(l.ConfirmModal, p(h({
            header: u.intl.string(u.t.KUxYWH),
            confirmText: u.intl.string(u.t.N86XcP),
            cancelText: u.intl.string(u.t["ETE/oC"]),
            onConfirm: v
          }, e), {
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              children: u.intl.format(u.t["/5y0uV"], {
                guildName: t.name
              })
            })
          }))), j()
        },
        color: "danger"
      }) : null, b ? null : (0, r.jsx)(l.sNh, {
        id: "report-server-listing",
        label: u.intl.string(u.t.Aen9eh),
        action: function() {
          null != t && ((0, o.sq)(t), j())
        },
        icon: l.U65,
        color: "danger"
      })]
    }), (0, r.jsx)(l.kSQ, {
      children: x
    })]
  })
}